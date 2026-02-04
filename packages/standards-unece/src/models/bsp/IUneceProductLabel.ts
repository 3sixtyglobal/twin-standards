// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A label, such as a garment label or a radio frequency tag, used for identifying a product.
 * @see https://vocabulary.uncefact.org/ProductLabel
 */
export interface IUneceProductLabel extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductLabel;

	/**
	 * The date, time, date time, or other date time value, for the attachment of this product label.
	 * @see https://vocabulary.uncefact.org/attachmentDateTime
	 */
	attachmentDateTime?: string;

	/**
	 * The barcode identifier of this product label.
	 * @see https://vocabulary.uncefact.org/barcodeId
	 */
	barcodeId?: string;

	/**
	 * The brand name, expressed as text, on this product label.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * The code specifying the category of this product label.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * An identifier of this product label.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A sustainability assertion included on this product label.
	 * @see https://vocabulary.uncefact.org/includedAssertion
	 */
	includedAssertion?: IUneceAssertion[];

	/**
	 * The code specifying the layout type of this product label.
	 * @see https://vocabulary.uncefact.org/layoutTypeCode
	 */
	layoutTypeCode?: string;

	/**
	 * The name, expressed as a text, of this product label.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The identifier of the end of a series of product labels.
	 * @see https://vocabulary.uncefact.org/seriesEndId
	 */
	seriesEndId?: string;

	/**
	 * The identifier of the start of a series of product labels.
	 * @see https://vocabulary.uncefact.org/seriesStartId
	 */
	seriesStartId?: string;

	/**
	 * The code specifying the size of this product label.
	 * @see https://vocabulary.uncefact.org/sizeCode
	 */
	sizeCode?: string;

	/**
	 * The code specifying the type of tag for this product label.
	 * @see https://vocabulary.uncefact.org/tagTypeCode
	 */
	tagTypeCode?: string;
}
