# Interface: IDcatDataService

Interface for DCAT Data Service.
A collection of operations that provides access to one or more datasets or data
processing functions.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service

## Extends

- [`IDcatResource`](IDcatResource.md)

## Properties

### @type {#type}

> **@type**: `"dcat:DataService"`

The type identifier, typically "DataService".

#### Overrides

[`IDcatResource`](IDcatResource.md).[`@type`](IDcatResource.md#type)

***

### dcat:endpointURL? {#dcatendpointurl}

> `optional` **dcat:endpointURL**: `string`

The root location or primary endpoint of the service (a Web-resolvable IRI).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url

***

### dcat:endpointDescription? {#dcatendpointdescription}

> `optional` **dcat:endpointDescription**: `string`

A description of the services available via the end-points, including their
operations, parameters, etc.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description

***

### dcat:servesDataset? {#dcatservesdataset}

> `optional` **dcat:servesDataset**: `string` \| `string`[]

A collection of data that this data service can distribute.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset

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
