# Interface: IUneceInspectionNote

Notes, such as conclusions, related to an inspection.

## See

https://vocabulary.uncefact.org/InspectionNote

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

> **type**: `"InspectionNote"`

JSON-LD Type.

***

### content?

> `optional` **content**: `string`

Content, expressed as text, of this inspection note.

#### See

https://vocabulary.uncefact.org/content

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value for the creation of this inspection note.

#### See

https://vocabulary.uncefact.org/creationDateTime
