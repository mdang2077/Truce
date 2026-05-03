**User:**

<task>
You are tasked with analyzing all Markdown (.md) files located in the /vault/ directory and its subdirectories. After thoroughly reading and understanding the content, structure, and relationships between these files, provide comprehensive recommendations on how to properly initialize or set up the project. Your recommendations should include:

1. Identification of the project type, purpose, and scope based on the documentation
2. Required dependencies, tools, and environment setup
3. Configuration files that need to be created or modified
4. Directory structure recommendations if not already established
5. Initialization commands or scripts that should be executed
6. Environment variables or secrets that need to be configured
7. Database setup or data migration steps if applicable
8. Build processes or compilation steps required
9. Testing framework initialization if mentioned in the documentation
10. Development workflow recommendations based on the project's conventions
11. Any prerequisite steps or system requirements
12. Potential issues or conflicts to be aware of during initialization

Present your analysis in a clear, actionable format with step-by-step instructions that would allow someone to successfully initialize and begin working on the project from scratch.
</task>
<environment_details>
# VSCode Visible Files
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:40:15.167Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>


# Current Workspace Directory (c:/Users/xiate/Documents/CS/ibm-hackathon-w-Xiate) Files
CLAUDE.md
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

I'll analyze all the Markdown files in the /vault/ directory to understand the project and provide comprehensive initialization recommendations. Let me start by reading through these files systematically.

<read_file>
<args>
  <file>
    <path>vault/00 Command Center.md.md</path>
  </file>
  <file>
    <path>vault/01 Project Brief.md.md</path>
  </file>
  <file>
    <path>vault/02 Research.md.md</path>
  </file>
  <file>
    <path>vault/03 MVP Scope.md.md</path>
  </file>
  <file>
    <path>vault/04 Technical Architecture.md.md</path>
  </file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>vault/00 Command Center.md.md</path>
<content lines="1-191">
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
 14 | Tech Stack: Next.js + Tailwind (APIDrift UI + demo frontend), Express (demo API), OpenAPI YAML, Jest + Supertest, TypeScript
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
 54 | 5. **Build broken checkout app** — $NaN must render before anything else
 55 | 6. **Build APIDrift UI (all 10 screens, static data)** — full story visible
 56 | 7. **Run Bob IDE Tasks 1–4** — generate real artifacts, save fallbacks
 57 | 
 58 | ---
 59 | 
 60 | ## Active Tasks
 61 | 
 62 | | Task | Owner | Status | Notes |
 63 | |---|---|---|---|
 64 | | Confirm IBM Bob requirements | Havyn | ✅ DONE | Bob IDE required; ibm-coding-challenge-xxx |
 65 | | Lock project idea | Havyn | ✅ DONE | APIDrift |
 66 | | Fill 01 Project Brief | Command Center | ✅ DONE | APIDrift brief |
 67 | | Fill 03 MVP Scope | Command Center | ✅ DONE | 10 screens + 5 tasks |
 68 | | Fill 04 Technical Architecture | Command Center | ✅ DONE | Stack + components + Bob prompts |
 69 | | Fill 06 Demo and Pitch | Command Center | ✅ DONE | Full script + statements |
 70 | | Fill 07 Judge Q&A | Command Center | ✅ DONE | 5 Q&A pairs |
 71 | | Create `bob_sessions/` folder in repo | Havyn | ⬜ TODO | Before first Bob task |
 72 | | Build broken checkout backend (totalCents, PAID) | Havyn | ⬜ TODO | Express; port 3001 |
 73 | | Build broken checkout frontend (reads total → $NaN) | Havyn | ⬜ TODO | Next.js; port 3000 |
 74 | | Confirm $NaN renders correctly | Havyn | ⬜ TODO | Must look bad — large, red |
 75 | | Build fixed checkout version | Havyn | ⬜ TODO | Confirms patch before Bob generates it |
 76 | | Create drift data JSON (with severity + businessImpact) | Havyn | ⬜ TODO | See 04 Technical Architecture for schema |
 77 | | Build APIDrift UI — all 10 screens (static data) | Havyn | ⬜ TODO | DriftMatrix is priority |
 78 | | Run Bob Task 1: Analyze contract drift + severity | Havyn | ⬜ TODO | Save as bob-task-1-analysis.md |
 79 | | Run Bob Task 2: Generate patch | Havyn | ⬜ TODO | Save as bob-task-2-patch.md |
 80 | | Run Bob Task 3: Generate contract test | Havyn | ⬜ TODO | Save as checkout.contract.test.ts |
 81 | | Run Bob Task 4: Generate PR summary | Havyn | ⬜ TODO | Save as bob-task-4-pr-summary.md |
 82 | | Wire UI to Bob fallback outputs | Havyn | ⬜ TODO | Replace static strings with saved Bob content |
 83 | | Polish APIDrift UI (Day 2) | Havyn | ⬜ TODO | Severity badges, animations, Bob sidebar |
 84 | | Run Bob Task 5: Bob Skill (stretch) | Havyn | ⬜ TODO | Only after MVP complete |
 85 | | Wire Orchestrate ticket routing (stretch) | Havyn | ⬜ TODO | Only if time; simulate otherwise |
 86 | | Record video demo | Havyn | ⬜ TODO | Use script from 06; always use fallback files |
 87 | | Write problem + solution statement | Havyn | ⬜ TODO | Paste from 06 |
 88 | | Write IBM Bob usage statement | Havyn | ⬜ TODO | Paste from 06 |
 89 | | Export all Bob task session reports | Havyn | ⬜ TODO | Screenshots + markdown → bob_sessions/ |
 90 | | Submit on hackathon platform | Havyn | ⬜ TODO | Before 10:00 AM ET May 3 |
 91 | 
 92 | ---
 93 | 
 94 | ## Decisions Made
 95 | 
 96 | | Decision | Reason | Date |
 97 | |---|---|---|
 98 | | Pivoted to APIDrift | Sharper demo, stronger Bob showcase, more original | 2026-05-01 |
 99 | | Subtitle: "API Drift Detector & Sync Agent" | Enterprise framing; broader judge appeal | 2026-05-01 |
