// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSupplyChainTradeTransaction typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeTransaction
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSupplyChainTradeTransactionTypeCodeList = {
	/**
	 * A supply chain trade transaction related to this specified assessment.
	 * A supply chain trade transaction related to this specified certificate.
	 * A supply chain trade transaction related to this trade product.
	 * A trade transaction related to this referenced supply chain consignment.
	 * A trade transaction related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	RelatedTradeTransaction: "unece:relatedTradeTransaction"
} as const;

/**
 * Values for UneceSupplyChainTradeTransaction typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeTransaction
 */
export type UneceSupplyChainTradeTransactionTypeCodeList = (typeof UneceSupplyChainTradeTransactionTypeCodeList)[keyof typeof UneceSupplyChainTradeTransactionTypeCodeList];
