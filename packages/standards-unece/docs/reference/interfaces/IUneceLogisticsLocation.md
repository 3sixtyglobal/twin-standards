# Interface: IUneceLogisticsLocation

A logistics related physical location or place.

## See

https://vocabulary.uncefact.org/LogisticsLocation

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

> **type**: `"LogisticsLocation"`

JSON-LD Type.

***

### associatedGeographicalFeature?

> `optional` **associatedGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this logistics location.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### countryName?

> `optional` **countryName**: `string`

A country name, expressed as text, of this logistics location.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

The identifier of the country sub-division for this logistics related location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### description?

> `optional` **description**: `string`

A textual description of this logistics related location.

#### See

https://vocabulary.uncefact.org/description

***

### facilityLocation?

> `optional` **facilityLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A facility location referenced for this logistics location.

#### See

https://vocabulary.uncefact.org/facilityLocation

***

### healthAffectedAreaIndicator?

> `optional` **healthAffectedAreaIndicator**: `boolean`

The indication of whether or not this logistics location is in a health affected area.

#### See

https://vocabulary.uncefact.org/healthAffectedAreaIndicator

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this logistics related location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### inspectionEvent?

> `optional` **inspectionEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain inspection event at this logistics location.

#### See

https://vocabulary.uncefact.org/inspectionEvent

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of this logistics related location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### logisticsLocationCountryId?

> `optional` **logisticsLocationCountryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)[]

The unique identifier of a country for this logistics location.

#### See

https://vocabulary.uncefact.org/logisticsLocationCountryId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this logistics related location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate?

> `optional` **physicalGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)[]

Geographical coordinate information for this logistics related location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate

***

### postalAddress?

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

The postal trade address information for this logistics related location.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### previousAssociatedGeographicalFeature?

> `optional` **previousAssociatedGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature previously associated with this logistics location.

#### See

https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature

***

### servicingSpecifiedParty?

> `optional` **servicingSpecifiedParty**: [`IUneceLocationParty`](IUneceLocationParty.md)[]

A servicing party specified for this logistics related location.

#### See

https://vocabulary.uncefact.org/servicingSpecifiedParty

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

An inspection event specified for this logistics location.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### stayPeriod?

> `optional` **stayPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period of stay at this logistics location.

#### See

https://vocabulary.uncefact.org/stayPeriod

***

### subordinateRelatedLocation?

> `optional` **subordinateRelatedLocation**: `IUneceLogisticsLocation`[]

A logistics location subordinate to this logistics location.

#### See

https://vocabulary.uncefact.org/subordinateRelatedLocation

***

### subordinateSubordinateLocation?

> `optional` **subordinateSubordinateLocation**: [`IUneceSubordinateLocation`](IUneceSubordinateLocation.md)

A location subordinate to this logistics related location.

#### See

https://vocabulary.uncefact.org/subordinateSubordinateLocation

***

### uTCOffsetNumeric?

> `optional` **uTCOffsetNumeric**: `string`

The time offset value from the Universal Time Coordinate (UTC) for this logistics related location.

#### See

https://vocabulary.uncefact.org/uTCOffsetNumeric
