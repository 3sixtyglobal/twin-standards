// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICountry } from "./ICountry.js";
import type { IDocument } from "./IDocument.js";
import type { IEmission } from "./IEmission.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { IIdentifiedFault } from "./IIdentifiedFault.js";
import type { IIOTDevice } from "./IIOTDevice.js";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IService } from "./IService.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { ITransportPerson } from "./ITransportPerson.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { TransportMeansTypeCodeList } from "../lists/transportMeansTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The devices used to convey goods or other objects from place to place during logistics cargo movements.
 * @see https://vocabulary.uncefact.org/LogisticsTransportMeans
 */
export interface ILogisticsTransportMeans extends IJsonLdNodeObject {
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
	aftDraughtLevelMeasure?: IMeasureType[];

	/**
	 * An air draught level measure for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/airDraughtLevelMeasure
	 */
	airDraughtLevelMeasure?: ILinearUnitMeasureType[];

	/**
	 * A service charge, such as a freight charge, applicable to this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * A sustainability characteristic applicable to this logistics transport means.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * The indication of whether or not there is an approved security plan onboard this logistics transport means.
	 * @see https://vocabulary.uncefact.org/approvedSecurityPlanOnboardIndicator
	 */
	approvedSecurityPlanOnboardIndicator?: boolean;

	/**
	 * An IOT device attached to this logistics transport means.
	 * @see https://vocabulary.uncefact.org/attachedIOTDevice
	 */
	attachedIOTDevice?: IIOTDevice[];

	/**
	 * A piece of logistics transport equipment attached to this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/attachedLogisticsTransportEquipment
	 */
	attachedLogisticsTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * A call sign identifier for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/callSignId
	 */
	callSignId?: string;

	/**
	 * A certified level of pollution calculated for an emission from this logistics transport means.
	 * @see https://vocabulary.uncefact.org/certifiedEmission
	 */
	certifiedEmission?: IEmission[];

	/**
	 * A person who is a company security officer for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/companySecurityOfficerPerson
	 */
	companySecurityOfficerPerson?: ITransportPerson[];

	/**
	 * The code specifying the conference for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/conferenceCode
	 */
	conferenceCode?: string;

	/**
	 * The measure of the draught level of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/draughtLevelMeasure
	 */
	draughtLevelMeasure?: IMeasureType[];

	/**
	 * The indication of whether or not this logistics means of transport is accompanied by a driver.
	 * @see https://vocabulary.uncefact.org/driverAccompaniedIndicator
	 */
	driverAccompaniedIndicator?: boolean;

	/**
	 * The draught level measured at the fore end of this transport means.
	 * @see https://vocabulary.uncefact.org/forwardDraughtLevelMeasure
	 */
	forwardDraughtLevelMeasure?: IMeasureType[];

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
	iSSCDocument?: IDocument[];

	/**
	 * The trade party authorized to issue the International Ship Security Certificate (ISSC) for this logistics means of
	 * transport.
	 * @see https://vocabulary.uncefact.org/iSSCIssuingAuthorityParty
	 */
	iSSCIssuingAuthorityParty?: ITradeParty;

	/**
	 * An identifier of this logistics means of transport, such as the International Maritime Organization number of a vessel.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The measure of the length of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/linearUnitLengthMeasure
	 */
	linearUnitLengthMeasure?: ILinearUnitMeasureType[];

	/**
	 * The measure of the external length required in a lane for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure
	 */
	linearUnitRequiredLaneLengthMeasure?: ILinearUnitMeasureType;

	/**
	 * A measure of the width of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/linearUnitWidthMeasure
	 */
	linearUnitWidthMeasure?: ILinearUnitMeasureType[];

	/**
	 * The measure of the cargo loaded onto this logistics means of transport, such as the number of barrels of oil or other
	 * quantity of breakbulk cargo.
	 * @see https://vocabulary.uncefact.org/loadedCargoMeasure
	 */
	loadedCargoMeasure?: IMeasureType[];

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
	manoeuvringSpeedMeasure?: IMeasureType[];

	/**
	 * The manufacturer party for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The manufacturing date, time, date time, or other date time value for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/manufacturingDateTime
	 */
	manufacturingDateTime?: string;

	/**
	 * A certificate applicable to a maritime logistics transport means.
	 * @see https://vocabulary.uncefact.org/maritimeApplicableCertificate
	 */
	maritimeApplicableCertificate?: ISpecifiedCertificate[];

	/**
	 * The name, expressed as text, of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The country of nationality of the operator of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/operatorNationalityCountry
	 */
	operatorNationalityCountry?: ICountry;

	/**
	 * The party operating this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/operatorParty
	 */
	operatorParty?: ITradeParty[];

	/**
	 * The owner agent trade party for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/ownerAgentParty
	 */
	ownerAgentParty?: ITradeParty[];

	/**
	 * The party owning this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: ITradeParty[];

	/**
	 * The country of registration of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: ICountry[];

	/**
	 * A registration event of this logistics transport means.
	 * @see https://vocabulary.uncefact.org/registrationEvent
	 */
	registrationEvent?: ITransportEvent[];

	/**
	 * A transport service required for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/requiredService
	 */
	requiredService?: IService[];

	/**
	 * A sanitation control document for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/sanitationControlDocument
	 */
	sanitationControlDocument?: IDocument[];

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
	serviceProviderParty?: ITradeParty[];

	/**
	 * Spatial dimensions specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedDimension
	 */
	specifiedDimension?: ISpatialDimension[];

	/**
	 * A calculated emission specified for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/specifiedEmission
	 */
	specifiedEmission?: IEmission[];

	/**
	 * An identified defect specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedFault
	 */
	specifiedFault?: IIdentifiedFault[];

	/**
	 * Handling instructions specified for this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/specifiedHandlingInstructions
	 */
	specifiedHandlingInstructions?: IHandlingInstructions[];

	/**
	 * The type, expressed as text, of this logistics means of transport.
	 * @see https://vocabulary.uncefact.org/transportMeansType
	 */
	transportMeansType?: string;

	/**
	 * The code specifying the type of logistics means of transport (Reference UNECE Recommendation 28).
	 * @see https://vocabulary.uncefact.org/transportMeansTypeCode
	 */
	transportMeansTypeCode?: TransportMeansTypeCodeList[];

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
	weightUnitCargoGrossWeightMeasure?: IWeightUnitMeasureType;

	/**
	 * The deadweight tonnage measure for this logistics transport means.
	 * @see https://vocabulary.uncefact.org/weightUnitDeadweightTonnageMeasure
	 */
	weightUnitDeadweightTonnageMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the gross weight (mass) of this logistics means of transport including cargo, such as the measure of the
	 * overall size of a vessel determined in accordance with the provisions of the International Convention on Tonnage
	 * Measurement of Ships, 1969.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the net weight (mass) of this logistics means of transport, such as the net tonnage of a vessel
	 * determined in accordance with the provisions of the International Convention on Tonnage Measurement of Ships, 1969.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the tare weight (mass) of this logistics means of transport which is the weight (mass) including
	 * permanent equipment but excluding goods and loose accessories.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IWeightUnitMeasureType[];
}
