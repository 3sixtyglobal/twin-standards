# Interface: IUneceTransportServiceLocation

A location where a transport service takes place.

## See

https://vocabulary.uncefact.org/TransportServiceLocation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportServiceLocation"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this transport service location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of transport service location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this transport service location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate? {#physicalgeographicalcoordinate}

> `optional` **physicalGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)[]

Geographical coordinate information for this physical transport service location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate
