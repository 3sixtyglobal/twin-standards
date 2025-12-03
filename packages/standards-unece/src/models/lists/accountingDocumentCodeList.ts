// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of an accounting document.
 * @see https://vocabulary.uncefact.org/AccountingDocumentCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AccountingDocumentCodeList = {
	/**
	 * Purchase order: 105.
	 */
	PurchaseOrder: "unece:AccountingDocumentCodeList#105",

	/**
	 * Order: 220.
	 */
	Order: "unece:AccountingDocumentCodeList#220",

	/**
	 * Lease order: 223.
	 */
	LeaseOrder: "unece:AccountingDocumentCodeList#223",

	/**
	 * Rush order: 224.
	 */
	RushOrder: "unece:AccountingDocumentCodeList#224",

	/**
	 * Delivery release: 245.
	 */
	DeliveryRelease: "unece:AccountingDocumentCodeList#245",

	/**
	 * Contract: 315.
	 */
	Contract: "unece:AccountingDocumentCodeList#315",

	/**
	 * Acknowledgement of order: 320.
	 */
	AcknowledgementOfOrder: "unece:AccountingDocumentCodeList#320",

	/**
	 * Proforma invoice: 325.
	 */
	ProformaInvoice: "unece:AccountingDocumentCodeList#325",

	/**
	 * Partial invoice: 326.
	 */
	PartialInvoice: "unece:AccountingDocumentCodeList#326",

	/**
	 * Commercial invoice: 380.
	 */
	CommercialInvoice: "unece:AccountingDocumentCodeList#380",

	/**
	 * Self-billed invoice: 389.
	 */
	SelfBilledInvoice: "unece:AccountingDocumentCodeList#389",

	/**
	 * Factored invoice: 393.
	 */
	FactoredInvoice: "unece:AccountingDocumentCodeList#393",

	/**
	 * Lease invoice: 394.
	 */
	LeaseInvoice: "unece:AccountingDocumentCodeList#394",

	/**
	 * Consignment invoice: 395.
	 */
	ConsignmentInvoice: "unece:AccountingDocumentCodeList#395",

	/**
	 * Cross docking despatch advice: 398.
	 */
	CrossDockingDespatchAdvice: "unece:AccountingDocumentCodeList#398",

	/**
	 * Transshipment despatch advice: 399.
	 */
	TransshipmentDespatchAdvice: "unece:AccountingDocumentCodeList#399",

	/**
	 * Extended credit advice: 455.
	 */
	ExtendedCreditAdvice: "unece:AccountingDocumentCodeList#455",

	/**
	 * Remittance advice: 481.
	 */
	RemittanceAdvice: "unece:AccountingDocumentCodeList#481",

	/**
	 * Original accounting voucher: 533.
	 */
	OriginalAccountingVoucher: "unece:AccountingDocumentCodeList#533",

	/**
	 * Copy accounting voucher: 534.
	 */
	CopyAccountingVoucher: "unece:AccountingDocumentCodeList#534",

	/**
	 * Delivery order: 640.
	 */
	DeliveryOrder: "unece:AccountingDocumentCodeList#640",

	/**
	 * General message: 719.
	 */
	GeneralMessage: "unece:AccountingDocumentCodeList#719",

	/**
	 * Commercial account summary: 731.
	 */
	CommercialAccountSummary: "unece:AccountingDocumentCodeList#731",

	/**
	 * Payroll deductions advice: 747.
	 */
	PayrollDeductionsAdvice: "unece:AccountingDocumentCodeList#747"
} as const;

/**
 * A character string used to represent the type of an accounting document.
 * @see https://vocabulary.uncefact.org/AccountingDocumentCodeList
 */
export type AccountingDocumentCodeList = (typeof AccountingDocumentCodeList)[keyof typeof AccountingDocumentCodeList];
