// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a quotation document type.
 * @see https://vocabulary.uncefact.org/QuotationDocumentCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceQuotationDocumentCodeList = {
	/**
	 * Offer / quotation: 310.
	 */
	OfferQuotation: "unece:QuotationDocumentCodeList#310",

	/**
	 * Request for quote: 311.
	 */
	RequestForQuote: "unece:QuotationDocumentCodeList#311",

	/**
	 * Acknowledgement message: 312.
	 */
	AcknowledgementMessage: "unece:QuotationDocumentCodeList#312",

	/**
	 * Request for price quote: 360.
	 */
	RequestForPriceQuote: "unece:QuotationDocumentCodeList#360",

	/**
	 * Price quote: 361.
	 */
	PriceQuote: "unece:QuotationDocumentCodeList#361",

	/**
	 * Delivery quote: 362.
	 */
	DeliveryQuote: "unece:QuotationDocumentCodeList#362",

	/**
	 * Price and delivery quote: 363.
	 */
	PriceAndDeliveryQuote: "unece:QuotationDocumentCodeList#363",

	/**
	 * Contract price quote: 364.
	 */
	ContractPriceQuote: "unece:QuotationDocumentCodeList#364",

	/**
	 * Contract price and delivery quote: 365.
	 */
	ContractPriceAndDeliveryQuote: "unece:QuotationDocumentCodeList#365",

	/**
	 * Price quote, specified end-customer: 366.
	 */
	PriceQuoteSpecifiedEndCustomer: "unece:QuotationDocumentCodeList#366",

	/**
	 * Price and delivery quote, specified end-customer: 367.
	 */
	PriceAndDeliveryQuoteSpecifiedEndCustomer: "unece:QuotationDocumentCodeList#367",

	/**
	 * Price quote, ship and debit: 368.
	 */
	PriceQuoteShipAndDebit: "unece:QuotationDocumentCodeList#368",

	/**
	 * Price and delivery quote, ship and debit: 369.
	 */
	PriceAndDeliveryQuoteShipAndDebit: "unece:QuotationDocumentCodeList#369",

	/**
	 * Request for delivery quote: 442.
	 */
	RequestForDeliveryQuote: "unece:QuotationDocumentCodeList#442",

	/**
	 * Request for price and delivery quote: 443.
	 */
	RequestForPriceAndDeliveryQuote: "unece:QuotationDocumentCodeList#443",

	/**
	 * Request for contract price quote: 444.
	 */
	RequestForContractPriceQuote: "unece:QuotationDocumentCodeList#444",

	/**
	 * Request for contract price and delivery quote: 445.
	 */
	RequestForContractPriceAndDeliveryQuote: "unece:QuotationDocumentCodeList#445",

	/**
	 * Request for price quote, specified end-customer: 446.
	 */
	RequestForPriceQuoteSpecifiedEndCustomer: "unece:QuotationDocumentCodeList#446"
} as const;

/**
 * A character string used to represent a quotation document type.
 * @see https://vocabulary.uncefact.org/QuotationDocumentCodeList
 */
export type UneceQuotationDocumentCodeList = (typeof UneceQuotationDocumentCodeList)[keyof typeof UneceQuotationDocumentCodeList];
