# Interface: IUneceIndividualTTAnimal

A Track and Trace (TT) animal, such as one kept or raised on a farm, ranch.

## See

https://vocabulary.uncefact.org/IndividualTTAnimal

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

> **type**: `"IndividualTTAnimal"`

JSON-LD Type.

***

### birthDateTime?

> `optional` **birthDateTime**: `string`

The birth date for this individual TT animal.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### deathDateTime?

> `optional` **deathDateTime**: `string`

The death date for this individual TT animal.

#### See

https://vocabulary.uncefact.org/deathDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT animal, such as the number appearing on an animal ear tag.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedDelimitedPeriod?

> `optional` **specifiedDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

The delimited period specified for this individual TT animal.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedPeriod?

> `optional` **specifiedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

The delimited period specified for this individual TT animal.

#### See

https://vocabulary.uncefact.org/specifiedPeriod
