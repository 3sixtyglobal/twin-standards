# Interface: IUneceSection

The parts into which a label is or may be divided.

## See

https://vocabulary.uncefact.org/Section

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

> **type**: `"Section"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this label section.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSegment?

> `optional` **includedSegment**: [`IUneceSegment`](IUneceSegment.md)

A segment included in this label section.

#### See

https://vocabulary.uncefact.org/includedSegment

***

### patternCode?

> `optional` **patternCode**: `string`

The code specifying the pattern of this label section.

#### See

https://vocabulary.uncefact.org/patternCode
