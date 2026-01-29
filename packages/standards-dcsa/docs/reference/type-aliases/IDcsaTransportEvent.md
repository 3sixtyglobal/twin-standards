# Type Alias: IDcsaTransportEvent

> **IDcsaTransportEvent** = \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md); \} \| \{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

The `TransportEvent` is a specialized event to handle all events related to transportation.

Source: `transportEvent` schema in the DCSA Event Domain (v3.1.0).

## Type Declaration

\{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md); \}

### metadata

> **metadata**: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`

Event metadata (eventType = TRANSPORT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`TRANSPORT`](../variables/DcsaEventTypes.md#transport)

### payload

> **payload**: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md)

Business attributes related to the `TransportEvent`.

\{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

### metadata

> **metadata**: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`

Retraction metadata (eventType = TRANSPORT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`TRANSPORT`](../variables/DcsaEventTypes.md#transport)

### payload?

> `optional` **payload**: `never`

Retractions do not carry payloads.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
