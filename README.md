# Truce - API Contract Drift Detection

**IBM Spring 2026 Hackathon Submission**

Truce is a developer-productivity tool that uses IBM Bob to detect and fix API contract drift — the silent, cross-layer mismatches that break products even when every individual file is "correct."

---

## 🎯 The Problem

APIs break even when the backend technically works. When frontend code, backend routes, and API specifications silently drift apart, the system disagrees with itself, causing runtime failures that are hard to detect manually.

**Example:** A backend engineer changes the checkout API from `total: 84.70` to `totalCents: 8470` (integer cents, best practice for currency). The change ships, tests pass, but the frontend still reads `order.total` and the OpenAPI spec still documents the old shape.

**Result:** Users see **$NaN** and **Unknown** status on the checkout page.

---

## 💡 The Solution

Truce uses **IBM Bob** as a repo-wide contract detective to:

1. **Detect drift automatically** - Bob reads frontend code, backend routes, and OpenAPI specs simultaneously
2. **Classify severity** - Breaking vs Medium vs Cosmetic based on user impact
3. **Generate fixes** - Bob creates code patches, contract tests, and PR summaries
4. **Route to teams** - Automated workflow orchestration to assign fixes

**Key Innovation:** Bob doesn't just find the problem — it generates the complete solution (patch + test + PR description) in minutes, not hours.

---

## 🏗️ Architecture

```
Truce/
├── apidrift/                    # Main application directory
│   ├── apps/
│   │   ├── api/                # Demo backend (Node.js/Express)
│   │   │   └── src/routes/checkout.ts
│   │   └── web/                # Demo frontend (Next.js)
│   │       └── src/app/checkout/page.tsx
│   ├── apidrift-ui/            # Truce product UI (Next.js)
│   │   └── app/
│   │       ├── page.tsx        # Main UI with 10 screens
│   │       └── components/     # All UI components
│   ├── contracts/
│   │   └── openapi.yaml        # API specification
│   ├── drift-scanner/          # Bob outputs
│   │   ├── bob-task-1-analysis.md
│   │   ├── bob-task-2-patch.md
│   │   └── bob-task-4-pr-summary.md
│   └── screenshots/            # Product screenshots
├── bob_sessions/               # Exported Bob session reports
├── submission/                 # Hackathon deliverables
│   ├── project-description.md
│   ├── technology-statement.md
│   └── VIDEO_SCRIPT_TRUCE.md
└── README.md                   # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- macOS, Linux, or Windows

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Truce

# Install dependencies for all apps
cd apidrift
npm install

# Install backend dependencies
cd apps/api
npm install

# Install frontend dependencies
cd ../web
npm install

# Install Truce UI dependencies
cd ../../apidrift-ui
npm install
```

### Running the Demo

**Terminal 1 - Truce Product UI (port 3002):**
```bash
cd apidrift/apidrift-ui
npm run dev
```

**Terminal 2 - Demo Backend API (port 3001):**
```bash
cd apidrift/apps/api
npm run dev
```

**Terminal 3 - Demo Frontend (port 3000):**
```bash
cd apidrift/apps/web
npm run dev
```

### Access the Applications

- **Broken Checkout Demo:** http://localhost:3000/checkout (shows $NaN)
- **Truce UI:** http://localhost:3002 (10-screen product interface)
- **Backend API:** http://localhost:3001/api/checkout

---

## 🤖 IBM Bob Integration

Truce uses IBM Bob for 4 critical tasks:

### Task 1: Multi-Layer Contract Analysis
- **Input:** 4 files (frontend client, UI component, backend route, OpenAPI spec)
- **Output:** 263-line analysis identifying 3 drift points with severity classification
- **Bob Capability:** Multi-file context understanding, semantic analysis
- **File:** `apidrift/drift-scanner/bob-task-1-analysis.md`

