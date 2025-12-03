// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMeasureType } from "./IMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measure of spatial extent associated with this work item, such as length, breadth, or height.
 * @see https://vocabulary.uncefact.org/WorkItemDimension
 */
export interface IWorkItemDimension extends IJsonLdNodeObject {
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
	componentDimension?: IWorkItemDimension[];

	/**
	 * A work item component dimension for this work item dimension.
	 * @see https://vocabulary.uncefact.org/componentWorkItemDimension
	 */
	componentWorkItemDimension?: IWorkItemDimension[];

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
	identifier?: string;

	/**
	 * The measured value for this work item dimension.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];

	/**
	 * The code specifying the type of this work item dimension.
	 * @see https://vocabulary.uncefact.org/workItemDimensionTypeCode
	 */
	workItemDimensionTypeCode?: string;
}
