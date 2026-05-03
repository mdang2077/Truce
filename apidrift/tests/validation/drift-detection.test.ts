// apidrift/tests/validation/drift-detection.test.ts
// Automated tests for drift detection accuracy

import { loadScenario, loadAllScenarios } from "./scenario-loader";
import { detectDrift } from "./drift-detector";

describe("APIDrift Detection Accuracy", () => {
  test("DS-001: Detects field rename", async () => {
    const scenario = await loadScenario("DS-001");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("field_rename"),
        }),
      ]),
    );
  });

  test("DS-002: Detects type change", async () => {
    const scenario = await loadScenario("DS-002");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("type_mismatch"),
        }),
      ]),
    );
  });

  test("DS-003: Detects unit change (dollars to cents)", async () => {
    const scenario = await loadScenario("DS-003");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("critical");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("unit_change"),
          userImpact: expect.stringContaining("incorrect"),
        }),
      ]),
    );
  });

  test("DS-004: Detects enum case change", async () => {
    const scenario = await loadScenario("DS-004");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("enum_drift"),
        }),
      ]),
    );
  });

  test("DS-005: Detects field addition (low severity)", async () => {
    const scenario = await loadScenario("DS-005");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("low");
  });

  test("DS-006: Detects field removal", async () => {
    const scenario = await loadScenario("DS-006");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("missing_field"),
        }),
      ]),
    );
  });

  test("DS-007: Detects nested object changes", async () => {
    const scenario = await loadScenario("DS-007");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("medium");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("nested_drift"),
        }),
      ]),
    );
  });

  test("DS-008: Detects array item schema changes", async () => {
    const scenario = await loadScenario("DS-008");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("medium");
  });

  test("DS-009: Detects authentication changes", async () => {
    const scenario = await loadScenario("DS-009");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("critical");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("auth_drift"),
        }),
      ]),
    );
  });

  test("DS-010: Detects response code changes", async () => {
    const scenario = await loadScenario("DS-010");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("medium");
  });

  test("DS-011: Detects endpoint rename/removal", async () => {
    const scenario = await loadScenario("DS-011");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("critical");
    expect(result.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          diagnosis: expect.stringContaining("endpoint_missing"),
        }),
      ]),
    );
  });

  test("DS-012: Detects HTTP method changes", async () => {
    const scenario = await loadScenario("DS-012");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
  });
});

describe("APIDrift Accuracy - Edge Cases", () => {
  test("Should NOT flag intentional API versioning", async () => {
    const scenario = {
      id: "EC-001",
      openapi: { endpoint: "/api/v2/orders", method: "POST" },
      backend: { path: "routes/v2/orders.ts" },
      frontend: { path: "api-clients/v2/orderClient.ts" },
      expectedDetection: { driftFound: false, severity: "none", fields: [] },
    };

    const result = await detectDrift(scenario);
    expect(result.driftFound).toBe(false);
  });

  test("Should NOT flag optional fields added to backend", async () => {
    const scenario = {
      id: "EC-002",
      driftType: "optional_field_addition",
      expectedDetection: {
        driftFound: true,
        severity: "low",
        fields: [{ field: "newOptionalField", diagnosis: "optional_addition" }],
      },
    };

    const result = await detectDrift(scenario);
    expect(result.severity).not.toBe("critical");
    expect(result.severity).toBe("low");
  });

  test("Should flag breaking changes even with backward compatibility", async () => {
    const scenario = {
      id: "EC-003",
      driftType: "breaking_with_fallback",
      expectedDetection: {
        driftFound: true,
        severity: "high",
        fields: [{ field: "deprecatedField", diagnosis: "breaking_change" }],
      },
    };

    const result = await detectDrift(scenario);
    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
  });

  test("Should handle null vs undefined differences", async () => {
    const scenario = {
      id: "EC-004",
      driftType: "null_undefined_drift",
      expectedDetection: {
        driftFound: true,
        severity: "medium",
        fields: [{ field: "nullableField", diagnosis: "nullability_change" }],
      },
    };

    const result = await detectDrift(scenario);
    expect(result.driftFound).toBe(true);
  });
});

describe("APIDrift Performance", () => {
  test("Should scan single endpoint in < 1 second", async () => {
    const scenario = await loadScenario("DS-001");
    const startTime = Date.now();

    await detectDrift(scenario);

    const duration = Date.now() - startTime;
    expect(duration).toBeLessThan(1000);
  });

  test("Should scan all scenarios in < 30 seconds", async () => {
    const scenarios = await loadAllScenarios();
    const startTime = Date.now();

    for (const scenario of scenarios) {
      await detectDrift(scenario);
    }

    const duration = Date.now() - startTime;
    expect(duration).toBeLessThan(30000);
  }, 35000); // 35 second timeout
});

// Made with Bob
