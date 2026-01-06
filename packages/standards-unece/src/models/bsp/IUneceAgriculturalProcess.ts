// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceCropProduceBatch } from "./IUneceCropProduceBatch.js";
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceFieldCrop } from "./IUneceFieldCrop.js";
import type { IUneceProductionWasteMaterial } from "./IUneceProductionWasteMaterial.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A practice of cultivating land, raising crops, or treatment of the agricultural produce.
 * @see https://vocabulary.uncefact.org/AgriculturalProcess
 */
export interface IUneceAgriculturalProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AgriculturalProcess;

	/**
	 * The date, time, date time or other date time value of the actual end for the crop production in this agricultural
	 * process.
	 * @see https://vocabulary.uncefact.org/actualEndDateTime
	 */
	actualEndDateTime?: string;

	/**
	 * The date, time, date time or other date time value for the actual start of the crop production in this agricultural
	 * process.
	 * @see https://vocabulary.uncefact.org/actualStartDateTime
	 */
	actualStartDateTime?: string;

	/**
	 * An agricultural application applied to a crop production agricultural process.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication[];

	/**
	 * The textual description of the agricultural process for this crop production.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time or other date time value for the earliest start of the crop production in this agricultural
	 * process.
	 * @see https://vocabulary.uncefact.org/earliestStartDateTime
	 */
	earliestStartDateTime?: string;

	/**
	 * A crop produce batch harvested in the crop production for this agricultural process.
	 * @see https://vocabulary.uncefact.org/harvestedBatch
	 */
	harvestedBatch?: IUneceCropProduceBatch[];

	/**
	 * The date, time, date time or other date time value of the latest end for the crop production in this agricultural
	 * process.
	 * @see https://vocabulary.uncefact.org/latestEndDateTime
	 */
	latestEndDateTime?: string;

	/**
	 * Disposal instructions related to production waste for this agricultural crop production process.
	 * @see https://vocabulary.uncefact.org/productionWasteInstructions
	 */
	productionWasteInstructions?: IUneceDisposalInstructions[];

	/**
	 * Production waste material reported for this agricultural crop production process.
	 * @see https://vocabulary.uncefact.org/reportedProductionWasteMaterial
	 */
	reportedProductionWasteMaterial?: IUneceProductionWasteMaterial[];

	/**
	 * A field crop specified for this crop production agricultural process.
	 * @see https://vocabulary.uncefact.org/specifiedFieldCrop
	 */
	specifiedFieldCrop?: IUneceFieldCrop[];

	/**
	 * The code specifying the status of the agricultural process for this crop production.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the subordinate type of the agricultural process for this crop production.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * The code specifying the type of agricultural process for this crop production.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
