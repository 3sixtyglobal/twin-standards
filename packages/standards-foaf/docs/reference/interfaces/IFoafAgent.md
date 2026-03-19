# Interface: IFoafAgent

A FOAF Agent.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IFoafBaseObject`](IFoafBaseObject.md)

## Extended by

- [`IFoafGroup`](IFoafGroup.md)
- [`IFoafOrganization`](IFoafOrganization.md)
- [`IFoafPerson`](IFoafPerson.md)

## Properties

### @context? {#context}

> `optional` **@context?**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IFoafBaseObject`](IFoafBaseObject.md).[`@context`](IFoafBaseObject.md#context)

***

### @type {#type}

> **@type**: `string`

Type.

***

### age? {#age}

> `optional` **age?**: `number`

The age in years of some agent.

#### See

http://xmlns.com/foaf/spec/#term_age

***

### made? {#made}

> `optional` **made?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Something that was made by this agent.

#### See

http://xmlns.com/foaf/spec/#term_made

***

### weblog? {#weblog}

> `optional` **weblog?**: [`IFoafDocument`](IFoafDocument.md)

A weblog of some thing (whether person, group, company etc.).

#### See

http://xmlns.com/foaf/spec/#term_weblog

***

### openid? {#openid}

> `optional` **openid?**: [`IFoafDocument`](IFoafDocument.md)

An OpenID for an agent.

#### See

http://xmlns.com/foaf/spec/#term_openid

***

### interest? {#interest}

> `optional` **interest?**: [`IFoafDocument`](IFoafDocument.md)

A page about a topic of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_interest

***

### topic\_interest? {#topic_interest}

> `optional` **topic\_interest?**: `IJsonLdNodeObject`

A thing of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_topic_interest

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the FOAF object.

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`@id`](IFoafBaseObject.md#id)

***

### name? {#name}

> `optional` **name?**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`name`](IFoafBaseObject.md#name)

***

### title? {#title}

> `optional` **title?**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`title`](IFoafBaseObject.md#title)

***

### mbox? {#mbox}

> `optional` **mbox?**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`mbox`](IFoafBaseObject.md#mbox)

***

### homepage? {#homepage}

> `optional` **homepage?**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`homepage`](IFoafBaseObject.md#homepage)

***

### depiction? {#depiction}

> `optional` **depiction?**: [`IFoafImage`](IFoafImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`depiction`](IFoafBaseObject.md#depiction)
