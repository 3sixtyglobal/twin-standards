// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
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
 * An involvement in an experience program in which some thing happens, such as a nature watching, woodware manufacturing,
 * meditation, holiday trip, dinner, theme park visit, could be experienced.
 * @see https://vocabulary.uncefact.org/ExperienceEvent
 */
export interface IExperienceEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExperienceEvent;

	/**
	 * A specified note applicable for this experience event.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: ISpecifiedNote[];

	/**
	 * A basic objective, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/basicObjective
	 */
	basicObjective?: string;

	/**
	 * The break up date, time, date time, or other date time value for this experience event.
	 * @see https://vocabulary.uncefact.org/breakUpDateTime
	 */
	breakUpDateTime?: string;

	/**
	 * A calculated price for this experience event.
	 * @see https://vocabulary.uncefact.org/calculatedPrice
	 */
	calculatedPrice?: ITradePrice[];

	/**
	 * The indication of whether or not a choice is allowed for this experience event.
	 * @see https://vocabulary.uncefact.org/choiceAllowedIndicator
	 */
	choiceAllowedIndicator?: boolean;

	/**
	 * The date sequence number for this experience event.
	 * @see https://vocabulary.uncefact.org/dateSequenceNumeric
	 */
	dateSequenceNumeric?: string;

	/**
	 * A textual description of this experience event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A distinctive feature specified for this experience event.
	 * @see https://vocabulary.uncefact.org/distinctiveFeature
	 */
	distinctiveFeature?: ISpecifiedFeature[];

	/**
	 * The identifier of this experience event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An indemnity clause, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/indemnityClause
	 */
	indemnityClause?: string;

	/**
	 * An instruction, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/instruction
	 */
	instruction?: string;

	/**
	 * A location, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/location
	 */
	location?: string;

	/**
	 * The meeting date, time, date time, or other date time value for this experience event.
	 * @see https://vocabulary.uncefact.org/meetingDateTime
	 */
	meetingDateTime?: string;

	/**
	 * A name, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An operational period specified for this experience event.
	 * @see https://vocabulary.uncefact.org/operationalPeriod
	 */
	operationalPeriod?: ISpecifiedPeriod[];

	/**
	 * A specified certificate provided for this experience event.
	 * @see https://vocabulary.uncefact.org/providedCertificate
	 */
	providedCertificate?: ISpecifiedCertificate[];

	/**
	 * A specified requirement provided for this experience event.
	 * @see https://vocabulary.uncefact.org/providedRequirement
	 */
	providedRequirement?: IRequirement[];

	/**
	 * The specified usage condition required for this experience event.
	 * @see https://vocabulary.uncefact.org/requiredUsageCondition
	 */
	requiredUsageCondition?: IUsageCondition[];

	/**
	 * A reservation guarantee, expressed as text, for this experience event.
	 * @see https://vocabulary.uncefact.org/reservationGuarantee
	 */
	reservationGuarantee?: string;

	/**
	 * The indication of whether or not a reservation is required for this experience event.
	 * @see https://vocabulary.uncefact.org/reservationRequiredIndicator
	 */
	reservationRequiredIndicator?: boolean;

	/**
	 * A party specified for this experience event.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: ITradeParty[];
}
