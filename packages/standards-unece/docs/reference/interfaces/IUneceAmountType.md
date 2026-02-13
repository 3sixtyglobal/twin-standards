# Interface: IUneceAmountType

A number of monetary units specified in a currency where the unit of the currency is explicit or implied.

## See

https://vocabulary.uncefact.org/AmountType

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

> **type**: `"AmountType"`

JSON-LD Type.

***

### AmountTypeValue?

> `optional` **AmountTypeValue**: `string`

A number of monetary units.

#### See

https://vocabulary.uncefact.org/AmountTypeValue

***

### AmountTypeCurrency?

> `optional` **AmountTypeCurrency**: [`UneceAmountCurrency`](../type-aliases/UneceAmountCurrency.md)

An amount currency code.

#### See

https://vocabulary.uncefact.org/AmountTypeCurrency
