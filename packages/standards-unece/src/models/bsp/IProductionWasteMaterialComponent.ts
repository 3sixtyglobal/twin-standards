// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A production material component that is unused and rejected as unwanted.
 * @see https://vocabulary.uncefact.org/ProductionWasteMaterialComponent
 */
export interface IProductionWasteMaterialComponent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionWasteMaterialComponent;

	/**
	 * A product certificate applicable to this production waste material component.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A sustainability characteristic applicable to this production waste material component.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A textual description of this production waste material component.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of production waste material component.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
