# Taste Model

## Layers

### Stable taste
Languages, artists, general styles/features.

### Session taste
Current activity, desired energy, discovery tolerance, recent reactions.

Keep them separate so one party does not permanently rewrite a user's profile.

## Vector concept

```text
languages: { ta: .9, en: .7, hi: .3 }
energy: .82
discovery: .55
features: {
  electronic: .8,
  melodic: .6,
  cinematic: .7,
  hiphop: .5
}
artistAffinity: ...
```

## Calibration signals

Order of value:
1. actual track reactions;
2. selected artists;
3. language choices;
4. contextual sliders;
5. inferred descriptors.

## Live learning

Use bounded incremental updates. A single reaction should not radically rewrite stable taste.

## Confidence

Track confidence per dimension. Low-confidence dimensions can be explored more.

## Privacy

Do not infer or store sensitive traits unrelated to music. Taste labels should describe music, not personality diagnoses.
