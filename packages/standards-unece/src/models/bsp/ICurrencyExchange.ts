// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The conversion of one currency to another for trade purposes.
 * @see https://vocabulary.uncefact.org/CurrencyExchange
 */
export interface ICurrencyExchange extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CurrencyExchange;

	/**
	 * An associated document referenced for this trade related currency exchange.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * The rate factor used for conversion from the source currency to the target currency for trade purposes.
	 * @see https://vocabulary.uncefact.org/conversionRate
	 */
	conversionRate?: string;

	/**
	 * The date, time, date time or other date time value of the conversion rate for this trade related currency exchange.
	 * @see https://vocabulary.uncefact.org/conversionRateDateTime
	 */
	conversionRateDateTime?: string;

	/**
	 * The code specifying the source currency of a trade related currency conversion.
	 * @see https://vocabulary.uncefact.org/currencySourceCurrencyCode
	 */
	currencySourceCurrencyCode?: CurrencyCodeList;

	/**
	 * The code specifying the target currency of a trade related currency conversion.
	 * @see https://vocabulary.uncefact.org/currencyTargetCurrencyCode
	 */
	currencyTargetCurrencyCode?: CurrencyCodeList;

	/**
	 * A document referenced for this trade related currency exchange.
	 * @see https://vocabulary.uncefact.org/document
	 */
	document?: IDocument[];

	/**
	 * The numeric unit basis of the source currency used in this trade related currency exchange rate calculation.
	 * @see https://vocabulary.uncefact.org/sourceUnitBasisNumeric
	 */
	sourceUnitBasisNumeric?: string;

	/**
	 * The numeric unit basis of the target currency used in this trade related currency exchange rate calculation.
	 * @see https://vocabulary.uncefact.org/targetUnitBaseNumeric
	 */
	targetUnitBaseNumeric?: string;

	/**
	 * The unique identifier of the currency exchange market from which the exchange rate is taken for trade purposes.
	 * @see https://vocabulary.uncefact.org/tradeCurrencyExchangeMarketId
	 */
	tradeCurrencyExchangeMarketId?: string;
}
