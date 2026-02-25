// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceTradeLocation } from "./IUneceTradeLocation.js";
import type { UneceDeliveryTermsCodeList } from "../lists/uneceDeliveryTermsCodeList.js";
import type { UneceDeliveryTermsFunctionCodeList } from "../lists/uneceDeliveryTermsFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Conditions agreed upon between the parties with regard to the delivery of goods and or services for trade purposes.
 * @see https://vocabulary.uncefact.org/DeliveryTerms
 */
export interface IUneceDeliveryTerms {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DeliveryTerms;

	/**
	 * The code specifying whether the place specified by these trade delivery terms is located in the country where a
	 * declaration is made, in another member country of the same economic or customs union, or in a third country.
	 * @see https://vocabulary.uncefact.org/declarationCountryRelationshipCode
	 */
	declarationCountryRelationshipCode?: string;

	/**
	 * The code specifying the delivery discontinuation for this trade delivery terms.
	 * @see https://vocabulary.uncefact.org/deliveryDiscontinuationCode
	 */
	deliveryDiscontinuationCode?: string;

	/**
	 * The code specifying the type of delivery for these trade delivery terms.
	 * @see https://vocabulary.uncefact.org/deliveryTermsDeliveryTypeCode
	 */
	deliveryTermsDeliveryTypeCode?: UneceDeliveryTermsCodeList;

	/**
	 * A code specifying a function of these trade delivery terms.
	 * @see https://vocabulary.uncefact.org/deliveryTermsFunctionCode
	 */
	deliveryTermsFunctionCode?: UneceDeliveryTermsFunctionCodeList[];

	/**
	 * A textual description of these trade delivery terms.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The indication of whether or not these trade delivery terms allow a partial delivery.
	 * @see https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator
	 */
	partialDeliveryAllowedIndicator?: boolean;

	/**
	 * The trade location relevant for these trade delivery terms.
	 * @see https://vocabulary.uncefact.org/relevantLocation
	 */
	relevantLocation?: IUneceTradeLocation;

	/**
	 * A code specifying the risk responsibility for these trade delivery terms.
	 * @see https://vocabulary.uncefact.org/riskResponsibilityCode
	 */
	riskResponsibilityCode?: string;
}
