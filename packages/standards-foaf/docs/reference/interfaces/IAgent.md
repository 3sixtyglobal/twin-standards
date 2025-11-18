# Interface: IAgent

A FOAF Agent.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IBaseObject`](IBaseObject.md)

## Extended by

- [`IGroup`](IGroup.md)
- [`IOrganization`](IOrganization.md)
- [`IPerson`](IPerson.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IBaseObject`](IBaseObject.md).[`@context`](IBaseObject.md#context)

***

### @type

> **@type**: `string`

Type.

#### Overrides

`IBaseObject.@type`

***

### age?

> `optional` **age**: `number`

The age in years of some agent.

#### See

http://xmlns.com/foaf/spec/#term_age

***

### made?

> `optional` **made**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Something that was made by this agent.

#### See

http://xmlns.com/foaf/spec/#term_made

***

### weblog?

> `optional` **weblog**: [`IDocument`](IDocument.md)

A weblog of some thing (whether person, group, company etc.).

#### See

http://xmlns.com/foaf/spec/#term_weblog

***

### openid?

> `optional` **openid**: [`IDocument`](IDocument.md)

An OpenID for an agent.

#### See

http://xmlns.com/foaf/spec/#term_openid

***

### interest?

> `optional` **interest**: [`IDocument`](IDocument.md)

A page about a topic of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_interest

***

### topic\_interest?

> `optional` **topic\_interest**: `IJsonLdNodeObject`

A thing of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_topic_interest

***

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IBaseObject`](IBaseObject.md).[`name`](IBaseObject.md#name)

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IBaseObject`](IBaseObject.md).[`title`](IBaseObject.md#title)

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IBaseObject`](IBaseObject.md).[`mbox`](IBaseObject.md#mbox)

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IBaseObject`](IBaseObject.md).[`homepage`](IBaseObject.md#homepage)

***

### depiction?

> `optional` **depiction**: [`IImage`](IImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IBaseObject`](IBaseObject.md).[`depiction`](IBaseObject.md#depiction)
