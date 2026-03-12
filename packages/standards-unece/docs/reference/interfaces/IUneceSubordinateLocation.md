# Interface: IUneceSubordinateLocation

A physical location or place which is a subordinate location of a location.

## See

https://vocabulary.uncefact.org/SubordinateLocation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SubordinateLocation"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this subordinate location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)

The code specifying the type of subordinate location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this subordinate location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate? {#physicalgeographicalcoordinate}

> `optional` **physicalGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

Physical geographical coordinate information for this subordinate location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate

***

### subordinateSubordinateSubordinateLocation? {#subordinatesubordinatesubordinatelocation}

> `optional` **subordinateSubordinateSubordinateLocation**: [`IUneceSubordinateSubordinateLocation`](IUneceSubordinateSubordinateLocation.md)

The location subordinate to this subordinate location.

#### See

https://vocabulary.uncefact.org/subordinateSubordinateSubordinateLocation
