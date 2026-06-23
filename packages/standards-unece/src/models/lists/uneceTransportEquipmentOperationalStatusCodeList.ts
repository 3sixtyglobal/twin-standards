// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport equipment operational status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentOperationalStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportEquipmentOperationalStatusCodeList = {
	/**
	 * Positioning: 10.
	 */
	Positioning: "unece:TransportEquipmentOperationalStatusCodeList#10",

	/**
	 * Delivery: 11.
	 */
	Delivery: "unece:TransportEquipmentOperationalStatusCodeList#11",

	/**
	 * Redelivery: 12.
	 */
	Redelivery: "unece:TransportEquipmentOperationalStatusCodeList#12",

	/**
	 * Repair: 13.
	 */
	Repair: "unece:TransportEquipmentOperationalStatusCodeList#13",

	/**
	 * Reloader: 14.
	 */
	Reloader: "unece:TransportEquipmentOperationalStatusCodeList#14",

	/**
	 * Returned: 15.
	 */
	Returned: "unece:TransportEquipmentOperationalStatusCodeList#15",

	/**
	 * Dropped off: 16.
	 */
	DroppedOff: "unece:TransportEquipmentOperationalStatusCodeList#16",

	/**
	 * Cross terminal transshipment: 17.
	 */
	CrossTerminalTransshipment: "unece:TransportEquipmentOperationalStatusCodeList#17",

	/**
	 * Booking confirmed: 18.
	 */
	BookingConfirmed: "unece:TransportEquipmentOperationalStatusCodeList#18",

	/**
	 * Inspected at terminal gate: 19.
	 */
	InspectedAtTerminalGate: "unece:TransportEquipmentOperationalStatusCodeList#19",

	/**
	 * Arrived at offloading location: 20.
	 */
	ArrivedAtOffloadingLocation: "unece:TransportEquipmentOperationalStatusCodeList#20",

	/**
	 * Departed from loading location.: 21.
	 */
	DepartedFromLoadingLocation: "unece:TransportEquipmentOperationalStatusCodeList#21",

	/**
	 * Loaded: 22.
	 */
	Loaded: "unece:TransportEquipmentOperationalStatusCodeList#22",

	/**
	 * Unloaded: 23.
	 */
	Unloaded: "unece:TransportEquipmentOperationalStatusCodeList#23",

	/**
	 * Intra-terminal movement: 24.
	 */
	IntraTerminalMovement: "unece:TransportEquipmentOperationalStatusCodeList#24",

	/**
	 * Stuffing ordered: 25.
	 */
	StuffingOrdered: "unece:TransportEquipmentOperationalStatusCodeList#25",

	/**
	 * Stripping ordered: 26.
	 */
	StrippingOrdered: "unece:TransportEquipmentOperationalStatusCodeList#26",

	/**
	 * Stuffing confirmed: 27.
	 */
	StuffingConfirmed: "unece:TransportEquipmentOperationalStatusCodeList#27",

	/**
	 * Stripping confirmed: 28.
	 */
	StrippingConfirmed: "unece:TransportEquipmentOperationalStatusCodeList#28",

	/**
	 * Sent for heavy repair: 29.
	 */
	SentForHeavyRepair: "unece:TransportEquipmentOperationalStatusCodeList#29",

	/**
	 * Replaced: 30.
	 */
	Replaced: "unece:TransportEquipmentOperationalStatusCodeList#30",

	/**
	 * Remain on board: 4.
	 */
	RemainOnBoard: "unece:TransportEquipmentOperationalStatusCodeList#4",

	/**
	 * Shifter: 5.
	 */
	Shifter: "unece:TransportEquipmentOperationalStatusCodeList#5"
} as const;

/**
 * A character string used to represent the transport equipment operational status.
 * @see https://vocabulary.uncefact.org/TransportEquipmentOperationalStatusCodeList
 */
export type UneceTransportEquipmentOperationalStatusCodeList = (typeof UneceTransportEquipmentOperationalStatusCodeList)[keyof typeof UneceTransportEquipmentOperationalStatusCodeList];
