# Interface: IPicture

A photograph or video still represented as a digital image for electronic sharing.

## See

https://vocabulary.uncefact.org/Picture

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

> **type**: `"Picture"`

JSON-LD Type.

***

### additionalDescription?

> `optional` **additionalDescription**: `string`

An additional textual description of this photographic picture.

#### See

https://vocabulary.uncefact.org/additionalDescription

***

### areaIncluded?

> `optional` **areaIncluded**: `string`

The area or location, expressed as text, that is included in this photographic picture.

#### See

https://vocabulary.uncefact.org/areaIncluded

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A binary file attached to this photographic picture.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### copyrightOwnerName?

> `optional` **copyrightOwnerName**: `string`

The name of the copyright owner, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/copyrightOwnerName

***

### description?

> `optional` **description**: `string`

The textual description of this photographic picture.

#### See

https://vocabulary.uncefact.org/description

***

### digitalImageBinaryObject?

> `optional` **digitalImageBinaryObject**: `string`

Binary object data that is the actual digital image for this photographic picture.

#### See

https://vocabulary.uncefact.org/digitalImageBinaryObject

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this photographic picture.

#### See

https://vocabulary.uncefact.org/identifier

***

### intendedUse?

> `optional` **intendedUse**: `string`

An intended use, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/intendedUse

***

### intendedUseCode?

> `optional` **intendedUseCode**: `string`

The code specifying the intended use of this photographic picture.

#### See

https://vocabulary.uncefact.org/intendedUseCode

***

### linearDimension?

> `optional` **linearDimension**: [`ISpatialDimension`](ISpatialDimension.md)[]

Linear spatial dimensions of this photographic picture.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### pictureType?

> `optional` **pictureType**: `string`

The type, expressed as text, of this photographic picture.

#### See

https://vocabulary.uncefact.org/pictureType

***

### reference?

> `optional` **reference**: `string`

A reference, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/reference

***

### renderingInformation?

> `optional` **renderingInformation**: `string`

Rendering information, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/renderingInformation

***

### resolutionTypeCode?

> `optional` **resolutionTypeCode**: `string`

The code specifying the type of resolution for this photographic picture.

#### See

https://vocabulary.uncefact.org/resolutionTypeCode

***

### resolutionValueNumeric?

> `optional` **resolutionValueNumeric**: `string`

The value, expressed as a number, for the resolution of this photographic picture.

#### See

https://vocabulary.uncefact.org/resolutionValueNumeric

***

### specifiedNote?

> `optional` **specifiedNote**: [`INote`](INote.md)[]

A note specified for this photographic picture.

#### See

https://vocabulary.uncefact.org/specifiedNote

***

### subject?

> `optional` **subject**: `string`

The subject, expressed as text, of this photographic picture.

#### See

https://vocabulary.uncefact.org/subject

***

### takenDateTime?

> `optional` **takenDateTime**: `string`

The date, time, date time, or other date value of when this photographic picture was created.

#### See

https://vocabulary.uncefact.org/takenDateTime

***

### titleName?

> `optional` **titleName**: `string`

The name, expressed as text, of the title for this photographic picture.

#### See

https://vocabulary.uncefact.org/titleName

***

### uRIId?

> `optional` **uRIId**: `string`

The URI (Uniform Resource Identifier) for this photographic picture.

#### See

https://vocabulary.uncefact.org/uRIId
