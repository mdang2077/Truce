**User:**

<task>
Read all md files to prepare to build. There should be plans to build somewhere
</task>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:51:13.046Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>


# Current Workspace Directory (/Users/mdang/Coding/Hackathons/IBMSpring2026/ibm-hackathon-w-Xiate) Files
AGENTS.md
CLAUDE.md
apidrift/
apidrift/apps/
apidrift/apps/api/
apidrift/apps/api/jest.config.js
apidrift/apps/api/package.json
apidrift/apps/api/tsconfig.json
apidrift/apps/api/src/
apidrift/apps/api/src/server.ts
apidrift/apps/api/src/routes/
apidrift/apps/api/src/routes/.gitkeep
apidrift/apps/api/src/routes/checkout.ts
apidrift/apps/api/src/tests/
apidrift/apps/api/src/tests/checkout.contract.test.ts
apidrift/apps/web/
apidrift/apps/web/src/
apidrift/apps/web/src/api/
apidrift/apps/web/src/api/.gitkeep
apidrift/apps/web/src/components/
apidrift/apps/web/src/components/.gitkeep
apidrift/apps/web/src/pages/
apidrift/apps/web/src/pages/.gitkeep
bob_sessions/
bob_sessions/b.txt
vault/
vault/00 Command Center.md.md
vault/01 Project Brief.md.md
vault/02 Research.md.md
vault/03 MVP Scope.md.md
vault/04 Technical Architecture.md.md
vault/05 Task Board.md.md
vault/06 Demo and Pitch.md.md
vault/07 Judge Q&A.md.md
vault/08 Bugs and QA.md.md
vault/09 Context Packets.md.md
vault/10 AI Specialist Outputs.md
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll read all the markdown files to understand the project plans and current state.

<read_file>
<args>
<file>
<path>AGENTS.md</path>
</file>
<file>
<path>CLAUDE.md</path>
</file>
<file>
<path>vault/00 Command Center.md.md</path>
</file>
<file>
<path>vault/01 Project Brief.md.md</path>
</file>
<file>
<path>vault/02 Research.md.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>AGENTS.md</path>
<content lines="1-53">
 1 | > Generated against an empty repo on 2026-05-01. Most sections are intentionally TBD — fill in as decisions land.
 2 | 
 3 | ## Project Snapshot
 4 | 
 5 | This is a 2–3 person hackathon build targeting the IBM Spring 2026 theme **"Turn idea into impact faster."** The solution is a developer-productivity tool — the exact idea, scope, and stack are TBD, but the build must demonstrably reduce friction in at least one of: onboarding to a codebase, generating docs/tests, or automating repetitive multi-step dev work. IBM Bob does meaningful work inside the product (not just name-dropped). Submission deadline is under 48 hours from kickoff.
 6 | 
 7 | ## Architecture + File Map
 8 | 
 9 | TBD — fill in once code lands and structure is clear.
10 | 
11 | ## Build / Run / Test Commands
12 | 
13 | TBD — fill in once tooling and package manager are chosen.
14 | 
15 | ## IBM Bob Usage
16 | 
17 | - **Env vars / credentials:** TODO: verify against IBM Bob docs.
18 | - **CLI / SDK invocation:** TODO: verify against IBM Bob docs.
19 | - **Where Bob session artifacts live:** TODO: confirm export path/format with IBM Bob docs.
20 | 
21 | **Non-negotiable:** Export Bob sessions continuously from day one. Deliverable #4 requires a full exported IBM Bob report of all relevant tasks/sessions used during the build. Do not wait until the end to export — capture as you go.
22 | 
23 | ## Coding Conventions
24 | 
25 | TBD — fill in once language and linter are chosen.
26 | 
27 | ## Submission Checklist
28 | 
29 | Map 1:1 to required deliverables:
30 | 
31 | - [ ] **Video demo** — screen recording showing IBM Bob doing meaningful work in the product.
32 | - [ ] **Problem statement + solution statement** — written doc explaining the dev-productivity problem and how the tool solves it.
33 | - [ ] **IBM Bob utilization statement** — written explanation of exactly how and where Bob was used in the build.
34 | - [ ] **Working code repo + IBM Bob session export** — pushed repo (or POC evidence) plus the exported Bob report covering all tasks/sessions from the sprint.
35 | 
36 | ## Guardrails for Codex
37 | 
38 | - Never commit secrets, API keys, or `.env` files.
39 | - Do not refactor broadly or restructure unrelated code during the sprint — keep diffs focused.
40 | - When unsure about IBM Bob APIs, commands, or config: fetch real IBM Bob docs rather than guessing. Do not fabricate invocation details.
41 | - Capture Bob sessions as work happens — do not defer export to the last hour.
42 | 
43 | ## Open Questions / TBD
44 | 
45 | - **Idea** — what specific developer-productivity problem are we solving?
46 | - **Problem we're solving** — who is the user, what is their pain, what does "impact faster" mean for them?
47 | - **Stack** — language(s), framework(s), runtime environment?
48 | - **Hosting / infra** — local-only POC, cloud deployment, or both?
49 | - **Demo format** — live demo vs. pre-recorded video; what scenario to walk through?
50 | - **Exact Bob workflows** — which Bob capabilities (repo explanation, doc generation, test generation, code transformation, other) map to our product's core loop?
51 | - **Team ownership** — who owns what slice of the build?
52 | 
53 | Keep this section alive — strike items and fill in answers as decisions land.
</content>
</file>
<file><path>CLAUDE.md</path>
<content lines="1-53">
 1 | > Generated against an empty repo on 2026-05-01. Most sections are intentionally TBD — fill in as decisions land.
 2 | 
 3 | ## Project Snapshot
 4 | 
 5 | This is a 2–3 person hackathon build targeting the IBM Spring 2026 theme **"Turn idea into impact faster."** The solution is a developer-productivity tool — the exact idea, scope, and stack are TBD, but the build must demonstrably reduce friction in at least one of: onboarding to a codebase, generating docs/tests, or automating repetitive multi-step dev work. IBM Bob does meaningful work inside the product (not just name-dropped). Submission deadline is under 48 hours from kickoff.
 6 | 
 7 | ## Architecture + File Map
 8 | 
 9 | TBD — fill in once code lands and structure is clear.
10 | 
11 | ## Build / Run / Test Commands
12 | 
13 | TBD — fill in once tooling and package manager are chosen.
14 | 
15 | ## IBM Bob Usage
16 | 
17 | - **Env vars / credentials:** TODO: verify against IBM Bob docs.
18 | - **CLI / SDK invocation:** TODO: verify against IBM Bob docs.
19 | - **Where Bob session artifacts live:** TODO: confirm export path/format with IBM Bob docs.
20 | 
21 | **Non-negotiable:** Export Bob sessions continuously from day one. Deliverable #4 requires a full exported IBM Bob report of all relevant tasks/sessions used during the build. Do not wait until the end to export — capture as you go.
22 | 
23 | ## Coding Conventions
24 | 
25 | TBD — fill in once language and linter are chosen.
26 | 
27 | ## Submission Checklist
28 | 
29 | Map 1:1 to required deliverables:
30 | 
31 | - [ ] **Video demo** — screen recording showing IBM Bob doing meaningful work in the product.
32 | - [ ] **Problem statement + solution statement** — written doc explaining the dev-productivity problem and how the tool solves it.
33 | - [ ] **IBM Bob utilization statement** — written explanation of exactly how and where Bob was used in the build.
34 | - [ ] **Working code repo + IBM Bob session export** — pushed repo (or POC evidence) plus the exported Bob report covering all tasks/sessions from the sprint.
35 | 
36 | ## Guardrails for Claude Code
37 | 
38 | - Never commit secrets, API keys, or `.env` files.
39 | - Do not refactor broadly or restructure unrelated code during the sprint — keep diffs focused.
40 | - When unsure about IBM Bob APIs, commands, or config: fetch real IBM Bob docs rather than guessing. Do not fabricate invocation details.
41 | - Capture Bob sessions as work happens — do not defer export to the last hour.
42 | 
43 | ## Open Questions / TBD
44 | 
45 | - **Idea** — what specific developer-productivity problem are we solving?
46 | - **Problem we're solving** — who is the user, what is their pain, what does "impact faster" mean for them?
47 | - **Stack** — language(s), framework(s), runtime environment?
48 | - **Hosting / infra** — local-only POC, cloud deployment, or both?
49 | - **Demo format** — live demo vs. pre-recorded video; what scenario to walk through?
50 | - **Exact Bob workflows** — which Bob capabilities (repo explanation, doc generation, test generation, code transformation, other) map to our product's core loop?
51 | - **Team ownership** — who owns what slice of the build?
52 | 
53 | Keep this section alive — strike items and fill in answers as decisions land.
</content>
</file>
<file><path>vault/00 Command Center.md.md</path>
<content lines="1-201">
  1 | # Hackathon Command Center
  2 | 
  3 | ## Current Project State
  4 | 
  5 | Project Name: APIDrift
  6 | Subtitle: API Drift Detector & Sync Agent
  7 | One-Liner: APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart — classifies severity, identifies business impact, patches the mismatch, creates a contract test, and routes the fix to the right team.
  8 | Tagline: "Bob catches API drift before your users do."
  9 | Enterprise Tagline: "Keep frontend, backend, and API contracts in sync automatically."
 10 | Target User: Frontend + backend engineers and tech leads at fast-moving product teams
 11 | Core Problem: Contract drift — one layer changes, the others don't. The backend is correct, the frontend is correct, but the product is broken because they no longer agree.
 12 | Core Solution: IBM Bob compares frontend usage, backend routes, and OpenAPI docs → drift matrix with severity + business impact + patch + contract test + ticket routing + PR summary
 13 | Current MVP: Broken checkout demo app + APIDrift UI (10 screens) + 5 Bob IDE tasks
 14 | Tech Stack: Next.js 14 + Tailwind (APIDrift UI + demo frontend), Express + TypeScript (demo API), OpenAPI YAML, Jest + Supertest, react-syntax-highlighter
 15 | Current Status: All planning complete — READY TO BUILD (as of 2026-05-01)
 16 | 
 17 | **Hackathon Theme:** "Turn idea into impact faster"
 18 | **Theme Alignment:** Debugging + docs/tests + repetitive task reduction + faster delivery → specific contract safety use case
 19 | 
 20 | ---
 21 | 
 22 | ## ⚠️ PIVOT NOTE
 23 | Project pivoted from Incident Detective to APIDrift on 2026-05-01.
 24 | All Incident Detective planning preserved in 10 AI Specialist Outputs.md §1–§5.
 25 | 
 26 | ---
 27 | 
 28 | ## Submission Checklist
 29 | 
 30 | **Deadline: 10:00 AM ET, May 3, 2026**
 31 | 
 32 | | Deliverable | Status | Notes |
 33 | |---|---|---|
 34 | | ☐ Video demo (max 3 min, ≥90s showing solution) | ⬜ TODO | Script in 06 Demo and Pitch.md |
 35 | | ☐ Written problem + solution statement (≤500 words) | ⬜ TODO | Paste-ready in 06 |
 36 | | ☐ Written IBM Bob usage statement | ⬜ TODO | Paste-ready in 06 |
 37 | | ☐ GitHub repo (public) + `/bob_sessions` folder | ⬜ TODO | Create before first Bob task |
 38 | | ☐ Bob task session reports | ⬜ TODO | Screenshot + markdown per task → bob_sessions/ |
 39 | 
 40 | **Bob Sessions Export:**
 41 | 1. Create `bob_sessions/` before first Bob task
 42 | 2. Bob IDE → Views and More Actions → History
 43 | 3. Per task: click header → screenshot summary + export markdown
 44 | 4. Upload all to `bob_sessions/`
 45 | 
 46 | ---
 47 | 
 48 | ## Top Priorities
 49 | 
 50 | 1. ~~Confirm IBM Bob requirements~~ ✅ Done
 51 | 2. ~~Lock project idea~~ ✅ Done — APIDrift
 52 | 3. ~~Define MVP scope + architecture~~ ✅ Done — 10 screens, 5 Bob tasks
 53 | 4. ~~Demo + Pitch package~~ ✅ Done — script, statements, Q&A ready
 54 | 5. ~~Bob analyzed vault + confirmed project structure~~ ✅ Done — setup guide confirmed
 55 | 6. **Build broken checkout app** — $NaN must render before anything else
 56 | 7. **Build APIDrift UI (all 10 screens, static data)** — full story visible
 57 | 8. **Run Bob IDE Tasks 1–4** — generate real artifacts, save fallbacks
 58 | 
 59 | ---
 60 | 
 61 | ## Active Tasks
 62 | 
 63 | | Task | Owner | Status | Notes |
 64 | |---|---|---|---|
 65 | | Confirm IBM Bob requirements | Havyn | ✅ DONE | Bob IDE required; ibm-coding-challenge-xxx |
 66 | | Lock project idea | Havyn | ✅ DONE | APIDrift |
 67 | | Fill 01 Project Brief | Command Center | ✅ DONE | APIDrift brief |
 68 | | Fill 03 MVP Scope | Command Center | ✅ DONE | 10 screens + 5 tasks |
 69 | | Fill 04 Technical Architecture | Command Center | ✅ DONE | Stack + setup + Bob prompts |
 70 | | Fill 06 Demo and Pitch | Command Center | ✅ DONE | Full script + paste-ready statements |
 71 | | Fill 07 Judge Q&A | Command Center | ✅ DONE | 5 Q&A pairs |
 72 | | Bob analyzed vault + confirmed setup | Bob IDE | ✅ DONE | Node 18+, npm 9+, Jest ts-jest confirmed |
 73 | | Create `bob_sessions/` folder in repo | Havyn | ⬜ TODO | Before first Bob task |
 74 | | Run setup commands (see 04 Arch) | Havyn | ⬜ TODO | mkdir structure → create-next-app → init Express |
 75 | | Build broken checkout backend (totalCents, PAID) | Havyn | ⬜ TODO | Express; port 3001 |
 76 | | Build broken checkout frontend (reads total → $NaN) | Havyn | ⬜ TODO | Next.js; port 3000 |
 77 | | Confirm $NaN renders large + red | Havyn | ⬜ TODO | text-4xl text-red-600 font-bold |
 78 | | Build fixed checkout version | Havyn | ⬜ TODO | Confirms patch before Bob generates it |
 79 | | Create drift data JSON (severity + businessImpact) | Havyn | ⬜ TODO | Schema in 04 Technical Architecture |
 80 | | Build APIDrift UI — all 10 screens (static data) | Havyn | ⬜ TODO | DriftMatrix.tsx is priority |
 81 | | Run Bob Task 1: Analyze contract drift + severity | Havyn | ⬜ TODO | Save as bob-task-1-analysis.md |
 82 | | Run Bob Task 2: Generate patch | Havyn | ⬜ TODO | Save as bob-task-2-patch.md |
 83 | | Run Bob Task 3: Generate contract test | Havyn | ⬜ TODO | Save as checkout.contract.test.ts |
 84 | | Run Bob Task 4: Generate PR summary | Havyn | ⬜ TODO | Save as bob-task-4-pr-summary.md |
 85 | | Wire UI to Bob fallback outputs | Havyn | ⬜ TODO | Replace static strings with saved Bob content |
 86 | | Polish APIDrift UI (Day 2) | Havyn | ⬜ TODO | Severity badges, animations, Bob sidebar |
 87 | | Run Bob Task 5: Bob Skill (stretch) | Havyn | ⬜ TODO | Only after MVP complete |
 88 | | Wire Orchestrate ticket routing (stretch) | Havyn | ⬜ TODO | Only if time; simulate otherwise |
 89 | | Record video demo | Havyn | ⬜ TODO | Use script from 06; always use fallback files |
 90 | | Write problem + solution statement | Havyn | ⬜ TODO | Paste from 06 |
 91 | | Write IBM Bob usage statement | Havyn | ⬜ TODO | Paste from 06 |
 92 | | Export all Bob task session reports | Havyn | ⬜ TODO | Screenshots + markdown → bob_sessions/ |
 93 | | Submit on hackathon platform | Havyn | ⬜ TODO | Before 10:00 AM ET May 3 |
 94 | 
 95 | ---
 96 | 
 97 | ## Decisions Made
 98 | 
 99 | | Decision | Reason | Date |
