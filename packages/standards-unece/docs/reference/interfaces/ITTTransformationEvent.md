# Interface: ITTTransformationEvent

Information about an event that captures the relationship between one or more physical or digital objects identified by
identifiers, such as an EPC (Electronic Product Code) or EPC class, that are fully or partially consumed as inputs or as
outputs.

## See

https://vocabulary.uncefact.org/TTTransformationEvent

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

> **type**: `"TTTransformationEvent"`

JSON-LD Type.

***

### businessRelatedLocation?

> `optional` **businessRelatedLocation**: [`ITTLocation`](ITTLocation.md)[]

The business location related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/businessRelatedLocation

***

### businessStepCode?

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT transformation event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### destinationRelatedParty?

> `optional` **destinationRelatedParty**: [`ITTParty`](ITTParty.md)[]

A destination related party for this TT transformation event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode?

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT transformation event.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputObjectInstanceId?

> `optional` **inputObjectInstanceId**: `string`

An instance identifier for an input object of this TT transformation event.

#### See

https://vocabulary.uncefact.org/inputObjectInstanceId

***

### inputQuantitySpecifiedEventElement?

> `optional` **inputQuantitySpecifiedEventElement**: [`IEventElement`](IEventElement.md)[]

A quantity event element specified for an input of this TT transformation event.

#### See

https://vocabulary.uncefact.org/inputQuantitySpecifiedEventElement

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT transformation event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### outputObjectInstanceId?

> `optional` **outputObjectInstanceId**: `string`

An instance identifier for an output object of this TT transformation event.

#### See

https://vocabulary.uncefact.org/outputObjectInstanceId

***

### outputQuantitySpecifiedEventElement?

> `optional` **outputQuantitySpecifiedEventElement**: [`IEventElement`](IEventElement.md)[]

A quantity event element specified for an output of this TT transformation event.

#### See

https://vocabulary.uncefact.org/outputQuantitySpecifiedEventElement

***

### readPointRelatedLocation?

> `optional` **readPointRelatedLocation**: [`ITTLocation`](ITTLocation.md)[]

The read point related location of this TT transformation event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime?

> `optional` **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT transformation event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification?

> `optional` **relatedCertification**: [`ISpecifiedCertification`](ISpecifiedCertification.md)[]

A certification related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### sourceRelatedParty?

> `optional` **sourceRelatedParty**: [`ITTParty`](ITTParty.md)[]

A source related party for this TT transformation event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError?

> `optional` **specifiedError**: [`IError`](IError.md)[]

A declared error specified for this TT transformation event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction?

> `optional` **specifiedTradeTransaction**: [`ITTTradeTransaction`](ITTTradeTransaction.md)[]

A trade transaction specified for this TT transformation event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction

***

### transformationId?

> `optional` **transformationId**: `string`

The transformation identifier for this TT transformation event.

#### See

https://vocabulary.uncefact.org/transformationId
