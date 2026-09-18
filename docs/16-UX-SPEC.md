# UX Specification

## Navigation

Primary surfaces:
- Home
- Join/Create Room
- Live Room
- Lyrics
- Taste DNA

Avoid a complex desktop sidebar for the hackathon. Mobile-first bottom navigation or contextual navigation is enough.

## Onboarding

Target: 30–45 seconds.
- one decision type per screen;
- visible progress;
- skip optional depth;
- large touch targets;
- no long text fields besides artist search.

## Live Room hierarchy

1. Now playing
2. reaction row
3. vibe controls
4. room pulse / who is here
5. queue/why
6. secondary drawer: lyrics, health, secret request

## Host UI

Host gets additional controls without changing member layout dramatically.

## Realtime feedback

When tapping a reaction:
- immediate local press animation;
- optimistic count/pulse;
- subtle delivery status only if failed.

## Empty/error states

Every external dependency has a human-readable recovery action.

## Responsive targets

Prioritize common phone widths and one desktop/laptop host view. Avoid layouts that require hover.
