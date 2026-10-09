// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measure of spatial extent associated with this work item, such as length, breadth, or height.
 * @see https://vocabulary.uncefact.org/WorkItemDimension
 */
export interface IUneceWorkItemDimension {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.WorkItemDimension;

	/**
	 * A work item component dimension for this work item dimension.
	 * @see https://vocabulary.uncefact.org/componentDimension
	 */
	componentDimension?: IUneceWorkItemDimension[];

	/**
	 * A work item component dimension for this work item dimension.
	 * @see https://vocabulary.uncefact.org/componentWorkItemDimension
	 */
	componentWorkItemDimension?: IUneceWorkItemDimension[];

	/**
	 * The code specifying the contractual language for this work item dimension.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The textual description of this work item dimension.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier for this work item dimension.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The measured value for this work item dimension.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure: IUneceMeasureType;

	/**
	 * The code specifying the type of this work item dimension.
	 * @see https://vocabulary.uncefact.org/workItemDimensionTypeCode
	 */
	workItemDimensionTypeCode: string;
}
