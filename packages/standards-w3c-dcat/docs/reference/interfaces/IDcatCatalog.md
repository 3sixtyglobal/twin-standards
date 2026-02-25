# Interface: IDcatCatalog

Interface for DCAT Catalog.
A curated collection of metadata about resources (datasets and data services).
Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog

## Extends

- [`IDcatDataset`](IDcatDataset.md)

## Properties

### @type

> **@type**: `"dcat:Catalog"`

The type identifier, typically "Catalog".

#### Overrides

[`IDcatDataset`](IDcatDataset.md).[`@type`](IDcatDataset.md#type)

***

### foaf:homepage?

> `optional` **foaf:homepage**: `string`

A homepage of the catalog (a public Web document usually available in HTML).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage

***

### dcat:themeTaxonomy?

> `optional` **dcat:themeTaxonomy**: `ObjectOrArray`\<[`IDcatResource`](IDcatResource.md)\>

A knowledge organization system (KOS) used to classify the resources in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes

***

### dcat:resource?

> `optional` **dcat:resource**: `ObjectOrArray`\<[`IDcatResource`](IDcatResource.md)\>

A resource that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource

***

### dcat:dataset?

> `optional` **dcat:dataset**: `ObjectOrArray`\<[`DatasetOptionalContext`](../type-aliases/DatasetOptionalContext.md)\>

A dataset that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset

***

### dcat:service?

> `optional` **dcat:service**: `ObjectOrArray`\<[`DataServiceOptionalContext`](../type-aliases/DataServiceOptionalContext.md)\>

A data service that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service

***

### dcat:catalog?

> `optional` **dcat:catalog**: `ObjectOrArray`\<[`CatalogOptionalContext`](../type-aliases/CatalogOptionalContext.md)\>

A catalog that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog

***

### dcat:record?

> `optional` **dcat:record**: `ObjectOrArray`\<[`CatalogRecordOptionalContext`](../type-aliases/CatalogRecordOptionalContext.md)\>

A record describing the registration of a single resource in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record

***

### dcat:distribution?

> `optional` **dcat:distribution**: `ObjectOrArray`\<[`DistributionOptionalContext`](../type-aliases/DistributionOptionalContext.md)\>

An available distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:distribution`](IDcatDataset.md#dcatdistribution)

***

### dcterms:accrualPeriodicity?

> `optional` **dcterms:accrualPeriodicity**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:accrualPeriodicity`](IDcatDataset.md#dctermsaccrualperiodicity)

***

### dcat:inSeries?

> `optional` **dcat:inSeries**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:inSeries`](IDcatDataset.md#dcatinseries)

***

### dcterms:spatial?

> `optional` **dcterms:spatial**: `IJsonLdNodeObject` \| `ObjectOrArray`\<`string`\>

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:spatial`](IDcatDataset.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters?

> `optional` **dcat:spatialResolutionInMeters**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:spatialResolutionInMeters`](IDcatDataset.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal?

> `optional` **dcterms:temporal**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:temporal`](IDcatDataset.md#dctermstemporal)

***

### dcat:temporalResolution?

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:temporalResolution`](IDcatDataset.md#dcattemporalresolution)

***

### prov:wasGeneratedBy?

> `optional` **prov:wasGeneratedBy**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`prov:wasGeneratedBy`](IDcatDataset.md#provwasgeneratedby)

***

### @context

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`@context`](IDcatDataset.md#context)

***

### @id?

> `optional` **@id**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`@id`](IDcatDataset.md#id)

***

### dcterms:title?

> `optional` **dcterms:title**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:title`](IDcatDataset.md#dctermstitle)

***

### dcterms:description?

> `optional` **dcterms:description**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:description`](IDcatDataset.md#dctermsdescription)

***

### dcterms:identifier?

> `optional` **dcterms:identifier**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:identifier`](IDcatDataset.md#dctermsidentifier)

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:issued`](IDcatDataset.md#dctermsissued)

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:modified`](IDcatDataset.md#dctermsmodified)

***

### dcterms:language?

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:language`](IDcatDataset.md#dctermslanguage)

***

### dcterms:publisher?

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:publisher`](IDcatDataset.md#dctermspublisher)

***

### dcterms:creator?

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:creator`](IDcatDataset.md#dctermscreator)

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:accessRights`](IDcatDataset.md#dctermsaccessrights)

***

### dcterms:license?

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:license`](IDcatDataset.md#dctermslicense)

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:rights`](IDcatDataset.md#dctermsrights)

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:conformsTo`](IDcatDataset.md#dctermsconformsto)

***

### dcterms:type?

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:type`](IDcatDataset.md#dctermstype)

***

### dcat:contactPoint?

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:contactPoint`](IDcatDataset.md#dcatcontactpoint)

***

### dcat:keyword?

> `optional` **dcat:keyword**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:keyword`](IDcatDataset.md#dcatkeyword)

***

### dcat:theme?

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:theme`](IDcatDataset.md#dcattheme)

***

### dcat:landingPage?

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:landingPage`](IDcatDataset.md#dcatlandingpage)

***

### dcat:qualifiedRelation?

> `optional` **dcat:qualifiedRelation**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:qualifiedRelation`](IDcatDataset.md#dcatqualifiedrelation)

***

### odrl:hasPolicy?

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`odrl:hasPolicy`](IDcatDataset.md#odrlhaspolicy)
