// apidrift/tests/validation/run-validation.ts
// Main script to run complete validation suite

import * as fs from "fs";
import * as path from "path";
import { loadAllScenarios, DriftScenario } from "./scenario-loader";
import {
  calculateAccuracy,
  generateReport,
  exportResultsJSON,
  meetsThresholds,
  TestResult,
} from "./accuracy-metrics";
import { detectDrift } from "./drift-detector";

/**
 * Run validation on all scenarios
 */
async function runValidation(): Promise<void> {
  console.log("═══════════════════════════════════════════════════════");
  console.log("     APIDrift Production Validation Suite             ");
  console.log("═══════════════════════════════════════════════════════\n");

  try {
    // Load all test scenarios
    console.log("📂 Loading test scenarios...");
    const scenarios = await loadAllScenarios();
    console.log(`✓ Loaded ${scenarios.length} scenarios\n`);

    // Run detection on each scenario
    console.log("🔍 Running drift detection...");
    const results: TestResult[] = [];

    for (const scenario of scenarios) {
      const startTime = Date.now();

      try {
        const detection = await detectDrift(scenario);
        const executionTime = Date.now() - startTime;

        results.push({
          scenarioId: scenario.id,
          expectedDrift: scenario.expectedDetection.driftFound,
          detectedDrift: detection.driftFound,
          expectedSeverity: scenario.expectedDetection.severity,
          detectedSeverity: detection.severity,
          expectedFields: scenario.expectedDetection.fields.map((f) => f.field),
          detectedFields: detection.fields.map((f: any) => f.field),
          executionTimeMs: executionTime,
        });

        console.log(
          `  ✓ ${scenario.id}: ${scenario.name} (${executionTime}ms)`,
        );
      } catch (error) {
        console.error(`  ✗ ${scenario.id}: Error - ${error}`);

        // Record as failed test
        results.push({
          scenarioId: scenario.id,
          expectedDrift: scenario.expectedDetection.driftFound,
          detectedDrift: false,
          expectedSeverity: scenario.expectedDetection.severity,
          detectedSeverity: "none",
          expectedFields: scenario.expectedDetection.fields.map((f) => f.field),
          detectedFields: [],
          executionTimeMs: Date.now() - startTime,
        });
      }
    }

    console.log("\n✓ Detection complete\n");

    // Calculate accuracy metrics
    console.log("📊 Calculating accuracy metrics...");
    const metrics = calculateAccuracy(results);
    console.log("✓ Metrics calculated\n");

    // Generate reports
    console.log("📝 Generating reports...");

    const textReport = generateReport(results, metrics);
    const jsonReport = exportResultsJSON(results, metrics);

    // Save reports
    const reportsDir = path.join(__dirname, "../../validation-reports");
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const textPath = path.join(
      reportsDir,
      `validation-report-${timestamp}.txt`,
    );
    const jsonPath = path.join(
      reportsDir,
      `validation-report-${timestamp}.json`,
    );

    fs.writeFileSync(textPath, textReport);
    fs.writeFileSync(jsonPath, jsonReport);

    console.log(`✓ Text report saved: ${textPath}`);
    console.log(`✓ JSON report saved: ${jsonPath}\n`);

    // Print report to console
    console.log(textReport);

    // Check thresholds
    console.log("\n🎯 Checking accuracy thresholds...");
    const thresholdCheck = meetsThresholds(metrics);

    if (thresholdCheck.passed) {
      console.log("✓ All accuracy thresholds met!\n");
      process.exit(0);
    } else {
      console.log("✗ Some thresholds not met:\n");
      thresholdCheck.failures.forEach((failure) => {
        console.log(`  - ${failure}`);
      });
      console.log("");
      process.exit(1);
    }
  } catch (error) {
    console.error("\n✗ Validation failed:", error);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  runValidation().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

export { runValidation };

// Made with Bob
