# Interface: IEpcisQueryDocument

EPCIS 2.0 QueryDocument used to submit queries to an EPCIS repository.

## See

https://ref.gs1.org/epcis/EPCISQueryDocument

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

The @context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### id?

> `optional` **id**: `string`

The JSON-LD document id.

***

### type

> **type**: `"EPCISQueryDocument"`

JSON-LD Type.

***

### schemaVersion?

> `optional` **schemaVersion**: `string`

Schema version.

***

### creationDate?

> `optional` **creationDate**: `string`

Creation Date.

***

### epcisBody

> **epcisBody**: [`IEpcisQueryDocumentBody`](IEpcisQueryDocumentBody.md)

The EPCIS Body.
