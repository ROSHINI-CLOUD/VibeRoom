# GSD-style Workflow for This Repository

This project uses the `.planning/` artifact approach requested for GSD-style execution.

## Durable artifacts

- `PROJECT.md` — vision/context
- `REQUIREMENTS.md` — requirement contract
- `ROADMAP.md` — phases
- `STATE.md` — current position/decisions/blockers
- `config.json` — workflow configuration
- `research/` — stack/features/architecture/pitfalls
- `phases/<phase>/CONTEXT.md` — phase-specific context
- `phases/<phase>/01-PLAN.md` — executable plan
- `01-SUMMARY.md` — created after execution

## Execution loop

```text
read STATE
→ read active phase context
→ execute plan
→ verify observable behavior
→ write SUMMARY
→ update STATE
→ advance roadmap
```

## Rules

- Planning artifacts are committed to Git.
- Do not regenerate the full planning tree after code exists.
- Requirements should be marked done only after verification.
- Plans should point to observable outcomes, not vague “improve” tasks.
- A fresh coding agent should be able to resume from disk alone.

## Current entry point

`.planning/phases/01-foundation/01-PLAN.md`
