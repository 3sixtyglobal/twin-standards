# Interface: IUneceContract

An agreement between two or more parties for trade purposes.

## See

https://vocabulary.uncefact.org/Contract

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Contract"`

JSON-LD Type.

***

### automaticExtensionDateTime? {#automaticextensiondatetime}

> `optional` **automaticExtensionDateTime**: `string`

The date, time, date time, or other date time value of automatic extension for this trade contract.

#### See

https://vocabulary.uncefact.org/automaticExtensionDateTime

***

### automaticExtensionDurationMeasure? {#automaticextensiondurationmeasure}

> `optional` **automaticExtensionDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of the duration of the automatic extension for this trade contract.

#### See

https://vocabulary.uncefact.org/automaticExtensionDurationMeasure

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this trade contract.

#### See

https://vocabulary.uncefact.org/description

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this trade contract.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The date, date time, or other date time value for the issuance of this trade contract.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/name

***

### signatureName? {#signaturename}

> `optional` **signatureName**: `string`

A signature name, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/signatureName

***

### signedDateTime? {#signeddatetime}

> `optional` **signedDateTime**: `string`

The date, time, date time or other date time value when this trade contract was signed.

#### See

https://vocabulary.uncefact.org/signedDateTime

***

### signedLocation? {#signedlocation}

> `optional` **signedLocation**: [`IUneceSpecifiedLocation`](IUneceSpecifiedLocation.md)[]

A location where this trade contract was or will be signed.

#### See

https://vocabulary.uncefact.org/signedLocation

***

### signeeJobTitle? {#signeejobtitle}

> `optional` **signeeJobTitle**: `string`

A job title of the signee, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/signeeJobTitle
