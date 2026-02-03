// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a subordinate line trade agreement.
 * @see https://vocabulary.uncefact.org/SubordinateLineTradeAgreement
 */
export interface IUneceSubordinateLineTradeAgreement extends IJsonLdNodeObject {
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
	additionalDocument?: IUneceDocument;

	/**
	 * A buyer generated order document referenced in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IUneceDocument;

	/**
	 * A gross product price in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/grossPriceProductPrice
	 */
	grossPriceProductPrice?: IUneceTradePrice;

	/**
	 * A net product price in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/netPriceProductPrice
	 */
	netPriceProductPrice?: IUneceTradePrice;

	/**
	 * The seller generated order document referenced in this subordinate line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IUneceDocument;
}
