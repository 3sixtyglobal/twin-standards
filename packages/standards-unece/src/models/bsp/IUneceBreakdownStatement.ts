// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBasicWorkItem } from "./IUneceBasicWorkItem.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCalculatedPrice } from "./IUneceCalculatedPrice.js";
import type { IUneceGroupedWorkItem } from "./IUneceGroupedWorkItem.js";
import type { IUneceRecordedStatus } from "./IUneceRecordedStatus.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A detailed statement of work, prices, and dimensions for this valuation.
 * @see https://vocabulary.uncefact.org/BreakdownStatement
 */
export interface IUneceBreakdownStatement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BreakdownStatement;

	/**
	 * A specified binary file referenced by this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/binaryFile
	 */
	binaryFile?: IUneceBinaryFile[];

	/**
	 * A changed recorded status for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IUneceRecordedStatus[];

	/**
	 * A comment, expressed as text, for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * The code specifying the contractual language for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * A specified binary file used to create this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/creationBinaryFile
	 */
	creationBinaryFile?: IUneceBinaryFile[];

	/**
	 * The date, time, date time, or other date time value of the creation of this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The code specifying the default currency for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/defaultCurrencyCode
	 */
	defaultCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * The code specifying the default language for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/defaultLanguageCode
	 */
	defaultLanguageCode?: string;

	/**
	 * A textual description of this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A basic work item in this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/itemBasicWorkItem
	 */
	itemBasicWorkItem?: IUneceBasicWorkItem[];

	/**
	 * A grouped work item in this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/itemGroupedWorkItem
	 */
	itemGroupedWorkItem?: IUneceGroupedWorkItem[];

	/**
	 * A unique identifier of a method of measurement for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/measurementMethodId
	 */
	measurementMethodId?: string;

	/**
	 * The name, expressed as text, for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The identifier of a price list for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/priceListId
	 */
	priceListId?: string;

	/**
	 * A specified binary file used to read this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/readerBinaryFile
	 */
	readerBinaryFile?: IUneceBinaryFile[];

	/**
	 * A code specifying the requested action for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/requestedActionCode
	 */
	requestedActionCode?: string;

	/**
	 * A total calculated price for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/totalPrice
	 */
	totalPrice?: IUneceCalculatedPrice[];

	/**
	 * A code specifying the type of valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
