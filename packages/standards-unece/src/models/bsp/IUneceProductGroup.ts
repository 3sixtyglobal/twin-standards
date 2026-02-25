// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceSupplyChainTradeLineItem } from "./IUneceSupplyChainTradeLineItem.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A grouping of trade products.
 * @see https://vocabulary.uncefact.org/ProductGroup
 */
export interface IUneceProductGroup {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductGroup;

	/**
	 * An identifier for this trade product group.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A supply chain trade line item which is included in this trade product group.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: IUneceSupplyChainTradeLineItem[];

	/**
	 * A product included in this trade product group.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: IUneceTradeProduct[];

	/**
	 * The name, expressed as text, for this trade product group.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A referenced document specified for this trade product group.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument[];

	/**
	 * A product group subordinate to this trade product group.
	 * @see https://vocabulary.uncefact.org/subordinateProductGroup
	 */
	subordinateProductGroup?: IUneceProductGroup[];
}
