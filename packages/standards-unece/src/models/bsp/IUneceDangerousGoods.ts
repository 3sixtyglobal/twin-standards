// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceFuel } from "./IUneceFuel.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceMeasurement } from "./IUneceMeasurement.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRadioactiveMaterial } from "./IUneceRadioactiveMaterial.js";
import type { IUneceSpecifiedCondition } from "./IUneceSpecifiedCondition.js";
import type { IUneceTemperatureUnitMeasureType } from "./IUneceTemperatureUnitMeasureType.js";
import type { IUneceTradeContact } from "./IUneceTradeContact.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceDangerousGoodsPackagingLevelCodeList } from "../lists/uneceDangerousGoodsPackagingLevelCodeList.js";
import type { UneceDangerousGoodsRegulationCodeList } from "../lists/uneceDangerousGoodsRegulationCodeList.js";
import type { UnecePackageTypeCodeList } from "../lists/unecePackageTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Goods which may contain a substance which poses risks to people and/or the environment during transportation which is
 * regulated by dangerous goods regulations.
 * @see https://vocabulary.uncefact.org/DangerousGoods
 */
export interface IUneceDangerousGoods {
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
	additionalHazardClassificationId?: string | IJsonLdValueObject;

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
	associatedTransportEquipment?: IUneceLogisticsTransportEquipment[];

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
	controlTemperatureMeasurement?: IUneceMeasurement;

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
	dangerousGoodsPackagingLevelPackagingDangerLevelCode?: UneceDangerousGoodsPackagingLevelCodeList;

	/**
	 * The code specifying a regulation applicable to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsRegulationCode
	 */
	dangerousGoodsRegulationCode?: UneceDangerousGoodsRegulationCodeList;

	/**
	 * A density measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/densityMeasure
	 */
	densityMeasure?: IUneceMeasureType[];

	/**
	 * The unique transport emergency procedure (EMS) identifier applicable for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/eMSId
	 */
	eMSId?: string | IJsonLdValueObject;

	/**
	 * The person or department to be contacted in the event of any emergency related to these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/emergencyContact
	 */
	emergencyContact?: IUneceTradeContact;

	/**
	 * The measurement of the emergency temperature of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/emergencyTemperatureMeasurement
	 */
	emergencyTemperatureMeasurement?: IUneceMeasurement;

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
	explosiveCargoNetWeightMeasure?: IUneceWeightUnitMeasureType;

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
	flashpointTemperatureMeasurement?: IUneceMeasurement[];

	/**
	 * Handling instructions for the transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IUneceHandlingInstructions[];

	/**
	 * The code specifying the hazard category for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/hazardCategoryCode
	 */
	hazardCategoryCode?: string;

	/**
	 * The unique identifier of the version of a hazard class for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/hazardClassVersionId
	 */
	hazardClassVersionId?: string | IJsonLdValueObject;

	/**
	 * The unique identifier of a hazard class applicable to these transported dangerous goods as defined by the relevant
	 * governing regulation authority.
	 * @see https://vocabulary.uncefact.org/hazardClassificationId
	 */
	hazardClassificationId?: string | IJsonLdValueObject;

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
	includedFuel?: IUneceFuel[];

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
	lowerPartOrangeHazardPlacardId?: string | IJsonLdValueObject;

	/**
	 * The unique Medical First Aid Guide (MFAG) identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/mFAGId
	 */
	mFAGId?: string | IJsonLdValueObject;

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
	radioactiveMaterial?: IUneceRadioactiveMaterial;

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
	relatedDocument?: IUneceDocument[];

	/**
	 * The reportable quantity for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/reportableQuantity
	 */
	reportableQuantity?: IUneceQuantityType;

	/**
	 * Shipper declaration information, expressed as text, for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/shipperDeclarationInformation
	 */
	shipperDeclarationInformation?: string;

	/**
	 * The unique identifier of the special provision for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/specialProvisionId
	 */
	specialProvisionId?: string | IJsonLdValueObject;

	/**
	 * A logistics package specified for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/specifiedPackage
	 */
	specifiedPackage?: IUnecePackage[];

	/**
	 * A stated condition of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/statedCondition
	 */
	statedCondition?: IUneceSpecifiedCondition[];

	/**
	 * Supplementary information, expressed as text, concerning the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/supplementaryInformation
	 */
	supplementaryInformation?: string;

	/**
	 * The unique TRansport EMergency (TREM) card identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/tREMId
	 */
	tREMId?: string | IJsonLdValueObject;

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
	temperatureUnitMeltingPointTemperatureMeasure?: IUneceTemperatureUnitMeasureType[];

	/**
	 * The code specifying the package type for the transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/transportDangerousGoodsPackageTypeCode
	 */
	transportDangerousGoodsPackageTypeCode?: UnecePackageTypeCodeList;

	/**
	 * The expert to be contacted for details about the transport of these dangerous goods.
	 * @see https://vocabulary.uncefact.org/transportExpertContact
	 */
	transportExpertContact?: IUneceTradeContact;

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
	unitDensityMeasure?: IUneceUnitMeasureType[];

	/**
	 * A viscosity measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/unitViscosityMeasure
	 */
	unitViscosityMeasure?: IUneceUnitMeasureType[];

	/**
	 * The unique upper part of the orange hazard placard identifier for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/upperPartOrangeHazardPlacardId
	 */
	upperPartOrangeHazardPlacardId?: string | IJsonLdValueObject;

	/**
	 * A viscosity measure for these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/viscosityMeasure
	 */
	viscosityMeasure?: IUneceMeasureType[];

	/**
	 * The measure of the gross volume, normally calculated by multiplying the maximum length, width and height dimensions of
	 * these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IUneceVolumeUnitMeasureType;

	/**
	 * A measure of the marine pollutant volume of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/volumeUnitMarinePollutantVolumeMeasure
	 */
	volumeUnitMarinePollutantVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * The measure of the weight (mass) of these transported dangerous goods including packaging but excluding the transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure of the net weight (mass) of these transported dangerous goods.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType;
}
