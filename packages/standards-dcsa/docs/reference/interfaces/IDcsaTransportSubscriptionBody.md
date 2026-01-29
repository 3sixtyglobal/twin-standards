# Interface: IDcsaTransportSubscriptionBody

Transport subscription filters.

Source: `transportSubscriptionBody` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md)

## Properties

### transportCallReference?

> `optional` **transportCallReference**: `string`

Filters to only receive events for a specific transport call.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`transportCallReference`](IDcsaTransportCallSubscriptionBody.md#transportcallreference)

***

### vesselIMONumber?

> `optional` **vesselIMONumber**: `string`

Filters to only receive events for a specific vessel IMO number.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`vesselIMONumber`](IDcsaTransportCallSubscriptionBody.md#vesselimonumber)

***

### carrierExportVoyageNumber?

> `optional` **carrierExportVoyageNumber**: `string`

Filters to only receive events for a specific carrier export voyage number.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`carrierExportVoyageNumber`](IDcsaTransportCallSubscriptionBody.md#carrierexportvoyagenumber)

***

### universalExportVoyageReference?

> `optional` **universalExportVoyageReference**: `string`

Filters to only receive events for a specific universal export voyage reference.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`universalExportVoyageReference`](IDcsaTransportCallSubscriptionBody.md#universalexportvoyagereference)

***

### carrierServiceCode?

> `optional` **carrierServiceCode**: `string`

Filters to only receive events for a specific carrier service code.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`carrierServiceCode`](IDcsaTransportCallSubscriptionBody.md#carrierservicecode)

***

### universalServiceReference?

> `optional` **universalServiceReference**: `string`

Filters to only receive events for a specific universal service reference.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`universalServiceReference`](IDcsaTransportCallSubscriptionBody.md#universalservicereference)

***

### UNLocationCode?

> `optional` **UNLocationCode**: `string`

Filters to only receive events for a specific UN/LOCODE.

#### Inherited from

[`IDcsaTransportCallSubscriptionBody`](IDcsaTransportCallSubscriptionBody.md).[`UNLocationCode`](IDcsaTransportCallSubscriptionBody.md#unlocationcode)

***

### transportEventTypeCodes?

> `optional` **transportEventTypeCodes**: [`DcsaTransportEventTypeCodes`](../type-aliases/DcsaTransportEventTypeCodes.md)[]

Transport event type codes to filter by.
