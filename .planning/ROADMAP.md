# ROADMAP — VibeRoom MVP

Milestone: **MVP / Hackathon Demo**

| Phase | Goal | Status |
|---:|---|---|
| 01 | Foundation and project shell | Pending |
| 02 | Taste onboarding and Taste DNA | Pending |
| 03 | Rooms, membership, realtime presence/events | Pending |
| 04 | Host playback and provider adapter | Pending |
| 05 | Deterministic AI DJ ranking core | Pending |
| 06 | Fairness + VibeBridge | Pending |
| 07 | Crowd reactions, secret requests, Room Health | Pending |
| 08 | Smart Lyrics + personal discovery surfaces | Pending |
| 09 | UX polish, accessibility, resilience, test hardening | Pending |
| 10 | Deployment, seed data, hackathon demo rehearsal | Pending |

## Phase 01 — Foundation

**Goal:** Establish a strict, testable React app and managed backend contract.

Requirements: FND-01..04

Success:
1. App boots locally and production build succeeds.
2. Env validation distinguishes browser-safe vs secret values.
3. Test/lint/typecheck scripts are operational.
4. Base navigation and error boundary exist.

## Phase 02 — Taste onboarding

**Goal:** A new member can produce an initial taste profile in under a minute.

Requirements: ONB-01..07

Success:
1. Complete onboarding end-to-end.
2. Result produces typed taste vector/profile.
3. User can confirm/correct summary.
4. Profile persists.

## Phase 03 — Rooms + Realtime

**Goal:** Multiple devices can share one authoritative room.

Requirements: ROOM-01..07, SEC-01..02

Success:
1. Host creates room/code/QR.
2. Members join and Presence is visible.
3. Reactions/vibe events Broadcast correctly.
4. Refresh restores durable state.
5. RLS blocks unrelated room access.

## Phase 04 — Playback + provider boundary

**Goal:** Host can play tracks while member devices mirror state.

Requirements: PLAY-01..05, SEC-03..04

Success:
1. Provider adapter contract exists.
2. Host-only control is enforced.
3. Member UI mirrors canonical track.
4. Provider failure has fallback behavior.

## Phase 05 — AI DJ Core

**Goal:** Choose next tracks with transparent deterministic scoring.

Requirements: REC-01..05

Success:
1. Candidate scoring is unit-tested.
2. Score breakdown is inspectable.
3. Shallow queue updates after new signals.
4. Explanation is grounded in score facts.

## Phase 06 — Fairness + VibeBridge

**Goal:** Keep the group balanced and transitions musically coherent.

Requirements: FAIR-01..03, BRDG-01..03

Success:
1. Underserved member changes ranking in controlled tests.
2. Minimum group-fit guard prevents extreme choices.
3. VibeBridge identifies useful intermediate candidates.
4. Multi-track target can re-plan after reactions.

## Phase 07 — Crowd interaction

**Goal:** Make every member's phone meaningfully influence the live room.

Requirements: REACT-01..03, REQ-01..03, HLTH-01, HLTH-03

Success:
1. Reactions affect live ranking inputs.
2. Vibe-direction votes influence target vibe.
3. Secret requests remain private.
4. Room Health updates from session state.

## Phase 08 — Smart Lyrics + discovery

**Goal:** Add a second strong platform surface beyond group DJing.

Requirements: LYR-01..06, HLTH-02

Success:
1. Synced/plain lyric display works.
2. Translation/meaning actions are safe and bounded.
3. Lyric Moments save successfully.
4. Taste DNA is visually understandable.

## Phase 09 — Quality + UX

**Goal:** Make MVP reliable and demo-grade across phones.

Requirements: QLT-01..03, QLT-05, SEC-05

Success:
1. Core E2E flows pass.
2. Mobile viewport issues resolved.
3. Accessibility baseline passes.
4. Failure/reconnect states are intentional.

## Phase 10 — Deploy + demo

**Goal:** Ship a stable public demo with graceful external-service fallback.

Requirements: QLT-04 + all MVP acceptance criteria

Success:
1. Vercel production deploy succeeds.
2. Supabase production policies verified.
3. Demo seed room/provider fallback works.
4. 3–5-person rehearsal succeeds twice consecutively.
5. Pitch flow can be demonstrated in under 4 minutes.
