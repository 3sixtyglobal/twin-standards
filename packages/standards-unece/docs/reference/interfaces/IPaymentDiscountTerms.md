# Interface: IPaymentDiscountTerms

Trade terms and conditions by which a discount is or can be applied to a payable amount.

## See

https://vocabulary.uncefact.org/PaymentDiscountTerms

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

> **type**: `"PaymentDiscountTerms"`

JSON-LD Type.

***

### actualDiscountAmount?

> `optional` **actualDiscountAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the actual discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/actualDiscountAmount

***

### basisAmount?

> `optional` **basisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value used as a basis to calculate the discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisDateTime?

> `optional` **basisDateTime**: `string`

The date, time, date time, or other date time value used as the basis to calculate the discount in the trade payment
discount terms.

#### See

https://vocabulary.uncefact.org/basisDateTime

***

### basisPeriodMeasure?

> `optional` **basisPeriodMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the basis period for these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/basisPeriodMeasure

***

### calculationPercent?

> `optional` **calculationPercent**: `string`

The percent used to calculate the discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/calculationPercent
