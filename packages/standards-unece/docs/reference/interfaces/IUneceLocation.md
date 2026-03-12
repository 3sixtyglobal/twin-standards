# Interface: IUneceLocation

A reference to a physical location or place.

## See

https://vocabulary.uncefact.org/Location

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Location"`

JSON-LD Type.

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this referenced location.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedAgriculturalApplication? {#appliedagriculturalapplication}

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this referenced location.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### associatedGeographicalFeature? {#associatedgeographicalfeature}

> `optional` **associatedGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this referenced location.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### countryName? {#countryname}

> `optional` **countryName**: `string`

The country name, expressed as text, of this referenced location.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId**: `string` \| `IJsonLdValueObject`

The identifier of the country sub-division for this referenced location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### definedCoordinateReferenceSystem? {#definedcoordinatereferencesystem}

> `optional` **definedCoordinateReferenceSystem**: [`IUneceCoordinateReferenceSystem`](IUneceCoordinateReferenceSystem.md)

The Coordinate System (CS) engineering coordinate reference system defined for this referenced location.

#### See

https://vocabulary.uncefact.org/definedCoordinateReferenceSystem

***

### description? {#description}

> `optional` **description**: `string`

A textual description for this referenced location.

#### See

https://vocabulary.uncefact.org/description

***

### globalId? {#globalid}

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

A global identifier of this referenced location.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this referenced location such as a United Nations Blue Number (UNBN) or GS1 Global Location Number
(GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPolygon? {#includedpolygon}

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)

The polygon included for this referenced location.

#### See

https://vocabulary.uncefact.org/includedPolygon

***

### locationCountryId? {#locationcountryid}

> `optional` **locationCountryId**: `string` \| `IJsonLdValueObject`

The identifier of the country for this referenced location.

#### See

https://vocabulary.uncefact.org/locationCountryId

***

### locationReferenceTypeCode? {#locationreferencetypecode}

> `optional` **locationReferenceTypeCode**: `string`

The code specifying the reference type of this referenced location.

#### See

https://vocabulary.uncefact.org/locationReferenceTypeCode

***

### locationTypeCode? {#locationtypecode}

> `optional` **locationTypeCode**: `string`

The code specifying the type of referenced location.

#### See

https://vocabulary.uncefact.org/locationTypeCode

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this referenced location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalFeature? {#physicalgeographicalfeature}

> `optional` **physicalGeographicalFeature**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)

The physical geographical feature specified for this referenced location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalFeature

***

### physicalGeographicalPoint? {#physicalgeographicalpoint}

> `optional` **physicalGeographicalPoint**: [`IUneceGeographicalPoint`](IUneceGeographicalPoint.md)

The physical geographical point specified for this location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalPoint

***

### postalAddress? {#postaladdress}

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The postal trade address for this referenced location.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### relatedProductionUnit? {#relatedproductionunit}

> `optional` **relatedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

A facility production unit related to this referenced location.

#### See

https://vocabulary.uncefact.org/relatedProductionUnit

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedFacility? {#specifiedfacility}

> `optional` **specifiedFacility**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A production facility specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedInventory? {#specifiedinventory}

> `optional` **specifiedInventory**: [`IUneceSupplyChainInventory`](IUneceSupplyChainInventory.md)[]

Supply chain inventory specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedInventory

***

### specifiedLaboratoryObservationReference? {#specifiedlaboratoryobservationreference}

> `optional` **specifiedLaboratoryObservationReference**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation reference specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeParty? {#specifiedtradeparty}

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party specified for this referenced location.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### uTCOffsetNumeric? {#utcoffsetnumeric}

> `optional` **uTCOffsetNumeric**: `string`

The UTC (Universal Time Coordinate) time offset value for this referenced location.

#### See

https://vocabulary.uncefact.org/uTCOffsetNumeric
