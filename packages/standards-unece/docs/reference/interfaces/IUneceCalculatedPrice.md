# Interface: IUneceCalculatedPrice

Information related to a calculated price.

## See

https://vocabulary.uncefact.org/CalculatedPrice

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

> **type**: `"CalculatedPrice"`

JSON-LD Type.

***

### calculatedPriceTypeCode?

> `optional` **calculatedPriceTypeCode**: `string`

A code specifying the type of calculated price.

#### See

https://vocabulary.uncefact.org/calculatedPriceTypeCode

***

### chargeAmount?

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the calculated price to be charged.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### relatedAllowanceCharge?

> `optional` **relatedAllowanceCharge**: [`IUneceAppliedAllowanceCharge`](IUneceAppliedAllowanceCharge.md)

Applied allowance charge information related to this calculated price.

#### See

https://vocabulary.uncefact.org/relatedAllowanceCharge
