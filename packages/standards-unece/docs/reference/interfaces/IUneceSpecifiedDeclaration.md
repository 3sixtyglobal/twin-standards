# Interface: IUneceSpecifiedDeclaration

An act of notification by formal documentation or action, in any form prescribed or accepted, such as a
self-declaration.

## See

https://vocabulary.uncefact.org/SpecifiedDeclaration

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"SpecifiedDeclaration"`

JSON-LD Type.

***

### associatedStandard?

> `optional` **associatedStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard associated with this specified declaration.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### assuranceLevelCode?

> `optional` **assuranceLevelCode**: `string`

A code specifying an assurance level of this specified declaration.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### description?

> `optional` **description**: `string`

A textual description of this specified declaration.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this specified declaration.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The issue date, time, date time or other date time value for this specified declaration.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issuerParty?

> `optional` **issuerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party that issues this specified declaration.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified declaration.

#### See

https://vocabulary.uncefact.org/name

***

### subjectTypeCode?

> `optional` **subjectTypeCode**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this specified declaration.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified declaration.

#### See

https://vocabulary.uncefact.org/typeCode

***

### verifiedObject?

> `optional` **verifiedObject**: [`IUneceObject`](IUneceObject.md)[]

An object verified for this specified declaration.

#### See

https://vocabulary.uncefact.org/verifiedObject
