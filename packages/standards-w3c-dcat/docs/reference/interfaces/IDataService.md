# Interface: IDataService

Interface for DCAT Data Service.
A collection of operations that provides access to one or more datasets or data
processing functions.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service

## Extends

- [`IResource`](IResource.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @type

> **@type**: `"DataService"`

The type identifier, typically "DataService".

#### Overrides

[`IResource`](IResource.md).[`@type`](IResource.md#type)

***

### dcat:endpointURL?

> `optional` **dcat:endpointURL**: `string`

The root location or primary endpoint of the service (a Web-resolvable IRI).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url

***

### dcat:endpointDescription?

> `optional` **dcat:endpointDescription**: `string`

A description of the services available via the end-points, including their
operations, parameters, etc.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description

***

### dcat:servesDataset?

> `optional` **dcat:servesDataset**: `ObjectOrArray`\<`string`\>

A collection of data that this data service can distribute.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset

***

### @context?

> `optional` **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

#### Inherited from

[`IResource`](IResource.md).[`@context`](IResource.md#context)

***

### dcterms:title?

> `optional` **dcterms:title**: [`LiteralType`](../type-aliases/LiteralType.md)

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IResource`](IResource.md).[`dcterms:title`](IResource.md#dctermstitle)

***

### dcterms:description?

> `optional` **dcterms:description**: [`LiteralType`](../type-aliases/LiteralType.md)

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IResource`](IResource.md).[`dcterms:description`](IResource.md#dctermsdescription)

***

### dcterms:identifier?

> `optional` **dcterms:identifier**: [`LiteralType`](../type-aliases/LiteralType.md)

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IResource`](IResource.md).[`dcterms:identifier`](IResource.md#dctermsidentifier)

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IResource`](IResource.md).[`dcterms:issued`](IResource.md#dctermsissued)

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IResource`](IResource.md).[`dcterms:modified`](IResource.md#dctermsmodified)

***

### dcterms:language?

> `optional` **dcterms:language**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IResource`](IResource.md).[`dcterms:language`](IResource.md#dctermslanguage)

***

### dcterms:publisher?

> `optional` **dcterms:publisher**: `string` \| `IAgent`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IResource`](IResource.md).[`dcterms:publisher`](IResource.md#dctermspublisher)

***

### dcterms:creator?

> `optional` **dcterms:creator**: `IAgent`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IResource`](IResource.md).[`dcterms:creator`](IResource.md#dctermscreator)

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IResource`](IResource.md).[`dcterms:accessRights`](IResource.md#dctermsaccessrights)

***

### dcterms:license?

> `optional` **dcterms:license**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IResource`](IResource.md).[`dcterms:license`](IResource.md#dctermslicense)

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IResource`](IResource.md).[`dcterms:rights`](IResource.md#dctermsrights)

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IResource`](IResource.md).[`dcterms:conformsTo`](IResource.md#dctermsconformsto)

***

### dcterms:type?

> `optional` **dcterms:type**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IResource`](IResource.md).[`dcterms:type`](IResource.md#dctermstype)

***

### dcat:contactPoint?

> `optional` **dcat:contactPoint**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IResource`](IResource.md).[`dcat:contactPoint`](IResource.md#dcatcontactpoint)

***

### dcat:keyword?

> `optional` **dcat:keyword**: [`LiteralType`](../type-aliases/LiteralType.md)

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IResource`](IResource.md).[`dcat:keyword`](IResource.md#dcatkeyword)

***

### dcat:theme?

> `optional` **dcat:theme**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IResource`](IResource.md).[`dcat:theme`](IResource.md#dcattheme)

***

### dcat:landingPage?

> `optional` **dcat:landingPage**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IResource`](IResource.md).[`dcat:landingPage`](IResource.md#dcatlandingpage)

***

### dcat:qualifiedRelation?

> `optional` **dcat:qualifiedRelation**: `string` \| [`IRelationship`](IRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IResource`](IResource.md).[`dcat:qualifiedRelation`](IResource.md#dcatqualifiedrelation)

***

### odrl:hasPolicy?

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IResource`](IResource.md).[`odrl:hasPolicy`](IResource.md#odrlhaspolicy)
