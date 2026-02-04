// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceXHEContext } from "./IUneceXHEContext.js";
import type { IUneceXHEParty } from "./IUneceXHEParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for electronic matter that provides XHE (Exchange Header Envelope) information or evidence.
 * @see https://vocabulary.uncefact.org/XHEDocument
 */
export interface IUneceXHEDocument extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEDocument;

	/**
	 * The date, time, date time or other date time value of the creation of this XHE document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The identifier for this XHE document.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A recipient party for this XHE document.
	 * @see https://vocabulary.uncefact.org/recipientXHEParty
	 */
	recipientXHEParty: IUneceXHEParty[];

	/**
	 * A context scope for this XHE document.
	 * @see https://vocabulary.uncefact.org/scopeContext
	 */
	scopeContext?: IUneceXHEContext[];

	/**
	 * The sender party for this XHE document.
	 * @see https://vocabulary.uncefact.org/senderXHEParty
	 */
	senderXHEParty?: IUneceXHEParty;

	/**
	 * The indication of whether or not this XHE document is a test .
	 * @see https://vocabulary.uncefact.org/testIndicator
	 */
	testIndicator?: boolean;

	/**
	 * The UUID (Universally Unique IDentifier) of this XHE document.
	 * @see https://vocabulary.uncefact.org/uUIDId
	 */
	uUIDId?: string;
}