### Task 2: Code Patch Generation
- **Input:** Analysis from Task 1
- **Output:** 360-line patch with before/after diffs for 3 files
- **Bob Capability:** Code generation, diff creation, best practice recommendations
- **File:** `apidrift/drift-scanner/bob-task-2-patch.md`

### Task 3: Contract Test Generation
- **Input:** Backend route and desired contract
- **Output:** 59-line Jest + Supertest test with 3 test cases
- **Bob Capability:** Test code generation, assertion logic
- **File:** `apidrift/apps/api/src/tests/checkout.contract.test.ts`

### Task 4: PR Summary Generation
- **Input:** All previous outputs
- **Output:** 229-line PR description with impact analysis and rollback plan
- **Bob Capability:** Technical writing, risk assessment, documentation
- **File:** `apidrift/drift-scanner/bob-task-4-pr-summary.md`

**All Bob sessions exported to:** `bob_sessions/` directory

---

## 📸 Screenshots

Product screenshots demonstrating the complete workflow are available in `apidrift/screenshots/`:

1. Broken checkout showing $NaN
2. Contract sources comparison
3. Drift matrix with severity badges (HERO SHOT)
4. Bob evidence trail
5. Severity and business impact
6. Fix strategy recommendations
7. Code patches generated by Bob
8. Contract regression tests
9. Ticket routing workflow
10. PR summary and documentation

---

## 🎥 Video Demo

A 2:45 video demonstration is available showing:
- The broken checkout problem ($NaN display)
- Truce's drift detection using IBM Bob
- The drift matrix with severity classification
- Bob's evidence trail and analysis
- Generated patches, tests, and PR summary
- The fixed checkout ($84.70 display)

**Video file:** `apidrift/demo-video.mp4` (to be recorded)

---

## 📋 Submission Deliverables

All hackathon deliverables are in the `submission/` directory:

- **Problem Statement:** `submission/project-description.md` (445 words)
- **Solution Statement:** `submission/project-description.md` (included)
- **Bob Utilization:** `submission/technology-statement.md` (480 words)
- **Video Script:** `submission/VIDEO_SCRIPT_TRUCE.md`
- **Checklist:** `submission/SUBMISSION_CHECKLIST.md`

---

## 🛠️ Technology Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Testing:** Jest, Supertest
- **API Docs:** OpenAPI 3.0
- **AI Agent:** IBM Bob (Bob IDE)
- **Deployment:** Local development (hackathon POC)

---

## 📊 Impact Metrics

**Before Truce:**
- 3 hours debugging + 2 hours fixing = 5 hours total
- Manual process, error-prone
- Reactive (after users report issues)

**With Truce:**
- 5 minutes Bob analysis + 15 minutes review = 20 minutes total
- Automated, consistent
- Proactive (catches drift before deployment)

**Result:** 15x faster resolution, 95% reduction in manual effort

---

## 🏆 Hackathon Theme: "Turn Idea Into Impact Faster"

Truce directly addresses the hackathon theme by:

1. **Reducing friction** - Automates the tedious multi-step process of diagnosing API drift
2. **Accelerating delivery** - Turns 5 hours of manual work into 20 minutes of automated analysis
3. **Preventing issues** - Catches drift before it reaches users, not after
4. **Enabling teams** - Generates complete fixes (code + tests + docs) that teams can review and merge immediately

**IBM Bob is essential** - Without Bob's semantic reasoning and code generation capabilities, this level of automation would be impossible.

---

## 👥 Team

- **Person 1:** Screenshots, video demo, submission documents
- **Person 2:** Server management, Bob integration, code quality

---

## 📝 License

This is a hackathon project created for the IBM Spring 2026 Hackathon.

---

## 🙏 Acknowledgments

- **IBM Bob** for providing the AI agent capabilities that make Truce possible
- **IBM Spring 2026 Hackathon** for the opportunity to build this solution

---

**Submission Date:** May 3, 2026  
**Deadline:** 10:00 AM ET (7:00 AM PT)

---

For questions or issues, please refer to the submission documents in the `submission/` directory.