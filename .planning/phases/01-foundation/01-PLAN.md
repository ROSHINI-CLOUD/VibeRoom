---
    phase: 01
    plan: 01
    name: 01-foundation
    status: pending
    requirements: [FND-01, FND-02, FND-03, FND-04]
    must_haves:
      truths:
        - "All listed phase requirements have observable implementation evidence."
        - "Relevant automated checks pass."
        - "No later-phase scope is required to demo this phase."
      artifacts:
        - "Implementation files for this phase"
        - "Tests for critical behavior"
        - ".planning/STATE.md update"
      key_links:
        - "Implementation follows AGENTS.md"
        - "Behavior traces to .planning/REQUIREMENTS.md"
    ---

    # Plan — Foundation

    ## Objective

    Implement the smallest complete vertical slice for Phase 01: **Foundation**.

    ## Tasks

    1. Create React/Vite/TypeScript strict project shell and folder boundaries.
2. Configure Tailwind, routing, error boundary, lint/typecheck/test/build scripts.
3. Add validated environment module; separate browser-safe and server-only configuration.
4. Create Supabase client wrapper without embedding privileged secrets.
5. Add initial smoke/unit test and CI-ready command set.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: FND-01, FND-02, FND-03, FND-04.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
