// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceExperienceEvent } from "./IUneceExperienceEvent.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRequirement } from "./IUneceRequirement.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedFeature } from "./IUneceSpecifiedFeature.js";
import type { IUneceSpecifiedNote } from "./IUneceSpecifiedNote.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { IUneceUsageCondition } from "./IUneceUsageCondition.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any service that provides an involvement, such as an adventure experience, wellness experience, social or business
 * activity experience.
 * @see https://vocabulary.uncefact.org/ExperienceProduct
 */
export interface IUneceExperienceProduct extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExperienceProduct;

	/**
	 * The code specifying the type of quantity unit applicable for this experience product.
	 * @see https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode
	 */
	applicableQuantityUnitTypeCode?: string;

	/**
	 * A note applicable for this experience product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: IUneceSpecifiedNote[];

	/**
	 * A brand name, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * A calculated price for this experience product.
	 * @see https://vocabulary.uncefact.org/calculatedPrice
	 */
	calculatedPrice?: IUneceTradePrice[];

	/**
	 * The code specifying the category of this experience product.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The indication of whether or not a certified person arrangement is made for this experience product.
	 * @see https://vocabulary.uncefact.org/certifiedPersonArrangementIndicator
	 */
	certifiedPersonArrangementIndicator?: boolean;

	/**
	 * A textual description of this experience product.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A distinctive feature of this experience product.
	 * @see https://vocabulary.uncefact.org/distinctiveFeature
	 */
	distinctiveFeature?: IUneceSpecifiedFeature[];

	/**
	 * The identifier of this experience product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An event included within this experience product.
	 * @see https://vocabulary.uncefact.org/includedEvent
	 */
	includedEvent?: IUneceExperienceEvent[];

	/**
	 * An indemnity clause, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/indemnityClause
	 */
	indemnityClause?: string;

	/**
	 * An instruction, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/instruction
	 */
	instruction?: string;

	/**
	 * A location, expressed as text, specified for this experience product.
	 * @see https://vocabulary.uncefact.org/location
	 */
	location?: string;

	/**
	 * The maximum number of units of this experience product.
	 * @see https://vocabulary.uncefact.org/maximumUnitQuantity
	 */
	maximumUnitQuantity?: IUneceQuantityType;

	/**
	 * The minimum number of units of this experience product.
	 * @see https://vocabulary.uncefact.org/minimumUnitQuantity
	 */
	minimumUnitQuantity?: IUneceQuantityType;

	/**
	 * A name, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An objective, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/objective
	 */
	objective?: string;

	/**
	 * A operational period for this experience product.
	 * @see https://vocabulary.uncefact.org/operationalPeriod
	 */
	operationalPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * An optional product for this experience product.
	 * @see https://vocabulary.uncefact.org/optionalProduct
	 */
	optionalProduct?: IUneceExperienceProduct[];

	/**
	 * A certificate provided for this experience product.
	 * @see https://vocabulary.uncefact.org/providedCertificate
	 */
	providedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A requirement provided for this experience product.
	 * @see https://vocabulary.uncefact.org/providedRequirement
	 */
	providedRequirement?: IUneceRequirement[];

	/**
	 * The indication of whether or not this experience product requires a reservation guarantee.
	 * @see https://vocabulary.uncefact.org/requiredReservationGuaranteeIndicator
	 */
	requiredReservationGuaranteeIndicator?: boolean;

	/**
	 * A required usage condition for this experience product.
	 * @see https://vocabulary.uncefact.org/requiredUsageCondition
	 */
	requiredUsageCondition?: IUneceUsageCondition[];

	/**
	 * A reservation guarantee, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/reservationGuarantee
	 */
	reservationGuarantee?: string;

	/**
	 * A party specified for this experience product.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: IUneceTradeParty[];

	/**
	 * A theme, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/theme
	 */
	theme?: string;

	/**
	 * The code specifying the type of theme for this experience product.
	 * @see https://vocabulary.uncefact.org/themeTypeCode
	 */
	themeTypeCode?: string;
}
