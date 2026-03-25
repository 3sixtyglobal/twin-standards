# Interface: IUneceTransportMovement

The conveyance (physical carriage) of goods or other objects used for logistics transport purposes.

## See

https://vocabulary.uncefact.org/TransportMovement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportMovement"`

JSON-LD Type.

***

### administrativeMedicalPersonnelOnboardQuantity? {#administrativemedicalpersonnelonboardquantity}

> `optional` **administrativeMedicalPersonnelOnboardQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of administrative medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/administrativeMedicalPersonnelOnboardQuantity

***

### applicableRegulatoryProcedure? {#applicableregulatoryprocedure}

> `optional` **applicableRegulatoryProcedure?**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge? {#applicableservicecharge}

> `optional` **applicableServiceCharge?**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A service charge, such as a freight charge, applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection?**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection?**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### arrivalEvent? {#arrivalevent}

> `optional` **arrivalEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/arrivalEvent

***

### associatedConvoy? {#associatedconvoy}

> `optional` **associatedConvoy?**: [`IUneceConvoy`](IUneceConvoy.md)

The convoy associated with this logistics transport movement.

#### See

https://vocabulary.uncefact.org/associatedConvoy

***

### borderCrossingDateTime? {#bordercrossingdatetime}

> `optional` **borderCrossingDateTime?**: `string`

A date, time, date time or other date time value when this logistics transport movement crosses a border.

#### See

https://vocabulary.uncefact.org/borderCrossingDateTime

***

### borderCrossingEvent? {#bordercrossingevent}

> `optional` **borderCrossingEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A border crossing event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/borderCrossingEvent

***

### callEvent? {#callevent}

> `optional` **callEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A call event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/callEvent

***

### callPurposeCode? {#callpurposecode}

> `optional` **callPurposeCode?**: `string`

A code specifying a call purpose for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/callPurposeCode

***

### cargoDescription? {#cargodescription}

> `optional` **cargoDescription?**: `string`

The textual description of the cargo for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/cargoDescription

***

### carriedGoodsCharacteristic? {#carriedgoodscharacteristic}

> `optional` **carriedGoodsCharacteristic?**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

Material characteristics of goods carried during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carriedGoodsCharacteristic

***

### carriedInactiveTransportMeans? {#carriedinactivetransportmeans}

> `optional` **carriedInactiveTransportMeans?**: [`IUneceTransportMeans`](IUneceTransportMeans.md)[]

Details of transport means inactively carried during the transport movement, such as trucks on a Roll-On/Roll-Off (RORO)
ferry.

#### See

https://vocabulary.uncefact.org/carriedInactiveTransportMeans

***

### carrierAgentParty? {#carrieragentparty}

> `optional` **carrierAgentParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The carrier agent trade party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carrierAgentParty

***

### carrierParty? {#carrierparty}

> `optional` **carrierParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### closingDateTime? {#closingdatetime}

> `optional` **closingDateTime?**: `string`

The date, time, date time, or other date time value by which cargo should be loaded onto the means of transport for the
departure of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/closingDateTime

***

### commodityConsolidatorAgentParty? {#commodityconsolidatoragentparty}

> `optional` **commodityConsolidatorAgentParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The commodity consolidator agent party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorAgentParty

***

### commodityConsolidatorParty? {#commodityconsolidatorparty}

> `optional` **commodityConsolidatorParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The commodity consolidator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/commodityConsolidatorParty

***

### consignmentQuantity? {#consignmentquantity}

> `optional` **consignmentQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of consignments in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consignmentQuantity

***

### consortiumCarrierParty? {#consortiumcarrierparty}

> `optional` **consortiumCarrierParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A consortium carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/consortiumCarrierParty

***

### crewListRelatedDocument? {#crewlistrelateddocument}

> `optional` **crewListRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)

The crew list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewListRelatedDocument

***

### crewNationalityCountry? {#crewnationalitycountry}

> `optional` **crewNationalityCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

Crew nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewNationalityCountry

***

### crewPerson? {#crewperson}

> `optional` **crewPerson?**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A person who is a member of the crew of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPerson

***

### crewPersonalEffects? {#crewpersonaleffects}

> `optional` **crewPersonalEffects?**: [`IUnecePersonalEffects`](IUnecePersonalEffects.md)[]

Personal effects of an individual member of the crew for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewPersonalEffects

***

### crewQuantity? {#crewquantity}

> `optional` **crewQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of crew members for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/crewQuantity

***

### cycle? {#cycle}

