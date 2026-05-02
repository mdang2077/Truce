# MVP Scope — APIDrift

**Created:** 2026-05-01
**Updated:** 2026-05-01 — Severity + business impact + ticket routing added
**Status:** Locked ✅ — do not add features without updating Command Center

---

## MVP in 5 Sentences

1. Show a broken checkout app caused by API drift ($NaN, Unknown status)
2. Scan and compare frontend client, backend route, and OpenAPI contract
3. Display drift matrix with severity levels + Bob's evidence trail + business impact
4. Show Bob-generated patch + OpenAPI update + contract test
5. Show ticket/owner routing → fixed checkout → PR summary

**That is enough to win the story.**

---

## The 10 Demo Screens

### Screen 1 — Broken Checkout (START HERE)

```
Checkout Complete

Order ID: ORD-1042
Total: $NaN          ← large, red
Status: Unknown      ← large, red
```

Button: `Scan for API Drift`

**Build note:** Must be a real running app ($NaN from actual `order.total.toFixed(2)` where `total` is `undefined`). This is the emotional hook. Build this first.

---

### Screen 2 — Contract Sources

Three cards showing what each layer says:

```
Frontend expects:        Backend returns:         OpenAPI says:
total: number            totalCents: integer      total: number
status: "paid"           status: "PAID"           status: "paid"
```

**Build note:** Static cards. Renders from hardcoded drift JSON.

---

### Screen 3 — Drift Matrix (THE SCREENSHOT MOMENT)

| Field | Frontend | Backend | OpenAPI | Severity |
|---|---|---|---|---|
| Total amount | `total` | `totalCents` | `total` | 🔴 Breaking |
| Currency unit | dollars | cents | dollars | 🔴 Breaking |
| Status enum | lowercase `"paid"` | uppercase `"PAID"` | lowercase `"paid"` | 🔴 Breaking |

**Color coding:**
- 🔴 Breaking = red cells
- 🟡 Medium = yellow cells
- 🟢 Match / Cosmetic = green/grey cells

**Build note:** This is the priority component. Invest extra polish time. DriftMatrix.tsx renders from drift JSON. Each row is a field. Severity badge on each row.

---

### Screen 4 — Bob Evidence Trail

```
Bob's Evidence Trail

1. Found frontend reads checkout.total in checkoutClient.ts.
2. Found backend route now returns totalCents instead of total.
3. Found OpenAPI spec still documents total as a decimal number.
4. Found frontend expects status === "paid".
5. Found backend returns status === "PAID".
6. Determined backend change is likely intentional —
   integer cents are safer for currency precision.
7. Recommended syncing frontend and OpenAPI to backend.
```

**Build note:** Renders from saved Bob Task 1 fallback output. Add subtle "Powered by IBM Bob" badge.

---

### Screen 5 — Severity + Business Impact

```
Severity: High 🔴

Business Impact:
Checkout confirmation displays incorrect payment totals
and unknown payment status. This affects a revenue-critical
user flow and may cause transaction abandonment.

Affected Flow: Checkout confirmation (ORD-1042)
Risk Level: Breaking — frontend cannot display correct values
Recommendation: Sync frontend and OpenAPI to backend contract
```

**Build note:** This is the "judge bait" panel. Non-engineer judges understand this immediately. Render from `businessImpact` field in drift JSON. Can be a bold card with red severity badge at top.

---

### Screen 6 — Fix Strategy

```
Bob's Recommended Fix Strategy

Recommended canonical contract:
Use backend's totalCents and uppercase status enum.

Why:
- Integer cents avoids floating-point currency bugs
- Backend change appears intentional (best practice)
- Frontend and docs are stale, not incorrect

Option A: Preserve old API contract
Backend maps totalCents back to total.

Option B (Recommended): Update frontend + docs
Frontend uses totalCents. OpenAPI updates to match.
```

**Build note:** Show both options. Highlight Option B. This shows Bob making an engineering judgment.

---

### Screen 7 — Patch Diff

**Frontend change:**
```diff
- total: `$${order.total.toFixed(2)}`,
- statusLabel: order.status === "paid" ? "Paid" : "Unknown"
+ total: `$${(order.totalCents / 100).toFixed(2)}`,
+ statusLabel: order.status === "PAID" ? "Paid" : "Unknown"
```

**OpenAPI change:**
```diff
- total:
-   type: number
- status:
-   enum: ["pending", "paid", "failed"]
+ totalCents:
+   type: integer
+   description: Total order amount in cents.
+ status:
+   enum: ["PENDING", "PAID", "FAILED"]
```

**Build note:** Syntax-highlighted diff view. Tab switcher: "Frontend" | "OpenAPI". Renders from Bob Task 2 fallback.

---

### Screen 8 — Contract Test

```typescript
test("checkout response contract matches frontend expectations", async () => {
  const response = await request(app).post("/checkout").send(validCart);

  expect(response.body).toMatchObject({
    orderId: expect.any(String),
    totalCents: expect.any(Number),
    status: "PAID"
  });

  expect(response.body.total).toBeUndefined();
});
```

**Optional:** Show ❌ FAIL before patch → ✅ PASS after. Strong proof.

---

### Screen 9 — Ticket / Owner Routing

```
Orchestrated Action

✓ Created high-priority contract drift task
✓ Assigned to: API Platform Team
✓ Notified: Frontend Owner + Backend Owner
✓ Attached: Bob drift report + patch diff

Task: Fix checkout API contract drift
Priority: High
Flow affected: Checkout confirmation
Due: Before next deploy
```

