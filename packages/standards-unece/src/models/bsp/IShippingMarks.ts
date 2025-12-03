// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILogisticsLabel } from "./ILogisticsLabel.js";
import type { MarkingInstructionCodeList } from "../lists/markingInstructionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Physical markings or labels on individual packages or transport units for logistics purposes.
 * @see https://vocabulary.uncefact.org/ShippingMarks
 */
export interface IShippingMarks extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ShippingMarks;

	/**
	 * A barcode label that is a part of these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/barcodeLabel
	 */
	barcodeLabel?: ILogisticsLabel[];

	/**
	 * A code specifying a marking instruction for these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/logisticsShippingMarksMarkingInstructionCode
	 */
	logisticsShippingMarksMarkingInstructionCode?: MarkingInstructionCodeList[];

	/**
	 * The code specifying the package category for these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/logisticsShippingMarksPackageCategoryCode
	 */
	logisticsShippingMarksPackageCategoryCode?: string;

	/**
	 * Marking, expressed as text, for these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/marking
	 */
	marking?: string;

	/**
	 * A Radio Frequency Identification (RFID) label that is a part of these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/rFIDLabel
	 */
	rFIDLabel?: ILogisticsLabel[];

	/**
	 * Radioactive labelling that is a part of these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/radioactiveLabel
	 */
	radioactiveLabel?: ILogisticsLabel[];

	/**
	 * A Vehicle Identification Number (VIN) label that is a part of these logistics shipping marks.
	 * @see https://vocabulary.uncefact.org/vINLabel
	 */
	vINLabel?: ILogisticsLabel[];
}
