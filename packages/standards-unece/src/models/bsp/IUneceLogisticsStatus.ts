// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { UneceLogisticsStatusCodeList } from "../lists/uneceLogisticsStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information relevant to a condition or a position related to logistics.
 * @see https://vocabulary.uncefact.org/LogisticsStatus
 */
export interface IUneceLogisticsStatus {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsStatus;

	/**
	 * A transport arrival event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/arrivalReportedEvent
	 */
	arrivalReportedEvent?: IUneceTransportEvent[];

	/**
	 * A contact party for this logistics status.
	 * @see https://vocabulary.uncefact.org/contactParty
	 */
	contactParty?: IUneceTradeParty[];

	/**
	 * A transport departure event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/departureReportedEvent
	 */
	departureReportedEvent?: IUneceTransportEvent[];

	/**
	 * The textual description of this logistics status.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Information, expressed as text, for this logistics status.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A transport loading event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/loadingReportedEvent
	 */
	loadingReportedEvent?: IUneceTransportEvent[];

	/**
	 * The code specifying this logistics status condition [UNECE Recommendation 24].
	 * @see https://vocabulary.uncefact.org/logisticsStatusConditionCode
	 */
	logisticsStatusConditionCode?: UneceLogisticsStatusCodeList;

	/**
	 * A code specifying a reason for this logistics status [UNECE Recommendation 24].
	 * @see https://vocabulary.uncefact.org/logisticsStatusReasonCode
	 */
	logisticsStatusReasonCode?: UneceLogisticsStatusCodeList[];

	/**
	 * A reason, expressed as text, for this logistics status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * The reference date, time, date time or other date time value for this logistics status.
	 * @see https://vocabulary.uncefact.org/referenceDateTime
	 * @format date-time
	 */
	referenceDateTime?: string;

	/**
	 * A supply chain event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/reportedSupplyChainEvent
	 */
	reportedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The sequence number of this logistics status, such as within a status report.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A location specified for this logistics status.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: IUneceLogisticsLocation[];

	/**
	 * A transport unloading event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/unloadingReportedEvent
	 */
	unloadingReportedEvent?: IUneceTransportEvent[];

	/**
	 * A specific validity period for this logistics status.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod[];
}
