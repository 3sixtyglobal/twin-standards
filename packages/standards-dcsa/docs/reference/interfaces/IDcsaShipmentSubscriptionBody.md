# Interface: IDcsaShipmentSubscriptionBody

Shipment subscription filters.

Source: `shipmentSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### shipmentEventTypeCodes? {#shipmenteventtypecodes}

> `optional` **shipmentEventTypeCodes**: [`DcsaShipmentEventTypeCodes`](../type-aliases/DcsaShipmentEventTypeCodes.md)[]

Shipment event type codes to filter by.

***

### documentTypeCodes? {#documenttypecodes}

> `optional` **documentTypeCodes**: [`DcsaDocumentTypeCodes`](../type-aliases/DcsaDocumentTypeCodes.md)[]

Document type codes to filter by.

***

### documentReference? {#documentreference}

> `optional` **documentReference**: `string`

Document reference to filter by.

***

### equipmentReference? {#equipmentreference}

> `optional` **equipmentReference**: `string`

Equipment reference to filter by.
