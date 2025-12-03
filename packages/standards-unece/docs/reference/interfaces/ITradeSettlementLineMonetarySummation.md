# Interface: ITradeSettlementLineMonetarySummation

A collection of monetary amount totals, specified at line level, for a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementLineMonetarySummation

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

> **type**: `"TradeSettlementLineMonetarySummation"`

JSON-LD Type.

***

### allowanceTotalAmount?

> `optional` **allowanceTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all allowance amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/allowanceTotalAmount

***

### chargeTotalAmount?

> `optional` **chargeTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all charge amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/chargeTotalAmount

***

### duePayableAmount?

> `optional` **duePayableAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an amount due and payable for this trade settlement line monetary summation, such as the amount
due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### grandTotalAmount?

> `optional` **grandTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the grand total of this trade settlement line monetary summation, to include addition and
subtraction of individual summation amounts.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### grossLineTotalAmount?

> `optional` **grossLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/grossLineTotalAmount

***

### includingTaxesLineTotalAmount?

> `optional` **includingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the line total, including taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### informationAmount?

> `optional` **informationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of an amount being reported for information in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### lineTotalAmount?

> `optional` **lineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the line amount total being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/lineTotalAmount

***

### netIncludingTaxesLineTotalAmount?

> `optional` **netIncludingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and including line level
taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount

***

### netLineTotalAmount?

> `optional` **netLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount?

> `optional` **paymentTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a payment total reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### productWeightLossInformationAmount?

> `optional` **productWeightLossInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the loss of weight of a product, such as fresh goods, stated for information purposes in this trade
settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/productWeightLossInformationAmount

***

### taxBasisTotalAmount?

> `optional` **taxBasisTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all tax basis amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/taxBasisTotalAmount

***

### taxTotalAmount?

> `optional` **taxTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all tax amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount

***

### totalAllowanceChargeAmount?

> `optional` **totalAllowanceChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a total allowance and charge reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalRetailValueInformationAmount?

> `optional` **totalRetailValueInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value which constitutes the total retail value stated for information purposes in this trade settlement line
monetary summation.

#### See

https://vocabulary.uncefact.org/totalRetailValueInformationAmount
