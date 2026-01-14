# Interface: IEpcisQueryResultsBody

EPCIS 2.0 QueryResultsBody containing events and optional master data.

## See

https://ref.gs1.org/epcis/QueryResultsBody

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### eventList

> **eventList**: [`EpcisEvents`](../type-aliases/EpcisEvents.md)[]

The list of events.

***

### vocabularyList?

> `optional` **vocabularyList**: [`IEpcisVocabulary`](IEpcisVocabulary.md)[]

Optional master data.
