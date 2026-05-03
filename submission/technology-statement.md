# APIDrift — Statement on Technology

**Word count: ~480**

---

IBM Bob (Bob IDE) is the core analytical and generative engine of APIDrift — not a wrapper, not a name-drop. Every artifact APIDrift produces comes from a Bob session. All work was performed under the hackathon-provisioned account (`ibm-coding-challenge-xxx`); full session reports with consumption summaries are exported to `bob_sessions/`.

## How and Where Bob Was Used

**Task 1 — Repo-wide drift analysis.** Bob was given `@`-references to four files simultaneously: the frontend API client (`apps/web/src/api/checkoutClient.ts`), checkout UI component (`apps/web/src/components/CheckoutSummary.tsx`), backend route handler (`apps/api/src/routes/checkout.ts`), and OpenAPI specification (`contracts/openapi.yaml`). Using Bob's repo-wide context, it compared field names, types, enum casing, and semantic meaning across all four files in one pass. Bob identified three breaking mismatches (`total` vs `totalCents`, dollars vs cents semantic drift, lowercase vs uppercase status enum), classified each by severity (Breaking / Medium / Cosmetic), described the business impact on the checkout confirmation flow, and identified the backend as the canonical source of truth — explaining the engineering rationale (integer cents avoids floating-point currency precision bugs). Output saved as `drift-scanner/bob-task-1-analysis.md` and surfaced in the APIDrift UI as the Drift Matrix, Bob Evidence Trail, and Severity + Business Impact panels.

**Task 2 — Patch generation.** Bob generated before/after diffs for the frontend formatter (use `totalCents`, map `"PAID"` to `"Paid"`) and the OpenAPI spec (replace `total: number` with `totalCents: integer`, uppercase enum values), with per-change explanations. Output: `drift-scanner/bob-task-2-patch.md`. Renders in the Patch Diff screen.

**Task 3 — Contract test generation.** Bob generated a Jest + Supertest regression test asserting `totalCents` exists as a Number, the deprecated `total` field does NOT exist, and `status === "PAID"`. Output: `apps/api/src/tests/checkout.contract.test.ts` — runnable, not pseudocode.

**Task 4 — PR summary.** Bob produced a complete PR description: drift summary, user impact, files changed, tests added, engineering rationale, rollback risk. Output: `drift-scanner/bob-task-4-pr-summary.md`.

**Task 5 (stretch) — Reusable Bob Skill.** A custom `api-contract-drift-review` skill saved to `.bob/commands/`, so any repo can be scanned with the same workflow.

## Why Bob, Not a Diff Tool

Contract drift is a semantic reasoning problem. Bob understands that `"paid"` → `"PAID"` breaks every frontend equality check — not because the strings differ, but because of what that field *means* in a checkout flow. Bob also reasons about *intent*: the backend change to integer cents is correct and intentional, so the frontend should adapt to the backend, not the reverse. That judgment — which layer is the canonical source of truth — is what Bob uniquely provides.

## watsonx Orchestrate (Stretch)

Screen 9 (Ticket Routing) is wired to demonstrate watsonx Orchestrate as a downstream action layer: Bob's drift report is handed to an Orchestrate agent that creates a high-priority task, assigns it to the API Platform Team, and notifies the frontend and backend owners with the patch diff attached. If Orchestrate wiring isn't completed in time, the screen renders as a simulated workflow card driven by the same drift JSON.

## watsonx.ai

Not used in the MVP. Severity classification is performed by Bob in Task 1 rather than offloaded to a separate watsonx.ai model. Noted as a future extension: a watsonx.ai classifier could provide a second-opinion severity score across many drift instances at scale.
