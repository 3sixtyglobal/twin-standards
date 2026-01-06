// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a priority.
 * @see https://vocabulary.uncefact.org/PriorityDescriptionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePriorityDescriptionCodeList = {
	/**
	 * Immediate: 1.
	 */
	Immediate: "unece:PriorityDescriptionCodeList#1",

	/**
	 * Urgent: 2.
	 */
	Urgent: "unece:PriorityDescriptionCodeList#2",

	/**
	 * Normal: 3.
	 */
	Normal: "unece:PriorityDescriptionCodeList#3",

	/**
	 * Scheduled: 4.
	 */
	Scheduled: "unece:PriorityDescriptionCodeList#4",

	/**
	 * Category A: 5.
	 */
	CategoryA: "unece:PriorityDescriptionCodeList#5",

	/**
	 * Category B: 6.
	 */
	CategoryB: "unece:PriorityDescriptionCodeList#6"
} as const;

/**
 * A character string used to represent a priority.
 * @see https://vocabulary.uncefact.org/PriorityDescriptionCodeList
 */
export type UnecePriorityDescriptionCodeList = (typeof UnecePriorityDescriptionCodeList)[keyof typeof UnecePriorityDescriptionCodeList];
