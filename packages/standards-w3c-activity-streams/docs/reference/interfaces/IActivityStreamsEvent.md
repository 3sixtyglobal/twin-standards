# Interface: IActivityStreamsEvent

A W3C Activity Streams Event.

An `Event` is an object that represents something that occurs at a certain time and location.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-event

## Extends

- [`IActivityStreamsObject`](IActivityStreamsObject.md)

## Properties

### type {#type}

> **type**: `string` \| `string`[]

Event type.

#### Overrides

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`type`](IActivityStreamsObject.md#type)

***

### @context {#context}

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`@context`](IActivityStreamsObject.md#context)

***

### id? {#id}

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`id`](IActivityStreamsObject.md#id)

***

### name? {#name}

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`name`](IActivityStreamsObject.md#name)

***

### nameMap? {#namemap}

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`nameMap`](IActivityStreamsObject.md#namemap)

***

### summary? {#summary}

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`summary`](IActivityStreamsObject.md#summary)

***

### summaryMap? {#summarymap}

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`summaryMap`](IActivityStreamsObject.md#summarymap)

***

### content? {#content}

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`content`](IActivityStreamsObject.md#content)

***

### contentMap? {#contentmap}

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`contentMap`](IActivityStreamsObject.md#contentmap)

***

### url? {#url}

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`url`](IActivityStreamsObject.md#url)

***

### image? {#image}

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`image`](IActivityStreamsObject.md#image)

***

### icon? {#icon}

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`icon`](IActivityStreamsObject.md#icon)

***

### published? {#published}

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`published`](IActivityStreamsObject.md#published)

***

### updated? {#updated}

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`updated`](IActivityStreamsObject.md#updated)

***

### startTime? {#starttime}

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`startTime`](IActivityStreamsObject.md#starttime)

***

### endTime? {#endtime}

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`endTime`](IActivityStreamsObject.md#endtime)

***

### duration? {#duration}

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`duration`](IActivityStreamsObject.md#duration)

***

### generator? {#generator}

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`generator`](IActivityStreamsObject.md#generator)

***

### attachment? {#attachment}

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`attachment`](IActivityStreamsObject.md#attachment)

***

### attributedTo? {#attributedto}

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`attributedTo`](IActivityStreamsObject.md#attributedto)

***

### audience? {#audience}

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`audience`](IActivityStreamsObject.md#audience)

***

### context? {#context-1}

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`context`](IActivityStreamsObject.md#context-1)

***

### location? {#location}

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`location`](IActivityStreamsObject.md#location)

***

### tag? {#tag}

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`tag`](IActivityStreamsObject.md#tag)

***

### inReplyTo? {#inreplyto}

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`inReplyTo`](IActivityStreamsObject.md#inreplyto)

***

### replies? {#replies}

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`replies`](IActivityStreamsObject.md#replies)

***

### preview? {#preview}

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`preview`](IActivityStreamsObject.md#preview)

***

### to? {#to}

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`to`](IActivityStreamsObject.md#to)

***

### bto? {#bto}

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`bto`](IActivityStreamsObject.md#bto)

***

### cc? {#cc}

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`cc`](IActivityStreamsObject.md#cc)

***

### bcc? {#bcc}

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`bcc`](IActivityStreamsObject.md#bcc)

***

### mediaType? {#mediatype}

> `optional` **mediaType**: `string`

MIME media type of the referenced resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`mediaType`](IActivityStreamsObject.md#mediatype)
