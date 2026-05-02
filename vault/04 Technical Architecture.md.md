# Technical Architecture — APIDrift

**Created:** 2026-05-01
**Updated:** 2026-05-01 — Severity + business impact + ticket routing added
**Status:** Confirmed ✅

---

## Architecture Overview

APIDrift is a Next.js application that demonstrates contract drift detection using IBM Bob IDE. It includes a real broken checkout app (Next.js + Express) and the APIDrift product UI (10 screens). Bob IDE is the required core tool — 5 tasks with session exports.

```
apidrift/
├── apps/
│   ├── web/                          ← Broken checkout frontend (Next.js, port 3000)
│   │   └── src/
│   │       ├── pages/checkout.tsx
│   │       ├── api/checkoutClient.ts ← reads order.total → $NaN
│   │       └── components/CheckoutSummary.tsx
│   └── api/                          ← Drifted backend (Express, port 3001)
│       └── src/
│           ├── routes/checkout.ts    ← returns totalCents, "PAID"
│           ├── schemas/checkoutSchema.ts
│           └── tests/checkout.contract.test.ts
├── contracts/
│   └── openapi.yaml                  ← Stale (still says total, lowercase enums)
├── drift-scanner/
│   ├── bob-task-1-analysis.md        ← Saved Bob Task 1 output
│   ├── bob-task-2-patch.md           ← Saved Bob Task 2 output
│   ├── bob-task-4-pr-summary.md      ← Saved Bob Task 4 output
│   └── sample-drift-output.json     ← Hardcoded drift data (unblocks UI)
├── apidrift-ui/                      ← APIDrift product (Next.js, port 3002)
│   └── app/
│       ├── page.tsx                  ← Orchestrates all 10 screens
│       └── components/
│           ├── BrokenCheckout.tsx        ← Screen 1
│           ├── ContractSources.tsx       ← Screen 2
│           ├── DriftMatrix.tsx           ← Screen 3 (priority)
│           ├── BobEvidenceTrail.tsx      ← Screen 4
│           ├── SeverityImpact.tsx        ← Screen 5 (new)
│           ├── FixStrategy.tsx           ← Screen 6
│           ├── PatchPanel.tsx            ← Screen 7
│           ├── ContractTestPanel.tsx     ← Screen 8
│           ├── TicketRouting.tsx         ← Screen 9 (new)
│           ├── FixedCheckout.tsx         ← Screen 10a
│           ├── PRSummary.tsx             ← Screen 10b
│           └── BobSidebar.tsx            ← Persistent sidebar
└── bob_sessions/                     ← Required for submission
    ├── task-1-screenshot.png
    ├── task-1-history.md
    └── ...
```

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| APIDrift UI | Next.js 14 + Tailwind CSS | Fast setup; Havyn knows React/TS |
| Demo checkout frontend | Next.js (same monorepo) | Reuse stack |
| Demo API backend | Express + Node.js | Fast to seed drift |
| API contract | OpenAPI YAML | Standard; easy to show drift |
| Contract tests | Jest + Supertest | Standard Node.js testing |
| Drift data | Hardcoded JSON | Unblocks UI; don't over-engineer scanner |
| Bob outputs | Saved Markdown/JSON fallback files | Demo never depends on live Bob latency |
| Code display | `react-syntax-highlighter` | Patch diff + contract test |
| IBM Bob | Bob IDE (required) — 5 tasks | Task sessions exported for judging |

---

## The Broken Checkout App

### Backend — drifted response (port 3001)

```typescript
// apps/api/src/routes/checkout.ts
router.post('/checkout', (req, res) => {
  // DRIFTED: changed from { total: 84.70, status: "paid" }
  res.json({
    orderId: "ORD-1042",
    totalCents: 8470,   // was: total: 84.70
    status: "PAID"      // was: status: "paid"
  });
});
```

### Frontend — still expects old contract (port 3000)

```typescript
// apps/web/src/api/checkoutClient.ts
export interface CheckoutResponse {
  orderId: string;
  total: number;      // ← expects total (doesn't exist anymore)
  status: string;     // ← expects "paid" (backend returns "PAID")
}
```

```typescript
// apps/web/src/components/CheckoutSummary.tsx
export function formatCheckout(order: CheckoutResponse) {
  return {
    id: order.orderId,
    total: `$${order.total.toFixed(2)}`,               // ← $NaN
    statusLabel: order.status === "paid" ? "Paid" : "Unknown"  // ← "Unknown"
  };
}
```

### OpenAPI — stale contract

```yaml
# contracts/openapi.yaml
/checkout:
  post:
    responses:
      200:
        content:
          application/json:
            schema:
              properties:
                orderId:
                  type: string
                total:           # stale: should be totalCents
                  type: number
                status:
                  type: string
                  enum: ["pending", "paid", "failed"]  # stale: uppercase
```

---

## Drift Data JSON (Hardcoded — Build This First)

This unblocks all 10 UI screens before Bob runs.

