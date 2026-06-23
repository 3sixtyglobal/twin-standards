// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The particular state of something, affected by use, that should be respected.
 * @see https://vocabulary.uncefact.org/UsageCondition
 */
export interface IUneceUsageCondition {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.UsageCondition;

	/**
	 * An age limitation, expressed as text, for this specified usage condition.
	 * @see https://vocabulary.uncefact.org/ageLimitation
	 */
	ageLimitation?: string;

	/**
	 * Appropriate clothing, expressed as text, for this specified usage condition.
	 * @see https://vocabulary.uncefact.org/appropriateClothing
	 */
	appropriateClothing?: string;

	/**
	 * A textual description of this specified usage condition.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A duration, expressed as text, for this specified usage condition.
	 * @see https://vocabulary.uncefact.org/duration
	 */
	duration?: string;

	/**
	 * A gender limitation, expressed as text, for this specified usage condition.
	 * @see https://vocabulary.uncefact.org/genderLimitation
	 */
	genderLimitation?: string;

	/**
	 * Occupancy, expressed as text, for this specified usage condition.
	 * @see https://vocabulary.uncefact.org/occupancy
	 */
	occupancy?: string;

	/**
	 * A party requiring this specified usage condition.
	 * @see https://vocabulary.uncefact.org/requiringParty
	 */
	requiringParty?: IUneceTradeParty[];
}
