// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalCoordinate } from "./IUneceGeographicalCoordinate.js";
import type { IUneceGeographicalFeature } from "./IUneceGeographicalFeature.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceLocationParty } from "./IUneceLocationParty.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSubordinateLocation } from "./IUneceSubordinateLocation.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A logistics related physical location or place.
 * @see https://vocabulary.uncefact.org/LogisticsLocation
 */
export interface IUneceLogisticsLocation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsLocation;

	/**
	 * A geographical feature associated with this logistics location.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalFeature
	 */
	associatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * A country name, expressed as text, of this logistics location.
	 * @see https://vocabulary.uncefact.org/countryName
	 */
	countryName?: string;

	/**
	 * The identifier of the country sub-division for this logistics related location.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string;

	/**
	 * A textual description of this logistics related location.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A facility location referenced for this logistics location.
	 * @see https://vocabulary.uncefact.org/facilityLocation
	 */
	facilityLocation?: IUneceLocation[];

	/**
	 * The indication of whether or not this logistics location is in a health affected area.
	 * @see https://vocabulary.uncefact.org/healthAffectedAreaIndicator
	 */
	healthAffectedAreaIndicator?: boolean;

	/**
	 * A unique identifier for this logistics related location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
	 * Location Number (GLN).
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A supply chain inspection event at this logistics location.
	 * @see https://vocabulary.uncefact.org/inspectionEvent
	 */
	inspectionEvent?: IUneceSupplyChainEvent[];

	/**
	 * A code specifying the type of this logistics related location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: UneceLocationFunctionCodeList[];

	/**
	 * The unique identifier of a country for this logistics location.
	 * @see https://vocabulary.uncefact.org/logisticsLocationCountryId
	 */
	logisticsLocationCountryId?: UneceCountryId[];

	/**
	 * A name, expressed as text, of this logistics related location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Geographical coordinate information for this logistics related location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalCoordinate
	 */
	physicalGeographicalCoordinate?: IUneceGeographicalCoordinate[];

	/**
	 * The postal trade address information for this logistics related location.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: IUneceTradeAddress[];

	/**
	 * A geographical feature previously associated with this logistics location.
	 * @see https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature
	 */
	previousAssociatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * A servicing party specified for this logistics related location.
	 * @see https://vocabulary.uncefact.org/servicingSpecifiedParty
	 */
	servicingSpecifiedParty?: IUneceLocationParty[];

	/**
	 * An inspection event specified for this logistics location.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IUneceInspectionEvent[];

	/**
	 * A period of stay at this logistics location.
	 * @see https://vocabulary.uncefact.org/stayPeriod
	 */
	stayPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A logistics location subordinate to this logistics location.
	 * @see https://vocabulary.uncefact.org/subordinateRelatedLocation
	 */
	subordinateRelatedLocation?: IUneceLogisticsLocation[];

	/**
	 * A location subordinate to this logistics related location.
	 * @see https://vocabulary.uncefact.org/subordinateSubordinateLocation
	 */
	subordinateSubordinateLocation?: IUneceSubordinateLocation;

	/**
	 * The time offset value from the Universal Time Coordinate (UTC) for this logistics related location.
	 * @see https://vocabulary.uncefact.org/uTCOffsetNumeric
	 */
	uTCOffsetNumeric?: string;
}
