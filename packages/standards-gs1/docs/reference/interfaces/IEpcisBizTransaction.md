# Interface: IEpcisBizTransaction

EPCIS 2.0 BizTransaction element identifying a business document and its type.

## See

https://ref.gs1.org/epcis/BizTransaction

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### type?

> `optional` **type**: `string`

Identifier that indicates the type of BizTransaction document (e.g. Purchase
Order, Despatch Advice).

Use [EpcisBizTransactionTypes](../variables/EpcisBizTransactionTypes.md) for known values.

***

### bizTransaction

> **bizTransaction**: `string`

URI identifier of the specific business transaction document (alias of id in
JSON or XML).
