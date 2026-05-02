> Generated against an empty repo on 2026-05-01. Most sections are intentionally TBD — fill in as decisions land.

## Project Snapshot

This is a 2–3 person hackathon build targeting the IBM Spring 2026 theme **"Turn idea into impact faster."** The solution is a developer-productivity tool — the exact idea, scope, and stack are TBD, but the build must demonstrably reduce friction in at least one of: onboarding to a codebase, generating docs/tests, or automating repetitive multi-step dev work. IBM Bob does meaningful work inside the product (not just name-dropped). Submission deadline is under 48 hours from kickoff.

## Architecture + File Map

TBD — fill in once code lands and structure is clear.

## Build / Run / Test Commands

TBD — fill in once tooling and package manager are chosen.

## IBM Bob Usage

- **Env vars / credentials:** TODO: verify against IBM Bob docs.
- **CLI / SDK invocation:** TODO: verify against IBM Bob docs.
- **Where Bob session artifacts live:** TODO: confirm export path/format with IBM Bob docs.

**Non-negotiable:** Export Bob sessions continuously from day one. Deliverable #4 requires a full exported IBM Bob report of all relevant tasks/sessions used during the build. Do not wait until the end to export — capture as you go.

## Coding Conventions

TBD — fill in once language and linter are chosen.

## Submission Checklist

Map 1:1 to required deliverables:

- [ ] **Video demo** — screen recording showing IBM Bob doing meaningful work in the product.
- [ ] **Problem statement + solution statement** — written doc explaining the dev-productivity problem and how the tool solves it.
- [ ] **IBM Bob utilization statement** — written explanation of exactly how and where Bob was used in the build.
- [ ] **Working code repo + IBM Bob session export** — pushed repo (or POC evidence) plus the exported Bob report covering all tasks/sessions from the sprint.

## Guardrails for Codex

- Never commit secrets, API keys, or `.env` files.
- Do not refactor broadly or restructure unrelated code during the sprint — keep diffs focused.
- When unsure about IBM Bob APIs, commands, or config: fetch real IBM Bob docs rather than guessing. Do not fabricate invocation details.
- Capture Bob sessions as work happens — do not defer export to the last hour.

## Open Questions / TBD

- **Idea** — what specific developer-productivity problem are we solving?
- **Problem we're solving** — who is the user, what is their pain, what does "impact faster" mean for them?
- **Stack** — language(s), framework(s), runtime environment?
- **Hosting / infra** — local-only POC, cloud deployment, or both?
- **Demo format** — live demo vs. pre-recorded video; what scenario to walk through?
- **Exact Bob workflows** — which Bob capabilities (repo explanation, doc generation, test generation, code transformation, other) map to our product's core loop?
- **Team ownership** — who owns what slice of the build?

Keep this section alive — strike items and fill in answers as decisions land.
