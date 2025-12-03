// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an organization function.
 * @see https://vocabulary.uncefact.org/OrganizationFunctionTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OrganizationFunctionTypeCodeList = {
	/**
	 * Management Chartered Centre: 5.
	 */
	ManagementCharteredCentre: "unece:OrganizationFunctionTypeCodeList#5",

	/**
	 * Management Chartered Association: 6.
	 */
	ManagementCharteredAssociation: "unece:OrganizationFunctionTypeCodeList#6",

	/**
	 * Audit Firm: AUD.
	 */
	AuditFirm: "unece:OrganizationFunctionTypeCodeList#AUD",

	/**
	 * Centre of Rural Economy Firm: CER.
	 */
	CentreOfRuralEconomyFirm: "unece:OrganizationFunctionTypeCodeList#CER",

	/**
	 * Chartered Accountant Firm: EXC.
	 */
	CharteredAccountantFirm: "unece:OrganizationFunctionTypeCodeList#EXC",

	/**
	 * Legal Audit Firm: LAU.
	 */
	LegalAuditFirm: "unece:OrganizationFunctionTypeCodeList#LAU"
} as const;

/**
 * A character string used to represent the type of an organization function.
 * @see https://vocabulary.uncefact.org/OrganizationFunctionTypeCodeList
 */
export type OrganizationFunctionTypeCodeList = (typeof OrganizationFunctionTypeCodeList)[keyof typeof OrganizationFunctionTypeCodeList];
