# Interface: IUneceAssertion

A statement that user needs of the present are met without compromising the needs of future generations.

## See

https://vocabulary.uncefact.org/Assertion

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Assertion"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this sustainability assertion.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### description?

> `optional` **description**: `string`

A textual description of this sustainability assertion.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode?

> `optional` **descriptionCode**: `string`

The code specifying the description for this sustainability assertion.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this sustainability assertion.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedCharacteristic?

> `optional` **includedCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic included in this sustainability assertion.

#### See

https://vocabulary.uncefact.org/includedCharacteristic

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string` \| `IJsonLdValueObject`

An identifier of a party issuing this sustainability assertion.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### relatedPolicy?

> `optional` **relatedPolicy**: [`IUnecePolicy`](IUnecePolicy.md)[]

A compliance policy related to this sustainability assertion.

#### See

https://vocabulary.uncefact.org/relatedPolicy

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this sustainability assertion.

#### See

https://vocabulary.uncefact.org/statusCode
