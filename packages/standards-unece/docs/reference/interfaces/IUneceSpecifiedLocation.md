# Interface: IUneceSpecifiedLocation

A specified physical location or place.

## See

https://vocabulary.uncefact.org/SpecifiedLocation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedLocation"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

A textual description for this specified location.

#### See

https://vocabulary.uncefact.org/description

***

### directions? {#directions}

> `optional` **directions**: `string`

Directions, expressed as text, for this specified location.

#### See

https://vocabulary.uncefact.org/directions

***

### geopoliticalRegionCode? {#geopoliticalregioncode}

> `optional` **geopoliticalRegionCode**: `string`

The code specifying the geopolitical region for this specified location.

#### See

https://vocabulary.uncefact.org/geopoliticalRegionCode

***

### geopoliticalRegionName? {#geopoliticalregionname}

> `optional` **geopoliticalRegionName**: `string`

The name, expressed as text, of the geopolitical region for this specified location.

#### See

https://vocabulary.uncefact.org/geopoliticalRegionName

***

### mapURIId? {#mapuriid}

> `optional` **mapURIId**: `string` \| `IJsonLdValueObject`

The identifier of a URI (Uniform Resource Identifier) for a map of this specified location.

#### See

https://vocabulary.uncefact.org/mapURIId

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this specified location.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedLocationTypeCode? {#specifiedlocationtypecode}

> `optional` **specifiedLocationTypeCode**: `string`

The code specifying the type of this specified location.

#### See

https://vocabulary.uncefact.org/specifiedLocationTypeCode

***

### specifiedTradeAddress? {#specifiedtradeaddress}

> `optional` **specifiedTradeAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A address specified for this location.

#### See

https://vocabulary.uncefact.org/specifiedTradeAddress
