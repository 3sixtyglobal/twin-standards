// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of a refund method.
 * @see https://vocabulary.uncefact.org/RefundMethodCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RefundMethodCodeList = {
	/**
	 * Contractual allowance: 1.
	 */
	ContractualAllowance: "unece:RefundMethodCodeList#1",

	/**
	 * Refunding: 2.
	 */
	Refunding: "unece:RefundMethodCodeList#2",

	/**
	 * Entity Reimbursement: 3.
	 */
	EntityReimbursement: "unece:RefundMethodCodeList#3"
} as const;

/**
 * A character string used to represent the type of a refund method.
 * @see https://vocabulary.uncefact.org/RefundMethodCodeList
 */
export type RefundMethodCodeList = (typeof RefundMethodCodeList)[keyof typeof RefundMethodCodeList];
