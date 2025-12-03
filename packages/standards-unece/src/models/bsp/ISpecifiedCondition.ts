// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICalibratedMeasurement } from "./ICalibratedMeasurement.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { SubjectCodeList } from "../lists/subjectCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A state, such as of a specified person or thing.
 * @see https://vocabulary.uncefact.org/SpecifiedCondition
 */
export interface ISpecifiedCondition extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedCondition;

	/**
	 * A code specifying an action for this specified condition.
	 * @see https://vocabulary.uncefact.org/actionCode
	 */
	actionCode?: string;

	/**
	 * A date, time, date time or other date time value of an action for this specified condition.
	 * @see https://vocabulary.uncefact.org/actionDateTime
	 */
	actionDateTime?: string;

	/**
	 * A name, expressed as text, for this specified condition.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A calibrated measurement specified for this specified condition.
	 * @see https://vocabulary.uncefact.org/specifiedMeasurement
	 */
	specifiedMeasurement?: ICalibratedMeasurement[];

	/**
	 * A statement, expressed as text, for this specified condition.
	 * @see https://vocabulary.uncefact.org/statement
	 */
	statement?: string;

	/**
	 * A code specifying a statement for this specified condition.
	 * @see https://vocabulary.uncefact.org/statementCode
	 */
	statementCode?: string;

	/**
	 * A code specifying a subject type for this specified condition.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: SubjectCodeList[];

	/**
	 * A measure of a value for this specified condition.
	 * @see https://vocabulary.uncefact.org/valueMeasure
	 */
	valueMeasure?: IMeasureType[];
}
