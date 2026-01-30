# Interface: IUneceLaboratoryObservationNote

Notes and conclusions related to a laboratory observation.

## See

https://vocabulary.uncefact.org/LaboratoryObservationNote

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"LaboratoryObservationNote"`

JSON-LD Type.

***

### content?

> `optional` **content**: `string`

The content, expressed as text, of this laboratory observation note.

#### See

https://vocabulary.uncefact.org/content

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value for the creation of this laboratory observation note.

#### See

https://vocabulary.uncefact.org/creationDateTime
