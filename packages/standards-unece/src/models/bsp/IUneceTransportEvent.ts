// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceGeographicalFeature } from "./IUneceGeographicalFeature.js";
import type { IUneceIOTDevice } from "./IUneceIOTDevice.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceObservation } from "./IUneceObservation.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { IUneceTransportRoute } from "./IUneceTransportRoute.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { UneceLogisticsStatusCodeList } from "../lists/uneceLogisticsStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A significant occurrence or happening during transport.
 * A referenced significant occurrence or happening during transport.
 * @see https://vocabulary.uncefact.org/TransportEvent
 */
export interface IUneceTransportEvent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportEvent;

	/**
	 * The date, time, date time or other date time value of the actual arrival related to this transport event.
	 * @see https://vocabulary.uncefact.org/actualArrivalRelatedDateTime
	 */
	actualArrivalRelatedDateTime?: string;

	/**
	 * The date, time, date time or other date time value of the actual departure related to this transport event.
	 * @see https://vocabulary.uncefact.org/actualDepartureRelatedDateTime
	 */
	actualDepartureRelatedDateTime?: string;

	/**
	 * The actual date, time, date time, or other date time value of the occurrence of this transport event.
	 * @see https://vocabulary.uncefact.org/actualOccurrenceDateTime
	 */
	actualOccurrenceDateTime: string;

	/**
	 * The actual period of time during which this transport event occurred.
	 * @see https://vocabulary.uncefact.org/actualOccurrencePeriod
	 */
	actualOccurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A note providing additional security measures applicable to this transport event.
	 * @see https://vocabulary.uncefact.org/additionalSecurityMeasuresApplicableNote
	 */
	additionalSecurityMeasuresApplicableNote?: IUneceNote[];

	/**
	 * A textual description of an anchorage for this transport event.
	 * @see https://vocabulary.uncefact.org/anchorageDescription
	 */
	anchorageDescription?: string;

	/**
	 * The indication of whether or not this anchorage transport event is or was expected.
	 * @see https://vocabulary.uncefact.org/anchorageExpectedIndicator
	 */
	anchorageExpectedIndicator?: boolean;

	/**
	 * A note providing information applicable to this transport event.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: IUneceNote[];

	/**
	 * An arrival date, time, date time, or other date time value related to this transport event.
	 * @see https://vocabulary.uncefact.org/arrivalRelatedDateTime
	 */
	arrivalRelatedDateTime?: string;

	/**
	 * A geographical feature associated with this transport event.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalFeature
	 */
	associatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * The location of a cargo facility related to this transport event.
	 * @see https://vocabulary.uncefact.org/cargoFacilityRelatedLocation
	 */
	cargoFacilityRelatedLocation?: IUneceLogisticsLocation;

	/**
	 * A certifying party for this transport event.
	 * @see https://vocabulary.uncefact.org/certifyingParty
	 */
	certifyingParty?: IUneceTradeParty[];

	/**
	 * A location of a conveyance facility related to this transport event.
	 * @see https://vocabulary.uncefact.org/conveyanceFacilityRelatedLocation
	 */
	conveyanceFacilityRelatedLocation?: IUneceLogisticsLocation;

	/**
	 * A specified period of time during which this transport event is delayed.
	 * @see https://vocabulary.uncefact.org/delayOccurrencePeriod
	 */
	delayOccurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A delay specified for this referenced transport event.
	 * @see https://vocabulary.uncefact.org/delaySpecifiedEvent
	 */
	delaySpecifiedEvent?: IUneceTransportEvent[];

	/**
	 * A departure date, time, date time, or other date time value related to this transport event.
	 * @see https://vocabulary.uncefact.org/departureRelatedDateTime
	 */
	departureRelatedDateTime?: string;

	/**
	 * A textual description of this transport event.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The estimated date, time, date time, or other date time value of the occurrence of this transport event.
	 * @see https://vocabulary.uncefact.org/estimatedOccurrenceDateTime
	 */
	estimatedOccurrenceDateTime: string;

	/**
	 * The date, time, date time, or other date time value when the arrival of a means of transport at the location of this
	 * transport event is estimated to occur.
	 * @see https://vocabulary.uncefact.org/estimatedTransportMeansArrivalOccurrenceDateTime
	 */
	estimatedTransportMeansArrivalOccurrenceDateTime: string;

	/**
	 * The indication of whether or not this transport event is or was expected.
	 * @see https://vocabulary.uncefact.org/expectedIndicator
	 */
	expectedIndicator?: boolean;

	/**
	 * The unique identifier for this transport event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The specified period of laycan time during which this transport event occurs.
	 * @see https://vocabulary.uncefact.org/laycanOccurrencePeriod
	 */
	laycanOccurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The indication of whether or not this transport event is a maritime anchorage.
	 * @see https://vocabulary.uncefact.org/maritimeAnchorageIndicator
	 */
	maritimeAnchorageIndicator?: boolean;

	/**
	 * The logistics location where this transport event occurs.
	 * @see https://vocabulary.uncefact.org/occurrenceLogisticsLocation
	 */
	occurrenceLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * A specified period of time during which this transport event occurs.
	 * @see https://vocabulary.uncefact.org/occurrencePeriod
	 */
	occurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A pilot boarding place, expressed as text, for this transport event.
	 * @see https://vocabulary.uncefact.org/pilotBoardingPlace
	 */
	pilotBoardingPlace?: string;

	/**
	 * A note providing pre-transhipment transport equipment information applicable to this transport event.
	 * @see https://vocabulary.uncefact.org/preTranshipmentTransportEquipmentApplicableNote
	 */
	preTranshipmentTransportEquipmentApplicableNote?: IUneceNote[];

	/**
	 * A geographical feature previously associated with this transport event.
	 * @see https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature
	 */
	previousAssociatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * The code specifying the reason type for this referenced transport event.
	 * @see https://vocabulary.uncefact.org/reasonTypeCode
	 */
	reasonTypeCode: string;

	/**
	 * The date, time, date time, or other date time value when information related to this transport event was received, from
	 * the perspective of the receiver.
	 * @see https://vocabulary.uncefact.org/receivedDateTime
	 */
	receivedDateTime?: string;

	/**
	 * An observation related to this transport event.
	 * @see https://vocabulary.uncefact.org/relatedObservation
	 */
	relatedObservation?: IUneceObservation[];

	/**
	 * The route related to this transport event.
	 * @see https://vocabulary.uncefact.org/relatedRoute
	 */
	relatedRoute?: IUneceTransportRoute;

	/**
	 * The code specifying the type of reported condition for this transport event.
	 * @see https://vocabulary.uncefact.org/reportedConditionTypeCode
	 */
	reportedConditionTypeCode: UneceLogisticsStatusCodeList;

	/**
	 * An IOT device for this transport reporting event.
	 * @see https://vocabulary.uncefact.org/reportingIOTDevice
	 */
	reportingIOTDevice?: IUneceIOTDevice[];

	/**
	 * The requested date, time, date time, or other date time value of the occurrence of this transport event.
	 * @see https://vocabulary.uncefact.org/requestedOccurrenceDateTime
	 */
	requestedOccurrenceDateTime: string;

	/**
	 * A requested service related to this transport event.
	 * @see https://vocabulary.uncefact.org/requestedRelatedService
	 */
	requestedRelatedService?: IUneceService[];

	/**
	 * The date, time, date time or other date time value of the scheduled arrival related to this referenced transport event.
	 * @see https://vocabulary.uncefact.org/scheduledArrivalRelatedDateTime
	 */
	scheduledArrivalRelatedDateTime?: string;

	/**
	 * The date, time, date time or other date time value of the scheduled departure related to this referenced transport
	 * event.
	 * @see https://vocabulary.uncefact.org/scheduledDepartureRelatedDateTime
	 */
	scheduledDepartureRelatedDateTime?: string;

	/**
	 * The scheduled date, time, date time, or other date time value of the occurrence of this transport event.
	 * @see https://vocabulary.uncefact.org/scheduledOccurrenceDateTime
	 */
	scheduledOccurrenceDateTime: string;

	/**
	 * The scheduled period of time specified for the occurrence of this transport event.
	 * @see https://vocabulary.uncefact.org/scheduledOccurrencePeriod
	 */
	scheduledOccurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A security level code for this transport event.
	 * @see https://vocabulary.uncefact.org/securityLevelCode
	 */
	securityLevelCode?: string;

	/**
	 * An instruction or a set of instructions specified for this transport event.
	 * @see https://vocabulary.uncefact.org/specifiedTransportInstructions
	 */
	specifiedTransportInstructions?: IUneceTransportInstructions[];

	/**
	 * A stay specified for this referenced transport event.
	 * @see https://vocabulary.uncefact.org/staySpecifiedEvent
	 */
	staySpecifiedEvent?: IUneceTransportEvent[];

	/**
	 * A note providing transport information applicable to this transport event.
	 * @see https://vocabulary.uncefact.org/transportInformationApplicableNote
	 */
	transportInformationApplicableNote?: IUneceNote[];

	/**
	 * The specified period during which the transport means is held at a location.
	 * @see https://vocabulary.uncefact.org/transportMeansStayOccurrencePeriod
	 */
	transportMeansStayOccurrencePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The code specifying the type of transport event.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The number of units for this transport event.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The measure of a value for this transport event.
	 * @see https://vocabulary.uncefact.org/unitValueMeasure
	 */
	unitValueMeasure?: IUneceUnitMeasureType;
}