100 | | Demo scenario: checkout drift (totalCents + PAID) | Most visual, immediately understandable | 2026-05-01 |
101 | | Severity levels: Breaking / Medium / Cosmetic | Makes drift actionable; feels like a real engineering tool | 2026-05-01 |
102 | | Business impact panel (Screen 5) | Non-engineer judges understand immediately | 2026-05-01 |
103 | | Ticket routing (Screen 9, simulated) | Enterprise workflow demo; Orchestrate optional | 2026-05-01 |
104 | | Fix direction: frontend + docs match backend | totalCents is intentional, best practice | 2026-05-01 |
105 | | Build broken app first | $NaN must exist before UI story makes sense | 2026-05-01 |
106 | | Hardcode drift JSON with severity + businessImpact + ticketRouting | Unblocks all 10 screens without scanner | 2026-05-01 |
107 | | Save all Bob outputs as fallback files | Demo never depends on live Bob latency | 2026-05-01 |
108 | | OpenAPI only (no GraphQL/Protobuf in MVP) | Scope discipline; mention extension in pitch | 2026-05-01 |
109 | | No real-time alerts, no real Jira/Slack/GitHub PR | Out of scope; simulate where needed | 2026-05-01 |
110 | | One monorepo demo only | Multi-repo adds complexity without demo value | 2026-05-01 |
111 | | Bob IDE required; ibm-coding-challenge-xxx only | Per official guide | 2026-05-01 |
112 | 
113 | ---
114 | 
115 | ## Risks / Blockers
116 | 
117 | | Risk | Impact | Mitigation |
118 | |---|---|---|
119 | | $NaN not visually compelling | High — kills the hook | Make it large and red; test browser doesn't auto-convert |
120 | | Bob Task 1 vague on severity | Medium | Prompt explicitly asks Breaking/Medium/Cosmetic; retry if needed |
121 | | DriftMatrix polish takes too long | Medium | Build with basic Tailwind first; polish Day 2 |
122 | | SeverityImpact card looks generic | Medium | Use "checkout confirmation flow" specifically; red badge; bold text |
123 | | bob_sessions not captured | High — required deliverable | Create folder before first task; export after every session |
124 | | Accidentally using personal Bob account | Medium | Check ibm-coding-challenge-xxx in settings before every session |
125 | 
126 | ---
127 | 
128 | ## Bobcoin Budget
129 | 
130 | | Phase | Bobcoins |
131 | |---|---|
132 | | Task 1: Drift analysis + severity | ~2 |
133 | | Task 2: Patch generation | ~2 |
134 | | Task 3: Contract test | ~1 |
135 | | Task 4: PR summary | ~1 |
136 | | Task 5: Bob Skill (stretch) | ~2 |
137 | | Retries / buffer | ~10 |
138 | | **Total estimate** | **~8–18 / 40** |
139 | 
140 | ---
141 | 
142 | ## Day-by-Day Build Plan
143 | 
144 | ### Day 1 — Get the full ugly demo working
145 | 
146 | **Morning (3–4h):**
147 | - [ ] Build broken checkout (backend: totalCents/PAID; frontend: reads total → $NaN)
148 | - [ ] Confirm $NaN renders large and red
149 | - [ ] Build fixed checkout version
150 | - [ ] Create drift data JSON (see 04 Technical Architecture for schema)
151 | - [ ] Build APIDrift UI — all 10 screens, static/hardcoded
152 | 
153 | **End of Day 1 checkpoint:** Click through all 10 screens. Can be ugly. Must exist.
154 | 
155 | **Afternoon (3–4h):**
156 | - [ ] Run Bob Tasks 1–4 in Bob IDE; save all outputs as fallback files
157 | - [ ] Screenshot + export every Bob task session → bob_sessions/
158 | - [ ] Wire UI to saved Bob outputs (replace hardcoded strings)
159 | 
160 | ### Day 2 — Make it feel like a product
161 | 
162 | **Morning (2–3h):**
163 | - [ ] Polish DriftMatrix — severity badges, row colors
164 | - [ ] Polish SeverityImpact — bold red header, specific flow name
165 | - [ ] Add "Powered by IBM Bob" sidebar throughout
166 | - [ ] Add "Bob is analyzing..." animation on scan
167 | - [ ] Add before/after on fixed checkout
168 | 
169 | **Afternoon (2–3h):**
170 | - [ ] Run Bob Task 5 (Bob Skill) if time
171 | - [ ] Wire Orchestrate ticket routing if time
172 | - [ ] Record video demo (target 2:45; use script in 06)
173 | - [ ] Paste written statements
174 | - [ ] Export final Bob sessions; submit
175 | 
176 | ---
177 | 
178 | ## Coordination Map
179 | 
180 | | File | Domain | Status |
181 | |---|---|---|
182 | | 01 Project Brief | Idea + problem/solution | ✅ Done |
183 | | 02 Research | Market context | ⬜ TODO |
184 | | 03 MVP Scope | 10 screens + 5 Bob tasks | ✅ Done |
185 | | 04 Technical Architecture | Stack + repo + JSON schema + Bob prompts | ✅ Done |
186 | | 05 Task Board | Execution tracking | ⬜ TODO |
187 | | 06 Demo and Pitch | Script + statements (paste-ready) | ✅ Done |
188 | | 07 Judge Q&A | 5 Q&A pairs | ✅ Done |
189 | | 08 Bugs and QA | Issues + fixes | ⬜ TODO |
190 | | 09 Context Packets | Source of truth | ✅ Active |
191 | | 10 AI Specialist Outputs | Session outputs (Incident Detective history preserved) | ✅ Active |
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
<content lines="1-316">
  1 | # Technical Architecture — APIDrift
  2 | 
  3 | **Created:** 2026-05-01
  4 | **Updated:** 2026-05-01 — Severity + business impact + ticket routing added
  5 | **Status:** Confirmed ✅
  6 | 
  7 | ---
  8 | 
  9 | ## Architecture Overview
 10 | 
 11 | APIDrift is a Next.js application that demonstrates contract drift detection using IBM Bob IDE. It includes a real broken checkout app (Next.js + Express) and the APIDrift product UI (10 screens). Bob IDE is the required core tool — 5 tasks with session exports.
 12 | 
 13 | ```
 14 | apidrift/
 15 | ├── apps/
 16 | │   ├── web/                          ← Broken checkout frontend (Next.js, port 3000)
 17 | │   │   └── src/
 18 | │   │       ├── pages/checkout.tsx
 19 | │   │       ├── api/checkoutClient.ts ← reads order.total → $NaN
 20 | │   │       └── components/CheckoutSummary.tsx
 21 | │   └── api/                          ← Drifted backend (Express, port 3001)
 22 | │       └── src/
 23 | │           ├── routes/checkout.ts    ← returns totalCents, "PAID"
 24 | │           ├── schemas/checkoutSchema.ts
 25 | │           └── tests/checkout.contract.test.ts
 26 | ├── contracts/
 27 | │   └── openapi.yaml                  ← Stale (still says total, lowercase enums)
 28 | ├── drift-scanner/
 29 | │   ├── bob-task-1-analysis.md        ← Saved Bob Task 1 output
 30 | │   ├── bob-task-2-patch.md           ← Saved Bob Task 2 output
 31 | │   ├── bob-task-4-pr-summary.md      ← Saved Bob Task 4 output
 32 | │   └── sample-drift-output.json     ← Hardcoded drift data (unblocks UI)
 33 | ├── apidrift-ui/                      ← APIDrift product (Next.js, port 3002)
 34 | │   └── app/
 35 | │       ├── page.tsx                  ← Orchestrates all 10 screens
 36 | │       └── components/
 37 | │           ├── BrokenCheckout.tsx        ← Screen 1
 38 | │           ├── ContractSources.tsx       ← Screen 2
 39 | │           ├── DriftMatrix.tsx           ← Screen 3 (priority)
 40 | │           ├── BobEvidenceTrail.tsx      ← Screen 4
 41 | │           ├── SeverityImpact.tsx        ← Screen 5 (new)
 42 | │           ├── FixStrategy.tsx           ← Screen 6
 43 | │           ├── PatchPanel.tsx            ← Screen 7
 44 | │           ├── ContractTestPanel.tsx     ← Screen 8
 45 | │           ├── TicketRouting.tsx         ← Screen 9 (new)
 46 | │           ├── FixedCheckout.tsx         ← Screen 10a
 47 | │           ├── PRSummary.tsx             ← Screen 10b
 48 | │           └── BobSidebar.tsx            ← Persistent sidebar
 49 | └── bob_sessions/                     ← Required for submission
 50 |     ├── task-1-screenshot.png
 51 |     ├── task-1-history.md
 52 |     └── ...
 53 | ```
 54 | 
 55 | ---
 56 | 
 57 | ## Tech Stack
 58 | 
 59 | | Layer | Technology | Rationale |
 60 | |---|---|---|
 61 | | APIDrift UI | Next.js 14 + Tailwind CSS | Fast setup; Havyn knows React/TS |
 62 | | Demo checkout frontend | Next.js (same monorepo) | Reuse stack |
 63 | | Demo API backend | Express + Node.js | Fast to seed drift |
 64 | | API contract | OpenAPI YAML | Standard; easy to show drift |
 65 | | Contract tests | Jest + Supertest | Standard Node.js testing |
 66 | | Drift data | Hardcoded JSON | Unblocks UI; don't over-engineer scanner |
 67 | | Bob outputs | Saved Markdown/JSON fallback files | Demo never depends on live Bob latency |
 68 | | Code display | `react-syntax-highlighter` | Patch diff + contract test |
 69 | | IBM Bob | Bob IDE (required) — 5 tasks | Task sessions exported for judging |
 70 | 
 71 | ---
 72 | 
 73 | ## The Broken Checkout App
 74 | 
 75 | ### Backend — drifted response (port 3001)
 76 | 
 77 | ```typescript
 78 | // apps/api/src/routes/checkout.ts
 79 | router.post('/checkout', (req, res) => {
 80 |   // DRIFTED: changed from { total: 84.70, status: "paid" }
 81 |   res.json({
 82 |     orderId: "ORD-1042",
 83 |     totalCents: 8470,   // was: total: 84.70
 84 |     status: "PAID"      // was: status: "paid"
 85 |   });
 86 | });
 87 | ```
 88 | 
 89 | ### Frontend — still expects old contract (port 3000)
 90 | 
 91 | ```typescript
 92 | // apps/web/src/api/checkoutClient.ts
 93 | export interface CheckoutResponse {
 94 |   orderId: string;
 95 |   total: number;      // ← expects total (doesn't exist anymore)
 96 |   status: string;     // ← expects "paid" (backend returns "PAID")
 97 | }
 98 | ```
 99 | 
