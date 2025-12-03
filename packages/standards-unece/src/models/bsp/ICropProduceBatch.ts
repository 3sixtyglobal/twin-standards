// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalCertificate } from "./IAgriculturalCertificate.js";
import type { IAgriculturalCharacteristic } from "./IAgriculturalCharacteristic.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProduce } from "./IProduce.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of crop produce considered or dealt with together.
 * @see https://vocabulary.uncefact.org/CropProduceBatch
 */
export interface ICropProduceBatch extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CropProduceBatch;

	/**
	 * A treatment, expressed as text, applied to this crop produce batch.
	 * @see https://vocabulary.uncefact.org/appliedTreatment
	 */
	appliedTreatment?: string;

	/**
	 * The date, time, date time, or other date time value of the break up of this crop produce batch.
	 * @see https://vocabulary.uncefact.org/breakUpDateTime
	 */
	breakUpDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the creation of this crop produce batch.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The identifier for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The value of the nominal size for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/nominalSizeNumeric
	 */
	nominalSizeNumeric?: string;

	/**
	 * The product name, expressed as text, for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/productName
	 */
	productName?: string;

	/**
	 * The size, expressed as a measure, for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/sizeMeasure
	 */
	sizeMeasure?: IMeasureType[];

	/**
	 * An agricultural certificate specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCertificate
	 */
	specifiedAgriculturalCertificate?: IAgriculturalCertificate[];

	/**
	 * An agricultural characteristic specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IAgriculturalCharacteristic[];

	/**
	 * A crop produce specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedProduce
	 */
	specifiedProduce?: IProduce[];

	/**
	 * The quantity specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedQuantity
	 */
	specifiedQuantity?: IQuantityType[];

	/**
	 * The code specifying the type of crop produce batch.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The number of units, expressed as a quantity, for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];
}
