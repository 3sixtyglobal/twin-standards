// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport means direction.
 * @see https://vocabulary.uncefact.org/TransportMeansDirectionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportMeansDirectionCodeList = {
	/**
	 * Buyer to seller: BS.
	 */
	BuyerToSeller: "unece:TransportMeansDirectionCodeList#BS",

	/**
	 * Seller to buyer: SB.
	 */
	SellerToBuyer: "unece:TransportMeansDirectionCodeList#SB",

	/**
	 * Subcontractor to seller: SC.
	 */
	SubcontractorToSeller: "unece:TransportMeansDirectionCodeList#SC",

	/**
	 * Seller to drop ship designated location: SD.
	 */
	SellerToDropShipDesignatedLocation: "unece:TransportMeansDirectionCodeList#SD",

	/**
	 * Seller to freight forwarder: SF.
	 */
	SellerToFreightForwarder: "unece:TransportMeansDirectionCodeList#SF",

	/**
	 * Seller to subcontractor: SS.
	 */
	SellerToSubcontractor: "unece:TransportMeansDirectionCodeList#SS",

	/**
	 * Mother vessel to lighter: ST.
	 */
	MotherVesselToLighter: "unece:TransportMeansDirectionCodeList#ST",

	/**
	 * Lighter to mother vessel: SU.
	 */
	LighterToMotherVessel: "unece:TransportMeansDirectionCodeList#SU",

	/**
	 * Mutually defined: ZZZ.
	 */
	MutuallyDefined: "unece:TransportMeansDirectionCodeList#ZZZ"
} as const;

/**
 * A character string used to represent the transport means direction.
 * @see https://vocabulary.uncefact.org/TransportMeansDirectionCodeList
 */
export type TransportMeansDirectionCodeList = (typeof TransportMeansDirectionCodeList)[keyof typeof TransportMeansDirectionCodeList];
