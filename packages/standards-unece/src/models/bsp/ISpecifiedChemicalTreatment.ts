// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IChemical } from "./IChemical.js";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any substance such as dyestuffs, chrome oxide, acids, sulphate, surfactant or other chemicals applied to an agricultural
 * field, substrate, plant, animal product, material or product.
 * @see https://vocabulary.uncefact.org/SpecifiedChemicalTreatment
 */
export interface ISpecifiedChemicalTreatment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedChemicalTreatment;

	/**
	 * A sustainability characteristic applicable to this specified chemical treatment.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A textual description of this specified chemical treatment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this specified chemical treatment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A process certificate for this specified chemical treatment.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IProcessCertificate[];

	/**
	 * The code specifying the type of chemical treatment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A distinct chemical used for this specified chemical treatment.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	usedChemical?: IChemical[];
}
