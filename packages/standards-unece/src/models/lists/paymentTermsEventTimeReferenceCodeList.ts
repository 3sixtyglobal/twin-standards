// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a time reference for a payment terms event.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/PaymentTermsEventTimeReferenceCodeList
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaymentTermsEventTimeReferenceCodeList = {
	/**
	 * Date ex-works: 24.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DateExWorks: "unece:PaymentTermsEventTimeReferenceCodeList#24",

	/**
	 * Date of delivery of goods to establishments/domicile/site: 29.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DateOfDeliveryOfGoodsToEstablishmentsDomicileSite: "unece:PaymentTermsEventTimeReferenceCodeList#29",

	/**
	 * Date of bill of lading, consignment note or other transport document: 45.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DateOfBillOfLadingConsignmentNoteOrOtherTransportDocument: "unece:PaymentTermsEventTimeReferenceCodeList#45",

	/**
	 * Date of invoice: 5.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DateOfInvoice: "unece:PaymentTermsEventTimeReferenceCodeList#5",

	/**
	 * Date of presentation of documents: 71.
	 * Deprecated since version D23B.
	 * @deprecated
	 */
	DateOfPresentationOfDocuments: "unece:PaymentTermsEventTimeReferenceCodeList#71"
} as const;

/**
 * A character string used to represent a time reference for a payment terms event.
 * Deprecated since version D23B.
 * @see https://vocabulary.uncefact.org/PaymentTermsEventTimeReferenceCodeList
 * @deprecated
 */
export type PaymentTermsEventTimeReferenceCodeList = (typeof PaymentTermsEventTimeReferenceCodeList)[keyof typeof PaymentTermsEventTimeReferenceCodeList];
