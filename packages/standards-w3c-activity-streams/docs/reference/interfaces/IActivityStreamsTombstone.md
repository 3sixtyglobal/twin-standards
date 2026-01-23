# Interface: IActivityStreamsTombstone

A W3C Activity Streams Tombstone.

A `Tombstone` represents an object that has been deleted. Implementations can
include `formerType` and `deleted` to provide additional context.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tombstone

## Extends

- [`IActivityStreamsObject`](IActivityStreamsObject.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`@context`](IActivityStreamsObject.md#context)

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`id`](IActivityStreamsObject.md#id)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`name`](IActivityStreamsObject.md#name)

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`nameMap`](IActivityStreamsObject.md#namemap)

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`summary`](IActivityStreamsObject.md#summary)

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`summaryMap`](IActivityStreamsObject.md#summarymap)

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`content`](IActivityStreamsObject.md#content)

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`contentMap`](IActivityStreamsObject.md#contentmap)

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`url`](IActivityStreamsObject.md#url)

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`image`](IActivityStreamsObject.md#image)

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`icon`](IActivityStreamsObject.md#icon)

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`published`](IActivityStreamsObject.md#published)

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`updated`](IActivityStreamsObject.md#updated)

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`startTime`](IActivityStreamsObject.md#starttime)

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`endTime`](IActivityStreamsObject.md#endtime)

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`duration`](IActivityStreamsObject.md#duration)

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`generator`](IActivityStreamsObject.md#generator)

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`attachment`](IActivityStreamsObject.md#attachment)

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`attributedTo`](IActivityStreamsObject.md#attributedto)

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`audience`](IActivityStreamsObject.md#audience)

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`context`](IActivityStreamsObject.md#context-1)

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`location`](IActivityStreamsObject.md#location)

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`tag`](IActivityStreamsObject.md#tag)

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`inReplyTo`](IActivityStreamsObject.md#inreplyto)

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`replies`](IActivityStreamsObject.md#replies)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`preview`](IActivityStreamsObject.md#preview)

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`to`](IActivityStreamsObject.md#to)

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`bto`](IActivityStreamsObject.md#bto)

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`cc`](IActivityStreamsObject.md#cc)

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`bcc`](IActivityStreamsObject.md#bcc)

***

### type

> **type**: `ObjectOrArray`\<`string`\>

Tombstone type.

#### Overrides

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`type`](IActivityStreamsObject.md#type)

***

### deleted?

> `optional` **deleted**: `string`

The date and time at which the object was deleted.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-deleted

***

### formerType?

> `optional` **formerType**: `ObjectOrArray`\<`string`\>

The former type of the deleted object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-formertype
