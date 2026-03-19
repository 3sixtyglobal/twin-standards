# Interface: IDcatCatalogRecord

Interface for DCAT Catalog Record.
A record in a catalog, describing the registration of a single dataset or data
service.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record

## Extends

- [`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:CatalogRecord"`

The type identifier, typically "CatalogRecord".

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`@type`](IDcatCatalogRecordBase.md#type)

***

### @id? {#id}

> `optional` **@id**: `string`

The unique identifier for the catalog record.

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`@id`](IDcatCatalogRecordBase.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>

A name given to the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_title

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`dcterms:title`](IDcatCatalogRecordBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>

A free-text account of the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_description

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`dcterms:description`](IDcatCatalogRecordBase.md#dctermsdescription)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

The date of listing of the catalog record in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`dcterms:issued`](IDcatCatalogRecordBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the catalog record entry was changed or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`dcterms:modified`](IDcatCatalogRecordBase.md#dctermsmodified)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the catalog record conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`dcterms:conformsTo`](IDcatCatalogRecordBase.md#dctermsconformsto)

***

### foaf:primaryTopic? {#foafprimarytopic}

> `optional` **foaf:primaryTopic**: [`IDcatResource`](IDcatResource.md)

The dataset or data service described in the catalog record.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:record_primary_topic

#### Inherited from

[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md).[`foaf:primaryTopic`](IDcatCatalogRecordBase.md#foafprimarytopic)
