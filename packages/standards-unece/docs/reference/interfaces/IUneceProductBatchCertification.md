# Interface: IUneceProductBatchCertification

The process of certifying that a certain product batch has passed performance and quality assurance tests, or
qualification requirements stipulated in regulations.

## See

https://vocabulary.uncefact.org/ProductBatchCertification

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProductBatchCertification"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product batch certification.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### assertion?

> `optional` **assertion**: `string`

An assertion, expressed as text, for this product batch certification, such as a claim that this product is free from
gluten.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode?

> `optional` **assertionCode**: `string`

The code specifying the assertion for this product batch certification, such as a claim that a product is free from
gluten.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### relatedLocation?

> `optional` **relatedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this product batch certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### responsibleAgency?

> `optional` **responsibleAgency**: `string`

An agency, expressed as text, responsible for this product batch certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this product batch certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard?

> `optional` **standard**: `string`

A standard, expressed as text, used for this product batch certification.

#### See

https://vocabulary.uncefact.org/standard
