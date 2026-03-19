# Interface: IUneceAnimalCertification

The process of certifying that a certain animal has met performance and quality assurance requirements, or qualification
requirements as stipulated in regulations.

## See

https://vocabulary.uncefact.org/AnimalCertification

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AnimalCertification"`

JSON-LD Type.

***

### assertion? {#assertion}

> `optional` **assertion?**: `string`

An assertion, expressed as text, for this animal certification.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode? {#assertioncode}

> `optional` **assertionCode?**: `string`

The code specifying the assertion, such as a claim that the process is free from child labour, for this animal
certification.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### relatedLocation? {#relatedlocation}

> `optional` **relatedLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this animal certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### responsibleAgency? {#responsibleagency}

> `optional` **responsibleAgency?**: `string`

An agency, expressed as text, responsible for this animal certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this animal certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard? {#standard}

> `optional` **standard?**: `string`

A standard, expressed as text, used for this animal certification.

#### See

https://vocabulary.uncefact.org/standard