```json
{
  "driftFound": true,
  "scannedAt": "2026-05-01T00:00:00Z",
  "severity": "high",
  "businessImpact": "Checkout confirmation displays incorrect payment totals and unknown payment status. This affects a revenue-critical user flow and may cause transaction abandonment.",
  "affectedFlow": "Checkout confirmation (checkout.tsx → /checkout route)",
  "fields": [
    {
      "field": "Total amount",
      "frontend": "total (number, dollars)",
      "backend": "totalCents (integer, cents)",
      "openapi": "total (number)",
      "diagnosis": "field drift",
      "severity": "Breaking",
      "userImpact": "Checkout UI shows $NaN"
    },
    {
      "field": "Currency unit",
      "frontend": "dollars",
      "backend": "cents",
      "openapi": "dollars",
      "diagnosis": "semantic drift",
      "severity": "Breaking",
      "userImpact": "Price display incorrect even if field name matched"
    },
    {
      "field": "Status enum",
      "frontend": "lowercase (\"paid\")",
      "backend": "uppercase (\"PAID\")",
      "openapi": "lowercase (\"paid\")",
      "diagnosis": "enum drift",
      "severity": "Breaking",
      "userImpact": "Payment status always shows \"Unknown\""
    }
  ],
  "evidenceTrail": [
    "Found frontend reads checkout.total in checkoutClient.ts",
    "Found backend route now returns totalCents instead of total",
    "Found OpenAPI spec still documents total as a decimal number",
    "Found frontend expects status === \"paid\"",
    "Found backend returns status === \"PAID\"",
    "Determined backend change is intentional — integer cents safer for currency precision",
    "Recommended syncing frontend and OpenAPI to backend contract"
  ],
  "recommendedFix": "Update frontend and OpenAPI spec to match backend (totalCents + uppercase enums)",
  "canonicalLayer": "backend",
  "reasoning": "Backend change appears intentional — integer cents is best practice for currency",
  "ticketRouting": {
    "priority": "High",
    "assignedTo": "API Platform Team",
    "notified": ["Frontend Owner", "Backend Owner"],
    "attachments": ["Bob drift report", "Patch diff"],
    "dueDate": "Before next deploy"
  }
}
```

---

## Component Build Notes

### DriftMatrix.tsx (Screen 3 — highest priority)
- Table: Field | Frontend | Backend | OpenAPI | Severity
- Severity badge: 🔴 Breaking (red), 🟡 Medium (yellow), ⚪ Cosmetic (grey)
- Whole row tinted by severity
- Data from `fields` array in drift JSON
- This is the "screenshot moment" — make it beautiful

### SeverityImpact.tsx (Screen 5 — new)
- Large severity badge at top (🔴 HIGH)
- Business impact paragraph from `businessImpact` field
- "Affected flow" and "Risk level" metadata
- Keep it clean — one card, bold text, red accent

### TicketRouting.tsx (Screen 9 — new)
- Simulated ticket card
- Checkmark list: "✓ Created high-priority task", "✓ Assigned to: API Platform Team", etc.
- From `ticketRouting` object in drift JSON
- Optional: wire real Orchestrate agent if time allows

### BobSidebar.tsx (persistent throughout)
```
Powered by IBM Bob

Bob was used for:
✓ Repo context analysis (Task 1)
✓ Severity classification (Task 1)
✓ Drift diagnosis (Task 1)
✓ Patch generation (Task 2)
✓ Contract test generation (Task 3)
✓ OpenAPI documentation update (Task 2)
✓ PR summary (Task 4)
```

---

## IBM Bob IDE Tasks — Full Prompts

### Task 1: Analyze Contract Drift (updated — includes severity)
```
Analyze this repo for API contract drift in the checkout flow.

Compare:
- @apps/web/src/api/checkoutClient.ts
- @apps/web/src/components/CheckoutSummary.tsx
- @apps/api/src/routes/checkout.ts
- @contracts/openapi.yaml

Return:
1. mismatched fields with exact names and locations
2. severity of each mismatch: Breaking (causes runtime failure),
   Medium (causes stale behavior), Cosmetic (docs only)
3. business impact — what does the user see?
4. which layer is the canonical source of truth and why
5. recommended fix strategy with engineering rationale
6. confidence level with evidence
```

### Task 2: Generate Patch
```
Patch the checkout flow so frontend and OpenAPI match the backend.
Use totalCents as canonical (integer cents = best practice for currency).
Update: checkoutClient.ts, CheckoutSummary.tsx, openapi.yaml.
Show before/after diff for each file. Explain each change.
```

### Task 3: Generate Contract Test
```
Create a Jest + Supertest regression contract test for
apps/api/src/routes/checkout.ts.
Assert: totalCents exists (Number), total does NOT exist,
status is "PAID". Under 30 lines.
```

### Task 4: Generate PR Summary
```
Generate a PR description for this API contract drift fix.
Include: drift found, user impact, files changed, tests added,
why totalCents is canonical, rollback risk.
```

### Task 5: Bob Skill (stretch)
```
Create a reusable Bob skill called api-contract-drift-review.
Guides Bob to compare frontend, backend, API docs, types, and tests.
Output: drift matrix with severity, fix recommendation, patch plan, test plan.
Save as .bob/commands/api-contract-drift-review.md
```

---

## Local Dev Setup

```bash
# Run demo checkout app
cd apps/api && node server.js          # port 3001 — drifted backend
cd apps/web && npm run dev             # port 3000 — broken frontend
# Visit localhost:3000/checkout → see $NaN and "Unknown"

# Run APIDrift product UI
cd apidrift-ui && npm run dev          # port 3002
# Visit localhost:3002 → APIDrift 10-screen demo
```

**For video recording:** Screen-record localhost:3002. Open with a quick cut to localhost:3000 to show the real broken app before switching to APIDrift.

---

## High-Risk Points

| Risk | Mitigation |
|---|---|
| $NaN not rendering | Make it large, red, bold — this is the hook |
| Bob Task 1 doesn't classify severity clearly | Prompt explicitly asks for Breaking/Medium/Cosmetic; retry if vague |
| SeverityImpact card looks generic | Use bold red header + specific flow name ("checkout confirmation") |
| TicketRouting looks fake | Use real Orchestrate if time allows; otherwise make the simulated card clean |
| DriftMatrix polish takes too long | Build with inline Tailwind first; refine colors Day 2 |
| bob_sessions not captured | Create folder Day 1; export after every task |
