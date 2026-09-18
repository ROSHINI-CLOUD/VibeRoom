---
    phase: 05
    plan: 01
    name: 05-ai-dj-core
    status: pending
    requirements: [REC-01, REC-02, REC-03, REC-04, REC-05]
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

    # Plan — AI DJ Core

    ## Objective

    Implement the smallest complete vertical slice for Phase 05: **AI DJ Core**.

    ## Tasks

    1. Define candidate feature vector and score breakdown.
2. Implement pure deterministic scoring function.
3. Add candidate retrieval + shallow queue pipeline.
4. Update score inputs from recent reactions/session context.
5. Generate user-facing explanation from structured score facts.
6. Add unit tests for ranking monotonicity and edge cases.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: REC-01, REC-02, REC-03, REC-04, REC-05.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
