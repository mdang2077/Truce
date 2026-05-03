# Graph Report - .  (2026-05-03)

## Corpus Check
- 90 files · ~271,457 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 267 nodes · 304 edges · 46 communities detected
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `APIDrift Demo Flow` - 14 edges
2. `detectDrift Function` - 10 edges
3. `Bob Generated Patch` - 8 edges
4. `Bob Evidence Trail` - 7 edges
5. `Backend Returned Checkout Contract` - 7 edges
6. `Checkout Contract Regression Test` - 7 edges
7. `Bob PR Summary` - 7 edges
8. `Bob Task 1 Contract Drift Analysis` - 7 edges
9. `Frontend API Client and Checkout UI` - 7 edges
10. `Express Checkout Backend` - 7 edges

## Surprising Connections (you probably didn't know these)
- `detectDrift Function` --implements--> `API Contract Drift (cross-layer schema mismatch)`  [INFERRED]
  apidrift/tests/validation/drift-detector.ts → README.md
- `IBM Bob as Repo-Wide Contract Detective` --references--> `Drifted Checkout Response`  [EXTRACTED]
  IMPLEMENTATION_ANALYSIS.md → apidrift/apps/api/src/routes/checkout.ts
- `Broken Checkout Page Metadata` --conceptually_related_to--> `Broken Checkout Demo Hook`  [INFERRED]
  apidrift/apps/web/src/app/layout.tsx → IMPLEMENTATION_ANALYSIS.md
- `Claude Code Guardrails` --semantically_similar_to--> `IBM Spring 2026 Hackathon Project Snapshot`  [INFERRED] [semantically similar]
  CLAUDE.md → AGENTS.md
- `Bob Session: Implement Drift Detection Validation (May 3, 12:28 AM)` --references--> `detectDrift Function`  [EXTRACTED]
  bob_sessions/bob_task_may-3-2026_12-28-08-am.md → apidrift/tests/validation/drift-detector.ts

## Hyperedges (group relationships)
- **Bob-Assisted Drift Resolution Loop** — bobevidencetrail_bob_evidence_trail, fixstrategy_update_frontend_docs_strategy, patchpanel_bob_generated_patch, contracttestpanel_contract_regression_test, prsummary_bob_pr_summary [EXTRACTED 1.00]
- **Checkout Contract Drift Across Layers** — contractsources_frontend_expected_contract, contractsources_backend_returned_contract, contractsources_openapi_documented_contract, driftmatrix_checkout_drift_matrix [EXTRACTED 1.00]
- **Checkout Fix Artifacts** — patchpanel_checkout_client_interface_patch, patchpanel_checkout_summary_display_patch, patchpanel_openapi_contract_patch, contracttestpanel_contract_regression_test [EXTRACTED 1.00]
- **Checkout Contract Drift Flow** — checkout_drifted_checkout_response, checkoutclient_old_checkout_response_interface, checkoutsummary_nan_total_display, checkoutsummary_unknown_status_display [EXTRACTED 1.00]
- **Bob Submission Evidence System** — agents_bob_session_export_requirement, handoff_bob_task_outputs_complete, person1_problem_solution_bob_deliverables, implementation_bob_as_contract_detective [EXTRACTED 1.00]
- **Three-Layer Contract Drift** — project_frontend_layer, project_backend_layer, project_openapi_layer, project_contract_drift [EXTRACTED 1.00]
- **Ten Screen Demo Flow** — project_broken_checkout, project_drift_matrix, project_bob_evidence_trail, project_severity_business_impact, project_fix_strategy, project_patch_diff, project_contract_test, project_ticket_routing, project_fixed_checkout, project_pr_summary [EXTRACTED 1.00]
- **APIDrift Validation Pipeline** — scenarioloader_loadAllScenarios, driftdetector_detectDrift, accuracymetrics_calculateAccuracy, accuracymetrics_generateReport, runvalidation_runValidation [EXTRACTED 1.00]
- **Core Drift Detection Logic** — driftdetector_compareSchemas, driftdetector_detectFieldRenames, driftdetector_parseBackendResponse, driftdetector_calculateSeverity, driftdetector_detectDrift [EXTRACTED 1.00]
- **Bob Session Timeline (May 2-3 2026)** — bob_session_may2_143am, bob_session_may2_1109pm, bob_session_may2_1127pm, bob_session_may2_1141pm, bob_session_may2_1158pm, bob_session_may3_1207am, bob_session_may3_1212am, bob_session_may3_1228am [EXTRACTED 1.00]
- **Test Accuracy Data Interfaces** — accuracymetrics_TestResult, accuracymetrics_AccuracyMetrics, scenarioloader_DriftScenario, driftdetector_DriftDetectionResult [INFERRED 0.85]
- **Complete Submission Deliverables Set** — finalguide_video_demo_deliverable, finalguide_problem_statement_doc, finalguide_bob_utilization_doc, finalguide_bob_session_exports_required, projdesc_project_description, techstmt_technology_statement [EXTRACTED 1.00]
- **IBM Bob Five-Task Workflow** — bobreport_task1_drift_analysis, bobreport_task2_patch_generation, bobreport_task3_test_generation, bobreport_task4_pr_summary, bobreport_task5_ui_dev [EXTRACTED 1.00]

