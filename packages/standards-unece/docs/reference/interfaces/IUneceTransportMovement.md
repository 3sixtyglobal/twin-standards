# Interface: IUneceTransportMovement

The conveyance (physical carriage) of goods or other objects used for logistics transport purposes.

## See

https://vocabulary.uncefact.org/TransportMovement

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

> **type**: `"TransportMovement"`

JSON-LD Type.

***

### administrativeMedicalPersonnelOnboardQuantity?

> `optional` **administrativeMedicalPersonnelOnboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of administrative medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/administrativeMedicalPersonnelOnboardQuantity

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A service charge, such as a freight charge, applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### arrivalEvent?

> `optional` **arrivalEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

An arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/arrivalEvent

***

### associatedConvoy?

> `optional` **associatedConvoy**: [`IUneceConvoy`](IUneceConvoy.md)

The convoy associated with this logistics transport movement.

#### See

https://vocabulary.uncefact.org/associatedConvoy

***

### borderCrossingDateTime?

> `optional` **borderCrossingDateTime**: `string`

A date, time, date time or other date time value when this logistics transport movement crosses a border.

#### See

https://vocabulary.uncefact.org/borderCrossingDateTime

***

### borderCrossingEvent?

> `optional` **borderCrossingEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A border crossing event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/borderCrossingEvent

***

### callEvent?

> `optional` **callEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A call event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/callEvent

***

### callPurposeCode?

> `optional` **callPurposeCode**: `string`

A code specifying a call purpose for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/callPurposeCode

***

### cargoDescription?

> `optional` **cargoDescription**: `string`

The textual description of the cargo for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/cargoDescription

***

### carriedGoodsCharacteristic?

> `optional` **carriedGoodsCharacteristic**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

Material characteristics of goods carried during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carriedGoodsCharacteristic

***

### carriedInactiveTransportMeans?

> `optional` **carriedInactiveTransportMeans**: [`IUneceTransportMeans`](IUneceTransportMeans.md)[]

Details of transport means inactively carried during the transport movement, such as trucks on a Roll-On/Roll-Off (RORO)
ferry.

#### See

https://vocabulary.uncefact.org/carriedInactiveTransportMeans

***

### carrierAgentParty?

> `optional` **carrierAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The carrier agent trade party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carrierAgentParty

***

### carrierParty?

> `optional` **carrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### closingDateTime?

> `optional` **closingDateTime**: `string`

The date, time, date time, or other date time value by which cargo should be loaded onto the means of transport for the
departure of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/closingDateTime

***

### commodityConsolidatorAgentParty?

> `optional` **commodityConsolidatorAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The commodity consolidator agent party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorAgentParty

***

### commodityConsolidatorParty?

> `optional` **commodityConsolidatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The commodity consolidator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorParty

***

### consignmentQuantity?

> `optional` **consignmentQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of consignments in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consignmentQuantity

***

### consortiumCarrierParty?

> `optional` **consortiumCarrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A consortium carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consortiumCarrierParty

***

### crewListRelatedDocument?

> `optional` **crewListRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The crew list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewListRelatedDocument

***

### crewNationalityCountry?

> `optional` **crewNationalityCountry**: [`IUneceCountry`](IUneceCountry.md)[]

Crew nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewNationalityCountry

***

### crewPerson?

> `optional` **crewPerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A person who is a member of the crew of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPerson

***

### crewPersonalEffects?

> `optional` **crewPersonalEffects**: [`IUnecePersonalEffects`](IUnecePersonalEffects.md)[]

Personal effects of an individual member of the crew for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPersonalEffects

***

### crewQuantity?

> `optional` **crewQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of crew members for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewQuantity

***

### cycle?

> `optional` **cycle**: `string`

The cycle, as expressed as text, of this logistics transport movement, such as twice a day.

#### See

https://vocabulary.uncefact.org/cycle

***

### damageEvent?

> `optional` **damageEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A damage event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/damageEvent

***

### dangerousGoodsIndicator?

> `optional` **dangerousGoodsIndicator**: `boolean`

The indication of whether or not dangerous goods are carried for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/dangerousGoodsIndicator

***

### departureEvent?

> `optional` **departureEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

A departure event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/departureEvent

***

### documentaryInstructionsNotifiedParty?

> `optional` **documentaryInstructionsNotifiedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified of the documentary instructions for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/documentaryInstructionsNotifiedParty

***

### excessTransportService?

> `optional` **excessTransportService**: [`IUneceService`](IUneceService.md)[]

An excess transport service for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/excessTransportService

***

### firstArrivalEvent?

> `optional` **firstArrivalEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

The first arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/firstArrivalEvent

***

### iSPSRelatedDocument?

