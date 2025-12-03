// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IConvoy } from "./IConvoy.js";
import type { ICountry } from "./ICountry.js";
import type { IDisposalInstructions } from "./IDisposalInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { IEmission } from "./IEmission.js";
import type { IGoodsCharacteristic } from "./IGoodsCharacteristic.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { ILogisticsStatus } from "./ILogisticsStatus.js";
import type { ILogisticsTransportMeans } from "./ILogisticsTransportMeans.js";
import type { IOrganizationalCertificate } from "./IOrganizationalCertificate.js";
import type { IPersonalEffects } from "./IPersonalEffects.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRegulatoryProcedure } from "./IRegulatoryProcedure.js";
import type { IRiskAnalysisResult } from "./IRiskAnalysisResult.js";
import type { IService } from "./IService.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { IStoresItemInventory } from "./IStoresItemInventory.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportationHealth } from "./ITransportationHealth.js";
import type { ITransportationWasteMaterial } from "./ITransportationWasteMaterial.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { ITransportInstructions } from "./ITransportInstructions.js";
import type { ITransportMeans } from "./ITransportMeans.js";
import type { ITransportPerson } from "./ITransportPerson.js";
import type { ITransportRoute } from "./ITransportRoute.js";
import type { StatusCodeList } from "../lists/statusCodeList.js";
import type { TransportMeansDirectionCodeList } from "../lists/transportMeansDirectionCodeList.js";
import type { TransportModeCodeList } from "../lists/transportModeCodeList.js";
import type { TransportMovementStageCodeList } from "../lists/transportMovementStageCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The conveyance (physical carriage) of goods or other objects used for logistics transport purposes.
 * @see https://vocabulary.uncefact.org/TransportMovement
 */
