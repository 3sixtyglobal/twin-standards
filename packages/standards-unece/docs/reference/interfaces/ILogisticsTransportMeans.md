# Interface: ILogisticsTransportMeans

The devices used to convey goods or other objects from place to place during logistics cargo movements.

## See

https://vocabulary.uncefact.org/LogisticsTransportMeans

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

> **type**: `"LogisticsTransportMeans"`

JSON-LD Type.

***

### aftDraughtLevelMeasure?

> `optional` **aftDraughtLevelMeasure**: [`IMeasureType`](IMeasureType.md)[]

The draught level measured at the aft end of this transport means.

#### See

https://vocabulary.uncefact.org/aftDraughtLevelMeasure

***

### airDraughtLevelMeasure?

> `optional` **airDraughtLevelMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

An air draught level measure for this logistics transport means.

#### See

https://vocabulary.uncefact.org/airDraughtLevelMeasure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A service charge, such as a freight charge, applicable to this logistics means of transport.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

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

> `optional` **attachedIOTDevice**: [`IIOTDevice`](IIOTDevice.md)[]

An IOT device attached to this logistics transport means.

#### See

https://vocabulary.uncefact.org/attachedIOTDevice

***

### attachedLogisticsTransportEquipment?

> `optional` **attachedLogisticsTransportEquipment**: [`ILogisticsTransportEquipment`](ILogisticsTransportEquipment.md)[]

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

> `optional` **certifiedEmission**: [`IEmission`](IEmission.md)[]

A certified level of pollution calculated for an emission from this logistics transport means.

#### See

https://vocabulary.uncefact.org/certifiedEmission

***

### companySecurityOfficerPerson?

> `optional` **companySecurityOfficerPerson**: [`ITransportPerson`](ITransportPerson.md)[]

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

> `optional` **draughtLevelMeasure**: [`IMeasureType`](IMeasureType.md)[]

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

> `optional` **forwardDraughtLevelMeasure**: [`IMeasureType`](IMeasureType.md)[]

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

> `optional` **iSSCDocument**: [`IDocument`](IDocument.md)[]

The referenced ISSC (International Ship Security Certificate) document for this logistics transport means.

#### See

https://vocabulary.uncefact.org/iSSCDocument

***

### iSSCIssuingAuthorityParty?

> `optional` **iSSCIssuingAuthorityParty**: [`ITradeParty`](ITradeParty.md)

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

> `optional` **linearUnitLengthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The measure of the length of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/linearUnitLengthMeasure

***

### linearUnitRequiredLaneLengthMeasure?

> `optional` **linearUnitRequiredLaneLengthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)

The measure of the external length required in a lane for this logistics transport means.

#### See

https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure

***

### linearUnitWidthMeasure?

> `optional` **linearUnitWidthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

A measure of the width of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/linearUnitWidthMeasure

***

### loadedCargoMeasure?

> `optional` **loadedCargoMeasure**: [`IMeasureType`](IMeasureType.md)[]

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

> `optional` **manoeuvringSpeedMeasure**: [`IMeasureType`](IMeasureType.md)[]

The manoeuvring speed measured for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/manoeuvringSpeedMeasure

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **maritimeApplicableCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

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

> `optional` **operatorNationalityCountry**: [`ICountry`](ICountry.md)

The country of nationality of the operator of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/operatorNationalityCountry

***

### operatorParty?

> `optional` **operatorParty**: [`ITradeParty`](ITradeParty.md)[]

The party operating this logistics means of transport.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### ownerAgentParty?

> `optional` **ownerAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The owner agent trade party for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/ownerAgentParty

***

### ownerParty?

> `optional` **ownerParty**: [`ITradeParty`](ITradeParty.md)[]

The party owning this logistics means of transport.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### registrationCountry?

> `optional` **registrationCountry**: [`ICountry`](ICountry.md)[]

The country of registration of this logistics means of transport.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### registrationEvent?

> `optional` **registrationEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A registration event of this logistics transport means.

#### See

https://vocabulary.uncefact.org/registrationEvent

***

### requiredService?

> `optional` **requiredService**: [`IService`](IService.md)[]

A transport service required for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/requiredService

***

### sanitationControlDocument?

> `optional` **sanitationControlDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **serviceProviderParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party providing services for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/serviceProviderParty

***

### specifiedDimension?

> `optional` **specifiedDimension**: [`ISpatialDimension`](ISpatialDimension.md)[]

Spatial dimensions specified for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/specifiedDimension

***

### specifiedEmission?

> `optional` **specifiedEmission**: [`IEmission`](IEmission.md)[]

A calculated emission specified for this logistics transport means.

#### See

https://vocabulary.uncefact.org/specifiedEmission

***

### specifiedFault?

> `optional` **specifiedFault**: [`IIdentifiedFault`](IIdentifiedFault.md)[]

An identified defect specified for this logistics means of transport.

#### See

https://vocabulary.uncefact.org/specifiedFault

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IHandlingInstructions`](IHandlingInstructions.md)[]

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

> `optional` **transportMeansTypeCode**: [`TransportMeansTypeCodeList`](../type-aliases/TransportMeansTypeCodeList.md)[]

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

> `optional` **weightUnitCargoGrossWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)

The measure of the total gross weight (mass) of all cargo loaded onto this logistics means of transport, including
packaging but excluding any associated transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitCargoGrossWeightMeasure

***

### weightUnitDeadweightTonnageMeasure?

> `optional` **weightUnitDeadweightTonnageMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The deadweight tonnage measure for this logistics transport means.

#### See

https://vocabulary.uncefact.org/weightUnitDeadweightTonnageMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure of the gross weight (mass) of this logistics means of transport including cargo, such as the measure of the
overall size of a vessel determined in accordance with the provisions of the International Convention on Tonnage
Measurement of Ships, 1969.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure of the net weight (mass) of this logistics means of transport, such as the net tonnage of a vessel
determined in accordance with the provisions of the International Convention on Tonnage Measurement of Ships, 1969.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTareWeightMeasure?

> `optional` **weightUnitTareWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure of the tare weight (mass) of this logistics means of transport which is the weight (mass) including
permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
