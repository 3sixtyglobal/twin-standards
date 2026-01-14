# Interface: IEpcisPersistentDisposition

EPCIS 2.0 PersistentDisposition indicating business conditions to set or unset
independently of event disposition.

## See

https://ref.gs1.org/epcis/PersistentDisposition

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### set?

> `optional` **set**: `string`[]

(Optional) List of persistentDisposition URI values to be set.

***

### unset?

> `optional` **unset**: `string`[]

(Optional) List of persistentDisposition URI values to be unset (revoked).
