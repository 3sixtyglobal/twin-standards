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

- `Omit`\<`IDcatCatalog`, `"@type"` \| `"@context"` \| `"dcat:catalog"` \| `"dcat:dataset"` \| `"dcat:distribution"` \| `"dcat:service"`\>

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type

> **@type**: `"Catalog"`

The type identifier for the Catalog.
REQUIRED per Eclipse Data Space Protocol.

***

### @id

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Overrides

`Omit.@id`

***

### participantId

> **participantId**: `string`

Participant Id

***

### catalog?

> `optional` **catalog**: `ObjectOrArray`\<`JsonLdObjectWithNoContext`\<`IDataspaceProtocolCatalog`\>\>

Other concerned catalogs

***

### dataset?

> `optional` **dataset**: `ObjectOrArray`\<`JsonLdObjectWithNoContext`\<[`IDataspaceProtocolDataset`](IDataspaceProtocolDataset.md)\>\>

Datasets registered

***

### distribution?

> `optional` **distribution**: `ObjectOrArray`\<`JsonLdObjectWithNoContext`\<[`IDataspaceProtocolDistribution`](IDataspaceProtocolDistribution.md)\>\>

Catalog's distributions

***

### service?

> `optional` **service**: `ObjectOrArray`\<`JsonLdObjectWithNoContext`\<[`IDataspaceProtocolDataService`](IDataspaceProtocolDataService.md)\>\>

Data services registered-

***

### foaf:homepage?

> `optional` **foaf:homepage**: `string`

A homepage of the catalog (a public Web document usually available in HTML).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage

#### Inherited from

`Omit.foaf:homepage`

***

### dcat:themeTaxonomy?

> `optional` **dcat:themeTaxonomy**: `ObjectOrArray`\<`IDcatResource`\>

A knowledge organization system (KOS) used to classify the resources in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes

#### Inherited from

`Omit.dcat:themeTaxonomy`

***

### dcat:resource?

> `optional` **dcat:resource**: `ObjectOrArray`\<`IDcatResource`\>

A resource that is listed in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_resource

#### Inherited from

`Omit.dcat:resource`

***

### dcat:record?

> `optional` **dcat:record**: `ObjectOrArray`\<`CatalogRecordOptionalContext`\>

A record describing the registration of a single resource in the catalog.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record

#### Inherited from

`Omit.dcat:record`

***

### dcterms:accrualPeriodicity?

> `optional` **dcterms:accrualPeriodicity**: `string`

The frequency at which the dataset is published.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency

#### Inherited from

`Omit.dcterms:accrualPeriodicity`

***

### dcat:inSeries?

> `optional` **dcat:inSeries**: `string`

A dataset series of which the dataset is part.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series

#### Inherited from

`Omit.dcat:inSeries`

***

### dcterms:spatial?

> `optional` **dcterms:spatial**: `IJsonLdNodeObject` \| `ObjectOrArray`\<`string`\>

The geographical area covered by the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial

#### Inherited from

`Omit.dcterms:spatial`

***

### dcat:spatialResolutionInMeters?

> `optional` **dcat:spatialResolutionInMeters**: `number`

Minimum spatial separation resolvable in a dataset, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution

#### Inherited from

`Omit.dcat:spatialResolutionInMeters`

***

### dcterms:temporal?

> `optional` **dcterms:temporal**: `IDublinCorePeriodOfTime`

The temporal period that the dataset covers.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal

#### Inherited from

`Omit.dcterms:temporal`

***

### dcat:temporalResolution?

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution

#### Inherited from

`Omit.dcat:temporalResolution`

***

### prov:wasGeneratedBy?

> `optional` **prov:wasGeneratedBy**: `string` \| `IJsonLdNodeObject`

An activity that generated, or provides the business context for, the creation of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by

#### Inherited from

`Omit.prov:wasGeneratedBy`

***

### dcterms:title?

> `optional` **dcterms:title**: `DcatLiteralType`

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

`Omit.dcterms:title`

***

### dcterms:description?

> `optional` **dcterms:description**: `DcatLiteralType`

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

`Omit.dcterms:description`

***

### dcterms:identifier?

> `optional` **dcterms:identifier**: `DcatLiteralType`

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

`Omit.dcterms:identifier`

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

`Omit.dcterms:issued`

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

`Omit.dcterms:modified`

***

### dcterms:language?

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

`Omit.dcterms:language`

***

### dcterms:publisher?

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

`Omit.dcterms:publisher`

***

### dcterms:creator?

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

`Omit.dcterms:creator`

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

`Omit.dcterms:accessRights`

***

### dcterms:license?

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

`Omit.dcterms:license`

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

`Omit.dcterms:rights`

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

`Omit.dcterms:conformsTo`

***

### dcterms:type?

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

`Omit.dcterms:type`

***

### dcat:contactPoint?

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

`Omit.dcat:contactPoint`

***

### dcat:keyword?

> `optional` **dcat:keyword**: `DcatLiteralType`

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

`Omit.dcat:keyword`

***

### dcat:theme?

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

`Omit.dcat:theme`

***

### dcat:landingPage?

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

`Omit.dcat:landingPage`

***

### dcat:qualifiedRelation?

> `optional` **dcat:qualifiedRelation**: `string` \| `IDcatRelationship`

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

`Omit.dcat:qualifiedRelation`

***

### odrl:hasPolicy?

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

`Omit.odrl:hasPolicy`
