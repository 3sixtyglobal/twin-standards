# Interface: IDcatRelationship

Interface for DCAT Relationship.
An association class for attaching additional information to a relationship
between DCAT Resources.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Relationship

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:Relationship"`

The type identifier, typically "Relationship".

***

### dcterms:relation? {#dctermsrelation}

> `optional` **dcterms:relation?**: `string` \| `IJsonLdNodeObject`

The link to a related resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_relation

***

### dcat:hadRole? {#dcathadrole}

> `optional` **dcat:hadRole?**: [`IDcatRole`](IDcatRole.md)

The function of an entity or agent with respect to another resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_hadRole
