# CLAUDE.md

Follow `AGENTS.md` as the primary contract.

## Claude Code operating mode

1. Begin each session by reading:
   - `AGENTS.md`
   - `.planning/PROJECT.md`
   - `.planning/STATE.md`
   - active phase plan
2. Inspect existing code before proposing replacements.
3. Use subagents only when work can be cleanly separated (research, tests, UI audit, schema review).
4. Keep the main context focused on orchestration, architecture, and integration.
5. After implementation, run verification and update GSD artifacts.

## Loop engineering

For each task:

```text
Understand acceptance criteria
→ inspect relevant code
→ implement smallest correct slice
→ typecheck/lint/test
→ run targeted UI/API smoke test
→ inspect failures
→ fix
→ repeat until criteria pass
→ update planning state + summary
```

Do not declare success after writing code without running the checks available in the repository.

## Delegation guidance

Good delegation:
- “Write unit tests for pure fairness score function defined in X”
- “Review Supabase RLS migration for privilege escalation”
- “Audit mobile layout against docs/16-UX-SPEC.md”

Bad delegation:
- “Build the whole app”
- parallel edits to the same file set without worktree/isolation
- delegating architectural decisions before reading project docs

## GSD compatibility

Treat `.planning/` as durable project memory. Do not delete or regenerate it wholesale. Update only the files affected by the work performed.
