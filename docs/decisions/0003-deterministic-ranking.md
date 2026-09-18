# ADR 0003 — Deterministic ranking core

Status: Accepted

## Decision
Next-track ranking is based on typed, inspectable score components. LLM output may assist explanations and language interpretation but is not the sole recommender.

## Why
Testing, reliability, latency, and explainability.

## Consequence
Feature engineering and weights are explicit and can later be tuned/replaced by learned models.
