# PROJECT — VibeRoom

## Vision

VibeRoom is an AI-powered group music experience where a room of friends can quickly teach the system their tastes, influence the vibe together, and let an explainable recommendation engine choose the next track without one person controlling everything.

## Core value

**Make group music selection feel fair, effortless, social, and alive.**

## Target scenario

A small friend group at a hostel, college event, hangout, drive, coding session, or party wants music everyone can enjoy. One device is connected to the speaker. Friends join the room from their phones and influence what happens next.

## Primary users

- Host: creates room, connects playback device, controls session-level actions.
- Member: joins room, calibrates taste, reacts, votes on vibe direction, makes secret requests.
- Demo judge/new user: should understand the product within ~30 seconds.

## Core product loop

```text
Join room
→ fast taste calibration
→ initial personal taste model
→ combined room model
→ host starts playback
→ members react / steer vibe / make secret requests
→ ranking engine scores candidate tracks
→ fairness + VibeBridge modify selection
→ next song plays
→ models update
→ repeat
```

## Product principles

1. **Group-first, not playlist-first.**
2. **Explainable AI over magic black box.**
3. **Realtime interaction over synchronized multi-speaker audio.**
4. **Fast onboarding over long preference forms.**
5. **Deterministic ranking core; AI assists interpretation and explanation.**
6. **Fairness is a feature, not an afterthought.**
7. **Integrations are replaceable adapters.**
8. **Mobile-first during the room; desktop-friendly for host/demo.**

## MVP scope

### In
- guest-friendly join flow;
- room creation + QR/code;
- taste onboarding;
- personal Taste DNA;
- room profile;
- host-only playback abstraction;
- realtime presence + reactions;
- vibe-direction voting;
- candidate ranking;
- fairness adjustment;
- VibeBridge;
- secret requests;
- “Why this song?” explanation;
- Room Health;
- Smart Lyrics with synchronized display when available;
- lyrics translate/explain action;
- lyric moments;
- deployment + demo seed data/fallback.

### Out
- synchronized loudspeaker playback across phones;
- native mobile apps;
- social follower graph;
- full music catalog ingestion;
- scraping/downloading copyrighted audio without authorization;
- payments;
- public creator marketplace;
- production-scale recommendation ML training pipeline;
- voice assistant;
- live microphone crowd sensing.

## Success criteria

For a 3–5 person demo:
- all members can join the same room;
- each can finish onboarding in roughly 30–45 seconds;
- online presence and reactions update live;
- host sees and plays the same authoritative current track;
- recommendation decision can be explained;
- fairness changes rankings when a member is underserved;
- secret request can influence a later track;
- lyrics view works with a supported track;
- app remains usable on common mobile viewport sizes;
- deployed demo works without local infrastructure management.

## Constraints

- Hackathon team is relatively new to infrastructure.
- Avoid self-managed servers.
- Prefer managed services and simple operational surface area.
- Build for correctness and demo reliability before breadth.
- Music/lyrics integrations must respect provider terms and permissions.

## Technical direction

React/Vite/TypeScript frontend, Supabase managed backend (Postgres/Auth/Realtime/Edge Functions), Vercel deployment, provider adapters, deterministic recommendation core, optional LLM calls from server-side functions.

## Non-goals

VibeRoom does not need to replace Spotify/JioSaavn/Apple Music. The differentiator is group intelligence and interaction.
