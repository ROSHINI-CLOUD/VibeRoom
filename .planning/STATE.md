# STATE — VibeRoom

## Project reference

Core value: group music that feels fair, social, explainable, and adaptive.

## Current position

- Milestone: MVP / Hackathon Demo
- Phase: 01 — Foundation
- Plan: 01
- Status: Ready to implement
- Progress: 0/10 phases

## Last activity

2026-09-18 — Initial GSD-style project planning pack created.

## Key decisions

1. Host-only audio for MVP; member devices are synchronized controllers.
2. Supabase is the managed backend/realtime platform.
3. Broadcast handles transient room events; Presence handles connected-member state.
4. Durable room/session facts live in Postgres.
5. Music and lyrics sources use adapter boundaries.
6. Ranking core is deterministic and explainable; LLM is not the sole recommender.
7. Fairness is bounded by minimum group-fit safeguards.
8. Smart Lyrics is the primary complementary platform feature.

## Active blockers

None for Phase 01.

## Risks to watch

- Provider availability/terms.
- Realtime authorization mistakes.
- Secret request privacy leakage.
- Over-scoping AI features.
- External API outage during demo.
- Trying to solve multi-device audio synchronization too early.

## Next action

Execute `.planning/phases/01-foundation/01-PLAN.md`.

## Session continuity

A fresh agent should read:
1. `AGENTS.md`
2. `.planning/PROJECT.md`
3. `.planning/REQUIREMENTS.md`
4. `.planning/ROADMAP.md`
5. this file
6. `.planning/phases/01-foundation/CONTEXT.md`
7. `.planning/phases/01-foundation/01-PLAN.md`
