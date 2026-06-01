# Interface: IDataspaceProtocolDataService

Data Service interface compliant with Eclipse Data Space Protocol.

This interface extends IDataService  and enforces DS Protocol-specific requirements
by overriding properties with more specific types and constraints.

**Requirements per DS Protocol:**
- `@id` MUST be present for dataset identification (REQUIRED)
- endpointURL MUST be present (REQUIRED)

**Type System Design:**
- Interface extension allows TypeScript to override inherited property types
- Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
- DS Protocol-specific constraints are defined here

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec

## Extends

- [`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md)

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type {#type}

> **@type**: `"DataService"`

The type identifier for the Data Service.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

`IDataspaceProtocolDataService`.[`@type`](#type)

***

### @id {#id}

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`@id`](IDataspaceProtocolDataServiceBase.md#id)

***

### endpointURL {#endpointurl}

> **endpointURL**: `string`

Endpoint URL.

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`endpointURL`](IDataspaceProtocolDataServiceBase.md#endpointurl)

***

### servesDataset? {#servesdataset}

> `optional` **servesDataset?**: [`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md)[]

Datasets served.

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`servesDataset`](IDataspaceProtocolDataServiceBase.md#servesdataset)

***

### dcat:endpointDescription? {#dcatendpointdescription}

> `optional` **dcat:endpointDescription?**: `string`

A description of the services available via the end-points, including their
operations, parameters, etc.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:endpointDescription`](IDataspaceProtocolDataServiceBase.md#dcatendpointdescription)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:title`](IDataspaceProtocolDataServiceBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:description`](IDataspaceProtocolDataServiceBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:identifier`](IDataspaceProtocolDataServiceBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:issued`](IDataspaceProtocolDataServiceBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:modified`](IDataspaceProtocolDataServiceBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:language`](IDataspaceProtocolDataServiceBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `JsonLdObjectWithAliases`\<`IFoafAgent`, `"foaf"`\>

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:publisher`](IDataspaceProtocolDataServiceBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `JsonLdObjectWithAliases`\<`IFoafAgent`, `"foaf"`\>

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:creator`](IDataspaceProtocolDataServiceBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:accessRights`](IDataspaceProtocolDataServiceBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:license`](IDataspaceProtocolDataServiceBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:rights`](IDataspaceProtocolDataServiceBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:conformsTo`](IDataspaceProtocolDataServiceBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcterms:type`](IDataspaceProtocolDataServiceBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:contactPoint`](IDataspaceProtocolDataServiceBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:keyword`](IDataspaceProtocolDataServiceBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:theme`](IDataspaceProtocolDataServiceBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:landingPage`](IDataspaceProtocolDataServiceBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| `IDcatRelationship`

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`dcat:qualifiedRelation`](IDataspaceProtocolDataServiceBase.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy?**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDataspaceProtocolDataServiceBase`](IDataspaceProtocolDataServiceBase.md).[`odrl:hasPolicy`](IDataspaceProtocolDataServiceBase.md#odrlhaspolicy)
