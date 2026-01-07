# Interface: IDataspaceProtocolCatalog

Catalog interface compliant with Eclipse Data Space Protocol.

This interface extends ICatalog  and enforces DS Protocol-specific requirements
by overriding properties with more specific types and constraints.

**Requirements per DS Protocol:**
- `@id` MUST be present for dataset identification (REQUIRED)
- participantId MUST be present (REQUIRED)

**Type System Design:**
- Interface extension allows TypeScript to override inherited property types
- Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
- DS Protocol-specific constraints are defined here

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec

## Extends

- `Omit`\<`IDcatCatalog`, `"@type"` \| `"@context"` \| `"dcat:catalog"` \| `"dcat:dataset"` \| `"dcat:distribution"` \| `"dcat:service"`\>

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

\[`key`: `number`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `string`[] \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type

> **@type**: `"Catalog"`

The type identifier for the Catalog.
REQUIRED per Eclipse Data Space Protocol.

***

### @id

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

***

### participantId

> **participantId**: `string`

Participant Id

***

### catalog?

> `optional` **catalog**: `ObjectOrArray`\<`IDataspaceProtocolCatalog`\>

Other concerned catalogs

***

### dataset?

> `optional` **dataset**: `ObjectOrArray`\<[`IDataspaceProtocolDataset`](IDataspaceProtocolDataset.md)\>

Datasets registered

***

### distribution?

> `optional` **distribution**: `ObjectOrArray`\<[`IDataspaceProtocolDistribution`](IDataspaceProtocolDistribution.md)\>

Catalog's distributions

***

### service?

> `optional` **service**: `ObjectOrArray`\<[`IDataspaceProtocolDataService`](IDataspaceProtocolDataService.md)\>

Data services registered-
