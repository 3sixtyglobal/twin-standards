# Interface: IUneceOrganizationalCertification

The process of certifying organizational performance or qualification requirements as stipulated in regulations.

## See

https://vocabulary.uncefact.org/OrganizationalCertification

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"OrganizationalCertification"`

JSON-LD Type.

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this organizational certification.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### assertion? {#assertion}

> `optional` **assertion?**: `string`

An assertion, expressed as text, for this organizational certification.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode? {#assertioncode}

> `optional` **assertionCode?**: `string`

The code specifying the assertion, such as a claim that an organization does not practise child labour, of this
organizational certification.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### relatedLocation? {#relatedlocation}

> `optional` **relatedLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this organizational certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### responsibleAgency? {#responsibleagency}

> `optional` **responsibleAgency?**: `string`

An agency, expressed as text, responsible for this organizational certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this organizational certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard? {#standard}

> `optional` **standard?**: `string`

A standard, expressed as text, used for this organizational certification.

#### See

https://vocabulary.uncefact.org/standard
