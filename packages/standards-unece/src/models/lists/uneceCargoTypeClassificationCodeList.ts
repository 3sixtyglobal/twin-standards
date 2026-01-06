// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a cargo type classification.
 * @see https://vocabulary.uncefact.org/CargoTypeClassificationCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCargoTypeClassificationCodeList = {
	/**
	 * Documents: 1.
	 */
	Documents: "unece:CargoTypeClassificationCodeList#1",

	/**
	 * Breakbulk: 10.
	 */
	Breakbulk: "unece:CargoTypeClassificationCodeList#10",

	/**
	 * Hazardous cargo: 11.
	 */
	HazardousCargo: "unece:CargoTypeClassificationCodeList#11",

	/**
	 * General cargo: 12.
	 */
	GeneralCargo: "unece:CargoTypeClassificationCodeList#12",

	/**
	 * Liquid cargo: 13.
	 */
	LiquidCargo: "unece:CargoTypeClassificationCodeList#13",

	/**
	 * Temperature controlled cargo: 14.
	 */
	TemperatureControlledCargo: "unece:CargoTypeClassificationCodeList#14",

	/**
	 * Environmental pollutant cargo: 15.
	 */
	EnvironmentalPollutantCargo: "unece:CargoTypeClassificationCodeList#15",

	/**
	 * Not-hazardous cargo: 16.
	 */
	NotHazardousCargo: "unece:CargoTypeClassificationCodeList#16",

	/**
	 * Diplomatic: 17.
	 */
	Diplomatic: "unece:CargoTypeClassificationCodeList#17",

	/**
	 * Military: 18.
	 */
	Military: "unece:CargoTypeClassificationCodeList#18",

	/**
	 * Obnoxious: 19.
	 */
	Obnoxious: "unece:CargoTypeClassificationCodeList#19",

	/**
	 * Low value non-dutiable consignments: 2.
	 */
	LowValueNonDutiableConsignments: "unece:CargoTypeClassificationCodeList#2",

	/**
	 * Out of gauge: 20.
	 */
	OutOfGauge: "unece:CargoTypeClassificationCodeList#20",

	/**
	 * Household goods and personal effects: 21.
	 */
	HouseholdGoodsAndPersonalEffects: "unece:CargoTypeClassificationCodeList#21",

	/**
	 * Frozen cargo: 22.
	 */
	FrozenCargo: "unece:CargoTypeClassificationCodeList#22",

	/**
	 * Ballast only: 23.
	 */
	BallastOnly: "unece:CargoTypeClassificationCodeList#23",

	/**
	 * Incompatible cargo: 24.
	 */
	IncompatibleCargo: "unece:CargoTypeClassificationCodeList#24",

	/**
	 * Deep-frozen cargo: 25.
	 */
	DeepFrozenCargo: "unece:CargoTypeClassificationCodeList#25",

	/**
	 * Low value dutiable consignments: 3.
	 */
	LowValueDutiableConsignments: "unece:CargoTypeClassificationCodeList#3",

	/**
	 * High value consignments: 4.
	 */
	HighValueConsignments: "unece:CargoTypeClassificationCodeList#4",

	/**
	 * Other non-containerized: 5.
	 */
	OtherNonContainerized: "unece:CargoTypeClassificationCodeList#5",

	/**
	 * Vehicles: 6.
	 */
	Vehicles: "unece:CargoTypeClassificationCodeList#6",

	/**
	 * Roll-on roll-off: 7.
	 */
	RollOnRollOff: "unece:CargoTypeClassificationCodeList#7",

	/**
	 * Palletized: 8.
	 */
	Palletized: "unece:CargoTypeClassificationCodeList#8",

	/**
	 * Containerized: 9.
	 */
	Containerized: "unece:CargoTypeClassificationCodeList#9"
} as const;

/**
 * A character string used to represent a cargo type classification.
 * @see https://vocabulary.uncefact.org/CargoTypeClassificationCodeList
 */
export type UneceCargoTypeClassificationCodeList = (typeof UneceCargoTypeClassificationCodeList)[keyof typeof UneceCargoTypeClassificationCodeList];
