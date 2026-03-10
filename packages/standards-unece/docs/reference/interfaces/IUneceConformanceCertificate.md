# Interface: IUneceConformanceCertificate

The label delivered by a trusted third party to assess the compliance of a product or a service with an agreed standard.

## See

https://vocabulary.uncefact.org/ConformanceCertificate

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ConformanceCertificate"`

JSON-LD Type.

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of conformance certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this conformance certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value when this conformance certificate was issued.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string` \| `IJsonLdValueObject`

An identifier of the issuing party of this conformance certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### softwareOperatingSystem?

> `optional` **softwareOperatingSystem**: `string`

The software operating system, expressed as text, for which this conformance certificate is produced.

#### See

https://vocabulary.uncefact.org/softwareOperatingSystem
