# Interface: IAnimalBatch

A group of animals dealt with together.

## See

https://vocabulary.uncefact.org/AnimalBatch

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

> **type**: `"AnimalBatch"`

JSON-LD Type.

***

### breakUpDateTime?

> `optional` **breakUpDateTime**: `string`

The date, time, date time, or other date time value of the break up of this animal batch.

#### See

https://vocabulary.uncefact.org/breakUpDateTime

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this animal batch.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### fLUXId?

> `optional` **fLUXId**: `string`

A Fisheries Language for Universal eXchange (FLUX) identifier for this animal batch.

#### See

https://vocabulary.uncefact.org/fLUXId

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this animal batch.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumSizeMeasure?

> `optional` **maximumSizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

The maximum size, expressed as a measure, of the animals for this animal batch.

#### See

https://vocabulary.uncefact.org/maximumSizeMeasure

***

### minimumSizeMeasure?

> `optional` **minimumSizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

The minimum size, expressed as a measure, of the animals for this animal batch.

#### See

https://vocabulary.uncefact.org/minimumSizeMeasure

***

### saleDateTime?

> `optional` **saleDateTime**: `string`

The date, time, date time, or other date time value of the sale for this animal batch.

#### See

https://vocabulary.uncefact.org/saleDateTime

***

### salesNoteId?

> `optional` **salesNoteId**: `string`

The identifier for the sales note for this animal batch.

#### See

https://vocabulary.uncefact.org/salesNoteId

***

### specifiedDelimitedPeriod?

> `optional` **specifiedDelimitedPeriod**: [`IDelimitedPeriod`](IDelimitedPeriod.md)[]

The delimited period specified for this animal batch.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedPeriod?

> `optional` **specifiedPeriod**: [`IDelimitedPeriod`](IDelimitedPeriod.md)[]

The delimited period specified for this animal batch.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units, expressed as a quantity, for this animal batch.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### weightMeasure?

> `optional` **weightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The weight, expressed as a measure, for this animal batch.

#### See

https://vocabulary.uncefact.org/weightMeasure
