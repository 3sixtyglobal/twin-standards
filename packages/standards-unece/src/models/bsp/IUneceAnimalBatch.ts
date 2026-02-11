// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDelimitedPeriod } from "./IUneceDelimitedPeriod.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of animals dealt with together.
 * @see https://vocabulary.uncefact.org/AnimalBatch
 */
export interface IUneceAnimalBatch extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AnimalBatch;

	/**
	 * The date, time, date time, or other date time value of the break up of this animal batch.
	 * @see https://vocabulary.uncefact.org/breakUpDateTime
	 */
	breakUpDateTime?: string;

	/**
	 * The date, time, date time, or other date time value of the creation of this animal batch.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime: string;

	/**
	 * A Fisheries Language for Universal eXchange (FLUX) identifier for this animal batch.
	 * @see https://vocabulary.uncefact.org/fLUXId
	 */
	fLUXId?: string;

	/**
	 * The identifier for this animal batch.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The maximum size, expressed as a measure, of the animals for this animal batch.
	 * @see https://vocabulary.uncefact.org/maximumSizeMeasure
	 */
	maximumSizeMeasure?: IUneceMeasureType;

	/**
	 * The minimum size, expressed as a measure, of the animals for this animal batch.
	 * @see https://vocabulary.uncefact.org/minimumSizeMeasure
	 */
	minimumSizeMeasure?: IUneceMeasureType;

	/**
	 * The date, time, date time, or other date time value of the sale for this animal batch.
	 * @see https://vocabulary.uncefact.org/saleDateTime
	 */
	saleDateTime?: string;

	/**
	 * The identifier for the sales note for this animal batch.
	 * @see https://vocabulary.uncefact.org/salesNoteId
	 */
	salesNoteId?: string;

	/**
	 * The delimited period specified for this animal batch.
	 * @see https://vocabulary.uncefact.org/specifiedDelimitedPeriod
	 */
	specifiedDelimitedPeriod?: IUneceDelimitedPeriod;

	/**
	 * The delimited period specified for this animal batch.
	 * @see https://vocabulary.uncefact.org/specifiedPeriod
	 */
	specifiedPeriod?: IUneceDelimitedPeriod;

	/**
	 * The number of units, expressed as a quantity, for this animal batch.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The weight, expressed as a measure, for this animal batch.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType;
}
