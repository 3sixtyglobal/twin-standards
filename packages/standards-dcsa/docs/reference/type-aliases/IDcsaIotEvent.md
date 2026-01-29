# Type Alias: IDcsaIotEvent

> **IDcsaIotEvent** = \{ `metadata`: [`IDcsaIotEventMetadataActive`](../interfaces/IDcsaIotEventMetadataActive.md); `payload`: [`IDcsaIotPayload`](IDcsaIotPayload.md); \} \| \{ `metadata`: [`IDcsaIotEventMetadataRetraction`](../interfaces/IDcsaIotEventMetadataRetraction.md); `payload?`: `never`; \}

IoT event.

Source: `iotEvent` schema in the DCSA Event Domain (v3.1.0).

Retraction rule: if `metadata.retractedEventID` is set, `payload` MUST NOT be present.

## Type Declaration

\{ `metadata`: [`IDcsaIotEventMetadataActive`](../interfaces/IDcsaIotEventMetadataActive.md); `payload`: [`IDcsaIotPayload`](IDcsaIotPayload.md); \}

### metadata

> **metadata**: [`IDcsaIotEventMetadataActive`](../interfaces/IDcsaIotEventMetadataActive.md)

Event metadata.

### payload

> **payload**: [`IDcsaIotPayload`](IDcsaIotPayload.md)

Event payload.

\{ `metadata`: [`IDcsaIotEventMetadataRetraction`](../interfaces/IDcsaIotEventMetadataRetraction.md); `payload?`: `never`; \}

### metadata

> **metadata**: [`IDcsaIotEventMetadataRetraction`](../interfaces/IDcsaIotEventMetadataRetraction.md)

Retraction metadata.

### payload?

> `optional` **payload**: `never`

Must not be present for retractions.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
