# Interface: IActivityStreamsQuestion

A W3C Activity Streams Question.

A `Question` represents a question being asked. Use `oneOf` for exclusive
choices, `anyOf` for inclusive choices, and `closed` to indicate when the question
is closed.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question

## Extends

- [`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md)

## Properties

### actor?

> `optional` **actor**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The Actor behind the Activity.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-actor

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`actor`](IActivityStreamsIntransitiveActivity.md#actor)

***

### target?

> `optional` **target**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The target of the Activity.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-target

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`target`](IActivityStreamsIntransitiveActivity.md#target)

***

### result?

> `optional` **result**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Result of the Activity.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-result

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`result`](IActivityStreamsIntransitiveActivity.md#result)

***

### origin?

> `optional` **origin**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Activity's origin.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-origin

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`origin`](IActivityStreamsIntransitiveActivity.md#origin)

***

### instrument?

> `optional` **instrument**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Instrument used in the Activity.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-instrument

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`instrument`](IActivityStreamsIntransitiveActivity.md#instrument)

***

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`@context`](IActivityStreamsIntransitiveActivity.md#context)

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`id`](IActivityStreamsIntransitiveActivity.md#id)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`name`](IActivityStreamsIntransitiveActivity.md#name)

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`nameMap`](IActivityStreamsIntransitiveActivity.md#namemap)

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`summary`](IActivityStreamsIntransitiveActivity.md#summary)

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`summaryMap`](IActivityStreamsIntransitiveActivity.md#summarymap)

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`content`](IActivityStreamsIntransitiveActivity.md#content)

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`contentMap`](IActivityStreamsIntransitiveActivity.md#contentmap)

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`url`](IActivityStreamsIntransitiveActivity.md#url)

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`image`](IActivityStreamsIntransitiveActivity.md#image)

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`icon`](IActivityStreamsIntransitiveActivity.md#icon)

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`published`](IActivityStreamsIntransitiveActivity.md#published)

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`updated`](IActivityStreamsIntransitiveActivity.md#updated)

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`startTime`](IActivityStreamsIntransitiveActivity.md#starttime)

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`endTime`](IActivityStreamsIntransitiveActivity.md#endtime)

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`duration`](IActivityStreamsIntransitiveActivity.md#duration)

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`generator`](IActivityStreamsIntransitiveActivity.md#generator)

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`attachment`](IActivityStreamsIntransitiveActivity.md#attachment)

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`attributedTo`](IActivityStreamsIntransitiveActivity.md#attributedto)

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`audience`](IActivityStreamsIntransitiveActivity.md#audience)

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`context`](IActivityStreamsIntransitiveActivity.md#context-1)

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`location`](IActivityStreamsIntransitiveActivity.md#location)

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`tag`](IActivityStreamsIntransitiveActivity.md#tag)

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`inReplyTo`](IActivityStreamsIntransitiveActivity.md#inreplyto)

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`replies`](IActivityStreamsIntransitiveActivity.md#replies)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`preview`](IActivityStreamsIntransitiveActivity.md#preview)

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`to`](IActivityStreamsIntransitiveActivity.md#to)

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`bto`](IActivityStreamsIntransitiveActivity.md#bto)

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`cc`](IActivityStreamsIntransitiveActivity.md#cc)

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`bcc`](IActivityStreamsIntransitiveActivity.md#bcc)

***

### mediaType?

> `optional` **mediaType**: `string`

MIME media type of the referenced resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype

#### Inherited from

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`mediaType`](IActivityStreamsIntransitiveActivity.md#mediatype)

***

### type

> **type**: `ObjectOrArray`\<`string`\>

Question type.

#### Overrides

[`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md).[`type`](IActivityStreamsIntransitiveActivity.md#type)

***

### anyOf?

> `optional` **anyOf**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Specifies an inclusive list of possible answers.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-anyof

***

### oneOf?

> `optional` **oneOf**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Specifies an exclusive list of possible answers.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-oneof

***

### closed?

> `optional` **closed**: `string` \| `boolean`

Indicates that the Question has been closed.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-closed
