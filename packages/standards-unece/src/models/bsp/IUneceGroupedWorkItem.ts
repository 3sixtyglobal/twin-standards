// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBasicWorkItem } from "./IUneceBasicWorkItem.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCalculatedPrice } from "./IUneceCalculatedPrice.js";
import type { IUneceComplexDescription } from "./IUneceComplexDescription.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRecordedStatus } from "./IUneceRecordedStatus.js";
import type { UneceGroupedWorkItemTypeCodeList } from "../typeCodes/uneceGroupedWorkItemTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A grouping of related work items.
 * @see https://vocabulary.uncefact.org/GroupedWorkItem
 */
export interface IUneceGroupedWorkItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GroupedWorkItem;

	/**
	 * An actual complex description for this work item group.
	 * @see https://vocabulary.uncefact.org/actualComplexDescription
	 */
	actualComplexDescription?: IUneceComplexDescription[];

	/**
	 * A code specifying an alternative classification for this work item group.
	 * @see https://vocabulary.uncefact.org/alternativeClassificationCode
	 */
	alternativeClassificationCode?: string;

	/**
	 * A specified binary file referenced by this grouped work item.
	 * @see https://vocabulary.uncefact.org/binaryFile
	 */
	binaryFile?: IUneceBinaryFile[];

	/**
	 * A changed recorded status for this grouped work item.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IUneceRecordedStatus[];

	/**
	 * A comment, expressed as text, for this work item group.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * The code specifying the contractual language for this grouped work item.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The unique identifier for this work item group.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The index, expressed as text, to be used for this grouped work item.
	 * @see https://vocabulary.uncefact.org/index
	 */
	index?: string;

	/**
	 * A basic work item within this grouped work item.
	 * @see https://vocabulary.uncefact.org/itemBasicWorkItem
	 */
	itemBasicWorkItem?: IUneceBasicWorkItem[];

	/**
	 * A grouped work item within this grouped work item.
	 * @see https://vocabulary.uncefact.org/itemGroupedWorkItem
	 */
	itemGroupedWorkItem?: IUneceGroupedWorkItem[];

	/**
	 * The identifier of a price list item for this grouped work item.
	 * @see https://vocabulary.uncefact.org/priceListItemId
	 */
	priceListItemId?: string;

	/**
	 * A code specifying the primary classification for this work item group.
	 * @see https://vocabulary.uncefact.org/primaryClassificationCode
	 */
	primaryClassificationCode?: string;

	/**
	 * A code specifying a requested action for this grouped work item.
	 * @see https://vocabulary.uncefact.org/requestedActionCode
	 */
	requestedActionCode?: string;

	/**
	 * A total calculated price for this work item group.
	 * @see https://vocabulary.uncefact.org/totalPrice
	 */
	totalPrice?: IUneceCalculatedPrice[];

	/**
	 * The total quantity of this work item group.
	 * @see https://vocabulary.uncefact.org/totalQuantity
	 */
	totalQuantity?: IUneceQuantityType;

	/**
	 * A code specifying the type of this work item group.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceGroupedWorkItemTypeCodeList | string;
}
