# Production-Grade Testing Methodology for APIDrift

## Executive Summary

This document provides a comprehensive testing methodology to validate APIDrift's effectiveness in detecting API drift in production-grade repositories. It includes realistic drift scenarios, accuracy measurement metrics, and a step-by-step validation framework.

---

## 1. Testing Environment Setup

### 1.1 Test Repository Requirements

**Option A: Use Existing Open-Source Repository**

- **Recommended:** Stripe API mock server, Shopify API examples, or similar e-commerce APIs
- **Criteria:**
  - 10+ API endpoints with documented OpenAPI specs
  - Multiple resource types (CRUD operations)
  - Complex nested objects and arrays
  - Authentication/authorization patterns
  - Versioned API endpoints

**Option B: Create Synthetic Production-Grade Repository**

```
test-repo/
├── openapi/
│   ├── v1.yaml              # Baseline contract
│   ├── v2.yaml              # Evolved contract (intentional changes)
│   └── stale.yaml           # Outdated contract (drift scenarios)
├── backend/
│   ├── routes/
│   │   ├── users.ts         # User management endpoints
│   │   ├── orders.ts        # Order processing endpoints
│   │   ├── products.ts      # Product catalog endpoints
│   │   ├── payments.ts      # Payment processing endpoints
│   │   └── webhooks.ts      # Webhook handlers
│   └── middleware/
│       ├── auth.ts          # Authentication logic
│       └── validation.ts    # Request validation
├── frontend/
│   ├── api-clients/
│   │   ├── userClient.ts
│   │   ├── orderClient.ts
│   │   ├── productClient.ts
│   │   └── paymentClient.ts
│   └── types/
│       └── api-types.ts     # TypeScript interfaces
└── tests/
    ├── drift-scenarios/     # Controlled drift test cases
    └── validation/          # Accuracy measurement tests
```

### 1.2 Infrastructure Setup

```bash
# Clone or create test repository
git clone <test-repo-url> apidrift-test-env
cd apidrift-test-env

# Install dependencies
npm install

# Start backend API (port 4000)
npm run start:api

# Start frontend (port 4001)
npm run start:frontend

# Verify endpoints are accessible
curl http://localhost:4000/api/health
```

---

## 2. Realistic Drift Scenarios

### 2.1 Scenario Matrix

| Scenario ID | Drift Type           | Severity | Description                                        | Expected Detection   |
| ----------- | -------------------- | -------- | -------------------------------------------------- | -------------------- |
| DS-001      | Field Rename         | High     | `userId` → `user_id`                               | ✓ Field missing      |
| DS-002      | Type Change          | High     | `price: number` → `price: string`                  | ✓ Type mismatch      |
| DS-003      | Unit Change          | Critical | `amount` (dollars) → `amountCents` (cents)         | ✓ Semantic drift     |
| DS-004      | Enum Change          | High     | `status: "active"` → `status: "ACTIVE"`            | ✓ Enum drift         |
| DS-005      | Field Addition       | Low      | Added `createdAt: string`                          | ✓ New field          |
| DS-006      | Field Removal        | High     | Removed `email` field                              | ✓ Missing field      |
| DS-007      | Nested Object Change | Medium   | `address.zip` → `address.postalCode`               | ✓ Nested drift       |
| DS-008      | Array Item Schema    | Medium   | `items[].qty: number` → `items[].quantity: string` | ✓ Array schema drift |
| DS-009      | Auth Change          | Critical | Removed `Authorization` header requirement         | ✓ Auth drift         |
| DS-010      | Response Code Change | Medium   | `200` → `201` for POST                             | ✓ Status code drift  |
| DS-011      | Endpoint Rename      | Critical | `/api/checkout` → `/api/v2/checkout`               | ✓ Endpoint missing   |
| DS-012      | Method Change        | High     | `POST /users` → `PUT /users`                       | ✓ Method drift       |

### 2.2 Implementing Drift Scenarios

#### Example: DS-003 (Unit Change - Critical)

**Step 1: Baseline State (No Drift)**

```yaml
# openapi/baseline.yaml
/api/orders:
  post:
    responses:
      "200":
        content:
          application/json:
            schema:
              properties:
                total:
                  type: number
                  description: Total in dollars
                  example: 99.99
```

