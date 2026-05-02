# Technical Architecture — APIDrift

**Created:** 2026-05-01
**Updated:** 2026-05-01 — Bob IDE analyzed vault; setup details confirmed
**Status:** Confirmed ✅

---

## Architecture Overview

APIDrift is a monorepo with three apps (broken checkout frontend, drifted Express backend, APIDrift product UI) plus a contracts folder and drift-scanner. IBM Bob IDE is the required core tool — 5 tasks with session exports.

```
apidrift/
├── apps/
│   ├── web/                          ← Broken checkout frontend (Next.js, port 3000)
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── pages/checkout.tsx
│   │       ├── api/checkoutClient.ts ← reads order.total → $NaN
│   │       └── components/CheckoutSummary.tsx
│   └── api/                          ← Drifted backend (Express, port 3001)
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── server.ts
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
│   ├── package.json
│   ├── next.config.js
│   ├── tsconfig.json
│   └── app/
│       ├── page.tsx
│       └── components/
│           ├── BrokenCheckout.tsx        ← Screen 1
│           ├── ContractSources.tsx       ← Screen 2
│           ├── DriftMatrix.tsx           ← Screen 3 (priority)
│           ├── BobEvidenceTrail.tsx      ← Screen 4
│           ├── SeverityImpact.tsx        ← Screen 5
│           ├── FixStrategy.tsx           ← Screen 6
│           ├── PatchPanel.tsx            ← Screen 7
│           ├── ContractTestPanel.tsx     ← Screen 8
│           ├── TicketRouting.tsx         ← Screen 9
│           ├── FixedCheckout.tsx         ← Screen 10a
│           ├── PRSummary.tsx             ← Screen 10b
│           └── BobSidebar.tsx            ← Persistent sidebar
├── bob_sessions/                     ← Required for submission
│   ├── task-1-screenshot.png
│   ├── task-1-history.md
│   └── ...
├── package.json                      ← Root monorepo package.json
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| APIDrift UI | Next.js 14 + Tailwind CSS | Fast setup; Havyn knows React/TS |
| Demo checkout frontend | Next.js (same monorepo) | Reuse stack |
| Demo API backend | Express + Node.js + TypeScript | Fast to seed drift |
| API contract | OpenAPI YAML | Standard; easy to show drift |
| Contract tests | Jest + Supertest | Standard Node.js testing |
| Drift data | Hardcoded JSON | Unblocks UI; don't over-engineer scanner |
| Bob outputs | Saved Markdown/JSON fallback files | Demo never depends on live Bob latency |
| Code display | `react-syntax-highlighter` | Patch diff + contract test |
| IBM Bob | Bob IDE (required) — 5 tasks | Task sessions exported for judging |

---

## System Requirements (confirmed by Bob analysis)

| Requirement | Version |
|---|---|
| Node.js | v18+ |
| npm | v9+ (or yarn) |
| Git | Any recent version |
| IBM Bob IDE | Installed + authenticated with ibm-coding-challenge-xxx |
| Browser | Chrome or Firefox (test $NaN rendering before recording) |

---

## Setup Commands

```bash
# 1. Create and enter project root
mkdir apidrift && cd apidrift

# 2. Create directory structure
mkdir -p apps/web/src/{pages,api,components}
mkdir -p apps/api/src/{routes,schemas,tests}
mkdir -p contracts drift-scanner
mkdir -p apidrift-ui/app/components
mkdir -p bob_sessions   # Create this BEFORE first Bob task

# 3. Initialize Next.js apps
cd apps/web
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
cd ../..

cd apidrift-ui
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
cd ..

# 4. Initialize Express API
cd apps/api
npm init -y
npm install express cors
npm install -D typescript @types/node @types/express ts-node nodemon \
  jest supertest @types/jest @types/supertest ts-jest
npx tsc --init
cd ../..

# 5. Install root dev dependencies
npm install -D concurrently

