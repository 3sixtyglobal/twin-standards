# Interface: IUnecePersonIdentity

Identification of a person.

## See

https://vocabulary.uncefact.org/PersonIdentity

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PersonIdentity"`

JSON-LD Type.

***

### alienRegistrationId? {#alienregistrationid}

> `optional` **alienRegistrationId?**: `string` \| `IJsonLdValueObject`

The alien registration identifier for this person.

#### See

https://vocabulary.uncefact.org/alienRegistrationId

***

### driversLicenceId? {#driverslicenceid}

> `optional` **driversLicenceId?**: `string` \| `IJsonLdValueObject`

The drivers licence identifier for this person.

#### See

https://vocabulary.uncefact.org/driversLicenceId

***

### identityCardId? {#identitycardid}

> `optional` **identityCardId?**: `string` \| `IJsonLdValueObject`

The identity card identifier for this person.

#### See

https://vocabulary.uncefact.org/identityCardId

***

### passportId? {#passportid}

> `optional` **passportId?**: `string` \| `IJsonLdValueObject`

The passport identifier for this person.

#### See

https://vocabulary.uncefact.org/passportId

***

### socialSecurityId? {#socialsecurityid}

> `optional` **socialSecurityId?**: `string` \| `IJsonLdValueObject`

The social security identifier for this person.

#### See

https://vocabulary.uncefact.org/socialSecurityId

***

### specifiedProprietaryIdentity? {#specifiedproprietaryidentity}

> `optional` **specifiedProprietaryIdentity?**: [`IUneceProprietaryIdentity`](IUneceProprietaryIdentity.md)[]

A proprietary Identity specified for this person.

#### See

https://vocabulary.uncefact.org/specifiedProprietaryIdentity
