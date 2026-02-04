// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasurement } from "./IUneceMeasurement.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A distinct article or provision in a document, which requires compliance.
 * @see https://vocabulary.uncefact.org/Clause
 */
export interface IUneceClause extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Clause;

	/**
	 * A measurement associated with this document clause.
	 * @see https://vocabulary.uncefact.org/associatedMeasurement
	 */
	associatedMeasurement?: IUneceMeasurement[];

	/**
	 * A period of time associated with this document clause.
	 * @see https://vocabulary.uncefact.org/associatedPeriod
	 */
	associatedPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * Content, expressed as text, of this document clause.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * The unique identifier of this document clause.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The Uniform Resource Locator (URL) for this document clause.
	 * @see https://vocabulary.uncefact.org/uRLId
	 */
	uRLId?: string;
}
