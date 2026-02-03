// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceClause } from "./IUneceClause.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceGovernmentActionCodeList } from "../lists/uneceGovernmentActionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A proof that a document is genuine.
 * @see https://vocabulary.uncefact.org/Authentication
 */
export interface IUneceAuthentication extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Authentication;

	/**
	 * The actual date, time, date time, or other date time value of this document authentication.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 */
	actualDateTime?: string;

	/**
	 * A code specifying a category for this document authentication.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the type of document authentication.
	 * @see https://vocabulary.uncefact.org/governmentActionTypeCode
	 */
	governmentActionTypeCode?: UneceGovernmentActionCodeList;

	/**
	 * A unique identifier for this document authentication.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A document clause included in this document authentication.
	 * @see https://vocabulary.uncefact.org/includedClause
	 */
	includedClause?: IUneceClause;

	/**
	 * Information, expressed as text, for this document authentication.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The referenced location of issue of this document authentication.
	 * @see https://vocabulary.uncefact.org/issueLocation
	 */
	issueLocation?: IUneceLocation;

	/**
	 * The issue location for this document authentication.
	 * @see https://vocabulary.uncefact.org/issueLogisticsLocation
	 */
	issueLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * The trade party providing the location for this document authentication.
	 * @see https://vocabulary.uncefact.org/locationProviderParty
	 */
	locationProviderParty?: IUneceTradeParty;

	/**
	 * The trade party providing this document authentication.
	 * @see https://vocabulary.uncefact.org/providerParty
	 */
	providerParty?: IUneceTradeParty;

	/**
	 * The code specifying the type of representation of this document authentication, such as direct or indirect.
	 * @see https://vocabulary.uncefact.org/representationTypeCode
	 */
	representationTypeCode?: string;

	/**
	 * The signatory, expressed as text, for this document authentication.
	 * @see https://vocabulary.uncefact.org/signatory
	 */
	signatory?: string;

	/**
	 * The signatory image, expressed as a binary object, for this document authentication.
	 * @see https://vocabulary.uncefact.org/signatoryImageBinaryObject
	 */
	signatoryImageBinaryObject?: string;

	/**
	 * The statement, expressed as text, for this document authentication.
	 * @see https://vocabulary.uncefact.org/statement
	 */
	statement?: string;

	/**
	 * The code specifying the statement for this document authentication.
	 * @see https://vocabulary.uncefact.org/statementCode
	 */
	statementCode?: string;

	/**
	 * The unique identifier of a transport means for this document authentication.
	 * @see https://vocabulary.uncefact.org/transportMeansId
	 */
	transportMeansId?: string;
}
