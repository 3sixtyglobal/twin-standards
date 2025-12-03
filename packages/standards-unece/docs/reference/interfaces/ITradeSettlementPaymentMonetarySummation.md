# Interface: ITradeSettlementPaymentMonetarySummation

A collection of monetary amount totals specified for a trade settlement payment.

## See

https://vocabulary.uncefact.org/TradeSettlementPaymentMonetarySummation

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

> **type**: `"TradeSettlementPaymentMonetarySummation"`

JSON-LD Type.

***

### adjustedBalanceOutAmount?

> `optional` **adjustedBalanceOutAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an adjusted amount balanced out for this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedBalanceOutAmount

***

### applicablePaymentBalanceOut?

> `optional` **applicablePaymentBalanceOut**: [`IPaymentBalanceOut`](IPaymentBalanceOut.md)[]

A balance out applicable to this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/applicablePaymentBalanceOut

***

### balanceOutAmount?

> `optional` **balanceOutAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an amount balanced out for this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/balanceOutAmount

***

### equivalentTransferTotalAmount?

> `optional` **equivalentTransferTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value transferred as an equivalent amount in the credit transfer payment in this trade settlement payment
monetary summation, such as the amount transferred between debtor and creditor, before deduction of charges, expressed
in the currency of the debtor's account, and transferred into a different currency.

#### See

https://vocabulary.uncefact.org/equivalentTransferTotalAmount

***

### grandTotalAmount?

> `optional` **grandTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a grand total reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### includingTaxesLineTotalAmount?

> `optional` **includingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the line total, including taxes, being reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### netLineTotalAmount?

> `optional` **netLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the net total of all line amounts, including line level allowances and charges and excluding line
level taxes, being reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount?

> `optional` **paymentTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a payment total reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### taxTotalAmount?

> `optional` **taxTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all tax amounts reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount
