# Interface: IActivityStreamsOrderedCollectionPage

A W3C Activity Streams OrderedCollectionPage.

An `OrderedCollectionPage` is a page from an `OrderedCollection`. When
`orderedItems` are present, `startIndex` can be used as an offset for the first
item in the page.

## See

https://www.w3.org/TR/activitystreams-core/#collections

## Extends

- [`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`IActivityStreamsOrderedCollection`](IActivityStreamsOrderedCollection.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### totalItems?

> `optional` **totalItems**: `number`

Total number of items.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-totalitems

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`totalItems`](IActivityStreamsCollectionPage.md#totalitems)

***

### items?

> `optional` **items**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The items of the collection.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-items

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`items`](IActivityStreamsCollectionPage.md#items)

***

### first?

> `optional` **first**: `string` \| `IJsonLdNodeObject`

First page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-first

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`first`](IActivityStreamsCollectionPage.md#first)

***

### last?

> `optional` **last**: `string` \| `IJsonLdNodeObject`

Last page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-last

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`last`](IActivityStreamsCollectionPage.md#last)

***

### current?

> `optional` **current**: `string` \| `IJsonLdNodeObject`

Current page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-current

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`current`](IActivityStreamsCollectionPage.md#current)

***

### partOf?

> `optional` **partOf**: `string` \| `IJsonLdNodeObject`

Parent collection.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-partof

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`partOf`](IActivityStreamsCollectionPage.md#partof)

***

### next?

> `optional` **next**: `string` \| `IJsonLdNodeObject`

Next page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-next

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`next`](IActivityStreamsCollectionPage.md#next)

***

### prev?

> `optional` **prev**: `string` \| `IJsonLdNodeObject`

Previous page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-prev

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`prev`](IActivityStreamsCollectionPage.md#prev)

***

### @context

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`@context`](IActivityStreamsCollectionPage.md#context)

***

### id?

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`id`](IActivityStreamsCollectionPage.md#id)

***

### name?

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`name`](IActivityStreamsCollectionPage.md#name)

***

### nameMap?

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`nameMap`](IActivityStreamsCollectionPage.md#namemap)

***

### summary?

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`summary`](IActivityStreamsCollectionPage.md#summary)

***

### summaryMap?

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`summaryMap`](IActivityStreamsCollectionPage.md#summarymap)

***

### content?

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`content`](IActivityStreamsCollectionPage.md#content)

***

### contentMap?

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`contentMap`](IActivityStreamsCollectionPage.md#contentmap)

***

### url?

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`url`](IActivityStreamsCollectionPage.md#url)

***

### image?

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`image`](IActivityStreamsCollectionPage.md#image)

***

### icon?

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`icon`](IActivityStreamsCollectionPage.md#icon)

***

### published?

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`published`](IActivityStreamsCollectionPage.md#published)

***

### updated?

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`updated`](IActivityStreamsCollectionPage.md#updated)

***

### startTime?

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`startTime`](IActivityStreamsCollectionPage.md#starttime)

***

### endTime?

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`endTime`](IActivityStreamsCollectionPage.md#endtime)

***

### duration?

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`duration`](IActivityStreamsCollectionPage.md#duration)

***

### generator?

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`generator`](IActivityStreamsCollectionPage.md#generator)

***

### attachment?

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`attachment`](IActivityStreamsCollectionPage.md#attachment)

***

### attributedTo?

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`attributedTo`](IActivityStreamsCollectionPage.md#attributedto)

***

### audience?

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`audience`](IActivityStreamsCollectionPage.md#audience)

***

### context?

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`context`](IActivityStreamsCollectionPage.md#context-1)

***

### location?

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`location`](IActivityStreamsCollectionPage.md#location)

***

### tag?

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`tag`](IActivityStreamsCollectionPage.md#tag)

***

### inReplyTo?

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`inReplyTo`](IActivityStreamsCollectionPage.md#inreplyto)

***

### replies?

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`replies`](IActivityStreamsCollectionPage.md#replies)

***

### preview?

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`preview`](IActivityStreamsCollectionPage.md#preview)

***

### to?

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`to`](IActivityStreamsCollectionPage.md#to)

***

### bto?

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`bto`](IActivityStreamsCollectionPage.md#bto)

***

### cc?

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`cc`](IActivityStreamsCollectionPage.md#cc)

***

### bcc?

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`bcc`](IActivityStreamsCollectionPage.md#bcc)

***

### orderedItems?

> `optional` **orderedItems**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The ordered items of the collection.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ordereditems

#### Inherited from

[`IActivityStreamsOrderedCollection`](IActivityStreamsOrderedCollection.md).[`orderedItems`](IActivityStreamsOrderedCollection.md#ordereditems)

***

### type

> **type**: `ObjectOrArray`\<`string`\>

OrderedCollectionPage type.

#### Overrides

[`IActivityStreamsCollectionPage`](IActivityStreamsCollectionPage.md).[`type`](IActivityStreamsCollectionPage.md#type)

***

### startIndex?

> `optional` **startIndex**: `number`

Relative index position of the first item in this page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-startindex
