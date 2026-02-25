// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceCommitmentLevelCodeList } from "../lists/uneceCommitmentLevelCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of terms and conditions by which a supply chain forecast has been or will be made.
 * @see https://vocabulary.uncefact.org/ForecastTerms
 */
export interface IUneceForecastTerms {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ForecastTerms;

	/**
	 * A code specifying a type of date in these supply chain forecast terms.
	 * @see https://vocabulary.uncefact.org/dateTypeCode
	 */
	dateTypeCode?: string;

	/**
	 * The code specifying the forecast type in these supply chain forecast terms.
	 * @see https://vocabulary.uncefact.org/forecastTypeCode
	 */
	forecastTypeCode?: string;

	/**
	 * A code specifying a commitment level in these supply chain forecast terms.
	 * @see https://vocabulary.uncefact.org/supplyChainForecastTermsCommitmentLevelCode
	 */
	supplyChainForecastTermsCommitmentLevelCode?: UneceCommitmentLevelCodeList[];

	/**
	 * A code specifying a frequency in these supply chain forecast terms.
	 * @see https://vocabulary.uncefact.org/supplyChainForecastTermsFrequencyCode
	 */
	supplyChainForecastTermsFrequencyCode?: string;
}