100 | ```typescript
101 | // apps/web/src/components/CheckoutSummary.tsx
102 | export function formatCheckout(order: CheckoutResponse) {
103 |   return {
104 |     id: order.orderId,
105 |     total: `$${order.total.toFixed(2)}`,               // ← $NaN
106 |     statusLabel: order.status === "paid" ? "Paid" : "Unknown"  // ← "Unknown"
107 |   };
108 | }
109 | ```
110 | 
111 | ### OpenAPI — stale contract
112 | 
113 | ```yaml
114 | # contracts/openapi.yaml
115 | /checkout:
116 |   post:
117 |     responses:
118 |       200:
119 |         content:
120 |           application/json:
121 |             schema:
122 |               properties:
123 |                 orderId:
124 |                   type: string
125 |                 total:           # stale: should be totalCents
126 |                   type: number
127 |                 status:
128 |                   type: string
129 |                   enum: ["pending", "paid", "failed"]  # stale: uppercase
130 | ```
131 | 
132 | ---
133 | 
134 | ## Drift Data JSON (Hardcoded — Build This First)
135 | 
136 | This unblocks all 10 UI screens before Bob runs.
137 | 
138 | ```json
139 | {
140 |   "driftFound": true,
141 |   "scannedAt": "2026-05-01T00:00:00Z",
142 |   "severity": "high",
143 |   "businessImpact": "Checkout confirmation displays incorrect payment totals and unknown payment status. This affects a revenue-critical user flow and may cause transaction abandonment.",
144 |   "affectedFlow": "Checkout confirmation (checkout.tsx → /checkout route)",
145 |   "fields": [
146 |     {
147 |       "field": "Total amount",
148 |       "frontend": "total (number, dollars)",
149 |       "backend": "totalCents (integer, cents)",
150 |       "openapi": "total (number)",
151 |       "diagnosis": "field drift",
152 |       "severity": "Breaking",
153 |       "userImpact": "Checkout UI shows $NaN"
154 |     },
155 |     {
156 |       "field": "Currency unit",
157 |       "frontend": "dollars",
158 |       "backend": "cents",
159 |       "openapi": "dollars",
160 |       "diagnosis": "semantic drift",
161 |       "severity": "Breaking",
162 |       "userImpact": "Price display incorrect even if field name matched"
163 |     },
164 |     {
165 |       "field": "Status enum",
166 |       "frontend": "lowercase (\"paid\")",
167 |       "backend": "uppercase (\"PAID\")",
168 |       "openapi": "lowercase (\"paid\")",
169 |       "diagnosis": "enum drift",
170 |       "severity": "Breaking",
171 |       "userImpact": "Payment status always shows \"Unknown\""
172 |     }
173 |   ],
174 |   "evidenceTrail": [
175 |     "Found frontend reads checkout.total in checkoutClient.ts",
176 |     "Found backend route now returns totalCents instead of total",
177 |     "Found OpenAPI spec still documents total as a decimal number",
178 |     "Found frontend expects status === \"paid\"",
179 |     "Found backend returns status === \"PAID\"",
180 |     "Determined backend change is intentional — integer cents safer for currency precision",
181 |     "Recommended syncing frontend and OpenAPI to backend contract"
182 |   ],
183 |   "recommendedFix": "Update frontend and OpenAPI spec to match backend (totalCents + uppercase enums)",
184 |   "canonicalLayer": "backend",
185 |   "reasoning": "Backend change appears intentional — integer cents is best practice for currency",
186 |   "ticketRouting": {
187 |     "priority": "High",
188 |     "assignedTo": "API Platform Team",
189 |     "notified": ["Frontend Owner", "Backend Owner"],
190 |     "attachments": ["Bob drift report", "Patch diff"],
191 |     "dueDate": "Before next deploy"
192 |   }
193 | }
194 | ```
195 | 
196 | ---
197 | 
198 | ## Component Build Notes
199 | 
200 | ### DriftMatrix.tsx (Screen 3 — highest priority)
201 | - Table: Field | Frontend | Backend | OpenAPI | Severity
202 | - Severity badge: 🔴 Breaking (red), 🟡 Medium (yellow), ⚪ Cosmetic (grey)
203 | - Whole row tinted by severity
204 | - Data from `fields` array in drift JSON
205 | - This is the "screenshot moment" — make it beautiful
206 | 
207 | ### SeverityImpact.tsx (Screen 5 — new)
208 | - Large severity badge at top (🔴 HIGH)
209 | - Business impact paragraph from `businessImpact` field
210 | - "Affected flow" and "Risk level" metadata
211 | - Keep it clean — one card, bold text, red accent
212 | 
213 | ### TicketRouting.tsx (Screen 9 — new)
214 | - Simulated ticket card
215 | - Checkmark list: "✓ Created high-priority task", "✓ Assigned to: API Platform Team", etc.
216 | - From `ticketRouting` object in drift JSON
217 | - Optional: wire real Orchestrate agent if time allows
218 | 
219 | ### BobSidebar.tsx (persistent throughout)
220 | ```
221 | Powered by IBM Bob
222 | 
223 | Bob was used for:
224 | ✓ Repo context analysis (Task 1)
225 | ✓ Severity classification (Task 1)
226 | ✓ Drift diagnosis (Task 1)
227 | ✓ Patch generation (Task 2)
228 | ✓ Contract test generation (Task 3)
229 | ✓ OpenAPI documentation update (Task 2)
230 | ✓ PR summary (Task 4)
231 | ```
232 | 
233 | ---
234 | 
235 | ## IBM Bob IDE Tasks — Full Prompts
236 | 
237 | ### Task 1: Analyze Contract Drift (updated — includes severity)
238 | ```
239 | Analyze this repo for API contract drift in the checkout flow.
240 | 
241 | Compare:
242 | - @apps/web/src/api/checkoutClient.ts
243 | - @apps/web/src/components/CheckoutSummary.tsx
244 | - @apps/api/src/routes/checkout.ts
245 | - @contracts/openapi.yaml
246 | 
247 | Return:
248 | 1. mismatched fields with exact names and locations
249 | 2. severity of each mismatch: Breaking (causes runtime failure),
250 |    Medium (causes stale behavior), Cosmetic (docs only)
251 | 3. business impact — what does the user see?
252 | 4. which layer is the canonical source of truth and why
253 | 5. recommended fix strategy with engineering rationale
254 | 6. confidence level with evidence
255 | ```
256 | 
257 | ### Task 2: Generate Patch
258 | ```
259 | Patch the checkout flow so frontend and OpenAPI match the backend.
260 | Use totalCents as canonical (integer cents = best practice for currency).
261 | Update: checkoutClient.ts, CheckoutSummary.tsx, openapi.yaml.
262 | Show before/after diff for each file. Explain each change.
263 | ```
264 | 
265 | ### Task 3: Generate Contract Test
266 | ```
267 | Create a Jest + Supertest regression contract test for
268 | apps/api/src/routes/checkout.ts.
269 | Assert: totalCents exists (Number), total does NOT exist,
270 | status is "PAID". Under 30 lines.
271 | ```
272 | 
273 | ### Task 4: Generate PR Summary
274 | ```
275 | Generate a PR description for this API contract drift fix.
276 | Include: drift found, user impact, files changed, tests added,
277 | why totalCents is canonical, rollback risk.
278 | ```
279 | 
280 | ### Task 5: Bob Skill (stretch)
281 | ```
282 | Create a reusable Bob skill called api-contract-drift-review.
283 | Guides Bob to compare frontend, backend, API docs, types, and tests.
284 | Output: drift matrix with severity, fix recommendation, patch plan, test plan.
285 | Save as .bob/commands/api-contract-drift-review.md
286 | ```
287 | 
288 | ---
289 | 
290 | ## Local Dev Setup
291 | 
292 | ```bash
293 | # Run demo checkout app
294 | cd apps/api && node server.js          # port 3001 — drifted backend
295 | cd apps/web && npm run dev             # port 3000 — broken frontend
296 | # Visit localhost:3000/checkout → see $NaN and "Unknown"
297 | 
298 | # Run APIDrift product UI
299 | cd apidrift-ui && npm run dev          # port 3002
300 | # Visit localhost:3002 → APIDrift 10-screen demo
301 | ```
302 | 
303 | **For video recording:** Screen-record localhost:3002. Open with a quick cut to localhost:3000 to show the real broken app before switching to APIDrift.
304 | 
305 | ---
306 | 
307 | ## High-Risk Points
308 | 
309 | | Risk | Mitigation |
310 | |---|---|
311 | | $NaN not rendering | Make it large, red, bold — this is the hook |
312 | | Bob Task 1 doesn't classify severity clearly | Prompt explicitly asks for Breaking/Medium/Cosmetic; retry if vague |
313 | | SeverityImpact card looks generic | Use bold red header + specific flow name ("checkout confirmation") |
314 | | TicketRouting looks fake | Use real Orchestrate if time allows; otherwise make the simulated card clean |
315 | | DriftMatrix polish takes too long | Build with inline Tailwind first; refine colors Day 2 |
316 | | bob_sessions not captured | Create folder Day 1; export after every task |
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:40:24.744Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.03

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll continue reading the remaining files to get the complete picture.

