# Interface: IUneceTTTransactionEvent

Information about an event declaring that certain objects have been associated or disassociated with one or more Track
and Trace (TT) trade transactions.

## See

https://vocabulary.uncefact.org/TTTransactionEvent

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"TTTransactionEvent"`

JSON-LD Type.

***

### actionCode?

> `optional` **actionCode**: `string`

The code specifying the action for this TT transaction event.

#### See

https://vocabulary.uncefact.org/actionCode

***

### businessRelatedLocation?

> `optional` **businessRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The business location related to this TT transaction event.

#### See

https://vocabulary.uncefact.org/businessRelatedLocation

***

### businessStepCode?

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT transaction event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### destinationRelatedParty?

> `optional` **destinationRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)

A destination related party for this TT transaction event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode?

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT transaction event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT transaction event.

#### See

https://vocabulary.uncefact.org/identifier

***

### objectInstanceId?

> `optional` **objectInstanceId**: `string`

An instance identifier for an object of this TT transaction event.

#### See

https://vocabulary.uncefact.org/objectInstanceId

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT transaction event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### parentObjectId?

> `optional` **parentObjectId**: `string`

The identifier of the parent object for this TT transaction event.

#### See

https://vocabulary.uncefact.org/parentObjectId

***

### quantitySpecifiedEventElement?

> `optional` **quantitySpecifiedEventElement**: [`IUneceEventElement`](IUneceEventElement.md)[]

A quantity event element specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/quantitySpecifiedEventElement

***

### readPointRelatedLocation?

> `optional` **readPointRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The read point related location of this TT transaction event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime

> **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT transaction event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification?

> `optional` **relatedCertification**: [`IUneceSpecifiedCertification`](IUneceSpecifiedCertification.md)[]

A certification related to this TT transaction event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### sourceRelatedParty?

> `optional` **sourceRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)

A source related party for this TT transaction event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError?

> `optional` **specifiedError**: [`IUneceError`](IUneceError.md)[]

A declared error specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction?

> `optional` **specifiedTradeTransaction**: [`IUneceTTTradeTransaction`](IUneceTTTradeTransaction.md)[]

A trade transaction specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction
