# APIDrift

**API Drift Detector & Sync Agent**

> Bob catches API drift before your users do.

## What is this?

APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart. It classifies severity, identifies business impact, patches the mismatch, creates a contract test, and routes the fix to the right team.

## Demo Scenario

Backend changed from `{ total: 84.70, status: "paid" }` to `{ totalCents: 8470, status: "PAID" }`.
Frontend and OpenAPI docs were not updated.
Result: checkout shows **$NaN** and **Unknown status**.

## Project Structure

```
apidrift/
├── apps/
│   ├── web/          → Broken checkout frontend (port 3000)
│   └── api/          → Drifted backend (port 3001)
├── contracts/
│   └── openapi.yaml  → Stale API contract
├── drift-scanner/
│   └── sample-drift-output.json  → Hardcoded drift data
├── apidrift-ui/      → APIDrift product UI (port 3002)
└── bob_sessions/     → IBM Bob task session reports (required for submission)
```

## Setup

```powershell
# Install root dependencies
npm install

# Initialize apps (run each once)
cd apps\web; npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
cd apps\api; npm install
cd apidrift-ui; npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Run all three apps
npm run dev:all
```

## Verify

- `http://localhost:3000/checkout` → shows **$NaN** and **Unknown** (large, red)
- `http://localhost:3001/api/checkout` (POST) → returns `{ totalCents: 8470, status: "PAID" }`
- `http://localhost:3002` → APIDrift product UI (10 screens)

## IBM Bob Tasks

See `vault/04 Technical Architecture.md` for full prompts.

1. Analyze contract drift + severity
2. Generate patch
3. Generate contract test
4. Generate PR summary
5. Create Bob Skill (stretch)

## Submission Deadline

10:00 AM ET, May 3, 2026
