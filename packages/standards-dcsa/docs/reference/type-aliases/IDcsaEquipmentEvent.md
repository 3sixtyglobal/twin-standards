# Type Alias: IDcsaEquipmentEvent

> **IDcsaEquipmentEvent** = \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md); \} \| \{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

The `EquipmentEvent` is a specialized event to handle all events related to equipment (containers).

Source: `equipmentEvent` schema in the DCSA Event Domain (v3.1.0).

## Type Declaration

\{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md); \}

### metadata

> **metadata**: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`

Event metadata (eventType = EQUIPMENT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`EQUIPMENT`](../variables/DcsaEventTypes.md#equipment)

### payload

> **payload**: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md)

Business attributes related to the `EquipmentEvent`.

\{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

### metadata

> **metadata**: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`

Retraction metadata (eventType = EQUIPMENT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`EQUIPMENT`](../variables/DcsaEventTypes.md#equipment)

### payload?

> `optional` **payload**: `never`

Retractions do not carry payloads.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
