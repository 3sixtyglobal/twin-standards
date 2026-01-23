# Interface: IActivityStreamsObject

A W3C Activity Streams Object.

This is the base type for most ActivityStreams entities. It supports natural language
values (e.g. `name`, `summary`, `content`) as either plain strings or language maps.

## See

https://www.w3.org/TR/activitystreams-core/#object

## Extends

- `IJsonLdNodeObject`

## Extended by

- [`IActivityStreamsActivity`](IActivityStreamsActivity.md)
- [`IActivityStreamsActor`](IActivityStreamsActor.md)
- [`IActivityStreamsCollection`](IActivityStreamsCollection.md)
- [`IActivityStreamsDocument`](IActivityStreamsDocument.md)
- [`IActivityStreamsEvent`](IActivityStreamsEvent.md)
- [`IActivityStreamsImage`](IActivityStreamsImage.md)
- [`IActivityStreamsIntransitiveActivity`](IActivityStreamsIntransitiveActivity.md)
- [`IActivityStreamsNote`](IActivityStreamsNote.md)
- [`IActivityStreamsPlace`](IActivityStreamsPlace.md)
- [`IActivityStreamsProfile`](IActivityStreamsProfile.md)
- [`IActivityStreamsRelationship`](IActivityStreamsRelationship.md)
- [`IActivityStreamsTombstone`](IActivityStreamsTombstone.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type?

> `optional` **type**: `ObjectOrArray`\<`string`\>

Object type.

The value can be a single type or an array of types.

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc
