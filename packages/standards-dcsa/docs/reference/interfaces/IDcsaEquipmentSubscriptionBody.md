# Interface: IDcsaEquipmentSubscriptionBody

Equipment subscription filters.

Source: `equipmentSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md)

## Properties

### equipmentEventTypeCodes? {#equipmenteventtypecodes}

> `optional` **equipmentEventTypeCodes?**: [`DcsaEquipmentEventTypeCodes`](../type-aliases/DcsaEquipmentEventTypeCodes.md)[]

Equipment event type codes to filter by.

***

### equipmentReference? {#equipmentreference}

> `optional` **equipmentReference?**: `string`

Equipment reference to filter by.

***

### transportCallReference? {#transportcallreference}

> `optional` **transportCallReference?**: `string`

Filters to only receive events for a specific transport call.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`transportCallReference`](IDcsaTransportCallSubscriptionBody.md#transportcallreference)

***

### vesselIMONumber? {#vesselimonumber}

> `optional` **vesselIMONumber?**: `string`

Filters to only receive events for a specific vessel IMO number.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`vesselIMONumber`](IDcsaTransportCallSubscriptionBody.md#vesselimonumber)

***

### carrierExportVoyageNumber? {#carrierexportvoyagenumber}

> `optional` **carrierExportVoyageNumber?**: `string`

Filters to only receive events for a specific carrier export voyage number.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`carrierExportVoyageNumber`](IDcsaTransportCallSubscriptionBody.md#carrierexportvoyagenumber)

***

### universalExportVoyageReference? {#universalexportvoyagereference}

> `optional` **universalExportVoyageReference?**: `string`

Filters to only receive events for a specific universal export voyage reference.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`universalExportVoyageReference`](IDcsaTransportCallSubscriptionBody.md#universalexportvoyagereference)

***

### carrierServiceCode? {#carrierservicecode}

> `optional` **carrierServiceCode?**: `string`

Filters to only receive events for a specific carrier service code.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`carrierServiceCode`](IDcsaTransportCallSubscriptionBody.md#carrierservicecode)

***

### universalServiceReference? {#universalservicereference}

> `optional` **universalServiceReference?**: `string`

Filters to only receive events for a specific universal service reference.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`universalServiceReference`](IDcsaTransportCallSubscriptionBody.md#universalservicereference)

***

### UNLocationCode? {#unlocationcode}

> `optional` **UNLocationCode?**: `string`

Filters to only receive events for a specific UN/LOCODE.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`UNLocationCode`](IDcsaTransportCallSubscriptionBody.md#unlocationcode)
