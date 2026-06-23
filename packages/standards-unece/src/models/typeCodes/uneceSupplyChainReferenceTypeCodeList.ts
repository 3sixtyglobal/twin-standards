// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSupplyChainReference typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainReference
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSupplyChainReferenceTypeCodeList = {
	/**
	 * A reference associated with this supply chain event.
	 * @see https://vocabulary.uncefact.org/associatedReference
	 */
	AssociatedReference: "unece:associatedReference",

	/**
	 * A reference specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainReference
	 */
	SpecifiedSupplyChainReference: "unece:specifiedSupplyChainReference"
} as const;

/**
 * Values for UneceSupplyChainReference typeCode property.
 * @see https://vocabulary.uncefact.org/SupplyChainReference
 */
export type UneceSupplyChainReferenceTypeCodeList = (typeof UneceSupplyChainReferenceTypeCodeList)[keyof typeof UneceSupplyChainReferenceTypeCodeList];
