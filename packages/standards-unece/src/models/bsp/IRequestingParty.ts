// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICreditorFinancialAccount } from "./ICreditorFinancialAccount.js";
import type { IFinancingFinancialAccount } from "./IFinancingFinancialAccount.js";
import type { IProprietaryIdentity } from "./IProprietaryIdentity.js";
import type { AccessRightsTypeCodeList } from "../lists/accessRightsTypeCodeList.js";
import type { PartyTypeCodeList } from "../lists/partyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role as a requestor.
 * @see https://vocabulary.uncefact.org/RequestingParty
 */
export interface IRequestingParty extends IJsonLdNodeObject {
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
	accessRightsTypeAccessRightsCode?: AccessRightsTypeCodeList[];

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
	lineOfCreditSpecifiedFinancialAccount?: IFinancingFinancialAccount[];

	/**
	 * The name, expressed as text, for this requesting party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The code specifying the type of requesting party.
	 * @see https://vocabulary.uncefact.org/partyTypeCode
	 */
	partyTypeCode?: PartyTypeCodeList[];

	/**
	 * The creditor financial account, used for crediting, specified for this requesting party.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
	 */
	specifiedCreditorFinancialAccount?: ICreditorFinancialAccount[];

	/**
	 * A proprietary identity specified for this requesting party.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity?: IProprietaryIdentity[];
}
