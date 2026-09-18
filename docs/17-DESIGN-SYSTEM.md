# Design System

## Direction

Premium dark, tactile, music-centric, restrained. Avoid generic neon/glass AI dashboards.

## Surfaces

Layered charcoal/graphite/blue-black backgrounds. Use semantic accent colors sparingly.

## Interaction physics

Pressable controls:
- 1px border;
- subtle inset top highlight;
- hard/darker bottom edge;
- small ambient shadow;
- active: `translateY(2px)` and reduced bottom edge;
- motion: 100–190 ms;
- no hover scaling.

Inputs:
- inset appearance;
- clear focus ring;
- sufficient contrast.

## Shape

Moderate corner radius. Do not make every object a pill.

## Type

Use a readable UI sans stack; emphasize track title, room state, and current action. Do not use tiny metadata text for essential information.

## Motion

Use motion to communicate:
- reaction pulse;
- room energy change;
- active lyric transition;
- queue change.

Support reduced motion.

## Components

- TrackCard
- ReactionBar
- VibeControl
- RoomMemberAvatar
- RoomHealthMeter
- TasteDNAChart
- LyricLine
- SecretRequestSheet
- JoinCodeCard
- ProviderStatusBanner
