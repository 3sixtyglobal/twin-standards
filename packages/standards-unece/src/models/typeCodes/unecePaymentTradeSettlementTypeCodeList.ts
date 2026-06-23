// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UnecePaymentTradeSettlement typeCode property.
 * @see https://vocabulary.uncefact.org/PaymentTradeSettlement
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePaymentTradeSettlementTypeCodeList = {
	/**
	 * A payment trade settlement specified for this trade price.
	 * A trade settlement payment specified for this trade settlement payment.
	 * The payment trade settlement for this specified requirement.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
	 */
	SpecifiedPaymentTradeSettlement: "unece:specifiedPaymentTradeSettlement"
} as const;

/**
 * Values for UnecePaymentTradeSettlement typeCode property.
 * @see https://vocabulary.uncefact.org/PaymentTradeSettlement
 */
export type UnecePaymentTradeSettlementTypeCodeList = (typeof UnecePaymentTradeSettlementTypeCodeList)[keyof typeof UnecePaymentTradeSettlementTypeCodeList];
