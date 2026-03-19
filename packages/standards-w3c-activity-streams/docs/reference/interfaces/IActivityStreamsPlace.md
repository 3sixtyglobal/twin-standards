# Interface: IActivityStreamsPlace

A W3C Activity Streams Place.

## See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place

## Extends

- [`IActivityStreamsObject`](IActivityStreamsObject.md)

## Properties

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

***

### type {#type}

> **type**: `ObjectOrArray`\<`string`\>

Place type.

#### Overrides

[`IActivityStreamsObject`](IActivityStreamsObject.md).[`type`](IActivityStreamsObject.md#type)

***

### latitude? {#latitude}

> `optional` **latitude**: `number`

The latitude of the Place.

The Activity Streams vocabulary defines this as an `xsd:float`.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-latitude

***

### longitude? {#longitude}

> `optional` **longitude**: `number`

The longitude of the Place.

The Activity Streams vocabulary defines this as an `xsd:float`.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-longitude

***

### altitude? {#altitude}

> `optional` **altitude**: `number`

The altitude of the Place.

Measurement units are specified using the `units` property. If `units` is not specified,
the default is assumed to be "m" (meters).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-altitude

***

### accuracy? {#accuracy}

> `optional` **accuracy**: `number`

The accuracy of the Place.

Indicates the accuracy of position coordinates on a Place objects.
Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accuracy

***

### radius? {#radius}

> `optional` **radius**: `number`

The radius from the given `latitude` and `longitude`.

Measurement units are specified using the `units` property. If `units` is not specified,
the default is assumed to be "m" (meters).

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-radius

***

### units? {#units}

> `optional` **units**: `string`

Measurement units for the `radius` and `altitude` properties.

If not specified, the default is assumed to be "m" (meters). The Activity Streams
vocabulary allows values such as "cm", "feet", "inches", "km", "m", "miles", or any
other unit expressed as a URI.

#### See

https://www.w3.org/TR/activitystreams-vocabulary/#dfn-units
