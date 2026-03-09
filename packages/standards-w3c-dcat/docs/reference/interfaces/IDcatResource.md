# Interface: IDcatResource

Base interface for DCAT catalogued resources.
This is the parent class of dcat:Dataset, dcat:DataService, and dcat:Catalog.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Resource

## Extended by

- [`IDcatDataService`](IDcatDataService.md)
- [`IDcatDataset`](IDcatDataset.md)

## Properties

### @context

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type

> **@type**: `"dcat:Catalog"` \| `"dcat:Resource"` \| `"dcat:Dataset"` \| `"dcat:DataService"` \| `"dcat:DatasetSeries"`

The type of the resource.
Typically "Catalog", "Dataset", "DataService", "DatasetSeries", or the base "Resource".

***

### @id?

> `optional` **@id**: `string`

The unique identifier for the resource.

***

### dcterms:title?

> `optional` **dcterms:title**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

***

### dcterms:description?

> `optional` **dcterms:description**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

***

### dcterms:identifier?

> `optional` **dcterms:identifier**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

***

### dcterms:language?

> `optional` **dcterms:language**: `string` \| `string`[]

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

***

### dcterms:publisher?

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

***

### dcterms:creator?

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

***

### dcterms:license?

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `string` \| `string`[]

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

***

### dcterms:type?

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

***

### dcat:contactPoint?

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

***

### dcat:keyword?

> `optional` **dcat:keyword**: [`DcatLiteralType`](../type-aliases/DcatLiteralType.md)

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

***

### dcat:theme?

> `optional` **dcat:theme**: `string` \| `string`[]

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

***

### dcat:landingPage?

> `optional` **dcat:landingPage**: `string` \| `string`[]

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

***

### dcat:qualifiedRelation?

> `optional` **dcat:qualifiedRelation**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

***

### odrl:hasPolicy?

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy
