# Interface: IUnecePayloadInstance

An individual set of transmitted data in an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/PayloadInstance

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PayloadInstance"`

JSON-LD Type.

***

### contentTypeCode? {#contenttypecode}

> `optional` **contentTypeCode**: `string`

The code specifying the content type of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### customizationId? {#customizationid}

> `optional` **customizationId**: `string` \| `IJsonLdValueObject`

The customization identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/customizationId

***

### decryptionKeyReference? {#decryptionkeyreference}

> `optional` **decryptionKeyReference**: [`IUneceXHEReference`](IUneceXHEReference.md)

The reference to the decryption key for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/decryptionKeyReference

***

### decryptionReference? {#decryptionreference}

> `optional` **decryptionReference**: [`IUneceXHEReference`](IUneceXHEReference.md)

The reference to the decryption for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/decryptionReference

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/description

***

### documentTypeCode? {#documenttypecode}

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)

The code specifying the document type for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### encryptedIndicator {#encryptedindicator}

> **encryptedIndicator**: `boolean`

The indication of whether or not this XHE payload instance is encrypted.

#### See

https://vocabulary.uncefact.org/encryptedIndicator

***

### encryptionHashValue? {#encryptionhashvalue}

> `optional` **encryptionHashValue**: `string`

The encryption hash value, expressed as text, for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionHashValue

***

### encryptionMethod? {#encryptionmethod}

> `optional` **encryptionMethod**: `string`

The encryption method, expressed as text, for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionMethod

***

### encryptionMethodCode? {#encryptionmethodcode}

> `optional` **encryptionMethodCode**: `string`

The code specifying the encryption method for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/encryptionMethodCode

***

### handlingServiceId? {#handlingserviceid}

> `optional` **handlingServiceId**: `string` \| `IJsonLdValueObject`

The handling service identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/handlingServiceId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/identifier

***

### payloadReference? {#payloadreference}

> `optional` **payloadReference**: [`IUneceXHEReference`](IUneceXHEReference.md)

The reference to the payload for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/payloadReference

***

### profileExecutionId? {#profileexecutionid}

> `optional` **profileExecutionId**: `string` \| `IJsonLdValueObject`

The profile execution identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/profileExecutionId

***

### profileId? {#profileid}

> `optional` **profileId**: `string` \| `IJsonLdValueObject`

The profile identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/profileId

***

### relevantReference? {#relevantreference}

> `optional` **relevantReference**: [`IUneceXHEReference`](IUneceXHEReference.md)[]

A reference relevant to this XHE payload instance.

#### See

https://vocabulary.uncefact.org/relevantReference

***

### validationTypeCode? {#validationtypecode}

> `optional` **validationTypeCode**: `string`

The code specifying the validation type of this XHE payload instance.

#### See

https://vocabulary.uncefact.org/validationTypeCode

***

### validationVersionId? {#validationversionid}

> `optional` **validationVersionId**: `string` \| `IJsonLdValueObject`

The validation version identifier for this XHE payload instance.

#### See

https://vocabulary.uncefact.org/validationVersionId
