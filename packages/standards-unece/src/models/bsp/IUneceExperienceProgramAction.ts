// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any type of action, such as searching, reserving, or paying, necessary for an experience program, such as an adventure
 * experience, a business experience, or a wellness experience.
 * @see https://vocabulary.uncefact.org/ExperienceProgramAction
 */
export interface IUneceExperienceProgramAction {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExperienceProgramAction;

	/**
	 * A type, expressed as text, of experience program action.
	 * @see https://vocabulary.uncefact.org/actionType
	 */
	actionType?: string;

	/**
	 * A textual description of this experience program action.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A party specified for this experience program action.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: IUneceTradeParty[];

	/**
	 * The code specifying the status of this experience program action.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of experience program action.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
