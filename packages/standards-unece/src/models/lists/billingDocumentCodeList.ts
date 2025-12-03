// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a type of billing document.
 * @see https://vocabulary.uncefact.org/BillingDocumentCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BillingDocumentCodeList = {
	/**
	 * Self billed credit note: 261.
	 */
	SelfBilledCreditNote: "unece:BillingDocumentCodeList#261",

	/**
	 * Consolidated credit note - goods and services: 262.
	 */
	ConsolidatedCreditNoteGoodsAndServices: "unece:BillingDocumentCodeList#262",

	/**
	 * Transport equipment movement report: 265.
	 */
	TransportEquipmentMovementReport: "unece:BillingDocumentCodeList#265",

	/**
	 * Credit note for price variation: 296.
	 */
	CreditNoteForPriceVariation: "unece:BillingDocumentCodeList#296",

	/**
	 * Transport emergency card: 324.
	 */
	TransportEmergencyCard: "unece:BillingDocumentCodeList#324",

	/**
	 * Partial invoice: 326.
	 */
	PartialInvoice: "unece:BillingDocumentCodeList#326",

	/**
	 * Commercial invoice: 380.
	 */
	CommercialInvoice: "unece:BillingDocumentCodeList#380",

	/**
	 * Credit note: 381.
	 */
	CreditNote: "unece:BillingDocumentCodeList#381",

	/**
	 * Debit note: 383.
	 */
	DebitNote: "unece:BillingDocumentCodeList#383",

	/**
	 * Consolidated invoice: 385.
	 */
	ConsolidatedInvoice: "unece:BillingDocumentCodeList#385",

	/**
	 * Prepayment invoice: 386.
	 */
	PrepaymentInvoice: "unece:BillingDocumentCodeList#386",

	/**
	 * Self-billed invoice: 389.
	 */
	SelfBilledInvoice: "unece:BillingDocumentCodeList#389"
} as const;

/**
 * A character string used to represent a type of billing document.
 * @see https://vocabulary.uncefact.org/BillingDocumentCodeList
 */
export type BillingDocumentCodeList = (typeof BillingDocumentCodeList)[keyof typeof BillingDocumentCodeList];
