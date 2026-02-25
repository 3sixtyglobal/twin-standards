# Interface: IUnecePersonIdentity

Identification of a person.

## See

https://vocabulary.uncefact.org/PersonIdentity

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"PersonIdentity"`

JSON-LD Type.

***

### alienRegistrationId?

> `optional` **alienRegistrationId**: `string`

The alien registration identifier for this person.

#### See

https://vocabulary.uncefact.org/alienRegistrationId

***

### driversLicenceId?

> `optional` **driversLicenceId**: `string`

The drivers licence identifier for this person.

#### See

https://vocabulary.uncefact.org/driversLicenceId

***

### identityCardId?

> `optional` **identityCardId**: `string`

The identity card identifier for this person.

#### See

https://vocabulary.uncefact.org/identityCardId

***

### passportId?

> `optional` **passportId**: `string`

The passport identifier for this person.

#### See

https://vocabulary.uncefact.org/passportId

***

### socialSecurityId?

> `optional` **socialSecurityId**: `string`

The social security identifier for this person.

#### See

https://vocabulary.uncefact.org/socialSecurityId

***

### specifiedProprietaryIdentity?

> `optional` **specifiedProprietaryIdentity**: [`IUneceProprietaryIdentity`](IUneceProprietaryIdentity.md)[]

A proprietary Identity specified for this person.

#### See

https://vocabulary.uncefact.org/specifiedProprietaryIdentity