```typescript
// backend/routes/orders.ts (baseline)
router.post("/orders", (req, res) => {
  res.json({
    orderId: "ORD-123",
    total: 99.99, // dollars
    status: "pending",
  });
});
```

```typescript
// frontend/api-clients/orderClient.ts (baseline)
export async function createOrder(items: Item[]) {
  const response = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify({ items }),
  });
  const data = await response.json();
  return {
    orderId: data.orderId,
    total: data.total, // expects dollars
    status: data.status,
  };
}
```

**Step 2: Introduce Drift (Backend Changes, Frontend/OpenAPI Stale)**

```typescript
// backend/routes/orders.ts (DRIFTED)
router.post("/orders", (req, res) => {
  res.json({
    orderId: "ORD-123",
    totalCents: 9999, // ← CHANGED: now in cents
    status: "PENDING", // ← CHANGED: now uppercase
  });
});
```

**Step 3: Expected APIDrift Detection**

```json
{
  "driftFound": true,
  "severity": "critical",
  "fields": [
    {
      "field": "total",
      "frontend": "total (number, dollars)",
      "backend": "totalCents (integer, cents)",
      "openapi": "total (number, dollars)",
      "diagnosis": "field_rename + unit_change",
      "severity": "Breaking",
      "userImpact": "Frontend displays $99.99 instead of $0.99"
    }
  ]
}
```

---

## 3. Validation Test Suite

### 3.1 Automated Drift Detection Tests

Create `apidrift/tests/validation/drift-detection.test.ts`:

```typescript
import { detectDrift } from "../../drift-scanner/detector";
import { loadScenario } from "./scenario-loader";

describe("APIDrift Detection Accuracy", () => {
  test("DS-001: Detects field rename", async () => {
    const scenario = await loadScenario("DS-001");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
    expect(result.fields).toContainEqual(
      expect.objectContaining({
        diagnosis: "field_rename",
        field: "userId",
      }),
    );
  });

  test("DS-003: Detects unit change (dollars to cents)", async () => {
    const scenario = await loadScenario("DS-003");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("critical");
    expect(result.fields).toContainEqual(
      expect.objectContaining({
        diagnosis: expect.stringContaining("unit_change"),
        userImpact: expect.stringContaining("incorrect"),
      }),
    );
  });

  test("DS-009: Detects authentication changes", async () => {
    const scenario = await loadScenario("DS-009");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("critical");
    expect(result.fields).toContainEqual(
      expect.objectContaining({
        diagnosis: "auth_drift",
      }),
    );
  });

  // Add tests for all 12 scenarios...
});
```

### 3.2 False Positive/Negative Tests

```typescript
describe("APIDrift Accuracy - Edge Cases", () => {
  test("Should NOT flag intentional API versioning", async () => {
    const scenario = {
      openapi: "openapi/v2.yaml", // v2 spec
      backend: "routes/v2/orders.ts", // v2 implementation
      frontend: "api-clients/v2/orderClient.ts", // v2 client
    };
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(false);
  });

  test("Should NOT flag optional fields added to backend", async () => {
    const scenario = await loadScenario("optional-field-addition");
    const result = await detectDrift(scenario);

    expect(result.severity).not.toBe("critical");
    expect(result.severity).toBe("low");
  });

  test("Should flag breaking changes even with backward compatibility", async () => {
    const scenario = await loadScenario("breaking-with-fallback");
    const result = await detectDrift(scenario);

    expect(result.driftFound).toBe(true);
    expect(result.severity).toBe("high");
  });
});
```

---

## 4. Accuracy Measurement Metrics

### 4.1 Detection Accuracy Formula

```
Precision = True Positives / (True Positives + False Positives)
Recall = True Positives / (True Positives + False Negatives)
F1 Score = 2 × (Precision × Recall) / (Precision + Recall)
```

### 4.2 Measurement Implementation

Create `apidrift/tests/validation/accuracy-metrics.ts`:

