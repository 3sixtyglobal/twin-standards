// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUnecePaymentTradeSettlement } from "./IUnecePaymentTradeSettlement.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceRequirementTypeCodeList } from "../typeCodes/uneceRequirementTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Common conditions contained in a contract or agreement applicable between trading partners.
 * @see https://vocabulary.uncefact.org/Requirement
 */
export interface IUneceRequirement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Requirement;

	/**
	 * A textual description of this specified requirement.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A rule, expressed as text, for this specified requirement.
	 * @see https://vocabulary.uncefact.org/rule
	 */
	rule?: string;

	/**
	 * The payment trade settlement for this specified requirement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
	 */
	specifiedPaymentTradeSettlement?: IUnecePaymentTradeSettlement[];

	/**
	 * The party specifying this specified requirement.
	 * @see https://vocabulary.uncefact.org/specifyingParty
	 */
	specifyingParty?: IUneceTradeParty;

	/**
	 * The code specifying the type of specified requirement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceRequirementTypeCodeList | string;
}
