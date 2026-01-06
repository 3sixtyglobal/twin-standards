// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of scenario.
 * @see https://vocabulary.uncefact.org/ScenarioTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceScenarioTypeCodeList = {
	/**
	 * Initial scenario: 1.
	 */
	InitialScenario: "unece:ScenarioTypeCodeList#1",

	/**
	 * Final scenario: 2.
	 */
	FinalScenario: "unece:ScenarioTypeCodeList#2",

	/**
	 * Intermediate: 3.
	 */
	Intermediate: "unece:ScenarioTypeCodeList#3"
} as const;

/**
 * A character string used to represent the type of scenario.
 * @see https://vocabulary.uncefact.org/ScenarioTypeCodeList
 */
export type UneceScenarioTypeCodeList = (typeof UneceScenarioTypeCodeList)[keyof typeof UneceScenarioTypeCodeList];
