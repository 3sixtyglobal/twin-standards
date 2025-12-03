// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { LogisticsStatusCodeList } from "../lists/logisticsStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information relevant to a condition or a position related to logistics.
 * @see https://vocabulary.uncefact.org/LogisticsStatus
 */
export interface ILogisticsStatus extends IJsonLdNodeObject {
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
	arrivalReportedEvent?: ITransportEvent[];

	/**
	 * A contact party for this logistics status.
	 * @see https://vocabulary.uncefact.org/contactParty
	 */
	contactParty?: ITradeParty[];

	/**
	 * A transport departure event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/departureReportedEvent
	 */
	departureReportedEvent?: ITransportEvent[];

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
	loadingReportedEvent?: ITransportEvent[];

	/**
	 * The code specifying this logistics status condition [UNECE Recommendation 24].
	 * @see https://vocabulary.uncefact.org/logisticsStatusConditionCode
	 */
	logisticsStatusConditionCode?: LogisticsStatusCodeList[];

	/**
	 * A code specifying a reason for this logistics status [UNECE Recommendation 24].
	 * @see https://vocabulary.uncefact.org/logisticsStatusReasonCode
	 */
	logisticsStatusReasonCode?: LogisticsStatusCodeList[];

	/**
	 * A reason, expressed as text, for this logistics status.
	 * @see https://vocabulary.uncefact.org/reason
	 */
	reason?: string;

	/**
	 * The reference date, time, date time or other date time value for this logistics status.
	 * @see https://vocabulary.uncefact.org/referenceDateTime
	 */
	referenceDateTime?: string;

	/**
	 * A supply chain event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/reportedSupplyChainEvent
	 */
	reportedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The sequence number of this logistics status, such as within a status report.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A location specified for this logistics status.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A transport unloading event reported for this logistics status.
	 * @see https://vocabulary.uncefact.org/unloadingReportedEvent
	 */
	unloadingReportedEvent?: ITransportEvent[];

	/**
	 * A specific validity period for this logistics status.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: ISpecifiedPeriod;
}
