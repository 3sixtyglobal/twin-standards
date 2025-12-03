# Interface: IAmountType

A number of monetary units specified in a currency where the unit of the currency is explicit or implied.

## See

https://vocabulary.uncefact.org/AmountType

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

> `optional` **AmountTypeCurrency**: [`AmountCurrency`](../type-aliases/AmountCurrency.md)

An amount currency code.

#### See

https://vocabulary.uncefact.org/AmountTypeCurrency
