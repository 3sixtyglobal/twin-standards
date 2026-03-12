# Interface: IUneceCountry

The area of land that belongs to a nation together with its properties, such as population, political organization,
etc., used or referenced for trade purposes.

## See

https://vocabulary.uncefact.org/Country

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Country"`

JSON-LD Type.

***

### countryId? {#countryid}

> `optional` **countryId**: `string` \| `IJsonLdValueObject`

A unique identifier for this trade country.

#### See

https://vocabulary.uncefact.org/countryId

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this trade country.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedQuantity? {#specifiedquantity}

> `optional` **specifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity specified for this trade country.

#### See

https://vocabulary.uncefact.org/specifiedQuantity

***

### subordinateCountrySubDivision? {#subordinatecountrysubdivision}

> `optional` **subordinateCountrySubDivision**: [`IUneceCountrySubDivision`](IUneceCountrySubDivision.md)[]

A trade country sub-division that is subordinate to this trade country, such as a state, a county, a canton, a province.

#### See

https://vocabulary.uncefact.org/subordinateCountrySubDivision
