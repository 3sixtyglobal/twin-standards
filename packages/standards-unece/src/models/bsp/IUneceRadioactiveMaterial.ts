// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceRadioactiveIsotope } from "./IUneceRadioactiveIsotope.js";
import type { UneceRadioactiveMaterialTypeCodeList } from "../typeCodes/uneceRadioactiveMaterialTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Material capable of undergoing spontaneous nuclear decay involving emission of ionizing radiation in the form of
 * particles or gamma rays.
 * @see https://vocabulary.uncefact.org/RadioactiveMaterial
 */
export interface IUneceRadioactiveMaterial {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RadioactiveMaterial;

	/**
	 * An isotope applicable to this radioactive material.
	 * @see https://vocabulary.uncefact.org/applicableRadioactiveIsotope
	 */
	applicableRadioactiveIsotope?: IUneceRadioactiveIsotope[];

	/**
	 * The textual description of the composition of this radioactive material.
	 * @see https://vocabulary.uncefact.org/compositionDescription
	 */
	compositionDescription?: string;

	/**
	 * The criticality safety index number of this radioactive material.
	 * @see https://vocabulary.uncefact.org/criticalitySafetyIndexNumeric
	 */
	criticalitySafetyIndexNumeric?: string;

	/**
	 * The number (rounded up to the next tenth) assigned to and placed on the label of a fissile radioactive material package,
	 * to designate the degree of control of accumulation of packages, overpacks or freight containers containing fissile
	 * material during transportation.
	 * @see https://vocabulary.uncefact.org/fissileCriticalitySafetyIndexNumeric
	 */
	fissileCriticalitySafetyIndexNumeric?: string;

	/**
	 * The indication of whether or not this radioactive material is a fissile exception.
	 * @see https://vocabulary.uncefact.org/fissileExceptionIndicator
	 */
	fissileExceptionIndicator?: boolean;

	/**
	 * Information, expressed as text, describing the low dispersion properties of this radioactive material.
	 * @see https://vocabulary.uncefact.org/lowDispersibleInformation
	 */
	lowDispersibleInformation?: string;

	/**
	 * A code specifying a package transport index for this radioactive material.
	 * @see https://vocabulary.uncefact.org/radioactivePackageTransportIndexCode
	 */
	radioactivePackageTransportIndexCode?: string;

	/**
	 * The name of the radionuclide, expressed as text, of this radioactive material.
	 * @see https://vocabulary.uncefact.org/radionuclideName
	 */
	radionuclideName?: string;

	/**
	 * Information, expressed as text, describing the special form for this radioactive material.
	 * @see https://vocabulary.uncefact.org/specialFormInformation
	 */
	specialFormInformation?: string;

	/**
	 * The transport index number of this radioactive material.
	 * @see https://vocabulary.uncefact.org/transportIndexNumeric
	 */
	transportIndexNumeric?: string;

	/**
	 * The code specifying the type of this radioactive material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceRadioactiveMaterialTypeCodeList | string;
}