```typescript
interface TestResult {
  scenarioId: string;
  expectedDrift: boolean;
  detectedDrift: boolean;
  expectedSeverity: string;
  detectedSeverity: string;
  expectedFields: string[];
  detectedFields: string[];
}

export function calculateAccuracy(results: TestResult[]) {
  let truePositives = 0;
  let falsePositives = 0;
  let trueNegatives = 0;
  let falseNegatives = 0;

  let severityMatches = 0;
  let fieldMatches = 0;
  let totalFields = 0;

  for (const result of results) {
    // Detection accuracy
    if (result.expectedDrift && result.detectedDrift) {
      truePositives++;
    } else if (!result.expectedDrift && result.detectedDrift) {
      falsePositives++;
    } else if (!result.expectedDrift && !result.detectedDrift) {
      trueNegatives++;
    } else if (result.expectedDrift && !result.detectedDrift) {
      falseNegatives++;
    }

    // Severity accuracy
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
  }

  const precision = truePositives / (truePositives + falsePositives);
  const recall = truePositives / (truePositives + falseNegatives);
  const f1Score = (2 * (precision * recall)) / (precision + recall);
  const severityAccuracy = severityMatches / results.length;
  const fieldAccuracy = fieldMatches / totalFields;

  return {
    precision: (precision * 100).toFixed(2) + "%",
    recall: (recall * 100).toFixed(2) + "%",
    f1Score: (f1Score * 100).toFixed(2) + "%",
    severityAccuracy: (severityAccuracy * 100).toFixed(2) + "%",
    fieldAccuracy: (fieldAccuracy * 100).toFixed(2) + "%",
    truePositives,
    falsePositives,
    trueNegatives,
    falseNegatives,
  };
}
```

### 4.3 Running Accuracy Tests

```bash
# Run full validation suite
cd apidrift
npm run test:validation

# Expected output:
# ✓ DS-001: Detects field rename (125ms)
# ✓ DS-002: Detects type change (98ms)
# ✓ DS-003: Detects unit change (156ms)
# ...
# ✓ All 12 scenarios passed
#
# Accuracy Metrics:
# Precision: 95.83%
# Recall: 100.00%
# F1 Score: 97.87%
# Severity Accuracy: 91.67%
# Field Accuracy: 94.12%
```

---

## 5. Production Repository Testing

### 5.1 Real-World Repository Selection

**Recommended Open-Source APIs for Testing:**

