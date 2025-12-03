// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICommunication } from "./ICommunication.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportRoute } from "./ITransportRoute.js";
import type { TransportContractMovementCodeList } from "../lists/transportContractMovementCodeList.js";
import type { TransportServiceConditionCodeList } from "../lists/transportServiceConditionCodeList.js";
import type { TransportServicePaymentArrangementCodeList } from "../lists/transportServicePaymentArrangementCodeList.js";
import type { TransportServicePriorityCodeList } from "../lists/transportServicePriorityCodeList.js";
import type { TransportServiceRequirementCodeList } from "../lists/transportServiceRequirementCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A service associated with a transport movement.
 * A referenced service associated with a specified event during transport movement.
 * @see https://vocabulary.uncefact.org/Service
 */
export interface IService extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Service;

	/**
	 * An actual period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/actualPerformancePeriod
	 */
	actualPerformancePeriod?: ISpecifiedPeriod[];

	/**
	 * The monetary value of the charge for this transport service.
	 * @see https://vocabulary.uncefact.org/chargeAmount
	 */
	chargeAmount?: IAmountType[];

	/**
	 * The contract identifier of this referenced transport service.
	 * @see https://vocabulary.uncefact.org/contractId
	 */
	contractId?: string;

	/**
	 * A logistics location specified for a delivery by this referenced transport service.
	 * @see https://vocabulary.uncefact.org/deliverySpecifiedLocation
	 */
	deliverySpecifiedLocation?: ILogisticsLocation[];

	/**
	 * The textual description of this transport service.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The specified period during which this transport service is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: ISpecifiedPeriod;

	/**
	 * An estimated period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/estimatedPerformancePeriod
	 */
	estimatedPerformancePeriod?: ISpecifiedPeriod[];

	/**
	 * The unique identifier of this transport service.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this transport service.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A quantity of items for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/itemQuantity
	 */
	itemQuantity?: IQuantityType[];

	/**
	 * The name, expressed as text, of this transport service.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A planned period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/plannedPerformancePeriod
	 */
	plannedPerformancePeriod?: ISpecifiedPeriod[];

	/**
	 * The indication of whether or not this referenced transport service has been planned in advance of its execution.
	 * @see https://vocabulary.uncefact.org/preplannedIndicator
	 */
	preplannedIndicator?: boolean;

	/**
	 * A code specifying a reason for this transport service.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;

	/**
	 * A related logistics location specified for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/relatedSpecifiedLocation
	 */
	relatedSpecifiedLocation?: ILogisticsLocation[];

	/**
	 * A requested period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/requestedPerformancePeriod
	 */
	requestedPerformancePeriod?: ISpecifiedPeriod[];

	/**
	 * A trade party requesting this referenced transport service.
	 * @see https://vocabulary.uncefact.org/requesterParty
	 */
	requesterParty?: ITradeParty[];

	/**
	 * A trade party responsible for this transport service.
	 * @see https://vocabulary.uncefact.org/responsibleParty
	 */
	responsibleParty?: ITradeParty[];

	/**
	 * A trade party responsible for this transport service.
	 * @see https://vocabulary.uncefact.org/responsibleTradeParty
	 */
	responsibleTradeParty?: ITradeParty[];

	/**
	 * A transport route specified for this transport service.
	 * @see https://vocabulary.uncefact.org/specifiedRoute
	 */
	specifiedRoute?: ITransportRoute;

	/**
	 * A code specifying a contract movement type of this transport service.
	 * @see https://vocabulary.uncefact.org/transportContractMovementContractMovementTypeCode
	 */
	transportContractMovementContractMovementTypeCode?: TransportContractMovementCodeList[];

	/**
	 * A code specifying a type of category for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServiceCategoryTypeCode
	 */
	transportServiceCategoryTypeCode?: string;

	/**
	 * A code specifying a type of condition for this transport service, such as a contract or carriage condition.
	 * @see https://vocabulary.uncefact.org/transportServiceConditionTypeCode
	 */
	transportServiceConditionTypeCode?: TransportServiceConditionCodeList;

	/**
	 * The code specifying the payment arrangement for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: TransportServicePaymentArrangementCodeList;

	/**
	 * The code specifying the priority of this transport service.
	 * @see https://vocabulary.uncefact.org/transportServicePriorityCode
	 */
	transportServicePriorityCode?: TransportServicePriorityCodeList[];

	/**
	 * A code specifying a service requirement for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServiceRequirementCode
	 */
	transportServiceRequirementCode?: TransportServiceRequirementCodeList[];

	/**
	 * The Uniform Resource Identifier (URI) communication for this transport service, such as its website or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: ICommunication[];
}
