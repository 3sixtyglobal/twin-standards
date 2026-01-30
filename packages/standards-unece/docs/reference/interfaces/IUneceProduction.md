# Interface: IUneceProduction

The making or manufacturing of goods, such as from components or raw materials.

## See

https://vocabulary.uncefact.org/Production

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

> **type**: `"Production"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this production of goods.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturingProcessDescription?

> `optional` **manufacturingProcessDescription**: `string`

A textual description of the manufacturing process for this goods production.

#### See

https://vocabulary.uncefact.org/manufacturingProcessDescription
