// apidrift/tests/validation/scenario-loader.ts
// Loads drift scenarios for validation testing

import fs from "fs";
import path from "path";

export interface DriftScenario {
  id: string;
  name: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  driftType: string;
  openapi: {
    path: string;
    endpoint: string;
    method: string;
    schema: any;
  };
  backend: {
    path: string;
    implementation: string;
  };
  frontend: {
    path: string;
    usage: string;
  };
  expectedDetection: {
    driftFound: boolean;
    severity: string;
    fields: Array<{
      field: string;
      diagnosis: string;
      userImpact: string;
    }>;
  };
}

const SCENARIOS_DIR = path.join(__dirname, "../drift-scenarios");

/**
 * Load a specific drift scenario by ID
 */
export async function loadScenario(scenarioId: string): Promise<DriftScenario> {
  const scenarioPath = path.join(SCENARIOS_DIR, `${scenarioId}.json`);

  if (!fs.existsSync(scenarioPath)) {
    throw new Error(`Scenario ${scenarioId} not found at ${scenarioPath}`);
  }

  const content = fs.readFileSync(scenarioPath, "utf-8");
  return JSON.parse(content);
}

/**
 * Load all drift scenarios
 */
export async function loadAllScenarios(): Promise<DriftScenario[]> {
  if (!fs.existsSync(SCENARIOS_DIR)) {
    throw new Error(`Scenarios directory not found: ${SCENARIOS_DIR}`);
  }

  const files = fs
    .readdirSync(SCENARIOS_DIR)
    .filter((f) => f.endsWith(".json"));

  const scenarios: DriftScenario[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(SCENARIOS_DIR, file), "utf-8");
    scenarios.push(JSON.parse(content));
  }

  return scenarios.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Load scenarios by severity level
 */
export async function loadScenariosBySeverity(
  severity: "low" | "medium" | "high" | "critical",
): Promise<DriftScenario[]> {
  const allScenarios = await loadAllScenarios();
  return allScenarios.filter((s) => s.severity === severity);
}

/**
 * Load scenarios by drift type
 */
export async function loadScenariosByType(
  driftType: string,
): Promise<DriftScenario[]> {
  const allScenarios = await loadAllScenarios();
  return allScenarios.filter((s) => s.driftType === driftType);
}

/**
 * Create a test scenario from template
 */
export function createScenario(
  id: string,
  config: Partial<DriftScenario>,
): DriftScenario {
  return {
    id,
    name: config.name || `Scenario ${id}`,
    description: config.description || "",
    severity: config.severity || "medium",
    driftType: config.driftType || "unknown",
    openapi: config.openapi || {
      path: "",
      endpoint: "",
      method: "GET",
      schema: {},
    },
    backend: config.backend || {
      path: "",
      implementation: "",
    },
    frontend: config.frontend || {
      path: "",
      usage: "",
    },
    expectedDetection: config.expectedDetection || {
      driftFound: true,
      severity: "medium",
      fields: [],
    },
  };
}

/**
 * Save a scenario to disk
 */
export function saveScenario(scenario: DriftScenario): void {
  if (!fs.existsSync(SCENARIOS_DIR)) {
    fs.mkdirSync(SCENARIOS_DIR, { recursive: true });
  }

  const scenarioPath = path.join(SCENARIOS_DIR, `${scenario.id}.json`);
  fs.writeFileSync(scenarioPath, JSON.stringify(scenario, null, 2));
}

/**
 * Generate scenario manifest
 */
export async function generateManifest(): Promise<void> {
  const scenarios = await loadAllScenarios();

  const manifest = {
    totalScenarios: scenarios.length,
    bySeverity: {
      low: scenarios.filter((s) => s.severity === "low").length,
      medium: scenarios.filter((s) => s.severity === "medium").length,
      high: scenarios.filter((s) => s.severity === "high").length,
      critical: scenarios.filter((s) => s.severity === "critical").length,
    },
    byType: scenarios.reduce(
      (acc, s) => {
        acc[s.driftType] = (acc[s.driftType] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
    scenarios: scenarios.map((s) => ({
      id: s.id,
      name: s.name,
      severity: s.severity,
      driftType: s.driftType,
    })),
  };

  const manifestPath = path.join(SCENARIOS_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`✓ Generated manifest with ${scenarios.length} scenarios`);
}

// Made with Bob
