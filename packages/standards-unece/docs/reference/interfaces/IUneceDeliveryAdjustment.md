# Interface: IUneceDeliveryAdjustment

A correction or modification to reflect actual delivery conditions.

## See

https://vocabulary.uncefact.org/DeliveryAdjustment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DeliveryAdjustment"`

JSON-LD Type.

***

### actualAmount? {#actualamount}

> `optional` **actualAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

An actual monetary value added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualDateTime? {#actualdatetime}

> `optional` **actualDateTime?**: `string`

The actual date, time, date time, or other date time value of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### actualQuantity? {#actualquantity}

> `optional` **actualQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### adjustmentReasonCode? {#adjustmentreasoncode}

> `optional` **adjustmentReasonCode?**: `string`

The code specifying a reason for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/adjustmentReasonCode

***

### reason? {#reason}

> `optional` **reason?**: `string`

A reason, expressed as text, for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/reason
