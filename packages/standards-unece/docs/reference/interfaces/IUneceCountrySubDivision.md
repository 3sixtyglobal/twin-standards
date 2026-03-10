# Interface: IUneceCountrySubDivision

A political or physical area or region within the political boundaries of a country used or referenced for trade
purposes.

## See

https://vocabulary.uncefact.org/CountrySubDivision

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"CountrySubDivision"`

JSON-LD Type.

***

### activityAuthorizedParty?

> `optional` **activityAuthorizedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party that is authorized to perform an activity in this trade country sub-division.

#### See

https://vocabulary.uncefact.org/activityAuthorizedParty

***

### hierarchicalLevelCode?

> `optional` **hierarchicalLevelCode**: `string`

The code specifying the hierarchical level of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/hierarchicalLevelCode

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade country sub-division.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)

The code specifying the function type of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this trade country sub-division.

#### See

https://vocabulary.uncefact.org/name

***

### subordinateCountrySubDivision?

> `optional` **subordinateCountrySubDivision**: `IUneceCountrySubDivision`[]

A subordinate country sub-division within this trade country sub-division.

#### See

https://vocabulary.uncefact.org/subordinateCountrySubDivision

***

### superordinateCountrySubDivision?

> `optional` **superordinateCountrySubDivision**: `IUneceCountrySubDivision`[]

A superordinate country sub-division for this trade country sub-division.

#### See

https://vocabulary.uncefact.org/superordinateCountrySubDivision

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of country sub-division for trade purposes.

#### See

https://vocabulary.uncefact.org/typeCode
