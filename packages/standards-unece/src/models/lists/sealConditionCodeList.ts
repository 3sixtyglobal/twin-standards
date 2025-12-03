// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the seal condition.
 * @see https://vocabulary.uncefact.org/SealConditionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SealConditionCodeList = {
	/**
	 * In right condition: 1.
	 */
	InRightCondition: "unece:SealConditionCodeList#1",

	/**
	 * Damaged: 2.
	 */
	Damaged: "unece:SealConditionCodeList#2",

	/**
	 * Missing: 3.
	 */
	Missing: "unece:SealConditionCodeList#3",

	/**
	 * Broken: 4.
	 */
	Broken: "unece:SealConditionCodeList#4",

	/**
	 * Faulty electronic seal: 5.
	 */
	FaultyElectronicSeal: "unece:SealConditionCodeList#5"
} as const;

/**
 * A character string used to represent the seal condition.
 * @see https://vocabulary.uncefact.org/SealConditionCodeList
 */
export type SealConditionCodeList = (typeof SealConditionCodeList)[keyof typeof SealConditionCodeList];
