// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A method or substance, such as chemical fertilizers and crop protection products, applied to plant growth whilst
 * managing and controlling diseases and pests.
 * @see https://vocabulary.uncefact.org/CropProtectionTreatment
 */
export interface IUneceCropProtectionTreatment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CropProtectionTreatment;

	/**
	 * A process certificate applicable to this specified crop protection treatment.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertificate
	 */
	applicableProcessCertificate?: IUneceProcessCertificate[];

	/**
	 * A sustainability characteristic applicable to this specified crop protection treatment.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A textual description of this specified crop protection treatment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this specified crop protection treatment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type of crop protection treatment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * Material used for this specified crop protection treatment.
	 * @see https://vocabulary.uncefact.org/usedMaterial
	 */
	usedMaterial?: IUneceSpecifiedMaterial[];
}
