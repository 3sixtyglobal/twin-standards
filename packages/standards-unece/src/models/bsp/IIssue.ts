// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMetricCharacteristic } from "./IMetricCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A targeted topic for debate or resolution.
 * @see https://vocabulary.uncefact.org/Issue
 */
export interface IIssue extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Issue;

	/**
	 * The identifier of this target issue.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The maximum metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/maximumSpecifiedCharacteristic
	 */
	maximumSpecifiedCharacteristic?: IMetricCharacteristic[];

	/**
	 * The minimum metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/minimumSpecifiedCharacteristic
	 */
	minimumSpecifiedCharacteristic?: IMetricCharacteristic[];

	/**
	 * The metric characteristic specified for this target issue.
	 * @see https://vocabulary.uncefact.org/specifiedMetricCharacteristic
	 */
	specifiedMetricCharacteristic?: IMetricCharacteristic[];

	/**
	 * The code specifying the type of target issue, such as a value or a range.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