# 6. Install APIDrift UI dependencies
cd apidrift-ui
npm install react-syntax-highlighter
npm install -D @types/react-syntax-highlighter
cd ..
```

---

## Root package.json (Monorepo)

```json
{
  "name": "apidrift",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["apps/*", "apidrift-ui"],
  "scripts": {
    "dev:api":      "cd apps/api && npm run dev",
    "dev:checkout": "cd apps/web && npm run dev",
    "dev:ui":       "cd apidrift-ui && npm run dev",
    "dev:all":      "concurrently \"npm run dev:api\" \"npm run dev:checkout\" \"npm run dev:ui\"",
    "test":         "cd apps/api && npm test"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

---

## .gitignore

```
node_modules/
.next/
dist/
build/
.env
.env.local
*.log
.DS_Store
```

---

## Environment Variables

```bash
# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001

# apps/api/.env
PORT=3001
NODE_ENV=development

# apidrift-ui/.env.local
NEXT_PUBLIC_DRIFT_DATA_PATH=/drift-scanner/sample-drift-output.json
```

---

## Jest Config (apps/api/jest.config.js)

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
};
```

Run tests: `cd apps/api && npm test`

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
    statusLabel: order.status === "paid" ? "Paid" : "Unknown"
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
                  enum: ["pending", "paid", "failed"]  # stale: should be uppercase
```

---

## Drift Data JSON (Build This First — Unblocks All 10 Screens)

Save as `drift-scanner/sample-drift-output.json`:

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
- This is the "screenshot moment" — invest extra polish here

### SeverityImpact.tsx (Screen 5)
- Large 🔴 HIGH badge at top
- `businessImpact` paragraph
- `affectedFlow` and risk level metadata

### TicketRouting.tsx (Screen 9)
- Simulated ticket card from `ticketRouting` object in drift JSON
- Checkmark list for each action
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

### Task 1: Analyze Contract Drift + Severity
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
Save as: `drift-scanner/bob-task-1-analysis.md`

### Task 2: Generate Patch
```
Patch the checkout flow so frontend and OpenAPI match the backend.
Use totalCents as canonical (integer cents = best practice for currency).
Update: checkoutClient.ts, CheckoutSummary.tsx, openapi.yaml.
Show before/after diff for each file. Explain each change.
```
Save as: `drift-scanner/bob-task-2-patch.md`

### Task 3: Generate Contract Test
```
Create a Jest + Supertest regression contract test for
apps/api/src/routes/checkout.ts.
Assert: totalCents exists (Number), total does NOT exist,
status is "PAID". Under 30 lines.
```
Save as: `apps/api/src/tests/checkout.contract.test.ts`

### Task 4: Generate PR Summary
```
Generate a PR description for this API contract drift fix.
Include: drift found, user impact, files changed, tests added,
why totalCents is canonical, rollback risk.
```
Save as: `drift-scanner/bob-task-4-pr-summary.md`

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
# Terminal 1
cd apps/api && npm run dev           # port 3001

# Terminal 2
cd apps/web && npm run dev           # port 3000 → visit /checkout → see $NaN

# Terminal 3
cd apidrift-ui && npm run dev        # port 3002 → APIDrift product UI

# Or all at once from root:
npm run dev:all
```

**Verify setup:**
- `localhost:3000/checkout` → shows $NaN and "Unknown" (large, red)
- `localhost:3001/checkout` (POST) → returns `{ totalCents: 8470, status: "PAID" }`
- `localhost:3002` → APIDrift UI loads all 10 screens

---

## Technical Risk Flags

| Risk | Impact | Mitigation |
|---|---|---|
| Port conflicts (3000/3001/3002) | Medium | Check `lsof -i :3000` etc. before starting; kill any blocking processes |
| CORS between localhost:3000/3002 and localhost:3001 | Low | Add `cors()` middleware to Express — 2-line fix |
| $NaN not rendering visibly | High — kills the demo hook | Use `text-4xl text-red-600 font-bold`; force string if browser converts: `"$NaN"` |
| TypeScript strict mode errors | Low | Adjust `tsconfig.json` strict settings if blocking early build |
| Next.js caching issues | Low | Use `--turbo` flag if hot reload is slow: `next dev --turbo` |
| Bob Task 1 vague on severity | Medium | Explicitly ask for "Breaking/Medium/Cosmetic"; retry with tighter prompt |
| bob_sessions not captured | High — required deliverable | Create folder before first task; export after EVERY session |
| Using personal Bob account | Medium | Verify `ibm-coding-challenge-xxx` in IDE settings before every session |
| Live Bob latency during recording | High | Always use saved fallback files for demo video — never live Bob |
