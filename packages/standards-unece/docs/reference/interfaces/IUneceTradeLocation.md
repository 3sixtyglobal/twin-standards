# Interface: IUneceTradeLocation

A physical location or place used or referenced for trade purposes.

## See

https://vocabulary.uncefact.org/TradeLocation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeLocation"`

JSON-LD Type.

***

### countryName? {#countryname}

> `optional` **countryName?**: `string`

The name, expressed as text, of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the country sub-division for this trade location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName? {#countrysubdivisionname}

> `optional` **countrySubDivisionName?**: `string`

The name, expressed as text, of a sub-division of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode?**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of trade location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/name

***

### tradeLocationCountryId? {#tradelocationcountryid}

> `optional` **tradeLocationCountryId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/tradeLocationCountryId
