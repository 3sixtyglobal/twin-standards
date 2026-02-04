// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceRadionuclide } from "./IUneceRadionuclide.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any of several species of the same chemical element with different masses whose nuclei are unstable and dissipate excess
 * energy by spontaneously emitting radiation in the form of alpha, beta, or gamma rays.
 * @see https://vocabulary.uncefact.org/RadioactiveIsotope
 */
export interface IUneceRadioactiveIsotope extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RadioactiveIsotope;

	/**
	 * A measure of the activity level of this specified radioactive isotope.
	 * @see https://vocabulary.uncefact.org/activityLevelMeasure
	 */
	activityLevelMeasure?: IUneceMeasureType[];

	/**
	 * A name, expressed as text, for this specified radioactive isotope, such as C14.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A note, expressed as text, for this specified radioactive isotope.
	 * @see https://vocabulary.uncefact.org/note
	 */
	note?: string;

	/**
	 * The radionuclide details specified for this radioactive isotope.
	 * @see https://vocabulary.uncefact.org/specifiedRadionuclide
	 */
	specifiedRadionuclide?: IUneceRadionuclide[];

	/**
	 * A measure of the activity level of this specified radioactive isotope.
	 * @see https://vocabulary.uncefact.org/unitActivityLevelMeasure
	 */
	unitActivityLevelMeasure?: IUneceUnitMeasureType[];
}