> `optional` **cycle?**: `string`

The cycle, as expressed as text, of this logistics transport movement, such as twice a day.

#### See

https://vocabulary.uncefact.org/cycle

***

### damageEvent? {#damageevent}

> `optional` **damageEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A damage event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/damageEvent

***

### dangerousGoodsIndicator? {#dangerousgoodsindicator}

> `optional` **dangerousGoodsIndicator?**: `boolean`

The indication of whether or not dangerous goods are carried for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/dangerousGoodsIndicator

***

### departureEvent? {#departureevent}

> `optional` **departureEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A departure event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/departureEvent

***

### documentaryInstructionsNotifiedParty? {#documentaryinstructionsnotifiedparty}

> `optional` **documentaryInstructionsNotifiedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified of the documentary instructions for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/documentaryInstructionsNotifiedParty

***

### excessTransportService? {#excesstransportservice}

> `optional` **excessTransportService?**: [`IUneceService`](IUneceService.md)[]

An excess transport service for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/excessTransportService

***

### firstArrivalEvent? {#firstarrivalevent}

> `optional` **firstArrivalEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The first arrival event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/firstArrivalEvent

***

### iSPSRelatedDocument? {#ispsrelateddocument}

> `optional` **iSPSRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)

The International Ship and Port facility Security code (ISPS) document related to this transport movement.

#### See

https://vocabulary.uncefact.org/iSPSRelatedDocument

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number.

#### See

https://vocabulary.uncefact.org/identifier

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/information

***

### inspectionParty? {#inspectionparty}

> `optional` **inspectionParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/inspectionParty

***

### itineraryRoute? {#itineraryroute}

> `optional` **itineraryRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

A route in the itinerary of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/itineraryRoute

***

### liftingInstructionsRelatedDocument? {#liftinginstructionsrelateddocument}

> `optional` **liftingInstructionsRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced lifting instructions document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/liftingInstructionsRelatedDocument

***

### loadingEvent? {#loadingevent}

> `optional` **loadingEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The loading event during which goods will be or have been loaded into or onto the means of transport used for this
logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingEvent

***

### loadingInspectionParty? {#loadinginspectionparty}

> `optional` **loadingInspectionParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The loading inspection party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionParty

***

### loadingInspectionSpecifiedInstructions? {#loadinginspectionspecifiedinstructions}

> `optional` **loadingInspectionSpecifiedInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)

Loading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/loadingInspectionSpecifiedInstructions

***

### logisticsTransportMovementStatusCode? {#logisticstransportmovementstatuscode}

> `optional` **logisticsTransportMovementStatusCode?**: [`UneceStatusCodeList`](../type-aliases/UneceStatusCodeList.md)

The code specifying a status for the logistics transport movement, such as estimated or final.

#### See

https://vocabulary.uncefact.org/logisticsTransportMovementStatusCode

***

### manifestOnboardIndicator? {#manifestonboardindicator}

> `optional` **manifestOnboardIndicator?**: `boolean`

The indication of whether or not the manifest for this logistics transport movement is onboard.

#### See

https://vocabulary.uncefact.org/manifestOnboardIndicator

***

### manifestRelatedDocument? {#manifestrelateddocument}

> `optional` **manifestRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced manifest document related to this transport movement.

#### See

https://vocabulary.uncefact.org/manifestRelatedDocument

***

### masterResponsiblePerson? {#masterresponsibleperson}

> `optional` **masterResponsiblePerson?**: [`IUneceTransportPerson`](IUneceTransportPerson.md)

The person legally responsible for the operation of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/masterResponsiblePerson

***

### mode? {#mode}

> `optional` **mode?**: `string`

The mode, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/mode

***

### nVOCCCarrierParty? {#nvocccarrierparty}

> `optional` **nVOCCCarrierParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A Non-Vessel Operating Common Carrier (NVOCC) carrier party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/nVOCCCarrierParty

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/name

***

### notifiedParty? {#notifiedparty}

> `optional` **notifiedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified about this logistics transport movement.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onboardInventory? {#onboardinventory}

> `optional` **onboardInventory?**: [`IUneceStoresItemInventory`](IUneceStoresItemInventory.md)[]

A stores inventory item held onboard for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardInventory

***

### onboardPerson? {#onboardperson}

> `optional` **onboardPerson?**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A person onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPerson

***

### onboardPersonQuantity? {#onboardpersonquantity}

> `optional` **onboardPersonQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of onboard persons for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/onboardPersonQuantity

***

### packageQuantity? {#packagequantity}

> `optional` **packageQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### passengerListRelatedDocument? {#passengerlistrelateddocument}

> `optional` **passengerListRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)