<read_file>
<args>
  <file>
    <path>vault/05 Task Board.md.md</path>
  </file>
  <file>
    <path>vault/06 Demo and Pitch.md.md</path>
  </file>
  <file>
    <path>vault/07 Judge Q&A.md.md</path>
  </file>
  <file>
    <path>vault/08 Bugs and QA.md.md</path>
  </file>
  <file>
    <path>vault/09 Context Packets.md.md</path>
  </file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
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
</files>
<environment_details>
# VSCode Visible Files
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:40:35.944Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.10

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<read_file>
<args>
  <file>
    <path>vault/10 AI Specialist Outputs.md</path>
  </file>
</args>
</read_file>

---

**User:**

[read_file for 'vault/10 AI Specialist Outputs.md'. Reading multiple files at once is more efficient for the LLM. If other files are relevant to your current task, please read them simultaneously.] Result:
<files>
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
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:40:41.775Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.19

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

Now I have a complete understanding of the APIDrift project. Let me create a comprehensive initialization plan based on all the documentation.

<update_todo_list>
<todos>
[ ] Review and understand project documentation structure
[ ] Set up project repository structure
[ ] Initialize development environment and dependencies
[ ] Create broken checkout demo application
[ ] Create APIDrift UI application
[ ] Set up IBM Bob IDE integration
[ ] Create drift data JSON schema
[ ] Implement all 10 demo screens
[ ] Run IBM Bob tasks and save outputs
[ ] Polish and finalize for demo
[ ] Prepare submission materials
</todos>
</update_todo_list>

