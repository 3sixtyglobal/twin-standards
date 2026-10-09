// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A series of activities associated with the processing of a product.
 * @see https://vocabulary.uncefact.org/ProductionCycle
 */
export interface IUneceProductionCycle {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionCycle;

	/**
	 * A process applicable to this specified production cycle.
	 * @see https://vocabulary.uncefact.org/applicableProductionProcess
	 */
	applicableProductionProcess?: IUneceProductionProcess[];

	/**
	 * The date, time, date time, or other date time value of the end of this specified production cycle.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 * @json-schema format:date-time
	 */
	endDateTime?: string;

	/**
	 * An identifier of this specified production cycle.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, of this specified production cycle.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A process document referenced for this specified production cycle.
	 * @see https://vocabulary.uncefact.org/processSpecifiedDocument
	 */
	processSpecifiedDocument?: IUneceDocument[];

	/**
	 * The production year for this specified production cycle.
	 * @see https://vocabulary.uncefact.org/productionYearDateTime
	 * @json-schema format:date-time
	 */
	productionYearDateTime?: string;

	/**
	 * A binary file related to this specified production cycle.
	 * @see https://vocabulary.uncefact.org/relatedBinaryFile
	 */
	relatedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The sequence number for this specified production cycle.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The date, time, date time, or other date time value of the start of this specified production cycle.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 * @json-schema format:date-time
	 */
	startDateTime?: string;
}
