# Interface: IUneceTTObjectEvent

Information about an event concerning one or more physical or digital Track and Trace (TT) objects identified by
instance or class level identifiers.

## See

https://vocabulary.uncefact.org/TTObjectEvent

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTObjectEvent"`

JSON-LD Type.

***

### actionCode {#actioncode}

> **actionCode**: `string`

The code specifying the action for this TT object event.

#### See

https://vocabulary.uncefact.org/actionCode

***

### businessRelatedLocation? {#businessrelatedlocation}

> `optional` **businessRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The business location related to this TT object event.

#### See

https://vocabulary.uncefact.org/businessRelatedLocation

***

### businessStepCode? {#businessstepcode}

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT object event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### destinationRelatedParty? {#destinationrelatedparty}

> `optional` **destinationRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A destination related party for this TT object event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode? {#dispositioncode}

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT object event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this TT object event.

#### See

https://vocabulary.uncefact.org/identifier

***

### objectInstanceId? {#objectinstanceid}

> `optional` **objectInstanceId**: `string` \| `IJsonLdValueObject`

An instance identifier for an object of this TT object event.

#### See

https://vocabulary.uncefact.org/objectInstanceId

***

### occurrenceDateTime {#occurrencedatetime}

> **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT object event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### quantitySpecifiedEventElement? {#quantityspecifiedeventelement}

> `optional` **quantitySpecifiedEventElement**: [`IUneceEventElement`](IUneceEventElement.md)[]

A quantity event element specified for this TT object event.

#### See

https://vocabulary.uncefact.org/quantitySpecifiedEventElement

***

### readPointRelatedLocation? {#readpointrelatedlocation}

> `optional` **readPointRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The read point related location of this TT object event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime {#recordeddatetime}

> **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT object event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification? {#relatedcertification}

> `optional` **relatedCertification**: [`IUneceSpecifiedCertification`](IUneceSpecifiedCertification.md)[]

A certification related to this TT object event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### sourceRelatedParty? {#sourcerelatedparty}

> `optional` **sourceRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A source related party for this TT object event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError? {#specifiederror}

> `optional` **specifiedError**: [`IUneceError`](IUneceError.md)[]

A declared error specified for this TT object event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction? {#specifiedtradetransaction}

> `optional` **specifiedTradeTransaction**: [`IUneceTTTradeTransaction`](IUneceTTTradeTransaction.md)[]

A trade transaction specified for this TT object event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction
