---
    phase: 10
    plan: 01
    name: 10-demo-deploy
    status: pending
    requirements: [QLT-04]
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

    # Plan — Demo + Deploy

    ## Objective

    Implement the smallest complete vertical slice for Phase 10: **Demo + Deploy**.

    ## Tasks

    1. Create production Supabase project config/migrations and verify RLS.
2. Deploy frontend to Vercel with production env separation.
3. Create seed/demo catalog and deterministic fallback room scenario.
4. Add demo reset utility that does not expose privileged credentials.
5. Run two consecutive 3–5-device rehearsals.
6. Prepare 4-minute demo script and failure fallback.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: QLT-04.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
