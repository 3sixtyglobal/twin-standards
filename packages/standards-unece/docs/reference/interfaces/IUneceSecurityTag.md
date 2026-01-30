# Interface: IUneceSecurityTag

A product tag device to provide protection from a peril such as theft.

## See

https://vocabulary.uncefact.org/SecurityTag

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

> **type**: `"SecurityTag"`

JSON-LD Type.

***

### locationCode?

> `optional` **locationCode**: `string`

The code specifying the location of this product security tag.

#### See

https://vocabulary.uncefact.org/locationCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this product security tag.

#### See

https://vocabulary.uncefact.org/typeCode
