# Interface: IFoafPerson

A FOAF Person.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IFoafAgent`](IFoafAgent.md)

## Properties

### age? {#age}

> `optional` **age?**: `number`

The age in years of some agent.

#### See

http://xmlns.com/foaf/spec/#term_age

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`age`](IFoafAgent.md#age)

***

### made? {#made}

> `optional` **made?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Something that was made by this agent.

#### See

http://xmlns.com/foaf/spec/#term_made

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`made`](IFoafAgent.md#made)

***

### weblog? {#weblog}

> `optional` **weblog?**: [`IFoafDocument`](IFoafDocument.md)

A weblog of some thing (whether person, group, company etc.).

#### See

http://xmlns.com/foaf/spec/#term_weblog

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`weblog`](IFoafAgent.md#weblog)

***

### openid? {#openid}

> `optional` **openid?**: [`IFoafDocument`](IFoafDocument.md)

An OpenID for an agent.

#### See

http://xmlns.com/foaf/spec/#term_openid

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`openid`](IFoafAgent.md#openid)

***

### interest? {#interest}

> `optional` **interest?**: [`IFoafDocument`](IFoafDocument.md)

A page about a topic of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_interest

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`interest`](IFoafAgent.md#interest)

***

### topic\_interest? {#topic_interest}

> `optional` **topic\_interest?**: `IJsonLdNodeObject`

A thing of interest to this person.

#### See

http://xmlns.com/foaf/spec/#term_topic_interest

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`topic_interest`](IFoafAgent.md#topic_interest)

***

### @id? {#id}

> `optional` **@id?**: `string`

The unique identifier for the FOAF object.

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`@id`](IFoafAgent.md#id)

***

### name? {#name}

> `optional` **name?**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`name`](IFoafAgent.md#name)

***

### title? {#title}

> `optional` **title?**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`title`](IFoafAgent.md#title)

***

### mbox? {#mbox}

> `optional` **mbox?**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`mbox`](IFoafAgent.md#mbox)

***

### homepage? {#homepage}

> `optional` **homepage?**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`homepage`](IFoafAgent.md#homepage)

***

### depiction? {#depiction}

> `optional` **depiction?**: [`IFoafImage`](IFoafImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IFoafAgent`](IFoafAgent.md).[`depiction`](IFoafAgent.md#depiction)

***

### @context? {#context}

> `optional` **@context?**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IFoafAgent`](IFoafAgent.md).[`@context`](IFoafAgent.md#context)

***

### @type {#type}

> **@type**: `"Person"`

Type.

#### Overrides

[`IFoafAgent`](IFoafAgent.md).[`@type`](IFoafAgent.md#type)

***

### familyName? {#familyname}

> `optional` **familyName?**: `string`

The family name of some person.

#### See

http://xmlns.com/foaf/spec/#term_familyName

***

### givenName? {#givenname}

> `optional` **givenName?**: `string`

The given name of some person.

#### See

http://xmlns.com/foaf/spec/#term_givenName

***

### knows? {#knows}

> `optional` **knows?**: `ObjectOrArray`\<[`IFoafAgent`](IFoafAgent.md)\>

A person known by this person (indicating some level of reciprocated interaction between the parties).

#### See

http://xmlns.com/foaf/spec/#term_knows

***

### img? {#img}

> `optional` **img?**: [`IFoafImage`](IFoafImage.md)

An image that can be used to represent some thing.

#### See

http://xmlns.com/foaf/spec/#term_img

***

### nick? {#nick}

> `optional` **nick?**: `string`

A short informal nickname characterizing an agent (includes login identifiers, IRC and other chat nicknames).

#### See

http://xmlns.com/foaf/spec/#term_nick
