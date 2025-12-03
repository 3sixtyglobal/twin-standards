// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IGeographicalCoordinate } from "./IGeographicalCoordinate.js";
import type { IGeographicalFeature } from "./IGeographicalFeature.js";
import type { IInspectionEvent } from "./IInspectionEvent.js";
import type { ILocation } from "./ILocation.js";
import type { ILocationParty } from "./ILocationParty.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISubordinateLocation } from "./ISubordinateLocation.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { CountryId } from "../lists/countryId.js";
import type { LocationFunctionCodeList } from "../lists/locationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A logistics related physical location or place.
 * @see https://vocabulary.uncefact.org/LogisticsLocation
 */
export interface ILogisticsLocation extends IJsonLdNodeObject {
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
	associatedGeographicalFeature?: IGeographicalFeature[];

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
	facilityLocation?: ILocation[];

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
	inspectionEvent?: ISupplyChainEvent[];

	/**
	 * A code specifying the type of this logistics related location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: LocationFunctionCodeList[];

	/**
	 * The unique identifier of a country for this logistics location.
	 * @see https://vocabulary.uncefact.org/logisticsLocationCountryId
	 */
	logisticsLocationCountryId?: CountryId[];

	/**
	 * A name, expressed as text, of this logistics related location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * Geographical coordinate information for this logistics related location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalCoordinate
	 */
	physicalGeographicalCoordinate?: IGeographicalCoordinate[];

	/**
	 * The postal trade address information for this logistics related location.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * A geographical feature previously associated with this logistics location.
	 * @see https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature
	 */
	previousAssociatedGeographicalFeature?: IGeographicalFeature[];

	/**
	 * A servicing party specified for this logistics related location.
	 * @see https://vocabulary.uncefact.org/servicingSpecifiedParty
	 */
	servicingSpecifiedParty?: ILocationParty[];

	/**
	 * An inspection event specified for this logistics location.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IInspectionEvent[];

	/**
	 * A period of stay at this logistics location.
	 * @see https://vocabulary.uncefact.org/stayPeriod
	 */
	stayPeriod?: ISpecifiedPeriod[];

	/**
	 * A logistics location subordinate to this logistics location.
	 * @see https://vocabulary.uncefact.org/subordinateRelatedLocation
	 */
	subordinateRelatedLocation?: ILogisticsLocation[];

	/**
	 * A location subordinate to this logistics related location.
	 * @see https://vocabulary.uncefact.org/subordinateSubordinateLocation
	 */
	subordinateSubordinateLocation?: ISubordinateLocation;

	/**
	 * The time offset value from the Universal Time Coordinate (UTC) for this logistics related location.
	 * @see https://vocabulary.uncefact.org/uTCOffsetNumeric
	 */
	uTCOffsetNumeric?: string;
}
