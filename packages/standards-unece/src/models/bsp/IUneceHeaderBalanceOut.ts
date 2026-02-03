// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Offset header information to ensure that debits and credits are equal for a transaction.
 * @see https://vocabulary.uncefact.org/HeaderBalanceOut
 */
export interface IUneceHeaderBalanceOut extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HeaderBalanceOut;

	/**
	 * A balance out breakdown of this header balance out.
	 * @see https://vocabulary.uncefact.org/breakdownBalanceOut
	 */
	breakdownBalanceOut?: IUneceHeaderBalanceOut;

	/**
	 * A monetary value calculated for this header balance out.
	 * @see https://vocabulary.uncefact.org/calculatedAmount
	 */
	calculatedAmount?: IUneceAmountType;

	/**
	 * A textual description of this header balance out.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this header balance out.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of an occurrence of this header balance out.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The code specifying the reason for this header balance out.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * A textual description of the reason for this header balance out.
	 * @see https://vocabulary.uncefact.org/reasonDescription
	 */
	reasonDescription?: string;
}
