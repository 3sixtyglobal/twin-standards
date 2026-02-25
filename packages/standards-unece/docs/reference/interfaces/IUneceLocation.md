# Interface: IUneceLocation

A reference to a physical location or place.

## See

https://vocabulary.uncefact.org/Location

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Location"`

JSON-LD Type.

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this referenced location.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### associatedGeographicalFeature?

> `optional` **associatedGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this referenced location.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### countryName?

> `optional` **countryName**: `string`

The country name, expressed as text, of this referenced location.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

The identifier of the country sub-division for this referenced location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### definedCoordinateReferenceSystem?

> `optional` **definedCoordinateReferenceSystem**: [`IUneceCoordinateReferenceSystem`](IUneceCoordinateReferenceSystem.md)

The Coordinate System (CS) engineering coordinate reference system defined for this referenced location.

#### See

https://vocabulary.uncefact.org/definedCoordinateReferenceSystem

***

### description?

> `optional` **description**: `string`

A textual description for this referenced location.

#### See

https://vocabulary.uncefact.org/description

***

### globalId?

> `optional` **globalId**: `string`

A global identifier of this referenced location.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this referenced location such as a United Nations Blue Number (UNBN) or GS1 Global Location Number
(GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPolygon?

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)

The polygon included for this referenced location.

#### See

https://vocabulary.uncefact.org/includedPolygon

***

### locationCountryId?

> `optional` **locationCountryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)

The identifier of the country for this referenced location.

#### See

https://vocabulary.uncefact.org/locationCountryId

***

### locationReferenceTypeCode?

> `optional` **locationReferenceTypeCode**: `string`

The code specifying the reference type of this referenced location.

#### See

https://vocabulary.uncefact.org/locationReferenceTypeCode

***

### locationTypeCode?

> `optional` **locationTypeCode**: `string`

The code specifying the type of referenced location.

#### See

https://vocabulary.uncefact.org/locationTypeCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this referenced location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalFeature?

> `optional` **physicalGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)

The physical geographical feature specified for this referenced location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalFeature

***

### physicalGeographicalPoint?

> `optional` **physicalGeographicalPoint**: [`IUneceGeographicalPoint`](IUneceGeographicalPoint.md)

The physical geographical point specified for this location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalPoint

***

### postalAddress?

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The postal trade address for this referenced location.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### relatedProductionUnit?

> `optional` **relatedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

A facility production unit related to this referenced location.

#### See

https://vocabulary.uncefact.org/relatedProductionUnit

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedFacility?

> `optional` **specifiedFacility**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A production facility specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedInventory?

> `optional` **specifiedInventory**: [`IUneceSupplyChainInventory`](IUneceSupplyChainInventory.md)[]

Supply chain inventory specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedInventory

***

### specifiedLaboratoryObservationReference?

> `optional` **specifiedLaboratoryObservationReference**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation reference specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### uTCOffsetNumeric?

> `optional` **uTCOffsetNumeric**: `string`

The UTC (Universal Time Coordinate) time offset value for this referenced location.

#### See

https://vocabulary.uncefact.org/uTCOffsetNumeric
