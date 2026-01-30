# Interface: IUneceSegment

The parts into which a segment is or may be divided.

## See

https://vocabulary.uncefact.org/Segment

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Segment"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this section segment.

#### See

https://vocabulary.uncefact.org/identifier

***

### imageBinaryObject?

> `optional` **imageBinaryObject**: `string`

The image, expressed as a binary object, for this section segment.

#### See

https://vocabulary.uncefact.org/imageBinaryObject

***

### information?

> `optional` **information**: `string`

Information, expressed as text, in this section segment.

#### See

https://vocabulary.uncefact.org/information

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of section segment.

#### See

https://vocabulary.uncefact.org/typeCode
