// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IBasicWorkItem } from "./IBasicWorkItem.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { ICalculatedPrice } from "./ICalculatedPrice.js";
import type { IGroupedWorkItem } from "./IGroupedWorkItem.js";
import type { IRecordedStatus } from "./IRecordedStatus.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A detailed statement of work, prices, and dimensions for this valuation.
 * @see https://vocabulary.uncefact.org/BreakdownStatement
 */
export interface IBreakdownStatement extends IJsonLdNodeObject {
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
	binaryFile?: IBinaryFile[];

	/**
	 * A changed recorded status for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/changedStatus
	 */
	changedStatus?: IRecordedStatus[];

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
	creationBinaryFile?: IBinaryFile[];

	/**
	 * The date, time, date time, or other date time value of the creation of this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The code specifying the default currency for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/defaultCurrencyCode
	 */
	defaultCurrencyCode?: CurrencyCodeList[];

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
	itemBasicWorkItem?: IBasicWorkItem[];

	/**
	 * A grouped work item in this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/itemGroupedWorkItem
	 */
	itemGroupedWorkItem?: IGroupedWorkItem[];

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
	readerBinaryFile?: IBinaryFile[];

	/**
	 * A code specifying the requested action for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/requestedActionCode
	 */
	requestedActionCode?: string;

	/**
	 * A total calculated price for this valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/totalPrice
	 */
	totalPrice?: ICalculatedPrice[];

	/**
	 * A code specifying the type of valuation breakdown statement.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
