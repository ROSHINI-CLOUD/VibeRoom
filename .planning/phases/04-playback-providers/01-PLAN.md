---
    phase: 04
    plan: 01
    name: 04-playback-providers
    status: pending
    requirements: [PLAY-01, PLAY-02, PLAY-03, PLAY-04, PLAY-05, SEC-03, SEC-04]
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

    # Plan — Playback + Providers

    ## Objective

    Implement the smallest complete vertical slice for Phase 04: **Playback + Providers**.

    ## Tasks

    1. Define MusicProviderAdapter and normalized Track model.
2. Implement seed/demo provider first; wire optional real provider separately.
3. Build host player controller and authoritative playback state.
4. Mirror track/progress state on member devices without audio.
5. Validate provider payloads and handle unavailable tracks.
6. Ensure server-only provider credentials are never bundled.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: PLAY-01, PLAY-02, PLAY-03, PLAY-04, PLAY-05, SEC-03, SEC-04.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
