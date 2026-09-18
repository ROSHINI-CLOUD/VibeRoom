# Performance

## Priorities

- fast first room load;
- responsive reaction controls;
- no unnecessary rerender storm from realtime;
- queue/recommendation computation bounded.

## Practices

- subscribe only to active room channel;
- clean up subscriptions on room exit;
- memoize heavy derived visualizations;
- keep Presence payload tiny;
- debounce non-critical updates;
- cache provider/lyrics metadata;
- lazy-load secondary surfaces such as deep lyrics/Taste DNA views if bundle grows.

## Realtime

Do not send high-frequency progress ticks from every client. Host may send occasional authoritative state hints; member progress can interpolate locally from a start timestamp.

## Recommendation

Score bounded candidate sets, not the entire catalog.
