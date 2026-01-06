# Interface: IFoafDocument

A FOAF Document

## See

http://xmlns.com/foaf/0.1/

## Extends

- [`IFoafBaseObject`](IFoafBaseObject.md)

## Extended by

- [`IFoafImage`](IFoafImage.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`name`](IFoafBaseObject.md#name)

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`title`](IFoafBaseObject.md#title)

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`mbox`](IFoafBaseObject.md#mbox)

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`homepage`](IFoafBaseObject.md#homepage)

***

### depiction?

> `optional` **depiction**: [`IFoafImage`](IFoafImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction

#### Inherited from

[`IFoafBaseObject`](IFoafBaseObject.md).[`depiction`](IFoafBaseObject.md#depiction)

***

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

#### Overrides

[`IFoafBaseObject`](IFoafBaseObject.md).[`@context`](IFoafBaseObject.md#context)

***

### @type

> **@type**: `"Document"` \| `"Image"`

Type.

#### Overrides

`IFoafBaseObject.@type`

***

### topic?

> `optional` **topic**: `string`

A topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_topic

***

### primaryTopic?

> `optional` **primaryTopic**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

The primary topic of some page or document.

#### See

http://xmlns.com/foaf/spec/#term_primaryTopic

***

### sha1?

> `optional` **sha1**: `string`

A sha1sum hash, in hex.

#### See

http://xmlns.com/foaf/spec/#term_sha1sum
