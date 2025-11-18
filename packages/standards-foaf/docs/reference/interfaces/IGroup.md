# Interface: IGroup

A FOAF Group.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IAgent`](IAgent.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### age?

> `optional` **age**: `number`

The age in years of some agent.

#### See

http://xmlns.com/foaf/spec/#term_age

#### Inherited from

[`IAgent`](IAgent.md).[`age`](IAgent.md#age)

***

### made?

> `optional` **made**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Something that was made by this agent.

#### See

http://xmlns.com/foaf/spec/#term_made

#### Inherited from

[`IAgent`](IAgent.md).[`made`](IAgent.md#made)

***

### weblog?

> `optional` **weblog**: [`IDocument`](IDocument.md)

A weblog of some thing (whether person, group, company etc.).

#### See

http://xmlns.com/foaf/spec/#term_weblog

#### Inherited from

[`IAgent`](IAgent.md).[`weblog`](IAgent.md#weblog)

***

### openid?

> `optional` **openid**: [`IDocument`](IDocument.md)

An OpenID for an agent.

#### See

http://xmlns.com/foaf/spec/#term_openid

#### Inherited from

[`IAgent`](IAgent.md).[`openid`](IAgent.md#openid)

***

### interest?

> `optional` **interest**: [`IDocument`](IDocument.md)

A page about a topic of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_interest

#### Inherited from

[`IAgent`](IAgent.md).[`interest`](IAgent.md#interest)

***

### topic\_interest?

> `optional` **topic\_interest**: `IJsonLdNodeObject`

A thing of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_topic_interest

#### Inherited from

[`IAgent`](IAgent.md).[`topic_interest`](IAgent.md#topic_interest)

***

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IAgent`](IAgent.md).[`name`](IAgent.md#name)

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IAgent`](IAgent.md).[`title`](IAgent.md#title)

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IAgent`](IAgent.md).[`mbox`](IAgent.md#mbox)

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IAgent`](IAgent.md).[`homepage`](IAgent.md#homepage)

***

### depiction?

> `optional` **depiction**: [`IImage`](IImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IAgent`](IAgent.md).[`depiction`](IAgent.md#depiction)

***

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IAgent`](IAgent.md).[`@context`](IAgent.md#context)

***

### @type

> **@type**: `"Group"`

Type.

#### Overrides

[`IAgent`](IAgent.md).[`@type`](IAgent.md#type)

***

### member?

> `optional` **member**: `ObjectOrArray`\<[`IAgent`](IAgent.md)\>

Indicates a member of a Group

#### See

http://xmlns.com/foaf/spec/#term_member
