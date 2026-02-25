// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceCommunicationChannelCodeList } from "../lists/uneceCommunicationChannelCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The exchange of thoughts, messages, or information, as universally exchanged by speech, signals, writing, or behaviour
 * between persons and/or organizations.
 * @see https://vocabulary.uncefact.org/Communication
 */
export interface IUneceCommunication {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Communication;

	/**
	 * Access information, expressed as text, for the mode of universal communication such as 9 or *70 for a telephone network.
	 * @see https://vocabulary.uncefact.org/access
	 */
	access?: string;

	/**
	 * The code specifying the area number for this universal communication.
	 * @see https://vocabulary.uncefact.org/areaNumberCode
	 */
	areaNumberCode?: string;

	/**
	 * The code specifying the channel or manner in which a universal communication can be made, such as telephone or email.
	 * @see https://vocabulary.uncefact.org/communicationChannelCode
	 */
	communicationChannelCode?: UneceCommunicationChannelCodeList;

	/**
	 * The text string of characters that make up the complete number for this universal communication.
	 * @see https://vocabulary.uncefact.org/completeNumber
	 */
	completeNumber?: string;

	/**
	 * The country access code for this universal communication number such as 44, 1, 353 etc.
	 * @see https://vocabulary.uncefact.org/countryNumberCode
	 */
	countryNumberCode?: string;

	/**
	 * A textual description of this universal communication.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The Uniform Resource Identifier (URI) of the email for this universal communication.
	 * @see https://vocabulary.uncefact.org/emailURIId
	 */
	emailURIId?: string;

	/**
	 * The extension number, expressed as text, assigned to this universal communication number to enable a caller to reach a
	 * specific party.
	 * @see https://vocabulary.uncefact.org/extensionNumber
	 */
	extensionNumber?: string;

	/**
	 * The indication of whether or not HTML format is preferred by the recipient for email universal communications.
	 * @see https://vocabulary.uncefact.org/hTMLPreferredIndicator
	 */
	hTMLPreferredIndicator?: boolean;

	/**
	 * The indication of whether or not this universal communication is invalid.
	 * @see https://vocabulary.uncefact.org/invalidIndicator
	 */
	invalidIndicator?: boolean;

	/**
	 * The universal communication number, expressed as text and not including country access code or the area number code, for
	 * this communication.
	 * @see https://vocabulary.uncefact.org/localNumber
	 */
	localNumber?: string;

	/**
	 * The Uniform Resource Identifier (URI), such as a web or an email address, for this universal communication.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string;

	/**
	 * The code specifying the use of this universal communication such as for business purposes or private.
	 * @see https://vocabulary.uncefact.org/useCode
	 */
	useCode?: string;

	/**
	 * The Uniform Resource Identifier (URI) of the website for this universal communication.
	 * @see https://vocabulary.uncefact.org/websiteURIId
	 */
	websiteURIId?: string;
}
