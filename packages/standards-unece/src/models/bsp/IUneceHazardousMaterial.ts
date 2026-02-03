// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Material which exhibits adverse effects on living organisms.
 * @see https://vocabulary.uncefact.org/HazardousMaterial
 */
export interface IUneceHazardousMaterial extends IJsonLdNodeObject {
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
	applicableProductCertificate?: IUneceProductCertificate;

	/**
	 * A product characteristic applicable to this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic;

	/**
	 * A sustainability characteristic applicable to this toxicological hazardous material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

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
