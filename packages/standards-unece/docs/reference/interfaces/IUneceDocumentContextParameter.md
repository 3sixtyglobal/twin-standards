# Interface: IUneceDocumentContextParameter

A feature that is fixed for a particular document context.

## See

https://vocabulary.uncefact.org/DocumentContextParameter

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

> **type**: `"DocumentContextParameter"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this document context parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedVersion?

> `optional` **specifiedVersion**: [`IUneceVersion`](IUneceVersion.md)

The document version specified for this document context parameter.

#### See

https://vocabulary.uncefact.org/specifiedVersion

***

### value?

> `optional` **value**: `string`

The value, expressed as text, of this document context parameter.

#### See

https://vocabulary.uncefact.org/value
