// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssessment } from "./IAssessment.js";
import type { IChemical } from "./IChemical.js";
import type { IGoodsCharacteristic } from "./IGoodsCharacteristic.js";
import type { ILocation } from "./ILocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradeProductCertification } from "./ITradeProductCertification.js";
import type { IWasteMaterialRecoveryDisposalProcess } from "./IWasteMaterialRecoveryDisposalProcess.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A substance from which something is or could be made.
 * @see https://vocabulary.uncefact.org/SpecifiedMaterial
 */
export interface ISpecifiedMaterial extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedMaterial;

	/**
	 * An assessment applicable for this specified material.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IAssessment[];

	/**
	 * A goods characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IGoodsCharacteristic[];

	/**
	 * A product certificate applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A product characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * The quantity applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableQuantity
	 */
	applicableQuantity?: IQuantityType[];

	/**
	 * A certificate applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * A sustainability characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A product certification applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: ITradeProductCertification[];

	/**
	 * A waste material recovery disposal process applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableWasteMaterialRecoveryDisposalProcess
	 */
	applicableWasteMaterialRecoveryDisposalProcess?: IWasteMaterialRecoveryDisposalProcess[];

	/**
	 * An identifier of the classification of this specified material.
	 * @see https://vocabulary.uncefact.org/classificationId
	 */
	classificationId?: string;

	/**
	 * Component material for this specified material.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: ISpecifiedMaterial[];

	/**
	 * A textual description of this specified material.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description of this material.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * An identifier of this specified material.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this specified material.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A manufacturer party for this specified material.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * A measure of the mass of this specified material.
	 * @see https://vocabulary.uncefact.org/massMeasure
	 */
	massMeasure?: IMeasureType[];

	/**
	 * A mass measure of this specified material expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IMeasureType[];

	/**
	 * The name, expressed as text, of this specified material.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The percentage of the presence for this specified material.
	 * @see https://vocabulary.uncefact.org/presencePercent
	 */
	presencePercent?: string;

	/**
	 * A referenced location specified for this material.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * The code specifying the status of this material.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A distinct chemical used for this specified material.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	usedChemical?: IChemical[];

	/**
	 * A measure of the volume of this specified material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IMeasureType[];

	/**
	 * A measure of the volume of this specified material expressed as a ratio to another volume, such as the total volume.
	 * @see https://vocabulary.uncefact.org/volumeRatioMeasure
	 */
	volumeRatioMeasure?: IMeasureType[];

	/**
	 * A measure of the weight of this specified material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];
}
