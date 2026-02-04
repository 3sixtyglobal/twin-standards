// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRecordedStatus } from "./IUneceRecordedStatus.js";
import type { IUneceWorkItemDimension } from "./IUneceWorkItemDimension.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The quantity analysis for this work item.
 * @see https://vocabulary.uncefact.org/QuantityAnalysis
 */
export interface IUneceQuantityAnalysis extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.QuantityAnalysis;

	/**
	 * The actual quantity for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IUneceQuantityType;

	/**
	 * A work item dimension of the actual quantity in this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/actualQuantityDimension
	 */
	actualQuantityDimension?: IUneceWorkItemDimension[];

	/**
	 * The percentage of a total quantity that the actual quantity of this work item quantity analysis represents.
	 * @see https://vocabulary.uncefact.org/actualQuantityPercent
	 */
	actualQuantityPercent?: string;

	/**
	 * A code specifying an alternative classification value for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/alternativeClassificationCode
	 */
	alternativeClassificationCode?: string;

	/**
	 * A quantity analysis breakdown of this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/breakdownQuantityAnalysis
	 */
	breakdownQuantityAnalysis?: IUneceQuantityAnalysis[];

	/**
	 * A changed recorded status for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IUneceRecordedStatus[];

	/**
	 * The code specifying the contractual language for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The textual description of this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a primary classification value for this work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/primaryClassificationCode
	 */
	primaryClassificationCode?: string;

	/**
	 * The code specifying the type of work item quantity analysis.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