100 | |---|---|---|
101 | | Pivoted to APIDrift | Sharper demo, stronger Bob showcase, more original | 2026-05-01 |
102 | | Subtitle: "API Drift Detector & Sync Agent" | Enterprise framing; broader judge appeal | 2026-05-01 |
103 | | Demo scenario: checkout drift (totalCents + PAID) | Most visual, immediately understandable | 2026-05-01 |
104 | | Severity levels: Breaking / Medium / Cosmetic | Makes drift actionable; feels like a real engineering tool | 2026-05-01 |
105 | | Business impact panel (Screen 5) | Non-engineer judges understand immediately | 2026-05-01 |
106 | | Ticket routing (Screen 9, simulated) | Enterprise workflow demo; Orchestrate optional | 2026-05-01 |
107 | | Fix direction: frontend + docs match backend | totalCents is intentional, best practice | 2026-05-01 |
108 | | Build broken app first | $NaN must exist before UI story makes sense | 2026-05-01 |
109 | | Hardcode drift JSON with severity + businessImpact + ticketRouting | Unblocks all 10 screens without scanner | 2026-05-01 |
110 | | Save all Bob outputs as fallback files | Demo never depends on live Bob latency | 2026-05-01 |
111 | | OpenAPI only (no GraphQL/Protobuf in MVP) | Scope discipline; mention extension in pitch | 2026-05-01 |
112 | | No real-time alerts, no real Jira/Slack/GitHub PR | Out of scope; simulate where needed | 2026-05-01 |
113 | | One monorepo demo only | Multi-repo adds complexity without demo value | 2026-05-01 |
114 | | Bob IDE required; ibm-coding-challenge-xxx only | Per official guide | 2026-05-01 |
115 | | Monorepo: npm workspaces + concurrently | Confirmed by Bob analysis; run all 3 apps with npm run dev:all | 2026-05-01 |
116 | | Jest config: ts-jest preset, node test environment | Confirmed by Bob analysis | 2026-05-01 |
117 | 
118 | ---
119 | 
120 | ## Risks / Blockers
121 | 
122 | | Risk | Impact | Mitigation |
123 | |---|---|---|
124 | | $NaN not visually compelling | High — kills the hook | `text-4xl text-red-600 font-bold`; force string `"$NaN"` if browser converts |
125 | | Port conflicts on 3000/3001/3002 | Medium | Check `lsof -i :PORT` before starting; kill blocking processes |
126 | | CORS between localhost:3000/3002 and localhost:3001 | Low | Add `cors()` middleware to Express — 2-line fix |
127 | | Bob Task 1 vague on severity | Medium | Prompt explicitly asks Breaking/Medium/Cosmetic; retry if needed |
128 | | DriftMatrix polish takes too long | Medium | Build with basic Tailwind first; polish Day 2 |
129 | | SeverityImpact card looks generic | Medium | Use "checkout confirmation flow" specifically; red badge; bold text |
130 | | bob_sessions not captured | High — required deliverable | Create folder before first task; export after every session |
131 | | Accidentally using personal Bob account | Medium | Check ibm-coding-challenge-xxx in settings before every session |
132 | | Next.js caching / slow hot reload | Low | Use `next dev --turbo` flag |
133 | 
134 | ---
135 | 
136 | ## Bobcoin Budget
137 | 
138 | | Phase | Bobcoins |
139 | |---|---|
140 | | Task 1: Drift analysis + severity | ~2 |
141 | | Task 2: Patch generation | ~2 |
142 | | Task 3: Contract test | ~1 |
143 | | Task 4: PR summary | ~1 |
144 | | Task 5: Bob Skill (stretch) | ~2 |
145 | | Retries / buffer | ~10 |
146 | | **Total estimate** | **~8–18 / 40** |
147 | 
148 | ---
149 | 
150 | ## Day-by-Day Build Plan
151 | 
152 | ### Day 1 — Get the full ugly demo working
153 | 
154 | **Morning (3–4h):**
155 | - [ ] Run setup commands (see 04 Technical Architecture)
156 | - [ ] Build broken checkout backend (totalCents/PAID) + frontend (reads total → $NaN)
157 | - [ ] Verify: `localhost:3000/checkout` shows $NaN large and red
158 | - [ ] Build fixed checkout version
159 | - [ ] Create `drift-scanner/sample-drift-output.json` (schema in 04)
160 | - [ ] Build APIDrift UI — all 10 screens, static/hardcoded data
161 | 
162 | **End of Day 1 morning checkpoint:** Click through all 10 screens. Ugly is fine. Must exist.
163 | 
164 | **Afternoon (3–4h):**
165 | - [ ] Create `bob_sessions/` folder in project root
166 | - [ ] Run Bob Tasks 1–4 in Bob IDE; save all outputs as fallback files
167 | - [ ] Screenshot + export every Bob task session → bob_sessions/
168 | - [ ] Wire UI to saved Bob outputs (replace hardcoded strings)
169 | 
170 | ### Day 2 — Make it feel like a product
171 | 
172 | **Morning (2–3h):**
173 | - [ ] Polish DriftMatrix — severity badges, row tinting
174 | - [ ] Polish SeverityImpact — bold 🔴 HIGH badge, specific flow name
175 | - [ ] Add "Powered by IBM Bob" sidebar throughout
176 | - [ ] Add "Bob is analyzing..." scan animation
177 | - [ ] Add before/after state on fixed checkout
178 | 
179 | **Afternoon (2–3h):**
180 | - [ ] Run Bob Task 5 (Bob Skill) if time
181 | - [ ] Wire Orchestrate ticket routing if time
182 | - [ ] Record video demo (target 2:45; script in 06)
183 | - [ ] Paste written statements from 06
184 | - [ ] Export final Bob sessions; submit before 10:00 AM ET
185 | 
186 | ---
187 | 
188 | ## Coordination Map
189 | 
190 | | File | Domain | Status |
191 | |---|---|---|
192 | | 01 Project Brief | Idea + problem/solution | ✅ Done |
193 | | 02 Research | Market context | ⬜ TODO |
194 | | 03 MVP Scope | 10 screens + 5 Bob tasks | ✅ Done |
195 | | 04 Technical Architecture | Stack + setup + JSON schema + Bob prompts | ✅ Done |
196 | | 05 Task Board | Execution tracking | ⬜ TODO |
197 | | 06 Demo and Pitch | Script + statements (paste-ready) | ✅ Done |
198 | | 07 Judge Q&A | 5 Q&A pairs | ✅ Done |
199 | | 08 Bugs and QA | Issues + fixes | ⬜ TODO |
200 | | 09 Context Packets | Source of truth | ✅ Active |
201 | | 10 AI Specialist Outputs | Session outputs (Incident Detective history preserved) | ✅ Active |
</content>
</file>
<file><path>vault/01 Project Brief.md.md</path>
<content lines="1-161">
  1 | # Project Brief — APIDrift
  2 | 
  3 | **Created:** 2026-05-01
  4 | **Pivoted from:** Incident Detective
  5 | **Status:** Locked ✅
  6 | 
  7 | ---
  8 | 
  9 | ## Project Identity
 10 | 
 11 | **Project Name:** APIDrift
 12 | 
 13 | **One-Liner:**
 14 | APIDrift uses IBM Bob to detect mismatches between frontend API usage, backend responses, and API documentation — then generates the patch, contract test, and PR summary.
 15 | 
 16 | **Taglines:**
 17 | - "Bob catches API drift before your users do." ← primary
 18 | - "Your frontend, backend, and docs finally agree."
 19 | - "Contract safety for fast-moving teams."
 20 | - "Bob keeps your API promises honest."
 21 | 
 22 | **Stronger pitch one-liner:**
 23 | APIDrift turns IBM Bob into a repo-wide contract detective that finds where your API promise broke, fixes the mismatch, and prevents it from coming back.
 24 | 
 25 | ---
 26 | 
 27 | ## The Core Insight
 28 | 
 29 | Most bugs are not "the code is completely broken." A lot of real bugs happen because **one part of the system changed and the other parts didn't.**
 30 | 
 31 | This is contract drift:
 32 | 
 33 | ```
 34 | Backend now returns:    { "totalCents": 8470, "status": "PAID" }
 35 | Frontend still expects: { "total": 84.70,    "status": "paid" }
 36 | OpenAPI docs still say: { "total": number,   "status": "paid" }
 37 | ```
 38 | 
 39 | Result: checkout page shows **$NaN** and **Payment status: Unknown**. The backend is technically working. The frontend code has no syntax errors. But the product is broken.
 40 | 
 41 | APIDrift makes IBM Bob the "contract detective" — comparing all three layers simultaneously and reasoning about where the promise broke.
 42 | 
 43 | ---
 44 | 
 45 | ## Target User
 46 | 
 47 | Frontend and backend engineers, tech leads, and engineering managers at fast-moving product teams.
 48 | 
 49 | **User Profile:**
 50 | - Moves fast; API response shapes change frequently during development
 51 | - Doesn't always have strict contract enforcement (no strict OpenAPI validation in CI)
 52 | - Has experienced the pain of debugging a bug that "shouldn't exist" — code looks fine, but something disagrees somewhere
 53 | - Would benefit from a tool that catches drift before it ships
 54 | 
 55 | ---
 56 | 
 57 | ## Problem Statement
 58 | 
 59 | Fast-moving teams constantly change APIs. But when the backend, frontend, and docs move at different speeds, bugs slip through. A field gets renamed, an enum changes casing, or a currency value changes from dollars to cents. The backend may be working exactly as written — but the product is broken because the system no longer agrees with itself.
 60 | 
 61 | **This is contract drift.** And it's invisible until a user sees it.
 62 | 
 63 | Current tools don't solve this:
 64 | - TypeScript types help within a layer but don't span frontend/backend/docs
 65 | - Code review catches syntax but not semantic contract mismatches across files
 66 | - API monitoring (DataDog, PagerDuty) fires after users are already affected
 67 | 
 68 | The gap: no tool reads the full repo context — frontend usage, backend implementation, AND API documentation simultaneously — and reasons about where they disagree.
 69 | 
 70 | ---
 71 | 
 72 | ## Solution Statement
 73 | 
 74 | APIDrift uses IBM Bob as a repo-wide contract detective.
 75 | 
 76 | Given a repo with drift:
 77 | 1. Bob compares frontend API client code, backend route handlers, and OpenAPI documentation
 78 | 2. Bob produces a **drift matrix** showing exactly which fields disagree and how
 79 | 3. Bob reasons about which layer should be the source of truth
 80 | 4. Bob generates: the patch (updated frontend or backend), updated OpenAPI docs, a regression contract test, and a PR summary
 81 | 
 82 | **IBM Bob is central — not background.** Bob's repo-wide context understanding is what makes this possible. This isn't a YAML diffing tool — it's semantic reasoning across multiple files and layers simultaneously.
 83 | 
 84 | ---
 85 | 
 86 | ## Demo Story
 87 | 
 88 | **The specific bug:** A backend developer changed the checkout API response:
 89 | - `total: 84.70` → `totalCents: 8470` (safer currency representation)
 90 | - `status: "paid"` → `status: "PAID"` (uppercase enum)
 91 | 
 92 | Frontend and docs were not updated.
 93 | 
 94 | **What the user sees:** Checkout shows `Total: $NaN` and `Payment status: Unknown`.
 95 | 
 96 | **What APIDrift does:**
 97 | 1. Scans frontend client, UI component, backend route, and OpenAPI spec
 98 | 2. Displays drift matrix — which fields disagree, where, and how
 99 | 3. Shows Bob's evidence trail — what Bob traced and why it concluded this
