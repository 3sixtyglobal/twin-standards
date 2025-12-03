// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Coins, banknotes paid by the recipient of goods or services to the provider.
 * @see https://vocabulary.uncefact.org/Cash
 */
export interface ICash extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Cash;

	/**
	 * The indication of whether or not this cash used for payment. is applicable.
	 * @see https://vocabulary.uncefact.org/applicableIndicator
	 */
	applicableIndicator?: boolean;

	/**
	 * The code specifying a currency of this cash used for payment.
	 * @see https://vocabulary.uncefact.org/currencyCode
	 */
	currencyCode?: string;

	/**
	 * A textual description of cash used for this payment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of cash used for payment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
