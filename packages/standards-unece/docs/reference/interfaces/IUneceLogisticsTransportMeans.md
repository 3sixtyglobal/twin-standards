# Interface: IUneceLogisticsTransportMeans

The devices used to convey goods or other objects from place to place during logistics cargo movements.

## See

https://vocabulary.uncefact.org/LogisticsTransportMeans

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

> **type**: `"LogisticsTransportMeans"`

JSON-LD Type.

***

### aftDraughtLevelMeasure?

> `optional` **aftDraughtLevelMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The draught level measured at the aft end of this transport means.

#### See

https://vocabulary.uncefact.org/aftDraughtLevelMeasure

***

### airDraughtLevelMeasure?

> `optional` **airDraughtLevelMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

An air draught level measure for this logistics transport means.

#### See

https://vocabulary.uncefact.org/airDraughtLevelMeasure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A service charge, such as a freight charge, applicable to this logistics means of transport.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this logistics transport means.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### approvedSecurityPlanOnboardIndicator?

> `optional` **approvedSecurityPlanOnboardIndicator**: `boolean`

The indication of whether or not there is an approved security plan onboard this logistics transport means.

#### See

https://vocabulary.uncefact.org/approvedSecurityPlanOnboardIndicator

***

### attachedIOTDevice?

> `optional` **attachedIOTDevice**: [`IUneceIOTDevice`](IUneceIOTDevice.md)[]

An IOT device attached to this logistics transport means.

#### See

https://vocabulary.uncefact.org/attachedIOTDevice

***

### attachedLogisticsTransportEquipment?

> `optional` **attachedLogisticsTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

A piece of logistics transport equipment attached to this logistics means of transport.

#### See

https://vocabulary.uncefact.org/attachedLogisticsTransportEquipment

***

### callSignId?

> `optional` **callSignId**: `string`

A call sign identifier for this logistics transport means.

#### See

https://vocabulary.uncefact.org/callSignId

***

### certifiedEmission?

> `optional` **certifiedEmission**: [`IUneceEmission`](IUneceEmission.md)[]

A certified level of pollution calculated for an emission from this logistics transport means.

#### See

https://vocabulary.uncefact.org/certifiedEmission

***

### companySecurityOfficerPerson?

> `optional` **companySecurityOfficerPerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A person who is a company security officer for this logistics transport means.

#### See

https://vocabulary.uncefact.org/companySecurityOfficerPerson

***

### conferenceCode?

> `optional` **conferenceCode**: `string`

The code specifying the conference for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/conferenceCode

***

### draughtLevelMeasure?

> `optional` **draughtLevelMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the draught level of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/draughtLevelMeasure

***

### driverAccompaniedIndicator?

> `optional` **driverAccompaniedIndicator**: `boolean`

The indication of whether or not this logistics means of transport is accompanied by a driver.

#### See

https://vocabulary.uncefact.org/driverAccompaniedIndicator

***

### forwardDraughtLevelMeasure?

> `optional` **forwardDraughtLevelMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The draught level measured at the fore end of this transport means.

#### See

https://vocabulary.uncefact.org/forwardDraughtLevelMeasure

***

### helipadIndicator?

> `optional` **helipadIndicator**: `boolean`

The indication of whether or not there is a helipad on this logistics means of transport.

#### See

https://vocabulary.uncefact.org/helipadIndicator

***

### iMOId?

> `optional` **iMOId**: `string`

The IMO (International Maritime Organization) identifier for this logistics transport means.

#### See

https://vocabulary.uncefact.org/iMOId

***

### iSPSSecurityLevelCode?

> `optional` **iSPSSecurityLevelCode**: `string`

The code specifying the International Ship and Port facility Security (ISPS) level assigned to this logistics means of
transport.

#### See

https://vocabulary.uncefact.org/iSPSSecurityLevelCode

***

### iSSCDocument?

> `optional` **iSSCDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The referenced ISSC (International Ship Security Certificate) document for this logistics transport means.

#### See

https://vocabulary.uncefact.org/iSSCDocument

***

### iSSCIssuingAuthorityParty?

> `optional` **iSSCIssuingAuthorityParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party authorized to issue the International Ship Security Certificate (ISSC) for this logistics means of
transport.

#### See

https://vocabulary.uncefact.org/iSSCIssuingAuthorityParty

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this logistics means of transport, such as the International Maritime Organization number of a vessel.

#### See

https://vocabulary.uncefact.org/identifier

***

### linearUnitLengthMeasure?

> `optional` **linearUnitLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

The measure of the length of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/linearUnitLengthMeasure

***

### linearUnitRequiredLaneLengthMeasure?

> `optional` **linearUnitRequiredLaneLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the external length required in a lane for this logistics transport means.

#### See

https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure

***

### linearUnitWidthMeasure?

> `optional` **linearUnitWidthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

A measure of the width of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/linearUnitWidthMeasure

***

### loadedCargoMeasure?

> `optional` **loadedCargoMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the cargo loaded onto this logistics means of transport, such as the number of barrels of oil or other
quantity of breakbulk cargo.

#### See

https://vocabulary.uncefact.org/loadedCargoMeasure

***

