// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceAmountCurrency } from "../lists/uneceAmountCurrency.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A number of monetary units specified in a currency where the unit of the currency is explicit or implied.
 * @see https://vocabulary.uncefact.org/AmountType
 */
export interface IUneceAmountType extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AmountType;

	/**
	 * A number of monetary units.
	 * @see https://vocabulary.uncefact.org/AmountTypeValue
	 */
	AmountTypeValue?: string;

	/**
	 * An amount currency code.
	 * @see https://vocabulary.uncefact.org/AmountTypeCurrency
	 */
	AmountTypeCurrency?: UneceAmountCurrency;
}
