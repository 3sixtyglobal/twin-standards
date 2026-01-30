# Interface: IUneceCash

Coins, banknotes paid by the recipient of goods or services to the provider.

## See

https://vocabulary.uncefact.org/Cash

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

> **type**: `"Cash"`

JSON-LD Type.

***

### applicableIndicator?

> `optional` **applicableIndicator**: `boolean`

The indication of whether or not this cash used for payment. is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### currencyCode?

> `optional` **currencyCode**: `string`

The code specifying a currency of this cash used for payment.

#### See

https://vocabulary.uncefact.org/currencyCode

***

### description?

> `optional` **description**: `string`

A textual description of cash used for this payment.

#### See

https://vocabulary.uncefact.org/description

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of cash used for payment.

#### See

https://vocabulary.uncefact.org/typeCode