### logisticsTransportMeansPowerTypeCode?

> `optional` **logisticsTransportMeansPowerTypeCode**: `string`

The code specifying the power type for this logistics transport means.

#### See

https://vocabulary.uncefact.org/logisticsTransportMeansPowerTypeCode

***

### mMSIId?

> `optional` **mMSIId**: `string`

The MMSI (Maritime Mobile Service Identity) identifier for this logistics transport means.

#### See

https://vocabulary.uncefact.org/mMSIId

***

### manoeuvringSpeedMeasure?

> `optional` **manoeuvringSpeedMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The manoeuvring speed measured for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/manoeuvringSpeedMeasure

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The manufacturer party for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### manufacturingDateTime?

> `optional` **manufacturingDateTime**: `string`

The manufacturing date, time, date time, or other date time value for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/manufacturingDateTime

***

### maritimeApplicableCertificate?

> `optional` **maritimeApplicableCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to a maritime logistics transport means.

#### See

https://vocabulary.uncefact.org/maritimeApplicableCertificate

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/name

***

### operatorNationalityCountry?

> `optional` **operatorNationalityCountry**: [`IUneceCountry`](IUneceCountry.md)

The country of nationality of the operator of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/operatorNationalityCountry

***

### operatorParty?

> `optional` **operatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party operating this logistics means of transport.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### ownerAgentParty?

> `optional` **ownerAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The owner agent trade party for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/ownerAgentParty

***

### ownerParty?

> `optional` **ownerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party owning this logistics means of transport.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### registrationCountry?

> `optional` **registrationCountry**: [`IUneceCountry`](IUneceCountry.md)[]

The country of registration of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### registrationEvent?

> `optional` **registrationEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A registration event of this logistics transport means.

#### See

https://vocabulary.uncefact.org/registrationEvent

***

### requiredService?

> `optional` **requiredService**: [`IUneceService`](IUneceService.md)[]

A transport service required for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/requiredService

***

### sanitationControlDocument?

> `optional` **sanitationControlDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A sanitation control document for this logistics transport means.

#### See

https://vocabulary.uncefact.org/sanitationControlDocument

***

### sanitationControlReInspectionRequiredIndicator?

> `optional` **sanitationControlReInspectionRequiredIndicator**: `boolean`

The indication of whether or not a Sanitation Control Exemption or Certificate re-inspection is required for this
logistics transport means.

#### See

https://vocabulary.uncefact.org/sanitationControlReInspectionRequiredIndicator

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number differentiating this logistics transport means from others.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### serviceProviderParty?

> `optional` **serviceProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party providing services for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/serviceProviderParty

***

### specifiedDimension?

> `optional` **specifiedDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

Spatial dimensions specified for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/specifiedDimension

***

### specifiedEmission?

> `optional` **specifiedEmission**: [`IUneceEmission`](IUneceEmission.md)[]

A calculated emission specified for this logistics transport means.

#### See

https://vocabulary.uncefact.org/specifiedEmission

***

### specifiedFault?

> `optional` **specifiedFault**: [`IUneceIdentifiedFault`](IUneceIdentifiedFault.md)[]

An identified defect specified for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/specifiedFault

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions specified for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### transportMeansType?

> `optional` **transportMeansType**: `string`

The type, expressed as text, of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/transportMeansType

***

### transportMeansTypeCode?

> `optional` **transportMeansTypeCode**: [`UneceTransportMeansTypeCodeList`](../type-aliases/UneceTransportMeansTypeCodeList.md)[]

The code specifying the type of logistics means of transport (Reference UNECE Recommendation 28).

#### See

https://vocabulary.uncefact.org/transportMeansTypeCode

***

### validSanitationControlIndicator?

> `optional` **validSanitationControlIndicator**: `boolean`

The indication of whether or not there is a valid Sanitation Control Exemption or Certificate onboard this logistics
transport means.

#### See

https://vocabulary.uncefact.org/validSanitationControlIndicator

***

### wasteReportingExemptionIndicator?

> `optional` **wasteReportingExemptionIndicator**: `boolean`

The indication of whether or not there is a waste reporting exemption for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/wasteReportingExemptionIndicator

***

### weightUnitCargoGrossWeightMeasure?

> `optional` **weightUnitCargoGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the total gross weight (mass) of all cargo loaded onto this logistics means of transport, including
packaging but excluding any associated transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitCargoGrossWeightMeasure

***

### weightUnitDeadweightTonnageMeasure?

> `optional` **weightUnitDeadweightTonnageMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The deadweight tonnage measure for this logistics transport means.

#### See

https://vocabulary.uncefact.org/weightUnitDeadweightTonnageMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the gross weight (mass) of this logistics means of transport including cargo, such as the measure of the
overall size of a vessel determined in accordance with the provisions of the International Convention on Tonnage
Measurement of Ships, 1969.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the net weight (mass) of this logistics means of transport, such as the net tonnage of a vessel
determined in accordance with the provisions of the International Convention on Tonnage Measurement of Ships, 1969.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTareWeightMeasure?

> `optional` **weightUnitTareWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the tare weight (mass) of this logistics means of transport which is the weight (mass) including
permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
