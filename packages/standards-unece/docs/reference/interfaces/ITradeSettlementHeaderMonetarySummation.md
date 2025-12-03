# Interface: ITradeSettlementHeaderMonetarySummation

A collection of monetary amount totals, specified at header level, for a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementHeaderMonetarySummation

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

> **type**: `"TradeSettlementHeaderMonetarySummation"`

JSON-LD Type.

***

### adjustedBalanceOutAmount?

> `optional` **adjustedBalanceOutAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an adjusted amount balanced out for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedBalanceOutAmount

***

### allowanceTotalAmount?

> `optional` **allowanceTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all allowance amounts being reported in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/allowanceTotalAmount

***

### applicableHeaderBalanceOut?

> `optional` **applicableHeaderBalanceOut**: [`IHeaderBalanceOut`](IHeaderBalanceOut.md)[]

A header balance out applicable to this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/applicableHeaderBalanceOut

***

### balanceOutAmount?

> `optional` **balanceOutAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an amount balanced out for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/balanceOutAmount

***

### chargeTotalAmount?

> `optional` **chargeTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all charge amounts being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/chargeTotalAmount

***

### duePayableAmount?

> `optional` **duePayableAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an amount due and payable for this trade settlement header monetary summation, such as the
amount due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### excludingTaxesLineTotalAmount?

> `optional` **excludingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, excluding all duties and taxes, being reported in this trade
settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/excludingTaxesLineTotalAmount

***

### grandTotalAmount?

> `optional` **grandTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the grand total of this trade settlement header monetary summation, to include addition and
subtraction of individual summation amounts.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### grandTotalSpecifiedAdjustment?

> `optional` **grandTotalSpecifiedAdjustment**: [`IFinancialAdjustment`](IFinancialAdjustment.md)[]

The financial adjustment of the grand total specified for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/grandTotalSpecifiedAdjustment

***

### grossLineTotalAmount?

> `optional` **grossLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/grossLineTotalAmount

***

### includingTaxesLineTotalAmount?

> `optional` **includingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, including all duties and taxes, being reported in this trade
settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### informationAmount?

> `optional` **informationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of an amount being reported for information in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### insuranceChargeTotalAmount?

> `optional` **insuranceChargeTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all insurance charges being reported in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/insuranceChargeTotalAmount

***

### lineTotalAmount?

> `optional` **lineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the line amount total being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/lineTotalAmount

***

### netIncludingTaxesLineTotalAmount?

> `optional` **netIncludingTaxesLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and including line level
taxes, being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount

***

### netLineTotalAmount?

> `optional` **netLineTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
taxes, being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount?

> `optional` **paymentTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a payment total reported in this header trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### productValueExcludingTobaccoTaxInformationAmount?

> `optional` **productValueExcludingTobaccoTaxInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value which constitutes the total product value, excluding tobacco tax, stated for information purposes in
this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/productValueExcludingTobaccoTaxInformationAmount

***

### retailValueExcludingTaxInformationAmount?

> `optional` **retailValueExcludingTaxInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value which constitutes the retail value, excluding all duties and taxes, stated for information purposes in
this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/retailValueExcludingTaxInformationAmount

***

### roundingAmount?

> `optional` **roundingAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a rounding amount being applied in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/roundingAmount

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IDocument`](IDocument.md)[]

A document referenced for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### taxBasisTotalAmount?

> `optional` **taxBasisTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all tax basis amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/taxBasisTotalAmount

***

### taxTotalAmount?

> `optional` **taxTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total of all tax amounts being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount

***

### totalAllowanceChargeAmount?

> `optional` **totalAllowanceChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a total allowance and charge reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalDepositFeeInformationAmount?

> `optional` **totalDepositFeeInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total deposit fee stated for information purposes in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/totalDepositFeeInformationAmount

***

### totalDiscountAmount?

> `optional` **totalDiscountAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a total discount reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountAmount

***

### totalDiscountBasisAmount?

> `optional` **totalDiscountBasisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a total discount basis reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountBasisAmount

***

### totalPrepaidAmount?

> `optional` **totalPrepaidAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a prepaid total reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalPrepaidAmount

***

### totalRetailValueInformationAmount?

> `optional` **totalRetailValueInformationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value which constitutes the total retail value stated for information purposes in this trade settlement
header monetary summation.

#### See

https://vocabulary.uncefact.org/totalRetailValueInformationAmount
