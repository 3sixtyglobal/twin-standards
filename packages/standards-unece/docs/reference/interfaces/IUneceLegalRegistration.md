# Interface: IUneceLegalRegistration

The recording of items or details for a specific legal purpose.

## See

https://vocabulary.uncefact.org/LegalRegistration

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LegalRegistration"`

JSON-LD Type.

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

A code specifying the category of this legal registration.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### countryId? {#countryid}

> `optional` **countryId**: `string` \| `IJsonLdValueObject`

An identifier of the country in which this legal registration is valid.

#### See

https://vocabulary.uncefact.org/countryId

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId**: `string` \| `IJsonLdValueObject`

A unique identifier of the country sub-division for this legal registration.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this legal registration.

#### See

https://vocabulary.uncefact.org/identifier

***

### lastRegisteredYearDateTime? {#lastregisteredyeardatetime}

> `optional` **lastRegisteredYearDateTime**: `string`

The last year in which this legal registration was registered.

#### See

https://vocabulary.uncefact.org/lastRegisteredYearDateTime

***

### licenceId? {#licenceid}

> `optional` **licenceId**: `string` \| `IJsonLdValueObject`

The unique identifier of a licence for this legal registration.

#### See

https://vocabulary.uncefact.org/licenceId

***

### recordedDate? {#recordeddate}

> `optional` **recordedDate**: `string`

A date when this legal registration was recorded.

#### See

https://vocabulary.uncefact.org/recordedDate

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying the type of this legal registration.

#### See

https://vocabulary.uncefact.org/typeCode
