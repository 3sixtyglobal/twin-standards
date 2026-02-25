# Interface: IUneceGuarantee

An official promise or assurance to fulfil a financial obligation.

## See

https://vocabulary.uncefact.org/Guarantee

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Guarantee"`

JSON-LD Type.

***

### condition?

> `optional` **condition**: `string`

A condition, expressed as text, for this financial guarantee.

#### See

https://vocabulary.uncefact.org/condition

***

### description?

> `optional` **description**: `string`

A textual description of this financial guarantee.

#### See

https://vocabulary.uncefact.org/description

***

### effectiveDelimitedPeriod?

> `optional` **effectiveDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)

The period within which this financial guarantee is effective.

#### See

https://vocabulary.uncefact.org/effectiveDelimitedPeriod

***

### liabilityAmount?

> `optional` **liabilityAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a liability in this financial guarantee.

#### See

https://vocabulary.uncefact.org/liabilityAmount
