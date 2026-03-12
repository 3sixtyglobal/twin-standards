# Interface: IUneceBirthAddress

The place of birth.

## See

https://vocabulary.uncefact.org/BirthAddress

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"BirthAddress"`

JSON-LD Type.

***

### birthAddressCountryId? {#birthaddresscountryid}

> `optional` **birthAddressCountryId**: `string` \| `IJsonLdValueObject`

The identifier of a country for this birth address.

#### See

https://vocabulary.uncefact.org/birthAddressCountryId

***

### cityName? {#cityname}

> `optional` **cityName**: `string`

The name, expressed as text, of the city, town or village of this birth address.

#### See

https://vocabulary.uncefact.org/cityName

***

### countrySubDivisionName? {#countrysubdivisionname}

> `optional` **countrySubDivisionName**: `string`

The name, expressed as text, of the sub-division of a country for this birth address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName
