# Interface: IDataspaceProtocolDataServiceBase

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

- `Omit`\<`IDcatDataServiceBase`, `"@type"` \| `"dcat:servesDataset"` \| `"dcat:endpointURL"`\>

## Extended by

- [`IDataspaceProtocolDataService`](IDataspaceProtocolDataService.md)

## Properties

### @type {#type}

> **@type**: `"DataService"`

The type identifier for the Data Service.
REQUIRED per Eclipse Data Space Protocol.

***

### @id {#id}

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Overrides

`Omit.@id`

***

### endpointURL {#endpointurl}

> **endpointURL**: `string`

Endpoint URL.

***

### servesDataset? {#servesdataset}

> `optional` **servesDataset?**: `ObjectOrArray`\<[`IDataspaceProtocolDatasetBase`](IDataspaceProtocolDatasetBase.md)\>

Datasets served.

***

### dcat:endpointDescription? {#dcatendpointdescription}

> `optional` **dcat:endpointDescription?**: `string`

A description of the services available via the end-points, including their
operations, parameters, etc.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description

#### Inherited from

`Omit.dcat:endpointDescription`

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

`Omit.dcterms:title`

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

`Omit.dcterms:description`

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

`Omit.dcterms:identifier`

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

`Omit.dcterms:issued`

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

`Omit.dcterms:modified`

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

`Omit.dcterms:language`

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

`Omit.dcterms:publisher`

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

`Omit.dcterms:creator`

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

`Omit.dcterms:accessRights`

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

`Omit.dcterms:license`

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

`Omit.dcterms:rights`

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

`Omit.dcterms:conformsTo`

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

`Omit.dcterms:type`

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

`Omit.dcat:contactPoint`

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

`Omit.dcat:keyword`

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

`Omit.dcat:theme`

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

`Omit.dcat:landingPage`

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| `IDcatRelationship`

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

`Omit.dcat:qualifiedRelation`

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy?**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

`Omit.odrl:hasPolicy`
