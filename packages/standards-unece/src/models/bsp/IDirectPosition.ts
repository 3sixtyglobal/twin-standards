// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified physical location described within a coordinate reference system.
 * @see https://vocabulary.uncefact.org/DirectPosition
 */
export interface IDirectPosition extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DirectPosition;

	/**
	 * An ordered list of axis labels, expressed as text, for this specified direct position.
	 * @see https://vocabulary.uncefact.org/axisLabelList
	 */
	axisLabelList?: string;

	/**
	 * A coordinate reference dimension, expressed as text, for this specified direct position.
	 * @see https://vocabulary.uncefact.org/coordinateReferenceDimension
	 */
	coordinateReferenceDimension?: string;

	/**
	 * A count for this specified direct position.
	 * @see https://vocabulary.uncefact.org/countNumeric
	 */
	countNumeric?: string;

	/**
	 * The name, expressed as text, of the reference for this specified direct position.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An ordered list of Unit Of Measure (UOM) labels, expressed as text, for this specified direct position.
	 * @see https://vocabulary.uncefact.org/uOMLabelList
	 */
	uOMLabelList?: string;
}
