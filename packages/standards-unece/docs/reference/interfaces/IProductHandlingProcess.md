# Interface: IProductHandlingProcess

A naturally occurring or designed sequence of operations or events that create, transform, or touch a product, such as
manufacturing, treating, packaging, and storing.

## See

https://vocabulary.uncefact.org/ProductHandlingProcess

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

> **type**: `"ProductHandlingProcess"`

JSON-LD Type.

***

### applicableProcessCharacteristic?

> `optional` **applicableProcessCharacteristic**: [`IProcessCharacteristic`](IProcessCharacteristic.md)[]

A process characteristic applicable to this product handling process.

#### See

https://vocabulary.uncefact.org/applicableProcessCharacteristic

***

### completionPeriod?

> `optional` **completionPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The specified period of completion for this product handling process.

#### See

https://vocabulary.uncefact.org/completionPeriod

***

### operationCountry?

> `optional` **operationCountry**: [`ICountry`](ICountry.md)[]

The trade country where the operation of this product handling process occurs.

#### See

https://vocabulary.uncefact.org/operationCountry

***

### operatorParty?

> `optional` **operatorParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party who is an operator of this product handling process.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### processTypeCode?

> `optional` **processTypeCode**: [`ProcessTypeCodeList`](../type-aliases/ProcessTypeCodeList.md)[]

The code specifying the type of product handling process.

#### See

https://vocabulary.uncefact.org/processTypeCode
