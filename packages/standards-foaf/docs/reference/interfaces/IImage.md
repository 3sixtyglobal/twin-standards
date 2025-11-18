# Interface: IImage

A FOAF image.

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IDocument`](IDocument.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IDocument`](IDocument.md).[`name`](IDocument.md#name)

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IDocument`](IDocument.md).[`title`](IDocument.md#title)

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IDocument`](IDocument.md).[`mbox`](IDocument.md#mbox)

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IDocument`](IDocument.md).[`homepage`](IDocument.md#homepage)

***

### depiction?

> `optional` **depiction**: `IImage`

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IDocument`](IDocument.md).[`depiction`](IDocument.md#depiction)

***

### topic?

> `optional` **topic**: `string`

A topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_topic

#### Inherited from

[`IDocument`](IDocument.md).[`topic`](IDocument.md#topic)

***

### primaryTopic?

> `optional` **primaryTopic**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

The primary topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_primaryTopic

#### Inherited from

[`IDocument`](IDocument.md).[`primaryTopic`](IDocument.md#primarytopic)

***

### sha1?

> `optional` **sha1**: `string`

A sha1sum hash, in hex.

#### See

http://xmlns.com/foaf/spec/#term_sha1sum

#### Inherited from

[`IDocument`](IDocument.md).[`sha1`](IDocument.md#sha1)

***

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IDocument`](IDocument.md).[`@context`](IDocument.md#context)

***

### @type

> **@type**: `"Image"`

Type.

#### Overrides

[`IDocument`](IDocument.md).[`@type`](IDocument.md#type)

***

### depicts?

> `optional` **depicts**: `IJsonLdNodeObject`

A thing depicted in this representation.

#### See

http://xmlns.com/foaf/spec/#term_depicts

***

### thumbnail?

> `optional` **thumbnail**: `IImage`

A derived thumbnail image.

#### See

http://xmlns.com/foaf/spec/#term_thumbnail
