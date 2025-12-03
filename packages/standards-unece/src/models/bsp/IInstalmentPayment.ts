// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IFinancingRequestResultDocument } from "./IFinancingRequestResultDocument.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A discharge of obligations in respect of funds or securities, transferred through one of several payments, between two
 * or more parties.
 * @see https://vocabulary.uncefact.org/InstalmentPayment
 */
export interface IInstalmentPayment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InstalmentPayment;

	/**
	 * The due date for this instalment payment.
	 * @see https://vocabulary.uncefact.org/dueDateTime
	 */
	dueDateTime?: string;

	/**
	 * A monetary value paid or to be paid for this instalment payment.
	 * @see https://vocabulary.uncefact.org/paidAmount
	 */
	paidAmount?: IAmountType[];

	/**
	 * The sequence identifier for this instalment payment.
	 * @see https://vocabulary.uncefact.org/sequenceId
	 */
	sequenceId?: string;

	/**
	 * The financing request result document specified for this instalment payment.
	 * @see https://vocabulary.uncefact.org/specifiedFinancingRequestResultDocument
	 */
	specifiedFinancingRequestResultDocument?: IFinancingRequestResultDocument[];
}