## Communities

### Community 0 - "Bob Evidence Trail"
Cohesion: 0.11
Nodes (34): Bob Evidence Trail, IBM Bob Repository Analysis, Bob Capability Progress, Checkout Shows NaN and Unknown, User-Visible API Drift, Backend Returned Checkout Contract, Contract Sources Comparison, Frontend Expected Checkout Contract (+26 more)

### Community 1 - "Validation Accuracy Metrics"
Cohesion: 0.08
Nodes (34): AccuracyMetrics Interface, TestResult Interface, calculateAccuracy Function, exportResultsJSON Function, generateReport Function, meetsThresholds Function, APIDrift Product Description, Bob Session: Dependency Fix (May 2, 1:43 AM) (+26 more)

### Community 2 - "APIDrift UI Components"
Cohesion: 0.07
Nodes (2): CheckoutSummary(), formatCheckout()

### Community 3 - "AST Accuracy Functions"
Cohesion: 0.13
Nodes (9): calculateSeverity(), compareSchemas(), detectDrift(), detectFieldRenames(), parseBackendResponse(), generateManifest(), loadAllScenarios(), loadScenariosBySeverity() (+1 more)

### Community 4 - "Checkout Contract Tests"
Cohesion: 0.11
Nodes (22): Checkout Contract Regression Test, Uppercase Status Regression Assertions, totalCents Regression Assertions, Drifted Checkout Response, totalCents Contract Field, Uppercase PAID Status Contract, fetchCheckout Client Call, Old CheckoutResponse Interface (+14 more)

### Community 5 - "Project Architecture"
Cohesion: 0.1
Nodes (22): sample-drift-output.json, APIDrift, Bob Evidence Trail, Bob Sessions Export, IBM Bob Usage Statement, API Contract Drift, Demo Video, Drift Matrix (+14 more)

### Community 6 - "Tech Stack"
Cohesion: 0.16
Nodes (22): Express TypeScript API Stack, Jest and Supertest Testing Stack, APIDrift Monorepo Architecture, Next.js 14 and Tailwind Stack, Bob Task 1 Contract Drift Analysis, Bob Task 2 Code Patch Generation, Bob Task 4 PR Summary, Bob Task Outputs Folder (+14 more)

### Community 7 - "Bob Session Timeline"
Cohesion: 0.13
Nodes (15): Bob Session: Focus on Bob IDE Tasks (May 2, 11:09 PM), Bob Session: Bob Integration and Screenshots (May 2, 11:41 PM), Bob Session: Two-Developer Plan Generation (May 2, 11:58 PM), Bob Session: Person 2 Role Assignment (May 3, 12:07 AM), API Contract Drift (cross-layer schema mismatch), IBM Bob AI Agent Integration, Rationale: Bob enables automation impossible otherwise, Bob Output Files (analysis/patch/PR summary) (+7 more)

### Community 8 - "Hackathon Handoff"
Cohesion: 0.29
Nodes (7): Continuous IBM Bob Session Export Requirement, All 10 APIDrift Screens Built, Bob Integration Phase Complete Handoff, Bob Task Outputs Complete, APIDrift Contract Drift Solution, IBM Bob as Repo-Wide Contract Detective, Static Data Demo Reliability Rationale

