# Interface: IDcatRole

Interface for DCAT Role.
A role is the function of a resource or agent with respect to another resource,
in the context of resource attribution or resource relationships.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Role

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Overrides

`IJsonLdNodeObject.@context`

***

### @type

> **@type**: `"Role"`

The type identifier, typically "Role".

#### Overrides

`IJsonLdNodeObject.@type`

***

### dcterms:title?

> `optional` **dcterms:title**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A name given to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title
