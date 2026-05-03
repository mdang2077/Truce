# APIDrift Validation Suite

This directory contains the production-grade testing framework for validating APIDrift's drift detection capabilities.

## Quick Start

```bash
# Run complete validation suite
npm run validate:production

# Run specific scenario
npm run validate:scenario DS-003

# Generate accuracy report
npm run validate:report
```

## Directory Structure

```
tests/
├── validation/
│   ├── scenario-loader.ts       # Load test scenarios
│   ├── drift-detection.test.ts  # Jest test suite
│   ├── accuracy-metrics.ts      # Calculate precision/recall/F1
│   ├── run-validation.ts        # Main validation runner
│   └── README.md                # This file
├── drift-scenarios/
│   ├── DS-001.json              # Field rename scenario
│   ├── DS-002.json              # Type change scenario
│   ├── DS-003.json              # Unit change scenario (dollars→cents)
│   ├── ...                      # Additional scenarios
│   └── manifest.json            # Scenario index
└── validation-reports/
    ├── validation-report-*.txt  # Human-readable reports
    └── validation-report-*.json # Machine-readable reports
```

## Test Scenarios

### Critical Scenarios (Must Detect)

- **DS-003**: Unit change (dollars to cents) - Critical business impact
- **DS-009**: Authentication changes - Security impact
- **DS-011**: Endpoint removal - Breaking change

### High Severity Scenarios

- **DS-001**: Field rename (userId → user_id)
- **DS-002**: Type change (number → string)
- **DS-004**: Enum case change (lowercase → UPPERCASE)
- **DS-006**: Field removal
- **DS-012**: HTTP method change

### Medium Severity Scenarios

- **DS-007**: Nested object changes
- **DS-008**: Array item schema changes
- **DS-010**: Response code changes

### Low Severity Scenarios

- **DS-005**: Optional field addition

## Creating New Scenarios

```typescript
import { createScenario, saveScenario } from "./scenario-loader";

const newScenario = createScenario("DS-013", {
  name: "My New Drift Scenario",
  description: "Description of the drift",
  severity: "high",
  driftType: "custom_drift",
  openapi: {
    path: "contracts/openapi.yaml",
    endpoint: "/api/endpoint",
    method: "POST",
    schema: {
      /* OpenAPI schema */
    },
  },
  backend: {
    path: "apps/api/src/routes/endpoint.ts",
    implementation: "res.json({ /* actual response */ })",
  },
  frontend: {
    path: "apps/web/src/api/client.ts",
    usage: "const data = await fetch(...)",
  },
  expectedDetection: {
    driftFound: true,
    severity: "high",
    fields: [
      {
        field: "fieldName",
        diagnosis: "drift_type",
        userImpact: "Description of user impact",
      },
    ],
  },
});

saveScenario(newScenario);
```

## Accuracy Metrics

The validation suite calculates the following metrics:

### Detection Accuracy

- **Precision**: True Positives / (True Positives + False Positives)
- **Recall**: True Positives / (True Positives + False Negatives)
- **F1 Score**: Harmonic mean of precision and recall

### Classification Accuracy

- **Severity Accuracy**: % of correctly classified severity levels
- **Field Accuracy**: % of correctly identified drifted fields

### Performance Metrics

- **Average Execution Time**: Time per endpoint scan
- **Total Scan Time**: Time for complete validation

## Minimum Thresholds

| Metric            | Target  | Minimum Acceptable    |
| ----------------- | ------- | --------------------- |
| Precision         | 98%     | 90%                   |
| Recall            | 100%    | 95%                   |
| F1 Score          | 99%     | 92%                   |
| Severity Accuracy | 95%     | 85%                   |
| Field Accuracy    | 95%     | 90%                   |
| Execution Time    | < 500ms | < 1000ms per endpoint |

## Running Tests

### Full Validation Suite

```bash
cd apidrift
npm run validate:production
```

Expected output:

```
═══════════════════════════════════════════════════════
     APIDrift Production Validation Suite
═══════════════════════════════════════════════════════

📂 Loading test scenarios...
✓ Loaded 12 scenarios

🔍 Running drift detection...
  ✓ DS-001: Field Rename (125ms)
  ✓ DS-002: Type Change (98ms)
  ✓ DS-003: Unit Change (156ms)
  ...
✓ Detection complete

📊 Calculating accuracy metrics...
✓ Metrics calculated

📝 Generating reports...
✓ Text report saved: validation-reports/validation-report-*.txt
✓ JSON report saved: validation-reports/validation-report-*.json

═══════════════════════════════════════════════════════
           APIDrift Detection Accuracy Report
═══════════════════════════════════════════════════════

OVERALL METRICS:
  Total Tests:           12
  Precision:             95.83%
  Recall:                100.00%
  F1 Score:              97.87%
  Severity Accuracy:     91.67%
  Field Accuracy:        94.12%
  Avg Execution Time:    127.45ms

CONFUSION MATRIX:
  True Positives:        12
  False Positives:       0
  True Negatives:        0
  False Negatives:       0

═══════════════════════════════════════════════════════
SUMMARY: 12/12 tests passed
✓ All tests passed!
═══════════════════════════════════════════════════════

🎯 Checking accuracy thresholds...
✓ All accuracy thresholds met!
```

### Jest Test Suite

```bash
cd apidrift
npm test -- tests/validation/drift-detection.test.ts
```

### Single Scenario

```bash
cd apidrift
npm run validate:scenario DS-003
```

## Integration with CI/CD

Add to `.github/workflows/validate.yml`:

```yaml
name: Validate APIDrift

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run validate:production
      - uses: actions/upload-artifact@v3
        with:
          name: validation-report
          path: validation-reports/
```

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors about missing types:

```bash
npm install --save-dev @types/node @types/jest
```

### Scenario Not Found

Ensure scenario files are in `tests/drift-scenarios/` and named correctly (e.g., `DS-001.json`).

### Low Accuracy

1. Check if drift detection logic is implemented correctly
2. Verify scenario expected results match actual behavior
3. Review false positives/negatives in detailed report

## Next Steps

1. **Implement Real Drift Detection**: Replace mock `detectDrift()` with actual implementation
2. **Add More Scenarios**: Create scenarios for your specific API patterns
3. **Integrate with CI**: Add validation to your deployment pipeline
4. **Monitor Production**: Use metrics to track detection accuracy over time

## References

- [Production Testing Methodology](../../PRODUCTION_TESTING_METHODOLOGY.md)
- [APIDrift README](../../README.md)
- [Drift Scanner Documentation](../../drift-scanner/README.md)
