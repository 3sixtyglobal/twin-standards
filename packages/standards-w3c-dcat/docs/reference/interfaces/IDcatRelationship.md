# Interface: IDcatRelationship

Interface for DCAT Relationship.
An association class for attaching additional information to a relationship
between DCAT Resources.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Relationship

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Overrides

`IJsonLdNodeObject.@context`

***

### @type

> **@type**: `"dcat:Relationship"`

The type identifier, typically "Relationship".

#### Overrides

`IJsonLdNodeObject.@type`

***

### dcterms:relation?

> `optional` **dcterms:relation**: `string`

The link to a related resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_relation

***

### dcat:hadRole?

> `optional` **dcat:hadRole**: [`IDcatRole`](IDcatRole.md)

The function of an entity or agent with respect to another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_hadRole
