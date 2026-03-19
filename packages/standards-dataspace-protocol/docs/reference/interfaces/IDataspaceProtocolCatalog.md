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

- [`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md)

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type {#type}

> **@type**: `"Catalog"`

The type identifier for the Catalog.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

`IDataspaceProtocolCatalog`.[`@type`](#type)

***

### @id {#id}

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`@id`](IDataspaceProtocolCatalogBase.md#id)

***

### participantId {#participantid}

> **participantId**: `string`

Participant Id

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`participantId`](IDataspaceProtocolCatalogBase.md#participantid)

***

### catalog? {#catalog}

> `optional` **catalog**: `ObjectOrArray`\<[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md)\>

Other concerned catalogs

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`catalog`](IDataspaceProtocolCatalogBase.md#catalog)

***

### dataset? {#dataset}

> `optional` **dataset**: `ObjectOrArray`\<[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md)\>

Datasets registered

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dataset`](IDataspaceProtocolCatalogBase.md#dataset)

***

### distribution? {#distribution}

> `optional` **distribution**: `ObjectOrArray`\<[`IDataspaceProtocolDistributionBase`](IDataspaceProtocolDistributionBase.md)\>

Catalog's distributions

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`distribution`](IDataspaceProtocolCatalogBase.md#distribution)

***

### service? {#service}

> `optional` **service**: `ObjectOrArray`\<[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md)\>

Data services registered-

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`service`](IDataspaceProtocolCatalogBase.md#service)

***

### foaf:homepage? {#foafhomepage}

> `optional` **foaf:homepage**: `string`

A homepage of the catalog (a public Web document usually available in HTML).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`foaf:homepage`](IDataspaceProtocolCatalogBase.md#foafhomepage)

***

### dcat:themeTaxonomy? {#dcatthemetaxonomy}

> `optional` **dcat:themeTaxonomy**: `ObjectOrArray`\<`IDcatResource`\>

A knowledge organization system (KOS) used to classify the resources in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:themeTaxonomy`](IDataspaceProtocolCatalogBase.md#dcatthemetaxonomy)

***

### dcat:resource? {#dcatresource}

> `optional` **dcat:resource**: `ObjectOrArray`\<`IDcatResource`\>

A resource that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:resource`](IDataspaceProtocolCatalogBase.md#dcatresource)

***

### dcat:record? {#dcatrecord}

> `optional` **dcat:record**: `ObjectOrArray`\<`IDcatCatalogRecordBase`\>

A record describing the registration of a single resource in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:record`](IDataspaceProtocolCatalogBase.md#dcatrecord)

***

### dcterms:accrualPeriodicity? {#dctermsaccrualperiodicity}

> `optional` **dcterms:accrualPeriodicity**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:accrualPeriodicity`](IDataspaceProtocolCatalogBase.md#dctermsaccrualperiodicity)

***

### dcat:inSeries? {#dcatinseries}

> `optional` **dcat:inSeries**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:inSeries`](IDataspaceProtocolCatalogBase.md#dcatinseries)

***

### dcterms:spatial? {#dctermsspatial}

> `optional` **dcterms:spatial**: `string` \| `string`[] \| `IJsonLdNodeObject`

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:spatial`](IDataspaceProtocolCatalogBase.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:spatialResolutionInMeters`](IDataspaceProtocolCatalogBase.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal? {#dctermstemporal}

> `optional` **dcterms:temporal**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:temporal`](IDataspaceProtocolCatalogBase.md#dctermstemporal)

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:temporalResolution`](IDataspaceProtocolCatalogBase.md#dcattemporalresolution)

***

### prov:wasGeneratedBy? {#provwasgeneratedby}

> `optional` **prov:wasGeneratedBy**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`prov:wasGeneratedBy`](IDataspaceProtocolCatalogBase.md#provwasgeneratedby)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:title`](IDataspaceProtocolCatalogBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:description`](IDataspaceProtocolCatalogBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:identifier`](IDataspaceProtocolCatalogBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:issued`](IDataspaceProtocolCatalogBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:modified`](IDataspaceProtocolCatalogBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:language`](IDataspaceProtocolCatalogBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:publisher`](IDataspaceProtocolCatalogBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:creator`](IDataspaceProtocolCatalogBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:accessRights`](IDataspaceProtocolCatalogBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:license`](IDataspaceProtocolCatalogBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:rights`](IDataspaceProtocolCatalogBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:conformsTo`](IDataspaceProtocolCatalogBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcterms:type`](IDataspaceProtocolCatalogBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:contactPoint`](IDataspaceProtocolCatalogBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:keyword`](IDataspaceProtocolCatalogBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:theme`](IDataspaceProtocolCatalogBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:landingPage`](IDataspaceProtocolCatalogBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation**: `string` \| `IDcatRelationship`

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`dcat:qualifiedRelation`](IDataspaceProtocolCatalogBase.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDataspaceProtocolCatalogBase`](IDataspaceProtocolCatalogBase.md).[`odrl:hasPolicy`](IDataspaceProtocolCatalogBase.md#odrlhaspolicy)
