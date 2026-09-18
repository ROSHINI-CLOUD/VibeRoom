# CODEX.md

Follow `AGENTS.md`.

## Codex execution preferences

- Work from the active `.planning/phases/.../*-PLAN.md`.
- Make focused patches; avoid broad rewrites unless the plan explicitly calls for one.
- Run local checks after each coherent behavior.
- When code and docs conflict, stop expanding scope and align with `.planning/PROJECT.md` + `REQUIREMENTS.md`.
- Keep pure recommendation/fairness logic separate from React and Supabase so it can be tested quickly.
- Record completed work in `.planning/STATE.md` and a plan summary.

## Suggested task loop

Inspect → patch → typecheck → targeted tests → full relevant tests → diff review → docs/state update.
