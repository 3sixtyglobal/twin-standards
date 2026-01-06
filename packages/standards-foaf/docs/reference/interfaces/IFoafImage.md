# Interface: IFoafImage

A FOAF image.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IFoafDocument`](IFoafDocument.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`name`](IFoafDocument.md#name)

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`title`](IFoafDocument.md#title)

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`mbox`](IFoafDocument.md#mbox)

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`homepage`](IFoafDocument.md#homepage)

***

### depiction?

> `optional` **depiction**: `IFoafImage`

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`depiction`](IFoafDocument.md#depiction)

***

### topic?

> `optional` **topic**: `string`

A topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_topic

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`topic`](IFoafDocument.md#topic)

***

### primaryTopic?

> `optional` **primaryTopic**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

The primary topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_primaryTopic

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`primaryTopic`](IFoafDocument.md#primarytopic)

***

### sha1?

> `optional` **sha1**: `string`

A sha1sum hash, in hex.

#### See

http://xmlns.com/foaf/spec/#term_sha1sum

#### Inherited from

[`IFoafDocument`](IFoafDocument.md).[`sha1`](IFoafDocument.md#sha1)

***

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IFoafDocument`](IFoafDocument.md).[`@context`](IFoafDocument.md#context)

***

### @type

> **@type**: `"Image"`

Type.

#### Overrides

[`IFoafDocument`](IFoafDocument.md).[`@type`](IFoafDocument.md#type)

***

### depicts?

> `optional` **depicts**: `IJsonLdNodeObject`

A thing depicted in this representation.

#### See

http://xmlns.com/foaf/spec/#term_depicts

***

### thumbnail?

> `optional` **thumbnail**: `IFoafImage`

A derived thumbnail image.

#### See

http://xmlns.com/foaf/spec/#term_thumbnail
