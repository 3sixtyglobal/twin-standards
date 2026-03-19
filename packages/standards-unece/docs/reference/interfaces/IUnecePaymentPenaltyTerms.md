# Interface: IUnecePaymentPenaltyTerms

Trade terms and conditions by which a penalty is or can be applied to a payable amount.

## See

https://vocabulary.uncefact.org/PaymentPenaltyTerms

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentPenaltyTerms"`

JSON-LD Type.

***

### actualPenaltyAmount? {#actualpenaltyamount}

> `optional` **actualPenaltyAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the actual penalty in these trade payment penalty terms.

#### See

https://vocabulary.uncefact.org/actualPenaltyAmount

***

### basisAmount? {#basisamount}

> `optional` **basisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value used as a basis to calculate these trade payment penalty terms.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisDateTime? {#basisdatetime}

> `optional` **basisDateTime?**: `string`

The date, time, date time, or other date time value used as the basis to calculate these trade payment penalty terms.

#### See

https://vocabulary.uncefact.org/basisDateTime

***

### basisPeriodMeasure? {#basisperiodmeasure}

> `optional` **basisPeriodMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the period used as a basis to calculate these trade payment penalty terms.

#### See

https://vocabulary.uncefact.org/basisPeriodMeasure

***

### calculationPercent? {#calculationpercent}

> `optional` **calculationPercent?**: `string`

The percent applied to calculate these trade payment penalty terms.

#### See

https://vocabulary.uncefact.org/calculationPercent
