# Interface: IUneceTTTradeTransaction

An agreement, contract, exchange, understanding, or transfer of cash or property related to a Track and Trace (TT)
process.

## See

https://vocabulary.uncefact.org/TTTradeTransaction

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

> **type**: `"TTTradeTransaction"`

JSON-LD Type.

***

### identifier

> **identifier**: `string`

The identifier for this TT trade transaction.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeId?

> `optional` **typeId**: `string`

The identifier for the type of TT trade transaction.

#### See

https://vocabulary.uncefact.org/typeId

***

### uRIId?

> `optional` **uRIId**: `string`

The Uniform Resource Identifier (URI) for this TT trade transaction.

#### See

https://vocabulary.uncefact.org/uRIId
