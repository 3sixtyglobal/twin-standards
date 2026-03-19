# Interface: IUneceSpecifiedCondition

A state, such as of a specified person or thing.

## See

https://vocabulary.uncefact.org/SpecifiedCondition

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedCondition"`

JSON-LD Type.

***

### actionCode? {#actioncode}

> `optional` **actionCode?**: `string`

A code specifying an action for this specified condition.

#### See

https://vocabulary.uncefact.org/actionCode

***

### actionDateTime? {#actiondatetime}

> `optional` **actionDateTime?**: `string`

A date, time, date time or other date time value of an action for this specified condition.

#### See

https://vocabulary.uncefact.org/actionDateTime

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this specified condition.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedMeasurement? {#specifiedmeasurement}

> `optional` **specifiedMeasurement?**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A calibrated measurement specified for this specified condition.

#### See

https://vocabulary.uncefact.org/specifiedMeasurement

***

### statement? {#statement}

> `optional` **statement?**: `string`

A statement, expressed as text, for this specified condition.

#### See

https://vocabulary.uncefact.org/statement

***

### statementCode? {#statementcode}

> `optional` **statementCode?**: `string`

A code specifying a statement for this specified condition.

#### See

https://vocabulary.uncefact.org/statementCode

***

### subjectTypeCode? {#subjecttypecode}

> `optional` **subjectTypeCode?**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this specified condition.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this specified condition.

#### See

https://vocabulary.uncefact.org/valueMeasure
