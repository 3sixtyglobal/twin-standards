# Interface: ITTAggregationEvent

A Track and Trace (TT) event where objects or processes are grouped.

## See

https://vocabulary.uncefact.org/TTAggregationEvent

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

> **type**: `"TTAggregationEvent"`

JSON-LD Type.

***

### actionCode?

> `optional` **actionCode**: `string`

The code specifying the action for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/actionCode

***

### businessStepCode?

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### childObjectInstanceId?

> `optional` **childObjectInstanceId**: `string`

An instance identifier for a child object of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/childObjectInstanceId

***

### childQuantitySpecifiedEventElement?

> `optional` **childQuantitySpecifiedEventElement**: [`IEventElement`](IEventElement.md)[]

A quantity event element specified for a child of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/childQuantitySpecifiedEventElement

***

### destinationRelatedParty?

> `optional` **destinationRelatedParty**: [`ITTParty`](ITTParty.md)[]

A destination related party for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode?

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT aggregation event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### parentObjectId?

> `optional` **parentObjectId**: `string`

The identifier of the parent object for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/parentObjectId

***

### readPointRelatedLocation?

> `optional` **readPointRelatedLocation**: [`ITTLocation`](ITTLocation.md)[]

The read point related location of this TT aggregation event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime?

> `optional` **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT aggregation event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification?

> `optional` **relatedCertification**: [`ISpecifiedCertification`](ISpecifiedCertification.md)[]

A certification related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### relatedTTLocation?

> `optional` **relatedTTLocation**: [`ITTLocation`](ITTLocation.md)[]

The location related to this TT aggregation event.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### sourceRelatedParty?

> `optional` **sourceRelatedParty**: [`ITTParty`](ITTParty.md)[]

A source related party for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError?

> `optional` **specifiedError**: [`IError`](IError.md)[]

A declared error specified for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction?

> `optional` **specifiedTradeTransaction**: [`ITTTradeTransaction`](ITTTradeTransaction.md)[]

A trade transaction specified for this TT aggregation event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction
