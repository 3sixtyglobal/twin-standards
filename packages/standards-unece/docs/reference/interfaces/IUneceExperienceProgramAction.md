# Interface: IUneceExperienceProgramAction

Any type of action, such as searching, reserving, or paying, necessary for an experience program, such as an adventure
experience, a business experience, or a wellness experience.

## See

https://vocabulary.uncefact.org/ExperienceProgramAction

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ExperienceProgramAction"`

JSON-LD Type.

***

### actionType?

> `optional` **actionType**: `string`

A type, expressed as text, of experience program action.

#### See

https://vocabulary.uncefact.org/actionType

***

### description?

> `optional` **description**: `string`

A textual description of this experience program action.

#### See

https://vocabulary.uncefact.org/description

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this experience program action.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this experience program action.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of experience program action.

#### See

https://vocabulary.uncefact.org/typeCode
