# Product Requirements Document — VibeRoom

## Problem

Group music is usually controlled by the person holding the phone. Collaborative queues often become voting contests or chaotic requests. Existing recommendation products are mainly personalized for one listener, while real social settings need a system that continuously balances multiple tastes and the room's current energy.

## Product

VibeRoom is an AI DJ for groups. Every member briefly calibrates their taste, joins a shared live room, reacts to songs, steers the vibe, and can make private requests. The system continuously updates what the room wants and selects the next track using group fit, fairness, transition quality, novelty, and recent reactions.

## Core promise

**No one has to fight for the AUX.**

## User value

### Host
- starts music quickly;
- avoids manually taking requests;
- sees whether the room is happy;
- keeps control over session-level playback.

### Member
- is represented without repeatedly asking the host;
- can influence direction with one tap;
- can privately request a song/vibe;
- gets explanations for why music changes.

## MVP experience

1. Host creates room.
2. Friends join with QR/code.
3. Each does 30–45 second calibration.
4. VibeRoom creates Taste DNA and room profile.
5. Host begins playback.
6. Members react and steer vibe.
7. AI DJ ranks next tracks.
8. Fairness protects underserved members.
9. VibeBridge avoids jarring transitions.
10. Smart Lyrics provides synced lyrics + meaning/translation.

## Key differentiators

- multiplayer taste modeling;
- live learning from reactions;
- fairness, not majority-only voting;
- transition-aware “VibeBridge”;
- secret requests;
- explainable recommendation reasoning;
- Smart Lyrics as a useful standalone music surface.

## MVP metrics

- onboarding completion rate;
- median onboarding duration;
- room join success rate;
- realtime event success/reconnect rate;
- average members reacting per track;
- fraction of tracks with positive room response;
- fairness spread across members;
- secret request fulfillment rate;
- demo flow completion without manual recovery.

## Not MVP

See `.planning/PROJECT.md` non-goals.
