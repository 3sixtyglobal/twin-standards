// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceProcessCharacteristic } from "./IUneceProcessCharacteristic.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceProcessTypeCodeList } from "../lists/uneceProcessTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A naturally occurring or designed sequence of operations or events that create, transform, or touch a product, such as
 * manufacturing, treating, packaging, and storing.
 * @see https://vocabulary.uncefact.org/ProductHandlingProcess
 */
export interface IUneceProductHandlingProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductHandlingProcess;

	/**
	 * A process characteristic applicable to this product handling process.
	 * @see https://vocabulary.uncefact.org/applicableProcessCharacteristic
	 */
	applicableProcessCharacteristic?: IUneceProcessCharacteristic;

	/**
	 * The specified period of completion for this product handling process.
	 * @see https://vocabulary.uncefact.org/completionPeriod
	 */
	completionPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The trade country where the operation of this product handling process occurs.
	 * @see https://vocabulary.uncefact.org/operationCountry
	 */
	operationCountry?: IUneceCountry;

	/**
	 * A trade party who is an operator of this product handling process.
	 * @see https://vocabulary.uncefact.org/operatorParty
	 */
	operatorParty?: IUneceTradeParty;

	/**
	 * The code specifying the type of product handling process.
	 * @see https://vocabulary.uncefact.org/processTypeCode
	 */
	processTypeCode?: UneceProcessTypeCodeList;
}
