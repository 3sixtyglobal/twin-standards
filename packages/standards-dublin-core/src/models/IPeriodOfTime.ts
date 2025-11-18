// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { DublinCoreClasses } from "./dublinCoreClasses.js";

/**
 * Interface for Dublin Core Terms Period of Time.
 * An interval of time that is named or defined by its start and end dates.
 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/PeriodOfTime
 */
export interface IPeriodOfTime extends IJsonLdNodeObject {
	/**
	 * The type identifier for PeriodOfTime.
	 */
	"@type"?: typeof DublinCoreClasses.PeriodOfTime;

	/**
	 * The start date of the period.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:period_start_date
	 */
	"dcat:startDate"?: string;

	/**
	 * The end date of the period.
	 * @see https://www.w3.org/TR/vocab-dcat-3/#Property:period_end_date
	 */
	"dcat:endDate"?: string;

	/**
	 * The beginning of a period or interval.
	 * @see https://www.w3.org/TR/owl-time/#time:hasBeginning
	 */
	"time:hasBeginning"?: string;

	/**
	 * The end of a period or interval.
	 * @see https://www.w3.org/TR/owl-time/#time:hasEnd
	 */
	"time:hasEnd"?: string;
}
