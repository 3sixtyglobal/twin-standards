// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a function for delivery terms.
 * @see https://vocabulary.uncefact.org/DeliveryTermsFunctionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DeliveryTermsFunctionCodeList = {
	/**
	 * Price condition: 1.
	 */
	PriceCondition: "unece:DeliveryTermsFunctionCodeList#1",

	/**
	 * Despatch condition: 2.
	 */
	DespatchCondition: "unece:DeliveryTermsFunctionCodeList#2",

	/**
	 * Price and despatch condition: 3.
	 */
	PriceAndDespatchCondition: "unece:DeliveryTermsFunctionCodeList#3",

	/**
	 * Collected by customer: 4.
	 */
	CollectedByCustomer: "unece:DeliveryTermsFunctionCodeList#4",

	/**
	 * Transport condition: 5.
	 */
	TransportCondition: "unece:DeliveryTermsFunctionCodeList#5",

	/**
	 * Delivery condition: 6.
	 */
	DeliveryCondition: "unece:DeliveryTermsFunctionCodeList#6",

	/**
	 * Delivered by supplier: 7.
	 */
	DeliveredBySupplier: "unece:DeliveryTermsFunctionCodeList#7",

	/**
	 * Delivery arranged by logistic service provider: 8.
	 */
	DeliveryArrangedByLogisticServiceProvider: "unece:DeliveryTermsFunctionCodeList#8"
} as const;

/**
 * A character string used to represent a function for delivery terms.
 * @see https://vocabulary.uncefact.org/DeliveryTermsFunctionCodeList
 */
export type DeliveryTermsFunctionCodeList = (typeof DeliveryTermsFunctionCodeList)[keyof typeof DeliveryTermsFunctionCodeList];
