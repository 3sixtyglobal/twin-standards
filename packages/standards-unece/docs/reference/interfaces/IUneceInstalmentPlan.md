# Interface: IUneceInstalmentPlan

A plan for paying a total sum of money by several payments made over a period of time.

## See

https://vocabulary.uncefact.org/InstalmentPlan

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"InstalmentPlan"`

JSON-LD Type.

***

### specifiedInstalmentPayment

> **specifiedInstalmentPayment**: [`IUneceInstalmentPayment`](IUneceInstalmentPayment.md)[]

An instalment payment specified for this instalment plan.

#### See

https://vocabulary.uncefact.org/specifiedInstalmentPayment
