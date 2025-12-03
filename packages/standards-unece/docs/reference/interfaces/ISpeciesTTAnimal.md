# Interface: ISpeciesTTAnimal

The species of a Track and Trace (TT) animal or batch of animals.

## See

https://vocabulary.uncefact.org/SpeciesTTAnimal

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

> **type**: `"SpeciesTTAnimal"`

JSON-LD Type.

***

### regulationSpeciesNameTypeCode?

> `optional` **regulationSpeciesNameTypeCode**: `string`

A code specifying the type of regulation species name for this TT animal.

#### See

https://vocabulary.uncefact.org/regulationSpeciesNameTypeCode

***

### scientificSpeciesNameTypeCode?

> `optional` **scientificSpeciesNameTypeCode**: `string`

A code specifying the type of scientific species name for this TT animal.

#### See

https://vocabulary.uncefact.org/scientificSpeciesNameTypeCode

***

### speciesTypeCode?

> `optional` **speciesTypeCode**: `string`

A code specifying the species type of this TT animal.

#### See

https://vocabulary.uncefact.org/speciesTypeCode

***

### tradeSpeciesNameTypeCode?

> `optional` **tradeSpeciesNameTypeCode**: `string`

A code specifying the type of trade species name for this TT animal.

#### See

https://vocabulary.uncefact.org/tradeSpeciesNameTypeCode
