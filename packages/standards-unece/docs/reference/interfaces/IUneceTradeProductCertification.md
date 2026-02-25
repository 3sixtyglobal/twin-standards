# Interface: IUneceTradeProductCertification

The process of certifying that a certain product has passed performance and quality assurance tests, or qualification
requirements stipulated in regulations.

## See

https://vocabulary.uncefact.org/TradeProductCertification

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"TradeProductCertification"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this trade product certification.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### assertion?

> `optional` **assertion**: `string`

An assertion, expressed as text, for this trade product certification, such as that this product is free from peanuts.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode?

> `optional` **assertionCode**: `string`

A code specifying an assertion for this trade product certification, such as claims that a product is free from peanuts.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### relatedLocation?

> `optional` **relatedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this trade product certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### responsibleAgency?

> `optional` **responsibleAgency**: `string`

The agency, expressed as text, responsible for this trade product certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this trade product certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard?

> `optional` **standard**: `string`

The standard, expressed as text, for this trade product certification.

#### See

https://vocabulary.uncefact.org/standard
