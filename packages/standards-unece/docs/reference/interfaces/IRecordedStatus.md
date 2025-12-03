# Interface: IRecordedStatus

Recorded information relevant to a condition or a position of an object.

## See

https://vocabulary.uncefact.org/RecordedStatus

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

> **type**: `"RecordedStatus"`

JSON-LD Type.

***

### changedDateTime?

> `optional` **changedDateTime**: `string`

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

### recordedStatusConditionCode?

> `optional` **recordedStatusConditionCode**: `string`

The code specifying the condition for this recorded status.

#### See

https://vocabulary.uncefact.org/recordedStatusConditionCode
