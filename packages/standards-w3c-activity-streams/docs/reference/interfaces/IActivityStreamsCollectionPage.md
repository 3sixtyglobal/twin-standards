# Interface: IActivityStreamsCollectionPage

A W3C Activity Streams CollectionPage.

A `CollectionPage` represents a single page of items from a larger `Collection`.
Use `partOf` to reference the parent collection, and `next`/`prev` for paging links.

## See

https://www.w3.org/TR/activitystreams-core/#collections

## Extends

- [`IActivityStreamsCollection`](IActivityStreamsCollection.md)

## Extended by

- [`IActivityStreamsOrderedCollectionPage`](IActivityStreamsOrderedCollectionPage.md)

## Properties

### totalItems? {#totalitems}

> `optional` **totalItems**: `number`

Total number of items.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-totalitems

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`totalItems`](IActivityStreamsCollection.md#totalitems)

***

### items? {#items}

> `optional` **items**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The items of the collection.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-items

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`items`](IActivityStreamsCollection.md#items)

***

### first? {#first}

> `optional` **first**: `string` \| `IJsonLdNodeObject`

First page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-first

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`first`](IActivityStreamsCollection.md#first)

***

### last? {#last}

> `optional` **last**: `string` \| `IJsonLdNodeObject`

Last page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-last

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`last`](IActivityStreamsCollection.md#last)

***

### current? {#current}

> `optional` **current**: `string` \| `IJsonLdNodeObject`

Current page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-current

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`current`](IActivityStreamsCollection.md#current)

***

### type {#type}

> **type**: `ObjectOrArray`\<`string`\>

CollectionPage type.

#### Overrides

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`type`](IActivityStreamsCollection.md#type)

***

### partOf? {#partof}

> `optional` **partOf**: `string` \| `IJsonLdNodeObject`

Parent collection.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-partof

***

### next? {#next}

> `optional` **next**: `string` \| `IJsonLdNodeObject`

Next page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-next

***

### prev? {#prev}

> `optional` **prev**: `string` \| `IJsonLdNodeObject`

Previous page.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-prev

***

### @context {#context}

> **@context**: [`ActivityStreamsContextType`](../type-aliases/ActivityStreamsContextType.md)

The LD Context.

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`@context`](IActivityStreamsCollection.md#context)

***

### id? {#id}

> `optional` **id**: `string`

Global identifier.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`id`](IActivityStreamsCollection.md#id)

***

### name? {#name}

> `optional` **name**: `string` \| `IJsonLdLanguageMap`

Natural language name.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`name`](IActivityStreamsCollection.md#name)

***

### nameMap? {#namemap}

> `optional` **nameMap**: `IJsonLdLanguageMap`

Natural language name map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`nameMap`](IActivityStreamsCollection.md#namemap)

***

### summary? {#summary}

> `optional` **summary**: `string` \| `IJsonLdLanguageMap`

Natural language summary.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`summary`](IActivityStreamsCollection.md#summary)

***

### summaryMap? {#summarymap}

> `optional` **summaryMap**: `IJsonLdLanguageMap`

Natural language summary map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`summaryMap`](IActivityStreamsCollection.md#summarymap)

***

### content? {#content}

> `optional` **content**: `string` \| `IJsonLdLanguageMap`

Natural language content.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`content`](IActivityStreamsCollection.md#content)

***

### contentMap? {#contentmap}

> `optional` **contentMap**: `IJsonLdLanguageMap`

Natural language content map.

#### See

https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`contentMap`](IActivityStreamsCollection.md#contentmap)

***

### url? {#url}

> `optional` **url**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A link to the representation of the object.

The value can be a URI or an embedded node object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`url`](IActivityStreamsCollection.md#url)

***

### image? {#image}

> `optional` **image**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

A graphical representation of the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`image`](IActivityStreamsCollection.md#image)

***

### icon? {#icon}

> `optional` **icon**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

An icon for the object.

The value can be a URI or an embedded `Image`/`Link` object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`icon`](IActivityStreamsCollection.md#icon)

***

### published? {#published}

> `optional` **published**: `string`

Published date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`published`](IActivityStreamsCollection.md#published)

***

### updated? {#updated}

> `optional` **updated**: `string`

Updated date-time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`updated`](IActivityStreamsCollection.md#updated)

***

### startTime? {#starttime}

> `optional` **startTime**: `string`

Start time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`startTime`](IActivityStreamsCollection.md#starttime)

***

### endTime? {#endtime}

> `optional` **endTime**: `string`

End time.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`endTime`](IActivityStreamsCollection.md#endtime)

***

### duration? {#duration}

> `optional` **duration**: `string`

Duration.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`duration`](IActivityStreamsCollection.md#duration)

***

### generator? {#generator}

> `optional` **generator**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

The generator of the object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`generator`](IActivityStreamsCollection.md#generator)

***

### attachment? {#attachment}

> `optional` **attachment**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Attachments.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`attachment`](IActivityStreamsCollection.md#attachment)

***

### attributedTo? {#attributedto}

> `optional` **attributedTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Objects attributed to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`attributedTo`](IActivityStreamsCollection.md#attributedto)

***

### audience? {#audience}

> `optional` **audience**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Audience.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`audience`](IActivityStreamsCollection.md#audience)

***

### context? {#context-1}

> `optional` **context**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Context.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`context`](IActivityStreamsCollection.md#context-1)

***

### location? {#location}

> `optional` **location**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Location.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`location`](IActivityStreamsCollection.md#location)

***

### tag? {#tag}

> `optional` **tag**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Tag.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`tag`](IActivityStreamsCollection.md#tag)

***

### inReplyTo? {#inreplyto}

> `optional` **inReplyTo**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

In reply to.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`inReplyTo`](IActivityStreamsCollection.md#inreplyto)

***

### replies? {#replies}

> `optional` **replies**: `IJsonLdNodeObject`

Replies collection.

Typically an embedded `Collection` of Objects that are replies to this object.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`replies`](IActivityStreamsCollection.md#replies)

***

### preview? {#preview}

> `optional` **preview**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

Preview.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`preview`](IActivityStreamsCollection.md#preview)

***

### to? {#to}

> `optional` **to**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

To.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`to`](IActivityStreamsCollection.md#to)

***

### bto? {#bto}

> `optional` **bto**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BTo.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`bto`](IActivityStreamsCollection.md#bto)

***

### cc? {#cc}

> `optional` **cc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

CC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`cc`](IActivityStreamsCollection.md#cc)

***

### bcc? {#bcc}

> `optional` **bcc**: `ObjectOrArray`\<`string` \| `IJsonLdNodeObject`\>

BCC.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`bcc`](IActivityStreamsCollection.md#bcc)

***

### mediaType? {#mediatype}

> `optional` **mediaType**: `string`

MIME media type of the referenced resource.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype

#### Inherited from

[`IActivityStreamsCollection`](IActivityStreamsCollection.md).[`mediaType`](IActivityStreamsCollection.md#mediatype)
