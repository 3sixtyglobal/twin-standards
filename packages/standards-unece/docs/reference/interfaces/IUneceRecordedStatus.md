# Interface: IUneceRecordedStatus

Recorded information relevant to a condition or a position of an object.

## See

https://vocabulary.uncefact.org/RecordedStatus

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"RecordedStatus"`

JSON-LD Type.

***

### changedDateTime

> **changedDateTime**: `string`

The date, time, date time, or other date time value when this recorded status changed.

#### See

https://vocabulary.uncefact.org/changedDateTime

***

### changerName?

> `optional` **changerName**: `string`

The name of the person or system, expressed as text, that changed this recorded status.

#### See

https://vocabulary.uncefact.org/changerName

***

### recordedStatusConditionCode

> **recordedStatusConditionCode**: `string`

The code specifying the condition for this recorded status.

#### See

https://vocabulary.uncefact.org/recordedStatusConditionCode
