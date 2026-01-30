# Interface: IUneceProductionCycle

A series of activities associated with the processing of a product.

## See

https://vocabulary.uncefact.org/ProductionCycle

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

> **type**: `"ProductionCycle"`

JSON-LD Type.

***

### applicableProductionProcess?

> `optional` **applicableProductionProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A process applicable to this specified production cycle.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time, or other date time value of the end of this specified production cycle.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified production cycle.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this specified production cycle.

#### See

https://vocabulary.uncefact.org/name

***

### processSpecifiedDocument?

> `optional` **processSpecifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A process document referenced for this specified production cycle.

#### See

https://vocabulary.uncefact.org/processSpecifiedDocument

***

### productionYearDateTime?

> `optional` **productionYearDateTime**: `string`

The production year for this specified production cycle.

#### See

https://vocabulary.uncefact.org/productionYearDateTime

***

### relatedBinaryFile?

> `optional` **relatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file related to this specified production cycle.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number for this specified production cycle.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time, or other date time value of the start of this specified production cycle.

#### See

https://vocabulary.uncefact.org/startDateTime
