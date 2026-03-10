# Interface: IUneceHeaderBalanceOut

Offset header information to ensure that debits and credits are equal for a transaction.

## See

https://vocabulary.uncefact.org/HeaderBalanceOut

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"HeaderBalanceOut"`

JSON-LD Type.

***

### breakdownBalanceOut?

> `optional` **breakdownBalanceOut**: `IUneceHeaderBalanceOut`[]

A balance out breakdown of this header balance out.

#### See

https://vocabulary.uncefact.org/breakdownBalanceOut

***

### calculatedAmount?

> `optional` **calculatedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value calculated for this header balance out.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### description?

> `optional` **description**: `string`

A textual description of this header balance out.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this header balance out.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of an occurrence of this header balance out.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### reasonCode?

> `optional` **reasonCode**: `string`

The code specifying the reason for this header balance out.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### reasonDescription?

> `optional` **reasonDescription**: `string`

A textual description of the reason for this header balance out.

#### See

https://vocabulary.uncefact.org/reasonDescription
