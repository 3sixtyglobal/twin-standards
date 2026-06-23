// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A WHO MDH (Maritime Declaration of Health) reported illness or disease for an onboard person.
 * @see https://vocabulary.uncefact.org/Illness
 */
export interface IUneceIllness {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Illness;

	/**
	 * A code specifying a case disposition of this MDH illness.
	 * @see https://vocabulary.uncefact.org/caseDispositionCode
	 */
	caseDispositionCode?: string;

	/**
	 * A comment, expressed as text for this MDH illness.
	 * @see https://vocabulary.uncefact.org/comment
	 */
	comment?: string;

	/**
	 * A logistics evacuation location for this MDH illness.
	 * @see https://vocabulary.uncefact.org/evacuationLocation
	 */
	evacuationLocation?: IUneceLogisticsLocation[];

	/**
	 * A code specifying a health status of this MDH illness.
	 * @see https://vocabulary.uncefact.org/healthStatusCode
	 */
	healthStatusCode?: string;

	/**
	 * The indication of whether or not the health status has been reported for this MDH illness.
	 * @see https://vocabulary.uncefact.org/healthStatusReportedIndicator
	 */
	healthStatusReportedIndicator?: boolean;

	/**
	 * A nature, expressed as text, of this MDH illness.
	 * @see https://vocabulary.uncefact.org/nature
	 */
	nature?: string;

	/**
	 * A symptom onset date, time, date time or other date time value for this MDH illness.
	 * @see https://vocabulary.uncefact.org/symptomOnsetDateTime
	 * @json-schema format:date-time
	 */
	symptomOnsetDateTime?: string;

	/**
	 * A treatment, expressed as text, for this MDH illness.
	 * @see https://vocabulary.uncefact.org/treatment
	 */
	treatment?: string;
}
