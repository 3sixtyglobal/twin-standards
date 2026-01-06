// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceLogisticsLabel } from "./IUneceLogisticsLabel.js";
import type { UneceAutomaticDataCaptureMethodCodeList } from "../lists/uneceAutomaticDataCaptureMethodCodeList.js";
import type { UnecePackagingMarkingCodeList } from "../lists/unecePackagingMarkingCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An inscription, stamp or label on packaging, such as to indicate date, ownership, quality, manufacture or origin.
 * @see https://vocabulary.uncefact.org/Marking
 */
export interface IUneceMarking extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Marking;

	/**
	 * A code specifying an automatic data capture method type for this packaging marking.
	 * @see https://vocabulary.uncefact.org/automaticDataCaptureMethodTypeCode
	 */
	automaticDataCaptureMethodTypeCode?: UneceAutomaticDataCaptureMethodCodeList[];

	/**
	 * Content, expressed as text, of this packaging marking.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content?: string;

	/**
	 * Content, expressed as a monetary amount, for this packaging marking.
	 * @see https://vocabulary.uncefact.org/contentAmount
	 */
	contentAmount?: IUneceAmountType[];

	/**
	 * Content, expressed as a code, of this packaging marking.
	 * @see https://vocabulary.uncefact.org/contentCode
	 */
	contentCode?: string;

	/**
	 * The date, time, date time or other date time value for the content of this packaging marking.
	 * @see https://vocabulary.uncefact.org/contentDateTime
	 */
	contentDateTime?: string;

	/**
	 * A code specifying a type of barcode for this packaging marking.
	 * @see https://vocabulary.uncefact.org/packagingMarkingBarcodeTypeCode
	 */
	packagingMarkingBarcodeTypeCode?: string;

	/**
	 * A code specifying a type of packaging marking.
	 * @see https://vocabulary.uncefact.org/packagingMarkingTypeCode
	 */
	packagingMarkingTypeCode?: UnecePackagingMarkingCodeList[];

	/**
	 * A logistics label specified for this packaging marking.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLabel
	 */
	specifiedLogisticsLabel?: IUneceLogisticsLabel[];
}
