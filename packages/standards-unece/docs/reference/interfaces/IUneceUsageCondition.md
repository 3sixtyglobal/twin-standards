# Interface: IUneceUsageCondition

The particular state of something, affected by use, that should be respected.

## See

https://vocabulary.uncefact.org/UsageCondition

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"UsageCondition"`

JSON-LD Type.

***

### ageLimitation? {#agelimitation}

> `optional` **ageLimitation?**: `string`

An age limitation, expressed as text, for this specified usage condition.

#### See

https://vocabulary.uncefact.org/ageLimitation

***

### appropriateClothing? {#appropriateclothing}

> `optional` **appropriateClothing?**: `string`

Appropriate clothing, expressed as text, for this specified usage condition.

#### See

https://vocabulary.uncefact.org/appropriateClothing

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified usage condition.

#### See

https://vocabulary.uncefact.org/description

***

### duration? {#duration}

> `optional` **duration?**: `string`

A duration, expressed as text, for this specified usage condition.

#### See

https://vocabulary.uncefact.org/duration

***

### genderLimitation? {#genderlimitation}

> `optional` **genderLimitation?**: `string`

A gender limitation, expressed as text, for this specified usage condition.

#### See

https://vocabulary.uncefact.org/genderLimitation

***

### occupancy? {#occupancy}

> `optional` **occupancy?**: `string`

Occupancy, expressed as text, for this specified usage condition.

#### See

https://vocabulary.uncefact.org/occupancy

***

### requiringParty? {#requiringparty}

> `optional` **requiringParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party requiring this specified usage condition.

#### See

https://vocabulary.uncefact.org/requiringParty