The passenger list document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerListRelatedDocument

***

### passengerNationalityCountry? {#passengernationalitycountry}

> `optional` **passengerNationalityCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

Passenger nationality details for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerNationalityCountry

***

### passengerQuantity? {#passengerquantity}

> `optional` **passengerQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of passengers for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/passengerQuantity

***

### pilotageExemptionId? {#pilotageexemptionid}

> `optional` **pilotageExemptionId?**: `string` \| `IJsonLdValueObject`

The identifier of a pilotage exemption for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/pilotageExemptionId

***

### professionalMedicalPersonnelOnboardQuantity? {#professionalmedicalpersonnelonboardquantity}

> `optional` **professionalMedicalPersonnelOnboardQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of professional medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/professionalMedicalPersonnelOnboardQuantity

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode?**: `string`

The code specifying the reason for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### reportedSecurityInformation? {#reportedsecurityinformation}

> `optional` **reportedSecurityInformation?**: `string`

Reported security information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedSecurityInformation

***

### reportedTransportationHealth? {#reportedtransportationhealth}

> `optional` **reportedTransportationHealth?**: [`IUneceTransportationHealth`](IUneceTransportationHealth.md)[]

MDH (Maritime Declaration of Health) transportation health information reported for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedTransportationHealth

***

### reportedTransportationWasteMaterial? {#reportedtransportationwastematerial}

> `optional` **reportedTransportationWasteMaterial?**: [`IUneceTransportationWasteMaterial`](IUneceTransportationWasteMaterial.md)[]

Transportation waste material reported for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/reportedTransportationWasteMaterial

***

### sailingAdviceNotificationInformation? {#sailingadvicenotificationinformation}

> `optional` **sailingAdviceNotificationInformation?**: `string`

Sailing advice notification information, expressed as text, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/sailingAdviceNotificationInformation

***

### sailingAdviceNotifiedParty? {#sailingadvicenotifiedparty}

> `optional` **sailingAdviceNotifiedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party to be notified of the sailing advice for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/sailingAdviceNotifiedParty

***

### scheduledId? {#scheduledid}

> `optional` **scheduledId?**: `string` \| `IJsonLdValueObject`

A unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number, as
stated in a schedule.

#### See

https://vocabulary.uncefact.org/scheduledId

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

A sequence number differentiating this logistics transport movement from others in a set of transport movements.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### service? {#service}

> `optional` **service?**: `string`

The service, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/service

***

### serviceCode? {#servicecode}

> `optional` **serviceCode?**: `string`

The code specifying the service of this logistics transport movement, such as regular, milk run or spot service.

#### See

https://vocabulary.uncefact.org/serviceCode

***

### shipToShipEvent? {#shiptoshipevent}

> `optional` **shipToShipEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A ship to ship event for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/shipToShipEvent

***

### specialSpecifiedInstructions? {#specialspecifiedinstructions}

> `optional` **specialSpecifiedInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Special transport instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specialSpecifiedInstructions

***

### specifiedEmission? {#specifiedemission}

> `optional` **specifiedEmission?**: [`IUneceEmission`](IUneceEmission.md)[]

A calculated emission specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedEmission

***

### specifiedHandlingInstructions? {#specifiedhandlinginstructions}

