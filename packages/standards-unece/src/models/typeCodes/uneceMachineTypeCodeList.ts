// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceMachine typeCode property.
 * @see https://vocabulary.uncefact.org/Machine
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceMachineTypeCodeList = {
	/**
	 * A machine allocated to this production process.
	 * @see https://vocabulary.uncefact.org/allocatedMachine
	 */
	AllocatedMachine: "unece:allocatedMachine",

	/**
	 * A production machine applicable to this facility production unit.
	 * A production machine applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMachine
	 */
	ApplicableMachine: "unece:applicableMachine",

	/**
	 * A production machine combined with this production machine.
	 * A production machine combined with this specified production device.
	 * @see https://vocabulary.uncefact.org/combinedMachine
	 */
	CombinedMachine: "unece:combinedMachine",

	/**
	 * A production machine specified for this product print.
	 * @see https://vocabulary.uncefact.org/specifiedMachine
	 */
	SpecifiedMachine: "unece:specifiedMachine"
} as const;

/**
 * Values for UneceMachine typeCode property.
 * @see https://vocabulary.uncefact.org/Machine
 */
export type UneceMachineTypeCodeList = (typeof UneceMachineTypeCodeList)[keyof typeof UneceMachineTypeCodeList];
