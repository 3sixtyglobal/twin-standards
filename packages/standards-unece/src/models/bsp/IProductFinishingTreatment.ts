// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IProcessCertificate } from "./IProcessCertificate.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Improving measures for manufactured components or products to meet end use requirements.
 * @see https://vocabulary.uncefact.org/ProductFinishingTreatment
 */
export interface IProductFinishingTreatment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductFinishingTreatment;

	/**
	 * A process certificate applicable to this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertificate
	 */
	applicableProcessCertificate?: IProcessCertificate[];

	/**
	 * A sustainability characteristic applicable to this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A textual description of this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type of product finishing treatment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * Material used for this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/usedMaterial
	 */
	usedMaterial?: ISpecifiedMaterial[];
}
