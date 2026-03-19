# Interface: IDcatDataService

Interface for DCAT Data Service.
A collection of operations that provides access to one or more datasets or data
processing functions.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service

## Extends

- [`IDcatDataServiceBase`](IDcatDataServiceBase.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:DataService"`

The type identifier, typically "DataService".

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`@type`](IDcatDataServiceBase.md#type)

***

### dcat:endpointURL? {#dcatendpointurl}

> `optional` **dcat:endpointURL**: `string`

The root location or primary endpoint of the service (a Web-resolvable IRI).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:endpointURL`](IDcatDataServiceBase.md#dcatendpointurl)

***

### dcat:endpointDescription? {#dcatendpointdescription}

> `optional` **dcat:endpointDescription**: `string`

A description of the services available via the end-points, including their
operations, parameters, etc.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:endpointDescription`](IDcatDataServiceBase.md#dcatendpointdescription)

***

### dcat:servesDataset? {#dcatservesdataset}

> `optional` **dcat:servesDataset**: `ObjectOrArray`\<`string`\>

A collection of data that this data service can distribute.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:servesDataset`](IDcatDataServiceBase.md#dcatservesdataset)

***

### @id? {#id}

> `optional` **@id**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`@id`](IDcatDataServiceBase.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:title`](IDcatDataServiceBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:description`](IDcatDataServiceBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:identifier`](IDcatDataServiceBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:issued`](IDcatDataServiceBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:modified`](IDcatDataServiceBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:language`](IDcatDataServiceBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:publisher`](IDcatDataServiceBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:creator`](IDcatDataServiceBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:accessRights`](IDcatDataServiceBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:license`](IDcatDataServiceBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:rights`](IDcatDataServiceBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:conformsTo`](IDcatDataServiceBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcterms:type`](IDcatDataServiceBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:contactPoint`](IDcatDataServiceBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:keyword`](IDcatDataServiceBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:theme`](IDcatDataServiceBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:landingPage`](IDcatDataServiceBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`dcat:qualifiedRelation`](IDcatDataServiceBase.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatDataServiceBase`](IDcatDataServiceBase.md).[`odrl:hasPolicy`](IDcatDataServiceBase.md#odrlhaspolicy)
