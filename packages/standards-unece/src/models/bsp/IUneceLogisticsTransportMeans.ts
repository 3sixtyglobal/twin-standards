// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceEmission } from "./IUneceEmission.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceIdentifiedFault } from "./IUneceIdentifiedFault.js";
import type { IUneceIOTDevice } from "./IUneceIOTDevice.js";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpatialDimension } from "./IUneceSpatialDimension.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportPerson } from "./IUneceTransportPerson.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceTransportMeansTypeCodeList } from "../lists/uneceTransportMeansTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The devices used to convey goods or other objects from place to place during logistics cargo movements.
 * @see https://vocabulary.uncefact.org/LogisticsTransportMeans
 */
export interface IUneceLogisticsTransportMeans extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsTransportMeans;

	/**
	 * The draught level measured at the aft end of this transport means.
	 * @see https://vocabulary.uncefact.org/aftDraughtLevelMeasure
	 */
	aftDraughtLevelMeasure?: IUneceMeasureType;

	/**
	 * An air draught level measure for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/airDraughtLevelMeasure
	 */
	airDraughtLevelMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * A service charge, such as a freight charge, applicable to this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge;

	/**
	 * A sustainability characteristic applicable to this logistics transport means.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

	/**
	 * The indication of whether or not there is an approved security plan onboard this logistics transport means.
	 * @see https://vocabulary.uncefact.org/approvedSecurityPlanOnboardIndicator
	 */
	approvedSecurityPlanOnboardIndicator?: boolean;

	/**
	 * An IOT device attached to this logistics transport means.
	 * @see https://vocabulary.uncefact.org/attachedIOTDevice
	 */
	attachedIOTDevice?: IUneceIOTDevice;

	/**
	 * A piece of logistics transport equipment attached to this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/attachedLogisticsTransportEquipment
	 */
	attachedLogisticsTransportEquipment?: IUneceLogisticsTransportEquipment;

	/**
	 * A call sign identifier for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/callSignId
	 */
	callSignId?: string;

	/**
	 * A certified level of pollution calculated for an emission from this logistics transport means.
	 * @see https://vocabulary.uncefact.org/certifiedEmission
	 */
	certifiedEmission?: IUneceEmission;

	/**
	 * A person who is a company security officer for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/companySecurityOfficerPerson
	 */
	companySecurityOfficerPerson?: IUneceTransportPerson;

	/**
	 * The code specifying the conference for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/conferenceCode
	 */
	conferenceCode?: string;

	/**
	 * The measure of the draught level of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/draughtLevelMeasure
	 */
	draughtLevelMeasure?: IUneceMeasureType;

	/**
	 * The indication of whether or not this logistics means of transport is accompanied by a driver.
	 * @see https://vocabulary.uncefact.org/driverAccompaniedIndicator
	 */
	driverAccompaniedIndicator?: boolean;

	/**
	 * The draught level measured at the fore end of this transport means.
	 * @see https://vocabulary.uncefact.org/forwardDraughtLevelMeasure
	 */
	forwardDraughtLevelMeasure?: IUneceMeasureType;

	/**
	 * The indication of whether or not there is a helipad on this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/helipadIndicator
	 */
	helipadIndicator?: boolean;

	/**
	 * The IMO (International Maritime Organization) identifier for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/iMOId
	 */
	iMOId?: string;

	/**
	 * The code specifying the International Ship and Port facility Security (ISPS) level assigned to this logistics means of
	 * transport.
	 * @see https://vocabulary.uncefact.org/iSPSSecurityLevelCode
	 */
	iSPSSecurityLevelCode?: string;

	/**
	 * The referenced ISSC (International Ship Security Certificate) document for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/iSSCDocument
	 */
	iSSCDocument?: IUneceDocument;

	/**
	 * The trade party authorized to issue the International Ship Security Certificate (ISSC) for this logistics means of
	 * transport.
	 * @see https://vocabulary.uncefact.org/iSSCIssuingAuthorityParty
	 */
	iSSCIssuingAuthorityParty?: IUneceTradeParty;

	/**
	 * An identifier of this logistics means of transport, such as the International Maritime Organization number of a vessel.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The measure of the length of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/linearUnitLengthMeasure
	 */
	linearUnitLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The measure of the external length required in a lane for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure
	 */
	linearUnitRequiredLaneLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * A measure of the width of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/linearUnitWidthMeasure
	 */
	linearUnitWidthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The measure of the cargo loaded onto this logistics means of transport, such as the number of barrels of oil or other
	 * quantity of breakbulk cargo.
	 * @see https://vocabulary.uncefact.org/loadedCargoMeasure
	 */
	loadedCargoMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the power type for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/logisticsTransportMeansPowerTypeCode
	 */
	logisticsTransportMeansPowerTypeCode?: string;

	/**
	 * The MMSI (Maritime Mobile Service Identity) identifier for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/mMSIId
	 */
	mMSIId?: string;

	/**
	 * The manoeuvring speed measured for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/manoeuvringSpeedMeasure
	 */
	manoeuvringSpeedMeasure?: IUneceMeasureType;

	/**
	 * The manufacturer party for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty;

	/**
	 * The manufacturing date, time, date time, or other date time value for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/manufacturingDateTime
	 */
	manufacturingDateTime?: string;

	/**
	 * A certificate applicable to a maritime logistics transport means.
	 * @see https://vocabulary.uncefact.org/maritimeApplicableCertificate
	 */
	maritimeApplicableCertificate?: IUneceSpecifiedCertificate;

	/**
	 * The name, expressed as text, of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The country of nationality of the operator of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/operatorNationalityCountry
	 */
	operatorNationalityCountry?: IUneceCountry;

	/**
	 * The party operating this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/operatorParty
	 */
	operatorParty?: IUneceTradeParty;

	/**
	 * The owner agent trade party for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/ownerAgentParty
	 */
	ownerAgentParty?: IUneceTradeParty;

	/**
	 * The party owning this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: IUneceTradeParty;

	/**
	 * The country of registration of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: IUneceCountry;

	/**
	 * A registration event of this logistics transport means.
	 * @see https://vocabulary.uncefact.org/registrationEvent
	 */
	registrationEvent?: IUneceTransportEvent;

	/**
	 * A transport service required for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/requiredService
	 */
	requiredService?: IUneceService;

	/**
	 * A sanitation control document for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/sanitationControlDocument
	 */
	sanitationControlDocument?: IUneceDocument;

	/**
	 * The indication of whether or not a Sanitation Control Exemption or Certificate re-inspection is required for this
	 * logistics transport means.
	 * @see https://vocabulary.uncefact.org/sanitationControlReInspectionRequiredIndicator
	 */
	sanitationControlReInspectionRequiredIndicator?: boolean;

	/**
	 * The sequence number differentiating this logistics transport means from others.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A trade party providing services for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/serviceProviderParty
	 */
	serviceProviderParty?: IUneceTradeParty;

	/**
	 * Spatial dimensions specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedDimension
	 */
	specifiedDimension?: IUneceSpatialDimension;

	/**
	 * A calculated emission specified for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/specifiedEmission
	 */
	specifiedEmission?: IUneceEmission;

	/**
	 * An identified defect specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedFault
	 */
	specifiedFault?: IUneceIdentifiedFault;

	/**
	 * Handling instructions specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IUneceHandlingInstructions;

	/**
	 * The type, expressed as text, of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/transportMeansType
	 */
	transportMeansType?: string;

	/**
	 * The code specifying the type of logistics means of transport (Reference UNECE Recommendation 28).
	 * @see https://vocabulary.uncefact.org/transportMeansTypeCode
	 */
	transportMeansTypeCode?: UneceTransportMeansTypeCodeList;

	/**
	 * The indication of whether or not there is a valid Sanitation Control Exemption or Certificate onboard this logistics
	 * transport means.
	 * @see https://vocabulary.uncefact.org/validSanitationControlIndicator
	 */
	validSanitationControlIndicator?: boolean;

	/**
	 * The indication of whether or not there is a waste reporting exemption for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/wasteReportingExemptionIndicator
	 */
	wasteReportingExemptionIndicator?: boolean;

	/**
	 * The measure of the total gross weight (mass) of all cargo loaded onto this logistics means of transport, including
	 * packaging but excluding any associated transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitCargoGrossWeightMeasure
	 */
	weightUnitCargoGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The deadweight tonnage measure for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/weightUnitDeadweightTonnageMeasure
	 */
	weightUnitDeadweightTonnageMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure of the gross weight (mass) of this logistics means of transport including cargo, such as the measure of the
	 * overall size of a vessel determined in accordance with the provisions of the International Convention on Tonnage
	 * Measurement of Ships, 1969.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure of the net weight (mass) of this logistics means of transport, such as the net tonnage of a vessel
	 * determined in accordance with the provisions of the International Convention on Tonnage Measurement of Ships, 1969.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure of the tare weight (mass) of this logistics means of transport which is the weight (mass) including
	 * permanent equipment but excluding goods and loose accessories.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IUneceWeightUnitMeasureType;
}
