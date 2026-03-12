# Interface: IUnecePaymentBalanceOut

Offset information to ensure that debits and credits are equal for a transaction.

## See

https://vocabulary.uncefact.org/PaymentBalanceOut

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentBalanceOut"`

JSON-LD Type.

***

### calculatedAmount? {#calculatedamount}

> `optional` **calculatedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value calculated for this payment balance out.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this payment balance out.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this payment balance out.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of an occurrence of this payment balance out.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode**: `string`

The code specifying the reason for this payment balance out.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### reasonDescription? {#reasondescription}

> `optional` **reasonDescription**: `string`

A textual description of the reason for this payment balance out.

#### See

https://vocabulary.uncefact.org/reasonDescription
