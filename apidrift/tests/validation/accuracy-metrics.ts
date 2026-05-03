// apidrift/tests/validation/accuracy-metrics.ts
// Calculate accuracy metrics for drift detection

export interface TestResult {
  scenarioId: string;
  expectedDrift: boolean;
  detectedDrift: boolean;
  expectedSeverity: string;
  detectedSeverity: string;
  expectedFields: string[];
  detectedFields: string[];
  executionTimeMs: number;
}

export interface AccuracyMetrics {
  precision: string;
  recall: string;
  f1Score: string;
  severityAccuracy: string;
  fieldAccuracy: string;
  averageExecutionTime: string;
  truePositives: number;
  falsePositives: number;
  trueNegatives: number;
  falseNegatives: number;
  totalTests: number;
}

/**
 * Calculate comprehensive accuracy metrics from test results
 */
export function calculateAccuracy(results: TestResult[]): AccuracyMetrics {
  let truePositives = 0;
  let falsePositives = 0;
  let trueNegatives = 0;
  let falseNegatives = 0;

  let severityMatches = 0;
  let fieldMatches = 0;
  let totalFields = 0;
  let totalExecutionTime = 0;

  for (const result of results) {
    // Detection accuracy (drift vs no drift)
    if (result.expectedDrift && result.detectedDrift) {
      truePositives++;
    } else if (!result.expectedDrift && result.detectedDrift) {
      falsePositives++;
    } else if (!result.expectedDrift && !result.detectedDrift) {
      trueNegatives++;
    } else if (result.expectedDrift && !result.detectedDrift) {
      falseNegatives++;
    }

    // Severity accuracy (only for detected drifts)
    if (
      result.detectedDrift &&
      result.expectedSeverity === result.detectedSeverity
    ) {
      severityMatches++;
    }

    // Field-level accuracy
    const detectedSet = new Set(result.detectedFields);
    const expectedSet = new Set(result.expectedFields);
    const intersection = new Set(
      [...expectedSet].filter((x) => detectedSet.has(x)),
    );

    fieldMatches += intersection.size;
    totalFields += expectedSet.size;

    // Performance tracking
    totalExecutionTime += result.executionTimeMs;
  }

  // Calculate metrics
  const precision = truePositives / (truePositives + falsePositives) || 0;
  const recall = truePositives / (truePositives + falseNegatives) || 0;
  const f1Score = (2 * (precision * recall)) / (precision + recall) || 0;
  const severityAccuracy =
    severityMatches / results.filter((r) => r.detectedDrift).length || 0;
  const fieldAccuracy = fieldMatches / totalFields || 0;
  const averageExecutionTime = totalExecutionTime / results.length || 0;

  return {
    precision: (precision * 100).toFixed(2) + "%",
    recall: (recall * 100).toFixed(2) + "%",
    f1Score: (f1Score * 100).toFixed(2) + "%",
    severityAccuracy: (severityAccuracy * 100).toFixed(2) + "%",
    fieldAccuracy: (fieldAccuracy * 100).toFixed(2) + "%",
    averageExecutionTime: averageExecutionTime.toFixed(2) + "ms",
    truePositives,
    falsePositives,
    trueNegatives,
    falseNegatives,
    totalTests: results.length,
  };
}

/**
 * Generate a detailed accuracy report
 */
