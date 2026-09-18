# GEMINI.md

Follow `AGENTS.md`.

Use `.planning/` as the source of persistent context. Read the active phase plan before coding. Prefer narrow implementation steps, explicit validation, and testable domain functions. Do not replace deterministic recommendation logic with an LLM-only approach.

When working on UI, compare against `docs/16-UX-SPEC.md` and `docs/17-DESIGN-SYSTEM.md`. When working on data/realtime, review RLS and event authorization before implementation.
