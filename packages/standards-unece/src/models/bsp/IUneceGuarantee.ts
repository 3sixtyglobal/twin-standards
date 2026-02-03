// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceDelimitedPeriod } from "./IUneceDelimitedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An official promise or assurance to fulfil a financial obligation.
 * @see https://vocabulary.uncefact.org/Guarantee
 */
export interface IUneceGuarantee extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Guarantee;

	/**
	 * A condition, expressed as text, for this financial guarantee.
	 * @see https://vocabulary.uncefact.org/condition
	 */
	condition?: string;

	/**
	 * A textual description of this financial guarantee.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The period within which this financial guarantee is effective.
	 * @see https://vocabulary.uncefact.org/effectiveDelimitedPeriod
	 */
	effectiveDelimitedPeriod?: IUneceDelimitedPeriod;

	/**
	 * A monetary value of a liability in this financial guarantee.
	 * @see https://vocabulary.uncefact.org/liabilityAmount
	 */
	liabilityAmount?: IUneceAmountType;
}
