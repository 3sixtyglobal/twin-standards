# Interface: IUneceTradeSettlementPayment

The specific discharge obligations in respect of funds or securities transferred between two or more parties as part of
a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementPayment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeSettlementPayment"`

JSON-LD Type.

***

### closingBookDueDateTime? {#closingbookduedatetime}

> `optional` **closingBookDueDateTime?**: `string`

A date, time, date time or other date time value of a closing book due date for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/closingBookDueDateTime

***

### endToEndId? {#endtoendid}

> `optional` **endToEndId?**: `string` \| `IJsonLdValueObject`

The unique identifier for the end-to-end processing of this trade settlement payment, such as an identifier assigned by
an initiating party to unambiguously identify the transaction.

#### See

https://vocabulary.uncefact.org/endToEndId

***

### instructionId? {#instructionid}

> `optional` **instructionId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the instruction for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/instructionId

***

### requestedExecutionDateTime? {#requestedexecutiondatetime}

> `optional` **requestedExecutionDateTime?**: `string`

The date, time, date time or other date time value of the requested execution of this trade settlement payment.

#### See

https://vocabulary.uncefact.org/requestedExecutionDateTime

***

### specifiedPaymentTradeSettlement? {#specifiedpaymenttradesettlement}

> `optional` **specifiedPaymentTradeSettlement?**: [`IUnecePaymentTradeSettlement`](IUnecePaymentTradeSettlement.md)[]

A trade settlement payment specified for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
