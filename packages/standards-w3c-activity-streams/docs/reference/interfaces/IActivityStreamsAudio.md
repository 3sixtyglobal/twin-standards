# Interface: IActivityStreamsAudio

A W3C Activity Streams Audio.

An `Audio` is an audio document of any kind.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audio

## Extends

- [`IActivityStreamsDocument`](IActivityStreamsDocument.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### type

> **type**: `ObjectOrArray`\<`string`\>

Audio type.

#### Overrides

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`type`](IActivityStreamsDocument.md#type)

***

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`@context`](IActivityStreamsDocument.md#context)

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`id`](IActivityStreamsDocument.md#id)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`name`](IActivityStreamsDocument.md#name)

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`nameMap`](IActivityStreamsDocument.md#namemap)

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`summary`](IActivityStreamsDocument.md#summary)

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`summaryMap`](IActivityStreamsDocument.md#summarymap)

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`content`](IActivityStreamsDocument.md#content)

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`contentMap`](IActivityStreamsDocument.md#contentmap)

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`url`](IActivityStreamsDocument.md#url)

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`image`](IActivityStreamsDocument.md#image)

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`icon`](IActivityStreamsDocument.md#icon)

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`published`](IActivityStreamsDocument.md#published)

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`updated`](IActivityStreamsDocument.md#updated)

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`startTime`](IActivityStreamsDocument.md#starttime)

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`endTime`](IActivityStreamsDocument.md#endtime)

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`duration`](IActivityStreamsDocument.md#duration)

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`generator`](IActivityStreamsDocument.md#generator)

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`attachment`](IActivityStreamsDocument.md#attachment)

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`attributedTo`](IActivityStreamsDocument.md#attributedto)

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`audience`](IActivityStreamsDocument.md#audience)

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`context`](IActivityStreamsDocument.md#context-1)

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`location`](IActivityStreamsDocument.md#location)

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`tag`](IActivityStreamsDocument.md#tag)

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`inReplyTo`](IActivityStreamsDocument.md#inreplyto)

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`replies`](IActivityStreamsDocument.md#replies)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`preview`](IActivityStreamsDocument.md#preview)

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`to`](IActivityStreamsDocument.md#to)

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`bto`](IActivityStreamsDocument.md#bto)

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`cc`](IActivityStreamsDocument.md#cc)

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsDocument`](IActivityStreamsDocument.md).[`bcc`](IActivityStreamsDocument.md#bcc)
