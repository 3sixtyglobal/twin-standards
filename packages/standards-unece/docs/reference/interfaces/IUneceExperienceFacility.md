# Interface: IUneceExperienceFacility

A structure or place, such as a restaurant, hotel, theme park, hot spring bathing pool, parking lot, or meeting room,
that provides a particular experience.

## See

https://vocabulary.uncefact.org/ExperienceFacility

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExperienceFacility"`

JSON-LD Type.

***

### architecturalStyle? {#architecturalstyle}

> `optional` **architecturalStyle**: `string`

An architectural style, expressed as text, of this experience facility.

#### See

https://vocabulary.uncefact.org/architecturalStyle

***

### availableRoute? {#availableroute}

> `optional` **availableRoute**: [`IUneceSpecifiedRoute`](IUneceSpecifiedRoute.md)[]

An available route specified for this experience facility.

#### See

https://vocabulary.uncefact.org/availableRoute

***

### completionDateTime? {#completiondatetime}

> `optional` **completionDateTime**: `string`

The date of the completion of this experience facility.

#### See

https://vocabulary.uncefact.org/completionDateTime

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this experience facility.

#### See

https://vocabulary.uncefact.org/description

***

### experienceFacilityTypeCode? {#experiencefacilitytypecode}

> `optional` **experienceFacilityTypeCode**: `string`

The code specifying the type of experience facility.

#### See

https://vocabulary.uncefact.org/experienceFacilityTypeCode

***

### facilityType? {#facilitytype}

> `optional` **facilityType**: `string`

A type, expressed as text, of this experience facility.

#### See

https://vocabulary.uncefact.org/facilityType

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this experience facility.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestRenovationDateTime? {#latestrenovationdatetime}

> `optional` **latestRenovationDateTime**: `string`

The date of the latest renovation of this experience facility.

#### See

https://vocabulary.uncefact.org/latestRenovationDateTime

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this experience facility.

#### See

https://vocabulary.uncefact.org/name

***

### physicalSpecifiedLocation? {#physicalspecifiedlocation}

> `optional` **physicalSpecifiedLocation**: [`IUneceSpecifiedLocation`](IUneceSpecifiedLocation.md)[]

A physical location specified for this experience facility.

#### See

https://vocabulary.uncefact.org/physicalSpecifiedLocation

***

### specifiedCommunication? {#specifiedcommunication}

> `optional` **specifiedCommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

A specified universal communication for this experience facility.

#### See

https://vocabulary.uncefact.org/specifiedCommunication

***

### usedSource? {#usedsource}

> `optional` **usedSource**: [`IUneceSource`](IUneceSource.md)[]

A water source used by this experience facility.

#### See

https://vocabulary.uncefact.org/usedSource
