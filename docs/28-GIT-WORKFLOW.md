# Git Workflow

## Main rules

- `main` should remain buildable.
- Phase branch naming: `phase/NN-short-name`.
- Commit completed behaviors, not arbitrary time intervals.
- Never commit secrets.

## Suggested flow

```text
git checkout -b phase/01-foundation
...implement...
npm run check
git add ...
git commit -m "feat(core): scaffold VibeRoom foundation"
```

Merge after phase verification.

## Planning artifacts

Commit `.planning/` updates because they are project memory.

## Before merge

- diff review;
- requirement IDs checked;
- tests run;
- state/summary updated.
