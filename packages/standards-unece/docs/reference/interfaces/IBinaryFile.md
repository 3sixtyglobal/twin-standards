# Interface: IBinaryFile

A specified computer file or program stored in a binary format.

## See

https://vocabulary.uncefact.org/BinaryFile

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"BinaryFile"`

JSON-LD Type.

***

### access?

> `optional` **access**: `string`

Access information, expressed as text, for this specified binary file, such as security and download parameters.

#### See

https://vocabulary.uncefact.org/access

***

### accessAvailabilityPeriod?

> `optional` **accessAvailabilityPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The specified period when access to this binary file is available.

#### See

https://vocabulary.uncefact.org/accessAvailabilityPeriod

***

### authorName?

> `optional` **authorName**: `string`

A name of an author, expressed as text, of this specified binary file.

#### See

https://vocabulary.uncefact.org/authorName

***

### characterSetCode?

> `optional` **characterSetCode**: `string`

The code specifying the character set for this specified binary file.

#### See

https://vocabulary.uncefact.org/characterSetCode

***

### description?

> `optional` **description**: `string`

A textual description of this specified binary file.

#### See

https://vocabulary.uncefact.org/description

***

### encodingCode?

> `optional` **encodingCode**: `string`

The code specifying the encoding of this specified binary file.

#### See

https://vocabulary.uncefact.org/encodingCode

***

### fileName?

> `optional` **fileName**: `string`

The file name, expressed as text, of this specified binary file.

#### See

https://vocabulary.uncefact.org/fileName

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this specified binary file.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedBinaryObject?

> `optional` **includedBinaryObject**: `string`

A binary object included in this specified binary file.

#### See

https://vocabulary.uncefact.org/includedBinaryObject

***

### mIMECode?

> `optional` **mIMECode**: `string`

The code specifying the Multipurpose Internet Mail Extensions (MIME) type for this specified binary file.

#### See

https://vocabulary.uncefact.org/mIMECode

***

### sizeMeasure?

> `optional` **sizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the size of this specified binary file.

#### See

https://vocabulary.uncefact.org/sizeMeasure

***

### title?

> `optional` **title**: `string`

A title, expressed as text, for this specified binary file.

#### See

https://vocabulary.uncefact.org/title

***

### uRIId?

> `optional` **uRIId**: `string`

The unique Uniform Resource Identifier (URI) for this specified binary file.

#### See

https://vocabulary.uncefact.org/uRIId

***

### validityPeriod?

> `optional` **validityPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

The validity period specified of this binary file.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId?

> `optional` **versionId**: `string`

The unique version identifier for this specified binary file.

#### See

https://vocabulary.uncefact.org/versionId
