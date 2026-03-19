# Interface: IDataspaceProtocolDataset

Dataset interface compliant with Eclipse Data Space Protocol.

This interface extends IDataset and enforces DS Protocol-specific requirements
by overriding properties with more specific types and constraints.

**Requirements per DS Protocol:**
- `@id` MUST be present for dataset identification (REQUIRED)
- `odrl:hasPolicy` MUST be present as an array of ODRL Offers (REQUIRED)
- Array MUST contain at least one IOdrlOffer
- Each Offer MUST have `@type`: "Offer"
- Each Offer MUST have `@id`
- `dcat:distribution` MUST be present (REQUIRED)

**Type System Design:**
- W3C DCAT spec defines `odrl:hasPolicy` as optional singular `IOdrlPolicy`
- DS Protocol requires it as a REQUIRED array of `IOdrlOffer`
- Interface extension allows TypeScript to override inherited property types
- Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
- DS Protocol-specific constraints are defined here

**Future Compatibility:**
- Currently only one Offer per dataset is supported
- Array structure allows future support for multiple offers

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec
 - IOdrlOffer from @twin.org/standards-w3c-odrl
 - IResource.odrl:hasPolicy from @twin.org/standards-w3c-dcat

## Extends

- [`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md)

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type {#type}

> **@type**: `"Dataset"`

The type identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

`IDataspaceProtocolDataset`.[`@type`](#type)

***

### @id {#id}

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`@id`](IDataspaceProtocolDatasetBase.md#id)

***

### hasPolicy {#haspolicy}

> **hasPolicy**: `ObjectOrArray`\<[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md)\>

Array of ODRL policies (Offers) as required by DS Protocol.

REQUIRED per Eclipse Data Space Protocol spec.
Must contain at least one IOdrlOffer.
Currently only single offer is supported, but array structure
allows for future multi-offer support.

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`hasPolicy`](IDataspaceProtocolDatasetBase.md#haspolicy)

***

### distribution {#distribution}

> **distribution**: `ObjectOrArray`\<[`IDataspaceProtocolDistributionBase`](IDataspaceProtocolDistributionBase.md)\>

Distribution of the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`distribution`](IDataspaceProtocolDatasetBase.md#distribution)

***

### dcterms:accrualPeriodicity? {#dctermsaccrualperiodicity}

> `optional` **dcterms:accrualPeriodicity?**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:accrualPeriodicity`](IDataspaceProtocolDatasetBase.md#dctermsaccrualperiodicity)

***

### dcat:inSeries? {#dcatinseries}

> `optional` **dcat:inSeries?**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:inSeries`](IDataspaceProtocolDatasetBase.md#dcatinseries)

***

### dcterms:spatial? {#dctermsspatial}

> `optional` **dcterms:spatial?**: `string` \| `string`[] \| `IJsonLdNodeObject`

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:spatial`](IDataspaceProtocolDatasetBase.md#dctermsspatial)

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters?**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:spatialResolutionInMeters`](IDataspaceProtocolDatasetBase.md#dcatspatialresolutioninmeters)

***

### dcterms:temporal? {#dctermstemporal}

> `optional` **dcterms:temporal?**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:temporal`](IDataspaceProtocolDatasetBase.md#dctermstemporal)

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution?**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:temporalResolution`](IDataspaceProtocolDatasetBase.md#dcattemporalresolution)

***

### prov:wasGeneratedBy? {#provwasgeneratedby}

> `optional` **prov:wasGeneratedBy?**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`prov:wasGeneratedBy`](IDataspaceProtocolDatasetBase.md#provwasgeneratedby)

***

### dcterms:title? {#dctermstitle}

<<<<<<< Updated upstream
> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:title`](IDataspaceProtocolDatasetBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

<<<<<<< Updated upstream
> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:description`](IDataspaceProtocolDatasetBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

<<<<<<< Updated upstream
> `optional` **dcterms:identifier**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:identifier`](IDataspaceProtocolDatasetBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:issued`](IDataspaceProtocolDatasetBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:modified`](IDataspaceProtocolDatasetBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

<<<<<<< Updated upstream
> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:language`](IDataspaceProtocolDatasetBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:publisher`](IDataspaceProtocolDatasetBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:creator`](IDataspaceProtocolDatasetBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:accessRights`](IDataspaceProtocolDatasetBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:license`](IDataspaceProtocolDatasetBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:rights`](IDataspaceProtocolDatasetBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

<<<<<<< Updated upstream
> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:conformsTo`](IDataspaceProtocolDatasetBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcterms:type`](IDataspaceProtocolDatasetBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:contactPoint`](IDataspaceProtocolDatasetBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

<<<<<<< Updated upstream
> `optional` **dcat:keyword**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:keyword`](IDataspaceProtocolDatasetBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

<<<<<<< Updated upstream
> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:theme`](IDataspaceProtocolDatasetBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

<<<<<<< Updated upstream
> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:landingPage`](IDataspaceProtocolDatasetBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| `IDcatRelationship`

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md).[`dcat:qualifiedRelation`](IDataspaceProtocolDatasetBase.md#dcatqualifiedrelation)
