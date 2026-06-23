# Interface: IUneceTradeSettlementLineMonetarySummation

A collection of monetary amount totals, specified at line level, for a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementLineMonetarySummation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeSettlementLineMonetarySummation"`

JSON-LD Type.

***

### allowanceTotalAmount? {#allowancetotalamount}

> `optional` **allowanceTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all allowance amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/allowanceTotalAmount

***

### chargeTotalAmount? {#chargetotalamount}

> `optional` **chargeTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all charge amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/chargeTotalAmount

***

### duePayableAmount? {#duepayableamount}

> `optional` **duePayableAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount due and payable for this trade settlement line monetary summation, such as the amount
due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### grandTotalAmount? {#grandtotalamount}

> `optional` **grandTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the grand total of this trade settlement line monetary summation, to include addition and
subtraction of individual summation amounts.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### grossLineTotalAmount? {#grosslinetotalamount}

> `optional` **grossLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, excluding line level allowances and charges and taxes, being reported
in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/grossLineTotalAmount

***

### includingTaxesLineTotalAmount? {#includingtaxeslinetotalamount}

> `optional` **includingTaxesLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line total, including taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### informationAmount? {#informationamount}

> `optional` **informationAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an amount being reported for information in this trade settlement monetary summation.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### lineTotalAmount? {#linetotalamount}

> `optional` **lineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line amount total being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/lineTotalAmount

***

### netIncludingTaxesLineTotalAmount? {#netincludingtaxeslinetotalamount}

> `optional` **netIncludingTaxesLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and including line level
taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/netIncludingTaxesLineTotalAmount

***

### netLineTotalAmount? {#netlinetotalamount}

> `optional` **netLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all line amounts, including line level allowances and charges and excluding line level
taxes, being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount? {#paymenttotalamount}

> `optional` **paymentTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a payment total reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### productWeightLossInformationAmount? {#productweightlossinformationamount}

> `optional` **productWeightLossInformationAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the loss of weight of a product, such as fresh goods, stated for information purposes in this trade
settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/productWeightLossInformationAmount

***

### taxBasisTotalAmount? {#taxbasistotalamount}

> `optional` **taxBasisTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax basis amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/taxBasisTotalAmount

***

### taxTotalAmount? {#taxtotalamount}

> `optional` **taxTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax amounts being reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount

***

### totalAllowanceChargeAmount? {#totalallowancechargeamount}

> `optional` **totalAllowanceChargeAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a total allowance and charge reported in this trade settlement line monetary summation.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalRetailValueInformationAmount? {#totalretailvalueinformationamount}

> `optional` **totalRetailValueInformationAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value which constitutes the total retail value stated for information purposes in this trade settlement line
monetary summation.

#### See

https://vocabulary.uncefact.org/totalRetailValueInformationAmount
