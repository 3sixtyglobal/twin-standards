# Interface: IUneceNote

A textual or coded description, such as a remark or additional information.

## See

https://vocabulary.uncefact.org/Note

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

> **type**: `"Note"`

JSON-LD Type.

***

### content?

> `optional` **content**: `string`

A content, expressed as text, of this note.

#### See

https://vocabulary.uncefact.org/content

***

### contentCode?

> `optional` **contentCode**: `string`

A code specifying the content of this note.

#### See

https://vocabulary.uncefact.org/contentCode

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value for the creation of this note.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this note.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this note.

#### See

https://vocabulary.uncefact.org/name

***

### noteSubjectCode?

> `optional` **noteSubjectCode**: `string`

A code specifying the subject of this note.

#### See

https://vocabulary.uncefact.org/noteSubjectCode

***

### subject?

> `optional` **subject**: `string`

The subject, expressed as text, of this note.

#### See

https://vocabulary.uncefact.org/subject
