// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportRoute } from "./IUneceTransportRoute.js";
import type { UneceTransportContractMovementCodeList } from "../lists/uneceTransportContractMovementCodeList.js";
import type { UneceTransportServiceConditionCodeList } from "../lists/uneceTransportServiceConditionCodeList.js";
import type { UneceTransportServicePaymentArrangementCodeList } from "../lists/uneceTransportServicePaymentArrangementCodeList.js";
import type { UneceTransportServicePriorityCodeList } from "../lists/uneceTransportServicePriorityCodeList.js";
import type { UneceTransportServiceRequirementCodeList } from "../lists/uneceTransportServiceRequirementCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A service associated with a transport movement.
 * A referenced service associated with a specified event during transport movement.
 * @see https://vocabulary.uncefact.org/Service
 */
export interface IUneceService {
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
	actualPerformancePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The monetary value of the charge for this transport service.
	 * @see https://vocabulary.uncefact.org/chargeAmount
	 */
	chargeAmount?: IUneceAmountType;

	/**
	 * The contract identifier of this referenced transport service.
	 * @see https://vocabulary.uncefact.org/contractId
	 */
	contractId?: string | IJsonLdValueObject;

	/**
	 * A logistics location specified for a delivery by this referenced transport service.
	 * @see https://vocabulary.uncefact.org/deliverySpecifiedLocation
	 */
	deliverySpecifiedLocation?: IUneceLogisticsLocation[];

	/**
	 * The textual description of this transport service.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The specified period during which this transport service is effective.
	 * @see https://vocabulary.uncefact.org/effectiveSpecifiedPeriod
	 */
	effectiveSpecifiedPeriod?: IUneceSpecifiedPeriod;

	/**
	 * An estimated period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/estimatedPerformancePeriod
	 */
	estimatedPerformancePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The unique identifier of this transport service.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * Information, expressed as text, for this transport service.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A quantity of items for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/itemQuantity
	 */
	itemQuantity?: IUneceQuantityType[];

	/**
	 * The name, expressed as text, of this transport service.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A planned period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/plannedPerformancePeriod
	 */
	plannedPerformancePeriod?: IUneceSpecifiedPeriod[];

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
	relatedSpecifiedLocation?: IUneceLogisticsLocation[];

	/**
	 * A requested period of performance for this referenced transport service.
	 * @see https://vocabulary.uncefact.org/requestedPerformancePeriod
	 */
	requestedPerformancePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A trade party requesting this referenced transport service.
	 * @see https://vocabulary.uncefact.org/requesterParty
	 */
	requesterParty?: IUneceTradeParty[];

	/**
	 * A trade party responsible for this transport service.
	 * @see https://vocabulary.uncefact.org/responsibleParty
	 */
	responsibleParty?: IUneceTradeParty[];

	/**
	 * A trade party responsible for this transport service.
	 * @see https://vocabulary.uncefact.org/responsibleTradeParty
	 */
	responsibleTradeParty?: IUneceTradeParty[];

	/**
	 * A transport route specified for this transport service.
	 * @see https://vocabulary.uncefact.org/specifiedRoute
	 */
	specifiedRoute?: IUneceTransportRoute[];

	/**
	 * A code specifying a contract movement type of this transport service.
	 * @see https://vocabulary.uncefact.org/transportContractMovementContractMovementTypeCode
	 */
	transportContractMovementContractMovementTypeCode?: UneceTransportContractMovementCodeList[];

	/**
	 * A code specifying a type of category for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServiceCategoryTypeCode
	 */
	transportServiceCategoryTypeCode?: string;

	/**
	 * A code specifying a type of condition for this transport service, such as a contract or carriage condition.
	 * @see https://vocabulary.uncefact.org/transportServiceConditionTypeCode
	 */
	transportServiceConditionTypeCode?: UneceTransportServiceConditionCodeList[];

	/**
	 * The code specifying the payment arrangement for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: UneceTransportServicePaymentArrangementCodeList;

	/**
	 * The code specifying the priority of this transport service.
	 * @see https://vocabulary.uncefact.org/transportServicePriorityCode
	 */
	transportServicePriorityCode?: UneceTransportServicePriorityCodeList;

	/**
	 * A code specifying a service requirement for this transport service.
	 * @see https://vocabulary.uncefact.org/transportServiceRequirementCode
	 */
	transportServiceRequirementCode?: UneceTransportServiceRequirementCodeList[];

	/**
	 * The Uniform Resource Identifier (URI) communication for this transport service, such as its website or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: IUneceCommunication;
}