> `optional` **iSPSRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The International Ship and Port facility Security code (ISPS) document related to this transport movement.

#### See

https://vocabulary.uncefact.org/iSPSRelatedDocument

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number.

#### See

https://vocabulary.uncefact.org/identifier

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/information

***

### inspectionParty?

> `optional` **inspectionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/inspectionParty

***

### itineraryRoute?

> `optional` **itineraryRoute**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

A route in the itinerary of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/itineraryRoute

***

### liftingInstructionsRelatedDocument?

> `optional` **liftingInstructionsRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced lifting instructions document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/liftingInstructionsRelatedDocument

***

### loadingEvent?

> `optional` **loadingEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The loading event during which goods will be or have been loaded into or onto the means of transport used for this
logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingEvent

***

### loadingInspectionParty?

> `optional` **loadingInspectionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The loading inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionParty

***

### loadingInspectionSpecifiedInstructions?

> `optional` **loadingInspectionSpecifiedInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Loading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionSpecifiedInstructions

***

### logisticsTransportMovementStatusCode?

> `optional` **logisticsTransportMovementStatusCode**: [`UneceStatusCodeList`](../type-aliases/UneceStatusCodeList.md)[]

The code specifying a status for the logistics transport movement, such as estimated or final.

#### See

https://vocabulary.uncefact.org/logisticsTransportMovementStatusCode

***

### manifestOnboardIndicator?

> `optional` **manifestOnboardIndicator**: `boolean`

The indication of whether or not the manifest for this logistics transport movement is onboard.

#### See

https://vocabulary.uncefact.org/manifestOnboardIndicator

***

### manifestRelatedDocument?

> `optional` **manifestRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced manifest document related to this transport movement.

#### See

https://vocabulary.uncefact.org/manifestRelatedDocument

***

### masterResponsiblePerson?

> `optional` **masterResponsiblePerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)

The person legally responsible for the operation of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/masterResponsiblePerson

***

### mode?

> `optional` **mode**: `string`

The mode, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/mode

***

### nVOCCCarrierParty?

> `optional` **nVOCCCarrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A Non-Vessel Operating Common Carrier (NVOCC) carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/nVOCCCarrierParty

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/name

***

### notifiedParty?

> `optional` **notifiedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified about this logistics transport movement.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onboardInventory?

> `optional` **onboardInventory**: [`IUneceStoresItemInventory`](IUneceStoresItemInventory.md)[]

A stores inventory item held onboard for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardInventory

***

### onboardPerson?

> `optional` **onboardPerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A person onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPerson

***

### onboardPersonQuantity?

> `optional` **onboardPersonQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of onboard persons for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPersonQuantity

***

### packageQuantity?

> `optional` **packageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of packages in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### passengerListRelatedDocument?

> `optional` **passengerListRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The passenger list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerListRelatedDocument

***

### passengerNationalityCountry?

> `optional` **passengerNationalityCountry**: [`IUneceCountry`](IUneceCountry.md)[]

Passenger nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerNationalityCountry

***

### passengerQuantity?

> `optional` **passengerQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of passengers for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerQuantity

***

### pilotageExemptionId?

> `optional` **pilotageExemptionId**: `string`

The identifier of a pilotage exemption for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/pilotageExemptionId

***

### professionalMedicalPersonnelOnboardQuantity?

> `optional` **professionalMedicalPersonnelOnboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of professional medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/professionalMedicalPersonnelOnboardQuantity

***

### reasonCode?

> `optional` **reasonCode**: `string`

The code specifying the reason for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### reportedSecurityInformation?

> `optional` **reportedSecurityInformation**: `string`

Reported security information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedSecurityInformation

***

### reportedTransportationHealth?

> `optional` **reportedTransportationHealth**: [`IUneceTransportationHealth`](IUneceTransportationHealth.md)[]

MDH (Maritime Declaration of Health) transportation health information reported for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedTransportationHealth

***

### reportedTransportationWasteMaterial?

> `optional` **reportedTransportationWasteMaterial**: [`IUneceTransportationWasteMaterial`](IUneceTransportationWasteMaterial.md)[]

Transportation waste material reported for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedTransportationWasteMaterial

***

### sailingAdviceNotificationInformation?

> `optional` **sailingAdviceNotificationInformation**: `string`

Sailing advice notification information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/sailingAdviceNotificationInformation

***

### sailingAdviceNotifiedParty?

> `optional` **sailingAdviceNotifiedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified of the sailing advice for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/sailingAdviceNotifiedParty

***

### scheduledId?

> `optional` **scheduledId**: `string`

A unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number, as
stated in a schedule.

#### See

https://vocabulary.uncefact.org/scheduledId

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number differentiating this logistics transport movement from others in a set of transport movements.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### service?

> `optional` **service**: `string`

