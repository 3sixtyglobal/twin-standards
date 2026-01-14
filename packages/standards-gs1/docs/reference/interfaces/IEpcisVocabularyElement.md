# Interface: IEpcisVocabularyElement

EPCIS 2.0 VocabularyElement representing a master data entity with
attributes and optional children.

## See

https://ref.gs1.org/epcis/VocabularyElement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### id

> **id**: `string`

Element id.

***

### attributes?

> `optional` **attributes**: [`IEpcisAttribute`](IEpcisAttribute.md)[]

Attributes.

***

### children?

> `optional` **children**: `string`[]

Children.
