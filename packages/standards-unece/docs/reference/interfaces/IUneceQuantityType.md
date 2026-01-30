# Interface: IUneceQuantityType

Missing description.

## See

https://vocabulary.uncefact.org/QuantityType

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

> **type**: `"QuantityType"`

JSON-LD Type.

***

### QuantityTypeValue?

> `optional` **QuantityTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/QuantityTypeValue

***

### QuantityTypeCode?

> `optional` **QuantityTypeCode**: [`IUneceQuantityCode`](IUneceQuantityCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/QuantityTypeCode
