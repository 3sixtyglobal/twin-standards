# Interface: IUneceTradeSettlementPaymentMonetarySummation

A collection of monetary amount totals specified for a trade settlement payment.

## See

https://vocabulary.uncefact.org/TradeSettlementPaymentMonetarySummation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeSettlementPaymentMonetarySummation"`

JSON-LD Type.

***

### adjustedBalanceOutAmount? {#adjustedbalanceoutamount}

> `optional` **adjustedBalanceOutAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an adjusted amount balanced out for this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/adjustedBalanceOutAmount

***

### applicablePaymentBalanceOut? {#applicablepaymentbalanceout}

> `optional` **applicablePaymentBalanceOut?**: [`IUnecePaymentBalanceOut`](IUnecePaymentBalanceOut.md)[]

A balance out applicable to this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/applicablePaymentBalanceOut

***

### balanceOutAmount? {#balanceoutamount}

> `optional` **balanceOutAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is an amount balanced out for this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/balanceOutAmount

***

### equivalentTransferTotalAmount? {#equivalenttransfertotalamount}

> `optional` **equivalentTransferTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value transferred as an equivalent amount in the credit transfer payment in this trade settlement payment
monetary summation, such as the amount transferred between debtor and creditor, before deduction of charges, expressed
in the currency of the debtor's account, and transferred into a different currency.

#### See

https://vocabulary.uncefact.org/equivalentTransferTotalAmount

***

### grandTotalAmount? {#grandtotalamount}

> `optional` **grandTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a grand total reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### includingTaxesLineTotalAmount? {#includingtaxeslinetotalamount}

> `optional` **includingTaxesLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the line total, including taxes, being reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/includingTaxesLineTotalAmount

***

### netLineTotalAmount? {#netlinetotalamount}

> `optional` **netLineTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the net total of all line amounts, including line level allowances and charges and excluding line
level taxes, being reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/netLineTotalAmount

***

### paymentTotalAmount? {#paymenttotalamount}

> `optional` **paymentTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a payment total reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/paymentTotalAmount

***

### taxTotalAmount? {#taxtotalamount}

> `optional` **taxTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total of all tax amounts reported in this trade settlement payment monetary summation.

#### See

https://vocabulary.uncefact.org/taxTotalAmount
