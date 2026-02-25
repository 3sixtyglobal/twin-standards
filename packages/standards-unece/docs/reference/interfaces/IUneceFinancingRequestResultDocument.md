# Interface: IUneceFinancingRequestResultDocument

A collection of data that reports the result of a financing request.

## See

https://vocabulary.uncefact.org/FinancingRequestResultDocument

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"FinancingRequestResultDocument"`

JSON-LD Type.

***

### financedRatePercent?

> `optional` **financedRatePercent**: `string`

The financed rate, expressed as a percentage, in this financing request result document.

#### See

https://vocabulary.uncefact.org/financedRatePercent

***

### financedTotalAmount?

> `optional` **financedTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the financed total amount in this financing request result document.

#### See

https://vocabulary.uncefact.org/financedTotalAmount

***

### specifiedFinancingStatus?

> `optional` **specifiedFinancingStatus**: [`IUneceFinancingStatus`](IUneceFinancingStatus.md)

The financing status specified in this financing request result document.

#### See

https://vocabulary.uncefact.org/specifiedFinancingStatus
