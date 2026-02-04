// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceSealConditionCodeList } from "../lists/uneceSealConditionCodeList.js";
import type { UneceSealingPartyRoleCodeList } from "../lists/uneceSealingPartyRoleCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A device used to secure an object and protect it from unauthorized entry or tampering during transport or other
 * logistics operations.
 * @see https://vocabulary.uncefact.org/Seal
 */
export interface IUneceSeal extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Seal;

	/**
	 * A unique identifier for this logistics seal.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The party issuing this logistics seal.
	 * @see https://vocabulary.uncefact.org/issuingParty
	 */
	issuingParty?: IUneceTradeParty;

	/**
	 * The code specifying the type of logistics seal.
	 * @see https://vocabulary.uncefact.org/logisticsSealTypeCode
	 */
	logisticsSealTypeCode?: string;

	/**
	 * The code specifying the role of the party responsible for the sealing of this logistics seal.
	 * @see https://vocabulary.uncefact.org/logisticsSealingPartyRoleCode
	 */
	logisticsSealingPartyRoleCode?: UneceSealingPartyRoleCodeList;

	/**
	 * The maximum unique identifier used for these logistics seals.
	 * @see https://vocabulary.uncefact.org/maximumId
	 */
	maximumId?: string;

	/**
	 * A code specifying a condition of this logistics seal.
	 * @see https://vocabulary.uncefact.org/sealConditionCode
	 */
	sealConditionCode?: UneceSealConditionCodeList[];

	/**
	 * The role, expressed as text, of the party responsible for the sealing of this logistics seal.
	 * @see https://vocabulary.uncefact.org/sealingPartyRole
	 */
	sealingPartyRole?: string;
}
