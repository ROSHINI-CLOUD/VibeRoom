# AI DJ Engine

## Principle

Recommendation must be inspectable. Use a deterministic score with normalized components.

## Candidate score v1

```text
score =
  0.30 * group_fit
+ 0.15 * current_vibe_fit
+ 0.15 * transition_fit
+ 0.10 * discovery_fit
+ 0.10 * recent_reaction_fit
+ 0.10 * fairness_adjustment
+ 0.10 * request_fit
- repetition_penalty
- hard_constraint_penalties
```

Weights are starting hypotheses, not sacred constants.

## Candidate pipeline

1. get 20–100 candidates from provider/seed catalog;
2. remove unavailable/blocked/recently-overplayed tracks;
3. derive features;
4. score against each member;
5. aggregate group fit;
6. apply fairness/request/transition modifiers;
7. enforce group-fit floor;
8. return top candidates + score facts;
9. choose next and keep shallow queue.

## Explanation

The explanation layer gets structured facts such as:

```json
{
  "groupFit": 0.88,
  "energyMatch": 0.91,
  "transition": "moves toward English pop while preserving high energy",
  "fairness": "improves coverage for member-3",
  "discovery": 0.42
}
```

It must not be told secret-request identity/details unless generating requester-private UI.

## Testing

Test invariants:
- increasing a positive component cannot lower score if all else fixed;
- repetition penalty lowers repeated candidates;
- unavailable candidates are never selected;
- fairness cannot bypass hard group-fit floor;
- explanation facts match selected candidate.
