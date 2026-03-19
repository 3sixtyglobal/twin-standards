# Interface: IDcatCatalog

Interface for DCAT Catalog.
A curated collection of metadata about resources (datasets and data services).
Note: dcat:Catalog is a sub-class of dcat:Dataset per the W3C spec.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog

## Extends

- [`IDcatCatalogBase`](IDcatCatalogBase.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:Catalog"`

The type identifier, typically "Catalog".

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`@type`](IDcatCatalogBase.md#type)

***

### foaf:homepage? {#foafhomepage}

> `optional` **foaf:homepage?**: `string`

A homepage of the catalog (a public Web document usually available in HTML).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`foaf:homepage`](IDcatCatalogBase.md#foafhomepage)

***

### dcat:themeTaxonomy? {#dcatthemetaxonomy}

> `optional` **dcat:themeTaxonomy?**: `ObjectOrArray`\<[`IDcatResource`](IDcatResource.md)\>

A knowledge organization system (KOS) used to classify the resources in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:themeTaxonomy`](IDcatCatalogBase.md#dcatthemetaxonomy)

***

### dcat:resource? {#dcatresource}

> `optional` **dcat:resource?**: `ObjectOrArray`\<[`IDcatResource`](IDcatResource.md)\>

A resource that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:resource`](IDcatCatalogBase.md#dcatresource)

***

### dcat:dataset? {#dcatdataset}

> `optional` **dcat:dataset?**: `ObjectOrArray`\<[`IDcatDatasetBase`](IDcatDatasetBase.md)\>

A dataset that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:dataset`](IDcatCatalogBase.md#dcatdataset)

***

### dcat:service? {#dcatservice}

> `optional` **dcat:service?**: `ObjectOrArray`\<[`IDcatDataServiceBase`](IDcatDataServiceBase.md)\>

A data service that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:service`](IDcatCatalogBase.md#dcatservice)

***

### dcat:catalog? {#dcatcatalog}

> `optional` **dcat:catalog?**: `ObjectOrArray`\<[`IDcatCatalogBase`](IDcatCatalogBase.md)\>

A catalog that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:catalog`](IDcatCatalogBase.md#dcatcatalog)

***

### dcat:record? {#dcatrecord}

> `optional` **dcat:record?**: `ObjectOrArray`\<[`IDcatCatalogRecordBase`](IDcatCatalogRecordBase.md)\>

A record describing the registration of a single resource in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:record`](IDcatCatalogBase.md#dcatrecord)

***

### dcat:distribution? {#dcatdistribution}

> `optional` **dcat:distribution?**: `ObjectOrArray`\<[`IDcatDistributionBase`](IDcatDistributionBase.md)\>

An available distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:distribution`](IDcatCatalogBase.md#dcatdistribution)

***

### dcterms:accrualPeriodicity? {#dctermsaccrualperiodicity}

> `optional` **dcterms:accrualPeriodicity?**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:accrualPeriodicity`](IDcatCatalogBase.md#dctermsaccrualperiodicity)

***

### dcat:inSeries? {#dcatinseries}

> `optional` **dcat:inSeries?**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:inSeries`](IDcatCatalogBase.md#dcatinseries)

***

### dcterms:spatial? {#dctermsspatial}

> `optional` **dcterms:spatial?**: `string` \| `string`[] \| `IJsonLdNodeObject`

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:spatial`](IDcatCatalogBase.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters?**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:spatialResolutionInMeters`](IDcatCatalogBase.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal? {#dctermstemporal}

> `optional` **dcterms:temporal?**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:temporal`](IDcatCatalogBase.md#dctermstemporal)

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution?**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:temporalResolution`](IDcatCatalogBase.md#dcattemporalresolution)

***

### prov:wasGeneratedBy? {#provwasgeneratedby}

> `optional` **prov:wasGeneratedBy?**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`prov:wasGeneratedBy`](IDcatCatalogBase.md#provwasgeneratedby)

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`@id`](IDcatCatalogBase.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:title`](IDcatCatalogBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:description`](IDcatCatalogBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:identifier`](IDcatCatalogBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:issued`](IDcatCatalogBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:modified`](IDcatCatalogBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:language`](IDcatCatalogBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:publisher`](IDcatCatalogBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:creator`](IDcatCatalogBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:accessRights`](IDcatCatalogBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:license`](IDcatCatalogBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:rights`](IDcatCatalogBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:conformsTo`](IDcatCatalogBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcterms:type`](IDcatCatalogBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:contactPoint`](IDcatCatalogBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:keyword`](IDcatCatalogBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:theme`](IDcatCatalogBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:landingPage`](IDcatCatalogBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`dcat:qualifiedRelation`](IDcatCatalogBase.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy?**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatCatalogBase`](IDcatCatalogBase.md).[`odrl:hasPolicy`](IDcatCatalogBase.md#odrlhaspolicy)
