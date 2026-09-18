---
    phase: 06
    plan: 01
    name: 06-fairness-vibebridge
    status: pending
    requirements: [FAIR-01, FAIR-02, FAIR-03, BRDG-01, BRDG-02, BRDG-03]
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

    # Plan — Fairness + VibeBridge

    ## Objective

    Implement the smallest complete vertical slice for Phase 06: **Fairness + VibeBridge**.

    ## Tasks

    1. Define rolling member satisfaction/coverage metric.
2. Implement bounded fairness boost and group-fit floor.
3. Define current/target vibe vectors.
4. Implement bridge-distance/transition score for intermediate tracks.
5. Support a multi-track transition target that can re-plan.
6. Create deterministic fixtures proving fairness and bridge behavior.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: FAIR-01, FAIR-02, FAIR-03, BRDG-01, BRDG-02, BRDG-03.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
