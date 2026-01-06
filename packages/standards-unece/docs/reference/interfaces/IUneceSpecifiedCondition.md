# Interface: IUneceSpecifiedCondition

A state, such as of a specified person or thing.

## See

https://vocabulary.uncefact.org/SpecifiedCondition

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SpecifiedCondition"`

JSON-LD Type.

***

### actionCode?

> `optional` **actionCode**: `string`

A code specifying an action for this specified condition.

#### See

https://vocabulary.uncefact.org/actionCode

***

### actionDateTime?

> `optional` **actionDateTime**: `string`

A date, time, date time or other date time value of an action for this specified condition.

#### See

https://vocabulary.uncefact.org/actionDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified condition.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedMeasurement?

> `optional` **specifiedMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A calibrated measurement specified for this specified condition.

#### See

https://vocabulary.uncefact.org/specifiedMeasurement

***

### statement?

> `optional` **statement**: `string`

A statement, expressed as text, for this specified condition.

#### See

https://vocabulary.uncefact.org/statement

***

### statementCode?

> `optional` **statementCode**: `string`

A code specifying a statement for this specified condition.

#### See

https://vocabulary.uncefact.org/statementCode

***

### subjectTypeCode?

> `optional` **subjectTypeCode**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this specified condition.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this specified condition.

#### See

https://vocabulary.uncefact.org/valueMeasure
