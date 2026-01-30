# Interface: IUneceDangerousGoods

Goods which may contain a substance which poses risks to people and/or the environment during transportation which is
regulated by dangerous goods regulations.

## See

https://vocabulary.uncefact.org/DangerousGoods

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

> **type**: `"DangerousGoods"`

JSON-LD Type.

***

### additionalHazardClassificationId?

> `optional` **additionalHazardClassificationId**: `string`

The unique identifier of an additional hazard class applicable to these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/additionalHazardClassificationId

***

### aircraftLimitationInformation?

> `optional` **aircraftLimitationInformation**: `string`

Aircraft limitation information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/aircraftLimitationInformation

***

### allPackedInOneInformation?

> `optional` **allPackedInOneInformation**: `string`

All packed in one information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/allPackedInOneInformation

***

### associatedTransportEquipment?

> `optional` **associatedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

Referenced transport equipment associated with the dangerous goods.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipment

***

### authorizationInformation?

> `optional` **authorizationInformation**: `string`

Authorization information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/authorizationInformation

***

### complianceDeclarationInformation?

> `optional` **complianceDeclarationInformation**: `string`

Compliance declaration information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/complianceDeclarationInformation

***

### controlTemperatureMeasurement?

> `optional` **controlTemperatureMeasurement**: [`IUneceMeasurement`](IUneceMeasurement.md)[]

The measurement of the control temperature of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/controlTemperatureMeasurement

***

### crewEmergencyInformation?

> `optional` **crewEmergencyInformation**: `string`

Crew emergency information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/crewEmergencyInformation

***

### crewMemberEmergencyIdentityInformation?

> `optional` **crewMemberEmergencyIdentityInformation**: `string`

Crew member emergency identity information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/crewMemberEmergencyIdentityInformation

***

### dangerousGoodsPackagingLevelPackagingDangerLevelCode?

> `optional` **dangerousGoodsPackagingLevelPackagingDangerLevelCode**: [`UneceDangerousGoodsPackagingLevelCodeList`](../type-aliases/UneceDangerousGoodsPackagingLevelCodeList.md)[]

The code specifying the level of danger that the packaging of these dangerous goods must cover for transport purposes.

#### See

https://vocabulary.uncefact.org/dangerousGoodsPackagingLevelPackagingDangerLevelCode

***

### dangerousGoodsRegulationCode?

> `optional` **dangerousGoodsRegulationCode**: [`UneceDangerousGoodsRegulationCodeList`](../type-aliases/UneceDangerousGoodsRegulationCodeList.md)[]

The code specifying a regulation applicable to these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/dangerousGoodsRegulationCode

***

### densityMeasure?

> `optional` **densityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A density measure for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/densityMeasure

***

### eMSId?

> `optional` **eMSId**: `string`

The unique transport emergency procedure (EMS) identifier applicable for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/eMSId

***

### emergencyContact?

> `optional` **emergencyContact**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

The person or department to be contacted in the event of any emergency related to these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/emergencyContact

***

### emergencyTemperatureMeasurement?

> `optional` **emergencyTemperatureMeasurement**: [`IUneceMeasurement`](IUneceMeasurement.md)[]

The measurement of the emergency temperature of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/emergencyTemperatureMeasurement

***

### exceptedQuantityStatementInformation?

> `optional` **exceptedQuantityStatementInformation**: `string`

Excepted quantity information statement, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/exceptedQuantityStatementInformation

***

### expertTrainingCertificateInformation?

> `optional` **expertTrainingCertificateInformation**: `string`

Expert training certificate information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/expertTrainingCertificateInformation

***

### explosiveCargoNetWeightMeasure?

> `optional` **explosiveCargoNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the explosive cargo weight applicable to these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/explosiveCargoNetWeightMeasure

***

### explosiveCompatibilityGroupCode?

> `optional` **explosiveCompatibilityGroupCode**: `string`

The code specifying the explosive compatibility group for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/explosiveCompatibilityGroupCode

***

### explosiveLabelStatementInformation?

> `optional` **explosiveLabelStatementInformation**: `string`

Explosive label material statement information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/explosiveLabelStatementInformation

***

### flashpointTemperatureMeasurement?

