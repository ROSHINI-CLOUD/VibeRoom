---
    phase: 02
    plan: 01
    name: 02-onboarding
    status: pending
    requirements: [ONB-01, ONB-02, ONB-03, ONB-04, ONB-05, ONB-06, ONB-07]
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

    # Plan — Taste Onboarding

    ## Objective

    Implement the smallest complete vertical slice for Phase 02: **Taste Onboarding**.

    ## Tasks

    1. Build multi-step mobile onboarding flow with progress and back navigation.
2. Implement language and favorite artist selection.
3. Implement compact song calibration reactions using provider/seed candidates.
4. Capture context, energy, and familiar↔discover preference.
5. Create typed taste-vector builder and persist profile.
6. Show generated Taste DNA summary with confirm/correct action.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: ONB-01, ONB-02, ONB-03, ONB-04, ONB-05, ONB-06, ONB-07.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
