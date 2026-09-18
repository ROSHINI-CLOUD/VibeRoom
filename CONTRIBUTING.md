# Contributing

## Branches

- `main` — stable integration branch
- `phase/<nn>-<slug>` — recommended for phase work
- `fix/<slug>` — focused repairs

## Before a PR / merge

Run the repository's available equivalents of:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:e2e
npm run build
```

If a command is not yet present because the project is in an earlier phase, do not fabricate success; document which checks exist.

## Pull request expectations

Include:
- requirement IDs addressed;
- screenshots for UI changes;
- migration notes for DB changes;
- security/RLS impact;
- tests run;
- known limitations.

## Planning updates

A completed plan must update `.planning/STATE.md` and add its summary beside the plan.
