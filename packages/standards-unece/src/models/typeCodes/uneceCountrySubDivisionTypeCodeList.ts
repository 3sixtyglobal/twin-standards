// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCountrySubDivision typeCode property.
 * @see https://vocabulary.uncefact.org/CountrySubDivision
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCountrySubDivisionTypeCodeList = {
	/**
	 * A subordinate country sub-division within this trade country sub-division.
	 * A trade country sub-division that is subordinate to this trade country, such as a state, a county, a canton, a province.
	 * @see https://vocabulary.uncefact.org/subordinateCountrySubDivision
	 */
	SubordinateCountrySubDivision: "unece:subordinateCountrySubDivision",

	/**
	 * A superordinate country sub-division for this trade country sub-division.
	 * @see https://vocabulary.uncefact.org/superordinateCountrySubDivision
	 */
	SuperordinateCountrySubDivision: "unece:superordinateCountrySubDivision"
} as const;

/**
 * Values for UneceCountrySubDivision typeCode property.
 * @see https://vocabulary.uncefact.org/CountrySubDivision
 */
export type UneceCountrySubDivisionTypeCodeList = (typeof UneceCountrySubDivisionTypeCodeList)[keyof typeof UneceCountrySubDivisionTypeCodeList];
