// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Permissible limit or limits of variation that is fixed for the case in question but may be different in other cases.
 * @see https://vocabulary.uncefact.org/Tolerance
 */
export interface ITolerance extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Tolerance;

	/**
	 * Information, expressed as text, for this specified tolerance.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The margin numeric value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/marginValueNumeric
	 */
	marginValueNumeric?: string;

	/**
	 * The margin percentage value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/marginValuePercent
	 */
	marginValuePercent?: string;

	/**
	 * The minus percentage value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/minusValuePercent
	 */
	minusValuePercent?: string;

	/**
	 * The minus quantity value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/minusValueQuantity
	 */
	minusValueQuantity?: IQuantityType[];

	/**
	 * The surplus percentage value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/surplusValuePercent
	 */
	surplusValuePercent?: string;

	/**
	 * The surplus quantity value of this specified tolerance.
	 * @see https://vocabulary.uncefact.org/surplusValueQuantity
	 */
	surplusValueQuantity?: IQuantityType[];
}
