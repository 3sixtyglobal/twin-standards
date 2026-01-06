# Interface: IUneceTradeSettlementMonetarySummation

A collection of monetary amount totals specified for a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementMonetarySummation

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

> **type**: `"TradeSettlementMonetarySummation"`

JSON-LD Type.

***

### adjustedBalanceOutAmount?

> `optional` **adjustedBalanceOutAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an adjusted amount balanced out for this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedBalanceOutAmount

***

### adjustedInformationAmount?

> `optional` **adjustedInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an adjusted amount being reported for information in this monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedInformationAmount

***

### allowanceTotalAmount?

> `optional` **allowanceTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all allowance amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/allowanceTotalAmount

***

### balanceOutAmount?

> `optional` **balanceOutAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount balanced out for this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/balanceOutAmount

***

### chargeTotalAmount?

> `optional` **chargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all charge amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/chargeTotalAmount

***

### duePayableAmount?

> `optional` **duePayableAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount due and payable for this trade settlement monetary summation, such as the amount due
to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### equivalentTransferTotalAmount?

> `optional` **equivalentTransferTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value transferred as an equivalent amount in the credit transfer payment in this trade settlement monetary
summation, such as the amount transferred between debtor and creditor, before deduction of charges, expressed in the
currency of the debtor's account, and transferred into a different currency.

#### See

https://vocabulary.uncefact.org/equivalentTransferTotalAmount

***

### excludingTaxesLineTotalAmount?

> `optional` **excludingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line total, excluding taxes, being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/excludingTaxesLineTotalAmount

***

### freightChargeTotalAmount?

> `optional` **freightChargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all freight charges being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/freightChargeTotalAmount

***

### grandTotal?

> `optional` **grandTotal**: `string`

A grand total, expressed as text, for this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/grandTotal

***

### grandTotalAmount?

> `optional` **grandTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the grand total of this trade settlement monetary summation, to include addition and subtraction of
individual summation amounts.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### grossLineTotalAmount?

> `optional` **grossLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/grossLineTotalAmount

***

### includingTaxesLineTotalAmount?

> `optional` **includingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line total, including taxes, being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### informationAmount?

> `optional` **informationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an amount being reported for information in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### insuranceChargeTotalAmount?

> `optional` **insuranceChargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all insurance charges being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/insuranceChargeTotalAmount

***

### lineTotalAmount?

> `optional` **lineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line amount total being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/lineTotalAmount

***

### netIncludingTaxesLineTotalAmount?

> `optional` **netIncludingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and including line level
taxes, being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount

***

### netLineTotalAmount?

> `optional` **netLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
taxes, being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### originalInformationAmount?

> `optional` **originalInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an original amount being reported for information in this monetary summation.

#### See

https://vocabulary.uncefact.org/originalInformationAmount

***

### packingChargeTotalAmount?

> `optional` **packingChargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all packing charges being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/packingChargeTotalAmount

***

### paymentTotalAmount?

> `optional` **paymentTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a payment total reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### productValueExcludingTobaccoTaxInformationAmount?

> `optional` **productValueExcludingTobaccoTaxInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the total product value excluding tobacco tax stated for information purposes in this
trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/productValueExcludingTobaccoTaxInformationAmount

***

### productWeightLossInformationAmount?

> `optional` **productWeightLossInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the loss of weight of a product, such as fresh goods, stated for information purposes in this trade
settlement monetary summation.

#### See

https://vocabulary.uncefact.org/productWeightLossInformationAmount

***

### retailValueExcludingTaxInformationAmount?

> `optional` **retailValueExcludingTaxInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the retail value excluding all duties and taxes stated for information purposes in
this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/retailValueExcludingTaxInformationAmount

***

### roundingAmount?

> `optional` **roundingAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a rounding amount being applied in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/roundingAmount

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced for the monetary summation of this trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### taxBasisTotalAmount?

> `optional` **taxBasisTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax basis amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/taxBasisTotalAmount

***

### taxTotalAmount?

> `optional` **taxTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount

***

### totalAllowanceChargeAmount?

> `optional` **totalAllowanceChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total allowance and charge reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalDepositFeeInformationAmount?

> `optional` **totalDepositFeeInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total deposit fee stated for information purposes in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalDepositFeeInformationAmount

***

### totalDiscountAmount?

> `optional` **totalDiscountAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total discount reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountAmount

***

### totalDiscountBasisAmount?

> `optional` **totalDiscountBasisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total discount basis reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountBasisAmount

***

### totalPenaltyAmount?

> `optional` **totalPenaltyAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total penalty reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalPenaltyAmount

***

### totalPrepaidAmount?

> `optional` **totalPrepaidAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a prepaid total reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/totalPrepaidAmount

***

### totalRetailValueInformationAmount?

> `optional` **totalRetailValueInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the total retail value stated for information purposes in this trade settlement
monetary summation.

#### See

https://vocabulary.uncefact.org/totalRetailValueInformationAmount
