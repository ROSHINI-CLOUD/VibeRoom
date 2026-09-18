# AI Agent Handbook

## Why this repository is verbose

AI coding agents perform better when product rules, architecture, acceptance criteria, and current state are durable files rather than implicit chat history.

## Session bootstrap

Read:
`AGENTS.md` → `.planning/PROJECT.md` → `REQUIREMENTS.md` → `STATE.md` → active phase context/plan → relevant docs.

## Task sizing

A task should fit comfortably in one focused context. Split work if it mixes unrelated architecture, UI, schema, and testing changes.

## Preferred pattern

1. inspect;
2. state assumptions;
3. implement;
4. validate;
5. review diff;
6. update state/summary.

## Delegation

Parallelize read-only research, test authoring, or isolated modules. Avoid concurrent editing of shared core files unless worktrees are intentionally configured.

## Never trust generated completion claims

An agent must run the checks. “Looks correct” is not verification.

## Documentation updates

Update the smallest authoritative document. Do not create duplicate specs that conflict.
