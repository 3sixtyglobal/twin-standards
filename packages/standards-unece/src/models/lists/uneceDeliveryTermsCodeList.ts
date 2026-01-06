// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent delivery terms.
 * @see https://vocabulary.uncefact.org/DeliveryTermsCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceDeliveryTermsCodeList = {
	/**
	 * Delivery arranged by the supplier: 1.
	 */
	DeliveryArrangedByTheSupplier: "unece:DeliveryTermsCodeList#1",

	/**
	 * Delivery arranged by logistic service provider: 2.
	 */
	DeliveryArrangedByLogisticServiceProvider: "unece:DeliveryTermsCodeList#2",

	/**
	 * Cost and Freight (insert named port of destination): CFR.
	 */
	CostAndFreight: "unece:DeliveryTermsCodeList#CFR",

	/**
	 * Cost, Insurance and Freight (insert named port of destination): CIF.
	 */
	CostInsuranceAndFreight: "unece:DeliveryTermsCodeList#CIF",

	/**
	 * Carriage and Insurance Paid to (insert named place of destination): CIP.
	 */
	CarriageAndInsurancePaidTo: "unece:DeliveryTermsCodeList#CIP",

	/**
	 * Carriage Paid To (insert named place of destination): CPT.
	 */
	CarriagePaidTo: "unece:DeliveryTermsCodeList#CPT",

	/**
	 * Delivered At Place (insert named place of destination): DAP.
	 */
	DeliveredAtPlace: "unece:DeliveryTermsCodeList#DAP",

	/**
	 * Delivered Duty Paid (insert named place of destination): DDP.
	 */
	DeliveredDutyPaid: "unece:DeliveryTermsCodeList#DDP",

	/**
	 * Delivered At Place Unloaded (insert named place of destination): DPU.
	 */
	DeliveredAtPlaceUnloaded: "unece:DeliveryTermsCodeList#DPU",

	/**
	 * Ex Works (insert named place of delivery): EXW.
	 */
	ExWorks: "unece:DeliveryTermsCodeList#EXW",

	/**
	 * Free Alongside Ship (insert named port of shipment): FAS.
	 */
	FreeAlongsideShip: "unece:DeliveryTermsCodeList#FAS",

	/**
	 * Free Carrier (insert named place of delivery): FCA.
	 */
	FreeCarrier: "unece:DeliveryTermsCodeList#FCA",

	/**
	 * Free On Board (insert named port of shipment): FOB.
	 */
	FreeOnBoard: "unece:DeliveryTermsCodeList#FOB"
} as const;

/**
 * A character string used to represent delivery terms.
 * @see https://vocabulary.uncefact.org/DeliveryTermsCodeList
 */
export type UneceDeliveryTermsCodeList = (typeof UneceDeliveryTermsCodeList)[keyof typeof UneceDeliveryTermsCodeList];
