// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A card used to represent a financial account for a trade settlement.
 * @see https://vocabulary.uncefact.org/FinancialCard
 */
export interface IUneceFinancialCard extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancialCard;

	/**
	 * The indication of whether or not this trade settlement financial card is applicable.
	 * @see https://vocabulary.uncefact.org/applicableIndicator
	 */
	applicableIndicator?: boolean;

	/**
	 * The cardholder name as it appears on this trade settlement financial card. This may include both an individual
	 * authorized to use the card as well as the organization that owns the card.
	 * @see https://vocabulary.uncefact.org/cardholderName
	 */
	cardholderName?: string;

	/**
	 * A monetary value of the credit available for this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/creditAvailableAmount
	 */
	creditAvailableAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the credit limit for this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/creditLimitAmount
	 */
	creditLimitAmount?: IUneceAmountType[];

	/**
	 * A textual description of this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date of expiry up to which this trade settlement financial card is valid.
	 * @see https://vocabulary.uncefact.org/expiryDate
	 */
	expiryDate?: string;

	/**
	 * The date of expiry up to which this trade settlement financial card is valid.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The unique identifier, commonly known as the card number, of this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The interest rate expressed as a percentage for this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/interestRatePercent
	 */
	interestRatePercent?: string;

	/**
	 * An issuing company name, expressed as text, for this trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/issuingCompanyName
	 */
	issuingCompanyName?: string;

	/**
	 * The indication of whether or not this trade settlement financial card has a microchip.
	 * @see https://vocabulary.uncefact.org/microchipIndicator
	 */
	microchipIndicator?: boolean;

	/**
	 * The code specifying the type of this trade settlement financial card, such as debit or credit.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The date from which this trade settlement financial card is valid.
	 * @see https://vocabulary.uncefact.org/validFromDateTime
	 */
	validFromDateTime?: string;

	/**
	 * The unique card verification number for security purposes to help verify the card user is in actual possession of this
	 * trade settlement financial card.
	 * @see https://vocabulary.uncefact.org/verificationNumeric
	 */
	verificationNumeric?: string;
}
