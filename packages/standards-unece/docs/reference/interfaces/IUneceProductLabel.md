# Interface: IUneceProductLabel

A label, such as a garment label or a radio frequency tag, used for identifying a product.

## See

https://vocabulary.uncefact.org/ProductLabel

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductLabel"`

JSON-LD Type.

***

### attachmentDateTime? {#attachmentdatetime}

> `optional` **attachmentDateTime?**: `string`

The date, time, date time, or other date time value, for the attachment of this product label.

#### See

https://vocabulary.uncefact.org/attachmentDateTime

***

### barcodeId? {#barcodeid}

> `optional` **barcodeId?**: `string` \| `IJsonLdValueObject`

The barcode identifier of this product label.

#### See

https://vocabulary.uncefact.org/barcodeId

***

### brandName? {#brandname}

> `optional` **brandName?**: `string`

The brand name, expressed as text, on this product label.

#### See

https://vocabulary.uncefact.org/brandName

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying the category of this product label.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this product label.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedAssertion? {#includedassertion}

> `optional` **includedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion included on this product label.

#### See

https://vocabulary.uncefact.org/includedAssertion

***

### layoutTypeCode? {#layouttypecode}

> `optional` **layoutTypeCode?**: `string`

The code specifying the layout type of this product label.

#### See

https://vocabulary.uncefact.org/layoutTypeCode

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as a text, of this product label.

#### See

https://vocabulary.uncefact.org/name

***

### seriesEndId? {#seriesendid}

> `optional` **seriesEndId?**: `string` \| `IJsonLdValueObject`

The identifier of the end of a series of product labels.

#### See

https://vocabulary.uncefact.org/seriesEndId

***

### seriesStartId? {#seriesstartid}

> `optional` **seriesStartId?**: `string` \| `IJsonLdValueObject`

The identifier of the start of a series of product labels.

#### See

https://vocabulary.uncefact.org/seriesStartId

***

### sizeCode? {#sizecode}

> `optional` **sizeCode?**: `string`

The code specifying the size of this product label.

#### See

https://vocabulary.uncefact.org/sizeCode

***

### tagTypeCode? {#tagtypecode}

> `optional` **tagTypeCode?**: `string`

The code specifying the type of tag for this product label.

#### See

https://vocabulary.uncefact.org/tagTypeCode
