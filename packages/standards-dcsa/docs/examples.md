# Standards DCSA Examples

These snippets show how to register schemas and create a typed transport event payload for downstream validation.

## DcsaDataTypes

```typescript
import {
  DcsaDataTypes,
  DcsaEventTypes,
  DcsaTransportEventTypeCodes,
  type IDcsaTransportEvent
} from '@twin.org/standards-dcsa';

DcsaDataTypes.registerRedirects();
DcsaDataTypes.registerTypes();

const event: IDcsaTransportEvent = {
  eventType: DcsaEventTypes.Transport,
  transportEventTypeCode: DcsaTransportEventTypeCodes.Arrival,
  eventDateTime: '2026-03-09T10:00:00Z',
  eventCreatedDateTime: '2026-03-09T10:01:00Z'
};

console.log(event.transportEventTypeCode); // ARRI
```
