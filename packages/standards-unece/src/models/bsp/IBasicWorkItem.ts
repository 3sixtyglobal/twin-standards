// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { ICalculatedPrice } from "./ICalculatedPrice.js";
import type { IComplexDescription } from "./IComplexDescription.js";
import type { IQuantityAnalysis } from "./IQuantityAnalysis.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRecordedStatus } from "./IRecordedStatus.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A basic item of work.
 * @see https://vocabulary.uncefact.org/BasicWorkItem
 */
export interface IBasicWorkItem extends IJsonLdNodeObject {
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
	actualComplexDescription?: IComplexDescription[];

	/**
	 * A code specifying an alternative classification for this basic work item.
	 * @see https://vocabulary.uncefact.org/alternativeClassificationCode
	 */
	alternativeClassificationCode?: string;

	/**
	 * A specified binary file referenced by this basic work item.
	 * @see https://vocabulary.uncefact.org/binaryFile
	 */
	binaryFile?: IBinaryFile[];

	/**
	 * A changed recorded status for this basic work item.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IRecordedStatus[];

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
	itemBasicWorkItem?: IBasicWorkItem[];

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
	totalPrice?: ICalculatedPrice[];

	/**
	 * The total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantity
	 */
	totalQuantity?: IQuantityType;

	/**
	 * An analysis of the total quantity for this basic work item.
	 * @see https://vocabulary.uncefact.org/totalQuantityAnalysis
	 */
	totalQuantityAnalysis?: IQuantityAnalysis[];

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
	unitPrice?: ICalculatedPrice[];
}
