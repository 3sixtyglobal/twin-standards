# Interface: IUneceGeographicalCoordinate

A set of geographical coordinates of a specific point such as the longitude, latitude and altitude.

## See

https://vocabulary.uncefact.org/GeographicalCoordinate

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeographicalCoordinate"`

JSON-LD Type.

***

### acquisitionDateTime? {#acquisitiondatetime}

> `optional` **acquisitionDateTime?**: `string`

The date, time, date time or other date time value of the acquisition of this geographical coordinate.

#### See

https://vocabulary.uncefact.org/acquisitionDateTime

***

### alternativeSourceSystemId? {#alternativesourcesystemid}

> `optional` **alternativeSourceSystemId?**: `string` \| `IJsonLdValueObject`

An alternative source system identifier for this geographical coordinate.

#### See

https://vocabulary.uncefact.org/alternativeSourceSystemId

***

### altimetricSystemId? {#altimetricsystemid}

> `optional` **altimetricSystemId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the system used for measuring the altitude.

#### See

https://vocabulary.uncefact.org/altimetricSystemId

***

### altitudeMeasure? {#altitudemeasure}

> `optional` **altitudeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the altitude that reflects the vertical elevation of an object above a surface for this geographical
coordinate (Reference ISO 6709).

#### See

https://vocabulary.uncefact.org/altitudeMeasure

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this geographical coordinate.

#### See

https://vocabulary.uncefact.org/identifier

***

### latitudeDirectionIndicator? {#latitudedirectionindicator}

> `optional` **latitudeDirectionIndicator?**: `boolean`

The indication of whether the latitude compass direction from the Equator meridian to the meridian of a specific place
is North (+) or South (-) (Reference ISO 6709).

#### See

https://vocabulary.uncefact.org/latitudeDirectionIndicator

***

### latitudeMeasure? {#latitudemeasure}

> `optional` **latitudeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the latitude as an angular distance north or south from the Equator meridian to the meridian of a
specific place for this geographical coordinate (Reference ISO 6709).

#### See

https://vocabulary.uncefact.org/latitudeMeasure

***

### longitudeDirectionIndicator? {#longitudedirectionindicator}

> `optional` **longitudeDirectionIndicator?**: `boolean`

The indication of whether the longitude as a compass direction from the Greenwich meridian to the meridian of a specific
place is East (+) or West (-) for this geographical coordinate (Reference ISO 6709).

#### See

https://vocabulary.uncefact.org/longitudeDirectionIndicator

***

### longitudeMeasure? {#longitudemeasure}

> `optional` **longitudeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the longitude as an angular distance east or west from the Greenwich meridian to the meridian of a
specific place (Reference ISO 6709).

#### See

https://vocabulary.uncefact.org/longitudeMeasure

***

### systemId? {#systemid}

> `optional` **systemId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the reference system used for measuring a geographical coordinate.

#### See

https://vocabulary.uncefact.org/systemId

***

### timeZone? {#timezone}

> `optional` **timeZone?**: `string`

The time zone, expressed as text, for this geographical coordinate.

#### See

https://vocabulary.uncefact.org/timeZone

***

### timeZoneCode? {#timezonecode}

> `optional` **timeZoneCode?**: `string`

The code specifying the time zone of this geographical coordinate.

#### See

https://vocabulary.uncefact.org/timeZoneCode

***

### timeZoneDateTime? {#timezonedatetime}

> `optional` **timeZoneDateTime?**: `string`

The date, time, date time, or other date time value for the time zone of this geographical coordinate.

#### See

https://vocabulary.uncefact.org/timeZoneDateTime

***

### usedCoordinateReferenceSystem? {#usedcoordinatereferencesystem}

> `optional` **usedCoordinateReferenceSystem?**: [`IUneceCoordinateReferenceSystem`](IUneceCoordinateReferenceSystem.md)

The CS (Coordinate System) engineering coordinate reference system used for this geographical coordinate.

#### See

https://vocabulary.uncefact.org/usedCoordinateReferenceSystem

***

### usedCoordinateSourceSystem? {#usedcoordinatesourcesystem}

> `optional` **usedCoordinateSourceSystem?**: [`IUneceCoordinateSourceSystem`](IUneceCoordinateSourceSystem.md)

The geographical coordinate source system used for this geographical coordinate.

#### See

https://vocabulary.uncefact.org/usedCoordinateSourceSystem
