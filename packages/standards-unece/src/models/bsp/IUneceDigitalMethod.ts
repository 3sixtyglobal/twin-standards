// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The use of online and digital technologies to collect monetary payment amounts.
 * @see https://vocabulary.uncefact.org/DigitalMethod
 */
export interface IUneceDigitalMethod extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DigitalMethod;

	/**
	 * An account holder's name, expressed as text, for this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/accountHolderName
	 */
	accountHolderName?: string;

	/**
	 * The indication of whether or not this digital method used for payment is applicable.
	 * @see https://vocabulary.uncefact.org/applicableIndicator
	 */
	applicableIndicator?: boolean;

	/**
	 * A cardholder's name, expressed as text, for this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/cardholderName
	 */
	cardholderName?: string;

	/**
	 * A textual description of this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The expiry date or date time of this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier of the digital method used for payment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An issuing company name, expressed as text, for this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/issuingCompanyName
	 */
	issuingCompanyName?: string;

	/**
	 * The code specifying the type of digital method used for payment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The date or date time from when this digital method used for payment is valid.
	 * @see https://vocabulary.uncefact.org/validFromDateTime
	 */
	validFromDateTime?: string;

	/**
	 * The verification number for this digital method used for payment.
	 * @see https://vocabulary.uncefact.org/verificationNumeric
	 */
	verificationNumeric?: string;
}
