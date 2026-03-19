# Interface: IUneceSpecifiedCertification

The process of certifying that a certain product, process or organization has passed performance tests, or qualification
requirements stipulated in a standard or regulation.

## See

https://vocabulary.uncefact.org/SpecifiedCertification

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedCertification"`

JSON-LD Type.

***

### assertion? {#assertion}

> `optional` **assertion?**: `string`

An assertion, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode? {#assertioncode}

> `optional` **assertionCode?**: `string`

A code specifying an assertion for this specified certification, such as a claim that a product is free of hazardous
chemicals.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### auditDateTime? {#auditdatetime}

> `optional` **auditDateTime?**: `string`

An audit date, time, date time or other date time value for this specified certification.

#### See

https://vocabulary.uncefact.org/auditDateTime

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime?**: `string`

The end date value for this specified certification.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this specified certification.

#### See

https://vocabulary.uncefact.org/identifier

***

### relatedLocation? {#relatedlocation}

> `optional` **relatedLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this specified certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### relatedStandard? {#relatedstandard}

> `optional` **relatedStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard related to this specified certification.

#### See

https://vocabulary.uncefact.org/relatedStandard

***

### responsibleAgency? {#responsibleagency}

> `optional` **responsibleAgency?**: `string`

A responsible agency, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion for this specified certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard? {#standard}

> `optional` **standard?**: `string`

A standard, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/standard

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime?**: `string`

The start date value for this specified certification.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### uRIId? {#uriid}

> `optional` **uRIId?**: `string` \| `IJsonLdValueObject`

A Uniform Resource Identifier (URI) for this specified certification.

#### See

https://vocabulary.uncefact.org/uRIId