export function generateReport(
  results: TestResult[],
  metrics: AccuracyMetrics,
): string {
  const lines: string[] = [];

  lines.push("═══════════════════════════════════════════════════════");
  lines.push("           APIDrift Detection Accuracy Report          ");
  lines.push("═══════════════════════════════════════════════════════");
  lines.push("");

  // Overall metrics
  lines.push("OVERALL METRICS:");
  lines.push(`  Total Tests:           ${metrics.totalTests}`);
  lines.push(`  Precision:             ${metrics.precision}`);
  lines.push(`  Recall:                ${metrics.recall}`);
  lines.push(`  F1 Score:              ${metrics.f1Score}`);
  lines.push(`  Severity Accuracy:     ${metrics.severityAccuracy}`);
  lines.push(`  Field Accuracy:        ${metrics.fieldAccuracy}`);
  lines.push(`  Avg Execution Time:    ${metrics.averageExecutionTime}`);
  lines.push("");

  // Confusion matrix
  lines.push("CONFUSION MATRIX:");
  lines.push(`  True Positives:        ${metrics.truePositives}`);
  lines.push(`  False Positives:       ${metrics.falsePositives}`);
  lines.push(`  True Negatives:        ${metrics.trueNegatives}`);
  lines.push(`  False Negatives:       ${metrics.falseNegatives}`);
  lines.push("");

  // Detailed results
  lines.push("DETAILED RESULTS:");
  lines.push("─────────────────────────────────────────────────────");

  for (const result of results) {
    const status =
      result.expectedDrift === result.detectedDrift &&
      (!result.detectedDrift ||
        result.expectedSeverity === result.detectedSeverity)
        ? "✓ PASS"
        : "✗ FAIL";

    lines.push(`  ${result.scenarioId}: ${status}`);
    lines.push(
      `    Expected: ${result.expectedDrift ? "Drift" : "No Drift"} (${result.expectedSeverity})`,
    );
    lines.push(
      `    Detected: ${result.detectedDrift ? "Drift" : "No Drift"} (${result.detectedSeverity})`,
    );
    lines.push(
      `    Fields: ${result.detectedFields.length}/${result.expectedFields.length} detected`,
    );
    lines.push(`    Time: ${result.executionTimeMs}ms`);
    lines.push("");
  }

  lines.push("═══════════════════════════════════════════════════════");

  // Pass/fail summary
  const passed = results.filter(
    (r) =>
      r.expectedDrift === r.detectedDrift &&
      (!r.detectedDrift || r.expectedSeverity === r.detectedSeverity),
  ).length;

  lines.push(`SUMMARY: ${passed}/${results.length} tests passed`);

  if (passed === results.length) {
    lines.push("✓ All tests passed!");
  } else {
    lines.push(`✗ ${results.length - passed} test(s) failed`);
  }

  lines.push("═══════════════════════════════════════════════════════");

  return lines.join("\n");
}

/**
 * Export results to JSON format
 */
export function exportResultsJSON(
  results: TestResult[],
  metrics: AccuracyMetrics,
): string {
  const report = {
    testRun: {
      timestamp: new Date().toISOString(),
      totalTests: metrics.totalTests,
    },
    metrics: {
      precision: metrics.precision,
      recall: metrics.recall,
      f1Score: metrics.f1Score,
      severityAccuracy: metrics.severityAccuracy,
      fieldAccuracy: metrics.fieldAccuracy,
      averageExecutionTime: metrics.averageExecutionTime,
    },
    confusionMatrix: {
      truePositives: metrics.truePositives,
      falsePositives: metrics.falsePositives,
      trueNegatives: metrics.trueNegatives,
      falseNegatives: metrics.falseNegatives,
    },
    detailedResults: results.map((r) => ({
      scenarioId: r.scenarioId,
      expectedDrift: r.expectedDrift,
      detectedDrift: r.detectedDrift,
      expectedSeverity: r.expectedSeverity,
      detectedSeverity: r.detectedSeverity,
      expectedFields: r.expectedFields,
      detectedFields: r.detectedFields,
      executionTimeMs: r.executionTimeMs,
      status:
        r.expectedDrift === r.detectedDrift &&
        (!r.detectedDrift || r.expectedSeverity === r.detectedSeverity)
          ? "PASS"
          : "FAIL",
    })),
  };

  return JSON.stringify(report, null, 2);
}

/**
 * Check if metrics meet minimum thresholds
 */
export function meetsThresholds(metrics: AccuracyMetrics): {
  passed: boolean;
  failures: string[];
} {
  const failures: string[] = [];

  const precision = parseFloat(metrics.precision);
  const recall = parseFloat(metrics.recall);
  const f1Score = parseFloat(metrics.f1Score);
  const severityAccuracy = parseFloat(metrics.severityAccuracy);
  const fieldAccuracy = parseFloat(metrics.fieldAccuracy);

  if (precision < 90) {
    failures.push(`Precision ${metrics.precision} below threshold (90%)`);
  }
  if (recall < 95) {
    failures.push(`Recall ${metrics.recall} below threshold (95%)`);
  }
  if (f1Score < 92) {
    failures.push(`F1 Score ${metrics.f1Score} below threshold (92%)`);
  }
  if (severityAccuracy < 85) {
    failures.push(
      `Severity Accuracy ${metrics.severityAccuracy} below threshold (85%)`,
    );
  }
  if (fieldAccuracy < 90) {
    failures.push(
      `Field Accuracy ${metrics.fieldAccuracy} below threshold (90%)`,
    );
  }

  return {
    passed: failures.length === 0,
    failures,
  };
}

// Made with Bob
