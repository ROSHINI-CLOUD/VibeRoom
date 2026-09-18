---
    phase: 07
    plan: 01
    name: 07-crowd-interaction
    status: pending
    requirements: [REACT-01, REACT-02, REACT-03, REQ-01, REQ-02, REQ-03, HLTH-01, HLTH-03]
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

    # Plan — Crowd Interaction

    ## Objective

    Implement the smallest complete vertical slice for Phase 07: **Crowd Interaction**.

    ## Tasks

    1. Build reaction controls and optimistic realtime feedback.
2. Build vibe-direction voting controls.
3. Create private secret-request submission and persistence.
4. Integrate reactions/votes/requests into ranking inputs.
5. Build Room Health metrics and member-coverage view.
6. Verify secret requests never appear in public realtime payloads.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: REACT-01, REACT-02, REACT-03, REQ-01, REQ-02, REQ-03, HLTH-01, HLTH-03.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
