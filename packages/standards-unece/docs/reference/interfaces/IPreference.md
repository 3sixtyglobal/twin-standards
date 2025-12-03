# Interface: IPreference

An involvement in a happening, such as a theme park, a guided tour that is liked or wanted more than another item.

## See

https://vocabulary.uncefact.org/Preference

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

> **type**: `"Preference"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this experience item preference.

#### See

https://vocabulary.uncefact.org/description

***

### dislikedItem?

> `optional` **dislikedItem**: `string`

A disliked item, expressed as text, for this experience item preference.

#### See

https://vocabulary.uncefact.org/dislikedItem

***

### preferredItem?

> `optional` **preferredItem**: `string`

A preferred item, expressed as text, for this experience item preference.

#### See

https://vocabulary.uncefact.org/preferredItem

***

### priorityRankingNumeric?

> `optional` **priorityRankingNumeric**: `string`

The priority ranking number for this experience item preference.

#### See

https://vocabulary.uncefact.org/priorityRankingNumeric
