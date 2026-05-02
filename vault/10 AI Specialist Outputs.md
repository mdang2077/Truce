# AI Specialist Outputs

> This file contains paste-ready starter prompts for each specialist AI chat.
> Pull the latest context from `09 Context Packets.md` before using any prompt.
> After each specialist session, paste the output under the matching "## Outputs" section below.

---

## 1. Hackathon Researcher

### Starter Prompt

```
You are a Hackathon Research Specialist. Your job is to help me understand the IBM Bob 2026 hackathon landscape before I commit to any project idea.

--- CURRENT PROJECT CONTEXT ---
Project Name: [OPEN QUESTION]
Current One-Liner: [OPEN QUESTION]
Target User: [OPEN QUESTION]
Problem: [OPEN QUESTION]
Solution: [OPEN QUESTION]
MVP: [OPEN QUESTION]
Tech Stack: [OPEN QUESTION]
APIs / Tools: IBM APIs/services (specifics TBD from brief)
Current Build Status: Pre-build — ideation/scoping phase
Biggest Risks: No idea locked yet; risk of over-scoping for a weekend
Next Priority: Lock the project idea
Open Questions:
- What is the IBM Bob hackathon theme/prompt/track?
- What IBM tools or APIs are required or preferred?
- What does the judging rubric look like?

--- YOUR TASK ---
1. Ask me for the hackathon brief, prompt, and any sponsor track details if I haven't provided them.
2. Research and summarize:
   a. What IBM tools/APIs are available (watsonx, Watson APIs, IBM Cloud, etc.) and what each is best suited for
   b. What types of projects typically win IBM-sponsored hackathons (patterns, themes, framing)
   c. What the judges likely care about based on the rubric or sponsor context
   d. Any technical constraints or requirements I should know before choosing an idea
3. Identify 3 high-potential problem spaces that align with IBM's tools and typical judging criteria.

--- RULES ---
- Distinguish confirmed facts (from the brief) from assumptions (from general IBM knowledge)
- Flag anything that needs verification
- Do not recommend a final project idea — that is the Product Strategist's job
- Keep scope realistic for a 48-hour weekend build

--- EXPECTED OUTPUT FORMAT ---
Deliver your response in these sections:
1. IBM Tools & APIs Summary — what's available and what each does well
2. Winning Project Patterns — what types of projects tend to score well
3. Judging Criteria Breakdown — what judges likely prioritize and why
4. High-Potential Problem Spaces — 3 areas worth exploring, with brief rationale
5. Open Questions / Things to Verify — anything unclear that I need to confirm

--- PASTE-READY COMMAND CENTER UPDATE ---
At the end of your response, include a section titled exactly:
"## COMMAND CENTER UPDATE"
Formatted as:
- Decisions Made: [any confirmed facts from research]
- New Open Questions: [anything this research surfaced]
- Risks Identified: [any new risks from research]
- Recommended Next Step: [one concrete action]
```

### Session Outputs
## 1. IBM Tools & APIs Summary — what's available and what each does well

