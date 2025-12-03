// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the sealing party role.
 * @see https://vocabulary.uncefact.org/SealingPartyRoleCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SealingPartyRoleCodeList = {
	/**
	 * Consolidator: AA.
	 */
	Consolidator: "unece:SealingPartyRoleCodeList#AA",

	/**
	 * Unknown: AB.
	 */
	Unknown: "unece:SealingPartyRoleCodeList#AB",

	/**
	 * Quarantine agency: AC.
	 */
	QuarantineAgency: "unece:SealingPartyRoleCodeList#AC",

	/**
	 * Carrier: CA.
	 */
	Carrier: "unece:SealingPartyRoleCodeList#CA",

	/**
	 * Customs: CU.
	 */
	Customs: "unece:SealingPartyRoleCodeList#CU",

	/**
	 * Shipper: SH.
	 */
	Shipper: "unece:SealingPartyRoleCodeList#SH",

	/**
	 * Terminal operator: TO.
	 */
	TerminalOperator: "unece:SealingPartyRoleCodeList#TO"
} as const;

/**
 * A character string used to represent the sealing party role.
 * @see https://vocabulary.uncefact.org/SealingPartyRoleCodeList
 */
export type SealingPartyRoleCodeList = (typeof SealingPartyRoleCodeList)[keyof typeof SealingPartyRoleCodeList];
