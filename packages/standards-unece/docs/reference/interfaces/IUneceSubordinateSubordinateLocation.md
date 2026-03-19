# Interface: IUneceSubordinateSubordinateLocation

A physical location or place which is a subordinate location of a subordinate location.

## See

https://vocabulary.uncefact.org/SubordinateSubordinateLocation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SubordinateSubordinateLocation"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this subordinate of a subordinate location, such as a United Nations Location Code (UNLOCODE)
or GS1 Global Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode?**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)

The code specifying the type of subordinate of a subordinate location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this subordinate of a subordinate location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate? {#physicalgeographicalcoordinate}

> `optional` **physicalGeographicalCoordinate?**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

Physical geographical coordinate information for this subordinate of a subordinate location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate
