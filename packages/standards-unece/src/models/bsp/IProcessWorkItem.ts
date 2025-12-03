// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A distinct operation or task that is part of a process.
 * @see https://vocabulary.uncefact.org/ProcessWorkItem
 */
export interface IProcessWorkItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProcessWorkItem;

	/**
	 * The code specifying an alternative classification for this process work item.
	 * @see https://vocabulary.uncefact.org/alternativeClassificationCode
	 */
	alternativeClassificationCode?: string;

	/**
	 * A textual description for this process work item.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of this process work item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the primary classification for this process work item.
	 * @see https://vocabulary.uncefact.org/primaryClassificationCode
	 */
	primaryClassificationCode?: string;

	/**
	 * The total quantity for this process work item.
	 * @see https://vocabulary.uncefact.org/totalQuantity
	 */
	totalQuantity?: IQuantityType;

	/**
	 * The code specifying the type of process work item.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
