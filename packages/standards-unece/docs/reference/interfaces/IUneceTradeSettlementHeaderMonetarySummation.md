# Interface: IUneceTradeSettlementHeaderMonetarySummation

A collection of monetary amount totals, specified at header level, for a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementHeaderMonetarySummation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeSettlementHeaderMonetarySummation"`

JSON-LD Type.

***

### adjustedBalanceOutAmount? {#adjustedbalanceoutamount}

> `optional` **adjustedBalanceOutAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an adjusted amount balanced out for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedBalanceOutAmount

***

### allowanceTotalAmount? {#allowancetotalamount}

> `optional` **allowanceTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all allowance amounts being reported in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/allowanceTotalAmount

***

### applicableHeaderBalanceOut? {#applicableheaderbalanceout}

> `optional` **applicableHeaderBalanceOut**: [`IUneceHeaderBalanceOut`](IUneceHeaderBalanceOut.md)[]

A header balance out applicable to this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/applicableHeaderBalanceOut

***

### balanceOutAmount? {#balanceoutamount}

> `optional` **balanceOutAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount balanced out for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/balanceOutAmount

***

### chargeTotalAmount? {#chargetotalamount}

> `optional` **chargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all charge amounts being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/chargeTotalAmount

***

### duePayableAmount? {#duepayableamount}

> `optional` **duePayableAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount due and payable for this trade settlement header monetary summation, such as the
amount due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### excludingTaxesLineTotalAmount? {#excludingtaxeslinetotalamount}

> `optional` **excludingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, excluding all duties and taxes, being reported in this trade
settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/excludingTaxesLineTotalAmount

***

### grandTotalAmount? {#grandtotalamount}

> `optional` **grandTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the grand total of this trade settlement header monetary summation, to include addition and
subtraction of individual summation amounts.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### grandTotalSpecifiedAdjustment? {#grandtotalspecifiedadjustment}

> `optional` **grandTotalSpecifiedAdjustment**: [`IUneceFinancialAdjustment`](IUneceFinancialAdjustment.md)

The financial adjustment of the grand total specified for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/grandTotalSpecifiedAdjustment

***

### grossLineTotalAmount? {#grosslinetotalamount}

> `optional` **grossLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/grossLineTotalAmount

***

### includingTaxesLineTotalAmount? {#includingtaxeslinetotalamount}

> `optional` **includingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including all duties and taxes, being reported in this trade
settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### informationAmount? {#informationamount}

> `optional` **informationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an amount being reported for information in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### insuranceChargeTotalAmount? {#insurancechargetotalamount}

> `optional` **insuranceChargeTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all insurance charges being reported in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/insuranceChargeTotalAmount

***

### lineTotalAmount? {#linetotalamount}

> `optional` **lineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line amount total being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/lineTotalAmount

***

### netIncludingTaxesLineTotalAmount? {#netincludingtaxeslinetotalamount}

> `optional` **netIncludingTaxesLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and including line level
taxes, being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount

***

### netLineTotalAmount? {#netlinetotalamount}

> `optional` **netLineTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
taxes, being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount? {#paymenttotalamount}

> `optional` **paymentTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a payment total reported in this header trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### productValueExcludingTobaccoTaxInformationAmount? {#productvalueexcludingtobaccotaxinformationamount}

> `optional` **productValueExcludingTobaccoTaxInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the total product value, excluding tobacco tax, stated for information purposes in
this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/productValueExcludingTobaccoTaxInformationAmount

***

### retailValueExcludingTaxInformationAmount? {#retailvalueexcludingtaxinformationamount}

> `optional` **retailValueExcludingTaxInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the retail value, excluding all duties and taxes, stated for information purposes in
this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/retailValueExcludingTaxInformationAmount

***

### roundingAmount? {#roundingamount}

> `optional` **roundingAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a rounding amount being applied in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/roundingAmount

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced for this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### taxBasisTotalAmount? {#taxbasistotalamount}

> `optional` **taxBasisTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax basis amounts being reported in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/taxBasisTotalAmount

***

### taxTotalAmount? {#taxtotalamount}

> `optional` **taxTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax amounts being reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount

***

### totalAllowanceChargeAmount? {#totalallowancechargeamount}

> `optional` **totalAllowanceChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total allowance and charge reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalDepositFeeInformationAmount? {#totaldepositfeeinformationamount}

> `optional` **totalDepositFeeInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total deposit fee stated for information purposes in this trade settlement header monetary
summation.

#### See

https://vocabulary.uncefact.org/totalDepositFeeInformationAmount

***

### totalDiscountAmount? {#totaldiscountamount}

> `optional` **totalDiscountAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total discount reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountAmount

***

### totalDiscountBasisAmount? {#totaldiscountbasisamount}

> `optional` **totalDiscountBasisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total discount basis reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalDiscountBasisAmount

***

### totalPrepaidAmount? {#totalprepaidamount}

> `optional` **totalPrepaidAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a prepaid total reported in this trade settlement header monetary summation.

#### See

https://vocabulary.uncefact.org/totalPrepaidAmount

***

### totalRetailValueInformationAmount? {#totalretailvalueinformationamount}

> `optional` **totalRetailValueInformationAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the total retail value stated for information purposes in this trade settlement
header monetary summation.

#### See

https://vocabulary.uncefact.org/totalRetailValueInformationAmount