100 | 4. Recommends fix strategy: update frontend + docs to match the intentional backend change
101 | 5. Generates patch (frontend formatter), docs update (OpenAPI YAML), contract test (Jest), and PR summary
102 | 
103 | **The "wow" moment:** Bob understands this isn't just a missing field — it's a disagreement across product behavior, frontend assumptions, backend implementation, and public API documentation. The drift matrix makes that instantly visible.
104 | 
105 | ---
106 | 
107 | ## Pitch Angles
108 | 
109 | **30-second version:**
110 | APIs break even when the backend technically works. The real problem is contract drift: the frontend expects one response shape, the backend returns another, and the docs still promise something else. APIDrift uses IBM Bob as a repo-wide contract detective. Bob compares frontend usage, backend implementation, OpenAPI docs, and tests — then identifies the drift, recommends the canonical contract, generates the patch, updates the docs, and adds a contract test so the mismatch never ships again.
111 | 
112 | **Business value:**
113 | - Prevents integration bugs before they reach users
114 | - Reduces debugging time for cross-layer mismatches (notoriously slow to diagnose)
115 | - Generates PR-ready artifacts — patch + test + docs + summary — from a single Bob analysis
116 | - Scales to any codebase Bob can read
117 | 
118 | ---
119 | 
120 | ## Hackathon Theme Alignment
121 | 
122 | Theme: "Turn idea into impact faster"
123 | 
124 | APIDrift combines IBM's listed example use cases:
125 | - **Debugging:** find where the real root cause is (contract layer, not code layer)
126 | - **Docs/tests:** generate contract tests and update OpenAPI automatically
127 | - **Repetitive task reduction:** eliminate manual cross-layer contract checking
128 | - **Faster delivery:** catch drift before it ships instead of after
129 | 
130 | ---
131 | 
132 | ## MVP Scope (5 things — from 03 MVP Scope.md)
133 | 
134 | 1. Show a broken app caused by API drift
135 | 2. Compare frontend/backend/OpenAPI contract sources
136 | 3. Display Bob's evidence trail
137 | 4. Show Bob-generated patch, docs update, and test
138 | 5. Show the fixed app and generated PR summary
139 | 
140 | ---
141 | 
142 | ## Tech Stack (from 04 Technical Architecture.md)
143 | 
144 | | Layer | Technology |
145 | |---|---|
146 | | APIDrift UI | Next.js + Tailwind |
147 | | Demo checkout app | Next.js frontend + Express backend |
148 | | Contract file | OpenAPI YAML |
149 | | Contract tests | Jest + Supertest |
150 | | Drift scanner | TypeScript (reads hardcoded/sample files) |
151 | | Bob outputs | Saved Markdown/JSON fallback files |
152 | | IBM Bob | Bob IDE (required) — 5 tasks |
153 | 
154 | ---
155 | 
156 | ## Open Questions
157 | 
158 | 1. Demo repo bug: confirmed as checkout drift (totalCents + PAID enum) ✅
159 | 2. Fix direction: update frontend + docs to match backend ✅
160 | 3. Bob task prompts: defined in 04 Technical Architecture.md ✅
161 | 4. Stretch: watsonx Orchestrate "Release Contract Assistant" — only if MVP done with time to spare
</content>
</file>
<file><path>vault/02 Research.md.md</path>
<content/><notice>File is empty</notice>
</file>
</files>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:51:19.806Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.01

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<read_file>
<args>
<file>
<path>vault/03 MVP Scope.md.md</path>
</file>
<file>
<path>vault/04 Technical Architecture.md.md</path>
</file>
<file>
<path>vault/05 Task Board.md.md</path>
</file>
<file>
<path>vault/06 Demo and Pitch.md.md</path>
</file>
<file>
<path>vault/07 Judge Q&A.md.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>vault/03 MVP Scope.md.md</path>
<content lines="1-375">
  1 | # MVP Scope — APIDrift
  2 | 
  3 | **Created:** 2026-05-01
  4 | **Updated:** 2026-05-01 — Severity + business impact + ticket routing added
  5 | **Status:** Locked ✅ — do not add features without updating Command Center
  6 | 
  7 | ---
  8 | 
  9 | ## MVP in 5 Sentences
 10 | 
 11 | 1. Show a broken checkout app caused by API drift ($NaN, Unknown status)
 12 | 2. Scan and compare frontend client, backend route, and OpenAPI contract
 13 | 3. Display drift matrix with severity levels + Bob's evidence trail + business impact
 14 | 4. Show Bob-generated patch + OpenAPI update + contract test
 15 | 5. Show ticket/owner routing → fixed checkout → PR summary
 16 | 
 17 | **That is enough to win the story.**
 18 | 
 19 | ---
 20 | 
 21 | ## The 10 Demo Screens
 22 | 
 23 | ### Screen 1 — Broken Checkout (START HERE)
 24 | 
 25 | ```
 26 | Checkout Complete
 27 | 
 28 | Order ID: ORD-1042
 29 | Total: $NaN          ← large, red
 30 | Status: Unknown      ← large, red
 31 | ```
 32 | 
 33 | Button: `Scan for API Drift`
 34 | 
 35 | **Build note:** Must be a real running app ($NaN from actual `order.total.toFixed(2)` where `total` is `undefined`). This is the emotional hook. Build this first.
 36 | 
 37 | ---
 38 | 
 39 | ### Screen 2 — Contract Sources
 40 | 
 41 | Three cards showing what each layer says:
 42 | 
 43 | ```
 44 | Frontend expects:        Backend returns:         OpenAPI says:
 45 | total: number            totalCents: integer      total: number
 46 | status: "paid"           status: "PAID"           status: "paid"
 47 | ```
 48 | 
 49 | **Build note:** Static cards. Renders from hardcoded drift JSON.
 50 | 
 51 | ---
 52 | 
 53 | ### Screen 3 — Drift Matrix (THE SCREENSHOT MOMENT)
 54 | 
 55 | | Field | Frontend | Backend | OpenAPI | Severity |
 56 | |---|---|---|---|---|
 57 | | Total amount | `total` | `totalCents` | `total` | 🔴 Breaking |
 58 | | Currency unit | dollars | cents | dollars | 🔴 Breaking |
 59 | | Status enum | lowercase `"paid"` | uppercase `"PAID"` | lowercase `"paid"` | 🔴 Breaking |
 60 | 
 61 | **Color coding:**
 62 | - 🔴 Breaking = red cells
 63 | - 🟡 Medium = yellow cells
 64 | - 🟢 Match / Cosmetic = green/grey cells
 65 | 
 66 | **Build note:** This is the priority component. Invest extra polish time. DriftMatrix.tsx renders from drift JSON. Each row is a field. Severity badge on each row.
 67 | 
 68 | ---
 69 | 
 70 | ### Screen 4 — Bob Evidence Trail
 71 | 
 72 | ```
 73 | Bob's Evidence Trail
 74 | 
 75 | 1. Found frontend reads checkout.total in checkoutClient.ts.
 76 | 2. Found backend route now returns totalCents instead of total.
 77 | 3. Found OpenAPI spec still documents total as a decimal number.
 78 | 4. Found frontend expects status === "paid".
 79 | 5. Found backend returns status === "PAID".
 80 | 6. Determined backend change is likely intentional —
 81 |    integer cents are safer for currency precision.
 82 | 7. Recommended syncing frontend and OpenAPI to backend.
 83 | ```
 84 | 
 85 | **Build note:** Renders from saved Bob Task 1 fallback output. Add subtle "Powered by IBM Bob" badge.
 86 | 
 87 | ---
 88 | 
 89 | ### Screen 5 — Severity + Business Impact
 90 | 
 91 | ```
 92 | Severity: High 🔴
 93 | 
 94 | Business Impact:
 95 | Checkout confirmation displays incorrect payment totals
 96 | and unknown payment status. This affects a revenue-critical
 97 | user flow and may cause transaction abandonment.
 98 | 
 99 | Affected Flow: Checkout confirmation (ORD-1042)
100 | Risk Level: Breaking — frontend cannot display correct values
101 | Recommendation: Sync frontend and OpenAPI to backend contract
102 | ```
103 | 
104 | **Build note:** This is the "judge bait" panel. Non-engineer judges understand this immediately. Render from `businessImpact` field in drift JSON. Can be a bold card with red severity badge at top.
105 | 
106 | ---
107 | 
108 | ### Screen 6 — Fix Strategy
109 | 
110 | ```
111 | Bob's Recommended Fix Strategy
112 | 
113 | Recommended canonical contract:
114 | Use backend's totalCents and uppercase status enum.
115 | 
116 | Why:
117 | - Integer cents avoids floating-point currency bugs
118 | - Backend change appears intentional (best practice)
119 | - Frontend and docs are stale, not incorrect
120 | 
121 | Option A: Preserve old API contract
122 | Backend maps totalCents back to total.
123 | 
124 | Option B (Recommended): Update frontend + docs
125 | Frontend uses totalCents. OpenAPI updates to match.
126 | ```
127 | 
128 | **Build note:** Show both options. Highlight Option B. This shows Bob making an engineering judgment.
129 | 
130 | ---
131 | 
132 | ### Screen 7 — Patch Diff
133 | 
134 | **Frontend change:**
135 | ```diff
136 | - total: `$${order.total.toFixed(2)}`,
137 | - statusLabel: order.status === "paid" ? "Paid" : "Unknown"
138 | + total: `$${(order.totalCents / 100).toFixed(2)}`,
139 | + statusLabel: order.status === "PAID" ? "Paid" : "Unknown"
140 | ```
141 | 
142 | **OpenAPI change:**
143 | ```diff
144 | - total:
145 | -   type: number
146 | - status:
147 | -   enum: ["pending", "paid", "failed"]
148 | + totalCents:
149 | +   type: integer
150 | +   description: Total order amount in cents.
151 | + status:
152 | +   enum: ["PENDING", "PAID", "FAILED"]
153 | ```
154 | 
155 | **Build note:** Syntax-highlighted diff view. Tab switcher: "Frontend" | "OpenAPI". Renders from Bob Task 2 fallback.
156 | 
157 | ---
158 | 
159 | ### Screen 8 — Contract Test
160 | 
161 | ```typescript
162 | test("checkout response contract matches frontend expectations", async () => {
163 |   const response = await request(app).post("/checkout").send(validCart);
164 | 
165 |   expect(response.body).toMatchObject({
166 |     orderId: expect.any(String),
167 |     totalCents: expect.any(Number),
168 |     status: "PAID"
169 |   });
170 | 
171 |   expect(response.body.total).toBeUndefined();
172 | });
173 | ```
174 | 
175 | **Optional:** Show ❌ FAIL before patch → ✅ PASS after. Strong proof.
176 | 
177 | ---
178 | 
179 | ### Screen 9 — Ticket / Owner Routing
180 | 
181 | ```
182 | Orchestrated Action
183 | 
184 | ✓ Created high-priority contract drift task
185 | ✓ Assigned to: API Platform Team
186 | ✓ Notified: Frontend Owner + Backend Owner
187 | ✓ Attached: Bob drift report + patch diff
188 | 
189 | Task: Fix checkout API contract drift
190 | Priority: High
191 | Flow affected: Checkout confirmation
192 | Due: Before next deploy
193 | ```
194 | 
195 | **Build note:** For MVP, this is a static UI card rendered from drift JSON. It simulates the workflow. If Orchestrate is easy to wire, make it real — but do not let this block the rest of the demo. This screen is gravy; the drift matrix + evidence trail is the core.
196 | 
197 | **watsonx Orchestrate (optional):** The guide says Orchestrate can import OpenAPI tools and build agents. If time permits, wire a real Orchestrate agent that receives the drift report and creates a task. Show it in the demo.
198 | 
199 | ---
200 | 
201 | ### Screen 10 — Fixed Checkout + PR Summary
202 | 
203 | **Fixed UI:**
204 | ```
205 | Checkout Complete
206 | 
207 | Order ID: ORD-1042
208 | Total: $84.70        ← green
209 | Status: Paid         ← green
210 | ```
211 | 
212 | **PR Summary:**
213 | ```markdown
214 | # Fix checkout API contract drift
215 | 
216 | ## Drift Found
217 | - Frontend expected `total`, backend returned `totalCents`
218 | - Frontend expected lowercase status, backend returned uppercase
219 | - OpenAPI documented the old response shape
220 | 
221 | ## Fix
222 | - Updated frontend formatter to use totalCents
223 | - Updated status mapping for uppercase enum
224 | - Updated OpenAPI schema
225 | - Added contract regression test
226 | 
227 | ## Risk
228 | Low. Backend contract remains canonical.
229 | Rollback: Revert frontend formatter only.
230 | ```
231 | 
232 | **Closing line on screen:**
233 | > "APIDrift keeps your API promises from silently breaking your product."
234 | 
235 | ---
236 | 
237 | ## IBM Bob Tasks (5)
238 | 
239 | ### Task 1: Analyze Contract Drift
240 | ```
241 | Analyze this repo for API contract drift in the checkout flow.
242 | 
243 | Compare:
244 | - frontend API usage in @apps/web/src/api/checkoutClient.ts
245 | - checkout UI rendering in @apps/web/src/components/CheckoutSummary.tsx
246 | - backend response in @apps/api/src/routes/checkout.ts
247 | - OpenAPI contract in @contracts/openapi.yaml
248 | 
249 | Return:
250 | 1. mismatched fields with exact names
251 | 2. affected files and line numbers
252 | 3. severity of each mismatch (Breaking / Medium / Cosmetic)
253 | 4. business impact — what breaks for the user
254 | 5. root cause explanation
255 | 6. recommended fix strategy with reasoning
256 | ```
257 | 
258 | Save as: `drift-scanner/bob-task-1-analysis.md`
259 | 
260 | ---
261 | 
262 | ### Task 2: Generate the Patch
263 | ```
264 | Patch the checkout flow so frontend and OpenAPI match the backend.
265 | Use totalCents as canonical. Update:
266 | - @apps/web/src/api/checkoutClient.ts (TypeScript types)
267 | - @apps/web/src/components/CheckoutSummary.tsx (formatter)
268 | - @contracts/openapi.yaml (schema + status enum)
269 | 
270 | Show before/after diff for each file. Explain each change.
271 | ```
272 | 
273 | Save as: `drift-scanner/bob-task-2-patch.md`
274 | 
275 | ---
276 | 
277 | ### Task 3: Generate Contract Test
278 | ```
279 | Create a Jest + Supertest regression contract test for
280 | @apps/api/src/routes/checkout.ts that:
281 | - Tests totalCents exists and is a number
282 | - Tests total does NOT exist (catches regressions)
283 | - Tests status is "PAID" (uppercase)
284 | - Is under 30 lines
285 | ```
286 | 
287 | Save as: `apps/api/src/tests/checkout.contract.test.ts`
288 | 
289 | ---
290 | 
291 | ### Task 4: Generate PR Summary
292 | ```
293 | Generate a PR description for this API contract drift fix.
294 | Include: what drifted, user impact, files changed, tests added,
295 | why totalCents is canonical, rollback risk.
296 | ```
297 | 
298 | Save as: `drift-scanner/bob-task-4-pr-summary.md`
299 | 
300 | ---
301 | 
302 | ### Task 5: Create Bob Skill (STRETCH)
303 | ```
304 | Create a reusable Bob skill called api-contract-drift-review
305 | that guides Bob to compare frontend usage, backend implementation,
306 | API docs, schema/types, and tests. Output: drift matrix, severity
307 | classification, fix recommendation, patch plan, regression test plan.
308 | ```
309 | 
310 | Save as: `.bob/commands/api-contract-drift-review.md`
311 | 
312 | ---
313 | 
314 | ## Out of Scope (Locked)
315 | 
316 | | Feature | Reason |
317 | |---|---|
318 | | GraphQL / Protobuf support | OpenAPI only for MVP; mention in pitch as extension |
319 | | Real-time every-commit alerts | Stretch; not MVP |
320 | | Real Jira / Slack integration | Simulate ticket routing UI; Orchestrate optional |
321 | | GitHub PR auto-creation | Generate PR summary content; not the actual PR |
322 | | Multi-repo support | One monorepo demo only |
323 | | Multiple drift scenarios | One checkout scenario done beautifully beats five mediocre ones |
324 | | Auth / accounts / persistence | Not needed |
325 | | watsonx.ai severity classification | Drift severity is hardcoded from Bob Task 1 output; watsonx.ai optional |
326 | 
327 | ---
328 | 
329 | ## Build Order (Critical Path)
330 | 
331 | ```
332 | 1. Build broken checkout app (Express backend + Next.js frontend)
333 |    → Backend returns totalCents; frontend reads total → $NaN renders
334 | 
335 | 2. Build fixed checkout version
336 |    → Confirms patch is correct before Bob generates it
337 | 
338 | 3. Create drift data JSON with severity + business impact
339 |    → Unblocks all 10 UI screens
340 | 
341 | 4. Build APIDrift UI (all 10 screens, static data)
342 |    → Get full story visible before polishing
343 | 
344 | 5. Run Bob IDE Tasks 1–4; save as fallback files
345 |    → Generate real Bob artifacts
346 | 
347 | 6. Wire UI to fallback Bob outputs
348 |    → UI renders Bob's actual generated content
349 | 
350 | 7. Polish (Day 2 morning)
351 |    → DriftMatrix colors, severity badges, animations, Bob sidebar
352 | 
353 | 8. Screen 9 (ticket routing): build simulated UI card
354 |    → Optional: wire Orchestrate agent
355 | 
356 | 9. Record demo video
357 |    → Always use saved fallback files; never depend on live Bob
358 | ```
359 | 
360 | ---
361 | 
362 | ## Demo-Ready Milestone
363 | 
364 | - [ ] Broken checkout renders $NaN and "Unknown" (real, not mocked)
365 | - [ ] All 10 screens render without errors
366 | - [ ] Drift matrix shows severity badges with correct colors
367 | - [ ] Bob evidence trail renders from Task 1 fallback file
368 | - [ ] Severity + business impact panel renders
369 | - [ ] Patch diff displays with syntax highlighting
370 | - [ ] Contract test visible (pass/fail optional)
371 | - [ ] Ticket routing screen visible (simulated OK)
372 | - [ ] Fixed checkout renders $84.70 and "Paid"
373 | - [ ] PR summary renders completely
374 | - [ ] "Powered by IBM Bob" sidebar visible throughout
375 | - [ ] All Bob task sessions exported → bob_sessions/
</content>
</file>
<file><path>vault/04 Technical Architecture.md.md</path>
<content lines="1-463">
  1 | # Technical Architecture — APIDrift
  2 | 
  3 | **Created:** 2026-05-01
  4 | **Updated:** 2026-05-01 — Bob IDE analyzed vault; setup details confirmed
  5 | **Status:** Confirmed ✅
  6 | 
  7 | ---
  8 | 
  9 | ## Architecture Overview
 10 | 
 11 | APIDrift is a monorepo with three apps (broken checkout frontend, drifted Express backend, APIDrift product UI) plus a contracts folder and drift-scanner. IBM Bob IDE is the required core tool — 5 tasks with session exports.
 12 | 
 13 | ```
 14 | apidrift/
 15 | ├── apps/
 16 | │   ├── web/                          ← Broken checkout frontend (Next.js, port 3000)
 17 | │   │   ├── package.json
 18 | │   │   ├── next.config.js
 19 | │   │   ├── tsconfig.json
 20 | │   │   └── src/
 21 | │   │       ├── pages/checkout.tsx
 22 | │   │       ├── api/checkoutClient.ts ← reads order.total → $NaN
 23 | │   │       └── components/CheckoutSummary.tsx
 24 | │   └── api/                          ← Drifted backend (Express, port 3001)
 25 | │       ├── package.json
 26 | │       ├── tsconfig.json
 27 | │       └── src/
 28 | │           ├── server.ts
 29 | │           ├── routes/checkout.ts    ← returns totalCents, "PAID"
 30 | │           ├── schemas/checkoutSchema.ts
 31 | │           └── tests/checkout.contract.test.ts
 32 | ├── contracts/
 33 | │   └── openapi.yaml                  ← Stale (still says total, lowercase enums)
 34 | ├── drift-scanner/
 35 | │   ├── bob-task-1-analysis.md        ← Saved Bob Task 1 output
 36 | │   ├── bob-task-2-patch.md           ← Saved Bob Task 2 output
 37 | │   ├── bob-task-4-pr-summary.md      ← Saved Bob Task 4 output
 38 | │   └── sample-drift-output.json     ← Hardcoded drift data (unblocks UI)
 39 | ├── apidrift-ui/                      ← APIDrift product (Next.js, port 3002)
 40 | │   ├── package.json
 41 | │   ├── next.config.js
 42 | │   ├── tsconfig.json
 43 | │   └── app/
 44 | │       ├── page.tsx
 45 | │       └── components/
 46 | │           ├── BrokenCheckout.tsx        ← Screen 1
 47 | │           ├── ContractSources.tsx       ← Screen 2
 48 | │           ├── DriftMatrix.tsx           ← Screen 3 (priority)
 49 | │           ├── BobEvidenceTrail.tsx      ← Screen 4
 50 | │           ├── SeverityImpact.tsx        ← Screen 5
 51 | │           ├── FixStrategy.tsx           ← Screen 6
 52 | │           ├── PatchPanel.tsx            ← Screen 7
 53 | │           ├── ContractTestPanel.tsx     ← Screen 8
 54 | │           ├── TicketRouting.tsx         ← Screen 9
 55 | │           ├── FixedCheckout.tsx         ← Screen 10a
 56 | │           ├── PRSummary.tsx             ← Screen 10b
 57 | │           └── BobSidebar.tsx            ← Persistent sidebar
 58 | ├── bob_sessions/                     ← Required for submission
 59 | │   ├── task-1-screenshot.png
 60 | │   ├── task-1-history.md
 61 | │   └── ...
 62 | ├── package.json                      ← Root monorepo package.json
 63 | ├── .gitignore
 64 | └── README.md
 65 | ```
 66 | 
 67 | ---
 68 | 
 69 | ## Tech Stack
 70 | 
 71 | | Layer | Technology | Rationale |
 72 | |---|---|---|
 73 | | APIDrift UI | Next.js 14 + Tailwind CSS | Fast setup; Havyn knows React/TS |
 74 | | Demo checkout frontend | Next.js (same monorepo) | Reuse stack |
 75 | | Demo API backend | Express + Node.js + TypeScript | Fast to seed drift |
 76 | | API contract | OpenAPI YAML | Standard; easy to show drift |
 77 | | Contract tests | Jest + Supertest | Standard Node.js testing |
 78 | | Drift data | Hardcoded JSON | Unblocks UI; don't over-engineer scanner |
 79 | | Bob outputs | Saved Markdown/JSON fallback files | Demo never depends on live Bob latency |
 80 | | Code display | `react-syntax-highlighter` | Patch diff + contract test |
 81 | | IBM Bob | Bob IDE (required) — 5 tasks | Task sessions exported for judging |
 82 | 
 83 | ---
 84 | 
 85 | ## System Requirements (confirmed by Bob analysis)
 86 | 
 87 | | Requirement | Version |
 88 | |---|---|
 89 | | Node.js | v18+ |
 90 | | npm | v9+ (or yarn) |
 91 | | Git | Any recent version |
 92 | | IBM Bob IDE | Installed + authenticated with ibm-coding-challenge-xxx |
 93 | | Browser | Chrome or Firefox (test $NaN rendering before recording) |
 94 | 
 95 | ---
 96 | 
 97 | ## Setup Commands
 98 | 
 99 | ```bash
100 | # 1. Create and enter project root
101 | mkdir apidrift && cd apidrift
102 | 
103 | # 2. Create directory structure
104 | mkdir -p apps/web/src/{pages,api,components}
105 | mkdir -p apps/api/src/{routes,schemas,tests}
106 | mkdir -p contracts drift-scanner
107 | mkdir -p apidrift-ui/app/components
108 | mkdir -p bob_sessions   # Create this BEFORE first Bob task
109 | 
110 | # 3. Initialize Next.js apps
111 | cd apps/web
112 | npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
113 | cd ../..
114 | 
115 | cd apidrift-ui
116 | npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
117 | cd ..
118 | 
119 | # 4. Initialize Express API
120 | cd apps/api
121 | npm init -y
122 | npm install express cors
123 | npm install -D typescript @types/node @types/express ts-node nodemon \
124 |   jest supertest @types/jest @types/supertest ts-jest
125 | npx tsc --init
126 | cd ../..
127 | 
128 | # 5. Install root dev dependencies
129 | npm install -D concurrently
130 | 
131 | # 6. Install APIDrift UI dependencies
132 | cd apidrift-ui
133 | npm install react-syntax-highlighter
134 | npm install -D @types/react-syntax-highlighter
135 | cd ..
136 | ```
137 | 
138 | ---
139 | 
140 | ## Root package.json (Monorepo)
141 | 
142 | ```json
143 | {
144 |   "name": "apidrift",
145 |   "version": "1.0.0",
146 |   "private": true,
147 |   "workspaces": ["apps/*", "apidrift-ui"],
148 |   "scripts": {
149 |     "dev:api":      "cd apps/api && npm run dev",
150 |     "dev:checkout": "cd apps/web && npm run dev",
151 |     "dev:ui":       "cd apidrift-ui && npm run dev",
152 |     "dev:all":      "concurrently \"npm run dev:api\" \"npm run dev:checkout\" \"npm run dev:ui\"",
153 |     "test":         "cd apps/api && npm test"
154 |   },
155 |   "devDependencies": {
156 |     "concurrently": "^8.0.0"
157 |   }
158 | }
159 | ```
160 | 
161 | ---
162 | 
163 | ## .gitignore
164 | 
165 | ```
166 | node_modules/
167 | .next/
168 | dist/
169 | build/
170 | .env
171 | .env.local
172 | *.log
173 | .DS_Store
174 | ```
175 | 
176 | ---
177 | 
178 | ## Environment Variables
179 | 
180 | ```bash
181 | # apps/web/.env.local
182 | NEXT_PUBLIC_API_URL=http://localhost:3001
183 | 
184 | # apps/api/.env
185 | PORT=3001
186 | NODE_ENV=development
187 | 
188 | # apidrift-ui/.env.local
189 | NEXT_PUBLIC_DRIFT_DATA_PATH=/drift-scanner/sample-drift-output.json
190 | ```
191 | 
192 | ---
193 | 
194 | ## Jest Config (apps/api/jest.config.js)
195 | 
196 | ```js
197 | module.exports = {
198 |   preset: 'ts-jest',
199 |   testEnvironment: 'node',
200 |   testMatch: ['**/*.test.ts'],
201 |   collectCoverageFrom: ['src/**/*.ts'],
202 | };
203 | ```
204 | 
205 | Run tests: `cd apps/api && npm test`
206 | 
207 | ---
208 | 
209 | ## The Broken Checkout App
210 | 
211 | ### Backend — drifted response (port 3001)
212 | 
213 | ```typescript
214 | // apps/api/src/routes/checkout.ts
215 | router.post('/checkout', (req, res) => {
216 |   // DRIFTED: changed from { total: 84.70, status: "paid" }
217 |   res.json({
218 |     orderId: "ORD-1042",
219 |     totalCents: 8470,   // was: total: 84.70
220 |     status: "PAID"      // was: status: "paid"
221 |   });
222 | });
223 | ```
224 | 
225 | ### Frontend — still expects old contract (port 3000)
226 | 
227 | ```typescript
228 | // apps/web/src/api/checkoutClient.ts
229 | export interface CheckoutResponse {
230 |   orderId: string;
231 |   total: number;      // ← expects total (doesn't exist anymore)
232 |   status: string;     // ← expects "paid" (backend returns "PAID")
233 | }
234 | ```
235 | 
236 | ```typescript
237 | // apps/web/src/components/CheckoutSummary.tsx
238 | export function formatCheckout(order: CheckoutResponse) {
239 |   return {
240 |     id: order.orderId,
241 |     total: `$${order.total.toFixed(2)}`,               // ← $NaN
242 |     statusLabel: order.status === "paid" ? "Paid" : "Unknown"
243 |   };
244 | }
245 | ```
246 | 
247 | ### OpenAPI — stale contract
248 | 
249 | ```yaml
250 | # contracts/openapi.yaml
251 | /checkout:
252 |   post:
253 |     responses:
254 |       200:
255 |         content:
256 |           application/json:
257 |             schema:
258 |               properties:
259 |                 orderId:
260 |                   type: string
261 |                 total:           # stale: should be totalCents
262 |                   type: number
263 |                 status:
264 |                   type: string
265 |                   enum: ["pending", "paid", "failed"]  # stale: should be uppercase
266 | ```
267 | 
268 | ---
269 | 
270 | ## Drift Data JSON (Build This First — Unblocks All 10 Screens)
271 | 
272 | Save as `drift-scanner/sample-drift-output.json`:
273 | 
274 | ```json
275 | {
276 |   "driftFound": true,
277 |   "scannedAt": "2026-05-01T00:00:00Z",
278 |   "severity": "high",
279 |   "businessImpact": "Checkout confirmation displays incorrect payment totals and unknown payment status. This affects a revenue-critical user flow and may cause transaction abandonment.",
280 |   "affectedFlow": "Checkout confirmation (checkout.tsx → /checkout route)",
281 |   "fields": [
282 |     {
283 |       "field": "Total amount",
284 |       "frontend": "total (number, dollars)",
285 |       "backend": "totalCents (integer, cents)",
286 |       "openapi": "total (number)",
287 |       "diagnosis": "field drift",
288 |       "severity": "Breaking",
289 |       "userImpact": "Checkout UI shows $NaN"
290 |     },
291 |     {
292 |       "field": "Currency unit",
293 |       "frontend": "dollars",
294 |       "backend": "cents",
295 |       "openapi": "dollars",
296 |       "diagnosis": "semantic drift",
297 |       "severity": "Breaking",
298 |       "userImpact": "Price display incorrect even if field name matched"
299 |     },
300 |     {
301 |       "field": "Status enum",
302 |       "frontend": "lowercase (\"paid\")",
303 |       "backend": "uppercase (\"PAID\")",
304 |       "openapi": "lowercase (\"paid\")",
305 |       "diagnosis": "enum drift",
306 |       "severity": "Breaking",
307 |       "userImpact": "Payment status always shows \"Unknown\""
308 |     }
309 |   ],
310 |   "evidenceTrail": [
311 |     "Found frontend reads checkout.total in checkoutClient.ts",
312 |     "Found backend route now returns totalCents instead of total",
313 |     "Found OpenAPI spec still documents total as a decimal number",
314 |     "Found frontend expects status === \"paid\"",
315 |     "Found backend returns status === \"PAID\"",
316 |     "Determined backend change is intentional — integer cents safer for currency precision",
317 |     "Recommended syncing frontend and OpenAPI to backend contract"
318 |   ],
319 |   "recommendedFix": "Update frontend and OpenAPI spec to match backend (totalCents + uppercase enums)",
320 |   "canonicalLayer": "backend",
321 |   "reasoning": "Backend change appears intentional — integer cents is best practice for currency",
322 |   "ticketRouting": {
323 |     "priority": "High",
324 |     "assignedTo": "API Platform Team",
325 |     "notified": ["Frontend Owner", "Backend Owner"],
326 |     "attachments": ["Bob drift report", "Patch diff"],
327 |     "dueDate": "Before next deploy"
328 |   }
329 | }
330 | ```
331 | 
332 | ---
333 | 
334 | ## Component Build Notes
335 | 
336 | ### DriftMatrix.tsx (Screen 3 — highest priority)
337 | - Table: Field | Frontend | Backend | OpenAPI | Severity
338 | - Severity badge: 🔴 Breaking (red), 🟡 Medium (yellow), ⚪ Cosmetic (grey)
339 | - Whole row tinted by severity
340 | - Data from `fields` array in drift JSON
341 | - This is the "screenshot moment" — invest extra polish here
342 | 
343 | ### SeverityImpact.tsx (Screen 5)
344 | - Large 🔴 HIGH badge at top
345 | - `businessImpact` paragraph
346 | - `affectedFlow` and risk level metadata
347 | 
348 | ### TicketRouting.tsx (Screen 9)
349 | - Simulated ticket card from `ticketRouting` object in drift JSON
350 | - Checkmark list for each action
351 | - Optional: wire real Orchestrate agent if time allows
352 | 
353 | ### BobSidebar.tsx (persistent throughout)
354 | ```
355 | Powered by IBM Bob
356 | 
357 | Bob was used for:
358 | ✓ Repo context analysis (Task 1)
359 | ✓ Severity classification (Task 1)
360 | ✓ Drift diagnosis (Task 1)
361 | ✓ Patch generation (Task 2)
362 | ✓ Contract test generation (Task 3)
363 | ✓ OpenAPI documentation update (Task 2)
364 | ✓ PR summary (Task 4)
365 | ```
366 | 
367 | ---
368 | 
369 | ## IBM Bob IDE Tasks — Full Prompts
370 | 
371 | ### Task 1: Analyze Contract Drift + Severity
372 | ```
373 | Analyze this repo for API contract drift in the checkout flow.
374 | 
375 | Compare:
376 | - @apps/web/src/api/checkoutClient.ts
377 | - @apps/web/src/components/CheckoutSummary.tsx
378 | - @apps/api/src/routes/checkout.ts
379 | - @contracts/openapi.yaml
380 | 
381 | Return:
382 | 1. mismatched fields with exact names and locations
383 | 2. severity of each mismatch: Breaking (causes runtime failure),
384 |    Medium (causes stale behavior), Cosmetic (docs only)
385 | 3. business impact — what does the user see?
386 | 4. which layer is the canonical source of truth and why
387 | 5. recommended fix strategy with engineering rationale
388 | 6. confidence level with evidence
389 | ```
390 | Save as: `drift-scanner/bob-task-1-analysis.md`
391 | 
392 | ### Task 2: Generate Patch
393 | ```
394 | Patch the checkout flow so frontend and OpenAPI match the backend.
395 | Use totalCents as canonical (integer cents = best practice for currency).
396 | Update: checkoutClient.ts, CheckoutSummary.tsx, openapi.yaml.
397 | Show before/after diff for each file. Explain each change.
398 | ```
399 | Save as: `drift-scanner/bob-task-2-patch.md`
400 | 
401 | ### Task 3: Generate Contract Test
402 | ```
403 | Create a Jest + Supertest regression contract test for
404 | apps/api/src/routes/checkout.ts.
405 | Assert: totalCents exists (Number), total does NOT exist,
406 | status is "PAID". Under 30 lines.
407 | ```
408 | Save as: `apps/api/src/tests/checkout.contract.test.ts`
409 | 
410 | ### Task 4: Generate PR Summary
411 | ```
412 | Generate a PR description for this API contract drift fix.
413 | Include: drift found, user impact, files changed, tests added,
414 | why totalCents is canonical, rollback risk.
415 | ```
416 | Save as: `drift-scanner/bob-task-4-pr-summary.md`
417 | 
418 | ### Task 5: Bob Skill (stretch)
419 | ```
420 | Create a reusable Bob skill called api-contract-drift-review.
421 | Guides Bob to compare frontend, backend, API docs, types, and tests.
422 | Output: drift matrix with severity, fix recommendation, patch plan, test plan.
423 | Save as .bob/commands/api-contract-drift-review.md
424 | ```
425 | 
426 | ---
427 | 
428 | ## Local Dev Setup
429 | 
430 | ```bash
431 | # Terminal 1
432 | cd apps/api && npm run dev           # port 3001
433 | 
434 | # Terminal 2
435 | cd apps/web && npm run dev           # port 3000 → visit /checkout → see $NaN
436 | 
437 | # Terminal 3
438 | cd apidrift-ui && npm run dev        # port 3002 → APIDrift product UI
439 | 
440 | # Or all at once from root:
441 | npm run dev:all
442 | ```
443 | 
444 | **Verify setup:**
445 | - `localhost:3000/checkout` → shows $NaN and "Unknown" (large, red)
446 | - `localhost:3001/checkout` (POST) → returns `{ totalCents: 8470, status: "PAID" }`
447 | - `localhost:3002` → APIDrift UI loads all 10 screens
448 | 
449 | ---
450 | 
451 | ## Technical Risk Flags
452 | 
453 | | Risk | Impact | Mitigation |
454 | |---|---|---|
455 | | Port conflicts (3000/3001/3002) | Medium | Check `lsof -i :3000` etc. before starting; kill any blocking processes |
456 | | CORS between localhost:3000/3002 and localhost:3001 | Low | Add `cors()` middleware to Express — 2-line fix |
457 | | $NaN not rendering visibly | High — kills the demo hook | Use `text-4xl text-red-600 font-bold`; force string if browser converts: `"$NaN"` |
458 | | TypeScript strict mode errors | Low | Adjust `tsconfig.json` strict settings if blocking early build |
459 | | Next.js caching issues | Low | Use `--turbo` flag if hot reload is slow: `next dev --turbo` |
460 | | Bob Task 1 vague on severity | Medium | Explicitly ask for "Breaking/Medium/Cosmetic"; retry with tighter prompt |
461 | | bob_sessions not captured | High — required deliverable | Create folder before first task; export after EVERY session |
462 | | Using personal Bob account | Medium | Verify `ibm-coding-challenge-xxx` in IDE settings before every session |
463 | | Live Bob latency during recording | High | Always use saved fallback files for demo video — never live Bob |
</content>
</file>
<file><path>vault/05 Task Board.md.md</path>
<content/><notice>File is empty</notice>
</file>
<file><path>vault/06 Demo and Pitch.md.md</path>
<content lines="1-320">
  1 | # Demo and Pitch — APIDrift
  2 | 
  3 | **Created:** 2026-05-01
  4 | **Updated:** 2026-05-01 — Severity + business impact + ticket routing added
  5 | **Status:** Complete ✅ — paste-ready
  6 | 
  7 | ---
  8 | 
  9 | ## Demo Video Flow (Timed)
 10 | 
 11 | **Total: ~2:45**
 12 | 
 13 | | Step | Time | Action |
 14 | |---|---|---|
 15 | | 1. Broken checkout | 0:00–0:12 | Show $NaN and Unknown status; name the problem |
 16 | | 2. Scan trigger | 0:12–0:22 | Click "Scan for API Drift" |
 17 | | 3. Contract map | 0:22–0:35 | Show 3 cards (frontend / backend / OpenAPI) |
 18 | | 4. Drift matrix | 0:35–1:05 | Slow pan; severity badges; let judge read |
 19 | | 5. Bob evidence trail | 1:05–1:25 | Name IBM Bob; show 7-point chain |
 20 | | 6. Severity + impact | 1:25–1:38 | "High risk. Revenue-critical flow." |
 21 | | 7. Bob fix strategy | 1:38–1:50 | Recommend: update frontend + docs |
 22 | | 8. Patch + test | 1:50–2:15 | Code diff + contract test |
 23 | | 9. Ticket routing | 2:15–2:25 | Orchestrated action card |
 24 | | 10. Fixed checkout + PR | 2:25–2:45 | $84.70, Paid, PR summary, closing line |
 25 | 
 26 | ---
 27 | 
 28 | ## Full Narration Script
 29 | 
 30 | ### [0:00–0:12] OPENING — THE BROKEN APP
 31 | *[Show checkout with $NaN and "Unknown" large and red]*
 32 | 
 33 | > "The backend works.
 34 | > The frontend works.
 35 | > The docs exist.
 36 | >
 37 | > But the product is still broken —
 38 | > because they no longer agree.
 39 | >
 40 | > [pause 1s]
 41 | >
 42 | > This is APIDrift."
 43 | 
 44 | ---
 45 | 
 46 | ### [0:12–0:22] SCAN TRIGGER
 47 | 
 48 | > "APIDrift uses IBM Bob as a repo-wide contract detective.
 49 | > Let's scan."
 50 | 
 51 | *[Click "Scan for API Drift" → brief "Bob is analyzing..." state]*
 52 | 
 53 | ---
 54 | 
 55 | ### [0:22–0:35] CONTRACT MAP
 56 | 
 57 | > "Bob reads three sources at once —
 58 | > the frontend API client, the backend route handler,
 59 | > and the OpenAPI documentation.
 60 | >
 61 | > Already, three different answers."
 62 | 
 63 | ---
 64 | 
 65 | ### [0:35–1:05] DRIFT MATRIX — THE MONEY SHOT
 66 | *[Pan slowly across the matrix; hold on each row]*
 67 | 
 68 | > "The drift matrix.
 69 | >
 70 | > [PAUSE 3s — judge reads]
 71 | >
 72 | > The total field: frontend expects dollars,
 73 | > backend returns integer cents.
 74 | > Breaking.
 75 | >
 76 | > The status enum: frontend expects lowercase,
 77 | > backend returns uppercase.
 78 | > Breaking.
 79 | >
 80 | > Three mismatches. All breaking.
 81 | > All caused by one backend change that didn't propagate."
 82 | 
 83 | ---
 84 | 
 85 | ### [1:05–1:25] BOB EVIDENCE TRAIL
 86 | 
 87 | > "Here's IBM Bob's evidence trail.
 88 | >
 89 | > Bob traced the frontend client, UI component,
 90 | > backend route, and OpenAPI spec —
 91 | > and concluded the backend change was intentional.
 92 | >
 93 | > Integer cents is the right call for currency precision.
 94 | > The frontend and docs just didn't know yet."
 95 | 
 96 | ---
 97 | 
 98 | ### [1:25–1:38] SEVERITY + BUSINESS IMPACT
 99 | 
