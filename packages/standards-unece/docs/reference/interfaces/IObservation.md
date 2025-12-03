# Interface: IObservation

A specified act or instance of viewing or noting a fact or occurrence for some scientific or other special purpose.

## See

https://vocabulary.uncefact.org/Observation

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

> **type**: `"Observation"`

JSON-LD Type.

***

### applicableNote?

> `optional` **applicableNote**: [`INote`](INote.md)[]

A note providing information applicable to this specified observation.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### description?

> `optional` **description**: `string`

The textual description for this specified observation.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified observation.

#### See

https://vocabulary.uncefact.org/identifier

***

### relatedBinaryFile?

> `optional` **relatedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A binary file related to this specified observation.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile
