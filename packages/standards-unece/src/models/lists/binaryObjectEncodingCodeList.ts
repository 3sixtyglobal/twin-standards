// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A code specifying the encoding algorithm of the binary object.
 * @see https://vocabulary.uncefact.org/BinaryObjectEncodingCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BinaryObjectEncodingCodeList = {
	/**
	 * ASCII 7 bit: 1.
	 */
	ASCII7Bit: "unece:BinaryObjectEncodingCodeList#1",

	/**
	 * ASCII 8 bit: 2.
	 */
	ASCII8Bit: "unece:BinaryObjectEncodingCodeList#2",

	/**
	 * Code page 500 (EBCDIC Multinational No. 5): 3.
	 */
	CodePage500: "unece:BinaryObjectEncodingCodeList#3",

	/**
	 * Code page 850 (IBM PC Multinational): 4.
	 */
	CodePage850: "unece:BinaryObjectEncodingCodeList#4",

	/**
	 * UCS-2: 5.
	 */
	UCS2: "unece:BinaryObjectEncodingCodeList#5",

	/**
	 * UCS-4: 6.
	 */
	UCS4: "unece:BinaryObjectEncodingCodeList#6",

	/**
	 * UTF-8: 7.
	 */
	UTF8: "unece:BinaryObjectEncodingCodeList#7",

	/**
	 * UTF-16: 8.
	 */
	UTF16: "unece:BinaryObjectEncodingCodeList#8",

	/**
	 * Mutually agreed: ZZZ.
	 */
	MutuallyAgreed: "unece:BinaryObjectEncodingCodeList#ZZZ"
} as const;

/**
 * A code specifying the encoding algorithm of the binary object.
 * @see https://vocabulary.uncefact.org/BinaryObjectEncodingCodeList
 */
export type BinaryObjectEncodingCodeList = (typeof BinaryObjectEncodingCodeList)[keyof typeof BinaryObjectEncodingCodeList];