100 | > "Severity: High.
101 | >
102 | > This drift hits the checkout confirmation flow.
103 | > Users see the wrong total and an unknown payment status.
104 | > In production, this is a revenue-critical bug."
105 | 
106 | ---
107 | 
108 | ### [1:38–1:50] FIX STRATEGY
109 | 
110 | > "Bob recommends syncing the frontend and OpenAPI
111 | > to match the backend's new canonical contract.
112 | > Because the backend was right.
113 | > The other layers just hadn't caught up."
114 | 
115 | ---
116 | 
117 | ### [1:50–2:15] PATCH + CONTRACT TEST
118 | 
119 | > "Bob generates the patch —
120 | > the formatter updated to use totalCents,
121 | > the status mapping updated to uppercase,
122 | > the OpenAPI spec updated to match.
123 | >
124 | > [brief pause — judge reads code]
125 | >
126 | > And a contract regression test —
127 | > so this class of drift can never ship silently again."
128 | 
129 | ---
130 | 
131 | ### [2:15–2:25] TICKET ROUTING
132 | 
133 | > "APIDrift routes the fix to the right team.
134 | > High-priority task created.
135 | > Frontend owner and backend owner both notified.
136 | > Bob's drift report attached."
137 | 
138 | ---
139 | 
140 | ### [2:25–2:45] FIXED CHECKOUT + PR + CLOSE
141 | 
142 | *[Show fixed checkout: $84.70, Paid in green]*
143 | 
144 | > "Same checkout. Fixed.
145 | >
146 | > [1s pause]
147 | >
148 | > And the PR summary:
149 | > what drifted, what changed, rollback risk — ready to merge.
150 | >
151 | > [1s pause]
152 | >
153 | > APIDrift.
154 | > Bob catches API drift before your users do."
155 | 
156 | ---
157 | 
158 | ## Problem + Solution Statement (≤500 words — PASTE READY)
159 | 
160 | ```
161 | APIDRIFT: Catch API Contract Drift Before Your Users Do
162 | 
163 | PROBLEM
164 | 
165 | APIs break even when the backend technically works.
166 | 
167 | Fast-moving teams constantly change API response shapes — fields get
168 | renamed, enums change casing, currency representations shift from dollars
169 | to cents. When one layer changes but the others don't, the system silently
170 | disagrees with itself. The backend is correct. The frontend is correct.
171 | But the product is broken.
172 | 
173 | This is contract drift: the frontend expects one response shape, the
174 | backend returns another, and the API docs still promise something else.
175 | 
176 | In our demo, a backend developer correctly changed the checkout API to
177 | return integer cents — a standard best practice for currency precision.
178 | But the frontend still read order.total (which no longer existed), and
179 | the OpenAPI spec still documented the old shape. The result: the checkout
180 | page showed "$NaN" for the total and "Unknown" for the payment status.
181 | This is a revenue-critical bug. No syntax error caused it. No failing
182 | test caught it. The system just stopped agreeing with itself.
183 | 
184 | This type of bug is notoriously hard to find manually. It spans multiple
185 | files and system layers. Code review catches syntax errors, not semantic
186 | contract mismatches. Monitoring fires after users are already affected.
187 | 
188 | SOLUTION
189 | 
190 | APIDrift uses IBM Bob as a repo-wide contract detective.
191 | 
192 | Given a codebase with drift, APIDrift asks Bob to compare the frontend
193 | API client, backend route handler, and OpenAPI documentation simultaneously.
194 | Bob traces field names, types, enum values, and semantic meaning across
195 | all three layers — identifies where they disagree, classifies the severity
196 | of each mismatch, reasons about which layer is the source of truth, and
197 | generates everything needed to fix the problem.
198 | 
199 | APIDrift produces five artifacts in one workflow:
200 | 
201 | 1. A drift matrix with severity levels (Breaking / Medium / Cosmetic)
202 | 2. A business impact summary — which user flows are affected and how
203 | 3. A code patch and OpenAPI update from Bob
204 | 4. A contract regression test that prevents the same drift from shipping
205 | 5. A PR summary and owner routing — the fix assigned to the right team
206 | 
207 | In our demo, Bob identified three breaking mismatches — field name drift,
208 | semantic unit drift, and enum casing drift — across a real checkout
209 | codebase. Bob classified all three as Breaking severity, described the
210 | business impact on the checkout confirmation flow, patched the frontend
211 | and spec, generated a regression test, and routed the fix to the API
212 | platform team. The checkout total went from $NaN to $84.70.
213 | 
214 | APIDrift turns IBM Bob into a sync agent for API contracts — keeping
215 | frontend expectations, backend behavior, and API documentation aligned
216 | automatically, before users ever see the mismatch.
217 | ```
218 | **Word count: ~380**
219 | 
220 | ---
221 | 
222 | ## IBM Bob Usage Statement (PASTE READY)
223 | 
224 | ```
225 | IBM BOB USAGE IN APIDRIFT
226 | 
227 | IBM Bob IDE is the core analytical and generative engine of APIDrift.
228 | All Bob usage was performed using the hackathon-provisioned IBM Bob
229 | account (ibm-coding-challenge-xxx). Task session reports with
230 | consumption summaries are in the bob_sessions/ folder.
231 | 
232 | TASK 1: Contract Drift Analysis
233 | Bob was given @ file references to four files simultaneously:
234 | the frontend API client, checkout UI component, backend route handler,
235 | and OpenAPI specification. Using Bob's repo-wide context understanding,
236 | Bob compared field names, types, enum values, and semantic meaning across
237 | all four files. Bob identified three breaking mismatches, classified each
238 | by severity (Breaking / Medium / Cosmetic), described the business impact
239 | on the checkout confirmation flow, and identified the backend as the
240 | canonical source of truth.
241 | 
242 | TASK 2: Patch Generation
243 | Bob generated the frontend code patch (updating the checkout formatter
244 | to use totalCents and uppercase status enum) and the OpenAPI specification
245 | update (replacing total with totalCents, updating status enum values to
246 | uppercase). Bob explained the engineering rationale: integer cents avoids
247 | floating-point precision issues in currency calculations.
248 | 
249 | TASK 3: Contract Test Generation
250 | Bob generated a Jest + Supertest regression contract test that validates
251 | the backend response shape, asserts that the deprecated total field no
252 | longer exists, and verifies the uppercase status enum value.
253 | 
254 | TASK 4: PR Summary Generation
255 | Bob generated a complete PR description including drift summary, user
256 | impact, files changed, tests added, engineering rationale, and rollback
257 | risk assessment.
258 | 
259 | WHY IBM BOB, NOT JUST A DIFF TOOL:
260 | Contract drift is a semantic reasoning problem, not a string comparison
261 | problem. Bob understands that changing status from "paid" to "PAID" breaks
262 | every frontend equality check — not because the strings differ, but because
263 | of what that field means in a checkout confirmation flow. Bob also reasons
264 | about intent: the backend change to integer cents was correct and
265 | intentional, so the frontend should adapt to the backend, not the other
266 | way around. That judgment — which layer is the canonical source of truth
267 | — is what IBM Bob provides.
268 | ```
269 | 
270 | ---
271 | 
272 | ## Pitch Scripts
273 | 
274 | ### 30-Second Pitch
275 | > "APIs break even when the backend technically works. The real problem is contract drift: the frontend expects one response shape, the backend returns another, and the docs still promise something else. APIDrift uses IBM Bob as a repo-wide contract detective. Bob compares frontend usage, backend implementation, and OpenAPI docs — classifies drift severity, identifies business impact, generates the patch, updates the docs, creates a contract test, and routes the fix to the right team. Bob catches API drift before your users do."
276 | 
277 | ### 2-Minute Pitch
278 | > "Fast-moving teams constantly change APIs. But when the backend, frontend, and docs move at different speeds, bugs slip through. The backend may be working correctly — but the product is broken because the system no longer agrees with itself.
279 | >
280 | > That's contract drift.
281 | >
282 | > In our demo, the checkout backend correctly changed to integer cents for currency precision. But the frontend still expected decimal dollars, and the API docs were never updated. The checkout page showed $NaN and Unknown payment status. Revenue-critical. Silent.
283 | >
284 | > APIDrift uses IBM Bob to detect and fix this. Bob reads the frontend client, backend route, and OpenAPI spec simultaneously — identifies three breaking mismatches, classifies their severity, describes the business impact, and reasons about which layer is the canonical source of truth.
285 | >
286 | > Then Bob generates the fix: a frontend patch, an updated OpenAPI spec, a regression contract test, and a PR summary. APIDrift routes the fix to the right owner — high priority, frontend and backend teams notified, Bob's drift report attached.
287 | >
288 | > The result: $84.70 and Paid. The API promise is kept.
289 | >
290 | > APIDrift. Bob catches API drift before your users do."
291 | 
292 | ---
293 | 
294 | ## Demo Failure Contingencies
295 | 
296 | ### Scenario 1: APIDrift UI Doesn't Load
297 | - Hard refresh → if broken, switch to mobile device with UI pre-loaded
298 | - All screens render from saved static data — no live Bob needed
299 | 
300 | ### Scenario 2: $NaN Not Rendering
301 | - Test on exact machine + browser before recording
302 | - If browser auto-converts: `const total = order.total !== undefined ? order.total.toFixed(2) : "NaN"` → force the string "$NaN"
303 | - This is the entire emotional hook — it must be ugly
304 | 
305 | ### Scenario 3: Bob Output Looks Wrong
306 | - Use saved fallback files for recording — never live Bob
307 | - If Task 1 is vague on severity, re-run with explicit "Return severity as Breaking / Medium / Cosmetic for each field"
308 | 
309 | ---
310 | 
311 | ## Submission Day Order of Operations
312 | 
313 | 1. Confirm all Bob task sessions exported to `bob_sessions/`
314 | 2. Record video (use script above; target 2:45)
315 | 3. Upload to YouTube/Vimeo; test in private browser
316 | 4. Paste problem + solution statement from this file
317 | 5. Paste IBM Bob usage statement from this file
318 | 6. Push public repo with `bob_sessions/` folder
319 | 7. Submit before 10:00 AM ET May 3
320 | 8. Check AI Advisor feedback; revise + resubmit ALL deliverables if flagged
</content>
</file>
<file><path>vault/07 Judge Q&A.md.md</path>
<content lines="1-78">
 1 | # Judge Q&A Prep — APIDrift
 2 | 
 3 | **Created:** 2026-05-01
 4 | **Status:** Complete ✅
 5 | 
 6 | ---
 7 | 
 8 | ## Delivery Rules
 9 | - 30 seconds max per answer
