---
    phase: 08
    plan: 01
    name: 08-smart-lyrics
    status: pending
    requirements: [LYR-01, LYR-02, LYR-03, LYR-04, LYR-05, LYR-06, HLTH-02]
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

    # Plan — Smart Lyrics + Discovery

    ## Objective

    Implement the smallest complete vertical slice for Phase 08: **Smart Lyrics + Discovery**.

    ## Tasks

    1. Define LyricsProviderAdapter and cache model.
2. Implement LRCLIB-compatible lookup with required client identification and rate-limit handling.
3. Parse synced timestamps and highlight active line.
4. Fallback to plain lyrics when timestamps are absent.
5. Add translate/explain action using bounded excerpt server-side.
6. Implement Lyric Moments and Taste DNA visual surface.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: LYR-01, LYR-02, LYR-03, LYR-04, LYR-05, LYR-06, HLTH-02.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
