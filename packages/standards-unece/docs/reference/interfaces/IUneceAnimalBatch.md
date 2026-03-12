# Interface: IUneceAnimalBatch

A group of animals dealt with together.

## See

https://vocabulary.uncefact.org/AnimalBatch

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AnimalBatch"`

JSON-LD Type.

***

### breakUpDateTime? {#breakupdatetime}

> `optional` **breakUpDateTime**: `string`

The date, time, date time, or other date time value of the break up of this animal batch.

#### See

https://vocabulary.uncefact.org/breakUpDateTime

***

### creationDateTime {#creationdatetime}

> **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this animal batch.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### fLUXId? {#fluxid}

> `optional` **fLUXId**: `string` \| `IJsonLdValueObject`

A Fisheries Language for Universal eXchange (FLUX) identifier for this animal batch.

#### See

https://vocabulary.uncefact.org/fLUXId

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this animal batch.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumSizeMeasure? {#maximumsizemeasure}

> `optional` **maximumSizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The maximum size, expressed as a measure, of the animals for this animal batch.

#### See

https://vocabulary.uncefact.org/maximumSizeMeasure

***

### minimumSizeMeasure? {#minimumsizemeasure}

> `optional` **minimumSizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The minimum size, expressed as a measure, of the animals for this animal batch.

#### See

https://vocabulary.uncefact.org/minimumSizeMeasure

***

### saleDateTime? {#saledatetime}

> `optional` **saleDateTime**: `string`

The date, time, date time, or other date time value of the sale for this animal batch.

#### See

https://vocabulary.uncefact.org/saleDateTime

***

### salesNoteId? {#salesnoteid}

> `optional` **salesNoteId**: `string` \| `IJsonLdValueObject`

The identifier for the sales note for this animal batch.

#### See

https://vocabulary.uncefact.org/salesNoteId

***

### specifiedDelimitedPeriod? {#specifieddelimitedperiod}

> `optional` **specifiedDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)

The delimited period specified for this animal batch.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedPeriod? {#specifiedperiod}

> `optional` **specifiedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)

The delimited period specified for this animal batch.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units, expressed as a quantity, for this animal batch.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The weight, expressed as a measure, for this animal batch.

#### See

https://vocabulary.uncefact.org/weightMeasure
