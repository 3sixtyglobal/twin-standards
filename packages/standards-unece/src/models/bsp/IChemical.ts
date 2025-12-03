// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IHazardousMaterial } from "./IHazardousMaterial.js";
import type { IIngredientRangeMeasurement } from "./IIngredientRangeMeasurement.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any clearly defined substance having a defined molecular composition.
 * @see https://vocabulary.uncefact.org/Chemical
 */
export interface IChemical extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Chemical;

	/**
	 * An applicable toxicological hazardous material for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/applicableHazardousMaterial
	 */
	applicableHazardousMaterial?: IHazardousMaterial[];

	/**
	 * A product characteristic applicable to this distinct chemical.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * A sustainability characteristic applicable to this distinct chemical.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A common name, expressed as text, for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/commonName
	 */
	commonName?: string;

	/**
	 * The family name expressed as text for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/familyName
	 */
	familyName?: string;

	/**
	 * The textual description of the formula for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/formulaDescription
	 */
	formulaDescription?: string;

	/**
	 * An identifier of this distinct chemical.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A measure of the mass of this distinct chemical.
	 * @see https://vocabulary.uncefact.org/massMeasure
	 */
	massMeasure?: IMeasureType[];

	/**
	 * A mass measure of this distinct chemical expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IMeasureType[];

	/**
	 * The measure of the molecular weight (in grams) for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/molecularWeightMeasure
	 */
	molecularWeightMeasure?: IMeasureType[];

	/**
	 * A measurement of the range of the presence of an ingredient in this distinct chemical.
	 * @see https://vocabulary.uncefact.org/presenceMeasurement
	 */
	presenceMeasurement?: IIngredientRangeMeasurement[];

	/**
	 * The percentage of the presence of distinct chemical.
	 * @see https://vocabulary.uncefact.org/presencePercent
	 */
	presencePercent?: string;

	/**
	 * The scientific name, expressed as text, for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/scientificName
	 */
	scientificName?: string;

	/**
	 * A product certificate specified for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IProductCertificate[];

	/**
	 * A synonym name, expressed as text, for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/synonymName
	 */
	synonymName?: string;

	/**
	 * The code specifying the type of distinct chemical.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A measure of the volume of this distinct chemical.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IMeasureType[];

	/**
	 * A measure of the volume of this distinct chemical expressed as a ratio to another volume, such as the total volume.
	 * @see https://vocabulary.uncefact.org/volumeRatioMeasure
	 */
	volumeRatioMeasure?: IMeasureType[];

	/**
	 * A measure of the weight of this distinct chemical.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];
}
