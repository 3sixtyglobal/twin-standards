// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a scheduling document type.
 * @see https://vocabulary.uncefact.org/SchedulingDocumentCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SchedulingDocumentCodeList = {
	/**
	 * Delivery instructions: 240.
	 */
	DeliveryInstructions: "unece:SchedulingDocumentCodeList#240",

	/**
	 * Delivery schedule: 241.
	 */
	DeliverySchedule: "unece:SchedulingDocumentCodeList#241",

	/**
	 * Delivery just-in-time: 242.
	 */
	DeliveryJustInTime: "unece:SchedulingDocumentCodeList#242",

	/**
	 * Delivery release: 245.
	 */
	DeliveryRelease: "unece:SchedulingDocumentCodeList#245",

	/**
	 * Kanban schedule: 288.
	 */
	KanbanSchedule: "unece:SchedulingDocumentCodeList#288",

	/**
	 * Delivery schedule response: 291.
	 */
	DeliveryScheduleResponse: "unece:SchedulingDocumentCodeList#291"
} as const;

/**
 * A character string used to represent a scheduling document type.
 * @see https://vocabulary.uncefact.org/SchedulingDocumentCodeList
 */
export type SchedulingDocumentCodeList = (typeof SchedulingDocumentCodeList)[keyof typeof SchedulingDocumentCodeList];
