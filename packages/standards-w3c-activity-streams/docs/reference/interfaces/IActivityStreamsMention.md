# Interface: IActivityStreamsMention

A W3C Activity Streams Mention.

A `Mention` is a specialised `Link` typically used to identify users or
objects being mentioned within content.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mention

## Extends

- [`IActivityStreamsLink`](IActivityStreamsLink.md)

## Properties

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`@context`](IActivityStreamsLink.md#context)

***

### href

> **href**: `string`

The target URI of the Link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-href

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`href`](IActivityStreamsLink.md#href)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

A natural language name for the link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`name`](IActivityStreamsLink.md#name)

***

### hreflang?

> `optional` **hreflang**: `string`

A language hint for the target resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-hreflang

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`hreflang`](IActivityStreamsLink.md#hreflang)

***

### mediaType?

> `optional` **mediaType**: `string`

MIME media type of the referenced resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`mediaType`](IActivityStreamsLink.md#mediatype)

***

### rel?

> `optional` **rel**: `ObjectOrArray`\<`string`\>

Link relation value(s).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-rel

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`rel`](IActivityStreamsLink.md#rel)

***

### height?

> `optional` **height**: `number`

Desired rendered height.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-height

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`height`](IActivityStreamsLink.md#height)

***

### width?

> `optional` **width**: `number`

Desired rendered width.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-width

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`width`](IActivityStreamsLink.md#width)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview of the link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`preview`](IActivityStreamsLink.md#preview)

***

### type

> **type**: `ObjectOrArray`\<`string`\>

Mention type.

#### Overrides

[`IActivityStreamsLink`](IActivityStreamsLink.md).[`type`](IActivityStreamsLink.md#type)
