# Interface: IUneceLogisticsLabel

A label used for identifying goods for logistics purposes, such as a barcode, a radio frequency tag or a Vehicle
Identification Number (VIN).

## See

https://vocabulary.uncefact.org/LogisticsLabel

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LogisticsLabel"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this logistics label.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSection? {#includedsection}

> `optional` **includedSection**: [`IUneceSection`](IUneceSection.md)[]

A section included in this logistics label.

#### See

https://vocabulary.uncefact.org/includedSection

***

### layoutTypeCode? {#layouttypecode}

> `optional` **layoutTypeCode**: `string`

The code specifying the layout type of this logistics label.

#### See

https://vocabulary.uncefact.org/layoutTypeCode

***

### markingIndicator? {#markingindicator}

> `optional` **markingIndicator**: `boolean`

The indication of whether or not there is a marking on this logistics label.

#### See

https://vocabulary.uncefact.org/markingIndicator

***

### seriesEndId? {#seriesendid}

> `optional` **seriesEndId**: `string` \| `IJsonLdValueObject`

The unique identifier of the end of a series of logistics labels.

#### See

https://vocabulary.uncefact.org/seriesEndId

***

### seriesStartId? {#seriesstartid}

> `optional` **seriesStartId**: `string` \| `IJsonLdValueObject`

The unique identifier of the start of a series of logistics labels.

#### See

https://vocabulary.uncefact.org/seriesStartId

***

### sizeCode? {#sizecode}

> `optional` **sizeCode**: `string`

The code specifying the size of this logistics label.

#### See

https://vocabulary.uncefact.org/sizeCode
