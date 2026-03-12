# Interface: IUnecePaymentDiscountTerms

Trade terms and conditions by which a discount is or can be applied to a payable amount.

## See

https://vocabulary.uncefact.org/PaymentDiscountTerms

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentDiscountTerms"`

JSON-LD Type.

***

### actualDiscountAmount? {#actualdiscountamount}

> `optional` **actualDiscountAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the actual discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/actualDiscountAmount

***

### basisAmount? {#basisamount}

> `optional` **basisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value used as a basis to calculate the discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisDateTime? {#basisdatetime}

> `optional` **basisDateTime**: `string`

The date, time, date time, or other date time value used as the basis to calculate the discount in the trade payment
discount terms.

#### See

https://vocabulary.uncefact.org/basisDateTime

***

### basisPeriodMeasure? {#basisperiodmeasure}

> `optional` **basisPeriodMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the basis period for these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/basisPeriodMeasure

***

### calculationPercent? {#calculationpercent}

> `optional` **calculationPercent**: `string`

The percent used to calculate the discount in these trade payment discount terms.

#### See

https://vocabulary.uncefact.org/calculationPercent
