# Interface: IDcatDatasetSeries

Interface for DCAT Dataset Series.
A collection of datasets that are published separately, but share some common
characteristics that enable them to be grouped together.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series

## Extends

- [`IDcatDataset`](IDcatDataset.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`@context`](IDcatDataset.md#context)

***

### dcat:distribution? {#dcatdistribution}

> `optional` **dcat:distribution?**: `ObjectOrArray`\<[`IDcatDistributionBase`](IDcatDistributionBase.md)\>

An available distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:distribution`](IDcatDataset.md#dcatdistribution)

***

### dcterms:accrualPeriodicity? {#dctermsaccrualperiodicity}

> `optional` **dcterms:accrualPeriodicity?**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:accrualPeriodicity`](IDcatDataset.md#dctermsaccrualperiodicity)

***

### dcat:inSeries? {#dcatinseries}

> `optional` **dcat:inSeries?**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:inSeries`](IDcatDataset.md#dcatinseries)

***

### dcterms:spatial? {#dctermsspatial}

> `optional` **dcterms:spatial?**: `string` \| `string`[] \| `IJsonLdNodeObject`

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:spatial`](IDcatDataset.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters?**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:spatialResolutionInMeters`](IDcatDataset.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal? {#dctermstemporal}

> `optional` **dcterms:temporal?**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:temporal`](IDcatDataset.md#dctermstemporal)

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution?**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:temporalResolution`](IDcatDataset.md#dcattemporalresolution)

***

### prov:wasGeneratedBy? {#provwasgeneratedby}

> `optional` **prov:wasGeneratedBy?**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`prov:wasGeneratedBy`](IDcatDataset.md#provwasgeneratedby)

***

### @type {#type}

> **@type**: `"dcat:DatasetSeries"`

The type identifier, typically "DatasetSeries".

#### Overrides

[`IDcatDataset`](IDcatDataset.md).[`@type`](IDcatDataset.md#type)

***

### dcat:first? {#dcatfirst}

> `optional` **dcat:first?**: `string`

A dataset that is part of this dataset series.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_first

***

### dcat:last? {#dcatlast}

> `optional` **dcat:last?**: `string`

A dataset that is part of this dataset series.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_last

***

### dcat:seriesMember? {#dcatseriesmember}

> `optional` **dcat:seriesMember?**: `ObjectOrArray`\<`string`\>

A dataset that is part of this dataset series.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_series_member

***

### dcat:dataset? {#dcatdataset}

> `optional` **dcat:dataset?**: `ObjectOrArray`\<[`IDcatDatasetBase`](IDcatDatasetBase.md)\>

A dataset that is part of this dataset series.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`@id`](IDcatDataset.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:title`](IDcatDataset.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:description`](IDcatDataset.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:identifier`](IDcatDataset.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:issued`](IDcatDataset.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:modified`](IDcatDataset.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:language`](IDcatDataset.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:publisher`](IDcatDataset.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:creator`](IDcatDataset.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:accessRights`](IDcatDataset.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:license`](IDcatDataset.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:rights`](IDcatDataset.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:conformsTo`](IDcatDataset.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcterms:type`](IDcatDataset.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:contactPoint`](IDcatDataset.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:keyword`](IDcatDataset.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:theme`](IDcatDataset.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:landingPage`](IDcatDataset.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`dcat:qualifiedRelation`](IDcatDataset.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy?**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatDataset`](IDcatDataset.md).[`odrl:hasPolicy`](IDcatDataset.md#odrlhaspolicy)
