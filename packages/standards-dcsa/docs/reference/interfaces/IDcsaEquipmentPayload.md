# Interface: IDcsaEquipmentPayload

Equipment payload.

Source: `equipmentPayload` schema in the DCSA Event Domain (v3.1.0).

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

> **eventClassifierCode**: [`DcsaEventClassifierCodeNoReq`](../type-aliases/DcsaEventClassifierCodeNoReq.md)

Event classifier code.

#### Overrides

[`IDcsaBaseEvent`](IDcsaBaseEvent.md).[`eventClassifierCode`](IDcsaBaseEvent.md#eventclassifiercode)

***

### equipmentEventTypeCode

> **equipmentEventTypeCode**: [`DcsaEquipmentEventTypeCodes`](../type-aliases/DcsaEquipmentEventTypeCodes.md)

Equipment event type code.

***

### emptyIndicatorCode

> **emptyIndicatorCode**: `string`

Indicates whether the equipment is empty or laden.
The authoritative schema references the shared `emptyIndicatorCode` from DCSA_DOMAIN.

***

### equipmentReference?

> `optional` **equipmentReference**: `string`

Equipment reference.
Typically the BIC ISO Container Identification Number where possible.

***

### ISOEquipmentCode?

> `optional` **ISOEquipmentCode**: `string`

ISO equipment code.

***

### isTransshipmentMove?

> `optional` **isTransshipmentMove**: `boolean`

Indicates transshipment move.

***

### eventLocation?

> `optional` **eventLocation**: `unknown`

When present, captures a location not tied to a TransportCall.
Kept as unknown since the schema references LOCATION_DOMAIN types.

***

### facilityTypeCode?

> `optional` **facilityTypeCode**: `string`

Facility type code.
Used to identify the role of the facility when an EquipmentEvent is not associated
with a TransportCall (e.g. stuffing/stripping contexts).

***

### relatedDocumentReferences?

> `optional` **relatedDocumentReferences**: [`IDcsaRelatedDocumentReference`](IDcsaRelatedDocumentReference.md)[]

Related documents.

***

### references?

> `optional` **references**: [`IDcsaReference`](IDcsaReference.md)[]

Additional references.
