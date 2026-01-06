// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceFinancingStatus } from "./IUneceFinancingStatus.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data that reports the result of a financing request.
 * @see https://vocabulary.uncefact.org/FinancingRequestResultDocument
 */
export interface IUneceFinancingRequestResultDocument extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancingRequestResultDocument;

	/**
	 * The financed rate, expressed as a percentage, in this financing request result document.
	 * @see https://vocabulary.uncefact.org/financedRatePercent
	 */
	financedRatePercent?: string;

	/**
	 * A monetary value of the financed total amount in this financing request result document.
	 * @see https://vocabulary.uncefact.org/financedTotalAmount
	 */
	financedTotalAmount?: IUneceAmountType[];

	/**
	 * The financing status specified in this financing request result document.
	 * @see https://vocabulary.uncefact.org/specifiedFinancingStatus
	 */
	specifiedFinancingStatus?: IUneceFinancingStatus[];
}
