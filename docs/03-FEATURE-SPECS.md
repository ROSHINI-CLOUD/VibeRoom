# Feature Specifications

## Taste Calibration
Inputs: language weights, favorite artists, track reactions, context, energy, discovery.
Output: normalized taste profile plus confidence.

## Taste DNA
Human-readable summary derived from profile. Must distinguish stable preference from session preference.

## AI DJ
Ranks candidate tracks. The LLM may generate natural-language explanation from structured facts but does not choose arbitrarily.

## Reactions
Love, More Like This, Okay, Dislike. Repeated rapid taps should be deduplicated/debounced per user/track.

## Vibe Controls
More Energy, Chill, Different, Surprise. Aggregate into current target-vibe signal.

## Fairness
Rolling coverage per member. Temporary weight boost is capped and decays after good matches.

## VibeBridge
When target vibe differs significantly from current vibe, reward candidates that move a bounded step toward target.

## Secret Requests
Private. Request can be explicit track, artist, or intent. Ranking gets a hidden boost only when fit conditions are acceptable.

## Room Health
Show understandable dimensions: satisfaction, fairness, energy, discovery. Do not expose fake precision; rounded scores/bands are acceptable.

## Smart Lyrics
Use sourced lyrics only. No generated replacement lyrics. Synced if timestamps exist, plain fallback otherwise.

## Lyric Moments
Store track identity, lyric line/reference permitted by source policy, timestamp, optional private note.
