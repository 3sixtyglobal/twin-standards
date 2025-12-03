// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICommunication } from "./ICommunication.js";
import type { ISource } from "./ISource.js";
import type { ISpecifiedLocation } from "./ISpecifiedLocation.js";
import type { ISpecifiedRoute } from "./ISpecifiedRoute.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A structure or place, such as a restaurant, hotel, theme park, hot spring bathing pool, parking lot, or meeting room,
 * that provides a particular experience.
 * @see https://vocabulary.uncefact.org/ExperienceFacility
 */
export interface IExperienceFacility extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExperienceFacility;

	/**
	 * An architectural style, expressed as text, of this experience facility.
	 * @see https://vocabulary.uncefact.org/architecturalStyle
	 */
	architecturalStyle?: string;

	/**
	 * An available route specified for this experience facility.
	 * @see https://vocabulary.uncefact.org/availableRoute
	 */
	availableRoute?: ISpecifiedRoute[];

	/**
	 * The date of the completion of this experience facility.
	 * @see https://vocabulary.uncefact.org/completionDateTime
	 */
	completionDateTime?: string;

	/**
	 * A textual description of this experience facility.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of experience facility.
	 * @see https://vocabulary.uncefact.org/experienceFacilityTypeCode
	 */
	experienceFacilityTypeCode?: string;

	/**
	 * A type, expressed as text, of this experience facility.
	 * @see https://vocabulary.uncefact.org/facilityType
	 */
	facilityType?: string;

	/**
	 * The identifier of this experience facility.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date of the latest renovation of this experience facility.
	 * @see https://vocabulary.uncefact.org/latestRenovationDateTime
	 */
	latestRenovationDateTime?: string;

	/**
	 * A name, expressed as text, for this experience facility.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A physical location specified for this experience facility.
	 * @see https://vocabulary.uncefact.org/physicalSpecifiedLocation
	 */
	physicalSpecifiedLocation?: ISpecifiedLocation[];

	/**
	 * A specified universal communication for this experience facility.
	 * @see https://vocabulary.uncefact.org/specifiedCommunication
	 */
	specifiedCommunication?: ICommunication[];

	/**
	 * A water source used by this experience facility.
	 * @see https://vocabulary.uncefact.org/usedSource
	 */
	usedSource?: ISource[];
}
