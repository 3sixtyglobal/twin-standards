// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a type of acknowledgment.
 * @see https://vocabulary.uncefact.org/AcknowledgementCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAcknowledgementCodeList = {
	/**
	 * Reissue: 18.
	 */
	Reissue: "unece:AcknowledgementCodeList#18",

	/**
	 * Copy: 31.
	 */
	Copy: "unece:AcknowledgementCodeList#31",

	/**
	 * Retransmission: 35.
	 */
	Retransmission: "unece:AcknowledgementCodeList#35",

	/**
	 * Additional transmission: 43.
	 */
	AdditionalTransmission: "unece:AcknowledgementCodeList#43",

	/**
	 * Replace: 5.
	 */
	Replace: "unece:AcknowledgementCodeList#5",

	/**
	 * Confirmation: 6.
	 */
	Confirmation: "unece:AcknowledgementCodeList#6",

	/**
	 * Duplicate: 7.
	 */
	Duplicate: "unece:AcknowledgementCodeList#7",

	/**
	 * Original: 9.
	 */
	Original: "unece:AcknowledgementCodeList#9"
} as const;

/**
 * A character string used to represent a type of acknowledgment.
 * @see https://vocabulary.uncefact.org/AcknowledgementCodeList
 */
export type UneceAcknowledgementCodeList = (typeof UneceAcknowledgementCodeList)[keyof typeof UneceAcknowledgementCodeList];
