# Interface: IEpcisHeader

EPCIS 2.0 Header carrying optional master data alongside an EPCIS document.

## See

https://ref.gs1.org/epcis/EPCISHeader

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### epcisMasterData?

> `optional` **epcisMasterData**: `IJsonLdNodeObject` & `object`

EPCIS master data.

#### Type Declaration

##### vocabularyList?

> `optional` **vocabularyList**: [`IEpcisVocabulary`](IEpcisVocabulary.md)[]

Vocabulary list.
