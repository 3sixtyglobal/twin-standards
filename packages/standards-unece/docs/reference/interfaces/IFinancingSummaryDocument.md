# Interface: IFinancingSummaryDocument

A collection of financing related data that provides an overview of key points.

## See

https://vocabulary.uncefact.org/FinancingSummaryDocument

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

> **type**: `"FinancingSummaryDocument"`

JSON-LD Type.

***

### acceptedTransactionOriginalTotalAmount?

> `optional` **acceptedTransactionOriginalTotalAmount**: [`IAmountType`](IAmountType.md)[]

An original total monetary value of accepted transactions in this financing summary document.

#### See

https://vocabulary.uncefact.org/acceptedTransactionOriginalTotalAmount

***

### financedAppliedRatePercent?

> `optional` **financedAppliedRatePercent**: `string`

The financed applied rate, expressed as a percentage, in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedAppliedRatePercent

***

### financedTotalAmount?

> `optional` **financedTotalAmount**: [`IAmountType`](IAmountType.md)[]

A financed total monetary value in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedTotalAmount

***

### financedTransactionSpecifiedQuantity?

> `optional` **financedTransactionSpecifiedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of financed transactions specified in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedTransactionSpecifiedQuantity

***

### lineOfCreditSpecifiedFinancialAccount?

> `optional` **lineOfCreditSpecifiedFinancialAccount**: [`IFinancingFinancialAccount`](IFinancingFinancialAccount.md)[]

The financing financial account, used for managing the line of credit, specified for this financing summary document.

#### See

https://vocabulary.uncefact.org/lineOfCreditSpecifiedFinancialAccount

***

### relatedBooking?

> `optional` **relatedBooking**: [`IBooking`](IBooking.md)[]

The financial booking related to this financing summary document.

#### See

https://vocabulary.uncefact.org/relatedBooking

***

### specifiedCreditorFinancialAccount?

> `optional` **specifiedCreditorFinancialAccount**: [`ICreditorFinancialAccount`](ICreditorFinancialAccount.md)[]

The creditor financial account, used for crediting, specified for this financing summary document.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
