// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceChemical } from "./IUneceChemical.js";
import type { IUneceGoodsCharacteristic } from "./IUneceGoodsCharacteristic.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeProductCertification } from "./IUneceTradeProductCertification.js";
import type { IUneceWasteMaterialRecoveryDisposalProcess } from "./IUneceWasteMaterialRecoveryDisposalProcess.js";
import type { UneceSpecifiedMaterialTypeCodeList } from "../typeCodes/uneceSpecifiedMaterialTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A substance from which something is or could be made.
 * @see https://vocabulary.uncefact.org/SpecifiedMaterial
 */
export interface IUneceSpecifiedMaterial extends IJsonLdNodeObject {
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
	applicableAssessment?: IUneceAssessment[];

	/**
	 * A goods characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IUneceGoodsCharacteristic[];

	/**
	 * A product certificate applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IUneceProductCertificate[];

	/**
	 * A product characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic[];

	/**
	 * The quantity applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableQuantity
	 */
	applicableQuantity?: IUneceQuantityType;

	/**
	 * A certificate applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A sustainability characteristic applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A product certification applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: IUneceTradeProductCertification[];

	/**
	 * A waste material recovery disposal process applicable to this specified material.
	 * @see https://vocabulary.uncefact.org/applicableWasteMaterialRecoveryDisposalProcess
	 */
	applicableWasteMaterialRecoveryDisposalProcess?: IUneceWasteMaterialRecoveryDisposalProcess[];

	/**
	 * An identifier of the classification of this specified material.
	 * @see https://vocabulary.uncefact.org/classificationId
	 */
	classificationId?: string;

	/**
	 * Component material for this specified material.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: IUneceSpecifiedMaterial[];

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
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * A measure of the mass of this specified material.
	 * @see https://vocabulary.uncefact.org/massMeasure
	 */
	massMeasure?: IUneceMeasureType;

	/**
	 * A mass measure of this specified material expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IUneceMeasureType[];

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
	specifiedLocation?: IUneceLocation[];

	/**
	 * The code specifying the status of this material.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSpecifiedMaterialTypeCodeList | string;

	/**
	 * A distinct chemical used for this specified material.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	usedChemical?: IUneceChemical[];

	/**
	 * A measure of the volume of this specified material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the volume of this specified material expressed as a ratio to another volume, such as the total volume.
	 * @see https://vocabulary.uncefact.org/volumeRatioMeasure
	 */
	volumeRatioMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the weight of this specified material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType;
}
