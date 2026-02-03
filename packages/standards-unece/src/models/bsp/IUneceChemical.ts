// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceHazardousMaterial } from "./IUneceHazardousMaterial.js";
import type { IUneceIngredientRangeMeasurement } from "./IUneceIngredientRangeMeasurement.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any clearly defined substance having a defined molecular composition.
 * @see https://vocabulary.uncefact.org/Chemical
 */
export interface IUneceChemical extends IJsonLdNodeObject {
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
	applicableHazardousMaterial?: IUneceHazardousMaterial;

	/**
	 * A product characteristic applicable to this distinct chemical.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic;

	/**
	 * A sustainability characteristic applicable to this distinct chemical.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

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
	massMeasure?: IUneceMeasureType;

	/**
	 * A mass measure of this distinct chemical expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IUneceMeasureType;

	/**
	 * The measure of the molecular weight (in grams) for this distinct chemical.
	 * @see https://vocabulary.uncefact.org/molecularWeightMeasure
	 */
	molecularWeightMeasure?: IUneceMeasureType;

	/**
	 * A measurement of the range of the presence of an ingredient in this distinct chemical.
	 * @see https://vocabulary.uncefact.org/presenceMeasurement
	 */
	presenceMeasurement?: IUneceIngredientRangeMeasurement;

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
	specifiedProductCertificate?: IUneceProductCertificate;

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
	volumeMeasure?: IUneceMeasureType;

	/**
	 * A measure of the volume of this distinct chemical expressed as a ratio to another volume, such as the total volume.
	 * @see https://vocabulary.uncefact.org/volumeRatioMeasure
	 */
	volumeRatioMeasure?: IUneceMeasureType;

	/**
	 * A measure of the weight of this distinct chemical.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType;
}
