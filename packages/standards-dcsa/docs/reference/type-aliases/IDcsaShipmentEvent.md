# Type Alias: IDcsaShipmentEvent

> **IDcsaShipmentEvent** = \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaShipmentPayload`](../interfaces/IDcsaShipmentPayload.md); \} \| \{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

The `ShipmentEvent` is a specialized event to handle all events related to documentation.

Source: `shipmentEvent` schema in the DCSA Event Domain (v3.1.0).

## Type Declaration

\{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaShipmentPayload`](../interfaces/IDcsaShipmentPayload.md); \}

### metadata

> **metadata**: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`

Event metadata (eventType = SHIPMENT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`SHIPMENT`](../variables/DcsaEventTypes.md#shipment)

### payload

> **payload**: [`IDcsaShipmentPayload`](../interfaces/IDcsaShipmentPayload.md)

Business attributes related to the `ShipmentEvent`.

\{ `metadata`: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`; `payload?`: `never`; \}

### metadata

> **metadata**: [`IDcsaEventMetadataRetraction`](IDcsaEventMetadataRetraction.md) & `object`

Retraction metadata (eventType = SHIPMENT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`SHIPMENT`](../variables/DcsaEventTypes.md#shipment)

### payload?

> `optional` **payload**: `never`

Retractions do not carry payloads.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
