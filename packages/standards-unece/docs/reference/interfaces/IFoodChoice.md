# Interface: IFoodChoice

A guest's decision which food to buy or eat.

## See

https://vocabulary.uncefact.org/FoodChoice

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

> **type**: `"FoodChoice"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this guest food choice.

#### See

https://vocabulary.uncefact.org/description

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this guest food choice.

#### See

https://vocabulary.uncefact.org/name

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, for this guest food choice.

#### See

https://vocabulary.uncefact.org/restriction

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of guest food choice.

#### See

https://vocabulary.uncefact.org/typeCode
