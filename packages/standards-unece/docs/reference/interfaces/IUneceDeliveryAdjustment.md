# Interface: IUneceDeliveryAdjustment

A correction or modification to reflect actual delivery conditions.

## See

https://vocabulary.uncefact.org/DeliveryAdjustment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"DeliveryAdjustment"`

JSON-LD Type.

***

### actualAmount?

> `optional` **actualAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An actual monetary value added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualDateTime?

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### actualQuantity?

> `optional` **actualQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### adjustmentReasonCode?

> `optional` **adjustmentReasonCode**: [`UneceAdjustmentReasonCodeList`](../type-aliases/UneceAdjustmentReasonCodeList.md)

The code specifying a reason for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/adjustmentReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/reason
