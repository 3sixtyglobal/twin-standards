# Interface: IEpcisQueryResults

EPCIS 2.0 QueryResults payload returned from a repository query.

## See

https://ref.gs1.org/epcis/QueryResults

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### subscriptionID?

> `optional` **subscriptionID**: `string`

The concerned subscription.

***

### queryName

> **queryName**: `string`

The concerned query.

***

### resultsBody

> **resultsBody**: [`IEpcisQueryResultsBody`](IEpcisQueryResultsBody.md)

The query results payload.
