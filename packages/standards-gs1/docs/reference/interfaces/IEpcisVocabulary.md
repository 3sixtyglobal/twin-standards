# Interface: IEpcisVocabulary

EPCIS 2.0 Vocabulary container that groups related vocabulary elements.

## See

https://ref.gs1.org/epcis/Vocabulary

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### type

> **type**: `string`

Vocabulary type.

***

### vocabularyElementList?

> `optional` **vocabularyElementList**: [`IEpcisVocabularyElement`](IEpcisVocabularyElement.md)[]

List of vocabulary elements.
