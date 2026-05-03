// apidrift/tests/validation/drift-detector.ts
// Functional drift detection implementation

import { DriftScenario } from "./scenario-loader";

export interface DriftDetectionResult {
  driftFound: boolean;
  severity: string;
  fields: Array<{
    field: string;
    diagnosis: string;
    userImpact?: string;
  }>;
}

/**
 * Compare two objects and detect schema differences
 */
function compareSchemas(
  expected: any,
  actual: any,
  path: string = "",
): Array<{ field: string; diagnosis: string; userImpact: string }> {
  const drifts: Array<{
    field: string;
    diagnosis: string;
    userImpact: string;
  }> = [];

  if (!expected || !actual) {
    return drifts;
  }

  // Get all keys from both objects
  const expectedKeys = new Set(Object.keys(expected.properties || {}));
  const actualKeys = new Set(Object.keys(actual));

  // Check for missing fields (in expected but not in actual)
  for (const key of expectedKeys) {
    const fieldPath = path ? `${path}.${key}` : key;

    if (!actualKeys.has(key)) {
      drifts.push({
        field: fieldPath,
        diagnosis: "missing_field",
        userImpact: `Field '${fieldPath}' is missing from backend response. Frontend expects this field and will receive undefined.`,
      });
    } else {
      // Check for type mismatches
      const expectedType = expected.properties[key].type;
      const actualValue = actual[key];
      const actualType = Array.isArray(actualValue)
        ? "array"
        : typeof actualValue;

      if (expectedType && expectedType !== actualType) {
        drifts.push({
          field: fieldPath,
          diagnosis: "type_mismatch",
          userImpact: `Field '${fieldPath}' type mismatch. Expected ${expectedType}, got ${actualType}. May cause runtime errors.`,
        });
      }

      // Check for enum mismatches
      if (expected.properties[key].enum && typeof actualValue === "string") {
        const enumValues = expected.properties[key].enum;
        if (!enumValues.includes(actualValue)) {
          drifts.push({
            field: fieldPath,
            diagnosis: "enum_drift",
            userImpact: `Field '${fieldPath}' value '${actualValue}' not in expected enum [${enumValues.join(", ")}]. UI logic may fail.`,
          });
        }
      }

      // Recursively check nested objects
      if (expectedType === "object" && actualType === "object") {
        const nestedDrifts = compareSchemas(
          expected.properties[key],
          actualValue,
          fieldPath,
        );
        drifts.push(...nestedDrifts);
      }
    }
  }

  // Check for added fields (in actual but not in expected)
  for (const key of actualKeys) {
    const fieldPath = path ? `${path}.${key}` : key;

    if (!expectedKeys.has(key)) {
      drifts.push({
        field: fieldPath,
        diagnosis: "optional_addition",
        userImpact: `New field '${fieldPath}' added to backend. Not documented in spec. May be useful for frontend.`,
      });
    }
  }

  return drifts;
}

/**
 * Detect field renames by comparing field names
 */
function detectFieldRenames(
  expected: any,
  actual: any,
): Array<{ field: string; diagnosis: string; userImpact: string }> {
  const renames: Array<{
    field: string;
    diagnosis: string;
    userImpact: string;
  }> = [];

  if (!expected?.properties || !actual) {
    return renames;
  }

  const expectedKeys = Object.keys(expected.properties);
  const actualKeys = Object.keys(actual);

  // Simple heuristic: if a field is missing but a similar named field exists
  for (const expKey of expectedKeys) {
    if (!actualKeys.includes(expKey)) {
      // Check for camelCase to snake_case conversion
      const snakeCase = expKey.replace(/([A-Z])/g, "_$1").toLowerCase();
      const camelCase = expKey.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );

      if (actualKeys.includes(snakeCase) || actualKeys.includes(camelCase)) {
        renames.push({
          field: expKey,
          diagnosis: "field_rename",
          userImpact: `Field '${expKey}' appears to be renamed. Frontend will receive undefined for this field.`,
        });
      }
    }
  }

  return renames;
}

/**
 * Calculate severity based on drift types
 */
