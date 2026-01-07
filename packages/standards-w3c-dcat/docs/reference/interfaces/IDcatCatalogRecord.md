# Interface: IDcatCatalogRecord

Interface for DCAT Catalog Record.
A record in a catalog, describing the registration of a single dataset or data
service.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record

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

> **@type**: `"dcat:CatalogRecord"`

The type identifier, typically "CatalogRecord".

#### Overrides

`IJsonLdNodeObject.@type`

***

### dcterms:title?

> `optional` **dcterms:title**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A name given to the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_title

***

### dcterms:description?

> `optional` **dcterms:description**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A free-text account of the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_description

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

The date of listing of the catalog record in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the catalog record entry was changed or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the catalog record conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to

***

### foaf:primaryTopic?

> `optional` **foaf:primaryTopic**: [`IDcatResource`](IDcatResource.md)

The dataset or data service described in the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_primary_topic
