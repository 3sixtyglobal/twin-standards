// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCreditorFinancialAccount } from "./IUneceCreditorFinancialAccount.js";
import type { IUneceFinancingFinancialAccount } from "./IUneceFinancingFinancialAccount.js";
import type { IUneceProprietaryIdentity } from "./IUneceProprietaryIdentity.js";
import type { UneceAccessRightsTypeCodeList } from "../lists/uneceAccessRightsTypeCodeList.js";
import type { UnecePartyTypeCodeList } from "../lists/unecePartyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role as a requestor.
 * @see https://vocabulary.uncefact.org/RequestingParty
 */
export interface IUneceRequestingParty extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RequestingParty;

	/**
	 * The code specifying the access rights, such as unlimited, restricted, prohibited, for this requesting party.
	 * @see https://vocabulary.uncefact.org/accessRightsTypeAccessRightsCode
	 */
	accessRightsTypeAccessRightsCode?: UneceAccessRightsTypeCodeList;

	/**
	 * The unique Business Entity Identifier (BEI) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier
	 * Codes) for this requesting party.
	 * @see https://vocabulary.uncefact.org/bEIId
	 */
	bEIId?: string;

	/**
	 * The textual description of this requesting party.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this requesting party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a language for this requesting party.
	 * @see https://vocabulary.uncefact.org/languageCode
	 */
	languageCode?: string;

	/**
	 * The financing financial account, used for managing the line of credit, specified for this requesting party.
	 * @see https://vocabulary.uncefact.org/lineOfCreditSpecifiedFinancialAccount
	 */
	lineOfCreditSpecifiedFinancialAccount?: IUneceFinancingFinancialAccount;

	/**
	 * The name, expressed as text, for this requesting party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of requesting party.
	 * @see https://vocabulary.uncefact.org/partyTypeCode
	 */
	partyTypeCode?: UnecePartyTypeCodeList;

	/**
	 * The creditor financial account, used for crediting, specified for this requesting party.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
	 */
	specifiedCreditorFinancialAccount?: IUneceCreditorFinancialAccount;

	/**
	 * A proprietary identity specified for this requesting party.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity?: IUneceProprietaryIdentity[];
}
