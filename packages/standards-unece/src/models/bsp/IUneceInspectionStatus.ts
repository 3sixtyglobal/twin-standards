// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The information relevant to a condition related to an inspection.
 * @see https://vocabulary.uncefact.org/InspectionStatus
 */
export interface IUneceInspectionStatus extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionStatus;

	/**
	 * A textual description of this inspection status.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying this inspection status condition.
	 * @see https://vocabulary.uncefact.org/inspectionStatusConditionCode
	 */
	inspectionStatusConditionCode?: string;
}
