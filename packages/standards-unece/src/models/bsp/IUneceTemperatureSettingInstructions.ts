// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Temperature setting related information of an instructive nature.
 * @see https://vocabulary.uncefact.org/TemperatureSettingInstructions
 */
export interface IUneceTemperatureSettingInstructions {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TemperatureSettingInstructions;

	/**
	 * A textual description of these temperature setting instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A procedure, expressed as text, for these temperature setting instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The code specifying a description of these temperature setting instructions.
	 * @see https://vocabulary.uncefact.org/temperatureSettingInstructionsDescriptionCode
	 */
	temperatureSettingInstructionsDescriptionCode?: string;
}
