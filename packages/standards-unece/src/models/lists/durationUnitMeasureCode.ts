// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * RDF Class for DurationUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/DurationUnitMeasureCode
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationUnitMeasureCode = {
	/**
	 * year: ANN.
	 */
	Year: "unece:DurationUnitMeasureCode#ANN",

	/**
	 * microsecond: B98.
	 */
	Microsecond: "unece:DurationUnitMeasureCode#B98",

	/**
	 * millisecond: C26.
	 */
	Millisecond: "unece:DurationUnitMeasureCode#C26",

	/**
	 * nanosecond: C47.
	 */
	Nanosecond: "unece:DurationUnitMeasureCode#C47",

	/**
	 * tropical year: D42.
	 */
	TropicalYear: "unece:DurationUnitMeasureCode#D42",

	/**
	 * ten day: DAD.
	 */
	TenDay: "unece:DurationUnitMeasureCode#DAD",

	/**
	 * day: DAY.
	 */
	Day: "unece:DurationUnitMeasureCode#DAY",

	/**
	 * decade: DEC.
	 */
	Decade: "unece:DurationUnitMeasureCode#DEC",

	/**
	 * hour: HUR.
	 */
	Hour: "unece:DurationUnitMeasureCode#HUR",

	/**
	 * minute [unit of time]: MIN.
	 */
	MinuteUnitOfTime: "unece:DurationUnitMeasureCode#MIN",

	/**
	 * month: MON.
	 */
	Month: "unece:DurationUnitMeasureCode#MON",

	/**
	 * running or operating hour: RH.
	 */
	RunningOrOperatingHour: "unece:DurationUnitMeasureCode#RH",

	/**
	 * half year (6 months): SAN.
	 */
	HalfYear: "unece:DurationUnitMeasureCode#SAN",

	/**
	 * second [unit of time]: SEC.
	 */
	SecondUnitOfTime: "unece:DurationUnitMeasureCode#SEC",

	/**
	 * week: WEE.
	 */
	Week: "unece:DurationUnitMeasureCode#WEE"
} as const;

/**
 * RDF Class for DurationUnitMeasureType unit code type to define unit code values.
 * @see https://vocabulary.uncefact.org/DurationUnitMeasureCode
 */
export type DurationUnitMeasureCode = (typeof DurationUnitMeasureCode)[keyof typeof DurationUnitMeasureCode];