---

**User:**

[update_todo_list] Result:
Todo list updated successfully.
<environment_details>
# VSCode Visible Files
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:40:48.644Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.31

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>
====

REMINDERS

Below is your current list of reminders for this task. Keep them updated as you progress.

| # | Content | Status |
|---|---------|--------|
| 1 | Review and understand project documentation structure | Pending |
| 2 | Set up project repository structure | Pending |
| 3 | Initialize development environment and dependencies | Pending |
| 4 | Create broken checkout demo application | Pending |
| 5 | Create APIDrift UI application | Pending |
| 6 | Set up IBM Bob IDE integration | Pending |
| 7 | Create drift data JSON schema | Pending |
| 8 | Implement all 10 demo screens | Pending |
| 9 | Run IBM Bob tasks and save outputs | Pending |
| 10 | Polish and finalize for demo | Pending |
| 11 | Prepare submission materials | Pending |


IMPORTANT: When task status changes, remember to call the `update_todo_list` tool to update your progress.

</environment_details>

---

**Assistant:**

# APIDrift Project Initialization Guide

Based on my comprehensive analysis of all documentation in the `/vault/` directory, here is your complete project initialization and setup guide.

## 📋 Project Overview

**Project Name:** APIDrift  
**Subtitle:** API Drift Detector & Sync Agent  
**Tagline:** "Bob catches API drift before your users do."  
**Status:** All planning complete — READY TO BUILD (as of 2026-05-01)  
**Deadline:** May 3, 2026, 10:00 AM ET  
**Hackathon:** IBM Bob Dev Day 2026

### Core Concept
APIDrift detects when frontend code, backend routes, and API specifications silently drift apart. It uses IBM Bob to classify severity, identify business impact, generate patches, create contract tests, and route fixes to the right team.

---

## 🎯 1. Project Type, Purpose & Scope

### Project Type
- **Category:** Developer productivity tool / API contract management
- **Architecture:** Monorepo with multiple Next.js applications
- **Demo Type:** Full-stack application with broken/fixed states

### Purpose
Solve **contract drift** — when backend APIs change but frontend code and documentation don't update, causing silent production failures (e.g., checkout showing `$NaN`).

### Scope
- **10 demo screens** showing the complete drift detection → fix workflow
- **5 IBM Bob IDE tasks** for analysis, patching, testing, and documentation
- **Broken checkout app** demonstrating real drift impact
- **Fixed checkout app** showing the solution
- **APIDrift UI** displaying the full detection and remediation workflow

---

## 🏗️ 2. Required Dependencies & Tools

### Core Technologies

```json
{
  "frontend": {
    "framework": "Next.js 14",
    "styling": "Tailwind CSS",
    "language": "TypeScript",
    "ports": {
      "broken_checkout": 3000,
      "api_backend": 3001,
      "apidrift_ui": 3002
    }
  },
  "backend": {
    "framework": "Express.js",
    "language": "Node.js + TypeScript"
  },
  "testing": {
    "framework": "Jest",
    "api_testing": "Supertest"
  },
  "documentation": {
    "format": "OpenAPI YAML"
  },
  "code_display": {
    "library": "react-syntax-highlighter"
  }
}
```

### IBM Tools (Required)
- **IBM Bob IDE** (primary tool - must be visible in demo)
- **Account:** `ibm-coding-challenge-xxx` (hackathon-provisioned)
- **Budget:** ~8-18 Bobcoins estimated for 5 tasks

### Optional IBM Tools
- **watsonx Orchestrate** (for ticket routing - stretch goal)
- **watsonx.ai** (for severity classification - optional)

---

## 📁 3. Directory Structure & Configuration Files

### Recommended Repository Structure

