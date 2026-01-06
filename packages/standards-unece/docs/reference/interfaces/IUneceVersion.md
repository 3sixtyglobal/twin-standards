# Interface: IUneceVersion

A specific variant of a document.

## See

https://vocabulary.uncefact.org/Version

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

> **type**: `"Version"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this document version.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date and time or other date time value of issue of this document version.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this document version.

#### See

https://vocabulary.uncefact.org/name
