# Interface: IClause

A distinct article or provision in a document, which requires compliance.

## See

https://vocabulary.uncefact.org/Clause

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

> **type**: `"Clause"`

JSON-LD Type.

***

### associatedMeasurement?

> `optional` **associatedMeasurement**: [`IMeasurement`](IMeasurement.md)[]

A measurement associated with this document clause.

#### See

https://vocabulary.uncefact.org/associatedMeasurement

***

### associatedPeriod?

> `optional` **associatedPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A period of time associated with this document clause.

#### See

https://vocabulary.uncefact.org/associatedPeriod

***

### content?

> `optional` **content**: `string`

Content, expressed as text, of this document clause.

#### See

https://vocabulary.uncefact.org/content

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this document clause.

#### See

https://vocabulary.uncefact.org/identifier

***

### uRLId?

> `optional` **uRLId**: `string`

The Uniform Resource Locator (URL) for this document clause.

#### See

https://vocabulary.uncefact.org/uRLId
