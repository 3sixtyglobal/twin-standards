# Interface: IUneceError

A notification that an error has occurred.

## See

https://vocabulary.uncefact.org/Error

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Error"`

JSON-LD Type.

***

### associatedEvent? {#associatedevent}

> `optional` **associatedEvent**: [`IUneceCorrectiveEvent`](IUneceCorrectiveEvent.md)[]

A corrective event associated with this declared error.

#### See

https://vocabulary.uncefact.org/associatedEvent

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

An issue date, time, date time or other date time value for this declared error.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode**: `string`

A code specifying a reason for the declared error.

#### See

https://vocabulary.uncefact.org/reasonCode
