# Interface: IDcsaBaseReeferEvent

Base reefer event attributes.

Source: `baseReeferEvent` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### eventDateTime

> **eventDateTime**: `string`

Local date-time when the event happened.

***

### eventClassifierCode

> **eventClassifierCode**: `"ACT"`

Reefer events are always "ACT".

***

### reeferEventTypeCode

> **reeferEventTypeCode**: [`DcsaReeferEventTypeCodes`](../type-aliases/DcsaReeferEventTypeCodes.md)

Reefer event type code.

***

### measurements?

> `optional` **measurements**: [`IDcsaReeferMeasurements`](IDcsaReeferMeasurements.md)

Measured reefer values (conditioned by event type).

***

### setpoints?

> `optional` **setpoints**: [`IDcsaReeferSetpoint`](IDcsaReeferSetpoint.md)

Reefer setpoint values (conditioned by event type).

***

### geoLocation?

> `optional` **geoLocation**: `unknown`

Geo location.

Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.

***

### equipmentReference

> **equipmentReference**: `string`

Equipment reference.

***

### relatedDocumentReferences?

> `optional` **relatedDocumentReferences**: [`IDcsaRelatedDocumentReference`](IDcsaRelatedDocumentReference.md)[]

Related document references.
