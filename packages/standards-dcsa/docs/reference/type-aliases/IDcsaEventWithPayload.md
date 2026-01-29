# Type Alias: IDcsaEventWithPayload

> **IDcsaEventWithPayload** = \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaShipmentPayload`](../interfaces/IDcsaShipmentPayload.md); \} \| \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md); \} \| \{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md); \}

Event with payload (i.e., not a retraction).

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

Event payload.

\{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md); \}

### metadata

> **metadata**: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`

Event metadata (eventType = EQUIPMENT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`EQUIPMENT`](../variables/DcsaEventTypes.md#equipment)

### payload

> **payload**: [`IDcsaEquipmentPayload`](../interfaces/IDcsaEquipmentPayload.md)

Event payload.

\{ `metadata`: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`; `payload`: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md); \}

### metadata

> **metadata**: [`IDcsaEventMetadataActive`](IDcsaEventMetadataActive.md) & `object`

Event metadata (eventType = TRANSPORT).

#### Type Declaration

##### eventType

> **eventType**: *typeof* [`TRANSPORT`](../variables/DcsaEventTypes.md#transport)

### payload

> **payload**: [`IDcsaTransportPayload`](../interfaces/IDcsaTransportPayload.md)

Event payload.
