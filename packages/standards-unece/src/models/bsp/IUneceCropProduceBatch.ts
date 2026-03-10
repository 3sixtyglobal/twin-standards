// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAgriculturalCertificate } from "./IUneceAgriculturalCertificate.js";
import type { IUneceAgriculturalCharacteristic } from "./IUneceAgriculturalCharacteristic.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProduce } from "./IUneceProduce.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceCropProduceBatchTypeCodeList } from "../typeCodes/uneceCropProduceBatchTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of crop produce considered or dealt with together.
 * @see https://vocabulary.uncefact.org/CropProduceBatch
 */
export interface IUneceCropProduceBatch {
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
	 * @format date-time
	 */
	breakUpDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the creation of this crop produce batch.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 * @format date-time
	 */
	creationDateTime?: string;

	/**
	 * The identifier for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

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
	sizeMeasure?: IUneceMeasureType;

	/**
	 * An agricultural certificate specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCertificate
	 */
	specifiedAgriculturalCertificate?: IUneceAgriculturalCertificate[];

	/**
	 * An agricultural characteristic specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IUneceAgriculturalCharacteristic[];

	/**
	 * A crop produce specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedProduce
	 */
	specifiedProduce?: IUneceProduce[];

	/**
	 * The quantity specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedQuantity
	 */
	specifiedQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the type of crop produce batch.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceCropProduceBatchTypeCodeList | string;

	/**
	 * The number of units, expressed as a quantity, for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;
}
