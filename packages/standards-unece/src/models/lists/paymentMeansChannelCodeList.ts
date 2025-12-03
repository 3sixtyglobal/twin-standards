// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the payment means channel.
 * @see https://vocabulary.uncefact.org/PaymentMeansChannelCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaymentMeansChannelCodeList = {
	/**
	 * Ordinary post: 1.
	 */
	OrdinaryPost: "unece:PaymentMeansChannelCodeList#1",

	/**
	 * Registered air mail: 10.
	 */
	RegisteredAirMail: "unece:PaymentMeansChannelCodeList#10",

	/**
	 * Registered mail: 11.
	 */
	RegisteredMail: "unece:PaymentMeansChannelCodeList#11",

	/**
	 * Courier: 12.
	 */
	Courier: "unece:PaymentMeansChannelCodeList#12",

	/**
	 * Messenger: 13.
	 */
	Messenger: "unece:PaymentMeansChannelCodeList#13",

	/**
	 * National ACH: 14.
	 */
	NationalACH: "unece:PaymentMeansChannelCodeList#14",

	/**
	 * Other ACH: 15.
	 */
	OtherACH: "unece:PaymentMeansChannelCodeList#15",

	/**
	 * Air mail: 2.
	 */
	AirMail: "unece:PaymentMeansChannelCodeList#2",

	/**
	 * Telegraph: 3.
	 */
	Telegraph: "unece:PaymentMeansChannelCodeList#3",

	/**
	 * Telex: 4.
	 */
	Telex: "unece:PaymentMeansChannelCodeList#4",

	/**
	 * S.W.I.F.T.: 5.
	 */
	SWIFT: "unece:PaymentMeansChannelCodeList#5",

	/**
	 * Other transmission networks: 6.
	 */
	OtherTransmissionNetworks: "unece:PaymentMeansChannelCodeList#6",

	/**
	 * Networks not defined: 7.
	 */
	NetworksNotDefined: "unece:PaymentMeansChannelCodeList#7",

	/**
	 * Fedwire: 8.
	 */
	Fedwire: "unece:PaymentMeansChannelCodeList#8",

	/**
	 * Personal (face-to-face): 9.
	 */
	Personal: "unece:PaymentMeansChannelCodeList#9",

	/**
	 * Mutually defined: ZZZ.
	 */
	MutuallyDefined: "unece:PaymentMeansChannelCodeList#ZZZ"
} as const;

/**
 * A character string used to represent the payment means channel.
 * @see https://vocabulary.uncefact.org/PaymentMeansChannelCodeList
 */
export type PaymentMeansChannelCodeList = (typeof PaymentMeansChannelCodeList)[keyof typeof PaymentMeansChannelCodeList];
