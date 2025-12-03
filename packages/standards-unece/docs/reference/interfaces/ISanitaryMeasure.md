# Interface: ISanitaryMeasure

Sanitary measures as reported for a WHO MDH (Maritime Declaration of Health).

## See

https://vocabulary.uncefact.org/SanitaryMeasure

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

> **type**: `"SanitaryMeasure"`

JSON-LD Type.

***

### applicationDateTime?

> `optional` **applicationDateTime**: `string`

An application date, time, date time or other date time value for this MDH sanitary measure.

#### See

https://vocabulary.uncefact.org/applicationDateTime

***

### description?

> `optional` **description**: `string`

A textual description of this MDH sanitary measure.

#### See

https://vocabulary.uncefact.org/description

***

### location?

> `optional` **location**: `string`

A location, expressed as text, for this MDH sanitary measure.

#### See

https://vocabulary.uncefact.org/location

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of MDH sanitary measure.

#### See

https://vocabulary.uncefact.org/typeCode
