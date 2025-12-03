// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Material which exhibits adverse effects on living organisms.
 * @see https://vocabulary.uncefact.org/HazardousMaterial
 */
export interface IHazardousMaterial extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HazardousMaterial;

	/**
	 * A product certificate applicable to this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A product characteristic applicable to this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * A sustainability characteristic applicable to this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * The textual description of the biological severity of this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/biologicalSeverityDescription
	 */
	biologicalSeverityDescription?: string;

	/**
	 * The textual description of this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A textual description of the entry route of this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/entryRouteDescription
	 */
	entryRouteDescription?: string;

	/**
	 * The name, expressed as text, of the reproductive toxin in this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/reproductiveToxinName
	 */
	reproductiveToxinName?: string;
}
