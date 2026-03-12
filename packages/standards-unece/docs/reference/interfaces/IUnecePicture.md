# Interface: IUnecePicture

A photograph or video still represented as a digital image for electronic sharing.

## See

https://vocabulary.uncefact.org/Picture

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Picture"`

JSON-LD Type.

***

### additionalDescription? {#additionaldescription}

> `optional` **additionalDescription**: `string`

An additional textual description of this photographic picture.

#### See

https://vocabulary.uncefact.org/additionalDescription

***

### areaIncluded? {#areaincluded}

> `optional` **areaIncluded**: `string`

The area or location, expressed as text, that is included in this photographic picture.

#### See

https://vocabulary.uncefact.org/areaIncluded

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this photographic picture.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### copyrightOwnerName? {#copyrightownername}

> `optional` **copyrightOwnerName**: `string`

The name of the copyright owner, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/copyrightOwnerName

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this photographic picture.

#### See

https://vocabulary.uncefact.org/description

***

### digitalImageBinaryObject? {#digitalimagebinaryobject}

> `optional` **digitalImageBinaryObject**: `string`

Binary object data that is the actual digital image for this photographic picture.

#### See

https://vocabulary.uncefact.org/digitalImageBinaryObject

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this photographic picture.

#### See

https://vocabulary.uncefact.org/identifier

***

### intendedUse? {#intendeduse}

> `optional` **intendedUse**: `string`

An intended use, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/intendedUse

***

### intendedUseCode? {#intendedusecode}

> `optional` **intendedUseCode**: `string`

The code specifying the intended use of this photographic picture.

#### See

https://vocabulary.uncefact.org/intendedUseCode

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

Linear spatial dimensions of this photographic picture.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### pictureType? {#picturetype}

> `optional` **pictureType**: `string`

The type, expressed as text, of this photographic picture.

#### See

https://vocabulary.uncefact.org/pictureType

***

### reference? {#reference}

> `optional` **reference**: `string`

A reference, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/reference

***

### renderingInformation? {#renderinginformation}

> `optional` **renderingInformation**: `string`

Rendering information, expressed as text, for this photographic picture.

#### See

https://vocabulary.uncefact.org/renderingInformation

***

### resolutionTypeCode? {#resolutiontypecode}

> `optional` **resolutionTypeCode**: `string`

The code specifying the type of resolution for this photographic picture.

#### See

https://vocabulary.uncefact.org/resolutionTypeCode

***

### resolutionValueNumeric? {#resolutionvaluenumeric}

> `optional` **resolutionValueNumeric**: `string`

The value, expressed as a number, for the resolution of this photographic picture.

#### See

https://vocabulary.uncefact.org/resolutionValueNumeric

***

### specifiedNote? {#specifiednote}

> `optional` **specifiedNote**: [`IUneceNote`](IUneceNote.md)[]

A note specified for this photographic picture.

#### See

https://vocabulary.uncefact.org/specifiedNote

***

### subject? {#subject}

> `optional` **subject**: `string`

The subject, expressed as text, of this photographic picture.

#### See

https://vocabulary.uncefact.org/subject

***

### takenDateTime? {#takendatetime}

> `optional` **takenDateTime**: `string`

The date, time, date time, or other date value of when this photographic picture was created.

#### See

https://vocabulary.uncefact.org/takenDateTime

***

### titleName? {#titlename}

> `optional` **titleName**: `string`

The name, expressed as text, of the title for this photographic picture.

#### See

https://vocabulary.uncefact.org/titleName

***

### uRIId? {#uriid}

> `optional` **uRIId**: `string` \| `IJsonLdValueObject`

The URI (Uniform Resource Identifier) for this photographic picture.

#### See

https://vocabulary.uncefact.org/uRIId
