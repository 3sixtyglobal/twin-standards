// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ITTParty } from "./ITTParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties
 * for Track and Trace (TT) purposes.
 * @see https://vocabulary.uncefact.org/TTExchangedDocument
 */
export interface ITTExchangedDocument extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTExchangedDocument;

	/**
	 * The textual description of this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of the issuance of this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The receiving party specified for this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/receiverSpecifiedParty
	 */
	receiverSpecifiedParty?: ITTParty[];

	/**
	 * The sending party specified for this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/senderSpecifiedParty
	 */
	senderSpecifiedParty?: ITTParty[];

	/**
	 * The code specifying a purpose of this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/tTExchangedDocumentPurposeCode
	 */
	tTExchangedDocumentPurposeCode?: string;

	/**
	 * The code specifying the status of this TT exchanged document.
	 * @see https://vocabulary.uncefact.org/tTExchangedDocumentStatusCode
	 */
	tTExchangedDocumentStatusCode?: string;

	/**
	 * The code specifying the type of TT exchanged document.
	 * @see https://vocabulary.uncefact.org/tTExchangedDocumentTypeCode
	 */
	tTExchangedDocumentTypeCode?: string;
}