10 | - Name "IBM Bob" at least once per answer
11 | - Lead with the direct answer; support with one specific example
12 | - End every answer with a forward-looking statement
13 | 
14 | ---
15 | 
16 | ## Q1: "How do you know which layer is the source of truth when there's drift?"
17 | 
18 | **Answer:**
19 | "IBM Bob reasons about intent, not just diffs. In our demo, Bob identified that the backend change to totalCents was intentional — integer cents is a well-known best practice for currency to avoid floating-point precision errors. The frontend and docs didn't have an intentional change, they just hadn't been updated. Bob looks at the semantics of the change, not just that a field name is different.
20 | 
21 | In production, we'd add explicit signals — like a commit message or a changelog entry — to help Bob confirm intent. But even without that, Bob's reasoning about which change makes engineering sense is more reliable than assuming any one layer is always right."
22 | 
23 | ---
24 | 
25 | ## Q2: "Isn't this just a TypeScript types problem? Couldn't strict typing prevent this?"
26 | 
27 | **Answer:**
28 | "TypeScript helps within a single layer, but it doesn't span boundaries. You can have perfect TypeScript types on the frontend and perfect types on the backend — and they still drift if they're not generated from the same source of truth.
29 | 
30 | Most real teams don't auto-generate their frontend types from OpenAPI. They write them by hand, or copy them, or forget to update them. APIDrift using IBM Bob catches the drift that already exists in the real codebase — not the ideal codebase where everything is perfectly typed. It meets teams where they are."
31 | 
32 | ---
33 | 
34 | ## Q3: "Why does this need IBM Bob? Couldn't you do this with a simpler diff script?"
35 | 
36 | **Answer:**
37 | "A diff script can tell you that 'paid' and 'PAID' are different strings. IBM Bob understands that this breaks every downstream equality check in the frontend. That's a semantic reasoning problem, not a string comparison problem.
38 | 
39 | Bob also synthesizes across multiple files simultaneously — frontend client, UI component, backend route, and OpenAPI spec — and reasons about which change was intentional versus accidental. A script finds differences. Bob understands what those differences mean and why they matter. That's the distinction."
40 | 
41 | ---
42 | 
43 | ## Q4: "What's your go-to-market? How do you sell this?"
44 | 
45 | **Answer:**
46 | "Three phases. Immediate: developer communities — HackerNews, DevOps subreddits. Free tier: scan one repo for drift. Short-term: teams that have OpenAPI specs but no enforcement in CI — we slot in as a pre-merge check. Pitch: 'If APIDrift catches one integration bug before it ships, it paid for itself.'
47 | 
48 | Longer term, we integrate with GitHub Actions so drift is caught before the PR merges, not after the deploy. Monetization: per-seat SaaS for engineering teams, or per-repo for enterprise. The market is any team that moves fast and has frontend/backend written by different people."
49 | 
50 | ---
51 | 
52 | ## Q5: "How does this scale beyond one checkout endpoint? Real apps have hundreds of endpoints."
53 | 
54 | **Answer:**
55 | "Our MVP demonstrates the concept with one scenario, but IBM Bob's repo-wide context means it can analyze any endpoint Bob can read. The drift matrix format scales — each row is a field, each column is a layer. We'd prioritize endpoints by change frequency or user impact.
56 | 
57 | For the hackathon, we proved the detection + fix + test loop works on a real drifted scenario. Production would add an OpenAPI parser to enumerate all endpoints and run Bob's analysis on each one. The hard problem was building the reasoning engine — and IBM Bob is that engine."
58 | 
59 | ---
60 | 
61 | ## Additional Likely Questions
62 | 
63 | | Question | Key Points |
64 | |---|---|
65 | | "What about GraphQL or gRPC?" | Schema-first protocols have less drift by design; REST is the highest-pain case. Bob can analyze any file type it can read. |
66 | | "How do you handle drift introduced by a third-party API you don't control?" | Out of scope for MVP; APIDrift focuses on contracts you own. Third-party drift is a monitoring problem (different layer). |
67 | | "Could Bob make the wrong fix recommendation?" | Yes — that's why we show the evidence trail and two options. Human approves before any code is merged. Bob generates; engineer decides. |
68 | | "Why Next.js and not a simpler frontend?" | Fastest stack for a polished UI with server-side rendering; Havyn knows it cold. Speed of development matters in 48 hours. |
69 | | "What makes this different from Spectral or other OpenAPI linting tools?" | Spectral lints the spec in isolation. APIDrift compares the spec against the actual running code. They catch different problems. |
70 | 
71 | ---
72 | 
73 | ## Q&A Practice Protocol
74 | 
75 | 1. Read each answer out loud — time yourself (target: 30s)
76 | 2. Have someone ask questions in random order
77 | 3. Practice the pivot: if asked something off-script, say "Great question — [direct answer], and what makes this interesting for the hackathon theme is [tie back to 'turn idea into impact faster']"
78 | 4. Know the one number: "$NaN" and the one line: "Bob catches API drift before your users do"
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:51:30.835Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.04

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<read_file>
<args>
<file>
<path>vault/08 Bugs and QA.md.md</path>
</file>
<file>
<path>vault/09 Context Packets.md.md</path>
</file>
<file>
<path>vault/10 AI Specialist Outputs.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 'vault/08 Bugs and QA.md.md', 'vault/09 Context Packets.md.md', 'vault/10 AI Specialist Outputs.md'] Result:
<files>
<file><path>vault/08 Bugs and QA.md.md</path>
<content/><notice>File is empty</notice>
</file>
<file><path>vault/09 Context Packets.md.md</path>
<content lines="1-184">
  1 | # Context Packets
  2 | 
  3 | ## Latest Project Context Packet
  4 | 
  5 | **Last Updated:** 2026-05-01 — v1.0: Severity + business impact + ticket routing added
  6 | 
  7 | Project Name: APIDrift
  8 | Subtitle: API Drift Detector & Sync Agent
  9 | Current One-Liner: APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart — then classifies severity, identifies business impact, patches the mismatch, creates a contract test, and routes the fix to the right team.
 10 | Tagline: "Bob catches API drift before your users do."
 11 | Enterprise Tagline: "Keep frontend, backend, and API contracts in sync automatically."
 12 | Target User: Frontend + backend engineers and tech leads at fast-moving product teams
 13 | Problem: Contract drift — frontend, backend, and API docs silently disagree, causing product failures even when each layer works correctly
 14 | Solution: IBM Bob compares all three layers → drift matrix with severity + business impact + patch + contract test + ticket routing + PR summary
 15 | MVP: 10 demo screens + 5 Bob IDE tasks + broken/fixed checkout app
 16 | Tech Stack: Next.js + Tailwind (APIDrift UI + demo frontend), Express (demo API), OpenAPI YAML, Jest + Supertest, TypeScript, IBM Bob IDE
 17 | APIs / Tools: IBM Bob IDE (required, 5 tasks); ibm-coding-challenge-xxx account
 18 | Current Build Status: All planning complete — READY TO BUILD
 19 | Hackathon Theme: "Turn idea into impact faster"
 20 | Demo Scenario: Checkout drift — totalCents vs total, PAID vs paid → $NaN and "Unknown" → Bob detects → severity classified → patch + test + routing → $84.70 and "Paid"
 21 | Key Demo Moment: Screen 3 — Drift matrix with severity badges (Breaking/Medium/Cosmetic)
 22 | Pitch Tagline: "Bob catches API drift before your users do."
 23 | Next Priority: Build broken checkout app — backend returns totalCents, frontend expects total, UI shows $NaN
 24 | 
 25 | Decisions Made:
 26 | - Project: APIDrift (pivoted from Incident Detective)
 27 | - Subtitle: "API Drift Detector & Sync Agent" (enterprise framing)
 28 | - Demo scenario: checkout drift (totalCents + PAID enum) — locked
 29 | - Severity levels: Breaking / Medium / Cosmetic on each drift finding
 30 | - Business impact: per-scan panel ("this affects the checkout confirmation flow — high risk")
 31 | - Ticket routing: simulated UI card (Screen 9); real Orchestrate optional if time allows
 32 | - Fix direction: update frontend + OpenAPI to match backend (totalCents is intentional)
 33 | - Build broken app FIRST — $NaN must be real
 34 | - Hardcode drift data JSON with severity + businessImpact + ticketRouting fields
 35 | - Save all Bob outputs as fallback files — demo never depends on live latency
 36 | - Bob IDE required; ibm-coding-challenge-xxx account only
 37 | - bob_sessions/ folder must exist before first Bob task
 38 | - OpenAPI only — no GraphQL/Protobuf in MVP
 39 | - No real-time commit alerts, no real Jira/Slack/GitHub PR auto-creation
 40 | - One monorepo demo only
 41 | 
 42 | Do Not Change:
 43 | - Vault structure (00–10 files)
 44 | - Demo scenario: checkout drift is locked
 45 | - Fix direction: frontend + docs update to match backend
 46 | - 10 screen order as defined in 03 MVP Scope.md
 47 | - Bob's role must be visible (sidebar) and narrated explicitly in video
 48 | - Severity classification must be visible in drift matrix
 49 | 
 50 | Open Questions:
 51 | - Monorepo vs separate repos for demo app vs APIDrift UI?
 52 | - watsonx Orchestrate ticket routing — wire real agent or keep simulated?
 53 | 
 54 | ---
 55 | 
 56 | ## Submission Requirements (confirmed)
 57 | 
 58 | | Deliverable | Requirement | Status |
 59 | |---|---|---|
 60 | | Video demo | Max 3 min; ≥90s showing solution; narrate IBM Bob | Script in 06 |
 61 | | Problem + solution statement | ≤500 words | Paste-ready in 06 |
 62 | | IBM Bob usage statement | 4 tasks described | Paste-ready in 06 |
 63 | | GitHub repo + bob_sessions/ | Public; screenshots + markdown per task | ⬜ Create folder |
 64 | 
 65 | **Deadline:** 10:00 AM ET, May 3, 2026
 66 | 
 67 | ---
 68 | 
 69 | ## 10 Demo Screens (from 03 MVP Scope.md)
 70 | 
 71 | 1. Broken checkout ($NaN, Unknown) + Scan button
 72 | 2. Contract sources (3 cards)
 73 | 3. Drift matrix with severity ← priority component
 74 | 4. Bob evidence trail
 75 | 5. Severity + business impact ← new
 76 | 6. Fix strategy (2 options)
 77 | 7. Patch diff (frontend + OpenAPI)
 78 | 8. Contract test
 79 | 9. Ticket/owner routing ← new
 80 | 10. Fixed checkout ($84.70, Paid) + PR summary
 81 | 
 82 | ---
 83 | 
 84 | ## 5 Bob IDE Tasks
 85 | 
 86 | 1. Analyze contract drift (includes severity + business impact)
 87 | 2. Generate patch
 88 | 3. Generate contract test
 89 | 4. Generate PR summary
 90 | 5. Create Bob Skill (stretch)
 91 | 
 92 | ---
 93 | 
 94 | ## Paste-Ready Specialist Context
 95 | 
 96 | ```
 97 | You are a specialist helping me build a hackathon project for the
 98 | IBM Bob Dev Day 2026 hackathon this weekend.
 99 | 
100 | Project Name: APIDrift
101 | Subtitle: API Drift Detector & Sync Agent
102 | Tagline: "Bob catches API drift before your users do."
103 | Hackathon Theme: "Turn idea into impact faster"
104 | Target User: Frontend/backend engineers at fast-moving product teams
105 | Problem: Contract drift — frontend, backend, and API docs disagree
106 | silently, causing product failures even when each layer is technically correct.
107 | Solution: IBM Bob compares all three layers → drift matrix with severity
108 | + business impact + patch + contract test + ticket routing + PR summary
109 | 
110 | Demo scenario (LOCKED):
111 | - Backend changed: total → totalCents, "paid" → "PAID"
112 | - Frontend still expects: total (dollars), status === "paid"
113 | - OpenAPI still says: total: number, status: "paid"
114 | - Result: checkout shows $NaN and "Unknown status"
115 | - Fix: Bob updates frontend + OpenAPI to match backend
116 | 
117 | 10 Demo Screens (locked order):
118 | 1. Broken checkout + scan button
119 | 2. Contract sources (3 cards)
120 | 3. Drift matrix with severity badges (Breaking/Medium/Cosmetic)
121 | 4. Bob evidence trail (7-point chain)
122 | 5. Severity + business impact panel (HIGH, revenue-critical)
123 | 6. Fix strategy (2 options, Option B recommended)
124 | 7. Patch diff (frontend + OpenAPI)
125 | 8. Contract test
126 | 9. Ticket/owner routing (simulated)
127 | 10. Fixed checkout ($84.70, Paid) + PR summary
128 | 
129 | Tech Stack: Next.js + Tailwind, Express, OpenAPI YAML, Jest + Supertest,
130 | TypeScript, IBM Bob IDE (5 tasks)
131 | 
132 | 5 Bob IDE tasks:
133 | 1. Analyze drift (severity + business impact)
134 | 2. Generate patch
135 | 3. Generate contract test
136 | 4. Generate PR summary
137 | 5. Bob Skill (stretch)
138 | 
139 | Drift data JSON: saved as sample-drift-output.json with severity,
140 | businessImpact, and ticketRouting fields — unblocks all 10 UI screens
141 | 
142 | Build order:
143 | 1. Broken checkout app ($NaN UI)
144 | 2. Fixed checkout version
145 | 3. Drift data JSON (hardcoded with severity)
146 | 4. APIDrift UI (all 10 screens, static)
147 | 5. Bob IDE tasks 1–4
148 | 6. Wire UI to Bob fallback outputs
149 | 7. Polish Day 2
150 | 8. Ticket routing screen (simulated card)
151 | 
152 | Submission:
153 | - Video max 3 min; ≥90s; must narrate IBM Bob by name
154 | - bob_sessions/ with screenshots + markdown per task
155 | - Deadline: 10:00 AM ET May 3
156 | - Use ibm-coding-challenge-xxx Bob account
157 | 
158 | Do Not Change:
159 | - Demo scenario (totalCents/PAID drift)
160 | - 10 screen order
161 | - Severity classification must be visible in demo
162 | - Bob's role visible and narrated in video
163 | ```
164 | 
165 | ---
166 | 
167 | ## Packet History
168 | 
169 | ### Packet v1.0 — 2026-05-01
170 | - Severity levels added to drift matrix (Breaking / Medium / Cosmetic)
171 | - Business impact panel added (Screen 5)
172 | - Ticket/owner routing added (Screen 9, simulated)
173 | - Demo arc updated: 9 → 10 screens
174 | - Drift data JSON updated: severity + businessImpact + ticketRouting fields
175 | - Product framing: "API Drift Detector & Sync Agent"
176 | - Enterprise tagline added
177 | - Pitch scripts updated to include severity + routing
178 | - Cuts confirmed: OpenAPI only, no real Jira/Slack, no multi-repo, no real-time alerts
179 | 
180 | ### Packet v0.9 — 2026-05-01
181 | - PIVOTED: Incident Detective → APIDrift
182 | - Initial APIDrift planning complete
183 | 
184 | ### Packets v0.1–v0.8 — 2026-05-01 (Incident Detective — archived in history)
</content>
</file>
<file><path>vault/10 AI Specialist Outputs.md</path>
<content lines="1-439">
  1 | # AI Specialist Outputs
  2 | 
  3 | > This file contains paste-ready starter prompts for each specialist AI chat.
  4 | > Pull the latest context from `09 Context Packets.md` before using any prompt.
  5 | > After each specialist session, paste the output under the matching "## Outputs" section below.
  6 | 
  7 | ---
  8 | 
  9 | ## 1. Hackathon Researcher
 10 | 
 11 | ### Starter Prompt
 12 | 
 13 | ```
 14 | You are a Hackathon Research Specialist. Your job is to help me understand the IBM Bob 2026 hackathon landscape before I commit to any project idea.
 15 | 
 16 | --- CURRENT PROJECT CONTEXT ---
 17 | Project Name: [OPEN QUESTION]
 18 | Current One-Liner: [OPEN QUESTION]
 19 | Target User: [OPEN QUESTION]
 20 | Problem: [OPEN QUESTION]
 21 | Solution: [OPEN QUESTION]
 22 | MVP: [OPEN QUESTION]
 23 | Tech Stack: [OPEN QUESTION]
 24 | APIs / Tools: IBM APIs/services (specifics TBD from brief)
 25 | Current Build Status: Pre-build — ideation/scoping phase
 26 | Biggest Risks: No idea locked yet; risk of over-scoping for a weekend
 27 | Next Priority: Lock the project idea
 28 | Open Questions:
 29 | - What is the IBM Bob hackathon theme/prompt/track?
 30 | - What IBM tools or APIs are required or preferred?
 31 | - What does the judging rubric look like?
 32 | 
 33 | --- YOUR TASK ---
 34 | 1. Ask me for the hackathon brief, prompt, and any sponsor track details if I haven't provided them.
 35 | 2. Research and summarize:
 36 |    a. What IBM tools/APIs are available (watsonx, Watson APIs, IBM Cloud, etc.) and what each is best suited for
 37 |    b. What types of projects typically win IBM-sponsored hackathons (patterns, themes, framing)
 38 |    c. What the judges likely care about based on the rubric or sponsor context
 39 |    d. Any technical constraints or requirements I should know before choosing an idea
 40 | 3. Identify 3 high-potential problem spaces that align with IBM's tools and typical judging criteria.
 41 | 
 42 | --- RULES ---
 43 | - Distinguish confirmed facts (from the brief) from assumptions (from general IBM knowledge)
 44 | - Flag anything that needs verification
 45 | - Do not recommend a final project idea — that is the Product Strategist's job
 46 | - Keep scope realistic for a 48-hour weekend build
 47 | 
 48 | --- EXPECTED OUTPUT FORMAT ---
 49 | Deliver your response in these sections:
 50 | 1. IBM Tools & APIs Summary — what's available and what each does well
 51 | 2. Winning Project Patterns — what types of projects tend to score well
 52 | 3. Judging Criteria Breakdown — what judges likely prioritize and why
 53 | 4. High-Potential Problem Spaces — 3 areas worth exploring, with brief rationale
 54 | 5. Open Questions / Things to Verify — anything unclear that I need to confirm
 55 | 
 56 | --- PASTE-READY COMMAND CENTER UPDATE ---
 57 | At the end of your response, include a section titled exactly:
 58 | "## COMMAND CENTER UPDATE"
 59 | Formatted as:
 60 | - Decisions Made: [any confirmed facts from research]
 61 | - New Open Questions: [anything this research surfaced]
 62 | - Risks Identified: [any new risks from research]
 63 | - Recommended Next Step: [one concrete action]
 64 | ```
 65 | 
 66 | ### Session Outputs
 67 | ## 1. IBM Tools & APIs Summary — what's available and what each does well
 68 | 
 69 | |Tool / API|Status for this hackathon|What it does well|Best 48-hour use|
 70 | |---|--:|---|---|
 71 | |**IBM Bob**|**Confirmed core tool**|AI development partner that works with full repository context, helps generate code, refactor/debug, write docs/tests, automate tasks, and scaffold files/projects. IBM Bob docs describe modes like Ask, Plan, Code, Advanced, and Orchestrator, plus file access, terminal commands, and MCP integration. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob \| Docs \| IBM Bob"))|Make Bob visibly central to the build: repo analysis, test generation, bug-fix workflow, documentation automation, onboarding assistant, PR risk reviewer.|
 72 | |**IBM Bob + repo-context workflows**|**Confirmed / likely mandatory**|The lablab Bob challenge says submissions must clearly demonstrate how Bob was used, and projects without meaningful Bob usage may be disqualified. It also says Bob access is provided at hackathon start, usage is limited, and participants are expected to actively use Bob. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Do not just build a random app “with help from Bob.” Build something where Bob’s role is visible in the product or demo workflow.|
 73 | |**watsonx.ai**|**Likely useful, not yet confirmed required**|IBM describes watsonx.ai as an AI development studio with APIs, customizable models, runtimes, SDKs, RAG frameworks, templates, and agentic workflows. ([IBM](https://www.ibm.com/products/watsonx-ai "IBM watsonx.ai"))|Use only if your project needs model inference, summarization, RAG, classification, or an AI backend beyond Bob-assisted development.|
 74 | |**IBM Granite models**|**Likely useful if watsonx allowed**|IBM’s watsonx foundation model library includes Granite models for Q&A, summarization, classification, extraction, RAG, coding tasks, vision, and guardrail/risk detection. ([IBM](https://www.ibm.com/products/watsonx-ai/foundation-models "Foundation Models - IBM watsonx.ai"))|Strong for enterprise-flavored demos: “trusted AI,” code analysis, risk checking, PII/safety checks, documentation generation.|
 75 | |**watsonx Orchestrate**|**Possible, but verify**|IBM says watsonx Orchestrate helps create, configure, and deploy intelligent agents that automate business tasks, including sophisticated multi-agent systems. ([IBM](https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=getting-started-watsonx-orchestrate "Getting started with IBM watsonx Orchestrate"))|Useful if the project is a workflow automation tool, but risky if setup is heavy. Only use if the brief rewards agent orchestration.|
 76 | |**Watson Natural Language Understanding**|**Possible, but verify**|Extracts meaning and metadata from unstructured text: categories, entities, keywords, sentiment, emotion, relations, syntax, and classifications. ([IBM](https://www.ibm.com/products/natural-language-understanding "IBM Watson Natural Language Understanding"))|Good for analyzing tickets, bug reports, support logs, PR comments, meeting transcripts, or incident reports.|
 77 | |**Watson Discovery**|**Possible, but verify**|IBM describes Discovery as an AI-powered search engine for extracting answers from complex business documents. ([IBM](https://www.ibm.com/docs/en/software-hub/5.1.x?topic=available-apis "Collecting, organizing, and analyzing your data with available APIs"))|Good for “ask questions over docs/runbooks/codebase knowledge” projects, but only if setup time is manageable.|
 78 | |**Watson Speech services**|**Possible, but probably non-core**|IBM docs list Speech to Text and Text to Speech APIs as Watson Speech services. ([IBM](https://www.ibm.com/docs/en/software-hub/5.1.x?topic=available-apis "Collecting, organizing, and analyzing your data with available APIs"))|Only worth it if your idea has voice input/output; otherwise skip for weekend scope.|
 79 | |**IBM Cloud**|**Likely ecosystem support**|IBM TechXchange hackathon materials often mention access to IBM Cloud, watsonx services, and Granite models as tools/resources. ([IBM](https://www.ibm.com/community/techxchange-hackathons/ "Hackathons - IBM TechXchange Events"))|Use for hosting/inference only if required. For speed, deploy wherever is fastest unless rubric requires IBM Cloud.|
 80 | 
 81 | **Researcher recommendation:** for this Bob hackathon, treat **IBM Bob as the hero tool**, not watsonx. watsonx/Granite/Orchestrate should be supporting tools only if the brief confirms they are allowed and you can integrate them quickly.
 82 | 
 83 | ## 2. Winning Project Patterns — what types of projects tend to score well
 84 | 
 85 | **Confirmed from IBM Bob-specific pages:** the challenge is about “Turn idea into impact faster,” improving how builders work, helping people get up to speed on code quickly, generating documentation/tests, and reducing repetitive developer tasks. The stated judging categories are **Application of Technology, Presentation, Business Value, and Originality**. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
 86 | 
 87 | Patterns that seem to win IBM-style hackathons:
 88 | 
 89 | **1. Clear business pain + obvious ROI.** Recent IBM watsonx winners targeted concrete productivity or operational problems: meeting inefficiency, groundwater management, academic advising overload, infrastructure risk, travel planning friction, and flood response. They were not just “cool AI apps”; they framed a painful workflow, a specific user, and a measurable outcome. ([IBM Community](https://community.ibm.com/community/user/blogs/jennifer-judge/2025/04/11/this-could-be-you-meet-our-latest-hackathon-winner "This could be you! Meet our latest hackathon winners"))
 90 | 
 91 | **2. Agentic workflow, not just chatbot.** IBM winners often use multiple specialized agents or structured workflows: meeting prep → live meeting support → post-meeting follow-up; student query → data retrieval → recommendation → advisor oversight; disaster scene analysis → risk interpretation → response routing. ([IBM Community](https://community.ibm.com/community/user/blogs/jennifer-judge/2025/04/11/this-could-be-you-meet-our-latest-hackathon-winner "This could be you! Meet our latest hackathon winners"))
 92 | 
 93 | **3. Human-in-the-loop trust.** IBM’s Bob messaging emphasizes full SDLC delivery with governance, security, compliance, reusable playbooks, standards, and human-in-the-loop governance. That means judges may respond better to projects that make AI safer and more auditable, not just faster. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))
 94 | 
 95 | **4. Demo-first storytelling.** The lablab Bob rubric explicitly includes presentation clarity and effectiveness. A strong Bob project should show: before state, Bob-assisted workflow, evidence panel, working output, and measurable improvement. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
 96 | 
 97 | ## 3. Judging Criteria Breakdown — what judges likely prioritize and why
 98 | 
 99 | **Confirmed criteria from the IBM Bob lablab page:**
100 | 
101 | |Criterion|What it probably means|How to optimize|
102 | |---|---|---|
103 | |**Application of Technology**|The project must be complete, thought-out, and clearly use IBM Bob. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Show Bob doing something central: analyzing a repo, generating tests, tracing a bug, producing docs, refactoring code, or coordinating implementation steps.|
104 | |**Presentation**|Clear demo + pitch. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Build a tight 3-minute story: pain → live failure/workflow → Bob intervention → result → value.|
105 | |**Business Value**|The solution should address a high-priority issue with practical impact. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Pick a developer/workflow bottleneck that wastes time or creates risk: onboarding, incidents, testing, compliance, PR review, legacy code.|
106 | |**Originality**|Unique approach in applying Bob to the issue. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Avoid “AI coding assistant clone.” Make the product specific, visual, and workflow-based.|
107 | 
108 | **Assumption based on IBM context:** judges will likely favor projects that feel **enterprise-relevant**: secure, explainable, auditable, useful for teams, and realistic to adopt. IBM positions Bob around enterprise SDLC productivity, modernization, testing, security, governance, and repo-wide context. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))
109 | 
110 | ## 4. High-Potential Problem Spaces — 3 areas worth exploring, with brief rationale
111 | 
112 | ### 1. Developer onboarding / legacy-code understanding
113 | 
114 | **Why it fits IBM Bob:** Bob is explicitly strong at understanding codebases, answering questions, generating docs, and helping developers work with real repo context. The Bob challenge itself mentions getting up to speed on existing code quickly. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob | Docs | IBM Bob"))
115 | 
116 | **48-hour realistic MVP:** upload/connect a repo → Bob generates architecture map, “first 5 files to read,” dependency graph, setup guide, and beginner-friendly Q&A.
117 | 
118 | **Why judges may care:** onboarding is a universal enterprise pain, especially for legacy systems and large teams.
119 | 
120 | ### 2. PR / incident risk reviewer for repo-wide changes
121 | 
122 | **Why it fits IBM Bob:** IBM positions Bob around full SDLC work, testing, deployment, modernization, shift-left security, early risk detection, and fewer downstream incidents. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))
123 | 
124 | **48-hour realistic MVP:** given a small demo repo and a proposed change, show a risk report: files affected, missing tests, possible regressions, security concerns, and suggested test cases.
125 | 
126 | **Why judges may care:** this maps directly to business value: fewer bugs, faster reviews, less rework, safer AI-assisted coding.
127 | 
128 | ### 3. Documentation + test automation for small teams
129 | 
130 | **Why it fits IBM Bob:** Bob’s docs list writing/updating docs, refactor/debug, automation, code generation, and project scaffolding as core capabilities. The Bob challenge explicitly mentions generating documentation and tests and reducing repetitive tasks. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob | Docs | IBM Bob"))
131 | 
132 | **48-hour realistic MVP:** scan a repo → generate README improvements, API docs, test stubs, coverage checklist, and “docs drift” warnings when code changes.
133 | 
134 | **Why judges may care:** it is simple, demoable, useful, and directly aligned with the prompt without over-scoping.
135 | 
136 | ## 5. Open Questions / Things to Verify
137 | 
138 | 1. **Which hackathon are you entering?** IBM Dev Day Bob **May 1–3** or IBM + lablab.ai Bob **May 15–17**? The public pages conflict or may refer to separate events. ([IBM Dev Day](https://ibmdevday-bob.bemyapp.com/ "IBM Dev Day: Bob"))
139 |     
140 | 2. **Is IBM Bob the only required tool, or are watsonx.ai / Granite / Orchestrate encouraged too?**
141 |     
142 | 3. **What exactly must be submitted?** Need confirm whether the event requires GitHub repo, hosted app URL, video, slide deck, screenshots, Bob usage logs, or a written explanation.
143 |     
144 | 4. **Can the project be a developer tool built with Bob, or must the final product itself integrate Bob?** The Bob page says submissions must demonstrate meaningful Bob use, but we need the official interpretation. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
145 |     
146 | 5. **Are there usage limits, API keys, Bobcoin limits, or trial constraints?** The lablab page says Bob access is event-specific and usage is limited. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
147 |     
148 | 6. **Are external APIs/tools allowed?** Verify before relying on GitHub API, OpenAI/Claude, Supabase, Vercel, LangChain, etc.
149 |     
150 | 7. **Do they judge live demos or only recorded submissions?** This affects how polished the UI needs to be.
151 |     
152 | 
153 | ## COMMAND CENTER UPDATE
154 | 
155 | - Decisions Made: IBM Bob should be treated as the central hackathon tool; the strongest research-backed direction is developer productivity / agentic development, not a generic AI app. Public Bob criteria emphasize Application of Technology, Presentation, Business Value, and Originality.
156 |     
157 | - New Open Questions: Which IBM Bob event is the real target: May 1–3 Dev Day Bob or May 15–17 IBM + lablab.ai Bob? Are watsonx.ai, Granite, Orchestrate, and other IBM APIs optional, required, or unavailable?
158 |     
159 | - Risks Identified: Major date/brief ambiguity; risk of building an app where Bob is only used behind the scenes; risk of over-scoping with too many IBM services; risk of weak demo if Bob usage is not visually obvious.
160 |     
161 | - Recommended Next Step: Paste the official brief/rubric/Discord announcement so we can lock the exact constraints before the Product Strategist chooses a project idea.
162 | 
163 | ---
164 | 
165 | ## 2. Product Strategist
166 | 
167 | ### Starter Prompt
168 | 
169 | ```
170 | You are a Product Strategist helping me pick a winning hackathon idea and define the product clearly.
171 | 
172 | --- CURRENT PROJECT CONTEXT ---
173 | Project Name: [OPEN QUESTION]
174 | Current One-Liner: [OPEN QUESTION]
175 | Target User: [OPEN QUESTION]
176 | Problem: [OPEN QUESTION]
177 | Solution: [OPEN QUESTION]
178 | MVP: [OPEN QUESTION]
179 | Tech Stack: [OPEN QUESTION]
180 | APIs / Tools: IBM APIs/services (specifics TBD from brief)
181 | Current Build Status: Pre-build — ideation/scoping phase
182 | Biggest Risks: No idea locked yet; risk of over-scoping for a weekend
183 | Next Priority: Lock the project idea
184 | Open Questions:
185 | - What is the IBM Bob hackathon theme/prompt/track?
186 | - What IBM tools or APIs are required or preferred?
187 | - What does the judging rubric look like?
188 | 
189 | --- YOUR TASK ---
190 | 1. Ask me for the hackathon theme, any research findings I have, and IBM tool constraints.
191 | 2. Brainstorm 3–5 strong, demoable project ideas that:
192 |    - Fit the hackathon theme
193 |    - Use IBM tools meaningfully (not superficially)
194 |    - Can be built and demoed in ~48 hours by 1–2 people
195 |    - Have a clear, compelling demo story
196 | 3. For each idea, provide:
197 |    - Target user
198 |    - Core problem being solved
199 |    - Proposed solution
200 |    - Why IBM tools are a natural fit (not forced)
201 |    - Demo story (what the judge sees in 2 minutes)
202 |    - Risk level (Low / Medium / High) with reason
203 | 4. Help me select the strongest idea based on buildability + demo impact + judge appeal.
204 | 5. Once an idea is selected, write the official product definition:
205 |    - Project name
206 |    - One-liner
207 |    - Target user
208 |    - Problem statement
209 |    - Solution statement
210 | 
211 | --- RULES ---
212 | - Do not over-engineer — simple and demoable beats complex and incomplete
213 | - Distinguish confirmed facts from assumptions
214 | - Flag any open questions before locking the idea
215 | - All ideas must be realistic for a weekend MVP
216 | 
217 | --- EXPECTED OUTPUT FORMAT ---
218 | 1. Idea Candidates — 3–5 ideas with the full breakdown per idea
219 | 2. Recommendation — your top pick with reasoning
220 | 3. Selected Product Definition — only after I confirm the idea
221 | 4. Open Questions — anything that needs clarification before building
222 | 
223 | --- PASTE-READY COMMAND CENTER UPDATE ---
224 | At the end of your response, include a section titled exactly:
225 | "## COMMAND CENTER UPDATE"
226 | Formatted as:
227 | - Project Name: [if decided]
228 | - One-Liner: [if decided]
229 | - Target User: [if decided]
230 | - Problem: [if decided]
231 | - Solution: [if decided]
232 | - Decisions Made: [what was locked]
233 | - New Open Questions: [what surfaced]
234 | - Recommended Next Step: [one concrete action]
235 | ```
236 | 
237 | ### Session Outputs
238 | *(Paste strategist's response here after the session)*
239 | 
240 | ---
241 | 
242 | ## 3. MVP Scope Cutter
243 | 
244 | ### Starter Prompt
245 | 
246 | ```
247 | You are an MVP Scope Cutter — your job is to define the smallest, most demoable version of this hackathon project and protect it from scope creep.
248 | 
249 | --- CURRENT PROJECT CONTEXT ---
250 | Project Name: [OPEN QUESTION — fill in after Product Strategist session]
251 | Current One-Liner: [OPEN QUESTION]
252 | Target User: [OPEN QUESTION]
253 | Problem: [OPEN QUESTION]
254 | Solution: [OPEN QUESTION]
255 | MVP: [OPEN QUESTION — this is what you will define]
256 | Tech Stack: [OPEN QUESTION]
257 | APIs / Tools: IBM APIs/services (specifics TBD)
258 | Current Build Status: Pre-build — ideation/scoping phase
259 | Biggest Risks: Over-scoping; running out of time before demo
260 | Next Priority: Define the MVP feature list and build order
261 | 
262 | --- YOUR TASK ---
263 | 1. Ask me for the confirmed project idea and product definition if I haven't provided them.
264 | 2. Define the MVP:
265 |    - List only the features required to make the core demo work
266 |    - Explicitly list what is OUT OF SCOPE for the weekend
267 |    - Assign a build order (what must be done first for the demo to work)
268 |    - Estimate time per feature (rough: hours, not minutes)
269 | 3. Define the "Demo-Ready Milestone" — the exact state the product needs to be in for a convincing 2-minute judge demo.
270 | 4. Flag any features that are nice-to-have but risky to include.
271 | 
272 | --- RULES ---
273 | - Default to cutting, not adding
274 | - If a feature doesn't directly support the demo story, it's out of scope
275 | - No authentication systems, no admin panels, no settings pages — unless the demo requires it
276 | - The MVP must be completable in ~30–36 hours of actual build time
277 | - Distinguish confirmed scope from assumptions
278 | 
279 | --- EXPECTED OUTPUT FORMAT ---
280 | 1. MVP Feature List — confirmed in-scope features with build order and time estimates
281 | 2. Out of Scope — explicit list of what's cut and why
282 | 3. Demo-Ready Milestone — exact state needed for the demo to work
283 | 4. Risk Flags — features that could cause time blowout
284 | 5. Open Questions — anything that needs clarification before building starts
285 | 
286 | --- PASTE-READY COMMAND CENTER UPDATE ---
287 | At the end of your response, include a section titled exactly:
288 | "## COMMAND CENTER UPDATE"
289 | Formatted as:
290 | - MVP: [confirmed feature list, one line each]
291 | - Out of Scope: [list]
292 | - Demo-Ready Milestone: [definition]
293 | - New Risks: [anything flagged]
294 | - Recommended Next Step: [one concrete action]
295 | ```
296 | 
297 | ### Session Outputs
298 | *(Paste MVP Scope Cutter's response here after the session)*
299 | 
300 | ---
301 | 
302 | ## 4. Technical Architect
303 | 
304 | ### Starter Prompt
305 | 
306 | ```
307 | You are a Technical Architect helping me design the simplest, most reliable system architecture for a weekend hackathon build.
308 | 
309 | --- CURRENT PROJECT CONTEXT ---
310 | Project Name: [OPEN QUESTION — fill in after Product Strategist session]
311 | Current One-Liner: [OPEN QUESTION]
312 | Target User: [OPEN QUESTION]
313 | Problem: [OPEN QUESTION]
314 | Solution: [OPEN QUESTION]
315 | MVP: [OPEN QUESTION — fill in after MVP Scope session]
316 | Tech Stack: [OPEN QUESTION — this is partially what you will define]
317 | APIs / Tools: IBM APIs/services (specifics TBD)
318 | Current Build Status: Pre-build
319 | Biggest Risks: Over-engineering; picking unfamiliar tools under time pressure
320 | Next Priority: Define the tech stack and system architecture
321 | 
322 | --- YOUR TASK ---
323 | 1. Ask me for the confirmed project idea, MVP feature list, and any stack preferences or constraints.
324 | 2. Recommend a tech stack that is:
325 |    - Appropriate for the MVP scope
326 |    - Fast to build with (favor familiar or low-config tools)
327 |    - Reliable enough to demo without breaking
328 |    - Integrated with the required IBM tools/APIs
329 | 3. Design the system architecture:
330 |    - What are the main components? (frontend, backend, AI layer, DB, external APIs)
331 |    - How do they connect?
332 |    - What data flows where?
333 |    - Where are the highest-risk integration points?
334 | 4. Provide a simple architecture diagram description (text-based is fine).
335 | 5. Flag any technical unknowns that need a spike or proof-of-concept before committing.
336 | 
337 | --- RULES ---
338 | - Optimize for speed of development and demo reliability over elegance
339 | - Avoid new tools you'd need to learn during the hackathon
340 | - No over-engineering — if a static JSON file works instead of a database, use it
341 | - Distinguish confirmed decisions from assumptions
342 | - Flag anything that could break during the live demo
343 | 
344 | --- EXPECTED OUTPUT FORMAT ---
345 | 1. Recommended Tech Stack — each layer with rationale
346 | 2. System Architecture Overview — components, connections, data flow
347 | 3. IBM Integration Plan — how and where IBM tools plug in
348 | 4. High-Risk Integration Points — what could break and how to mitigate
349 | 5. Proof-of-Concept Spikes Needed — anything to validate before full build
350 | 6. Open Questions — anything unclear
351 | 
352 | --- PASTE-READY COMMAND CENTER UPDATE ---
353 | At the end of your response, include a section titled exactly:
354 | "## COMMAND CENTER UPDATE"
355 | Formatted as:
356 | - Tech Stack: [confirmed stack, one line each layer]
357 | - Architecture Summary: [2–3 sentence description]
358 | - IBM Integration: [how IBM tools are used]
359 | - New Risks: [technical risks flagged]
360 | - Recommended Next Step: [one concrete action]
361 | ```
362 | 
363 | ### Session Outputs
364 | *(Paste architect's response here after the session)*
365 | 
366 | ---
367 | 
368 | ## 5. Demo / Pitch Coach
369 | 
370 | ### Starter Prompt
371 | 
372 | ```
373 | You are a Demo and Pitch Coach helping me build a compelling, judge-ready demo and pitch for a hackathon.
374 | 
375 | --- CURRENT PROJECT CONTEXT ---
376 | Project Name: [OPEN QUESTION — fill in after Product Strategist session]
377 | Current One-Liner: [OPEN QUESTION]
378 | Target User: [OPEN QUESTION]
379 | Problem: [OPEN QUESTION]
380 | Solution: [OPEN QUESTION]
381 | MVP: [OPEN QUESTION — fill in after MVP Scope session]
382 | Tech Stack: [OPEN QUESTION]
383 | APIs / Tools: IBM APIs/services (specifics TBD)
384 | Current Build Status: Pre-build
385 | Demo Story: [OPEN QUESTION — this is what you will define]
386 | Pitch Angle: [OPEN QUESTION — this is what you will define]
387 | Biggest Risks: Demo not telling a clear story; judges not understanding the value in 2 minutes
388 | 
389 | --- YOUR TASK ---
390 | 1. Ask me for the confirmed project idea, MVP feature list, and judging criteria.
391 | 2. Design the demo flow:
392 |    - What is the exact sequence of screens/actions the judge sees?
393 |    - What is the user journey being demonstrated?
394 |    - What moment in the demo is the "wow" — the clearest proof of value?
395 |    - How long does each section take? (Total: ~2 minutes)
396 | 3. Write the pitch structure:
397 |    - Hook (10 seconds): why this problem matters
398 |    - Problem (20 seconds): specific, concrete, relatable
399 |    - Solution (30 seconds): what the product does
400 |    - Demo (60 seconds): live walkthrough
401 |    - Impact / Why IBM (20 seconds): why this matters and how IBM tools make it possible
402 | 4. Write 5 likely judge questions and strong answers for each.
403 | 5. Identify the top 3 things that could go wrong during the demo and how to handle them.
404 | 
405 | --- RULES ---
406 | - The demo must work even if the live build partially fails (have a backup plan)
407 | - Every word in the pitch earns its place — no filler
408 | - The IBM tool usage must be clearly visible and central, not an afterthought
409 | - Distinguish confirmed demo content from assumptions
410 | 
411 | --- EXPECTED OUTPUT FORMAT ---
412 | 1. Demo Flow — step-by-step sequence with timing
413 | 2. Pitch Script — full script with section labels and timing
414 | 3. Judge Q&A Prep — 5 questions with strong answers
415 | 4. Demo Risk Plan — top 3 failure scenarios and contingencies
416 | 5. Open Questions — anything that needs to be confirmed before finalizing
417 | 
418 | --- PASTE-READY COMMAND CENTER UPDATE ---
419 | At the end of your response, include a section titled exactly:
420 | "## COMMAND CENTER UPDATE"
421 | Formatted as:
422 | - Demo Story: [one paragraph summary of the demo flow]
423 | - Pitch Angle: [one sentence]
424 | - Judge Q&A: [list questions only, answers go in 07 Judge Q&A.md]
425 | - New Risks: [demo/pitch risks flagged]
426 | - Recommended Next Step: [one concrete action]
427 | ```
428 | 
429 | ### Session Outputs
430 | *(Paste Demo/Pitch Coach's response here after the session)*
431 | 
432 | ---
433 | 
434 | ## Usage Instructions
435 | 
436 | 1. **Before using any prompt:** Pull the latest context from `09 Context Packets.md` and update the `--- CURRENT PROJECT CONTEXT ---` block with any new decisions.
437 | 2. **Sequence matters:** Run specialists roughly in this order — Researcher → Product Strategist → MVP Scope Cutter → Technical Architect → Demo/Pitch Coach. Later prompts depend on outputs from earlier ones.
438 | 3. **After each session:** Paste the specialist's output under the matching "Session Outputs" section, and copy the "COMMAND CENTER UPDATE" block back into `00 Command Center.md` and `09 Context Packets.md`.
439 | 4. **Keep this file append-only** — do not delete previous session outputs.
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:52:16.711Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.12

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<attempt_completion>
<result>
I've read all the markdown files in the vault. Here's the comprehensive project overview:

## **APIDrift - API Drift Detector & Sync Agent**

### Project Status: READY TO BUILD ✅
All planning is complete. The project pivoted from "Incident Detective" to "APIDrift" on 2026-05-01.

### Core Concept
APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart. It classifies severity, identifies business impact, generates patches, creates contract tests, and routes fixes to the right team.

**Tagline:** "Bob catches API drift before your users do."

### Demo Scenario (Locked)
- **Backend changed:** `total` → `totalCents`, `"paid"` → `"PAID"`
- **Frontend still expects:** `total` (dollars), `status === "paid"`
- **OpenAPI still says:** `total: number`, `status: "paid"`
- **Result:** Checkout shows **$NaN** and **"Unknown status"** (large, red)
- **Fix:** Bob updates frontend + OpenAPI to match backend

### Tech Stack
- **APIDrift UI:** Next.js 14 + Tailwind CSS (port 3002)
- **Demo checkout frontend:** Next.js (port 3000)
- **Demo API backend:** Express + TypeScript (port 3001)
- **Contract file:** OpenAPI YAML
- **Contract tests:** Jest + Supertest
- **IBM Bob:** Bob IDE (required) - 5 tasks with session exports

### 10 Demo Screens (Build Order)
1. Broken checkout ($NaN, Unknown) + Scan button
2. Contract sources (3 cards showing drift)
3. **Drift matrix with severity badges** ← PRIORITY COMPONENT
4. Bob evidence trail (7-point chain)
5. Severity + business impact panel (HIGH risk)
6. Fix strategy (2 options, Option B recommended)
7. Patch diff (frontend + OpenAPI)
8. Contract test
9. Ticket/owner routing (simulated)
10. Fixed checkout ($84.70, Paid) + PR summary

### 5 IBM Bob IDE Tasks
1. Analyze contract drift + severity classification
2. Generate patch (frontend + OpenAPI)
3. Generate contract test (Jest + Supertest)
4. Generate PR summary
5. Create Bob Skill (stretch goal)

### Critical Build Path
1. **Build broken checkout app FIRST** - $NaN must render before anything else
2. Build fixed checkout version
3. Create drift data JSON (hardcoded with severity + businessImpact + ticketRouting)
4. Build APIDrift UI (all 10 screens, static data)
5. Run Bob IDE Tasks 1-4; save as fallback files
6. Wire UI to Bob fallback outputs
7. Polish (Day 2)
8. Record demo video (2:45 target)

### Submission Requirements (Deadline: May 3, 2026, 10:00 AM ET)
- ☐ Video demo (max 3 min, ≥90s showing solution)
- ☐ Written problem + solution statement (≤500 words) - **paste-ready in vault/06**
- ☐ Written IBM Bob usage statement - **paste-ready in vault/06**
- ☐ GitHub repo (public) + `/bob_sessions` folder with screenshots + markdown per task
- ☐ Must use `ibm-coding-challenge-xxx` Bob account

### Key Files with Complete Content
- **vault/00 Command Center.md** - Master coordination, task tracking, decisions
- **vault/01 Project Brief.md** - Full product definition
- **vault/03 MVP Scope.md** - All 10 screens detailed, Bob task prompts
- **vault/04 Technical Architecture.md** - Complete setup commands, file structure, JSON schema
- **vault/06 Demo and Pitch.md** - Full demo script (timed), paste-ready statements
- **vault/07 Judge Q&A.md** - 5 Q&A pairs prepared

### Next Immediate Actions
1. Create `bob_sessions/` folder in repo root (BEFORE first Bob task)
2. Run setup commands from vault/04
3. Build broken checkout backend (totalCents, PAID)
4. Build broken checkout frontend (reads total → $NaN)
5. Verify $NaN renders large and red at localhost:3000/checkout

All planning documents are comprehensive and ready for execution. The project has clear scope, locked decisions, and paste-ready submission materials.
</result>
</attempt_completion>

---

**User:**

[attempt_completion] Result:
The user has provided feedback on the results. Consider their input to continue the task, and then attempt completion again.
<feedback>
bobsessions folder is created. Continue with setup commands
</feedback>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:53:51.889Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.23

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll start executing the setup commands from the Technical Architecture document. Let me begin by creating the directory structure.

<execute_command>
<command>mkdir -p apidrift/apps/web/src/{pages,api,components} apidrift/apps/api/src/{routes,schemas,tests} apidrift/contracts apidrift/drift-scanner apidrift/apidrift-ui/app/components</command>
</execute_command>

---

**User:**

[execute_command for 'mkdir -p apidrift/apps/web/src/{pages,api,components} apidrift/apps/api/src/{routes,schemas,tests} apidrift/contracts apidrift/drift-scanner apidrift/apidrift-ui/app/components'] Result:
The user denied this operation.


New instructions for task continuation:
<user_message>
My partner and I running BOB agents independently. We will be working in turns to complete the project
</user_message>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:55:03.924Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.34

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>


# Current Workspace Directory (/Users/mdang/Coding/Hackathons/IBMSpring2026/ibm-hackathon-w-Xiate) Files
AGENTS.md
CLAUDE.md
apidrift/
apidrift/apps/
apidrift/apps/api/
apidrift/apps/api/jest.config.js
apidrift/apps/api/package.json
apidrift/apps/api/tsconfig.json
apidrift/apps/api/src/
apidrift/apps/api/src/server.ts
apidrift/apps/api/src/routes/
apidrift/apps/api/src/routes/.gitkeep
apidrift/apps/api/src/routes/checkout.ts
apidrift/apps/api/src/tests/
apidrift/apps/api/src/tests/checkout.contract.test.ts
apidrift/apps/web/
apidrift/apps/web/src/
apidrift/apps/web/src/api/
apidrift/apps/web/src/api/.gitkeep
apidrift/apps/web/src/components/
apidrift/apps/web/src/components/.gitkeep
apidrift/apps/web/src/pages/
apidrift/apps/web/src/pages/.gitkeep
bob_sessions/
bob_sessions/b.txt
vault/
vault/00 Command Center.md.md
vault/01 Project Brief.md.md
vault/02 Research.md.md
vault/03 MVP Scope.md.md
vault/04 Technical Architecture.md.md
vault/05 Task Board.md.md
vault/06 Demo and Pitch.md.md
vault/07 Judge Q&A.md.md
vault/08 Bugs and QA.md.md
vault/09 Context Packets.md.md
vault/10 AI Specialist Outputs.md
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

Perfect! I can see the directory structure is already created and some files exist. Let me check what's been built so far and create a coordination summary for you and your partner.

<read_file>
<args>
<file>
<path>apidrift/apps/api/src/routes/checkout.ts</path>
</file>
<file>
<path>apidrift/apps/api/src/server.ts</path>
</file>
<file>
<path>apidrift/apps/api/package.json</path>
</file>
<file>
<path>apidrift/apps/api/jest.config.js</path>
</file>
<file>
<path>apidrift/apps/api/src/tests/checkout.contract.test.ts</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
The user denied this operation.
<files>
<file><path>apidrift/apps/api/src/routes/checkout.ts</path><status>Denied by user</status></file>
<file><path>apidrift/apps/api/src/server.ts</path><status>Denied by user</status></file>
<file><path>apidrift/apps/api/package.json</path><status>Denied by user</status></file>
<file><path>apidrift/apps/api/jest.config.js</path><status>Denied by user</status></file>
<file><path>apidrift/apps/api/src/tests/checkout.contract.test.ts</path><status>Denied by user</status></file>
</files>
<environment_details>
# VSCode Visible Files
vault/00 Command Center.md.md

# VSCode Open Tabs
vault/00 Command Center.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:58:44.084Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.45

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

