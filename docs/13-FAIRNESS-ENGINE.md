# Fairness Engine

## Problem

Average group preference can repeatedly favor the majority and leave one person unserved.

## Rolling coverage

For each member, maintain recent-match quality across a short window of played tracks.

Example:
`coverage_u = weighted_mean(personal_fit(track_i, user), recency_weights)`

## Fairness debt

`debt_u = max(0, room_target_coverage - coverage_u)`

Aggregate candidate fairness adjustment from how well the candidate serves members with debt.

## Guardrail

Fairness is **not** “play something everyone else hates because one person likes it.” Candidate must meet a minimum group-fit threshold.

## Decay

After a member receives strong matches, debt falls naturally.

## Explainability

Public explanation may say:
“Balances the room after the last few tracks leaned toward a different taste.”

Do not reveal private/secret request content.

## Tests

- minority member eventually gains influence;
- no starvation;
- no extreme low-group-fit selection;
- boost decreases after coverage improves.
