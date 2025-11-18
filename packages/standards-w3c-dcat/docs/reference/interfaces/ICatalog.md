# Interface: ICatalog

Interface for DCAT Catalog.
A curated collection of metadata about resources (datasets and data services).
Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog

## Extends

- [`IDataset`](IDataset.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @type

> **@type**: `"Catalog"`

The type identifier, typically "Catalog".

#### Overrides

[`IDataset`](IDataset.md).[`@type`](IDataset.md#type)

***

### foaf:homepage?

> `optional` **foaf:homepage**: `string`

A homepage of the catalog (a public Web document usually available in HTML).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage

***

### dcat:themeTaxonomy?

> `optional` **dcat:themeTaxonomy**: `ObjectOrArray`\<[`IResource`](IResource.md)\>

A knowledge organization system (KOS) used to classify the resources in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes

***

### dcat:resource?

> `optional` **dcat:resource**: `ObjectOrArray`\<[`IResource`](IResource.md)\>

A resource that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource

***

### dcat:dataset?

> `optional` **dcat:dataset**: `ObjectOrArray`\<[`IDataset`](IDataset.md)\>

A dataset that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset

***

### dcat:service?

> `optional` **dcat:service**: `ObjectOrArray`\<[`IDataService`](IDataService.md)\>

A data service that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service

***

### dcat:catalog?

> `optional` **dcat:catalog**: `ObjectOrArray`\<`ICatalog`\>

A catalog that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog

***

### dcat:record?

> `optional` **dcat:record**: `ObjectOrArray`\<[`ICatalogRecord`](ICatalogRecord.md)\>

A record describing the registration of a single resource in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record

***

### dcat:distribution?

> `optional` **dcat:distribution**: `ObjectOrArray`\<[`IDistribution`](IDistribution.md)\>

An available distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:distribution`](IDataset.md#dcatdistribution)

***

### dcterms:accrualPeriodicity?

> `optional` **dcterms:accrualPeriodicity**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:accrualPeriodicity`](IDataset.md#dctermsaccrualperiodicity)

***

### dcat:inSeries?

> `optional` **dcat:inSeries**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:inSeries`](IDataset.md#dcatinseries)

***

### dcterms:spatial?

> `optional` **dcterms:spatial**: `IJsonLdNodeObject` \| `ObjectOrArray`\<`string`\>

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:spatial`](IDataset.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters?

> `optional` **dcat:spatialResolutionInMeters**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:spatialResolutionInMeters`](IDataset.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal?

> `optional` **dcterms:temporal**: `IPeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:temporal`](IDataset.md#dctermstemporal)

***

### dcat:temporalResolution?

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:temporalResolution`](IDataset.md#dcattemporalresolution)

***

### prov:wasGeneratedBy?

> `optional` **prov:wasGeneratedBy**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDataset`](IDataset.md).[`prov:wasGeneratedBy`](IDataset.md#provwasgeneratedby)

***

### @context?

> `optional` **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Inherited from

[`IDataset`](IDataset.md).[`@context`](IDataset.md#context)

***

### dcterms:title?

> `optional` **dcterms:title**: [`LiteralType`](../type-aliases/LiteralType.md)

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:title`](IDataset.md#dctermstitle)

***

### dcterms:description?

> `optional` **dcterms:description**: [`LiteralType`](../type-aliases/LiteralType.md)

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:description`](IDataset.md#dctermsdescription)

***

### dcterms:identifier?

> `optional` **dcterms:identifier**: [`LiteralType`](../type-aliases/LiteralType.md)

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:identifier`](IDataset.md#dctermsidentifier)

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:issued`](IDataset.md#dctermsissued)

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:modified`](IDataset.md#dctermsmodified)

***

### dcterms:language?

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:language`](IDataset.md#dctermslanguage)

***

### dcterms:publisher?

> `optional` **dcterms:publisher**: `string` \| `IAgent`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:publisher`](IDataset.md#dctermspublisher)

***

### dcterms:creator?

> `optional` **dcterms:creator**: `IAgent`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:creator`](IDataset.md#dctermscreator)

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:accessRights`](IDataset.md#dctermsaccessrights)

***

### dcterms:license?

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:license`](IDataset.md#dctermslicense)

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:rights`](IDataset.md#dctermsrights)

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:conformsTo`](IDataset.md#dctermsconformsto)

***

### dcterms:type?

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDataset`](IDataset.md).[`dcterms:type`](IDataset.md#dctermstype)

***

### dcat:contactPoint?

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:contactPoint`](IDataset.md#dcatcontactpoint)

***

### dcat:keyword?

> `optional` **dcat:keyword**: [`LiteralType`](../type-aliases/LiteralType.md)

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:keyword`](IDataset.md#dcatkeyword)

***

### dcat:theme?

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:theme`](IDataset.md#dcattheme)

***

### dcat:landingPage?

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:landingPage`](IDataset.md#dcatlandingpage)

***

### dcat:qualifiedRelation?

> `optional` **dcat:qualifiedRelation**: `string` \| [`IRelationship`](IRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDataset`](IDataset.md).[`dcat:qualifiedRelation`](IDataset.md#dcatqualifiedrelation)

***

### odrl:hasPolicy?

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDataset`](IDataset.md).[`odrl:hasPolicy`](IDataset.md#odrlhaspolicy)
