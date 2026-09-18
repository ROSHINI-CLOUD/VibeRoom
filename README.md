# VibeRoom

**AI DJ for friend groups.** VibeRoom learns each person's music taste, creates a shared room profile, lets everyone influence the vibe in real time, and continuously chooses what should play next while balancing the group fairly.

This repository starts as a planning-first, AI-agent-friendly build pack. The product and engineering decisions are intentionally explicit so Claude Code, Codex, Gemini CLI, or a human team can continue implementation without reconstructing context from chat.

## Product in one paragraph

A host creates a room and friends join by QR/code. Each person completes a fast taste calibration (languages, artists, quick song reactions, current mood, energy, and discovery preference). One host device plays the audio; every other phone is a synchronized live controller. Reactions, vibe-direction votes, secret requests, fairness, and VibeBridge continuously influence the AI DJ. Smart Lyrics adds synchronized lyrics, translation, meaning, and lyric moments.

## MVP pillars

1. **30-second Taste Calibration** — learn enough to start without a long questionnaire.
2. **Realtime Group Room** — join, presence, reactions, room state, host controls.
3. **AI DJ** — score candidate tracks and choose the next best group song.
4. **Fairness Engine** — avoid one person's taste dominating the room.
5. **VibeBridge** — move between tastes/moods gradually instead of abrupt genre jumps.
6. **Secret Requests** — private wishes satisfied when they naturally fit.
7. **Smart Lyrics** — synced lyrics with translation/explanation and saved lyric moments.
8. **Taste DNA + Room Health** — understandable, shareable explanations of personal/group taste.

## Deliberate MVP constraint

Only the **host device outputs audio**. Member phones synchronize the experience, not speaker playback. Multi-device audio synchronization is deferred because browser autoplay, buffering, device-clock drift, and acoustic echo are high-risk for a hackathon MVP.

## Recommended stack

- React + Vite + TypeScript
- Tailwind CSS
- Supabase Postgres + Auth + Realtime Broadcast + Presence
- Supabase Edge Functions for AI/provider calls and secrets
- TanStack Query for server state
- Zod for runtime validation
- Vitest + React Testing Library + Playwright
- Vercel for frontend deployment

See `docs/05-TECHNICAL-ARCHITECTURE.md` for the rationale.

## Start here

### Human / team
1. Read `.planning/PROJECT.md`
2. Read `docs/01-PRD.md`
3. Read `.planning/ROADMAP.md`
4. Start Phase 1 in `.planning/phases/01-foundation/01-PLAN.md`

### AI coding agent
1. Read `AGENTS.md`
2. Read `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/STATE.md`
3. Read the active phase `CONTEXT.md` and plan
4. Execute one plan at a time
5. Run verification before marking anything complete
6. Update `.planning/STATE.md` and write a phase/plan summary

## Repository map

```text
VibeRoom/
├── .planning/              # GSD-style durable project memory
├── docs/                   # Product + engineering source of truth
├── AGENTS.md               # Shared instructions for all coding agents
├── CLAUDE.md               # Claude Code-specific operating instructions
├── CODEX.md                # Codex-specific operating instructions
├── GEMINI.md               # Gemini CLI-specific operating instructions
├── CONTRIBUTING.md
├── SECURITY.md
├── .env.example
├── .gitignore
└── README.md
```

## GSD workflow

This project uses the `.planning/` artifact model: `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, configuration, research, and phase-specific plans. The core rule is simple: **files on disk are the persistent context; chat history is not.**

Before a new implementation session, refresh from `.planning/STATE.md` and the active phase plan.

## Product/legal note

VibeRoom is designed with a `MusicProviderAdapter` boundary. Do not make the app depend on unauthorized stream extraction or downloading. Use providers and content for which the project has permission. Lyrics must also be handled according to the source's terms and attribution/usage requirements.

## Status

Planning pack complete. Implementation has not started yet.