### Community 9 - "IBM Bob Report"
Cohesion: 0.33
Nodes (7): IBM Bob Report - Truce Hackathon Project, Bob Task 1: Multi-Layer Contract Drift Analysis, Bob Task 2: Code Patch Generation, Bob Task 3: Contract Regression Test Generation, Bob Task 4: PR Summary and Documentation, Bob Task 5: UI Component Development (Stretch), Bob Task 1: Repo-Wide Drift Analysis

### Community 10 - "Submission Deliverables"
Cohesion: 0.4
Nodes (5): Bob Session Exports Required (4 sessions), Bob Utilization Document (technology-statement.md), Problem Statement Document (project-description.md), Final Submission Guide - Truce Hackathon, Video Demo Deliverable (demo-video.mp4)

### Community 11 - "Project Description"
Cohesion: 0.5
Nodes (4): IBM Bob as Repo-Wide Contract Detective, API Contract Drift Problem, APIDrift Five Output Artifacts, APIDrift Project Description

### Community 12 - "Checkout Route"
Cohesion: 0.67
Nodes (0): 

### Community 13 - "Demo Recording Path"
Cohesion: 0.67
Nodes (3): Demo Recording Critical Path, DriftMatrix Hero Shot, Person 1 Screenshots Video Submission Lead

### Community 14 - "Monorepo Dependency Fix"
Cohesion: 0.67
Nodes (3): Bob Task: npm Dependency Errors in Monorepo, Bob Session Screenshot: Dependency Resolution Task, Tech Stack: Next.js Tailwind Express OpenAPI Jest TypeScript IBM Bob

### Community 15 - "Next.js Layout"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Hackathon Project Snapshot"
Cohesion: 1.0
Nodes (2): IBM Spring 2026 Hackathon Project Snapshot, Claude Code Guardrails

### Community 17 - "Submission Artifacts"
Cohesion: 1.0
Nodes (2): Hackathon Submission Deliverables, Problem Solution Bob Utilization Deliverables

### Community 18 - "Workspace Installation Fix"
Cohesion: 1.0
Nodes (2): Independent Workspace Installation Plan, Missing node_modules Root Cause

### Community 19 - "Next.js Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Next.js Config"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Jest Config"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "TypeScript Next Env"
Cohesion: 1.0
Nodes (1): Next.js TypeScript Type Reference

### Community 25 - "DriftDetectionResult Type"
Cohesion: 1.0
Nodes (1): DriftDetectionResult Interface

### Community 26 - "Scenario Creator"
Cohesion: 1.0
Nodes (1): createScenario Function

### Community 27 - "Scenario Saver"
Cohesion: 1.0
Nodes (1): saveScenario Function

### Community 28 - "Bob Session May 2 Late"
Cohesion: 1.0
Nodes (1): Bob Session: Bob IDE Critical Path (May 2, 11:27 PM)

### Community 29 - "Graph Report"
Cohesion: 1.0
Nodes (1): APIDrift Graph Report

### Community 30 - "Submission Deadline"
Cohesion: 1.0
Nodes (1): Submission Deadline 10:00 AM ET May 3 2026

### Community 31 - "Truce Product Name"
Cohesion: 1.0
Nodes (1): Truce (Product Name used in Video)

### Community 32 - "Bob Time Savings"
Cohesion: 1.0
Nodes (1): 87.5% Time Savings with IBM Bob

### Community 33 - "Bob Core Engine"
Cohesion: 1.0
Nodes (1): IBM Bob as Core Analytical and Generative Engine

### Community 34 - "NaN Bug Symptom"
Cohesion: 1.0
Nodes (1): NaN Total and Unknown Status Symptom

### Community 35 - "Technology Statement"
Cohesion: 1.0
Nodes (1): APIDrift Technology Statement

### Community 36 - "Patch Generation Task"
Cohesion: 1.0
Nodes (1): Bob Task 2: Patch Generation

### Community 37 - "Contract Test Task"
Cohesion: 1.0
Nodes (1): Bob Task 3: Jest + Supertest Contract Test Generation

