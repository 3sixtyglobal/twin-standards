// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a responsible government agency involvement.
 * @see https://vocabulary.uncefact.org/ResponsibleGovernmentAgencyInvolvementCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResponsibleGovernmentAgencyInvolvementCodeList = {
	/**
	 * Carried out as instructed: 1.
	 */
	CarriedOutAsInstructed: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#1",

	/**
	 * Carried out as amended: 2.
	 */
	CarriedOutAsAmended: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#2",

	/**
	 * Completed: 3.
	 */
	Completed: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#3",

	/**
	 * Not applicable: 4.
	 */
	NotApplicable: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#4",

	/**
	 * Optimal: 5.
	 */
	Optimal: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#5",

	/**
	 * Required: 6.
	 */
	Required: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#6",

	/**
	 * Applicable: 7.
	 */
	Applicable: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#7",

	/**
	 * Export certificate required: 8.
	 */
	ExportCertificateRequired: "unece:ResponsibleGovernmentAgencyInvolvementCodeList#8"
} as const;

/**
 * A character string used to represent a responsible government agency involvement.
 * @see https://vocabulary.uncefact.org/ResponsibleGovernmentAgencyInvolvementCodeList
 */
export type ResponsibleGovernmentAgencyInvolvementCodeList = (typeof ResponsibleGovernmentAgencyInvolvementCodeList)[keyof typeof ResponsibleGovernmentAgencyInvolvementCodeList];
