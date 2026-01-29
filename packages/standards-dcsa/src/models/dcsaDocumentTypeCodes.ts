// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * DCSA document type codes.
 *
 * Source: `documentTypeCode` enum in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaDocumentTypeCodes = {
	/**
	 * Carrier Booking Request.
	 */
	CBR: "CBR",
	/**
	 * Booking.
	 */
	BKG: "BKG",
	/**
	 * Shipping Instruction.
	 */
	SHI: "SHI",
	/**
	 * Transport Document.
	 */
	TRD: "TRD",
	/**
	 * Delivery Instructions.
	 */
	DEI: "DEI",
	/**
	 * Delivery Order.
	 */
	DEO: "DEO",
	/**
	 * Transport Order.
	 */
	TRO: "TRO",
	/**
	 * Container Release Order.
	 */
	CRO: "CRO",
	/**
	 * Arrival Notice.
	 */
	ARN: "ARN",
	/**
	 * Verified Gross Mass.
	 */
	VGM: "VGM",
	/**
	 * Cargo Survey.
	 */
	CAS: "CAS",
	/**
	 * Customs Clearance.
	 */
	CUC: "CUC",
	/**
	 * Dangerous Goods Declaration.
	 */
	DGD: "DGD",
	/**
	 * Out of Gauge.
	 */
	OOG: "OOG",
	/**
	 * Contract Quotation.
	 */
	CQU: "CQU",
	/**
	 * Invoice.
	 */
	INV: "INV",
	/**
	 * Health Certificate.
	 */
	HCE: "HCE",
	/**
	 * Phytosanitary Certificate.
	 */
	PCE: "PCE",
	/**
	 * Veterinary Certificate.
	 */
	VCE: "VCE",
	/**
	 * Fumigation Certificate.
	 */
	FCE: "FCE",
	/**
	 * Inspection Certificate.
	 */
	ICE: "ICE",
	/**
	 * Certificate of Analysis.
	 */
	CEA: "CEA",
	/**
	 * Certificate of Origin.
	 */
	CEO: "CEO"
} as const;

/**
 * DCSA document type codes.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type DcsaDocumentTypeCodes =
	(typeof DcsaDocumentTypeCodes)[keyof typeof DcsaDocumentTypeCodes];
