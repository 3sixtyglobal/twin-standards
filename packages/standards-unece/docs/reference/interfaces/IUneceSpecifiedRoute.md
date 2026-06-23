# Interface: IUneceSpecifiedRoute

A specified way or course taken from one location to another.

## See

https://vocabulary.uncefact.org/SpecifiedRoute

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedRoute"`

JSON-LD Type.

***

### departurePoint? {#departurepoint}

> `optional` **departurePoint?**: `string`

A departure point, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/departurePoint

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified route.

#### See

https://vocabulary.uncefact.org/description

***

### linearUnitDistanceMeasure? {#linearunitdistancemeasure}

> `optional` **linearUnitDistanceMeasure?**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the distance of this specified route.

#### See

https://vocabulary.uncefact.org/linearUnitDistanceMeasure

***

### mapURIId? {#mapuriid}

> `optional` **mapURIId?**: `string` \| `IJsonLdValueObject`

The Uniform Resource Identifier (URI) of the map of this specified route.

#### See

https://vocabulary.uncefact.org/mapURIId

***

### routeType? {#routetype}

> `optional` **routeType?**: `string`

A type, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/routeType

***

### securityLevelCode? {#securitylevelcode}

> `optional` **securityLevelCode?**: `string`

The code specifying the security level of this specified route.

#### See

https://vocabulary.uncefact.org/securityLevelCode

***

### statusCode? {#statuscode}

> `optional` **statusCode?**: `string`

The code specifying the status of this specified route.

#### See

https://vocabulary.uncefact.org/statusCode

***

### transportMeans? {#transportmeans}

> `optional` **transportMeans?**: `string`

A transport means, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/transportMeans