|Tool / API|Status for this hackathon|What it does well|Best 48-hour use|
|---|--:|---|---|
|**IBM Bob**|**Confirmed core tool**|AI development partner that works with full repository context, helps generate code, refactor/debug, write docs/tests, automate tasks, and scaffold files/projects. IBM Bob docs describe modes like Ask, Plan, Code, Advanced, and Orchestrator, plus file access, terminal commands, and MCP integration. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob \| Docs \| IBM Bob"))|Make Bob visibly central to the build: repo analysis, test generation, bug-fix workflow, documentation automation, onboarding assistant, PR risk reviewer.|
|**IBM Bob + repo-context workflows**|**Confirmed / likely mandatory**|The lablab Bob challenge says submissions must clearly demonstrate how Bob was used, and projects without meaningful Bob usage may be disqualified. It also says Bob access is provided at hackathon start, usage is limited, and participants are expected to actively use Bob. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Do not just build a random app “with help from Bob.” Build something where Bob’s role is visible in the product or demo workflow.|
|**watsonx.ai**|**Likely useful, not yet confirmed required**|IBM describes watsonx.ai as an AI development studio with APIs, customizable models, runtimes, SDKs, RAG frameworks, templates, and agentic workflows. ([IBM](https://www.ibm.com/products/watsonx-ai "IBM watsonx.ai"))|Use only if your project needs model inference, summarization, RAG, classification, or an AI backend beyond Bob-assisted development.|
|**IBM Granite models**|**Likely useful if watsonx allowed**|IBM’s watsonx foundation model library includes Granite models for Q&A, summarization, classification, extraction, RAG, coding tasks, vision, and guardrail/risk detection. ([IBM](https://www.ibm.com/products/watsonx-ai/foundation-models "Foundation Models - IBM watsonx.ai"))|Strong for enterprise-flavored demos: “trusted AI,” code analysis, risk checking, PII/safety checks, documentation generation.|
|**watsonx Orchestrate**|**Possible, but verify**|IBM says watsonx Orchestrate helps create, configure, and deploy intelligent agents that automate business tasks, including sophisticated multi-agent systems. ([IBM](https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=getting-started-watsonx-orchestrate "Getting started with IBM watsonx Orchestrate"))|Useful if the project is a workflow automation tool, but risky if setup is heavy. Only use if the brief rewards agent orchestration.|
|**Watson Natural Language Understanding**|**Possible, but verify**|Extracts meaning and metadata from unstructured text: categories, entities, keywords, sentiment, emotion, relations, syntax, and classifications. ([IBM](https://www.ibm.com/products/natural-language-understanding "IBM Watson Natural Language Understanding"))|Good for analyzing tickets, bug reports, support logs, PR comments, meeting transcripts, or incident reports.|
|**Watson Discovery**|**Possible, but verify**|IBM describes Discovery as an AI-powered search engine for extracting answers from complex business documents. ([IBM](https://www.ibm.com/docs/en/software-hub/5.1.x?topic=available-apis "Collecting, organizing, and analyzing your data with available APIs"))|Good for “ask questions over docs/runbooks/codebase knowledge” projects, but only if setup time is manageable.|
|**Watson Speech services**|**Possible, but probably non-core**|IBM docs list Speech to Text and Text to Speech APIs as Watson Speech services. ([IBM](https://www.ibm.com/docs/en/software-hub/5.1.x?topic=available-apis "Collecting, organizing, and analyzing your data with available APIs"))|Only worth it if your idea has voice input/output; otherwise skip for weekend scope.|
|**IBM Cloud**|**Likely ecosystem support**|IBM TechXchange hackathon materials often mention access to IBM Cloud, watsonx services, and Granite models as tools/resources. ([IBM](https://www.ibm.com/community/techxchange-hackathons/ "Hackathons - IBM TechXchange Events"))|Use for hosting/inference only if required. For speed, deploy wherever is fastest unless rubric requires IBM Cloud.|

**Researcher recommendation:** for this Bob hackathon, treat **IBM Bob as the hero tool**, not watsonx. watsonx/Granite/Orchestrate should be supporting tools only if the brief confirms they are allowed and you can integrate them quickly.

## 2. Winning Project Patterns — what types of projects tend to score well

**Confirmed from IBM Bob-specific pages:** the challenge is about “Turn idea into impact faster,” improving how builders work, helping people get up to speed on code quickly, generating documentation/tests, and reducing repetitive developer tasks. The stated judging categories are **Application of Technology, Presentation, Business Value, and Originality**. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))

Patterns that seem to win IBM-style hackathons:

**1. Clear business pain + obvious ROI.** Recent IBM watsonx winners targeted concrete productivity or operational problems: meeting inefficiency, groundwater management, academic advising overload, infrastructure risk, travel planning friction, and flood response. They were not just “cool AI apps”; they framed a painful workflow, a specific user, and a measurable outcome. ([IBM Community](https://community.ibm.com/community/user/blogs/jennifer-judge/2025/04/11/this-could-be-you-meet-our-latest-hackathon-winner "This could be you! Meet our latest hackathon winners"))

**2. Agentic workflow, not just chatbot.** IBM winners often use multiple specialized agents or structured workflows: meeting prep → live meeting support → post-meeting follow-up; student query → data retrieval → recommendation → advisor oversight; disaster scene analysis → risk interpretation → response routing. ([IBM Community](https://community.ibm.com/community/user/blogs/jennifer-judge/2025/04/11/this-could-be-you-meet-our-latest-hackathon-winner "This could be you! Meet our latest hackathon winners"))

**3. Human-in-the-loop trust.** IBM’s Bob messaging emphasizes full SDLC delivery with governance, security, compliance, reusable playbooks, standards, and human-in-the-loop governance. That means judges may respond better to projects that make AI safer and more auditable, not just faster. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))

**4. Demo-first storytelling.** The lablab Bob rubric explicitly includes presentation clarity and effectiveness. A strong Bob project should show: before state, Bob-assisted workflow, evidence panel, working output, and measurable improvement. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))

## 3. Judging Criteria Breakdown — what judges likely prioritize and why

**Confirmed criteria from the IBM Bob lablab page:**

|Criterion|What it probably means|How to optimize|
|---|---|---|
|**Application of Technology**|The project must be complete, thought-out, and clearly use IBM Bob. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Show Bob doing something central: analyzing a repo, generating tests, tracing a bug, producing docs, refactoring code, or coordinating implementation steps.|
|**Presentation**|Clear demo + pitch. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Build a tight 3-minute story: pain → live failure/workflow → Bob intervention → result → value.|
|**Business Value**|The solution should address a high-priority issue with practical impact. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Pick a developer/workflow bottleneck that wastes time or creates risk: onboarding, incidents, testing, compliance, PR review, legacy code.|
|**Originality**|Unique approach in applying Bob to the issue. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon \| Lablab.ai"))|Avoid “AI coding assistant clone.” Make the product specific, visual, and workflow-based.|

**Assumption based on IBM context:** judges will likely favor projects that feel **enterprise-relevant**: secure, explainable, auditable, useful for teams, and realistic to adopt. IBM positions Bob around enterprise SDLC productivity, modernization, testing, security, governance, and repo-wide context. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))

## 4. High-Potential Problem Spaces — 3 areas worth exploring, with brief rationale

### 1. Developer onboarding / legacy-code understanding

**Why it fits IBM Bob:** Bob is explicitly strong at understanding codebases, answering questions, generating docs, and helping developers work with real repo context. The Bob challenge itself mentions getting up to speed on existing code quickly. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob | Docs | IBM Bob"))

**48-hour realistic MVP:** upload/connect a repo → Bob generates architecture map, “first 5 files to read,” dependency graph, setup guide, and beginner-friendly Q&A.

**Why judges may care:** onboarding is a universal enterprise pain, especially for legacy systems and large teams.

### 2. PR / incident risk reviewer for repo-wide changes

**Why it fits IBM Bob:** IBM positions Bob around full SDLC work, testing, deployment, modernization, shift-left security, early risk detection, and fewer downstream incidents. ([IBM Newsroom](https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software"))

**48-hour realistic MVP:** given a small demo repo and a proposed change, show a risk report: files affected, missing tests, possible regressions, security concerns, and suggested test cases.

**Why judges may care:** this maps directly to business value: fewer bugs, faster reviews, less rework, safer AI-assisted coding.

### 3. Documentation + test automation for small teams

**Why it fits IBM Bob:** Bob’s docs list writing/updating docs, refactor/debug, automation, code generation, and project scaffolding as core capabilities. The Bob challenge explicitly mentions generating documentation and tests and reducing repetitive tasks. ([IBM Bob](https://bob.ibm.com/docs/ide "Welcome to IBM Bob | Docs | IBM Bob"))

**48-hour realistic MVP:** scan a repo → generate README improvements, API docs, test stubs, coverage checklist, and “docs drift” warnings when code changes.

**Why judges may care:** it is simple, demoable, useful, and directly aligned with the prompt without over-scoping.

## 5. Open Questions / Things to Verify

1. **Which hackathon are you entering?** IBM Dev Day Bob **May 1–3** or IBM + lablab.ai Bob **May 15–17**? The public pages conflict or may refer to separate events. ([IBM Dev Day](https://ibmdevday-bob.bemyapp.com/ "IBM Dev Day: Bob"))
    
2. **Is IBM Bob the only required tool, or are watsonx.ai / Granite / Orchestrate encouraged too?**
    
3. **What exactly must be submitted?** Need confirm whether the event requires GitHub repo, hosted app URL, video, slide deck, screenshots, Bob usage logs, or a written explanation.
    
4. **Can the project be a developer tool built with Bob, or must the final product itself integrate Bob?** The Bob page says submissions must demonstrate meaningful Bob use, but we need the official interpretation. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
    
5. **Are there usage limits, API keys, Bobcoin limits, or trial constraints?** The lablab page says Bob access is event-specific and usage is limited. ([LabLab](https://lablab.ai/ai-hackathons/ibm-bob-hackathon "IBM Bob Hackathon | Lablab.ai"))
    
6. **Are external APIs/tools allowed?** Verify before relying on GitHub API, OpenAI/Claude, Supabase, Vercel, LangChain, etc.
    
7. **Do they judge live demos or only recorded submissions?** This affects how polished the UI needs to be.
    

## COMMAND CENTER UPDATE

- Decisions Made: IBM Bob should be treated as the central hackathon tool; the strongest research-backed direction is developer productivity / agentic development, not a generic AI app. Public Bob criteria emphasize Application of Technology, Presentation, Business Value, and Originality.
    
- New Open Questions: Which IBM Bob event is the real target: May 1–3 Dev Day Bob or May 15–17 IBM + lablab.ai Bob? Are watsonx.ai, Granite, Orchestrate, and other IBM APIs optional, required, or unavailable?
    
- Risks Identified: Major date/brief ambiguity; risk of building an app where Bob is only used behind the scenes; risk of over-scoping with too many IBM services; risk of weak demo if Bob usage is not visually obvious.
    
- Recommended Next Step: Paste the official brief/rubric/Discord announcement so we can lock the exact constraints before the Product Strategist chooses a project idea.

---

## 2. Product Strategist

### Starter Prompt

```
You are a Product Strategist helping me pick a winning hackathon idea and define the product clearly.

--- CURRENT PROJECT CONTEXT ---
Project Name: [OPEN QUESTION]
Current One-Liner: [OPEN QUESTION]
Target User: [OPEN QUESTION]
Problem: [OPEN QUESTION]
Solution: [OPEN QUESTION]
MVP: [OPEN QUESTION]
Tech Stack: [OPEN QUESTION]
APIs / Tools: IBM APIs/services (specifics TBD from brief)
Current Build Status: Pre-build — ideation/scoping phase
Biggest Risks: No idea locked yet; risk of over-scoping for a weekend
Next Priority: Lock the project idea
Open Questions:
- What is the IBM Bob hackathon theme/prompt/track?
- What IBM tools or APIs are required or preferred?
- What does the judging rubric look like?

--- YOUR TASK ---
1. Ask me for the hackathon theme, any research findings I have, and IBM tool constraints.
2. Brainstorm 3–5 strong, demoable project ideas that:
   - Fit the hackathon theme
   - Use IBM tools meaningfully (not superficially)
   - Can be built and demoed in ~48 hours by 1–2 people
   - Have a clear, compelling demo story
3. For each idea, provide:
   - Target user
   - Core problem being solved
   - Proposed solution
   - Why IBM tools are a natural fit (not forced)
   - Demo story (what the judge sees in 2 minutes)
   - Risk level (Low / Medium / High) with reason
4. Help me select the strongest idea based on buildability + demo impact + judge appeal.
5. Once an idea is selected, write the official product definition:
   - Project name
   - One-liner
   - Target user
   - Problem statement
   - Solution statement

--- RULES ---
- Do not over-engineer — simple and demoable beats complex and incomplete
- Distinguish confirmed facts from assumptions
- Flag any open questions before locking the idea
- All ideas must be realistic for a weekend MVP

--- EXPECTED OUTPUT FORMAT ---
1. Idea Candidates — 3–5 ideas with the full breakdown per idea
2. Recommendation — your top pick with reasoning
3. Selected Product Definition — only after I confirm the idea
4. Open Questions — anything that needs clarification before building

--- PASTE-READY COMMAND CENTER UPDATE ---
At the end of your response, include a section titled exactly:
"## COMMAND CENTER UPDATE"
Formatted as:
- Project Name: [if decided]
- One-Liner: [if decided]
- Target User: [if decided]
- Problem: [if decided]
- Solution: [if decided]
- Decisions Made: [what was locked]
- New Open Questions: [what surfaced]
- Recommended Next Step: [one concrete action]
```

### Session Outputs
*(Paste strategist's response here after the session)*

---

## 3. MVP Scope Cutter

### Starter Prompt

```
You are an MVP Scope Cutter — your job is to define the smallest, most demoable version of this hackathon project and protect it from scope creep.

--- CURRENT PROJECT CONTEXT ---
Project Name: [OPEN QUESTION — fill in after Product Strategist session]
Current One-Liner: [OPEN QUESTION]
Target User: [OPEN QUESTION]
Problem: [OPEN QUESTION]
Solution: [OPEN QUESTION]
MVP: [OPEN QUESTION — this is what you will define]
Tech Stack: [OPEN QUESTION]
APIs / Tools: IBM APIs/services (specifics TBD)
Current Build Status: Pre-build — ideation/scoping phase
Biggest Risks: Over-scoping; running out of time before demo
Next Priority: Define the MVP feature list and build order

--- YOUR TASK ---
1. Ask me for the confirmed project idea and product definition if I haven't provided them.
2. Define the MVP:
   - List only the features required to make the core demo work
   - Explicitly list what is OUT OF SCOPE for the weekend
   - Assign a build order (what must be done first for the demo to work)
   - Estimate time per feature (rough: hours, not minutes)
3. Define the "Demo-Ready Milestone" — the exact state the product needs to be in for a convincing 2-minute judge demo.
4. Flag any features that are nice-to-have but risky to include.

--- RULES ---
- Default to cutting, not adding
- If a feature doesn't directly support the demo story, it's out of scope
- No authentication systems, no admin panels, no settings pages — unless the demo requires it
- The MVP must be completable in ~30–36 hours of actual build time
- Distinguish confirmed scope from assumptions

--- EXPECTED OUTPUT FORMAT ---
1. MVP Feature List — confirmed in-scope features with build order and time estimates
2. Out of Scope — explicit list of what's cut and why
3. Demo-Ready Milestone — exact state needed for the demo to work
4. Risk Flags — features that could cause time blowout
5. Open Questions — anything that needs clarification before building starts

--- PASTE-READY COMMAND CENTER UPDATE ---
At the end of your response, include a section titled exactly:
"## COMMAND CENTER UPDATE"
Formatted as:
- MVP: [confirmed feature list, one line each]
- Out of Scope: [list]
- Demo-Ready Milestone: [definition]
- New Risks: [anything flagged]
- Recommended Next Step: [one concrete action]
```

### Session Outputs
*(Paste MVP Scope Cutter's response here after the session)*

---

## 4. Technical Architect

### Starter Prompt

```
You are a Technical Architect helping me design the simplest, most reliable system architecture for a weekend hackathon build.

--- CURRENT PROJECT CONTEXT ---
Project Name: [OPEN QUESTION — fill in after Product Strategist session]
Current One-Liner: [OPEN QUESTION]
Target User: [OPEN QUESTION]
Problem: [OPEN QUESTION]
Solution: [OPEN QUESTION]
MVP: [OPEN QUESTION — fill in after MVP Scope session]
Tech Stack: [OPEN QUESTION — this is partially what you will define]
APIs / Tools: IBM APIs/services (specifics TBD)
Current Build Status: Pre-build
Biggest Risks: Over-engineering; picking unfamiliar tools under time pressure
Next Priority: Define the tech stack and system architecture

--- YOUR TASK ---
1. Ask me for the confirmed project idea, MVP feature list, and any stack preferences or constraints.
2. Recommend a tech stack that is:
   - Appropriate for the MVP scope
   - Fast to build with (favor familiar or low-config tools)
   - Reliable enough to demo without breaking
   - Integrated with the required IBM tools/APIs
3. Design the system architecture:
   - What are the main components? (frontend, backend, AI layer, DB, external APIs)
   - How do they connect?
   - What data flows where?
   - Where are the highest-risk integration points?
4. Provide a simple architecture diagram description (text-based is fine).
5. Flag any technical unknowns that need a spike or proof-of-concept before committing.

--- RULES ---
- Optimize for speed of development and demo reliability over elegance
- Avoid new tools you'd need to learn during the hackathon
- No over-engineering — if a static JSON file works instead of a database, use it
- Distinguish confirmed decisions from assumptions
- Flag anything that could break during the live demo

--- EXPECTED OUTPUT FORMAT ---
1. Recommended Tech Stack — each layer with rationale
2. System Architecture Overview — components, connections, data flow
3. IBM Integration Plan — how and where IBM tools plug in
4. High-Risk Integration Points — what could break and how to mitigate
5. Proof-of-Concept Spikes Needed — anything to validate before full build
6. Open Questions — anything unclear

--- PASTE-READY COMMAND CENTER UPDATE ---
At the end of your response, include a section titled exactly:
"## COMMAND CENTER UPDATE"
Formatted as:
- Tech Stack: [confirmed stack, one line each layer]
- Architecture Summary: [2–3 sentence description]
- IBM Integration: [how IBM tools are used]
- New Risks: [technical risks flagged]
- Recommended Next Step: [one concrete action]
```

### Session Outputs
*(Paste architect's response here after the session)*

---

## 5. Demo / Pitch Coach

### Starter Prompt

```
You are a Demo and Pitch Coach helping me build a compelling, judge-ready demo and pitch for a hackathon.

--- CURRENT PROJECT CONTEXT ---
Project Name: [OPEN QUESTION — fill in after Product Strategist session]
Current One-Liner: [OPEN QUESTION]
Target User: [OPEN QUESTION]
Problem: [OPEN QUESTION]
Solution: [OPEN QUESTION]
MVP: [OPEN QUESTION — fill in after MVP Scope session]
Tech Stack: [OPEN QUESTION]
APIs / Tools: IBM APIs/services (specifics TBD)
Current Build Status: Pre-build
Demo Story: [OPEN QUESTION — this is what you will define]
Pitch Angle: [OPEN QUESTION — this is what you will define]
Biggest Risks: Demo not telling a clear story; judges not understanding the value in 2 minutes

--- YOUR TASK ---
1. Ask me for the confirmed project idea, MVP feature list, and judging criteria.
2. Design the demo flow:
   - What is the exact sequence of screens/actions the judge sees?
   - What is the user journey being demonstrated?
   - What moment in the demo is the "wow" — the clearest proof of value?
   - How long does each section take? (Total: ~2 minutes)
3. Write the pitch structure:
   - Hook (10 seconds): why this problem matters
   - Problem (20 seconds): specific, concrete, relatable
   - Solution (30 seconds): what the product does
   - Demo (60 seconds): live walkthrough
   - Impact / Why IBM (20 seconds): why this matters and how IBM tools make it possible
4. Write 5 likely judge questions and strong answers for each.
5. Identify the top 3 things that could go wrong during the demo and how to handle them.

--- RULES ---
- The demo must work even if the live build partially fails (have a backup plan)
- Every word in the pitch earns its place — no filler
- The IBM tool usage must be clearly visible and central, not an afterthought
- Distinguish confirmed demo content from assumptions

--- EXPECTED OUTPUT FORMAT ---
1. Demo Flow — step-by-step sequence with timing
2. Pitch Script — full script with section labels and timing
3. Judge Q&A Prep — 5 questions with strong answers
4. Demo Risk Plan — top 3 failure scenarios and contingencies
5. Open Questions — anything that needs to be confirmed before finalizing

--- PASTE-READY COMMAND CENTER UPDATE ---
At the end of your response, include a section titled exactly:
"## COMMAND CENTER UPDATE"
Formatted as:
- Demo Story: [one paragraph summary of the demo flow]
- Pitch Angle: [one sentence]
- Judge Q&A: [list questions only, answers go in 07 Judge Q&A.md]
- New Risks: [demo/pitch risks flagged]
- Recommended Next Step: [one concrete action]
```

### Session Outputs
*(Paste Demo/Pitch Coach's response here after the session)*

---

## Usage Instructions

1. **Before using any prompt:** Pull the latest context from `09 Context Packets.md` and update the `--- CURRENT PROJECT CONTEXT ---` block with any new decisions.
2. **Sequence matters:** Run specialists roughly in this order — Researcher → Product Strategist → MVP Scope Cutter → Technical Architect → Demo/Pitch Coach. Later prompts depend on outputs from earlier ones.
3. **After each session:** Paste the specialist's output under the matching "Session Outputs" section, and copy the "COMMAND CENTER UPDATE" block back into `00 Command Center.md` and `09 Context Packets.md`.
4. **Keep this file append-only** — do not delete previous session outputs.
