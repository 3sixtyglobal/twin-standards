// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceChequeTypeCodeList } from "../typeCodes/uneceChequeTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A written payment order to a bank to pay the stated sum from the drawer's account.
 * @see https://vocabulary.uncefact.org/Cheque
 */
export interface IUneceCheque {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Cheque;

	/**
	 * The indication of whether or not this payment cheque is applicable.
	 * @see https://vocabulary.uncefact.org/applicableIndicator
	 */
	applicableIndicator?: boolean;

	/**
	 * The clearing region, expressed as text, for this payment cheque.
	 * @see https://vocabulary.uncefact.org/clearingRegion
	 */
	clearingRegion?: string;

	/**
	 * A delivery method, expressed as text, for this payment cheque.
	 * @see https://vocabulary.uncefact.org/deliveryMethod
	 */
	deliveryMethod?: string;

	/**
	 * The code specifying the delivery method for this payment cheque.
	 * @see https://vocabulary.uncefact.org/deliveryMethodCode
	 */
	deliveryMethodCode?: string;

	/**
	 * A textual description of this payment cheque.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this payment cheque.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the instruction priority for this payment cheque, such as the urgency or order of importance for the
	 * processing of the payment cheque.
	 * @see https://vocabulary.uncefact.org/instructionPriorityCode
	 */
	instructionPriorityCode?: string;

	/**
	 * The textual description of the layout for this payment cheque, such as a description of the company logo and digitized
	 * signature printed on the cheque.
	 * @see https://vocabulary.uncefact.org/layoutDescription
	 */
	layoutDescription?: string;

	/**
	 * The date, time, date time, or other date time value when this payment cheque reaches maturity.
	 * @see https://vocabulary.uncefact.org/maturityDateTime
	 */
	maturityDateTime?: string;

	/**
	 * A memo field, expressed as text, on this payment cheque.
	 * @see https://vocabulary.uncefact.org/memoField
	 */
	memoField?: string;

	/**
	 * The number, expressed as text, of this payment cheque.
	 * @see https://vocabulary.uncefact.org/number
	 */
	number?: string;

	/**
	 * The print location, expressed as text, for this payment cheque.
	 * @see https://vocabulary.uncefact.org/printLocation
	 */
	printLocation?: string;

	/**
	 * The code specifying the type of payment cheque.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceChequeTypeCodeList | string;
}
