---
    phase: 09
    plan: 01
    name: 09-quality-ux
    status: pending
    requirements: [QLT-01, QLT-02, QLT-03, QLT-05, SEC-05]
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

    # Plan — Quality + UX

    ## Objective

    Implement the smallest complete vertical slice for Phase 09: **Quality + UX**.

    ## Tasks

    1. Run mobile-first UX audit across core flows.
2. Add/complete Playwright tests for create/join/react/host/lyrics.
3. Add reconnect, provider-error, empty-state, and offline-ish handling.
4. Audit keyboard/focus/contrast/reduced-motion behavior.
5. Document data retention/minimization and verify logging.
6. Fix performance hot spots and unnecessary realtime subscriptions.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: QLT-01, QLT-02, QLT-03, QLT-05, SEC-05.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
