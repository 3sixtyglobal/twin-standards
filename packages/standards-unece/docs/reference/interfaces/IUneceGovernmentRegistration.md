# Interface: IUneceGovernmentRegistration

The recording of items or details for a governmental purpose.

## See

https://vocabulary.uncefact.org/GovernmentRegistration

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GovernmentRegistration"`

JSON-LD Type.

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

A code specifying a category of this government registration.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### countryId? {#countryid}

> `optional` **countryId?**: `string` \| `object` & `object` \| `object` & `object` \| `object` & `object`

The identifier of the country for this government registration.

#### See

https://vocabulary.uncefact.org/countryId

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId?**: `string` \| `IJsonLdValueObject`

The identifier of the country sub-division for this registration.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this government registration.

#### See

https://vocabulary.uncefact.org/identifier

***

### lastRegisteredYearDateTime? {#lastregisteredyeardatetime}

> `optional` **lastRegisteredYearDateTime?**: `string`

The last registered year of this government registration.

#### See

https://vocabulary.uncefact.org/lastRegisteredYearDateTime

***

### licenceId? {#licenceid}

> `optional` **licenceId?**: `string` \| `IJsonLdValueObject`

The identifier of a licence for this government registration.

#### See

https://vocabulary.uncefact.org/licenceId

***

### recordedDate? {#recordeddate}

> `optional` **recordedDate?**: `string`

The date that this government registration was recorded.

#### See

https://vocabulary.uncefact.org/recordedDate

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of government registration.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The period of time during which this government registration is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId? {#versionid}

> `optional` **versionId?**: `string` \| `IJsonLdValueObject`

The identifier of the version of this government registration.

#### See

https://vocabulary.uncefact.org/versionId
