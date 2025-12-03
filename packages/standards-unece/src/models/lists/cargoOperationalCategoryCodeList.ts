// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent cargo operational categories.
 * @see https://vocabulary.uncefact.org/CargoOperationalCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CargoOperationalCategoryCodeList = {
	/**
	 * Documents: 1.
	 */
	Documents: "unece:CargoOperationalCategoryCodeList#1",

	/**
	 * Breakbulk: 10.
	 */
	Breakbulk: "unece:CargoOperationalCategoryCodeList#10",

	/**
	 * Hazardous cargo: 11.
	 */
	HazardousCargo: "unece:CargoOperationalCategoryCodeList#11",

	/**
	 * General cargo: 12.
	 */
	GeneralCargo: "unece:CargoOperationalCategoryCodeList#12",

	/**
	 * Liquid cargo: 13.
	 */
	LiquidCargo: "unece:CargoOperationalCategoryCodeList#13",

	/**
	 * Temperature controlled cargo: 14.
	 */
	TemperatureControlledCargo: "unece:CargoOperationalCategoryCodeList#14",

	/**
	 * Environmental pollutant cargo: 15.
	 */
	EnvironmentalPollutantCargo: "unece:CargoOperationalCategoryCodeList#15",

	/**
	 * Not-hazardous cargo: 16.
	 */
	NotHazardousCargo: "unece:CargoOperationalCategoryCodeList#16",

	/**
	 * Diplomatic: 17.
	 */
	Diplomatic: "unece:CargoOperationalCategoryCodeList#17",

	/**
	 * Military: 18.
	 */
	Military: "unece:CargoOperationalCategoryCodeList#18",

	/**
	 * Obnoxious: 19.
	 */
	Obnoxious: "unece:CargoOperationalCategoryCodeList#19",

	/**
	 * Low value non-dutiable consignments: 2.
	 */
	LowValueNonDutiableConsignments: "unece:CargoOperationalCategoryCodeList#2",

	/**
	 * Out of gauge: 20.
	 */
	OutOfGauge: "unece:CargoOperationalCategoryCodeList#20",

	/**
	 * Household goods and personal effects: 21.
	 */
	HouseholdGoodsAndPersonalEffects: "unece:CargoOperationalCategoryCodeList#21",

	/**
	 * Frozen cargo: 22.
	 */
	FrozenCargo: "unece:CargoOperationalCategoryCodeList#22",

	/**
	 * Ballast only: 23.
	 */
	BallastOnly: "unece:CargoOperationalCategoryCodeList#23",

	/**
	 * Incompatible cargo: 24.
	 */
	IncompatibleCargo: "unece:CargoOperationalCategoryCodeList#24",

	/**
	 * Deep-frozen cargo: 25.
	 */
	DeepFrozenCargo: "unece:CargoOperationalCategoryCodeList#25",

	/**
	 * Low value dutiable consignments: 3.
	 */
	LowValueDutiableConsignments: "unece:CargoOperationalCategoryCodeList#3",

	/**
	 * High value consignments: 4.
	 */
	HighValueConsignments: "unece:CargoOperationalCategoryCodeList#4",

	/**
	 * Other non-containerized: 5.
	 */
	OtherNonContainerized: "unece:CargoOperationalCategoryCodeList#5",

	/**
	 * Vehicles: 6.
	 */
	Vehicles: "unece:CargoOperationalCategoryCodeList#6",

	/**
	 * Roll-on roll-off: 7.
	 */
	RollOnRollOff: "unece:CargoOperationalCategoryCodeList#7",

	/**
	 * Palletized: 8.
	 */
	Palletized: "unece:CargoOperationalCategoryCodeList#8",

	/**
	 * Containerized: 9.
	 */
	Containerized: "unece:CargoOperationalCategoryCodeList#9"
} as const;

/**
 * A character string used to represent cargo operational categories.
 * @see https://vocabulary.uncefact.org/CargoOperationalCategoryCodeList
 */
export type CargoOperationalCategoryCodeList = (typeof CargoOperationalCategoryCodeList)[keyof typeof CargoOperationalCategoryCodeList];
