# Interface: IUneceTTAggregationEvent

A Track and Trace (TT) event where objects or processes are grouped.

## See

https://vocabulary.uncefact.org/TTAggregationEvent

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTAggregationEvent"`

JSON-LD Type.

***

### actionCode {#actioncode}

> **actionCode**: `string`

The code specifying the action for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/actionCode

***

### businessStepCode? {#businessstepcode}

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### childObjectInstanceId? {#childobjectinstanceid}

> `optional` **childObjectInstanceId**: `string` \| `IJsonLdValueObject`

An instance identifier for a child object of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/childObjectInstanceId

***

### childQuantitySpecifiedEventElement? {#childquantityspecifiedeventelement}

> `optional` **childQuantitySpecifiedEventElement**: [`IUneceEventElement`](IUneceEventElement.md)[]

A quantity event element specified for a child of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/childQuantitySpecifiedEventElement

***

### destinationRelatedParty? {#destinationrelatedparty}

> `optional` **destinationRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A destination related party for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode? {#dispositioncode}

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime {#occurrencedatetime}

> **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT aggregation event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### parentObjectId? {#parentobjectid}

> `optional` **parentObjectId**: `string` \| `IJsonLdValueObject`

The identifier of the parent object for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/parentObjectId

***

### readPointRelatedLocation? {#readpointrelatedlocation}

> `optional` **readPointRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The read point related location of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime {#recordeddatetime}

> **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT aggregation event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification? {#relatedcertification}

> `optional` **relatedCertification**: [`IUneceSpecifiedCertification`](IUneceSpecifiedCertification.md)[]

A certification related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### relatedTTLocation? {#relatedttlocation}

> `optional` **relatedTTLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The location related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### sourceRelatedParty? {#sourcerelatedparty}

> `optional` **sourceRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A source related party for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError? {#specifiederror}

> `optional` **specifiedError**: [`IUneceError`](IUneceError.md)[]

A declared error specified for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction? {#specifiedtradetransaction}

> `optional` **specifiedTradeTransaction**: [`IUneceTTTradeTransaction`](IUneceTTTradeTransaction.md)[]

A trade transaction specified for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction
