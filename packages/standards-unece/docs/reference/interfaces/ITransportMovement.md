# Interface: ITransportMovement

The conveyance (physical carriage) of goods or other objects used for logistics transport purposes.

## See

https://vocabulary.uncefact.org/TransportMovement

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

> **type**: `"TransportMovement"`

JSON-LD Type.

***

### administrativeMedicalPersonnelOnboardQuantity?

> `optional` **administrativeMedicalPersonnelOnboardQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of administrative medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/administrativeMedicalPersonnelOnboardQuantity

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IRegulatoryProcedure`](IRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A service charge, such as a freight charge, applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`ISpecifiedInspection`](ISpecifiedInspection.md)[]

A specified inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`ISustainabilityInspection`](ISustainabilityInspection.md)[]

A sustainability inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### arrivalEvent?

> `optional` **arrivalEvent**: [`ITransportEvent`](ITransportEvent.md)

An arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/arrivalEvent

***

### associatedConvoy?

> `optional` **associatedConvoy**: [`IConvoy`](IConvoy.md)

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

> `optional` **borderCrossingEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A border crossing event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/borderCrossingEvent

***

### callEvent?

> `optional` **callEvent**: [`ITransportEvent`](ITransportEvent.md)[]

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

> `optional` **carriedGoodsCharacteristic**: [`IGoodsCharacteristic`](IGoodsCharacteristic.md)[]

Material characteristics of goods carried during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carriedGoodsCharacteristic

***

### carriedInactiveTransportMeans?

> `optional` **carriedInactiveTransportMeans**: [`ITransportMeans`](ITransportMeans.md)[]

Details of transport means inactively carried during the transport movement, such as trucks on a Roll-On/Roll-Off (RORO)
ferry.

#### See

https://vocabulary.uncefact.org/carriedInactiveTransportMeans

***

### carrierAgentParty?

> `optional` **carrierAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The carrier agent trade party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carrierAgentParty

***

### carrierParty?

> `optional` **carrierParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **commodityConsolidatorAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The commodity consolidator agent party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorAgentParty

***

### commodityConsolidatorParty?

> `optional` **commodityConsolidatorParty**: [`ITradeParty`](ITradeParty.md)[]

The commodity consolidator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorParty

***

### consignmentQuantity?

> `optional` **consignmentQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of consignments in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consignmentQuantity

***

### consortiumCarrierParty?

> `optional` **consortiumCarrierParty**: [`ITradeParty`](ITradeParty.md)[]

A consortium carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consortiumCarrierParty

***

### crewListRelatedDocument?

> `optional` **crewListRelatedDocument**: [`IDocument`](IDocument.md)[]

The crew list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewListRelatedDocument

***

### crewNationalityCountry?

> `optional` **crewNationalityCountry**: [`ICountry`](ICountry.md)[]

Crew nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewNationalityCountry

***

### crewPerson?

> `optional` **crewPerson**: [`ITransportPerson`](ITransportPerson.md)[]

A person who is a member of the crew of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPerson

***

### crewPersonalEffects?

> `optional` **crewPersonalEffects**: [`IPersonalEffects`](IPersonalEffects.md)[]

Personal effects of an individual member of the crew for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPersonalEffects

***

### crewQuantity?

> `optional` **crewQuantity**: [`IQuantityType`](IQuantityType.md)

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

> `optional` **damageEvent**: [`ITransportEvent`](ITransportEvent.md)[]

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

> `optional` **departureEvent**: [`ITransportEvent`](ITransportEvent.md)

A departure event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/departureEvent

***

### documentaryInstructionsNotifiedParty?

> `optional` **documentaryInstructionsNotifiedParty**: [`ITradeParty`](ITradeParty.md)[]

A party to be notified of the documentary instructions for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/documentaryInstructionsNotifiedParty

***

### excessTransportService?

> `optional` **excessTransportService**: [`IService`](IService.md)[]

An excess transport service for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/excessTransportService

***

### firstArrivalEvent?

> `optional` **firstArrivalEvent**: [`ITransportEvent`](ITransportEvent.md)[]

The first arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/firstArrivalEvent

***

### iSPSRelatedDocument?

> `optional` **iSPSRelatedDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **inspectionParty**: [`ITradeParty`](ITradeParty.md)[]

An inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/inspectionParty

***

### itineraryRoute?

> `optional` **itineraryRoute**: [`ITransportRoute`](ITransportRoute.md)[]

A route in the itinerary of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/itineraryRoute

***

### liftingInstructionsRelatedDocument?

> `optional` **liftingInstructionsRelatedDocument**: [`IDocument`](IDocument.md)[]

A referenced lifting instructions document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/liftingInstructionsRelatedDocument

***

### loadingEvent?

> `optional` **loadingEvent**: [`ITransportEvent`](ITransportEvent.md)

The loading event during which goods will be or have been loaded into or onto the means of transport used for this
logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingEvent

***

### loadingInspectionParty?

> `optional` **loadingInspectionParty**: [`ITradeParty`](ITradeParty.md)[]

The loading inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionParty

***

### loadingInspectionSpecifiedInstructions?

> `optional` **loadingInspectionSpecifiedInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

Loading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionSpecifiedInstructions

***

### logisticsTransportMovementStatusCode?

> `optional` **logisticsTransportMovementStatusCode**: [`StatusCodeList`](../type-aliases/StatusCodeList.md)[]

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

> `optional` **manifestRelatedDocument**: [`IDocument`](IDocument.md)[]

A referenced manifest document related to this transport movement.

#### See

https://vocabulary.uncefact.org/manifestRelatedDocument

***

### masterResponsiblePerson?

> `optional` **masterResponsiblePerson**: [`ITransportPerson`](ITransportPerson.md)

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

> `optional` **nVOCCCarrierParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **notifiedParty**: [`ITradeParty`](ITradeParty.md)[]

A party to be notified about this logistics transport movement.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onboardInventory?

> `optional` **onboardInventory**: [`IStoresItemInventory`](IStoresItemInventory.md)[]

A stores inventory item held onboard for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardInventory

***

### onboardPerson?

> `optional` **onboardPerson**: [`ITransportPerson`](ITransportPerson.md)[]

A person onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPerson

***

### onboardPersonQuantity?

> `optional` **onboardPersonQuantity**: [`IQuantityType`](IQuantityType.md)

The number of onboard persons for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPersonQuantity

***

### packageQuantity?

> `optional` **packageQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of packages in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### passengerListRelatedDocument?

> `optional` **passengerListRelatedDocument**: [`IDocument`](IDocument.md)[]

The passenger list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerListRelatedDocument

***

### passengerNationalityCountry?

> `optional` **passengerNationalityCountry**: [`ICountry`](ICountry.md)[]

Passenger nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerNationalityCountry

***

### passengerQuantity?

> `optional` **passengerQuantity**: [`IQuantityType`](IQuantityType.md)

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

> `optional` **professionalMedicalPersonnelOnboardQuantity**: [`IQuantityType`](IQuantityType.md)[]

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

> `optional` **reportedTransportationHealth**: [`ITransportationHealth`](ITransportationHealth.md)[]

MDH (Maritime Declaration of Health) transportation health information reported for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedTransportationHealth

***

### reportedTransportationWasteMaterial?

> `optional` **reportedTransportationWasteMaterial**: [`ITransportationWasteMaterial`](ITransportationWasteMaterial.md)[]

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

> `optional` **sailingAdviceNotifiedParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **shipToShipEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A ship to ship event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/shipToShipEvent

***

### specialSpecifiedInstructions?

> `optional` **specialSpecifiedInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

Special transport instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specialSpecifiedInstructions

***

### specifiedEmission?

> `optional` **specifiedEmission**: [`IEmission`](IEmission.md)[]

A calculated emission specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedEmission

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IHandlingInstructions`](IHandlingInstructions.md)[]

