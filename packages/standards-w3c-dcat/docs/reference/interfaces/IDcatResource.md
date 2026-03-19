# Interface: IDcatResource

Interface for DCAT catalogued resources.
This is the parent class of dcat:Dataset, dcat:DataService, and dcat:Catalog.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Resource

## Extends

- [`IDcatResourceBase`](IDcatResourceBase.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:Catalog"` \| `"dcat:Resource"` \| `"dcat:Dataset"` \| `"dcat:DataService"` \| `"dcat:DatasetSeries"`

The type of the resource.
Typically "Catalog", "Dataset", "DataService", "DatasetSeries", or the base "Resource".

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`@type`](IDcatResourceBase.md#type)

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the resource.

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`@id`](IDcatResourceBase.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>

A name given to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:title`](IDcatResourceBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description?**: `ObjectOrArray`\<`string`\>

A free-text account of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:description`](IDcatResourceBase.md#dctermsdescription)

***

### dcterms:identifier? {#dctermsidentifier}

> `optional` **dcterms:identifier?**: `ObjectOrArray`\<`string`\>

A unique identifier of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:identifier`](IDcatResourceBase.md#dctermsidentifier)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued?**: `string`

Date of formal issuance (publication) of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:issued`](IDcatResourceBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified?**: `string`

Most recent date on which the resource was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:modified`](IDcatResourceBase.md#dctermsmodified)

***

### dcterms:language? {#dctermslanguage}

> `optional` **dcterms:language?**: `ObjectOrArray`\<`string`\>

A language of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:language`](IDcatResourceBase.md#dctermslanguage)

***

### dcterms:publisher? {#dctermspublisher}

> `optional` **dcterms:publisher?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for making the resource available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:publisher`](IDcatResourceBase.md#dctermspublisher)

***

### dcterms:creator? {#dctermscreator}

> `optional` **dcterms:creator?**: `string` \| `IFoafAgentWithAliases`

An entity responsible for producing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:creator`](IDcatResourceBase.md#dctermscreator)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights?**: `string` \| `IJsonLdNodeObject`

Information about who can access the resource or an indication of its security status.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:accessRights`](IDcatResourceBase.md#dctermsaccessrights)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license?**: `string` \| `IJsonLdNodeObject`

A legal document under which the resource is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:license`](IDcatResourceBase.md#dctermslicense)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights?**: `string` \| `IJsonLdNodeObject`

Information about rights held in and over the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:rights`](IDcatResourceBase.md#dctermsrights)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo?**: `ObjectOrArray`\<`string`\>

An established standard to which the resource conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:conformsTo`](IDcatResourceBase.md#dctermsconformsto)

***

### dcterms:type? {#dctermstype}

> `optional` **dcterms:type?**: `string`

The nature or genre of the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcterms:type`](IDcatResourceBase.md#dctermstype)

***

### dcat:contactPoint? {#dcatcontactpoint}

> `optional` **dcat:contactPoint?**: `string` \| `IJsonLdNodeObject`

Relevant contact information for the catalogued resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcat:contactPoint`](IDcatResourceBase.md#dcatcontactpoint)

***

### dcat:keyword? {#dcatkeyword}

> `optional` **dcat:keyword?**: `ObjectOrArray`\<`string`\>

A keyword or tag describing the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcat:keyword`](IDcatResourceBase.md#dcatkeyword)

***

### dcat:theme? {#dcattheme}

> `optional` **dcat:theme?**: `ObjectOrArray`\<`string`\>

A main category of the resource. A resource can have multiple themes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcat:theme`](IDcatResourceBase.md#dcattheme)

***

### dcat:landingPage? {#dcatlandingpage}

> `optional` **dcat:landingPage?**: `ObjectOrArray`\<`string`\>

A Web page that can be navigated to gain access to the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcat:landingPage`](IDcatResourceBase.md#dcatlandingpage)

***

### dcat:qualifiedRelation? {#dcatqualifiedrelation}

> `optional` **dcat:qualifiedRelation?**: `string` \| [`IDcatRelationship`](IDcatRelationship.md)

Link to a description of a relationship with another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`dcat:qualifiedRelation`](IDcatResourceBase.md#dcatqualifiedrelation)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy?**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_policy

#### Inherited from

[`IDcatResourceBase`](IDcatResourceBase.md).[`odrl:hasPolicy`](IDcatResourceBase.md#odrlhaspolicy)
