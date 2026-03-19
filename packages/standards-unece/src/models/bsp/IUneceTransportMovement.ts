// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceConvoy } from "./IUneceConvoy.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceEmission } from "./IUneceEmission.js";
import type { IUneceGoodsCharacteristic } from "./IUneceGoodsCharacteristic.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceLogisticsStatus } from "./IUneceLogisticsStatus.js";
import type { IUneceLogisticsTransportMeans } from "./IUneceLogisticsTransportMeans.js";
import type { IUneceOrganizationalCertificate } from "./IUneceOrganizationalCertificate.js";
import type { IUnecePersonalEffects } from "./IUnecePersonalEffects.js";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRegulatoryProcedure } from "./IUneceRegulatoryProcedure.js";
import type { IUneceRiskAnalysisResult } from "./IUneceRiskAnalysisResult.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceStoresItemInventory } from "./IUneceStoresItemInventory.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportationHealth } from "./IUneceTransportationHealth.js";
import type { IUneceTransportationWasteMaterial } from "./IUneceTransportationWasteMaterial.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { IUneceTransportMeans } from "./IUneceTransportMeans.js";
import type { IUneceTransportPerson } from "./IUneceTransportPerson.js";
import type { IUneceTransportRoute } from "./IUneceTransportRoute.js";
import type { UneceStatusCodeList } from "../lists/uneceStatusCodeList.js";
import type { UneceTransportMeansDirectionCodeList } from "../lists/uneceTransportMeansDirectionCodeList.js";
import type { UneceTransportModeCodeList } from "../lists/uneceTransportModeCodeList.js";
import type { UneceTransportMovementStageCodeList } from "../lists/uneceTransportMovementStageCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The conveyance (physical carriage) of goods or other objects used for logistics transport purposes.
 * @see https://vocabulary.uncefact.org/TransportMovement
 */
export interface IUneceTransportMovement {
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
	administrativeMedicalPersonnelOnboardQuantity?: IUneceQuantityType;

	/**
	 * A cross-border regulatory procedure applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IUneceRegulatoryProcedure[];

	/**
	 * A service charge, such as a freight charge, applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * A specified inspection applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * An arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/arrivalEvent
	 */
	arrivalEvent?: IUneceTransportEvent[];

	/**
	 * The convoy associated with this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/associatedConvoy
	 */
	associatedConvoy?: IUneceConvoy;

	/**
	 * A date, time, date time or other date time value when this logistics transport movement crosses a border.
	 * @see https://vocabulary.uncefact.org/borderCrossingDateTime
	 * @json-schema format:date-time
	 */
	borderCrossingDateTime?: string;

	/**
	 * A border crossing event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/borderCrossingEvent
	 */
	borderCrossingEvent?: IUneceTransportEvent[];

	/**
	 * A call event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/callEvent
	 */
	callEvent?: IUneceTransportEvent[];

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
	carriedGoodsCharacteristic?: IUneceGoodsCharacteristic[];

	/**
	 * Details of transport means inactively carried during the transport movement, such as trucks on a Roll-On/Roll-Off (RORO)
	 * ferry.
	 * @see https://vocabulary.uncefact.org/carriedInactiveTransportMeans
	 */
	carriedInactiveTransportMeans?: IUneceTransportMeans[];

	/**
	 * The carrier agent trade party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carrierAgentParty
	 */
	carrierAgentParty?: IUneceTradeParty;

	/**
	 * A carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: IUneceTradeParty[];

	/**
	 * The date, time, date time, or other date time value by which cargo should be loaded onto the means of transport for the
	 * departure of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/closingDateTime
	 * @json-schema format:date-time
	 */
	closingDateTime?: string;

	/**
	 * The commodity consolidator agent party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/commodityConsolidatorAgentParty
	 */
	commodityConsolidatorAgentParty?: IUneceTradeParty;

	/**
	 * The commodity consolidator party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/commodityConsolidatorParty
	 */
	commodityConsolidatorParty?: IUneceTradeParty;

	/**
	 * The number of consignments in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/consignmentQuantity
	 */
	consignmentQuantity?: IUneceQuantityType;

	/**
	 * A consortium carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/consortiumCarrierParty
	 */
	consortiumCarrierParty?: IUneceTradeParty[];

	/**
	 * The crew list document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewListRelatedDocument
	 */
	crewListRelatedDocument?: IUneceDocument;

	/**
	 * Crew nationality details for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewNationalityCountry
	 */
	crewNationalityCountry?: IUneceCountry[];

	/**
	 * A person who is a member of the crew of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewPerson
	 */
	crewPerson?: IUneceTransportPerson[];

	/**
	 * Personal effects of an individual member of the crew for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewPersonalEffects
	 */
	crewPersonalEffects?: IUnecePersonalEffects[];

	/**
	 * The number of crew members for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewQuantity
	 */
	crewQuantity?: IUneceQuantityType;

