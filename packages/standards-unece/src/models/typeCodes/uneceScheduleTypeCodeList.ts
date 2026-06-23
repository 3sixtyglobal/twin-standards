// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSchedule typeCode property.
 * @see https://vocabulary.uncefact.org/Schedule
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceScheduleTypeCodeList = {
	/**
	 * A supply chain consumption schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/consumptionSchedule
	 */
	ConsumptionSchedule: "unece:consumptionSchedule",

	/**
	 * A supply chain delivery schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/deliverySchedule
	 */
	DeliverySchedule: "unece:deliverySchedule",

	/**
	 * A supply chain despatch schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/despatchSchedule
	 */
	DespatchSchedule: "unece:despatchSchedule",

	/**
	 * A supply chain order schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/orderSchedule
	 */
	OrderSchedule: "unece:orderSchedule",

	/**
	 * A supply chain receipt schedule, at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/receiptSchedule
	 */
	ReceiptSchedule: "unece:receiptSchedule",

	/**
	 * A supply chain schedule, at header level, specified for this trade delivery.
	 * A supply chain schedule, specified at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/specifiedSchedule
	 */
	SpecifiedSchedule: "unece:specifiedSchedule",

	/**
	 * A supply (replenishment) schedule, specified at line level, for this trade delivery.
	 * @see https://vocabulary.uncefact.org/supplySpecifiedSchedule
	 */
	SupplySpecifiedSchedule: "unece:supplySpecifiedSchedule"
} as const;

/**
 * Values for UneceSchedule typeCode property.
 * @see https://vocabulary.uncefact.org/Schedule
 */
export type UneceScheduleTypeCodeList = (typeof UneceScheduleTypeCodeList)[keyof typeof UneceScheduleTypeCodeList];
