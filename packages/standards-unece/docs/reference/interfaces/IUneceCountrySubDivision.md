# Interface: IUneceCountrySubDivision

A political or physical area or region within the political boundaries of a country used or referenced for trade
purposes.

## See

https://vocabulary.uncefact.org/CountrySubDivision

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CountrySubDivision"`

JSON-LD Type.

***

### activityAuthorizedParty? {#activityauthorizedparty}

> `optional` **activityAuthorizedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party that is authorized to perform an activity in this trade country sub-division.

#### See

https://vocabulary.uncefact.org/activityAuthorizedParty

***

### hierarchicalLevelCode? {#hierarchicallevelcode}

> `optional` **hierarchicalLevelCode?**: `string`

The code specifying the hierarchical level of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/hierarchicalLevelCode

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade country sub-division.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode?**: `string`

The code specifying the function type of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/name

***

### subordinateCountrySubDivision? {#subordinatecountrysubdivision}

> `optional` **subordinateCountrySubDivision?**: `IUneceCountrySubDivision`[]

A subordinate country sub-division within this trade country sub-division.

#### See

https://vocabulary.uncefact.org/subordinateCountrySubDivision

***

### superordinateCountrySubDivision? {#superordinatecountrysubdivision}

> `optional` **superordinateCountrySubDivision?**: `IUneceCountrySubDivision`[]

A superordinate country sub-division for this trade country sub-division.

#### See

https://vocabulary.uncefact.org/superordinateCountrySubDivision

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of country sub-division for trade purposes.

#### See

https://vocabulary.uncefact.org/typeCode
