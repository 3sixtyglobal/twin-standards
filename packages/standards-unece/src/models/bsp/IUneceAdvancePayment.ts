// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUnecePaymentTerms } from "./IUnecePaymentTerms.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A prepaid discharge of obligations in respect of funds or securities transferred between two or more parties.
 * @see https://vocabulary.uncefact.org/AdvancePayment
 */
export interface IUneceAdvancePayment {
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
	identifiedPaymentTerms?: IUnecePaymentTerms;

	/**
	 * The identifier for this advance payment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A tax included in this advance payment.
	 * @see https://vocabulary.uncefact.org/includedTax
	 */
	includedTax?: IUneceTradeTax[];

	/**
	 * An invoice document referenced by this advance payment.
	 * @see https://vocabulary.uncefact.org/invoiceSpecifiedDocument
	 */
	invoiceSpecifiedDocument?: IUneceDocument[];

	/**
	 * The monetary value of the funds or securities paid in this advance payment.
	 * @see https://vocabulary.uncefact.org/paidAmount
	 */
	paidAmount: IUneceAmountType;

	/**
	 * The formatted date or date time value when an advance payment has been received.
	 * @see https://vocabulary.uncefact.org/receivedDateTime
	 * @format date-time
	 */
	receivedDateTime?: string;
}