> `optional` **flashpointTemperatureMeasurement**: [`IUneceMeasurement`](IUneceMeasurement.md)

A measurement of the flashpoint temperature of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/flashpointTemperatureMeasurement

***

### handlingInstructions?

> `optional` **handlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)

Handling instructions for the transported dangerous goods.

#### See

https://vocabulary.uncefact.org/handlingInstructions

***

### hazardCategoryCode?

> `optional` **hazardCategoryCode**: `string`

The code specifying the hazard category for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/hazardCategoryCode

***

### hazardClassVersionId?

> `optional` **hazardClassVersionId**: `string`

The unique identifier of the version of a hazard class for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/hazardClassVersionId

***

### hazardClassificationId?

> `optional` **hazardClassificationId**: `string`

The unique identifier of a hazard class applicable to these transported dangerous goods as defined by the relevant
governing regulation authority.

#### See

https://vocabulary.uncefact.org/hazardClassificationId

***

### hazardTypeCode?

> `optional` **hazardTypeCode**: `string`

A code specifying the type of hazard for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/hazardTypeCode

***

### iMDGSegregationGroupCode?

> `optional` **iMDGSegregationGroupCode**: `string`

The code specifying the IMDG (International Maritime Dangerous Goods regulation) segregation group for these transported
dangerous goods.

#### See

https://vocabulary.uncefact.org/iMDGSegregationGroupCode

***

### includedFuel?

> `optional` **includedFuel**: [`IUneceFuel`](IUneceFuel.md)[]

Gaseous fuels included in the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/includedFuel

***

### information?

> `optional` **information**: `string`

Information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/information

***

### limitedQuantityCode?

> `optional` **limitedQuantityCode**: `string`

A code specifying facilitations for transport of limited quantities of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/limitedQuantityCode

***

### lowerPartOrangeHazardPlacardId?

> `optional` **lowerPartOrangeHazardPlacardId**: `string`

The unique lower part of the orange hazard placard identifier for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/lowerPartOrangeHazardPlacardId

***

### mFAGId?

> `optional` **mFAGId**: `string`

The unique Medical First Aid Guide (MFAG) identifier for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/mFAGId

***

### marinePollutantIndicator?

> `optional` **marinePollutantIndicator**: `boolean`

The indication of whether or not these transported dangerous goods have a marine pollutant content.

#### See

https://vocabulary.uncefact.org/marinePollutantIndicator

***

### maritimePollutantTypeCode?

> `optional` **maritimePollutantTypeCode**: `string`

A code specifying a type of maritime pollutant for the transported dangerous goods.

#### See

https://vocabulary.uncefact.org/maritimePollutantTypeCode

***

### marking?

> `optional` **marking**: `string`

Marking, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/marking

***

### overpackInformation?

> `optional` **overpackInformation**: `string`

Overpack information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/overpackInformation

***

### packingInstructionTypeCode?

> `optional` **packingInstructionTypeCode**: `string`

The code specifying a type of packing instruction for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/packingInstructionTypeCode

***

### pollutantIndicator?

> `optional` **pollutantIndicator**: `boolean`

The indication of whether or not these transported dangerous goods have a pollutant content.

#### See

https://vocabulary.uncefact.org/pollutantIndicator

***

### pollutantLevelCode?

> `optional` **pollutantLevelCode**: `string`

The code specifying the level of pollution of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/pollutantLevelCode

***

### previousCargoInformation?

> `optional` **previousCargoInformation**: `string`

Previous cargo information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/previousCargoInformation

***

### properShippingName?

> `optional` **properShippingName**: `string`

The proper shipping name, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/properShippingName

***

### qValueNumeric?

> `optional` **qValueNumeric**: `string`

The number of the Q-Value for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/qValueNumeric

***

### radioactiveIndicator?

> `optional` **radioactiveIndicator**: `boolean`

The indicator of whether or not these transported dangerous goods are radioactive.

#### See

https://vocabulary.uncefact.org/radioactiveIndicator

***

### radioactiveMaterial?

> `optional` **radioactiveMaterial**: [`IUneceRadioactiveMaterial`](IUneceRadioactiveMaterial.md)[]

