# Type Alias: IDcsaReeferEvent

> **IDcsaReeferEvent** = \{ `metadata`: [`IDcsaReeferEventMetadataActive`](../interfaces/IDcsaReeferEventMetadataActive.md); `payload`: [`IDcsaReeferPayload`](IDcsaReeferPayload.md); \} \| \{ `metadata`: [`IDcsaReeferEventMetadataRetraction`](../interfaces/IDcsaReeferEventMetadataRetraction.md); `payload?`: `never`; \}

Reefer event.

Source: `reeferEvent` schema in the DCSA Event Domain (v3.1.0).

Retraction rule: if `metadata.retractedEventID` is set, `payload` MUST NOT be present.

## Union Members

### Type Literal

\{ `metadata`: [`IDcsaReeferEventMetadataActive`](../interfaces/IDcsaReeferEventMetadataActive.md); `payload`: [`IDcsaReeferPayload`](IDcsaReeferPayload.md); \}

#### metadata

> **metadata**: [`IDcsaReeferEventMetadataActive`](../interfaces/IDcsaReeferEventMetadataActive.md)

Event metadata.

#### payload

> **payload**: [`IDcsaReeferPayload`](IDcsaReeferPayload.md)

Event payload.

***

### Type Literal

\{ `metadata`: [`IDcsaReeferEventMetadataRetraction`](../interfaces/IDcsaReeferEventMetadataRetraction.md); `payload?`: `never`; \}

#### metadata

> **metadata**: [`IDcsaReeferEventMetadataRetraction`](../interfaces/IDcsaReeferEventMetadataRetraction.md)

Retraction metadata.

#### payload?

> `optional` **payload?**: `never`

Must not be present for retractions.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