> `optional` **specifiedHandlingInstructions?**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedLogisticsStatus? {#specifiedlogisticsstatus}

> `optional` **specifiedLogisticsStatus?**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

A status specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsStatus

***

### specifiedOrganizationalCertificate? {#specifiedorganizationalcertificate}

> `optional` **specifiedOrganizationalCertificate?**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate? {#specifiedprocesscertificate}

> `optional` **specifiedProcessCertificate?**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedRiskAnalysisResult? {#specifiedriskanalysisresult}

> `optional` **specifiedRiskAnalysisResult?**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this transport movement.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTransportEvent? {#specifiedtransportevent}

> `optional` **specifiedTransportEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport event specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/specifiedTransportEvent

***

### stage? {#stage}

> `optional` **stage?**: `string`

A stage, expressed as text, of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stage

***

### stayId? {#stayid}

> `optional` **stayId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a stay in a port, airport or other place of service for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stayId

***

### stevedoreParty? {#stevedoreparty}

> `optional` **stevedoreParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A stevedore party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/stevedoreParty

***

### terminalOperatorAssignedId? {#terminaloperatorassignedid}

> `optional` **terminalOperatorAssignedId?**: `string` \| `IJsonLdValueObject`

A unique identifier for this logistics transport movement as assigned by a terminal operator.

#### See

https://vocabulary.uncefact.org/terminalOperatorAssignedId

***

### terminalOperatorParty? {#terminaloperatorparty}

> `optional` **terminalOperatorParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A terminal operator party for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/terminalOperatorParty

***

### towingVesselRelatedTransportMovement? {#towingvesselrelatedtransportmovement}

> `optional` **towingVesselRelatedTransportMovement?**: `IUneceTransportMovement`[]

A towing vessel transport movement related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/towingVesselRelatedTransportMovement

***

### tradedParcelQuantity? {#tradedparcelquantity}

> `optional` **tradedParcelQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of traded parcels of cargo being transported in this logistics transport movement.

#### See

https://vocabulary.uncefact.org/tradedParcelQuantity

***

### tradingConsolidatorAssignedId? {#tradingconsolidatorassignedid}

> `optional` **tradingConsolidatorAssignedId?**: `string` \| `IJsonLdValueObject`

The unique identifier for this logistics transport movement as assigned by the trading consolidator.

#### See

https://vocabulary.uncefact.org/tradingConsolidatorAssignedId

***

### trainedMedicalPersonnelOnboardQuantity? {#trainedmedicalpersonnelonboardquantity}

> `optional` **trainedMedicalPersonnelOnboardQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of trained medical personnel onboard this logistics transport movement.

#### See

https://vocabulary.uncefact.org/trainedMedicalPersonnelOnboardQuantity

***

### transportContractRelatedDocument? {#transportcontractrelateddocument}

> `optional` **transportContractRelatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A transport contract document related to this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportContractRelatedDocument

***

### transportEquipmentQuantity? {#transportequipmentquantity}

> `optional` **transportEquipmentQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of pieces of transport equipment for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportEquipmentQuantity

***

### transportMeansDirectionTransitDirectionCode? {#transportmeansdirectiontransitdirectioncode}

> `optional` **transportMeansDirectionTransitDirectionCode?**: `string`

The code specifying the transit direction of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansDirectionTransitDirectionCode

***

### transportMeansSecurityOfficerPerson? {#transportmeanssecurityofficerperson}

> `optional` **transportMeansSecurityOfficerPerson?**: [`IUneceTransportPerson`](IUneceTransportPerson.md)

The officer responsible for the security of the means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMeansSecurityOfficerPerson

***

### transportModeCode? {#transportmodecode}

> `optional` **transportModeCode?**: [`UneceTransportModeCodeList`](../type-aliases/UneceTransportModeCodeList.md)

The code specifying the mode, such as by air, sea, rail, road or inland waterway, for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportModeCode

***

### transportMovementStageCode? {#transportmovementstagecode}

> `optional` **transportMovementStageCode?**: [`UneceTransportMovementStageCodeList`](../type-aliases/UneceTransportMovementStageCodeList.md)

The code specifying the stage of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMovementStageCode

***

### transportMovementType? {#transportmovementtype}

> `optional` **transportMovementType?**: `string`

The type, as expressed as text, of the logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportMovementType

***

### transportWasteSpecifiedInstructions? {#transportwastespecifiedinstructions}

> `optional` **transportWasteSpecifiedInstructions?**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Transport waste disposal instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transportWasteSpecifiedInstructions

***

### transshipmentIntermediateEvent? {#transshipmentintermediateevent}

> `optional` **transshipmentIntermediateEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transshipment intermediate event during this logistics transport movement.

#### See

https://vocabulary.uncefact.org/transshipmentIntermediateEvent

***

### unloadingEvent? {#unloadingevent}

> `optional` **unloadingEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
transport movement.

#### See

https://vocabulary.uncefact.org/unloadingEvent

***

### unloadingInspectionParty? {#unloadinginspectionparty}

> `optional` **unloadingInspectionParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The inspection party for the unloading of this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionParty

***

### unloadingInspectionSpecifiedInstructions? {#unloadinginspectionspecifiedinstructions}

> `optional` **unloadingInspectionSpecifiedInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Unloading inspection instructions specified for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/unloadingInspectionSpecifiedInstructions

***

### usedTransportMeans? {#usedtransportmeans}

> `optional` **usedTransportMeans?**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)

The means of transport used for this logistics transport movement.

#### See

https://vocabulary.uncefact.org/usedTransportMeans
