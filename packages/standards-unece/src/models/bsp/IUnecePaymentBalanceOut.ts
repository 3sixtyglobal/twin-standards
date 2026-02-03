// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Offset information to ensure that debits and credits are equal for a transaction.
 * @see https://vocabulary.uncefact.org/PaymentBalanceOut
 */
export interface IUnecePaymentBalanceOut extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentBalanceOut;

	/**
	 * A monetary value calculated for this payment balance out.
	 * @see https://vocabulary.uncefact.org/calculatedAmount
	 */
	calculatedAmount?: IUneceAmountType;

	/**
	 * A textual description of this payment balance out.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this payment balance out.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value of an occurrence of this payment balance out.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The code specifying the reason for this payment balance out.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * A textual description of the reason for this payment balance out.
	 * @see https://vocabulary.uncefact.org/reasonDescription
	 */
	reasonDescription?: string;
}
