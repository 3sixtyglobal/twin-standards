# Interface: IActivityStreamsApplication

A W3C Activity Streams Application.

An `Application` represents a software application.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-application

## Extends

- [`IActivityStreamsActor`](IActivityStreamsActor.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### type

> **type**: `ObjectOrArray`\<`string`\>

Application type.

#### Overrides

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`type`](IActivityStreamsActor.md#type)

***

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`@context`](IActivityStreamsActor.md#context)

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`id`](IActivityStreamsActor.md#id)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`name`](IActivityStreamsActor.md#name)

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`nameMap`](IActivityStreamsActor.md#namemap)

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`summary`](IActivityStreamsActor.md#summary)

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`summaryMap`](IActivityStreamsActor.md#summarymap)

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`content`](IActivityStreamsActor.md#content)

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`contentMap`](IActivityStreamsActor.md#contentmap)

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`url`](IActivityStreamsActor.md#url)

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`image`](IActivityStreamsActor.md#image)

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`icon`](IActivityStreamsActor.md#icon)

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`published`](IActivityStreamsActor.md#published)

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`updated`](IActivityStreamsActor.md#updated)

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`startTime`](IActivityStreamsActor.md#starttime)

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`endTime`](IActivityStreamsActor.md#endtime)

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`duration`](IActivityStreamsActor.md#duration)

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`generator`](IActivityStreamsActor.md#generator)

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`attachment`](IActivityStreamsActor.md#attachment)

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`attributedTo`](IActivityStreamsActor.md#attributedto)

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`audience`](IActivityStreamsActor.md#audience)

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`context`](IActivityStreamsActor.md#context-1)

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`location`](IActivityStreamsActor.md#location)

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`tag`](IActivityStreamsActor.md#tag)

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`inReplyTo`](IActivityStreamsActor.md#inreplyto)

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`replies`](IActivityStreamsActor.md#replies)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`preview`](IActivityStreamsActor.md#preview)

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`to`](IActivityStreamsActor.md#to)

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`bto`](IActivityStreamsActor.md#bto)

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`cc`](IActivityStreamsActor.md#cc)

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsActor`](IActivityStreamsActor.md).[`bcc`](IActivityStreamsActor.md#bcc)