```
apidrift/
├── apps/
│   ├── web/                          # Broken checkout frontend (Next.js, port 3000)
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── pages/
│   │       │   └── checkout.tsx
│   │       ├── api/
│   │       │   └── checkoutClient.ts  # Expects old contract
│   │       └── components/
│   │           └── CheckoutSummary.tsx
│   │
│   └── api/                          # Drifted backend (Express, port 3001)
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── server.ts
│           ├── routes/
│           │   └── checkout.ts        # Returns new contract
│           ├── schemas/
│           │   └── checkoutSchema.ts
│           └── tests/
│               └── checkout.contract.test.ts
│
├── contracts/
│   └── openapi.yaml                  # Stale contract documentation
│
├── drift-scanner/
│   ├── bob-task-1-analysis.md        # Bob Task 1 output (fallback)
│   ├── bob-task-2-patch.md           # Bob Task 2 output (fallback)
│   ├── bob-task-4-pr-summary.md      # Bob Task 4 output (fallback)
│   └── sample-drift-output.json      # Hardcoded drift data
│
├── apidrift-ui/                      # APIDrift product UI (Next.js, port 3002)
│   ├── package.json
│   ├── next.config.js
│   ├── tsconfig.json
│   └── app/
│       ├── page.tsx                  # Main orchestrator
│       └── components/
│           ├── BrokenCheckout.tsx        # Screen 1
│           ├── ContractSources.tsx       # Screen 2
│           ├── DriftMatrix.tsx           # Screen 3 (PRIORITY)
│           ├── BobEvidenceTrail.tsx      # Screen 4
│           ├── SeverityImpact.tsx        # Screen 5
│           ├── FixStrategy.tsx           # Screen 6
│           ├── PatchPanel.tsx            # Screen 7
│           ├── ContractTestPanel.tsx     # Screen 8
│           ├── TicketRouting.tsx         # Screen 9
│           ├── FixedCheckout.tsx         # Screen 10a
│           ├── PRSummary.tsx             # Screen 10b
│           └── BobSidebar.tsx            # Persistent sidebar
│
├── bob_sessions/                     # REQUIRED for submission
│   ├── task-1-screenshot.png
│   ├── task-1-history.md
│   ├── task-2-screenshot.png
│   ├── task-2-history.md
│   └── ...
│
├── vault/                            # Planning documentation (current)
│   ├── 00 Command Center.md.md
│   ├── 01 Project Brief.md.md
│   ├── 03 MVP Scope.md.md
│   ├── 04 Technical Architecture.md.md
│   ├── 06 Demo and Pitch.md.md
│   └── ...
│
├── package.json                      # Root package.json (monorepo)
├── .gitignore
└── README.md
```

### Key Configuration Files to Create

#### 1. Root `package.json` (Monorepo)
```json
{
  "name": "apidrift",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "apidrift-ui"
  ],
  "scripts": {
    "dev:checkout": "cd apps/web && npm run dev",
    "dev:api": "cd apps/api && npm run dev",
    "dev:ui": "cd apidrift-ui && npm run dev",
    "dev:all": "concurrently \"npm run dev:api\" \"npm run dev:checkout\" \"npm run dev:ui\"",
    "test": "cd apps/api && npm test"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

#### 2. `.gitignore`
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

#### 3. `drift-scanner/sample-drift-output.json` (Critical - unblocks all UI)
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

## 🚀 4. Initialization Commands & Scripts

### Step-by-Step Setup

```bash
# 1. Create project root directory
mkdir apidrift
cd apidrift

# 2. Initialize root package.json
npm init -y

# 3. Create directory structure
mkdir -p apps/web/src/{pages,api,components}
mkdir -p apps/api/src/{routes,schemas,tests}
mkdir -p contracts
mkdir -p drift-scanner
mkdir -p apidrift-ui/app/components
mkdir -p bob_sessions

# 4. Initialize Next.js apps
cd apps/web
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
cd ../..

cd apidrift-ui
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
cd ..

# 5. Initialize Express API
cd apps/api
npm init -y
npm install express cors
npm install -D typescript @types/node @types/express ts-node nodemon jest supertest @types/jest @types/supertest
npx tsc --init
cd ../..

# 6. Install shared dependencies
npm install -D concurrently

# 7. Install UI-specific dependencies
cd apidrift-ui
npm install react-syntax-highlighter
npm install -D @types/react-syntax-highlighter
cd ..
```

---

## 🔧 5. Environment Variables & Secrets

### Required Environment Variables

Create `.env.local` files in each app directory:

#### `apps/web/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### `apps/api/.env`
```env
PORT=3001
NODE_ENV=development
```

#### `apidrift-ui/.env.local`
```env
NEXT_PUBLIC_DRIFT_DATA_PATH=/drift-scanner/sample-drift-output.json
```

### IBM Bob Configuration
- **Account:** Use `ibm-coding-challenge-xxx` account only
- **Access:** Verify Bob IDE is installed and authenticated before starting tasks
- **Budget Tracking:** Monitor Bobcoin usage (target: 8-18 coins for 5 tasks)

---

## 💾 6. Database Setup (N/A)

**No database required.** This project uses:
- Static JSON files for drift data
- In-memory data for demo apps
- File-based storage for Bob outputs

---

## 🏗️ 7. Build Processes & Compilation

### Development Workflow

```bash
# Terminal 1: Run backend API
cd apps/api
npm run dev  # or: node src/server.js

# Terminal 2: Run broken checkout frontend
cd apps/web
npm run dev  # port 3000

# Terminal 3: Run APIDrift UI
cd apidrift-ui
npm run dev  # port 3002

# Or run all at once (from root):
npm run dev:all
```

### Build Commands

```bash
# Build for production (if needed)
cd apps/web && npm run build
cd apps/api && npm run build
cd apidrift-ui && npm run build
```

---

## 🧪 8. Testing Framework Initialization

### Jest Configuration

