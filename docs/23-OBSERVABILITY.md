# Observability

## What to log

Structured, minimal:
- request/event ID;
- room ID hashed/redacted where appropriate;
- operation name;
- latency;
- result/error code;
- provider name;
- retry count.

## Do not log

- secret keys;
- auth tokens;
- full secret requests;
- unnecessary full lyrics;
- raw personal taste payloads in production logs.

## Useful demo metrics

- join failures;
- realtime reconnects;
- recommendation latency;
- provider failure rate;
- lyrics hit rate;
- AI explanation latency.

## Debug panel

A development-only room debug view may show score breakdown and event status. Ensure it is not accidentally exposed in production.
