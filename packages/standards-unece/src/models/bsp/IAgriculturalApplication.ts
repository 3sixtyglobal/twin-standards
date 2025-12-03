// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalCertificate } from "./IAgriculturalCertificate.js";
import type { IAgriculturalZoneArea } from "./IAgriculturalZoneArea.js";
import type { ILocation } from "./ILocation.js";
import type { IPlot } from "./IPlot.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { ISpecifiedChemicalTreatment } from "./ISpecifiedChemicalTreatment.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any substance such as seed, fertilizer, water, gas or chemical applied to an agricultural field, substrate,
 * construction, plant, animal or product.
 * @see https://vocabulary.uncefact.org/AgriculturalApplication
 */
export interface IAgriculturalApplication extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AgriculturalApplication;

	/**
	 * A sustainability characteristic applicable to this agricultural application.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A specified agricultural application applied to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/appliedArea
	 */
	appliedArea?: IAgriculturalZoneArea[];

	/**
	 * An agricultural certificate applied to this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedCertificate
	 */
	appliedCertificate?: IAgriculturalCertificate[];

	/**
	 * A specified chemical treatment applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: ISpecifiedChemicalTreatment[];

	/**
	 * Specified material applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedMaterial
	 */
	appliedMaterial?: ISpecifiedMaterial[];

	/**
	 * The identifier for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A referenced location specified for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * A crop plot specified for this agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedPlot
	 */
	specifiedPlot?: IPlot[];

	/**
	 * A product batch specified for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatch
	 */
	specifiedProductBatch?: IProductBatch[];
}
