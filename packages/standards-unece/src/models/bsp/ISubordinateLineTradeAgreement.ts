// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { ITradePrice } from "./ITradePrice.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a subordinate line trade agreement.
 * @see https://vocabulary.uncefact.org/SubordinateLineTradeAgreement
 */
export interface ISubordinateLineTradeAgreement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateLineTradeAgreement;

	/**
	 * An additional document referenced in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IDocument[];

	/**
	 * A buyer generated order document referenced in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IDocument[];

	/**
	 * A gross product price in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/grossPriceProductPrice
	 */
	grossPriceProductPrice?: ITradePrice[];

	/**
	 * A net product price in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/netPriceProductPrice
	 */
	netPriceProductPrice?: ITradePrice[];

	/**
	 * The seller generated order document referenced in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IDocument[];
}
