# Interface: IPayloadInstance

An individual set of transmitted data in an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/PayloadInstance

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

> **type**: `"PayloadInstance"`

JSON-LD Type.

***

### contentTypeCode?

> `optional` **contentTypeCode**: `string`

The code specifying the content type of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### customizationId?

> `optional` **customizationId**: `string`

The customization identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/customizationId

***

### decryptionKeyReference?

> `optional` **decryptionKeyReference**: [`IXHEReference`](IXHEReference.md)[]

The reference to the decryption key for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/decryptionKeyReference

***

### decryptionReference?

> `optional` **decryptionReference**: [`IXHEReference`](IXHEReference.md)[]

The reference to the decryption for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/decryptionReference

***

### description?

> `optional` **description**: `string`

A textual description of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/description

***

### documentTypeCode?

> `optional` **documentTypeCode**: [`DocumentCodeList`](../type-aliases/DocumentCodeList.md)[]

The code specifying the document type for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### encryptedIndicator?

> `optional` **encryptedIndicator**: `boolean`

The indication of whether or not this XHE payload instance is encrypted.

#### See

https://vocabulary.uncefact.org/encryptedIndicator

***

### encryptionHashValue?

> `optional` **encryptionHashValue**: `string`

The encryption hash value, expressed as text, for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionHashValue

***

### encryptionMethod?

> `optional` **encryptionMethod**: `string`

The encryption method, expressed as text, for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionMethod

***

### encryptionMethodCode?

> `optional` **encryptionMethodCode**: `string`

The code specifying the encryption method for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionMethodCode

***

### handlingServiceId?

> `optional` **handlingServiceId**: `string`

The handling service identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/handlingServiceId

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/identifier

***

### payloadReference?

> `optional` **payloadReference**: [`IXHEReference`](IXHEReference.md)[]

The reference to the payload for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/payloadReference

***

### profileExecutionId?

> `optional` **profileExecutionId**: `string`

The profile execution identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/profileExecutionId

***

### profileId?

> `optional` **profileId**: `string`

The profile identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/profileId

***

### relevantReference?

> `optional` **relevantReference**: [`IXHEReference`](IXHEReference.md)[]

A reference relevant to this XHE payload instance.

#### See

https://vocabulary.uncefact.org/relevantReference

***

### validationTypeCode?

> `optional` **validationTypeCode**: `string`

The code specifying the validation type of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/validationTypeCode

***

### validationVersionId?

> `optional` **validationVersionId**: `string`

The validation version identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/validationVersionId
