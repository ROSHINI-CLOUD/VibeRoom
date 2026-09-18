# VibeBridge

## Goal

Transition smoothly between current room vibe and a desired target.

## Vibe vector

Candidate dimensions can include:
- energy;
- danceability/tempo class where available;
- language;
- style/genre embeddings/tags;
- mood descriptors;
- familiarity/discovery;
- acoustic/electronic axis.

## Bridge score

A good bridge track:
1. is not too far from current track/room vibe;
2. moves measurably toward target;
3. maintains acceptable group fit.

Conceptually:

```text
progress = distance(current,target) - distance(candidate,target)
jump_penalty = max(0, distance(current,candidate) - allowed_step)
bridge_score = progress - jump_penalty
```

## Multi-track target

Maintain:
- target vibe;
- target horizon (e.g. 2–4 songs);
- current progress.

Recalculate after every track/reaction.

## User experience

When group selects “Chill down,” UI can show:
“Transitioning over the next few tracks” rather than promising an exact fixed queue.
