// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceWorkflowStatusCodeList } from "../lists/uneceWorkflowStatusCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An object used in the management of the status changes in a business process.
 * @see https://vocabulary.uncefact.org/WorkflowObject
 */
export interface IUneceWorkflowObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.WorkflowObject;

	/**
	 * The identifier of this trade workflow object.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string | IJsonLdValueObject;

	/**
	 * The code specifying the previous status of this trade workflow object.
	 * @see https://vocabulary.uncefact.org/previousStatusCode
	 */
	previousStatusCode?: UneceWorkflowStatusCodeList;

	/**
	 * The code specifying the status of this trade workflow object.
	 * @see https://vocabulary.uncefact.org/workflowStatusCode
	 */
	workflowStatusCode: UneceWorkflowStatusCodeList;
}