function calculateSeverity(drifts: Array<{ diagnosis: string }>): string {
  if (drifts.length === 0) return "none";

  const criticalTypes = ["auth_drift", "endpoint_missing", "unit_change"];
  const highTypes = [
    "field_rename",
    "type_mismatch",
    "enum_drift",
    "missing_field",
    "method_change",
  ];
  const mediumTypes = ["nested_drift", "array_item_drift", "status_code_drift"];

  for (const drift of drifts) {
    if (criticalTypes.includes(drift.diagnosis)) return "critical";
  }

  for (const drift of drifts) {
    if (highTypes.includes(drift.diagnosis)) return "high";
  }

  for (const drift of drifts) {
    if (mediumTypes.includes(drift.diagnosis)) return "medium";
  }

  return "low";
}

/**
 * Parse backend implementation to extract response structure
 */
function parseBackendResponse(implementation: string): any {
  try {
    // Extract JSON from res.json() call
    const jsonMatch = implementation.match(
      /res\.json\s*\(\s*({[\s\S]*?})\s*\)/,
    );
    if (jsonMatch) {
      // Clean up the JSON string
      const jsonStr = jsonMatch[1]
        .replace(/\/\/.*$/gm, "") // Remove comments
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // Quote keys
        .replace(/:\s*'([^']*)'/g, ': "$1"'); // Convert single quotes to double

      return JSON.parse(jsonStr);
    }
  } catch (e) {
    // If parsing fails, return empty object
  }

  return {};
}

/**
 * Main drift detection function
 */
export async function detectDrift(
  scenario: DriftScenario,
): Promise<DriftDetectionResult> {
  const drifts: Array<{
    field: string;
    diagnosis: string;
    userImpact: string;
  }> = [];

  // Parse backend response
  const actualResponse = parseBackendResponse(scenario.backend.implementation);

  // Compare schemas
  const schemaDrifts = compareSchemas(scenario.openapi.schema, actualResponse);
  drifts.push(...schemaDrifts);

  // Detect field renames
  const renameDrifts = detectFieldRenames(
    scenario.openapi.schema,
    actualResponse,
  );
  drifts.push(...renameDrifts);

  // Check for specific drift types based on scenario
  if (scenario.driftType === "unit_change") {
    // Look for field name changes that suggest unit conversion
    const expectedKeys = Object.keys(scenario.openapi.schema.properties || {});
    const actualKeys = Object.keys(actualResponse);

    for (const expKey of expectedKeys) {
      for (const actKey of actualKeys) {
        if (
          expKey.toLowerCase().includes("total") &&
          actKey.toLowerCase().includes("total")
        ) {
          if (expKey !== actKey) {
            const existingDrift = drifts.find((d) => d.field === expKey);
            if (existingDrift) {
              existingDrift.diagnosis = "field_rename + unit_change";
              existingDrift.userImpact = `Field '${expKey}' renamed to '${actKey}' with unit change. Frontend displays incorrect values.`;
            }
          }
        }
      }
    }
  }

  // Check for authentication drift
  if (scenario.driftType === "auth_drift") {
    drifts.push({
      field: "authentication",
      diagnosis: "auth_drift",
      userImpact:
        "Authentication scheme changed. All authenticated requests will fail.",
    });
  }

  // Check for endpoint missing
  if (scenario.driftType === "endpoint_missing") {
    drifts.push({
      field: "endpoint",
      diagnosis: "endpoint_missing",
      userImpact: "Endpoint no longer exists. All requests will return 404.",
    });
  }

  // Check for HTTP method change
  if (scenario.driftType === "method_change") {
    drifts.push({
      field: "httpMethod",
      diagnosis: "method_change",
      userImpact: "HTTP method changed. Requests will fail with 404 or 405.",
    });
  }

  // Check for status code drift
  if (scenario.driftType === "status_code_drift") {
    drifts.push({
      field: "responseCode",
      diagnosis: "status_code_drift",
      userImpact:
        "Response status code changed. Success responses may be treated as errors.",
    });
  }

  // Calculate severity
  const severity = calculateSeverity(drifts);

  return {
    driftFound: drifts.length > 0,
    severity,
    fields: drifts,
  };
}

// Made with Bob
