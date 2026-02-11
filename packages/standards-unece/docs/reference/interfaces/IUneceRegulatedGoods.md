# Interface: IUneceRegulatedGoods

Articles of trade or commerce which are subject to, or controlled by a rule, regulation, or law at a particular point
during their logistics lifecycle.

## See

https://vocabulary.uncefact.org/RegulatedGoods

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

> **type**: `"RegulatedGoods"`

JSON-LD Type.

***

### applicableDangerousGoods?

> `optional` **applicableDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Transport dangerous goods information applicable to these logistics regulated goods.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods
