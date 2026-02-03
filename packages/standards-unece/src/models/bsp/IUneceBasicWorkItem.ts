// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCalculatedPrice } from "./IUneceCalculatedPrice.js";
import type { IUneceComplexDescription } from "./IUneceComplexDescription.js";
import type { IUneceQuantityAnalysis } from "./IUneceQuantityAnalysis.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRecordedStatus } from "./IUneceRecordedStatus.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A basic item of work.
 * @see https://vocabulary.uncefact.org/BasicWorkItem
 */
export interface IUneceBasicWorkItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BasicWorkItem;

	/**
	 * An actual complex description for this basic work item.
	 * @see https://vocabulary.uncefact.org/actualComplexDescription
	 */
	actualComplexDescription?: IUneceComplexDescription;

	/**
	 * A code specifying an alternative classification for this basic work item.
	 * @see https://vocabulary.uncefact.org/alternativeClassificationCode
	 */
	alternativeClassificationCode?: string;

	/**
	 * A specified binary file referenced by this basic work item.
	 * @see https://vocabulary.uncefact.org/binaryFile
	 */
	binaryFile?: IUneceBinaryFile;

	/**
	 * A changed recorded status for this basic work item.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IUneceRecordedStatus;

	/**
	 * A comment, expressed as text, for this basic work item.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * The code specifying the contractual language for this basic work item.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The unique identifier for this basic work item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The index, expressed as text, to be used for this basic work item.
	 * @see https://vocabulary.uncefact.org/index
	 */
	index?: string;

	/**
	 * A basic work item in this basic work item.
	 * @see https://vocabulary.uncefact.org/itemBasicWorkItem
	 */
	itemBasicWorkItem?: IUneceBasicWorkItem;

	/**
	 * The unique identifier of a price list item for this basic work item.
	 * @see https://vocabulary.uncefact.org/priceListItemId
	 */
	priceListItemId?: string;

	/**
	 * A code specifying the primary classification for this basic work item.
	 * @see https://vocabulary.uncefact.org/primaryClassificationCode
	 */
	primaryClassificationCode?: string;

	/**
	 * The unique identifier of another work item referenced by this basic work item.
	 * @see https://vocabulary.uncefact.org/referenceId
	 */
	referenceId?: string;

	/**
	 * A code specifying a requested action for this basic work item.
	 * @see https://vocabulary.uncefact.org/requestedActionCode
	 */
	requestedActionCode?: string;

	/**
	 * A total calculated price for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalPrice
	 */
	totalPrice?: IUneceCalculatedPrice;

	/**
	 * The total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantity
	 */
	totalQuantity?: IUneceQuantityType;

	/**
	 * An analysis of the total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantityAnalysis
	 */
	totalQuantityAnalysis?: IUneceQuantityAnalysis;

	/**
	 * The code specifying the classification of the total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantityClassificationCode
	 */
	totalQuantityClassificationCode?: string;

	/**
	 * A code specifying the type of basic work item.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A unit calculated price for this basic work item.
	 * @see https://vocabulary.uncefact.org/unitPrice
	 */
	unitPrice?: IUneceCalculatedPrice;
}
