// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a transport service priority.
 * @see https://vocabulary.uncefact.org/TransportServicePriorityCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportServicePriorityCodeList = {
	/**
	 * Express: 1.
	 */
	Express: "unece:TransportServicePriorityCodeList#1",

	/**
	 * High speed: 2.
	 */
	HighSpeed: "unece:TransportServicePriorityCodeList#2",

	/**
	 * Normal speed: 3.
	 */
	NormalSpeed: "unece:TransportServicePriorityCodeList#3",

	/**
	 * Post service: 4.
	 */
	PostService: "unece:TransportServicePriorityCodeList#4"
} as const;

/**
 * A character string used to represent a transport service priority.
 * @see https://vocabulary.uncefact.org/TransportServicePriorityCodeList
 */
export type UneceTransportServicePriorityCodeList = (typeof UneceTransportServicePriorityCodeList)[keyof typeof UneceTransportServicePriorityCodeList];
