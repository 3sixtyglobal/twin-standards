# Interface: IUneceBinaryFile

A specified computer file or program stored in a binary format.

## See

https://vocabulary.uncefact.org/BinaryFile

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"BinaryFile"`

JSON-LD Type.

***

### access? {#access}

> `optional` **access**: `string`

Access information, expressed as text, for this specified binary file, such as security and download parameters.

#### See

https://vocabulary.uncefact.org/access

***

### accessAvailabilityPeriod? {#accessavailabilityperiod}

> `optional` **accessAvailabilityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period when access to this binary file is available.

#### See

https://vocabulary.uncefact.org/accessAvailabilityPeriod

***

### authorName? {#authorname}

> `optional` **authorName**: `string`

A name of an author, expressed as text, of this specified binary file.

#### See

https://vocabulary.uncefact.org/authorName

***

### characterSetCode? {#charactersetcode}

> `optional` **characterSetCode**: `string`

The code specifying the character set for this specified binary file.

#### See

https://vocabulary.uncefact.org/characterSetCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this specified binary file.

#### See

https://vocabulary.uncefact.org/description

***

### encodingCode? {#encodingcode}

> `optional` **encodingCode**: `string`

The code specifying the encoding of this specified binary file.

#### See

https://vocabulary.uncefact.org/encodingCode

***

### fileName? {#filename}

> `optional` **fileName**: `string`

The file name, expressed as text, of this specified binary file.

#### See

https://vocabulary.uncefact.org/fileName

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this specified binary file.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedBinaryObject? {#includedbinaryobject}

> `optional` **includedBinaryObject**: `string`

A binary object included in this specified binary file.

#### See

https://vocabulary.uncefact.org/includedBinaryObject

***

### mIMECode? {#mimecode}

> `optional` **mIMECode**: `string`

The code specifying the Multipurpose Internet Mail Extensions (MIME) type for this specified binary file.

#### See

https://vocabulary.uncefact.org/mIMECode

***

### sizeMeasure? {#sizemeasure}

> `optional` **sizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the size of this specified binary file.

#### See

https://vocabulary.uncefact.org/sizeMeasure

***

### title? {#title}

> `optional` **title**: `string`

A title, expressed as text, for this specified binary file.

#### See

https://vocabulary.uncefact.org/title

***

### uRIId? {#uriid}

> `optional` **uRIId**: `string` \| `IJsonLdValueObject`

The unique Uniform Resource Identifier (URI) for this specified binary file.

#### See

https://vocabulary.uncefact.org/uRIId

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The validity period specified of this binary file.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId? {#versionid}

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The unique version identifier for this specified binary file.

#### See

https://vocabulary.uncefact.org/versionId
