# Interface: IUneceExperienceFacility

A structure or place, such as a restaurant, hotel, theme park, hot spring bathing pool, parking lot, or meeting room,
that provides a particular experience.

## See

https://vocabulary.uncefact.org/ExperienceFacility

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ExperienceFacility"`

JSON-LD Type.

***

### architecturalStyle?

> `optional` **architecturalStyle**: `string`

An architectural style, expressed as text, of this experience facility.

#### See

https://vocabulary.uncefact.org/architecturalStyle

***

### availableRoute?

> `optional` **availableRoute**: [`IUneceSpecifiedRoute`](IUneceSpecifiedRoute.md)[]

An available route specified for this experience facility.

#### See

https://vocabulary.uncefact.org/availableRoute

***

### completionDateTime?

> `optional` **completionDateTime**: `string`

The date of the completion of this experience facility.

#### See

https://vocabulary.uncefact.org/completionDateTime

***

### description?

> `optional` **description**: `string`

A textual description of this experience facility.

#### See

https://vocabulary.uncefact.org/description

***

### experienceFacilityTypeCode?

> `optional` **experienceFacilityTypeCode**: `string`

The code specifying the type of experience facility.

#### See

https://vocabulary.uncefact.org/experienceFacilityTypeCode

***

### facilityType?

> `optional` **facilityType**: `string`

A type, expressed as text, of this experience facility.

#### See

https://vocabulary.uncefact.org/facilityType

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this experience facility.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestRenovationDateTime?

> `optional` **latestRenovationDateTime**: `string`

The date of the latest renovation of this experience facility.

#### See

https://vocabulary.uncefact.org/latestRenovationDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this experience facility.

#### See

https://vocabulary.uncefact.org/name

***

### physicalSpecifiedLocation?

> `optional` **physicalSpecifiedLocation**: [`IUneceSpecifiedLocation`](IUneceSpecifiedLocation.md)[]

A physical location specified for this experience facility.

#### See

https://vocabulary.uncefact.org/physicalSpecifiedLocation

***

### specifiedCommunication?

> `optional` **specifiedCommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

A specified universal communication for this experience facility.

#### See

https://vocabulary.uncefact.org/specifiedCommunication

***

### usedSource?

> `optional` **usedSource**: [`IUneceSource`](IUneceSource.md)[]

A water source used by this experience facility.

#### See

https://vocabulary.uncefact.org/usedSource
