// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An agreement, contract, exchange, understanding, or transfer of cash or property related to a Track and Trace (TT)
 * process.
 * @see https://vocabulary.uncefact.org/TTTradeTransaction
 */
export interface IUneceTTTradeTransaction {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTTradeTransaction;

	/**
	 * The identifier for this TT trade transaction.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The identifier for the type of TT trade transaction.
	 * @see https://vocabulary.uncefact.org/typeId
	 */
	typeId?: string;

	/**
	 * The Uniform Resource Identifier (URI) for this TT trade transaction.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string;
}
