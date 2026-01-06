// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to replace or represent a government action.
 * @see https://vocabulary.uncefact.org/GovernmentActionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceGovernmentActionCodeList = {
	/**
	 * Clearance: 1.
	 */
	Clearance: "unece:GovernmentActionCodeList#1",

	/**
	 * Export certificate not required: 10.
	 */
	ExportCertificateNotRequired: "unece:GovernmentActionCodeList#10",

	/**
	 * Detention: 2.
	 */
	Detention: "unece:GovernmentActionCodeList#2",

	/**
	 * Fumigation: 3.
	 */
	Fumigation: "unece:GovernmentActionCodeList#3",

	/**
	 * Inspection: 4.
	 */
	Inspection: "unece:GovernmentActionCodeList#4",

	/**
	 * Security: 5.
	 */
	Security: "unece:GovernmentActionCodeList#5",

	/**
	 * Means of transport admittance: 6.
	 */
	MeansOfTransportAdmittance: "unece:GovernmentActionCodeList#6",

	/**
	 * Cargo hold inspection: 7.
	 */
	CargoHoldInspection: "unece:GovernmentActionCodeList#7",

	/**
	 * Container inspection: 8.
	 */
	ContainerInspection: "unece:GovernmentActionCodeList#8",

	/**
	 * Cargo packaging inspection: 9.
	 */
	CargoPackagingInspection: "unece:GovernmentActionCodeList#9"
} as const;

/**
 * A character string used to replace or represent a government action.
 * @see https://vocabulary.uncefact.org/GovernmentActionCodeList
 */
export type UneceGovernmentActionCodeList = (typeof UneceGovernmentActionCodeList)[keyof typeof UneceGovernmentActionCodeList];