	/**
	 * The cycle, as expressed as text, of this logistics transport movement, such as twice a day.
	 * @see https://vocabulary.uncefact.org/cycle
	 */
	cycle?: string;

	/**
	 * A damage event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/damageEvent
	 */
	damageEvent?: IUneceTransportEvent[];

	/**
	 * The indication of whether or not dangerous goods are carried for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsIndicator
	 */
	dangerousGoodsIndicator?: boolean;

	/**
	 * A departure event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/departureEvent
	 */
	departureEvent?: IUneceTransportEvent[];

	/**
	 * A party to be notified of the documentary instructions for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/documentaryInstructionsNotifiedParty
	 */
	documentaryInstructionsNotifiedParty?: IUneceTradeParty[];

	/**
	 * An excess transport service for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/excessTransportService
	 */
	excessTransportService?: IUneceService[];

	/**
	 * The first arrival event for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/firstArrivalEvent
	 */
	firstArrivalEvent?: IUneceTransportEvent;

	/**
	 * The International Ship and Port facility Security code (ISPS) document related to this transport movement.
	 * @see https://vocabulary.uncefact.org/iSPSRelatedDocument
	 */
	iSPSRelatedDocument?: IUneceDocument;

	/**
	 * The unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * Information, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * An inspection party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/inspectionParty
	 */
	inspectionParty?: IUneceTradeParty[];

	/**
	 * A route in the itinerary of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/itineraryRoute
	 */
	itineraryRoute?: IUneceTransportRoute[];

	/**
	 * A referenced lifting instructions document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/liftingInstructionsRelatedDocument
	 */
	liftingInstructionsRelatedDocument?: IUneceDocument[];

	/**
	 * The loading event during which goods will be or have been loaded into or onto the means of transport used for this
	 * logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingEvent
	 */
	loadingEvent?: IUneceTransportEvent;

	/**
	 * The loading inspection party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingInspectionParty
	 */
	loadingInspectionParty?: IUneceTradeParty;

	/**
	 * Loading inspection instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/loadingInspectionSpecifiedInstructions
	 */
	loadingInspectionSpecifiedInstructions?: IUneceTransportInstructions;

	/**
	 * The code specifying a status for the logistics transport movement, such as estimated or final.
	 * @see https://vocabulary.uncefact.org/logisticsTransportMovementStatusCode
	 */
	logisticsTransportMovementStatusCode?: UneceStatusCodeList;

	/**
	 * The indication of whether or not the manifest for this logistics transport movement is onboard.
	 * @see https://vocabulary.uncefact.org/manifestOnboardIndicator
	 */
	manifestOnboardIndicator?: boolean;

	/**
	 * A referenced manifest document related to this transport movement.
	 * @see https://vocabulary.uncefact.org/manifestRelatedDocument
	 */
	manifestRelatedDocument?: IUneceDocument[];

	/**
	 * The person legally responsible for the operation of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/masterResponsiblePerson
	 */
	masterResponsiblePerson?: IUneceTransportPerson;

	/**
	 * The mode, expressed as text, of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/mode
	 */
	mode?: string;

	/**
	 * A Non-Vessel Operating Common Carrier (NVOCC) carrier party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/nVOCCCarrierParty
	 */
	nVOCCCarrierParty?: IUneceTradeParty[];

	/**
	 * The name, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A party to be notified about this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/notifiedParty
	 */
	notifiedParty?: IUneceTradeParty[];

	/**
	 * A stores inventory item held onboard for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardInventory
	 */
	onboardInventory?: IUneceStoresItemInventory[];

	/**
	 * A person onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardPerson
	 */
	onboardPerson?: IUneceTransportPerson[];

	/**
	 * The number of onboard persons for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/onboardPersonQuantity
	 */
	onboardPersonQuantity?: IUneceQuantityType;

	/**
	 * The number of packages in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IUneceQuantityType;

	/**
	 * The passenger list document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerListRelatedDocument
	 */
	passengerListRelatedDocument?: IUneceDocument;

	/**
	 * Passenger nationality details for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerNationalityCountry
	 */
	passengerNationalityCountry?: IUneceCountry[];

	/**
	 * The number of passengers for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/passengerQuantity
	 */
	passengerQuantity?: IUneceQuantityType;

	/**
	 * The identifier of a pilotage exemption for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/pilotageExemptionId
	 */
	pilotageExemptionId?: string | IJsonLdValueObject;

	/**
	 * The number of professional medical personnel onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/professionalMedicalPersonnelOnboardQuantity
	 */
	professionalMedicalPersonnelOnboardQuantity?: IUneceQuantityType;

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
	reportedTransportationHealth?: IUneceTransportationHealth[];

	/**
	 * Transportation waste material reported for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/reportedTransportationWasteMaterial
	 */
	reportedTransportationWasteMaterial?: IUneceTransportationWasteMaterial[];

	/**
	 * Sailing advice notification information, expressed as text, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/sailingAdviceNotificationInformation
	 */
	sailingAdviceNotificationInformation?: string;

