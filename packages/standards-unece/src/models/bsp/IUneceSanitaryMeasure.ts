// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceSanitaryMeasureTypeCodeList } from "../typeCodes/uneceSanitaryMeasureTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Sanitary measures as reported for a WHO MDH (Maritime Declaration of Health).
 * @see https://vocabulary.uncefact.org/SanitaryMeasure
 */
export interface IUneceSanitaryMeasure {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SanitaryMeasure;

	/**
	 * An application date, time, date time or other date time value for this MDH sanitary measure.
	 * @see https://vocabulary.uncefact.org/applicationDateTime
	 */
	applicationDateTime?: string;

	/**
	 * A textual description of this MDH sanitary measure.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A location, expressed as text, for this MDH sanitary measure.
	 * @see https://vocabulary.uncefact.org/location
	 */
	location?: string;

	/**
	 * A code specifying a type of MDH sanitary measure.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSanitaryMeasureTypeCodeList | string;
}
