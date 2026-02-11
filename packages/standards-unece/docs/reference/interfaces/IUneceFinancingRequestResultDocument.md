# Interface: IUneceFinancingRequestResultDocument

A collection of data that reports the result of a financing request.

## See

https://vocabulary.uncefact.org/FinancingRequestResultDocument

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

> **type**: `"FinancingRequestResultDocument"`

JSON-LD Type.

***

### financedRatePercent?

> `optional` **financedRatePercent**: `string`

The financed rate, expressed as a percentage, in this financing request result document.

#### See

https://vocabulary.uncefact.org/financedRatePercent

***

### financedTotalAmount?

> `optional` **financedTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the financed total amount in this financing request result document.

#### See

https://vocabulary.uncefact.org/financedTotalAmount

***

### specifiedFinancingStatus?

> `optional` **specifiedFinancingStatus**: [`IUneceFinancingStatus`](IUneceFinancingStatus.md)

The financing status specified in this financing request result document.

#### See

https://vocabulary.uncefact.org/specifiedFinancingStatus