Create `apps/api/jest.config.js`:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
};
```

### Run Tests
```bash
cd apps/api
npm test
```

### Contract Test (Generated by Bob Task 3)
Location: [`apps/api/src/tests/checkout.contract.test.ts`](apps/api/src/tests/checkout.contract.test.ts)

---

## 🔄 9. Development Workflow Recommendations

### Critical Path (Day 1 - Morning)

1. **Build broken checkout app** (3-4 hours)
   - Backend returns `totalCents` and `"PAID"`
   - Frontend expects `total` and `"paid"`
   - Confirm `$NaN` renders large and red

2. **Build fixed checkout version** (1 hour)
   - Validates patch before Bob generates it

3. **Create drift data JSON** (30 min)
   - Use schema from [`vault/04 Technical Architecture.md.md`](vault/04 Technical Architecture.md.md:138-194)

4. **Build APIDrift UI - all 10 screens** (3-4 hours)
   - Static data from JSON
   - Priority: [`DriftMatrix.tsx`](apidrift-ui/app/components/DriftMatrix.tsx) (Screen 3)

### Critical Path (Day 1 - Afternoon)

5. **Run Bob IDE Tasks 1-4** (3-4 hours)
   - Task 1: Analyze drift + severity
   - Task 2: Generate patch
   - Task 3: Generate contract test
   - Task 4: Generate PR summary
   - **CRITICAL:** Screenshot + export markdown after EACH task → [`bob_sessions/`](bob_sessions/)

6. **Wire UI to Bob outputs** (1 hour)
   - Replace hardcoded strings with saved Bob content

### Day 2 - Polish & Submit

7. **Polish UI** (2-3 hours)
   - Severity badges, colors, animations
   - "Powered by IBM Bob" sidebar

8. **Record demo video** (1 hour)
   - Use script from [`vault/06 Demo and Pitch.md.md`](vault/06 Demo and Pitch.md.md:9-155)
   - Target: 2:45 minutes
   - **Always use fallback files, never live Bob**

9. **Submit** (1 hour)
   - Export all Bob sessions
   - Push public repo
   - Submit before 10:00 AM ET May 3

---

## ⚙️ 10. Prerequisite Steps & System Requirements

### System Requirements
- **Node.js:** v18+ recommended
- **npm:** v9+ or yarn
- **Git:** For version control
- **IBM Bob IDE:** Must be installed and authenticated
- **Browser:** Chrome/Firefox for testing `$NaN` rendering

### Prerequisites Checklist

- [ ] IBM Bob IDE installed and authenticated with `ibm-coding-challenge-xxx` account
- [ ] Node.js and npm installed
- [ ] Git repository initialized
- [ ] Create `bob_sessions/` folder **before first Bob task**
- [ ] Verify Bob IDE → Views and More Actions → History works for exports
- [ ] Test that `$NaN` renders visibly (large, red) in target browser

---

## 🎬 11. IBM Bob IDE Tasks (Core Workflow)

### Task 1: Analyze Contract Drift
**Prompt:**
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
**Save as:** [`drift-scanner/bob-task-1-analysis.md`](drift-scanner/bob-task-1-analysis.md)

### Task 2: Generate Patch
**Prompt:**
```
Patch the checkout flow so frontend and OpenAPI match the backend.
Use totalCents as canonical (integer cents = best practice for currency).
Update: checkoutClient.ts, CheckoutSummary.tsx, openapi.yaml.
Show before/after diff for each file. Explain each change.
```
**Save as:** [`drift-scanner/bob-task-2-patch.md`](drift-scanner/bob-task-2-patch.md)

### Task 3: Generate Contract Test
**Prompt:**
```
Create a Jest + Supertest regression contract test for
apps/api/src/routes/checkout.ts.
Assert: totalCents exists (Number), total does NOT exist,
status is "PAID". Under 30 lines.
```
**Save as:** [`apps/api/src/tests/checkout.contract.test.ts`](apps/api/src/tests/checkout.contract.test.ts)

### Task 4: Generate PR Summary
**Prompt:**
```
Generate a PR description for this API contract drift fix.
Include: drift found, user impact, files changed, tests added,
why totalCents is canonical, rollback risk.
```
**Save as:** [`drift-scanner/bob-task-4-pr-summary.md`](drift-scanner/bob-task-4-pr-summary.md)

### Task 5: Bob Skill (Stretch Goal)
**Prompt:**
```
Create a reusable Bob skill called api-contract-drift-review.
Guides Bob to compare frontend, backend, API docs, types, and tests.
Output: drift matrix with severity, fix recommendation, patch plan, test plan.
Save as .bob/commands/api-contract-drift-review.md
```

---

## ⚠️ 12. Potential Issues & Conflicts

### High-Risk Issues

| Issue | Impact | Mitigation |
|-------|--------|------------|
| **`$NaN` not rendering visibly** | High - kills the demo hook | Make it large (text-4xl), red (text-red-600), bold. Test in exact demo browser. Force string if needed: `"$NaN"` |
| **Bob Task 1 vague on severity** | Medium | Explicitly ask for "Breaking/Medium/Cosmetic" in prompt. Retry if vague |
| **`bob_sessions/` not captured** | High - required deliverable | Create folder Day 1. Export after EVERY task |
| **Using personal Bob account** | Medium - disqualification risk | Verify `ibm-coding-challenge-xxx` in settings before every session |
| **DriftMatrix polish takes too long** | Medium | Build with basic Tailwind first. Polish Day 2 only |
| **Live Bob latency during demo** | High | **Always use saved fallback files for demo recording** |

### Technical Conflicts

- **Port conflicts:** Ensure ports 3000, 3001, 3002 are available
- **TypeScript errors:** May need to adjust `tsconfig.json` strict settings
- **CORS issues:** Backend must allow `localhost:3000` and `localhost:3002`
- **Next.js caching:** Use `npm run dev` with `--turbo` flag if needed

---

## 📦 13. Submission Requirements

### Required Deliverables

| Deliverable | Requirement | Location |
|-------------|-------------|----------|
| **Video demo** | Max 3 min; ≥90s showing solution; narrate IBM Bob | Upload to YouTube/Vimeo |
| **Problem + solution statement** | ≤500 words | Paste from [`vault/06 Demo and Pitch.md.md`](vault/06 Demo and Pitch.md.md:158-218) |
| **IBM Bob usage statement** | Describe 4+ tasks | Paste from [`vault/06 Demo and Pitch.md.md`](vault/06 Demo and Pitch.md.md:222-268) |
| **GitHub repo** | Public, with `bob_sessions/` folder | Push before submission |
| **Bob task session reports** | Screenshots + markdown per task | [`bob_sessions/`](bob_sessions/) folder |

### Submission Checklist

- [ ] All Bob task sessions exported to `bob_sessions/`
- [ ] Video recorded (2:45 target, using fallback files)
- [ ] Video uploaded and tested in private browser
- [ ] Problem + solution statement pasted (≤500 words)
- [ ] IBM Bob usage statement pasted
- [ ] Public GitHub repo pushed with `bob_sessions/` folder
- [ ] Submitted before **10:00 AM ET, May 3, 2026**

---

## 🎯 Quick Start Commands

```bash
# Clone or create project
mkdir apidrift && cd apidrift

