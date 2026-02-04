// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
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
 * An involvement in an experience program in which some thing happens, such as a nature watching, woodware manufacturing,
 * meditation, holiday trip, dinner, theme park visit, could be experienced.
 * @see https://vocabulary.uncefact.org/ExperienceEvent
 */
export interface IUneceExperienceEvent extends IJsonLdNodeObject {
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
	applicableSpecifiedNote?: IUneceSpecifiedNote[];

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
	calculatedPrice?: IUneceTradePrice[];

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
	distinctiveFeature?: IUneceSpecifiedFeature[];

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
	operationalPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A specified certificate provided for this experience event.
	 * @see https://vocabulary.uncefact.org/providedCertificate
	 */
	providedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A specified requirement provided for this experience event.
	 * @see https://vocabulary.uncefact.org/providedRequirement
	 */
	providedRequirement?: IUneceRequirement[];

	/**
	 * The specified usage condition required for this experience event.
	 * @see https://vocabulary.uncefact.org/requiredUsageCondition
	 */
	requiredUsageCondition?: IUneceUsageCondition[];

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
	specifiedTradeParty?: IUneceTradeParty[];
}
