// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILineTradeAgreement } from "./ILineTradeAgreement.js";
import type { ILineTradeDelivery } from "./ILineTradeDelivery.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of trade line items, trade line agreement, trade line delivery and trade line settlement details.
 * @see https://vocabulary.uncefact.org/LineTradeTransaction
 */
export interface ILineTradeTransaction extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LineTradeTransaction;

	/**
	 * A trade agreement applicable to this line trade transaction, such as payment or delivery terms.
	 * @see https://vocabulary.uncefact.org/applicableLineTradeAgreement
	 */
	applicableLineTradeAgreement?: ILineTradeAgreement[];

	/**
	 * A trade delivery applicable to this line trade transaction.
	 * @see https://vocabulary.uncefact.org/applicableLineTradeDelivery
	 */
	applicableLineTradeDelivery?: ILineTradeDelivery[];

	/**
	 * A trade product included in this line trade transaction.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: ITradeProduct[];
}
