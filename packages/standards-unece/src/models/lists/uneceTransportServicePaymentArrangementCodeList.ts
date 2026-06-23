// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a transport service payment arrangement.
 * @see https://vocabulary.uncefact.org/TransportServicePaymentArrangementCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportServicePaymentArrangementCodeList = {
	/**
	 * Payable elsewhere: A.
	 */
	PayableElsewhere: "unece:TransportServicePaymentArrangementCodeList#A",

	/**
	 * Third party to pay: B.
	 */
	ThirdPartyToPay: "unece:TransportServicePaymentArrangementCodeList#B",

	/**
	 * Collect: C.
	 */
	Collect: "unece:TransportServicePaymentArrangementCodeList#C",

	/**
	 * Prepaid: P.
	 */
	Prepaid: "unece:TransportServicePaymentArrangementCodeList#P"
} as const;

/**
 * A character string used to represent a transport service payment arrangement.
 * @see https://vocabulary.uncefact.org/TransportServicePaymentArrangementCodeList
 */
export type UneceTransportServicePaymentArrangementCodeList = (typeof UneceTransportServicePaymentArrangementCodeList)[keyof typeof UneceTransportServicePaymentArrangementCodeList];
