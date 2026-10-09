// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceAgriculturalCertificate } from "./IUneceAgriculturalCertificate.js";
import type { IUneceAgriculturalZoneArea } from "./IUneceAgriculturalZoneArea.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUnecePlot } from "./IUnecePlot.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceSpecifiedChemicalTreatment } from "./IUneceSpecifiedChemicalTreatment.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any substance such as seed, fertilizer, water, gas or chemical applied to an agricultural field, substrate,
 * construction, plant, animal or product.
 * @see https://vocabulary.uncefact.org/AgriculturalApplication
 */
export interface IUneceAgriculturalApplication {
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
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A specified agricultural application applied to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/appliedArea
	 */
	appliedArea?: IUneceAgriculturalZoneArea[];

	/**
	 * An agricultural certificate applied to this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedCertificate
	 */
	appliedCertificate?: IUneceAgriculturalCertificate[];

	/**
	 * A specified chemical treatment applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: IUneceSpecifiedChemicalTreatment[];

	/**
	 * Specified material applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedMaterial
	 */
	appliedMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * The identifier for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A referenced location specified for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation[];

	/**
	 * A crop plot specified for this agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedPlot
	 */
	specifiedPlot?: IUnecePlot[];

	/**
	 * A product batch specified for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatch
	 */
	specifiedProductBatch?: IUneceProductBatch[];
}
