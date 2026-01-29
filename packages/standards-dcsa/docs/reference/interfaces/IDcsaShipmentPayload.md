# Interface: IDcsaShipmentPayload

Shipment payload.

Source: `shipmentPayload` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaBaseEvent`](IDcsaBaseEvent.md)

## Properties

### eventDateTime

> **eventDateTime**: `string`

The local date and time when the event took place (or will take place).
Format: ISO 8601 date-time.

#### Inherited from

[`IDcsaBaseEvent`](IDcsaBaseEvent.md).[`eventDateTime`](IDcsaBaseEvent.md#eventdatetime)

***

### eventClassifierCode

> **eventClassifierCode**: `"ACT"`

Shipment events are always "ACT".

#### Overrides

[`IDcsaBaseEvent`](IDcsaBaseEvent.md).[`eventClassifierCode`](IDcsaBaseEvent.md#eventclassifiercode)

***

### shipmentEventTypeCode

> **shipmentEventTypeCode**: [`DcsaShipmentEventTypeCodes`](../type-aliases/DcsaShipmentEventTypeCodes.md)

Shipment event type code.

***

### documentTypeCode

> **documentTypeCode**: [`DcsaDocumentTypeCodes`](../type-aliases/DcsaDocumentTypeCodes.md)

Document type code.
Identifies what kind of document `documentReference` points to.

***

### documentReference

> **documentReference**: `string`

Reference for the document identified by `documentTypeCode`.
Note: `documentReference` is not necessarily globally unique without `documentTypeCode`.

***

### reason?

> `optional` **reason**: `string`

Free-text field that can be used to explain why a specific ShipmentEvent was sent.

***

### relatedDocumentReferences?

> `optional` **relatedDocumentReferences**: [`IDcsaRelatedDocumentReference`](IDcsaRelatedDocumentReference.md)[]

Related documents.

***

### references?

> `optional` **references**: [`IDcsaReference`](IDcsaReference.md)[]

Additional references.