	/**
	 * A party to be notified of the sailing advice for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/sailingAdviceNotifiedParty
	 */
	sailingAdviceNotifiedParty?: IUneceTradeParty[];

	/**
	 * A unique identifier for this logistics transport movement, such as a voyage number, flight number, or trip number, as
	 * stated in a schedule.
	 * @see https://vocabulary.uncefact.org/scheduledId
	 */
	scheduledId?: string | IJsonLdValueObject;

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
	shipToShipEvent?: IUneceTransportEvent[];

	/**
	 * Special transport instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specialSpecifiedInstructions
	 */
	specialSpecifiedInstructions?: IUneceTransportInstructions[];

	/**
	 * A calculated emission specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedEmission
	 */
	specifiedEmission?: IUneceEmission[];

	/**
	 * Handling instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IUneceHandlingInstructions[];

	/**
	 * A status specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsStatus
	 */
	specifiedLogisticsStatus?: IUneceLogisticsStatus[];

	/**
	 * An organizational certificate specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedOrganizationalCertificate
	 */
	specifiedOrganizationalCertificate?: IUneceOrganizationalCertificate[];

	/**
	 * A process certificate specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A result of a logistics risk analysis calculation specified for this transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IUneceRiskAnalysisResult[];

	/**
	 * A transport event specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/specifiedTransportEvent
	 */
	specifiedTransportEvent?: IUneceTransportEvent[];

	/**
	 * A stage, expressed as text, of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stage
	 */
	stage?: string;

	/**
	 * The unique identifier of a stay in a port, airport or other place of service for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stayId
	 */
	stayId?: string | IJsonLdValueObject;

	/**
	 * A stevedore party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/stevedoreParty
	 */
	stevedoreParty?: IUneceTradeParty[];

	/**
	 * A unique identifier for this logistics transport movement as assigned by a terminal operator.
	 * @see https://vocabulary.uncefact.org/terminalOperatorAssignedId
	 */
	terminalOperatorAssignedId?: string | IJsonLdValueObject;

	/**
	 * A terminal operator party for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/terminalOperatorParty
	 */
	terminalOperatorParty?: IUneceTradeParty[];

	/**
	 * A towing vessel transport movement related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/towingVesselRelatedTransportMovement
	 */
	towingVesselRelatedTransportMovement?: IUneceTransportMovement[];

	/**
	 * The number of traded parcels of cargo being transported in this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/tradedParcelQuantity
	 */
	tradedParcelQuantity?: IUneceQuantityType;

	/**
	 * The unique identifier for this logistics transport movement as assigned by the trading consolidator.
	 * @see https://vocabulary.uncefact.org/tradingConsolidatorAssignedId
	 */
	tradingConsolidatorAssignedId?: string | IJsonLdValueObject;

	/**
	 * The number of trained medical personnel onboard this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/trainedMedicalPersonnelOnboardQuantity
	 */
	trainedMedicalPersonnelOnboardQuantity?: IUneceQuantityType;

	/**
	 * A transport contract document related to this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportContractRelatedDocument
	 */
	transportContractRelatedDocument?: IUneceDocument[];

	/**
	 * The number of pieces of transport equipment for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportEquipmentQuantity
	 */
	transportEquipmentQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the transit direction of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMeansDirectionTransitDirectionCode
	 */
	transportMeansDirectionTransitDirectionCode?: UneceTransportMeansDirectionCodeList;

	/**
	 * The officer responsible for the security of the means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMeansSecurityOfficerPerson
	 */
	transportMeansSecurityOfficerPerson?: IUneceTransportPerson;

	/**
	 * The code specifying the mode, such as by air, sea, rail, road or inland waterway, for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportModeCode
	 */
	transportModeCode?: UneceTransportModeCodeList;

	/**
	 * The code specifying the stage of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMovementStageCode
	 */
	transportMovementStageCode?: UneceTransportMovementStageCodeList;

	/**
	 * The type, as expressed as text, of the logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportMovementType
	 */
	transportMovementType?: string;

	/**
	 * Transport waste disposal instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transportWasteSpecifiedInstructions
	 */
	transportWasteSpecifiedInstructions?: IUneceDisposalInstructions[];

	/**
	 * A transshipment intermediate event during this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/transshipmentIntermediateEvent
	 */
	transshipmentIntermediateEvent?: IUneceTransportEvent[];

	/**
	 * The unloading event during which goods will be or have been unloaded from the means of transport used for this logistics
	 * transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingEvent
	 */
	unloadingEvent?: IUneceTransportEvent;

	/**
	 * The inspection party for the unloading of this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingInspectionParty
	 */
	unloadingInspectionParty?: IUneceTradeParty;

	/**
	 * Unloading inspection instructions specified for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/unloadingInspectionSpecifiedInstructions
	 */
	unloadingInspectionSpecifiedInstructions?: IUneceTransportInstructions[];

	/**
	 * The means of transport used for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/usedTransportMeans
	 */
	usedTransportMeans?: IUneceLogisticsTransportMeans;
}