1. **Stripe API Mock** (https://github.com/stripe/stripe-mock)
   - 100+ endpoints
   - Complex nested objects
   - Versioned API
   - Well-documented OpenAPI specs

2. **Shopify API Examples** (https://github.com/Shopify/shopify-api-node)
   - E-commerce domain
   - Multiple resource types
   - Webhook endpoints
   - Authentication patterns

3. **GitHub API** (https://docs.github.com/en/rest)
   - Public OpenAPI spec
   - Extensive endpoint coverage
   - Real-world complexity

### 5.2 Testing Against Real Repository

```bash
# Step 1: Clone target repository
git clone https://github.com/stripe/stripe-mock stripe-test
cd stripe-test

# Step 2: Create drift branch
git checkout -b drift-test-branch

# Step 3: Introduce controlled drift
# Modify 5-10 endpoints to simulate real drift scenarios

# Step 4: Run APIDrift scanner
cd ../apidrift
npm run scan -- --repo ../stripe-test --spec ../stripe-test/openapi/spec3.yaml

# Step 5: Validate results
npm run validate:results -- --expected drift-scenarios/stripe-expected.json
```

### 5.3 Drift Injection Script

Create `apidrift/tests/validation/inject-drift.ts`:

```typescript
import fs from "fs";
import path from "path";

interface DriftInjection {
  file: string;
  line: number;
  original: string;
  modified: string;
  scenarioId: string;
}

const injections: DriftInjection[] = [
  {
    file: "routes/charges.ts",
    line: 45,
    original: "amount: charge.amount,",
    modified: "amountCents: charge.amount * 100,",
    scenarioId: "DS-003",
  },
  {
    file: "routes/customers.ts",
    line: 78,
    original: "email: customer.email,",
    modified: "// email field removed",
    scenarioId: "DS-006",
  },
  // Add more injections...
];

export async function injectDrift(repoPath: string) {
  const manifest = [];

  for (const injection of injections) {
    const filePath = path.join(repoPath, injection.file);
    let content = fs.readFileSync(filePath, "utf-8");

    content = content.replace(injection.original, injection.modified);
    fs.writeFileSync(filePath, content);

    manifest.push({
      scenarioId: injection.scenarioId,
      file: injection.file,
      applied: true,
    });
  }

  fs.writeFileSync(
    path.join(repoPath, "drift-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(`✓ Injected ${injections.length} drift scenarios`);
}
```

---

## 6. End-to-End Validation Workflow

### 6.1 Complete Testing Procedure

```bash
# 1. Setup test environment
npm run setup:test-env

# 2. Generate baseline (no drift)
npm run scan:baseline

# 3. Inject controlled drift scenarios
npm run inject:drift -- --scenarios all

# 4. Run drift detection
npm run scan:drift

# 5. Compare results against expected
npm run validate:accuracy

# 6. Generate report
npm run report:validation
```

### 6.2 Validation Report Format

```json
{
  "testRun": {
    "timestamp": "2026-05-03T07:00:00Z",
    "repository": "stripe-mock",
    "totalEndpoints": 127,
    "scenariosTested": 12
  },
  "results": {
    "precision": "95.83%",
    "recall": "100.00%",
    "f1Score": "97.87%",
    "severityAccuracy": "91.67%",
    "fieldAccuracy": "94.12%"
  },
  "detailedResults": [
    {
      "scenarioId": "DS-003",
      "endpoint": "/api/charges",
      "expectedDrift": true,
      "detectedDrift": true,
      "expectedSeverity": "critical",
      "detectedSeverity": "critical",
      "status": "✓ PASS"
    }
    // ... more results
  ],
  "failures": [],
  "recommendations": [
    "Consider adding detection for deprecated field patterns",
    "Improve semantic drift detection for currency conversions"
  ]
}
```

---

## 7. Continuous Validation

### 7.1 CI/CD Integration

Create `.github/workflows/validate-drift-detection.yml`:

```yaml
name: Validate APIDrift Detection

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Run validation suite
        run: npm run test:validation

      - name: Calculate accuracy metrics
        run: npm run metrics:accuracy

      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: validation-report
          path: validation-report.json

      - name: Check accuracy threshold
        run: |
          ACCURACY=$(jq -r '.results.f1Score' validation-report.json | sed 's/%//')
          if (( $(echo "$ACCURACY < 95" | bc -l) )); then
            echo "❌ Accuracy below threshold: $ACCURACY%"
            exit 1
          fi
          echo "✓ Accuracy meets threshold: $ACCURACY%"
```

---

## 8. Success Criteria

### 8.1 Minimum Acceptable Performance

| Metric            | Target | Minimum Acceptable |
| ----------------- | ------ | ------------------ |
| Precision         | 98%    | 90%                |
| Recall            | 100%   | 95%                |
| F1 Score          | 99%    | 92%                |
| Severity Accuracy | 95%    | 85%                |
| Field Accuracy    | 95%    | 90%                |

### 8.2 Validation Checklist

- [ ] All 12 drift scenarios detected correctly
- [ ] Zero false negatives on critical drift
- [ ] False positive rate < 10%
- [ ] Severity classification accuracy > 85%
- [ ] Field-level detection accuracy > 90%
- [ ] Performance: < 5 seconds per endpoint scan
- [ ] Successfully tested on 3+ real-world repositories
- [ ] Contract test generation accuracy > 95%
- [ ] Patch generation accuracy > 90%

---

## 9. Next Steps

1. **Implement scenario loader** (`tests/validation/scenario-loader.ts`)
2. **Create drift injection tool** (`tests/validation/inject-drift.ts`)
3. **Build accuracy calculator** (`tests/validation/accuracy-metrics.ts`)
4. **Set up test repositories** (Stripe mock, Shopify examples)
5. **Run baseline validation** (all 12 scenarios)
6. **Generate validation report** (JSON + HTML)
7. **Document findings** (include in submission)

---

## 10. Appendix: Quick Start Commands

```bash
# Complete validation in one command
npm run validate:production

# This runs:
# 1. Setup test environment
# 2. Inject drift scenarios
# 3. Run detection
# 4. Calculate accuracy
# 5. Generate report

# View results
open validation-report.html
```

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-03  
**Author:** APIDrift Team  
**Status:** Ready for Implementation
