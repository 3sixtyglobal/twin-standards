# Interface: IActivityStreamsLink

A W3C Activity Streams Link.

A `Link` is used to reference a resource by URI (via `href`) and can include
optional presentation metadata such as `name`, `mediaType`, `height`, and `width`.

## See

https://www.w3.org/TR/activitystreams-core/#link

## Extended by

- [`IActivityStreamsMention`](IActivityStreamsMention.md)

## Properties

### @context {#context}

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

***

### type {#type}

> **type**: `string` \| `string`[]

Link type.

***

### href {#href}

> **href**: `string`

The target URI of the Link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-href

***

### name? {#name}

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

A natural language name for the link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

***

### hreflang? {#hreflang}

> `optional` **hreflang**: `string`

A language hint for the target resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-hreflang

***

### mediaType? {#mediatype}

> `optional` **mediaType**: `string`

MIME media type of the referenced resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype

***

### rel? {#rel}

> `optional` **rel**: `ObjectOrArray`\<`string`\>

Link relation value(s).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-rel

***

### height? {#height}

> `optional` **height**: `number`

Desired rendered height.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-height

***

### width? {#width}

> `optional` **width**: `number`

Desired rendered width.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-width

***

### preview? {#preview}

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview of the link.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview
