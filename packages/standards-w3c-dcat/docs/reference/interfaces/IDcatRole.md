# Interface: IDcatRole

Interface for DCAT Role.
A role is the function of a resource or agent with respect to another resource,
in the context of resource attribution or resource relationships.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Role

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:Role"`

The type identifier, typically "Role".

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the role object.

***

### dcterms:title? {#dctermstitle}

<<<<<<< Updated upstream
> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>
=======
> `optional` **dcterms:title?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

A name given to the role.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title