### Community 38 - "PR Summary Task"
Cohesion: 1.0
Nodes (1): Bob Task 4: PR Summary Generation

### Community 39 - "Reusable Skill Task"
Cohesion: 1.0
Nodes (1): Bob Task 5: Reusable api-contract-drift-review Skill

### Community 40 - "Video Script"
Cohesion: 1.0
Nodes (1): Truce Video Demo Script

### Community 41 - "Three Servers Setup"
Cohesion: 1.0
Nodes (1): Three Servers Required (ports 3000 3001 3002)

### Community 42 - "Task Board"
Cohesion: 1.0
Nodes (1): APIDrift Task Board

### Community 43 - "Context Packet"
Cohesion: 1.0
Nodes (1): Context Packet v1.0 - APIDrift

### Community 44 - "Bob Screenshot 1"
Cohesion: 1.0
Nodes (1): Bob Session Screenshot: Repo Analysis Task

### Community 45 - "Bob Screenshot 3"
Cohesion: 1.0
Nodes (1): Bob Session Screenshot: Vault Analysis Task

## Knowledge Gaps
- **97 isolated node(s):** `Next.js Type References`, `React Strict Mode`, `Tailwind App Content Scan`, `IBM Bob Repository Analysis`, `Future Drift Prevention` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Next.js Layout`** (2 nodes): `layout.tsx`, `RootLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hackathon Project Snapshot`** (2 nodes): `IBM Spring 2026 Hackathon Project Snapshot`, `Claude Code Guardrails`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Submission Artifacts`** (2 nodes): `Hackathon Submission Deliverables`, `Problem Solution Bob Utilization Deliverables`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Workspace Installation Fix`** (2 nodes): `Independent Workspace Installation Plan`, `Missing node_modules Root Cause`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Env Types`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Config`** (1 nodes): `next.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Jest Config`** (1 nodes): `jest.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TypeScript Next Env`** (1 nodes): `Next.js TypeScript Type Reference`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `DriftDetectionResult Type`** (1 nodes): `DriftDetectionResult Interface`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scenario Creator`** (1 nodes): `createScenario Function`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scenario Saver`** (1 nodes): `saveScenario Function`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bob Session May 2 Late`** (1 nodes): `Bob Session: Bob IDE Critical Path (May 2, 11:27 PM)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Graph Report`** (1 nodes): `APIDrift Graph Report`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Submission Deadline`** (1 nodes): `Submission Deadline 10:00 AM ET May 3 2026`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Truce Product Name`** (1 nodes): `Truce (Product Name used in Video)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bob Time Savings`** (1 nodes): `87.5% Time Savings with IBM Bob`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bob Core Engine`** (1 nodes): `IBM Bob as Core Analytical and Generative Engine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `NaN Bug Symptom`** (1 nodes): `NaN Total and Unknown Status Symptom`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Technology Statement`** (1 nodes): `APIDrift Technology Statement`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Patch Generation Task`** (1 nodes): `Bob Task 2: Patch Generation`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contract Test Task`** (1 nodes): `Bob Task 3: Jest + Supertest Contract Test Generation`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PR Summary Task`** (1 nodes): `Bob Task 4: PR Summary Generation`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Reusable Skill Task`** (1 nodes): `Bob Task 5: Reusable api-contract-drift-review Skill`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Video Script`** (1 nodes): `Truce Video Demo Script`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Three Servers Setup`** (1 nodes): `Three Servers Required (ports 3000 3001 3002)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Task Board`** (1 nodes): `APIDrift Task Board`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Context Packet`** (1 nodes): `Context Packet v1.0 - APIDrift`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bob Screenshot 1`** (1 nodes): `Bob Session Screenshot: Repo Analysis Task`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bob Screenshot 3`** (1 nodes): `Bob Session Screenshot: Vault Analysis Task`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `detectDrift Function` connect `Validation Accuracy Metrics` to `Bob Session Timeline`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `API Contract Drift (cross-layer schema mismatch)` connect `Bob Session Timeline` to `Validation Accuracy Metrics`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `Next.js Type References`, `React Strict Mode`, `Tailwind App Content Scan` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bob Evidence Trail` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Validation Accuracy Metrics` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `APIDrift UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `AST Accuracy Functions` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._