The service, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/service

***

### serviceCode?

> `optional` **serviceCode**: `string`

The code specifying the service of this logistics transport movement, such as regular, milk run or spot service.

#### See

https://vocabulary.uncefact.org/serviceCode

***

### shipToShipEvent?

> `optional` **shipToShipEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A ship to ship event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/shipToShipEvent

***

### specialSpecifiedInstructions?

> `optional` **specialSpecifiedInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Special transport instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specialSpecifiedInstructions

***

### specifiedEmission?

> `optional` **specifiedEmission**: [`IUneceEmission`](IUneceEmission.md)[]

A calculated emission specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedEmission

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedLogisticsStatus?

> `optional` **specifiedLogisticsStatus**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

A status specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsStatus

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedRiskAnalysisResult?

> `optional` **specifiedRiskAnalysisResult**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this transport movement.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTransportEvent?

> `optional` **specifiedTransportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport event specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedTransportEvent

***

### stage?

> `optional` **stage**: `string`

A stage, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stage

***

### stayId?

> `optional` **stayId**: `string`

The unique identifier of a stay in a port, airport or other place of service for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stayId

***

### stevedoreParty?

> `optional` **stevedoreParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A stevedore party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stevedoreParty

***

### terminalOperatorAssignedId?

> `optional` **terminalOperatorAssignedId**: `string`

A unique identifier for this logistics transport movement as assigned by a terminal operator.

#### See

https://vocabulary.uncefact.org/terminalOperatorAssignedId

***

### terminalOperatorParty?

> `optional` **terminalOperatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A terminal operator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/terminalOperatorParty

***

### towingVesselRelatedTransportMovement?

> `optional` **towingVesselRelatedTransportMovement**: `IUneceTransportMovement`[]

A towing vessel transport movement related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/towingVesselRelatedTransportMovement

***

### tradedParcelQuantity?

> `optional` **tradedParcelQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of traded parcels of cargo being transported in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/tradedParcelQuantity

***

### tradingConsolidatorAssignedId?

> `optional` **tradingConsolidatorAssignedId**: `string`

The unique identifier for this logistics transport movement as assigned by the trading consolidator.

#### See

https://vocabulary.uncefact.org/tradingConsolidatorAssignedId

***

### trainedMedicalPersonnelOnboardQuantity?

> `optional` **trainedMedicalPersonnelOnboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of trained medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/trainedMedicalPersonnelOnboardQuantity

***

### transportContractRelatedDocument?

> `optional` **transportContractRelatedDocument**: [`IUneceDocument`](IUneceDocument.md)

A transport contract document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportContractRelatedDocument

***

### transportEquipmentQuantity?

> `optional` **transportEquipmentQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of pieces of transport equipment for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportEquipmentQuantity

***

### transportMeansDirectionTransitDirectionCode?

> `optional` **transportMeansDirectionTransitDirectionCode**: [`UneceTransportMeansDirectionCodeList`](../type-aliases/UneceTransportMeansDirectionCodeList.md)[]

The code specifying the transit direction of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansDirectionTransitDirectionCode

***

### transportMeansSecurityOfficerPerson?

> `optional` **transportMeansSecurityOfficerPerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)

The officer responsible for the security of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansSecurityOfficerPerson

***

### transportModeCode?

> `optional` **transportModeCode**: [`UneceTransportModeCodeList`](../type-aliases/UneceTransportModeCodeList.md)[]

The code specifying the mode, such as by air, sea, rail, road or inland waterway, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportModeCode

***

### transportMovementStageCode?

> `optional` **transportMovementStageCode**: [`UneceTransportMovementStageCodeList`](../type-aliases/UneceTransportMovementStageCodeList.md)

The code specifying the stage of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMovementStageCode

***

### transportMovementType?

> `optional` **transportMovementType**: `string`

The type, as expressed as text, of the logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMovementType

***

### transportWasteSpecifiedInstructions?

> `optional` **transportWasteSpecifiedInstructions**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Transport waste disposal instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportWasteSpecifiedInstructions

***

### transshipmentIntermediateEvent?

> `optional` **transshipmentIntermediateEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transshipment intermediate event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transshipmentIntermediateEvent

***

### unloadingEvent?

> `optional` **unloadingEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
transport movement.

#### See

https://vocabulary.uncefact.org/unloadingEvent

***

### unloadingInspectionParty?

> `optional` **unloadingInspectionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The inspection party for the unloading of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionParty

***

### unloadingInspectionSpecifiedInstructions?

> `optional` **unloadingInspectionSpecifiedInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Unloading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionSpecifiedInstructions

***

### usedTransportMeans?

> `optional` **usedTransportMeans**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)

The means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/usedTransportMeans
