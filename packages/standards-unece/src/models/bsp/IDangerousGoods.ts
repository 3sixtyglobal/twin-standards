// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { IFuel } from "./IFuel.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { IMeasurement } from "./IMeasurement.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IPackage } from "./IPackage.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRadioactiveMaterial } from "./IRadioactiveMaterial.js";
import type { ISpecifiedCondition } from "./ISpecifiedCondition.js";
import type { ITemperatureUnitMeasureType } from "./ITemperatureUnitMeasureType.js";
import type { ITradeContact } from "./ITradeContact.js";
import type { IUnitMeasureType } from "./IUnitMeasureType.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { DangerousGoodsPackagingLevelCodeList } from "../lists/dangerousGoodsPackagingLevelCodeList.js";
import type { DangerousGoodsRegulationCodeList } from "../lists/dangerousGoodsRegulationCodeList.js";
import type { PackageTypeCodeList } from "../lists/packageTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Goods which may contain a substance which poses risks to people and/or the environment during transportation which is
 * regulated by dangerous goods regulations.
 * @see https://vocabulary.uncefact.org/DangerousGoods
 */
export interface IDangerousGoods extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DangerousGoods;

	/**
	 * The unique identifier of an additional hazard class applicable to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/additionalHazardClassificationId
	 */
	additionalHazardClassificationId?: string;

	/**
	 * Aircraft limitation information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/aircraftLimitationInformation
	 */
	aircraftLimitationInformation?: string;

	/**
	 * All packed in one information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/allPackedInOneInformation
	 */
	allPackedInOneInformation?: string;

	/**
	 * Referenced transport equipment associated with the dangerous goods.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipment
	 */
	associatedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * Authorization information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/authorizationInformation
	 */
	authorizationInformation?: string;

	/**
	 * Compliance declaration information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/complianceDeclarationInformation
	 */
	complianceDeclarationInformation?: string;

	/**
	 * The measurement of the control temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/controlTemperatureMeasurement
	 */
	controlTemperatureMeasurement?: IMeasurement[];

	/**
	 * Crew emergency information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/crewEmergencyInformation
	 */
	crewEmergencyInformation?: string;

	/**
	 * Crew member emergency identity information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/crewMemberEmergencyIdentityInformation
	 */
	crewMemberEmergencyIdentityInformation?: string;

	/**
	 * The code specifying the level of danger that the packaging of these dangerous goods must cover for transport purposes.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsPackagingLevelPackagingDangerLevelCode
	 */
	dangerousGoodsPackagingLevelPackagingDangerLevelCode?: DangerousGoodsPackagingLevelCodeList[];

	/**
	 * The code specifying a regulation applicable to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsRegulationCode
	 */
	dangerousGoodsRegulationCode?: DangerousGoodsRegulationCodeList[];

	/**
	 * A density measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/densityMeasure
	 */
	densityMeasure?: IMeasureType[];

	/**
	 * The unique transport emergency procedure (EMS) identifier applicable for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/eMSId
	 */
	eMSId?: string;

	/**
	 * The person or department to be contacted in the event of any emergency related to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/emergencyContact
	 */
	emergencyContact?: ITradeContact[];

	/**
	 * The measurement of the emergency temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/emergencyTemperatureMeasurement
	 */
	emergencyTemperatureMeasurement?: IMeasurement[];

	/**
	 * Excepted quantity information statement, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/exceptedQuantityStatementInformation
	 */
	exceptedQuantityStatementInformation?: string;

	/**
	 * Expert training certificate information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/expertTrainingCertificateInformation
	 */
	expertTrainingCertificateInformation?: string;

	/**
	 * The measure of the explosive cargo weight applicable to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/explosiveCargoNetWeightMeasure
	 */
	explosiveCargoNetWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The code specifying the explosive compatibility group for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/explosiveCompatibilityGroupCode
	 */
	explosiveCompatibilityGroupCode?: string;

	/**
	 * Explosive label material statement information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/explosiveLabelStatementInformation
	 */
	explosiveLabelStatementInformation?: string;

	/**
	 * A measurement of the flashpoint temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/flashpointTemperatureMeasurement
	 */
	flashpointTemperatureMeasurement?: IMeasurement;

	/**
	 * Handling instructions for the transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IHandlingInstructions;

	/**
	 * The code specifying the hazard category for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/hazardCategoryCode
	 */
	hazardCategoryCode?: string;

	/**
	 * The unique identifier of the version of a hazard class for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/hazardClassVersionId
	 */
	hazardClassVersionId?: string;

	/**
	 * The unique identifier of a hazard class applicable to these transported dangerous goods as defined by the relevant
	 * governing regulation authority.
	 * @see https://vocabulary.uncefact.org/hazardClassificationId
	 */
	hazardClassificationId?: string;

	/**
	 * A code specifying the type of hazard for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/hazardTypeCode
	 */
	hazardTypeCode?: string;

	/**
	 * The code specifying the IMDG (International Maritime Dangerous Goods regulation) segregation group for these transported
	 * dangerous goods.
	 * @see https://vocabulary.uncefact.org/iMDGSegregationGroupCode
	 */
	iMDGSegregationGroupCode?: string;

	/**
	 * Gaseous fuels included in the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/includedFuel
	 */
	includedFuel?: IFuel[];

	/**
	 * Information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A code specifying facilitations for transport of limited quantities of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/limitedQuantityCode
	 */
	limitedQuantityCode?: string;

	/**
	 * The unique lower part of the orange hazard placard identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/lowerPartOrangeHazardPlacardId
	 */
	lowerPartOrangeHazardPlacardId?: string;

	/**
	 * The unique Medical First Aid Guide (MFAG) identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/mFAGId
	 */
	mFAGId?: string;

	/**
	 * The indication of whether or not these transported dangerous goods have a marine pollutant content.
	 * @see https://vocabulary.uncefact.org/marinePollutantIndicator
	 */
	marinePollutantIndicator?: boolean;

	/**
	 * A code specifying a type of maritime pollutant for the transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/maritimePollutantTypeCode
	 */
	maritimePollutantTypeCode?: string;

	/**
	 * Marking, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/marking
	 */
	marking?: string;

	/**
	 * Overpack information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/overpackInformation
	 */
	overpackInformation?: string;

	/**
	 * The code specifying a type of packing instruction for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/packingInstructionTypeCode
	 */
	packingInstructionTypeCode?: string;

	/**
	 * The indication of whether or not these transported dangerous goods have a pollutant content.
	 * @see https://vocabulary.uncefact.org/pollutantIndicator
	 */
	pollutantIndicator?: boolean;

	/**
	 * The code specifying the level of pollution of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/pollutantLevelCode
	 */
	pollutantLevelCode?: string;

	/**
	 * Previous cargo information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/previousCargoInformation
	 */
	previousCargoInformation?: string;

	/**
	 * The proper shipping name, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/properShippingName
	 */
	properShippingName?: string;

	/**
	 * The number of the Q-Value for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/qValueNumeric
	 */
	qValueNumeric?: string;

	/**
	 * The indicator of whether or not these transported dangerous goods are radioactive.
	 * @see https://vocabulary.uncefact.org/radioactiveIndicator
	 */
	radioactiveIndicator?: boolean;

	/**
	 * The radioactive material (Class 7) transported as dangerous goods.
	 * @see https://vocabulary.uncefact.org/radioactiveMaterial
	 */
	radioactiveMaterial?: IRadioactiveMaterial[];

	/**
	 * A name, expressed as text, for a regulation of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/regulationName
	 */
	regulationName?: string;

	/**
	 * The name, expressed as text, for the regulatory authority for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/regulatoryAuthorityName
	 */
	regulatoryAuthorityName?: string;

	/**
	 * A document related to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/relatedDocument
	 */
	relatedDocument?: IDocument[];

	/**
	 * The reportable quantity for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/reportableQuantity
	 */
	reportableQuantity?: IQuantityType[];

	/**
	 * Shipper declaration information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/shipperDeclarationInformation
	 */
	shipperDeclarationInformation?: string;

	/**
	 * The unique identifier of the special provision for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/specialProvisionId
	 */
	specialProvisionId?: string;

	/**
	 * A logistics package specified for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/specifiedPackage
	 */
	specifiedPackage?: IPackage[];

	/**
	 * A stated condition of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/statedCondition
	 */
	statedCondition?: ISpecifiedCondition[];

	/**
	 * Supplementary information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/supplementaryInformation
	 */
	supplementaryInformation?: string;

	/**
	 * The unique TRansport EMergency (TREM) card identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/tREMId
	 */
	tREMId?: string;

	/**
	 * Tank type certificate information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/tankTypeCertificateInformation
	 */
	tankTypeCertificateInformation?: string;

	/**
	 * A technical name, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/technicalName
	 */
	technicalName?: string;

	/**
	 * A melting point temperature measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/temperatureUnitMeltingPointTemperatureMeasure
	 */
	temperatureUnitMeltingPointTemperatureMeasure?: ITemperatureUnitMeasureType[];

	/**
	 * The code specifying the package type for the transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/transportDangerousGoodsPackageTypeCode
	 */
	transportDangerousGoodsPackageTypeCode?: PackageTypeCodeList;

	/**
	 * The expert to be contacted for details about the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/transportExpertContact
	 */
	transportExpertContact?: ITradeContact[];

	/**
	 * The code specifying the tunnel restriction for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/tunnelRestrictionCode
	 */
	tunnelRestrictionCode?: string;

	/**
	 * The code specifying the unique United Nations Dangerous Goods (UNDG) number assigned to these transported dangerous
	 * goods.
	 * @see https://vocabulary.uncefact.org/uNDGIdentificationCode
	 */
	uNDGIdentificationCode?: string;

	/**
	 * A density measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/unitDensityMeasure
	 */
	unitDensityMeasure?: IUnitMeasureType[];

	/**
	 * A viscosity measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/unitViscosityMeasure
	 */
	unitViscosityMeasure?: IUnitMeasureType[];

	/**
	 * The unique upper part of the orange hazard placard identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/upperPartOrangeHazardPlacardId
	 */
	upperPartOrangeHazardPlacardId?: string;

	/**
	 * A viscosity measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/viscosityMeasure
	 */
	viscosityMeasure?: IMeasureType[];

	/**
	 * The measure of the gross volume, normally calculated by multiplying the maximum length, width and height dimensions of
	 * these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the marine pollutant volume of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/volumeUnitMarinePollutantVolumeMeasure
	 */
	volumeUnitMarinePollutantVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure of the weight (mass) of these transported dangerous goods including packaging but excluding the transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the net weight (mass) of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];
}
