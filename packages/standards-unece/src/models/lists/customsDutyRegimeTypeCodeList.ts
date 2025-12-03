// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of customs duty regime.
 * @see https://vocabulary.uncefact.org/CustomsDutyRegimeTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CustomsDutyRegimeTypeCodeList = {
	/**
	 * Origin subject to EC/EFTA preference: 1.
	 */
	OriginSubjectToECEFTAPreference: "unece:CustomsDutyRegimeTypeCodeList#1",

	/**
	 * Origin subject to other preference agreement: 2.
	 */
	OriginSubjectToOtherPreferenceAgreement: "unece:CustomsDutyRegimeTypeCodeList#2",

	/**
	 * No preference origin: 3.
	 */
	NoPreferenceOrigin: "unece:CustomsDutyRegimeTypeCodeList#3",

	/**
	 * Excluded origin: 8.
	 */
	ExcludedOrigin: "unece:CustomsDutyRegimeTypeCodeList#8",

	/**
	 * Imposed origin: 9.
	 */
	ImposedOrigin: "unece:CustomsDutyRegimeTypeCodeList#9"
} as const;

/**
 * A character string used to represent the type of customs duty regime.
 * @see https://vocabulary.uncefact.org/CustomsDutyRegimeTypeCodeList
 */
export type CustomsDutyRegimeTypeCodeList = (typeof CustomsDutyRegimeTypeCodeList)[keyof typeof CustomsDutyRegimeTypeCodeList];
