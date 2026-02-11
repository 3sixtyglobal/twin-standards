# Interface: IUneceProductBatchCertificate

A piece of written, printed or electronic matter that provides information or evidence that a product batch has met
required criteria.

## See

https://vocabulary.uncefact.org/ProductBatchCertificate

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

> **type**: `"ProductBatchCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime?

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this product batch certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion?

> `optional` **applicableAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion applicable to this product batch certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode?

> `optional` **applicableObjectCode**: `string`

A code specifying an object for which this product batch certificate is applicable.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableProductCharacteristic?

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this product batch certificate.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product batch certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this product batch certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableTradeProductCertification?

> `optional` **applicableTradeProductCertification**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)

The trade product certification applicable to this product batch certificate.

#### See

https://vocabulary.uncefact.org/applicableTradeProductCertification

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this product batch certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of product batch certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this product batch certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value when this product batch certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this product batch certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value when this product batch certificate was issued.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode?

> `optional` **issueReasonCode**: `string`

The code specifying the reason why this product batch certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string`

The identifier of the party issuing this product batch certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode?

> `optional` **purposeCode**: `string`

A code specifying a purpose of this product batch certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime?

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this product batch certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