**Build note:** For MVP, this is a static UI card rendered from drift JSON. It simulates the workflow. If Orchestrate is easy to wire, make it real — but do not let this block the rest of the demo. This screen is gravy; the drift matrix + evidence trail is the core.

**watsonx Orchestrate (optional):** The guide says Orchestrate can import OpenAPI tools and build agents. If time permits, wire a real Orchestrate agent that receives the drift report and creates a task. Show it in the demo.

---

### Screen 10 — Fixed Checkout + PR Summary

**Fixed UI:**
```
Checkout Complete

Order ID: ORD-1042
Total: $84.70        ← green
Status: Paid         ← green
```

**PR Summary:**
```markdown
# Fix checkout API contract drift

## Drift Found
- Frontend expected `total`, backend returned `totalCents`
- Frontend expected lowercase status, backend returned uppercase
- OpenAPI documented the old response shape

## Fix
- Updated frontend formatter to use totalCents
- Updated status mapping for uppercase enum
- Updated OpenAPI schema
- Added contract regression test

## Risk
Low. Backend contract remains canonical.
Rollback: Revert frontend formatter only.
```

**Closing line on screen:**
> "APIDrift keeps your API promises from silently breaking your product."

---

## IBM Bob Tasks (5)

### Task 1: Analyze Contract Drift
```
Analyze this repo for API contract drift in the checkout flow.

Compare:
- frontend API usage in @apps/web/src/api/checkoutClient.ts
- checkout UI rendering in @apps/web/src/components/CheckoutSummary.tsx
- backend response in @apps/api/src/routes/checkout.ts
- OpenAPI contract in @contracts/openapi.yaml

Return:
1. mismatched fields with exact names
2. affected files and line numbers
3. severity of each mismatch (Breaking / Medium / Cosmetic)
4. business impact — what breaks for the user
5. root cause explanation
6. recommended fix strategy with reasoning
```

Save as: `drift-scanner/bob-task-1-analysis.md`

---

### Task 2: Generate the Patch
```
Patch the checkout flow so frontend and OpenAPI match the backend.
Use totalCents as canonical. Update:
- @apps/web/src/api/checkoutClient.ts (TypeScript types)
- @apps/web/src/components/CheckoutSummary.tsx (formatter)
- @contracts/openapi.yaml (schema + status enum)

Show before/after diff for each file. Explain each change.
```

Save as: `drift-scanner/bob-task-2-patch.md`

---

### Task 3: Generate Contract Test
```
Create a Jest + Supertest regression contract test for
@apps/api/src/routes/checkout.ts that:
- Tests totalCents exists and is a number
- Tests total does NOT exist (catches regressions)
- Tests status is "PAID" (uppercase)
- Is under 30 lines
```

Save as: `apps/api/src/tests/checkout.contract.test.ts`

---

### Task 4: Generate PR Summary
```
Generate a PR description for this API contract drift fix.
Include: what drifted, user impact, files changed, tests added,
why totalCents is canonical, rollback risk.
```

Save as: `drift-scanner/bob-task-4-pr-summary.md`

---

### Task 5: Create Bob Skill (STRETCH)
```
Create a reusable Bob skill called api-contract-drift-review
that guides Bob to compare frontend usage, backend implementation,
API docs, schema/types, and tests. Output: drift matrix, severity
classification, fix recommendation, patch plan, regression test plan.
```

Save as: `.bob/commands/api-contract-drift-review.md`

---

## Out of Scope (Locked)

| Feature | Reason |
|---|---|
| GraphQL / Protobuf support | OpenAPI only for MVP; mention in pitch as extension |
| Real-time every-commit alerts | Stretch; not MVP |
| Real Jira / Slack integration | Simulate ticket routing UI; Orchestrate optional |
| GitHub PR auto-creation | Generate PR summary content; not the actual PR |
| Multi-repo support | One monorepo demo only |
| Multiple drift scenarios | One checkout scenario done beautifully beats five mediocre ones |
| Auth / accounts / persistence | Not needed |
| watsonx.ai severity classification | Drift severity is hardcoded from Bob Task 1 output; watsonx.ai optional |

---

## Build Order (Critical Path)

```
1. Build broken checkout app (Express backend + Next.js frontend)
   → Backend returns totalCents; frontend reads total → $NaN renders

2. Build fixed checkout version
   → Confirms patch is correct before Bob generates it

3. Create drift data JSON with severity + business impact
   → Unblocks all 10 UI screens

4. Build APIDrift UI (all 10 screens, static data)
   → Get full story visible before polishing

5. Run Bob IDE Tasks 1–4; save as fallback files
   → Generate real Bob artifacts

6. Wire UI to fallback Bob outputs
   → UI renders Bob's actual generated content

7. Polish (Day 2 morning)
   → DriftMatrix colors, severity badges, animations, Bob sidebar

8. Screen 9 (ticket routing): build simulated UI card
   → Optional: wire Orchestrate agent

9. Record demo video
   → Always use saved fallback files; never depend on live Bob
```

---

## Demo-Ready Milestone

- [ ] Broken checkout renders $NaN and "Unknown" (real, not mocked)
- [ ] All 10 screens render without errors
- [ ] Drift matrix shows severity badges with correct colors
- [ ] Bob evidence trail renders from Task 1 fallback file
- [ ] Severity + business impact panel renders
- [ ] Patch diff displays with syntax highlighting
- [ ] Contract test visible (pass/fail optional)
- [ ] Ticket routing screen visible (simulated OK)
- [ ] Fixed checkout renders $84.70 and "Paid"
- [ ] PR summary renders completely
- [ ] "Powered by IBM Bob" sidebar visible throughout
- [ ] All Bob task sessions exported → bob_sessions/
