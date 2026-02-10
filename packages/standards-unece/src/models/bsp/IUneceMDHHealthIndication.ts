// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSanitaryMeasure } from "./IUneceSanitaryMeasure.js";
import type { UneceMDHHealthIndicationTypeCodeList } from "../typeCodes/uneceMDHHealthIndicationTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information related to a specific transportation indication to be reported on a WHO MDH (Maritime Declaration of
 * Health).
 * @see https://vocabulary.uncefact.org/MDHHealthIndication
 */
export interface IUneceMDHHealthIndication extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.MDHHealthIndication;

	/**
	 * A sanitary measure applied for this MDH health indication.
	 * @see https://vocabulary.uncefact.org/appliedSanitaryMeasure
	 */
	appliedSanitaryMeasure?: IUneceSanitaryMeasure[];

	/**
	 * A textual description of this MDH health indication.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of a location for this MDH health indication.
	 * @see https://vocabulary.uncefact.org/locationId
	 */
	locationId?: string;

	/**
	 * A location name, expressed as text, of a location for this MDH health indication.
	 * @see https://vocabulary.uncefact.org/locationName
	 */
	locationName?: string;

	/**
	 * A reported date, time, date time or other date time value for this MDH health indication.
	 * @see https://vocabulary.uncefact.org/reportedDateTime
	 */
	reportedDateTime?: string;

	/**
	 * A reported quantity for this MDH health indication.
	 * @see https://vocabulary.uncefact.org/reportedQuantity
	 */
	reportedQuantity?: IUneceQuantityType[];

	/**
	 * The indication of whether or not the status of this MDH health indication is true or false.
	 * @see https://vocabulary.uncefact.org/statusIndicator
	 */
	statusIndicator?: boolean;

	/**
	 * A code specifying a type of MDH health indication.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceMDHHealthIndicationTypeCodeList | string;
}
