# Interface: IDcsaTransportCallSubscriptionBody

Transport call subscription filters.

Source: `transportCallSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extended by

- [`IDcsaEquipmentSubscriptionBody`](IDcsaEquipmentSubscriptionBody.md)
- [`IDcsaTransportSubscriptionBody`](IDcsaTransportSubscriptionBody.md)

## Properties

### transportCallReference? {#transportcallreference}

> `optional` **transportCallReference?**: `string`

Filters to only receive events for a specific transport call.

***

### vesselIMONumber? {#vesselimonumber}

> `optional` **vesselIMONumber?**: `string`

Filters to only receive events for a specific vessel IMO number.

***

### carrierExportVoyageNumber? {#carrierexportvoyagenumber}

> `optional` **carrierExportVoyageNumber?**: `string`

Filters to only receive events for a specific carrier export voyage number.

***

### universalExportVoyageReference? {#universalexportvoyagereference}

> `optional` **universalExportVoyageReference?**: `string`

Filters to only receive events for a specific universal export voyage reference.

***

### carrierServiceCode? {#carrierservicecode}

> `optional` **carrierServiceCode?**: `string`

Filters to only receive events for a specific carrier service code.

***

### universalServiceReference? {#universalservicereference}

> `optional` **universalServiceReference?**: `string`

Filters to only receive events for a specific universal service reference.

***

### UNLocationCode? {#unlocationcode}

> `optional` **UNLocationCode?**: `string`

Filters to only receive events for a specific UN/LOCODE.
