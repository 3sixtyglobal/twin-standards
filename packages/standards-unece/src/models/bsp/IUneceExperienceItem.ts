// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceExperienceEvent } from "./IUneceExperienceEvent.js";
import type { IUneceExperienceProduct } from "./IUneceExperienceProduct.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of information specific to the involvement of a person or persons in a happening, such as a theme park, a
 * guided tour being used or reported on for trade purposes.
 * @see https://vocabulary.uncefact.org/ExperienceItem
 */
export interface IUneceExperienceItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExperienceItem;

	/**
	 * An applicable period for this specified experience item.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The code specifying the type of quantity unit applicable for this specified experience item.
	 * @see https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode
	 */
	applicableQuantityUnitTypeCode?: string;

	/**
	 * An available period for this specified experience item.
	 * @see https://vocabulary.uncefact.org/availablePeriod
	 */
	availablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * An available product for this specified experience item.
	 * @see https://vocabulary.uncefact.org/availableProduct
	 */
	availableProduct?: IUneceExperienceProduct[];

	/**
	 * The number of units available for this specified experience item.
	 * @see https://vocabulary.uncefact.org/availableUnitQuantity
	 */
	availableUnitQuantity?: IUneceQuantityType[];

	/**
	 * A brand name, expressed as text, of this specified experience item.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * A calculated price for this specified experience item.
	 * @see https://vocabulary.uncefact.org/calculatedPrice
	 */
	calculatedPrice?: IUneceTradePrice[];

	/**
	 * A capability level, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/capabilityLevel
	 */
	capabilityLevel?: string;

	/**
	 * The code specifying the category for this specified experience item.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A textual description of this specified experience item.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A destination, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/destination
	 */
	destination?: string;

	/**
	 * The indication of whether or not guest special care is applicable for this specified experience item.
	 * @see https://vocabulary.uncefact.org/guestSpecialCareIndicator
	 */
	guestSpecialCareIndicator?: boolean;

	/**
	 * The identifier of this specified experience item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An indemnity clause, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/indemnityClause
	 */
	indemnityClause?: string;

	/**
	 * An instruction, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/instruction
	 */
	instruction?: string;

	/**
	 * A monetary value of a lower price limit of this specified experience item.
	 * @see https://vocabulary.uncefact.org/lowerPriceLimitAmount
	 */
	lowerPriceLimitAmount?: IUneceAmountType[];

	/**
	 * The maximum number of guests for this specified experience item.
	 * @see https://vocabulary.uncefact.org/maximumGuestQuantity
	 */
	maximumGuestQuantity?: IUneceQuantityType[];

	/**
	 * The minimum number of guests for this specified experience item.
	 * @see https://vocabulary.uncefact.org/minimumGuestQuantity
	 */
	minimumGuestQuantity?: IUneceQuantityType[];

	/**
	 * A name, expressed as text, of this specified experience item.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A reservation guarantee, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/reservationGuarantee
	 */
	reservationGuarantee?: string;

	/**
	 * The code specifying the response status for this specified experience item.
	 * @see https://vocabulary.uncefact.org/responseStatusCode
	 */
	responseStatusCode?: string;

	/**
	 * An event for this specified experience item.
	 * @see https://vocabulary.uncefact.org/specifiedExperienceEvent
	 */
	specifiedExperienceEvent?: IUneceExperienceEvent[];

	/**
	 * A party specified for this specified experience item.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: IUneceTradeParty[];

	/**
	 * The code specifying the status for this specified experience item.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A theme, expressed as text, for this specified experience item.
	 * @see https://vocabulary.uncefact.org/theme
	 */
	theme?: string;

	/**
	 * The code specifying the type of theme for this specified experience item.
	 * @see https://vocabulary.uncefact.org/themeTypeCode
	 */
	themeTypeCode?: string;

	/**
	 * The number of units for this specified experience item.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType[];

	/**
	 * A monetary value of an upper price limit of this specified experience item.
	 * @see https://vocabulary.uncefact.org/upperPriceLimitAmount
	 */
	upperPriceLimitAmount?: IUneceAmountType[];

	/**
	 * A visiting period for this specified experience item.
	 * @see https://vocabulary.uncefact.org/visitingPeriod
	 */
	visitingPeriod?: IUneceSpecifiedPeriod[];
}