Handling instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedLogisticsStatus?

> `optional` **specifiedLogisticsStatus**: [`ILogisticsStatus`](ILogisticsStatus.md)[]

A status specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsStatus

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IOrganizationalCertificate`](IOrganizationalCertificate.md)[]

An organizational certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedRiskAnalysisResult?

> `optional` **specifiedRiskAnalysisResult**: [`IRiskAnalysisResult`](IRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this transport movement.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTransportEvent?

> `optional` **specifiedTransportEvent**: [`ITransportEvent`](ITransportEvent.md)[]

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

> `optional` **stevedoreParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **terminalOperatorParty**: [`ITradeParty`](ITradeParty.md)[]

A terminal operator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/terminalOperatorParty

***

### towingVesselRelatedTransportMovement?

> `optional` **towingVesselRelatedTransportMovement**: `ITransportMovement`[]

A towing vessel transport movement related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/towingVesselRelatedTransportMovement

***

### tradedParcelQuantity?

> `optional` **tradedParcelQuantity**: [`IQuantityType`](IQuantityType.md)

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

> `optional` **trainedMedicalPersonnelOnboardQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of trained medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/trainedMedicalPersonnelOnboardQuantity

***

### transportContractRelatedDocument?

> `optional` **transportContractRelatedDocument**: [`IDocument`](IDocument.md)

A transport contract document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportContractRelatedDocument

***

### transportEquipmentQuantity?

> `optional` **transportEquipmentQuantity**: [`IQuantityType`](IQuantityType.md)

The number of pieces of transport equipment for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportEquipmentQuantity

***

### transportMeansDirectionTransitDirectionCode?

> `optional` **transportMeansDirectionTransitDirectionCode**: [`TransportMeansDirectionCodeList`](../type-aliases/TransportMeansDirectionCodeList.md)[]

The code specifying the transit direction of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansDirectionTransitDirectionCode

***

### transportMeansSecurityOfficerPerson?

> `optional` **transportMeansSecurityOfficerPerson**: [`ITransportPerson`](ITransportPerson.md)

The officer responsible for the security of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansSecurityOfficerPerson

***

### transportModeCode?

> `optional` **transportModeCode**: [`TransportModeCodeList`](../type-aliases/TransportModeCodeList.md)[]

The code specifying the mode, such as by air, sea, rail, road or inland waterway, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportModeCode

***

### transportMovementStageCode?

> `optional` **transportMovementStageCode**: [`TransportMovementStageCodeList`](../type-aliases/TransportMovementStageCodeList.md)

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

> `optional` **transportWasteSpecifiedInstructions**: [`IDisposalInstructions`](IDisposalInstructions.md)[]

Transport waste disposal instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportWasteSpecifiedInstructions

***

### transshipmentIntermediateEvent?

> `optional` **transshipmentIntermediateEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transshipment intermediate event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transshipmentIntermediateEvent

***

### unloadingEvent?

> `optional` **unloadingEvent**: [`ITransportEvent`](ITransportEvent.md)

The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
transport movement.

#### See

https://vocabulary.uncefact.org/unloadingEvent

***

### unloadingInspectionParty?

> `optional` **unloadingInspectionParty**: [`ITradeParty`](ITradeParty.md)[]

The inspection party for the unloading of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionParty

***

### unloadingInspectionSpecifiedInstructions?

> `optional` **unloadingInspectionSpecifiedInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

Unloading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionSpecifiedInstructions

***

### usedTransportMeans?

> `optional` **usedTransportMeans**: [`ILogisticsTransportMeans`](ILogisticsTransportMeans.md)

The means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/usedTransportMeans