export interface ITransportMovement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportMovement;

	/**
	 * The number of administrative medical personnel onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/administrativeMedicalPersonnelOnboardQuantity
	 */
	administrativeMedicalPersonnelOnboardQuantity?: IQuantityType[];

	/**
	 * A cross-border regulatory procedure applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IRegulatoryProcedure[];

	/**
	 * A service charge, such as a freight charge, applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * A specified inspection applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * An arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/arrivalEvent
	 */
	arrivalEvent?: ITransportEvent;

	/**
	 * The convoy associated with this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/associatedConvoy
	 */
	associatedConvoy?: IConvoy;

	/**
	 * A date, time, date time or other date time value when this logistics transport movement crosses a border.
	 * @see https://vocabulary.uncefact.org/borderCrossingDateTime
	 */
	borderCrossingDateTime?: string;

	/**
	 * A border crossing event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/borderCrossingEvent
	 */
	borderCrossingEvent?: ITransportEvent[];

	/**
	 * A call event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/callEvent
	 */
	callEvent?: ITransportEvent[];

	/**
	 * A code specifying a call purpose for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/callPurposeCode
	 */
	callPurposeCode?: string;

	/**
	 * The textual description of the cargo for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/cargoDescription
	 */
	cargoDescription?: string;

	/**
	 * Material characteristics of goods carried during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carriedGoodsCharacteristic
	 */
	carriedGoodsCharacteristic?: IGoodsCharacteristic[];

	/**
	 * Details of transport means inactively carried during the transport movement, such as trucks on a Roll-On/Roll-Off (RORO)
	 * ferry.
	 * @see https://vocabulary.uncefact.org/carriedInactiveTransportMeans
	 */
	carriedInactiveTransportMeans?: ITransportMeans[];

	/**
	 * The carrier agent trade party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carrierAgentParty
	 */
	carrierAgentParty?: ITradeParty[];

	/**
	 * A carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: ITradeParty[];

	/**
	 * The date, time, date time, or other date time value by which cargo should be loaded onto the means of transport for the
	 * departure of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/closingDateTime
	 */
	closingDateTime?: string;

	/**
	 * The commodity consolidator agent party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/commodityConsolidatorAgentParty
	 */
	commodityConsolidatorAgentParty?: ITradeParty[];

	/**
	 * The commodity consolidator party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/commodityConsolidatorParty
	 */
	commodityConsolidatorParty?: ITradeParty[];

	/**
	 * The number of consignments in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/consignmentQuantity
	 */
	consignmentQuantity?: IQuantityType[];

	/**
	 * A consortium carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/consortiumCarrierParty
	 */
	consortiumCarrierParty?: ITradeParty[];

	/**
	 * The crew list document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewListRelatedDocument
	 */
	crewListRelatedDocument?: IDocument[];

	/**
	 * Crew nationality details for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewNationalityCountry
	 */
	crewNationalityCountry?: ICountry[];

	/**
	 * A person who is a member of the crew of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewPerson
	 */
	crewPerson?: ITransportPerson[];

	/**
	 * Personal effects of an individual member of the crew for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewPersonalEffects
	 */
	crewPersonalEffects?: IPersonalEffects[];

	/**
	 * The number of crew members for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewQuantity
	 */
	crewQuantity?: IQuantityType;

	/**
	 * The cycle, as expressed as text, of this logistics transport movement, such as twice a day.
	 * @see https://vocabulary.uncefact.org/cycle
	 */
	cycle?: string;

	/**
	 * A damage event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/damageEvent
	 */
	damageEvent?: ITransportEvent[];

	/**
	 * The indication of whether or not dangerous goods are carried for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsIndicator
	 */
	dangerousGoodsIndicator?: boolean;

	/**
	 * A departure event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/departureEvent
	 */
	departureEvent?: ITransportEvent;

	/**
	 * A party to be notified of the documentary instructions for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/documentaryInstructionsNotifiedParty
	 */
	documentaryInstructionsNotifiedParty?: ITradeParty[];

	/**
	 * An excess transport service for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/excessTransportService
	 */
	excessTransportService?: IService[];

	/**
	 * The first arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/firstArrivalEvent
	 */
	firstArrivalEvent?: ITransportEvent[];

	/**
	 * The International Ship and Port facility Security code (ISPS) document related to this transport movement.
	 * @see https://vocabulary.uncefact.org/iSPSRelatedDocument
	 */
	iSPSRelatedDocument?: IDocument[];

	/**
	 * The unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * An inspection party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/inspectionParty
	 */
	inspectionParty?: ITradeParty[];

	/**
	 * A route in the itinerary of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/itineraryRoute
	 */
	itineraryRoute?: ITransportRoute[];

	/**
	 * A referenced lifting instructions document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/liftingInstructionsRelatedDocument
	 */
	liftingInstructionsRelatedDocument?: IDocument[];

	/**
	 * The loading event during which goods will be or have been loaded into or onto the means of transport used for this
	 * logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingEvent
	 */
	loadingEvent?: ITransportEvent;

	/**
	 * The loading inspection party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingInspectionParty
	 */
	loadingInspectionParty?: ITradeParty[];

	/**
	 * Loading inspection instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingInspectionSpecifiedInstructions
	 */
	loadingInspectionSpecifiedInstructions?: ITransportInstructions[];

	/**
	 * The code specifying a status for the logistics transport movement, such as estimated or final.
	 * @see https://vocabulary.uncefact.org/logisticsTransportMovementStatusCode
	 */
	logisticsTransportMovementStatusCode?: StatusCodeList[];

	/**
	 * The indication of whether or not the manifest for this logistics transport movement is onboard.
	 * @see https://vocabulary.uncefact.org/manifestOnboardIndicator
	 */
	manifestOnboardIndicator?: boolean;

	/**
	 * A referenced manifest document related to this transport movement.
	 * @see https://vocabulary.uncefact.org/manifestRelatedDocument
	 */
	manifestRelatedDocument?: IDocument[];

	/**
	 * The person legally responsible for the operation of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/masterResponsiblePerson
	 */
	masterResponsiblePerson?: ITransportPerson;

	/**
	 * The mode, expressed as text, of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/mode
	 */
	mode?: string;

	/**
	 * A Non-Vessel Operating Common Carrier (NVOCC) carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/nVOCCCarrierParty
	 */
	nVOCCCarrierParty?: ITradeParty[];

	/**
	 * The name, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A party to be notified about this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/notifiedParty
	 */
	notifiedParty?: ITradeParty[];

	/**
	 * A stores inventory item held onboard for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardInventory
	 */
	onboardInventory?: IStoresItemInventory[];

	/**
	 * A person onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardPerson
	 */
	onboardPerson?: ITransportPerson[];

	/**
	 * The number of onboard persons for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardPersonQuantity
	 */
	onboardPersonQuantity?: IQuantityType;

	/**
	 * The number of packages in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IQuantityType[];

	/**
	 * The passenger list document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerListRelatedDocument
	 */
	passengerListRelatedDocument?: IDocument[];

	/**
	 * Passenger nationality details for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerNationalityCountry
	 */
	passengerNationalityCountry?: ICountry[];

	/**
	 * The number of passengers for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerQuantity
	 */
	passengerQuantity?: IQuantityType;

	/**
	 * The identifier of a pilotage exemption for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/pilotageExemptionId
	 */
	pilotageExemptionId?: string;

	/**
	 * The number of professional medical personnel onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/professionalMedicalPersonnelOnboardQuantity
	 */
	professionalMedicalPersonnelOnboardQuantity?: IQuantityType[];

	/**
	 * The code specifying the reason for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * Reported security information, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/reportedSecurityInformation
	 */
	reportedSecurityInformation?: string;

	/**
	 * MDH (Maritime Declaration of Health) transportation health information reported for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/reportedTransportationHealth
	 */
	reportedTransportationHealth?: ITransportationHealth[];

	/**
	 * Transportation waste material reported for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/reportedTransportationWasteMaterial
	 */
	reportedTransportationWasteMaterial?: ITransportationWasteMaterial[];

	/**
	 * Sailing advice notification information, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/sailingAdviceNotificationInformation
	 */
	sailingAdviceNotificationInformation?: string;

	/**
	 * A party to be notified of the sailing advice for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/sailingAdviceNotifiedParty
	 */
	sailingAdviceNotifiedParty?: ITradeParty[];

	/**
	 * A unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number, as
	 * stated in a schedule.
	 * @see https://vocabulary.uncefact.org/scheduledId
	 */
	scheduledId?: string;

	/**
	 * A sequence number differentiating this logistics transport movement from others in a set of transport movements.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The service, expressed as text, of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/service
	 */
	service?: string;

	/**
	 * The code specifying the service of this logistics transport movement, such as regular, milk run or spot service.
	 * @see https://vocabulary.uncefact.org/serviceCode
	 */
	serviceCode?: string;

	/**
	 * A ship to ship event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/shipToShipEvent
	 */
	shipToShipEvent?: ITransportEvent[];

	/**
	 * Special transport instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specialSpecifiedInstructions
	 */
	specialSpecifiedInstructions?: ITransportInstructions[];

	/**
	 * A calculated emission specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedEmission
	 */
	specifiedEmission?: IEmission[];

	/**
	 * Handling instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IHandlingInstructions[];

	/**
	 * A status specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsStatus
	 */
	specifiedLogisticsStatus?: ILogisticsStatus[];

	/**
	 * An organizational certificate specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IOrganizationalCertificate[];

	/**
	 * A process certificate specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IProcessCertificate[];

	/**
	 * A result of a logistics risk analysis calculation specified for this transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IRiskAnalysisResult[];

	/**
	 * A transport event specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedTransportEvent
	 */
	specifiedTransportEvent?: ITransportEvent[];

	/**
	 * A stage, expressed as text, of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stage
	 */
	stage?: string;

	/**
	 * The unique identifier of a stay in a port, airport or other place of service for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stayId
	 */
	stayId?: string;

	/**
	 * A stevedore party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stevedoreParty
	 */
	stevedoreParty?: ITradeParty[];

	/**
	 * A unique identifier for this logistics transport movement as assigned by a terminal operator.
	 * @see https://vocabulary.uncefact.org/terminalOperatorAssignedId
	 */
	terminalOperatorAssignedId?: string;

	/**
	 * A terminal operator party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/terminalOperatorParty
	 */
	terminalOperatorParty?: ITradeParty[];

	/**
	 * A towing vessel transport movement related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/towingVesselRelatedTransportMovement
	 */
	towingVesselRelatedTransportMovement?: ITransportMovement[];

	/**
	 * The number of traded parcels of cargo being transported in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/tradedParcelQuantity
	 */
	tradedParcelQuantity?: IQuantityType;

	/**
	 * The unique identifier for this logistics transport movement as assigned by the trading consolidator.
	 * @see https://vocabulary.uncefact.org/tradingConsolidatorAssignedId
	 */
	tradingConsolidatorAssignedId?: string;

	/**
	 * The number of trained medical personnel onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/trainedMedicalPersonnelOnboardQuantity
	 */
	trainedMedicalPersonnelOnboardQuantity?: IQuantityType[];

	/**
	 * A transport contract document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportContractRelatedDocument
	 */
	transportContractRelatedDocument?: IDocument;

	/**
	 * The number of pieces of transport equipment for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportEquipmentQuantity
	 */
	transportEquipmentQuantity?: IQuantityType;

	/**
	 * The code specifying the transit direction of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMeansDirectionTransitDirectionCode
	 */
	transportMeansDirectionTransitDirectionCode?: TransportMeansDirectionCodeList[];

	/**
	 * The officer responsible for the security of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMeansSecurityOfficerPerson
	 */
	transportMeansSecurityOfficerPerson?: ITransportPerson;

	/**
	 * The code specifying the mode, such as by air, sea, rail, road or inland waterway, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportModeCode
	 */
	transportModeCode?: TransportModeCodeList[];

	/**
	 * The code specifying the stage of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMovementStageCode
	 */
	transportMovementStageCode?: TransportMovementStageCodeList;

	/**
	 * The type, as expressed as text, of the logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMovementType
	 */
	transportMovementType?: string;

	/**
	 * Transport waste disposal instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportWasteSpecifiedInstructions
	 */
	transportWasteSpecifiedInstructions?: IDisposalInstructions[];

	/**
	 * A transshipment intermediate event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transshipmentIntermediateEvent
	 */
	transshipmentIntermediateEvent?: ITransportEvent[];

	/**
	 * The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
	 * transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingEvent
	 */
	unloadingEvent?: ITransportEvent;

	/**
	 * The inspection party for the unloading of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingInspectionParty
	 */
	unloadingInspectionParty?: ITradeParty[];

	/**
	 * Unloading inspection instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingInspectionSpecifiedInstructions
	 */
	unloadingInspectionSpecifiedInstructions?: ITransportInstructions[];

	/**
	 * The means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/usedTransportMeans
	 */
	usedTransportMeans?: ILogisticsTransportMeans;
}
