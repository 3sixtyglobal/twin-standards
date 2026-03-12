# Interface: IDcatDataset

Interface for DCAT Dataset.
A collection of data, published or curated by a single agent, and available
for access or download in one or more representations.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset

## Extends

- [`IDcatResource`](IDcatResource.md)

## Extended by

- [`IDcatCatalog`](IDcatCatalog.md)
- [`IDcatDatasetSeries`](IDcatDatasetSeries.md)

## Properties

### @type {#type}

> **@type**: `"dcat:Catalog"` \| `"dcat:Dataset"` \| `"dcat:DatasetSeries"`

The type identifier, typically "Dataset".
Can also be "Catalog" or "DatasetSeries" for subclasses.

#### Overrides

[`IDcatResource`](IDcatResource.md).[`@type`](IDcatResource.md#type)

***

### dcat:distribution? {#dcatdistribution}

> `optional` **dcat:distribution**: [`DistributionOptionalContext`](../type-aliases/DistributionOptionalContext.md) \| [`DistributionOptionalContext`](../type-aliases/DistributionOptionalContext.md)[]

An available distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution

***

### dcterms:accrualPeriodicity? {#dctermsaccrualperiodicity}

> `optional` **dcterms:accrualPeriodicity**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

***

### dcat:inSeries? {#dcatinseries}

> `optional` **dcat:inSeries**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

***

### dcterms:spatial? {#dctermsspatial}

> `optional` **dcterms:spatial**: `string` \| `string`[] \| `IJsonLdNodeObject`

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

***

### dcterms:temporal? {#dctermstemporal}

> `optional` **dcterms:temporal**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

***

### prov:wasGeneratedBy? {#provwasgeneratedby}

> `optional` **prov:wasGeneratedBy**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

***

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`@context`](IDcatResource.md#context)

***

### @id? {#id}

> `optional` **@id**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`@id`](IDcatResource.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:title`](IDcatResource.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:description`](IDcatResource.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:identifier`](IDcatResource.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:issued`](IDcatResource.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:modified`](IDcatResource.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language**: `string` \| `string`[]

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:language`](IDcatResource.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:publisher`](IDcatResource.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:creator`](IDcatResource.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:accessRights`](IDcatResource.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:license`](IDcatResource.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:rights`](IDcatResource.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `string` \| `string`[]

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:conformsTo`](IDcatResource.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcterms:type`](IDcatResource.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcat:contactPoint`](IDcatResource.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcat:keyword`](IDcatResource.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme**: `string` \| `string`[]

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcat:theme`](IDcatResource.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage**: `string` \| `string`[]

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcat:landingPage`](IDcatResource.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`dcat:qualifiedRelation`](IDcatResource.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatResource`](IDcatResource.md).[`odrl:hasPolicy`](IDcatResource.md#odrlhaspolicy)
