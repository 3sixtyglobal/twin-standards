// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Insurance coverage for cargo during transport movements.
 * @see https://vocabulary.uncefact.org/CargoInsurance
 */
export interface IUneceCargoInsurance extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CargoInsurance;

	/**
	 * The contract general conditions, expressed as text, for this transport cargo insurance.
	 * @see https://vocabulary.uncefact.org/contractGeneralConditions
	 */
	contractGeneralConditions?: string;

	/**
	 * The code specifying the coverage of this transport cargo insurance.
	 * @see https://vocabulary.uncefact.org/coverageCode
	 */
	coverageCode?: string;

	/**
	 * The textual description of the coverage of this transport cargo insurance.
	 * @see https://vocabulary.uncefact.org/coverageDescription
	 */
	coverageDescription?: string;

	/**
	 * The coverage party for this transport cargo insurance.
	 * @see https://vocabulary.uncefact.org/coverageParty
	 */
	coverageParty?: IUneceTradeParty[];
}
