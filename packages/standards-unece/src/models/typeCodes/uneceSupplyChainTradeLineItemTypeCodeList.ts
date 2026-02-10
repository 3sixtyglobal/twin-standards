// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSupplyChainTradeLineItem typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeLineItem
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSupplyChainTradeLineItemTypeCodeList = {
	/**
	 * A supply chain trade line item included in this logistics package.
	 * A supply chain trade line item which is included in this trade product group.
	 * A trade line item included in this referenced supply chain consignment item.
	 * A trade line item included in this supply chain consignment item.
	 * A trade line item included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	IncludedSupplyChainTradeLineItem: "unece:includedSupplyChainTradeLineItem",

	/**
	 * A trade line item specified for this forecast delivery schedule.
	 * @see https://vocabulary.uncefact.org/specifiedTradeLineItem
	 */
	SpecifiedTradeLineItem: "unece:specifiedTradeLineItem"
} as const;

/**
 * Values for UneceSupplyChainTradeLineItem typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeLineItem
 */
export type UneceSupplyChainTradeLineItemTypeCodeList = (typeof UneceSupplyChainTradeLineItemTypeCodeList)[keyof typeof UneceSupplyChainTradeLineItemTypeCodeList];
