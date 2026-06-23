// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceFoodChoice typeCode property.
 * @see https://vocabulary.uncefact.org/FoodChoice
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceFoodChoiceTypeCodeList = {
	/**
	 * A food choice notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedFoodChoice
	 */
	NotifiedFoodChoice: "unece:notifiedFoodChoice"
} as const;

/**
 * Values for UneceFoodChoice typeCode property.
 * @see https://vocabulary.uncefact.org/FoodChoice
 */
export type UneceFoodChoiceTypeCodeList = (typeof UneceFoodChoiceTypeCodeList)[keyof typeof UneceFoodChoiceTypeCodeList];
