// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a type of invoice document.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/InvoiceDocumentCodeList
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const InvoiceDocumentCodeList = {
	/**
	 * Self billed credit note: 261.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	SelfBilledCreditNote: "unece:InvoiceDocumentCodeList#261",

	/**
	 * Consolidated credit note - goods and services: 262.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	ConsolidatedCreditNoteGoodsAndServices: "unece:InvoiceDocumentCodeList#262",

	/**
	 * Proforma invoice: 325.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	ProformaInvoice: "unece:InvoiceDocumentCodeList#325",

	/**
	 * Commercial invoice: 380.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	CommercialInvoice: "unece:InvoiceDocumentCodeList#380",

	/**
	 * Credit note: 381.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	CreditNote: "unece:InvoiceDocumentCodeList#381",

	/**
	 * Debit note: 383.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DebitNote: "unece:InvoiceDocumentCodeList#383",

	/**
	 * Corrected invoice: 384.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	CorrectedInvoice: "unece:InvoiceDocumentCodeList#384",

	/**
	 * Consolidated invoice: 385.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	ConsolidatedInvoice: "unece:InvoiceDocumentCodeList#385",

	/**
	 * Prepayment invoice: 386.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	PrepaymentInvoice: "unece:InvoiceDocumentCodeList#386",

	/**
	 * Self-billed invoice: 389.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	SelfBilledInvoice: "unece:InvoiceDocumentCodeList#389",

	/**
	 * Consignment invoice: 395.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	ConsignmentInvoice: "unece:InvoiceDocumentCodeList#395",

	/**
	 * Factored credit note: 396.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	FactoredCreditNote: "unece:InvoiceDocumentCodeList#396",

	/**
	 * Debit note related to goods or services: 80.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DebitNoteRelatedToGoodsOrServices: "unece:InvoiceDocumentCodeList#80",

	/**
	 * Credit note related to goods or services: 81.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	CreditNoteRelatedToGoodsOrServices: "unece:InvoiceDocumentCodeList#81",

	/**
	 * Metered services invoice: 82.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	MeteredServicesInvoice: "unece:InvoiceDocumentCodeList#82",

	/**
	 * Credit note related to financial adjustments: 83.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	CreditNoteRelatedToFinancialAdjustments: "unece:InvoiceDocumentCodeList#83",

	/**
	 * Debit note related to financial adjustments: 84.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DebitNoteRelatedToFinancialAdjustments: "unece:InvoiceDocumentCodeList#84"
} as const;

/**
 * A character string used to represent a type of invoice document.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/InvoiceDocumentCodeList
 * @deprecated
 */
export type InvoiceDocumentCodeList = (typeof InvoiceDocumentCodeList)[keyof typeof InvoiceDocumentCodeList];
