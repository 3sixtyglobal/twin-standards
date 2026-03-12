# Interface: IUneceBooking

A result of a financial transaction recorded within a financial account.

## See

https://vocabulary.uncefact.org/Booking

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Booking"`

JSON-LD Type.

***

### actualDateTime? {#actualdatetime}

> `optional` **actualDateTime**: `string`

An actual date, time, date time, or other date time value of this financial booking.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### creditDateTime? {#creditdatetime}

> `optional` **creditDateTime**: `string`

The credit date, time, date time, or other date time value of this financial booking.

#### See

https://vocabulary.uncefact.org/creditDateTime

***

### debitDateTime? {#debitdatetime}

> `optional` **debitDateTime**: `string`

The debit date, time, date time, or other date time value of this financial booking.

#### See

https://vocabulary.uncefact.org/debitDateTime
