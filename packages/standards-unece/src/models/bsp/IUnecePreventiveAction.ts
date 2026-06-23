// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UnecePreventiveActionTypeCodeList } from "../typeCodes/unecePreventiveActionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An adjustment, such as a change to an organization's processes or products, taken to prevent non-conformities or other
 * undesirable situations, possibly as a result of a risk analysis.
 * @see https://vocabulary.uncefact.org/PreventiveAction
 */
export interface IUnecePreventiveAction {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PreventiveAction;

	/**
	 * A type, expressed as text, for this preventive action.
	 * @see https://vocabulary.uncefact.org/actionType
	 */
	actionType?: string;

	/**
	 * A textual description of this preventive action.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of preventive action.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UnecePreventiveActionTypeCodeList | string;
}