The radioactive material (Class 7) transported as dangerous goods.

#### See

https://vocabulary.uncefact.org/radioactiveMaterial

***

### regulationName?

> `optional` **regulationName**: `string`

A name, expressed as text, for a regulation of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/regulationName

***

### regulatoryAuthorityName?

> `optional` **regulatoryAuthorityName**: `string`

The name, expressed as text, for the regulatory authority for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/regulatoryAuthorityName

***

### relatedDocument?

> `optional` **relatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document related to these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/relatedDocument

***

### reportableQuantity?

> `optional` **reportableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The reportable quantity for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/reportableQuantity

***

### shipperDeclarationInformation?

> `optional` **shipperDeclarationInformation**: `string`

Shipper declaration information, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/shipperDeclarationInformation

***

### specialProvisionId?

> `optional` **specialProvisionId**: `string`

The unique identifier of the special provision for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/specialProvisionId

***

### specifiedPackage?

> `optional` **specifiedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A logistics package specified for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/specifiedPackage

***

### statedCondition?

> `optional` **statedCondition**: [`IUneceSpecifiedCondition`](IUneceSpecifiedCondition.md)[]

A stated condition of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/statedCondition

***

### supplementaryInformation?

> `optional` **supplementaryInformation**: `string`

Supplementary information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/supplementaryInformation

***

### tREMId?

> `optional` **tREMId**: `string`

The unique TRansport EMergency (TREM) card identifier for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/tREMId

***

### tankTypeCertificateInformation?

> `optional` **tankTypeCertificateInformation**: `string`

Tank type certificate information, expressed as text, concerning the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/tankTypeCertificateInformation

***

### technicalName?

> `optional` **technicalName**: `string`

A technical name, expressed as text, for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/technicalName

***

### temperatureUnitMeltingPointTemperatureMeasure?

> `optional` **temperatureUnitMeltingPointTemperatureMeasure**: [`IUneceTemperatureUnitMeasureType`](IUneceTemperatureUnitMeasureType.md)[]

A melting point temperature measure for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/temperatureUnitMeltingPointTemperatureMeasure

***

### transportDangerousGoodsPackageTypeCode?

> `optional` **transportDangerousGoodsPackageTypeCode**: [`UnecePackageTypeCodeList`](../type-aliases/UnecePackageTypeCodeList.md)

The code specifying the package type for the transported dangerous goods.

#### See

https://vocabulary.uncefact.org/transportDangerousGoodsPackageTypeCode

***

### transportExpertContact?

> `optional` **transportExpertContact**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

The expert to be contacted for details about the transport of these dangerous goods.

#### See

https://vocabulary.uncefact.org/transportExpertContact

***

### tunnelRestrictionCode?

> `optional` **tunnelRestrictionCode**: `string`

The code specifying the tunnel restriction for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/tunnelRestrictionCode

***

### uNDGIdentificationCode?

> `optional` **uNDGIdentificationCode**: `string`

The code specifying the unique United Nations Dangerous Goods (UNDG) number assigned to these transported dangerous
goods.

#### See

https://vocabulary.uncefact.org/uNDGIdentificationCode

***

### unitDensityMeasure?

> `optional` **unitDensityMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A density measure for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/unitDensityMeasure

***

### unitViscosityMeasure?

> `optional` **unitViscosityMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A viscosity measure for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/unitViscosityMeasure

***

### upperPartOrangeHazardPlacardId?

> `optional` **upperPartOrangeHazardPlacardId**: `string`

The unique upper part of the orange hazard placard identifier for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/upperPartOrangeHazardPlacardId

***

### viscosityMeasure?

> `optional` **viscosityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A viscosity measure for these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/viscosityMeasure

***

### volumeUnitGrossVolumeMeasure?

> `optional` **volumeUnitGrossVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

The measure of the gross volume, normally calculated by multiplying the maximum length, width and height dimensions of
these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### volumeUnitMarinePollutantVolumeMeasure?

> `optional` **volumeUnitMarinePollutantVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the marine pollutant volume of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/volumeUnitMarinePollutantVolumeMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the weight (mass) of these transported dangerous goods including packaging but excluding the transport
equipment.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the net weight (mass) of these transported dangerous goods.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
