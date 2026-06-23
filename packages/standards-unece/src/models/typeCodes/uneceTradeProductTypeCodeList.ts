// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceTradeProduct typeCode property.
 * @see https://vocabulary.uncefact.org/TradeProduct
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTradeProductTypeCodeList = {
	/**
	 * A product applicable for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/applicableProduct
	 */
	ApplicableProduct: "unece:applicableProduct",

	/**
	 * A trade product component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentProduct
	 */
	ComponentProduct: "unece:componentProduct",

	/**
	 * A product included in this supply chain inventory.
	 * A product included in this trade product group.
	 * A trade product included in this line trade transaction.
	 * A trade product included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	IncludedTradeProduct: "unece:includedTradeProduct",

	/**
	 * An input product applicable to this facility production unit.
	 * An input product applicable to this production machine.
	 * An input product applicable to this production process.
	 * An input product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableProduct
	 */
	InputApplicableProduct: "unece:inputApplicableProduct",

	/**
	 * An output product applicable to this facility production unit.
	 * An output product applicable to this production machine.
	 * An output product applicable to this production process.
	 * An output product applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableProduct
	 */
	OutputApplicableProduct: "unece:outputApplicableProduct",

	/**
	 * The product specified by the requisitioner for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/requisitionerSpecifiedProduct
	 */
	RequisitionerSpecifiedProduct: "unece:requisitionerSpecifiedProduct",

	/**
	 * A product specified for this supply chain trade line item.
	 * A product specified for this trade party.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProduct
	 */
	SpecifiedTradeProduct: "unece:specifiedTradeProduct"
} as const;

/**
 * Values for UneceTradeProduct typeCode property.
 * @see https://vocabulary.uncefact.org/TradeProduct
 */
export type UneceTradeProductTypeCodeList = (typeof UneceTradeProductTypeCodeList)[keyof typeof UneceTradeProductTypeCodeList];
