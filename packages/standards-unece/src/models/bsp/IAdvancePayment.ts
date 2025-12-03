// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IDocument } from "./IDocument.js";
import type { IPaymentTerms } from "./IPaymentTerms.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prepaid discharge of obligations in respect of funds or securities transferred between two or more parties.
 * @see https://vocabulary.uncefact.org/AdvancePayment
 */
export interface IAdvancePayment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AdvancePayment;

	/**
	 * The payment terms identified for this advance payment.
	 * @see https://vocabulary.uncefact.org/identifiedPaymentTerms
	 */
	identifiedPaymentTerms?: IPaymentTerms[];

	/**
	 * The identifier for this advance payment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A tax included in this advance payment.
	 * @see https://vocabulary.uncefact.org/includedTax
	 */
	includedTax?: ITradeTax[];

	/**
	 * An invoice document referenced by this advance payment.
	 * @see https://vocabulary.uncefact.org/invoiceSpecifiedDocument
	 */
	invoiceSpecifiedDocument?: IDocument[];

	/**
	 * The monetary value of the funds or securities paid in this advance payment.
	 * @see https://vocabulary.uncefact.org/paidAmount
	 */
	paidAmount?: IAmountType[];

	/**
	 * The formatted date or date time value when an advance payment has been received.
	 * @see https://vocabulary.uncefact.org/receivedDateTime
	 */
	receivedDateTime?: string;
}
