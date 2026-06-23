// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A radionuclide atom that has excess nuclear energy, making it unstable.
 * @see https://vocabulary.uncefact.org/Radionuclide
 */
export interface IUneceRadionuclide {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Radionuclide;

	/**
	 * An identifier for this radioactive radionuclide.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The indication of whether or not this radioactive radionuclide has a low dispersible status.
	 * @see https://vocabulary.uncefact.org/lowDispersibleStatusIndicator
	 */
	lowDispersibleStatusIndicator?: boolean;

	/**
	 * A name or symbol, expressed as text, of a radioactive radionuclide.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The indication of whether or not this radioactive radionuclide has a special form.
	 * @see https://vocabulary.uncefact.org/specialFormIndicator
	 */
	specialFormIndicator?: boolean;
}
