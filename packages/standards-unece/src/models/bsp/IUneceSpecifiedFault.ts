// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceTolerance } from "./IUneceTolerance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An unattractive or unsatisfactory characteristic.
 * @see https://vocabulary.uncefact.org/SpecifiedFault
 */
export interface IUneceSpecifiedFault extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedFault;

	/**
	 * The actual percentage of this specified fault.
	 * @see https://vocabulary.uncefact.org/actualSpecifiedPercent
	 */
	actualSpecifiedPercent?: string;

	/**
	 * The actual total quantity of this specified fault.
	 * @see https://vocabulary.uncefact.org/actualSpecifiedQuantity
	 */
	actualSpecifiedQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the category for this fault.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the classification for this fault.
	 * @see https://vocabulary.uncefact.org/classificationCode
	 */
	classificationCode?: string;

	/**
	 * A textual description of this specified fault.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The estimated percentage of this specified fault.
	 * @see https://vocabulary.uncefact.org/estimatedSpecifiedPercent
	 */
	estimatedSpecifiedPercent?: string;

	/**
	 * A type, expressed as text, of this specified fault.
	 * @see https://vocabulary.uncefact.org/faultType
	 */
	faultType?: string;

	/**
	 * An applicable operational tolerance of this specified fault.
	 * @see https://vocabulary.uncefact.org/operationalApplicableTolerance
	 */
	operationalApplicableTolerance?: IUneceTolerance;

	/**
	 * The code specifying the type of fault.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
