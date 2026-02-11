# Interface: IUneceTransportRoute

A way or course taken from one location to another for the purpose of transporting cargo and or passengers.

## See

https://vocabulary.uncefact.org/TransportRoute

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"TransportRoute"`

JSON-LD Type.

***

### departurePoint?

> `optional` **departurePoint**: `string`

A departure point, expressed as text, for this transport route.

#### See

https://vocabulary.uncefact.org/departurePoint

***

### description?

> `optional` **description**: `string`

The textual description of this transport route.

#### See

https://vocabulary.uncefact.org/description

***

### frequencyEffectivePeriod?

> `optional` **frequencyEffectivePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period of time for which a frequency is effective for this transport route.

#### See

https://vocabulary.uncefact.org/frequencyEffectivePeriod

***

### frequencyTypeCode?

> `optional` **frequencyTypeCode**: `string`

The code specifying the type of frequency for this transport route, such as weekly, bi-monthly or daily.

#### See

https://vocabulary.uncefact.org/frequencyTypeCode

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this transport route.

#### See

https://vocabulary.uncefact.org/identifier

***

### itineraryStopEvent?

> `optional` **itineraryStopEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An itinerary stop event for this transport route, such as a port call in a vessel schedule.

#### See

https://vocabulary.uncefact.org/itineraryStopEvent

***

### mapBinaryObject?

> `optional` **mapBinaryObject**: `string`

Binary object data that is the map of this transport route.

#### See

https://vocabulary.uncefact.org/mapBinaryObject

***

### routeType?

> `optional` **routeType**: `string`

A type, expressed as text, for this transport route.

#### See

https://vocabulary.uncefact.org/routeType

***

### scheduledPeriod?

> `optional` **scheduledPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period during which this transport route is scheduled.

#### See

https://vocabulary.uncefact.org/scheduledPeriod

***

### securityLevelCode?

> `optional` **securityLevelCode**: `string`

A code specifying a security level for this transport route.

#### See

https://vocabulary.uncefact.org/securityLevelCode

***

### specifiedTransportMovement?

> `optional` **specifiedTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)

The logistics transport movement specified for this transport route.

#### See

https://vocabulary.uncefact.org/specifiedTransportMovement

***

### transportMeans?

> `optional` **transportMeans**: `string`

A means of transport, expressed as text, for this transport route.

#### See

https://vocabulary.uncefact.org/transportMeans

***

### transportRouteStatusCode?

> `optional` **transportRouteStatusCode**: [`UneceStatusCodeList`](../type-aliases/UneceStatusCodeList.md)

The code specifying a status for a transport route, such as planned or actual.

#### See

https://vocabulary.uncefact.org/transportRouteStatusCode
