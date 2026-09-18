# AGENTS.md — VibeRoom AI Coding Contract

This file applies to **all coding agents** working in this repository.

## 1. Mission

Build VibeRoom as a reliable hackathon-ready web product: a group AI DJ that learns individual tastes, coordinates a live room, explains recommendations, balances fairness, and offers Smart Lyrics.

The product must remain understandable to users. Avoid adding features simply because an LLM can generate them.

## 2. Required reading order

Before making code changes:

1. `.planning/PROJECT.md`
2. `.planning/REQUIREMENTS.md`
3. `.planning/STATE.md`
4. `.planning/ROADMAP.md`
5. Active phase `CONTEXT.md`
6. Active phase `*-PLAN.md`
7. Relevant files in `docs/`

Do not rely on previous chat context if the files disagree.

## 3. Execution rules

- Work on **one phase/plan at a time**.
- Do not silently expand scope.
- Preserve the host-only audio architecture for MVP.
- Use Supabase Realtime **Broadcast** for transient room events and **Presence** for who is connected.
- Persist durable facts in Postgres; do not use Realtime events as the database.
- Keep AI/provider secrets server-side.
- Validate external/provider responses with Zod.
- Every external integration must sit behind an adapter.
- Prefer deterministic ranking code over “ask the LLM what song next.”
- LLM usage is for interpretation/explanations/translation support, not the sole ranking engine.
- Never log secrets, raw auth tokens, or unnecessary personal taste data.
- Accessibility and mobile behavior are acceptance criteria, not optional polish.

## 4. Definition of done for every task

A task is complete only when:

- acceptance criteria are implemented;
- types compile;
- lint passes;
- relevant unit/integration tests pass;
- changed flows are manually smoke-tested;
- no secret is exposed client-side;
- relevant docs are updated;
- `.planning/STATE.md` reflects the new position;
- a summary records what changed, tests run, known limitations, and follow-ups.

## 5. Git discipline

- Default branch: `main`
- Use phase branches when useful: `phase/03-realtime-room`
- Prefer small commits by completed behavior.
- Commit message examples:
  - `feat(room): add QR join flow`
  - `feat(ai-dj): score candidates with fairness boost`
  - `test(realtime): cover host handoff`
  - `docs(lyrics): document LRCLIB cache policy`
- Never commit `.env`, provider secrets, service-role/secret Supabase keys, downloaded copyrighted media, or generated dependency folders.

## 6. Quality boundaries

Do not:
- implement synchronized loudspeaker playback across phones in MVP;
- make the browser call LLM APIs directly with secret keys;
- trust a client-supplied host role;
- let any member emit privileged host events;
- use one giant React component for an entire room;
- make rankings depend solely on opaque LLM text;
- block the main room UI on optional AI explanations;
- invent provider API fields.

## 7. Architecture boundaries

Expected modules:

```text
src/
  app/
  features/
    onboarding/
    rooms/
    player/
    reactions/
    lyrics/
    discovery/
    taste/
  lib/
    supabase/
    realtime/
    providers/
    ai/
    validation/
  domain/
    recommendation/
    fairness/
    vibebridge/
```

Keep domain ranking logic pure and testable where possible.

## 8. UI direction

Dark, premium, tactile, intentional. Avoid glassmorphism overload, gradients everywhere, glow-heavy “AI SaaS” visuals, excessive pills, and hover scaling.

Controls should feel pressable:
- subtle border;
- slight raised state;
- `translateY(2px)` on press;
- fast 100–190 ms motion;
- clear focus states.

## 9. When uncertain

Choose the smallest reversible implementation that satisfies the requirement. Record non-obvious decisions in `docs/decisions/` and `.planning/STATE.md`.

If an implementation assumption could affect security, provider legality, data ownership, or architecture, do not hide it. Document it.
