# Interface: IDcsaBaseIoTEvent

Base IoT event attributes.

Source: `baseIoTEvent` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### eventDateTime

> **eventDateTime**: `string`

Local date-time when the event happened.

***

### eventClassifierCode

> **eventClassifierCode**: `"ACT"`

IoT events are always "ACT".

***

### iotEventTypeCode

> **iotEventTypeCode**: `"DETC"`

IoT event type code.

***

### iotEventCode

> **iotEventCode**: `"DRO"`

IoT event code.

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
