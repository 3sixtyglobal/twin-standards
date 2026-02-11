// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { UneceProjectTypeCodeList } from "../typeCodes/uneceProjectTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An endeavour carefully planned to achieve a procurement of goods, works and service.
 * @see https://vocabulary.uncefact.org/Project
 */
export interface IUneceProject extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Project;

	/**
	 * The indication of whether or not the project is constrained by an authority such as the World Trade Organization (WTO)
	 * for this procuring project.
	 * @see https://vocabulary.uncefact.org/constraintIndicator
	 */
	constraintIndicator?: boolean;

	/**
	 * The textual description of this procuring project.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier of this procuring project.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The name, expressed as text, of this procuring project.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name: string;

	/**
	 * The monetary value of the net budget for this procuring project.
	 * @see https://vocabulary.uncefact.org/netBudgetAmount
	 */
	netBudgetAmount?: IUneceAmountType;

	/**
	 * The inspection event specified for this procuring project.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IUneceInspectionEvent;

	/**
	 * A code specifying the type of sub works, such as land surveying or information technology consulting, for this procuring
	 * project.
	 * @see https://vocabulary.uncefact.org/subWorksTypeCode
	 */
	subWorksTypeCode?: string;

	/**
	 * The monetary value of the total budget which includes net amount, taxes, and material and instalment costs for this
	 * procuring project.
	 * @see https://vocabulary.uncefact.org/totalBudgetAmount
	 */
	totalBudgetAmount?: IUneceAmountType;

	/**
	 * The code specifying the type of procuring project, such as goods, works and service.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProjectTypeCodeList | string;

	/**
	 * A code specifying the type of work, such as surveying or consulting, for this procuring project.
	 * @see https://vocabulary.uncefact.org/worksTypeCode
	 */
	worksTypeCode?: string;
}
