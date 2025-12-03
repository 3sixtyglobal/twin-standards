# Interface: ITTTransactionEvent

Information about an event declaring that certain objects have been associated or disassociated with one or more Track
and Trace (TT) trade transactions.

## See

https://vocabulary.uncefact.org/TTTransactionEvent

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **businessRelatedLocation**: [`ITTLocation`](ITTLocation.md)[]

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

> `optional` **destinationRelatedParty**: [`ITTParty`](ITTParty.md)[]

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

> `optional` **quantitySpecifiedEventElement**: [`IEventElement`](IEventElement.md)[]

A quantity event element specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/quantitySpecifiedEventElement

***

### readPointRelatedLocation?

> `optional` **readPointRelatedLocation**: [`ITTLocation`](ITTLocation.md)[]

The read point related location of this TT transaction event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime?

> `optional` **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT transaction event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification?

> `optional` **relatedCertification**: [`ISpecifiedCertification`](ISpecifiedCertification.md)[]

A certification related to this TT transaction event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### sourceRelatedParty?

> `optional` **sourceRelatedParty**: [`ITTParty`](ITTParty.md)[]

A source related party for this TT transaction event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError?

> `optional` **specifiedError**: [`IError`](IError.md)[]

A declared error specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction?

> `optional` **specifiedTradeTransaction**: [`ITTTradeTransaction`](ITTTradeTransaction.md)[]

A trade transaction specified for this TT transaction event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction
