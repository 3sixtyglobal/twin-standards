# Interface: ICargo

Information about goods being transported identifying their nature for customs, statistical or transport purposes.

## See

https://vocabulary.uncefact.org/Cargo

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

> **type**: `"Cargo"`

JSON-LD Type.

***

### cargoCategoryTypeCode?

> `optional` **cargoCategoryTypeCode**: [`CargoCategoryCodeList`](../type-aliases/CargoCategoryCodeList.md)[]

The code, such as UNECE Recommendation 21 single digit codes, specifying the type of transported cargo.

#### See

https://vocabulary.uncefact.org/cargoCategoryTypeCode

***

### cargoCommodityCategoryStatisticalClassificationCode?

> `optional` **cargoCommodityCategoryStatisticalClassificationCode**: `"unece:CargoCommodityCategoryCodeList#ZZZ"`[]

The code specifying a statistical classification for this transport cargo.

#### See

https://vocabulary.uncefact.org/cargoCommodityCategoryStatisticalClassificationCode

***

### cargoOperationalCategoryCode?

> `optional` **cargoOperationalCategoryCode**: [`CargoOperationalCategoryCodeList`](../type-aliases/CargoOperationalCategoryCodeList.md)[]

The code specifying the operational category for this transport cargo, such as obnoxious or military.

#### See

https://vocabulary.uncefact.org/cargoOperationalCategoryCode

***

### identification?

> `optional` **identification**: `string`

Identification, expressed as text, of this transport cargo that is sufficient to identify it for customs, statistical or
transport purposes.

#### See

https://vocabulary.uncefact.org/identification
