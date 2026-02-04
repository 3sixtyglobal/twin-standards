// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSection } from "./IUneceSection.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A label used for identifying goods for logistics purposes, such as a barcode, a radio frequency tag or a Vehicle
 * Identification Number (VIN).
 * @see https://vocabulary.uncefact.org/LogisticsLabel
 */
export interface IUneceLogisticsLabel extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsLabel;

	/**
	 * The unique identifier of this logistics label.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A section included in this logistics label.
	 * @see https://vocabulary.uncefact.org/includedSection
	 */
	includedSection?: IUneceSection[];

	/**
	 * The code specifying the layout type of this logistics label.
	 * @see https://vocabulary.uncefact.org/layoutTypeCode
	 */
	layoutTypeCode?: string;

	/**
	 * The indication of whether or not there is a marking on this logistics label.
	 * @see https://vocabulary.uncefact.org/markingIndicator
	 */
	markingIndicator?: boolean;

	/**
	 * The unique identifier of the end of a series of logistics labels.
	 * @see https://vocabulary.uncefact.org/seriesEndId
	 */
	seriesEndId?: string;

	/**
	 * The unique identifier of the start of a series of logistics labels.
	 * @see https://vocabulary.uncefact.org/seriesStartId
	 */
	seriesStartId?: string;

	/**
	 * The code specifying the size of this logistics label.
	 * @see https://vocabulary.uncefact.org/sizeCode
	 */
	sizeCode?: string;
}