# Initialize structure (run from project root)
mkdir -p apps/{web,api}/src contracts drift-scanner apidrift-ui/app/components bob_sessions

# Create drift data JSON (critical - unblocks UI)
# Copy JSON schema from section 3 above into drift-scanner/sample-drift-output.json

# Initialize apps (see section 4 for detailed commands)
# Then start development:
npm run dev:all

# Verify:
# - http://localhost:3000 → Broken checkout ($NaN visible)
# - http://localhost:3001/checkout → API returns totalCents
# - http://localhost:3002 → APIDrift UI loads
```

---

## 📚 Additional Resources

- **Full demo script:** [`vault/06 Demo and Pitch.md.md`](vault/06 Demo and Pitch.md.md)
- **Judge Q&A prep:** [`vault/07 Judge Q&A.md.md`](vault/07 Judge Q&A.md.md)
- **Technical architecture:** [`vault/04 Technical Architecture.md.md`](vault/04 Technical Architecture.md.md)
- **MVP scope details:** [`vault/03 MVP Scope.md.md`](vault/03 MVP Scope.md.md)
- **Context packets:** [`vault/09 Context Packets.md.md`](vault/09 Context Packets.md.md)

---

This initialization guide provides everything needed to successfully set up and build the APIDrift project from scratch. The project is well-planned with clear deliverables, realistic scope, and a strong demo narrative centered around IBM Bob's capabilities.

---

**User:**

[ERROR] You did not use a tool in your previous response! Please retry with a tool use.

# Reminder: Instructions for Tool Use

Tool uses are formatted using XML-style tags. The tool name itself becomes the XML tag name. Each parameter is enclosed within its own set of tags. Here's the structure:

<actual_tool_name>
<parameter1_name>value1</parameter1_name>
<parameter2_name>value2</parameter2_name>
...
</actual_tool_name>

For example, to use the attempt_completion tool:

<attempt_completion>
<result>
I have completed the task...
</result>
</attempt_completion>

Always use the actual tool name as the XML tag name for proper parsing and execution.

# Next Steps

If you have completed the user's task, use the attempt_completion tool.
If you require additional information from the user, use the ask_followup_question tool.
Otherwise, if you have not completed the task and do not need additional information, then proceed with the next step of the task.
(This is an automated message, so do not respond to it conversationally.)
<environment_details>
# VSCode Visible Files
vault\09 Context Packets.md.md

# VSCode Open Tabs
vault/09 Context Packets.md.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T06:42:34.901Z
User time zone: America/Los_Angeles, UTC-7:00

# Current Cost
$0.44

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>plan</slug>
<name>📝 Plan</name>
====

REMINDERS

Below is your current list of reminders for this task. Keep them updated as you progress.

| # | Content | Status |
|---|---------|--------|
| 1 | Review and understand project documentation structure | Pending |
| 2 | Set up project repository structure | Pending |
| 3 | Initialize development environment and dependencies | Pending |
| 4 | Create broken checkout demo application | Pending |
| 5 | Create APIDrift UI application | Pending |
| 6 | Set up IBM Bob IDE integration | Pending |
| 7 | Create drift data JSON schema | Pending |
| 8 | Implement all 10 demo screens | Pending |
| 9 | Run IBM Bob tasks and save outputs | Pending |
| 10 | Polish and finalize for demo | Pending |
| 11 | Prepare submission materials | Pending |


IMPORTANT: When task status changes, remember to call the `update_todo_list` tool to update your progress.

</environment_details>

---

**Assistant:**

<attempt_completion>
<result>
# APIDrift Project Initialization Analysis Complete

I've analyzed all Markdown files in the `/vault/` directory and created a comprehensive initialization guide for the **APIDrift** hackathon project.

## Project Summary

**APIDrift** is an API contract drift detector that uses IBM Bob to identify when frontend code, backend routes, and API specifications silently disagree, causing production failures like `$NaN` in checkout flows.

## Key Initialization Steps

### 1. **Project Structure**
- Monorepo with 3 Next.js apps (broken checkout, APIDrift UI) + Express backend
- Ports: 3000 (frontend), 3001 (API), 3002 (APIDrift UI)
- Critical: Create `bob_sessions/` folder before first Bob task

### 2. **Tech Stack**
- Next.js 14 + Tailwind CSS + TypeScript
- Express.js backend
- Jest + Supertest for testing
- OpenAPI YAML for contracts
- IBM Bob IDE (required, 5 tasks)

### 3. **Critical Files to Create First**
- `drift-scanner/sample-drift-output.json` - Hardcoded drift data (unblocks all 10 UI screens)
- Broken checkout app showing `$NaN` (must be large, red, visible)
- OpenAPI contract file (stale version)

### 4. **IBM Bob Integration**
- Use `ibm-coding-challenge-xxx` account only
- 5 tasks: drift analysis, patch generation, contract test, PR summary, Bob skill (stretch)
- Export screenshots + markdown after EVERY task to `bob_sessions/`
- Budget: 8-18 Bobcoins

### 5. **Build Order (Critical Path)**
Day 1 Morning: Broken app → Fixed app → Drift JSON → All 10 UI screens
Day 1 Afternoon: Run Bob tasks 1-4 → Wire UI to Bob outputs
Day 2: Polish → Record demo → Submit

### 6. **Submission Requirements**
- Video demo (max 3 min, narrate IBM Bob)
- Problem + solution statement (≤500 words, paste-ready in vault/06)
- IBM Bob usage statement (paste-ready in vault/06)
- Public GitHub repo with `bob_sessions/` folder
- Deadline: May 3, 2026, 10:00 AM ET

### 7. **High-Risk Issues**
- `$NaN` must render visibly (large, red, bold)
- Always use saved fallback files for demo (never live Bob)
- Create `bob_sessions/` folder Day 1
- Verify using correct IBM Bob account before every task

## Quick Start

```bash
mkdir apidrift && cd apidrift
mkdir -p apps/{web,api}/src contracts drift-scanner apidrift-ui/app/components bob_sessions
# Initialize Next.js apps and Express backend
# Create drift JSON from provided schema
npm run dev:all
```

The project is **READY TO BUILD** with all planning complete. Documentation provides paste-ready demo scripts, judge Q&A prep, and detailed technical architecture.
</result>
</attempt_completion>

