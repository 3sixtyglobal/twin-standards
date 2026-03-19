# Interface: IUneceSegment

The parts into which a segment is or may be divided.

## See

https://vocabulary.uncefact.org/Segment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Segment"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of this section segment.

#### See

https://vocabulary.uncefact.org/identifier

***

### imageBinaryObject? {#imagebinaryobject}

> `optional` **imageBinaryObject?**: `string`

The image, expressed as a binary object, for this section segment.

#### See

https://vocabulary.uncefact.org/imageBinaryObject

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, in this section segment.

#### See

https://vocabulary.uncefact.org/information

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of section segment.

#### See

https://vocabulary.uncefact.org/typeCode
