---
    phase: 03
    plan: 01
    name: 03-realtime-room
    status: pending
    requirements: [ROOM-01, ROOM-02, ROOM-03, ROOM-04, ROOM-05, ROOM-06, ROOM-07, SEC-01, SEC-02]
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

    # Plan — Rooms + Realtime

    ## Objective

    Implement the smallest complete vertical slice for Phase 03: **Rooms + Realtime**.

    ## Tasks

    1. Create rooms and room_members schema + migrations + RLS.
2. Implement short code and QR join flow.
3. Create private realtime topic convention per room.
4. Use Presence for connected members.
5. Use Broadcast for reactions/vibe transient events.
6. Persist authoritative room/session state and restore after refresh.
7. Add authorization tests for cross-room and host-only actions.

    ## Verification

    - Run typecheck/lint/build.
    - Run unit/integration/E2E tests relevant to changed behavior.
    - Manually smoke-test the phase's primary user flow.
    - Review secrets/RLS if the phase touches backend/realtime.
    - Compare observable behavior with requirement IDs: ROOM-01, ROOM-02, ROOM-03, ROOM-04, ROOM-05, ROOM-06, ROOM-07, SEC-01, SEC-02.

    ## Completion output

    Create `01-SUMMARY.md` beside this plan containing:
    - completed requirement IDs;
    - key files changed;
    - tests/checks run with result;
    - decisions made;
    - known limitations;
    - exact next phase/plan.
