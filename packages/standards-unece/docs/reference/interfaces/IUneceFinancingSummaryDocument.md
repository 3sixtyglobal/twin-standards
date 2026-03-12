# Interface: IUneceFinancingSummaryDocument

A collection of financing related data that provides an overview of key points.

## See

https://vocabulary.uncefact.org/FinancingSummaryDocument

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancingSummaryDocument"`

JSON-LD Type.

***

### acceptedTransactionOriginalTotalAmount? {#acceptedtransactionoriginaltotalamount}

> `optional` **acceptedTransactionOriginalTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An original total monetary value of accepted transactions in this financing summary document.

#### See

https://vocabulary.uncefact.org/acceptedTransactionOriginalTotalAmount

***

### financedAppliedRatePercent? {#financedappliedratepercent}

> `optional` **financedAppliedRatePercent**: `string`

The financed applied rate, expressed as a percentage, in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedAppliedRatePercent

***

### financedTotalAmount? {#financedtotalamount}

> `optional` **financedTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A financed total monetary value in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedTotalAmount

***

### financedTransactionSpecifiedQuantity? {#financedtransactionspecifiedquantity}

> `optional` **financedTransactionSpecifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of financed transactions specified in this financing summary document.

#### See

https://vocabulary.uncefact.org/financedTransactionSpecifiedQuantity

***

### lineOfCreditSpecifiedFinancialAccount? {#lineofcreditspecifiedfinancialaccount}

> `optional` **lineOfCreditSpecifiedFinancialAccount**: [`IUneceFinancingFinancialAccount`](IUneceFinancingFinancialAccount.md)

The financing financial account, used for managing the line of credit, specified for this financing summary document.

#### See

https://vocabulary.uncefact.org/lineOfCreditSpecifiedFinancialAccount

***

### relatedBooking? {#relatedbooking}

> `optional` **relatedBooking**: [`IUneceBooking`](IUneceBooking.md)

The financial booking related to this financing summary document.

#### See

https://vocabulary.uncefact.org/relatedBooking

***

### specifiedCreditorFinancialAccount? {#specifiedcreditorfinancialaccount}

> `optional` **specifiedCreditorFinancialAccount**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)

The creditor financial account, used for crediting, specified for this financing summary document.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
