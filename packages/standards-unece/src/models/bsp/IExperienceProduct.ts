// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IExperienceEvent } from "./IExperienceEvent.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRequirement } from "./IRequirement.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedFeature } from "./ISpecifiedFeature.js";
import type { ISpecifiedNote } from "./ISpecifiedNote.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradePrice } from "./ITradePrice.js";
import type { IUsageCondition } from "./IUsageCondition.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any service that provides an involvement, such as an adventure experience, wellness experience, social or business
 * activity experience.
 * @see https://vocabulary.uncefact.org/ExperienceProduct
 */
export interface IExperienceProduct extends IJsonLdNodeObject {
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
	applicableSpecifiedNote?: ISpecifiedNote[];

	/**
	 * A brand name, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * A calculated price for this experience product.
	 * @see https://vocabulary.uncefact.org/calculatedPrice
	 */
	calculatedPrice?: ITradePrice[];

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
	distinctiveFeature?: ISpecifiedFeature[];

	/**
	 * The identifier of this experience product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An event included within this experience product.
	 * @see https://vocabulary.uncefact.org/includedEvent
	 */
	includedEvent?: IExperienceEvent[];

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
	maximumUnitQuantity?: IQuantityType[];

	/**
	 * The minimum number of units of this experience product.
	 * @see https://vocabulary.uncefact.org/minimumUnitQuantity
	 */
	minimumUnitQuantity?: IQuantityType[];

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
	operationalPeriod?: ISpecifiedPeriod[];

	/**
	 * An optional product for this experience product.
	 * @see https://vocabulary.uncefact.org/optionalProduct
	 */
	optionalProduct?: IExperienceProduct[];

	/**
	 * A certificate provided for this experience product.
	 * @see https://vocabulary.uncefact.org/providedCertificate
	 */
	providedCertificate?: ISpecifiedCertificate[];

	/**
	 * A requirement provided for this experience product.
	 * @see https://vocabulary.uncefact.org/providedRequirement
	 */
	providedRequirement?: IRequirement[];

	/**
	 * The indication of whether or not this experience product requires a reservation guarantee.
	 * @see https://vocabulary.uncefact.org/requiredReservationGuaranteeIndicator
	 */
	requiredReservationGuaranteeIndicator?: boolean;

	/**
	 * A required usage condition for this experience product.
	 * @see https://vocabulary.uncefact.org/requiredUsageCondition
	 */
	requiredUsageCondition?: IUsageCondition[];

	/**
	 * A reservation guarantee, expressed as text, for this experience product.
	 * @see https://vocabulary.uncefact.org/reservationGuarantee
	 */
	reservationGuarantee?: string;

	/**
	 * A party specified for this experience product.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: ITradeParty[];

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
