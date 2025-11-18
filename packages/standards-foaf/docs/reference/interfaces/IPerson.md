# Interface: IPerson

A FOAF Person.

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

> **@type**: `"Person"`

Type.

#### Overrides

[`IAgent`](IAgent.md).[`@type`](IAgent.md#type)

***

### familyName?

> `optional` **familyName**: `string`

The family name of some person.

#### See

http://xmlns.com/foaf/spec/#term_familyName

***

### givenName?

> `optional` **givenName**: `string`

The given name of some person.

#### See

http://xmlns.com/foaf/spec/#term_givenName

***

### knows?

> `optional` **knows**: `ObjectOrArray`\<[`IAgent`](IAgent.md)\>

A person known by this person (indicating some level of reciprocated interaction between the parties).

#### See

http://xmlns.com/foaf/spec/#term_knows

***

### img?

> `optional` **img**: [`IImage`](IImage.md)

An image that can be used to represent some thing.

#### See

http://xmlns.com/foaf/spec/#term_img

***

### nick?

> `optional` **nick**: `string`

A short informal nickname characterizing an agent (includes login identifiers, IRC and other chat nicknames).

#### See

http://xmlns.com/foaf/spec/#term_nick
