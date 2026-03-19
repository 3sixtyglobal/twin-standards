# Interface: IUneceLogisticsLocation

A logistics related physical location or place.

## See

https://vocabulary.uncefact.org/LogisticsLocation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LogisticsLocation"`

JSON-LD Type.

***

### associatedGeographicalFeature? {#associatedgeographicalfeature}

> `optional` **associatedGeographicalFeature?**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this logistics location.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### countryName? {#countryname}

> `optional` **countryName?**: `string`

A country name, expressed as text, of this logistics location.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId?**: `string` \| `IJsonLdValueObject`

The identifier of the country sub-division for this logistics related location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this logistics related location.

#### See

https://vocabulary.uncefact.org/description

***

### facilityLocation? {#facilitylocation}

> `optional` **facilityLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A facility location referenced for this logistics location.

#### See

https://vocabulary.uncefact.org/facilityLocation

***

### healthAffectedAreaIndicator? {#healthaffectedareaindicator}

> `optional` **healthAffectedAreaIndicator?**: `boolean`

The indication of whether or not this logistics location is in a health affected area.

#### See

https://vocabulary.uncefact.org/healthAffectedAreaIndicator

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier for this logistics related location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### inspectionEvent? {#inspectionevent}

> `optional` **inspectionEvent?**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain inspection event at this logistics location.

#### See

https://vocabulary.uncefact.org/inspectionEvent

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode?**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of this logistics related location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### logisticsLocationCountryId? {#logisticslocationcountryid}

> `optional` **logisticsLocationCountryId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a country for this logistics location.

#### See

https://vocabulary.uncefact.org/logisticsLocationCountryId

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, of this logistics related location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate? {#physicalgeographicalcoordinate}

> `optional` **physicalGeographicalCoordinate?**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

Geographical coordinate information for this logistics related location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate

***

### postalAddress? {#postaladdress}

> `optional` **postalAddress?**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The postal trade address information for this logistics related location.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### previousAssociatedGeographicalFeature? {#previousassociatedgeographicalfeature}

> `optional` **previousAssociatedGeographicalFeature?**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature previously associated with this logistics location.

#### See

https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature

***

### servicingSpecifiedParty? {#servicingspecifiedparty}

> `optional` **servicingSpecifiedParty?**: [`IUneceLocationParty`](IUneceLocationParty.md)[]

A servicing party specified for this logistics related location.

#### See

https://vocabulary.uncefact.org/servicingSpecifiedParty

***

### specifiedInspectionEvent? {#specifiedinspectionevent}

> `optional` **specifiedInspectionEvent?**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

An inspection event specified for this logistics location.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### stayPeriod? {#stayperiod}

> `optional` **stayPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period of stay at this logistics location.

#### See

https://vocabulary.uncefact.org/stayPeriod

***

### subordinateRelatedLocation? {#subordinaterelatedlocation}

> `optional` **subordinateRelatedLocation?**: `IUneceLogisticsLocation`[]

A logistics location subordinate to this logistics location.

#### See

https://vocabulary.uncefact.org/subordinateRelatedLocation

***

### subordinateSubordinateLocation? {#subordinatesubordinatelocation}

> `optional` **subordinateSubordinateLocation?**: [`IUneceSubordinateLocation`](IUneceSubordinateLocation.md)[]

A location subordinate to this logistics related location.

#### See

https://vocabulary.uncefact.org/subordinateSubordinateLocation

***

### uTCOffsetNumeric? {#utcoffsetnumeric}

> `optional` **uTCOffsetNumeric?**: `string`

The time offset value from the Universal Time Coordinate (UTC) for this logistics related location.

#### See

https://vocabulary.uncefact.org/uTCOffsetNumeric
