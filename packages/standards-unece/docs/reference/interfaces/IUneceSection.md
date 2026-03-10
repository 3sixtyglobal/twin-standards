# Interface: IUneceSection

The parts into which a label is or may be divided.

## See

https://vocabulary.uncefact.org/Section

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Section"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this label section.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSegment?

> `optional` **includedSegment**: [`IUneceSegment`](IUneceSegment.md)[]

A segment included in this label section.

#### See

https://vocabulary.uncefact.org/includedSegment

***

### patternCode?

> `optional` **patternCode**: `string`

The code specifying the pattern of this label section.

#### See

https://vocabulary.uncefact.org/patternCode
