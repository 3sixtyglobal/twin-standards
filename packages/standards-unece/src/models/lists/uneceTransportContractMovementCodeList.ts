// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport contract movement type.
 * @see https://vocabulary.uncefact.org/TransportContractMovementCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTransportContractMovementCodeList = {
	/**
	 * Breakbulk: 1.
	 */
	Breakbulk: "unece:TransportContractMovementCodeList#1",

	/**
	 * Private parcel service: 10.
	 */
	PrivateParcelService: "unece:TransportContractMovementCodeList#10",

	/**
	 * House to house: 11.
	 */
	HouseToHouse: "unece:TransportContractMovementCodeList#11",

	/**
	 * House to terminal: 12.
	 */
	HouseToTerminal: "unece:TransportContractMovementCodeList#12",

	/**
	 * House to pier: 13.
	 */
	HouseToPier: "unece:TransportContractMovementCodeList#13",

	/**
	 * Air charter: 14.
	 */
	AirCharter: "unece:TransportContractMovementCodeList#14",

	/**
	 * Air express: 15.
	 */
	AirExpress: "unece:TransportContractMovementCodeList#15",

	/**
	 * Geographic grouped transport: 16.
	 */
	GeographicGroupedTransport: "unece:TransportContractMovementCodeList#16",

	/**
	 * Less than truck load: 17.
	 */
	LessThanTruckLoad: "unece:TransportContractMovementCodeList#17",

	/**
	 * Pooled piggyback: 18.
	 */
	PooledPiggyback: "unece:TransportContractMovementCodeList#18",

	/**
	 * Consignee transportation provided: 19.
	 */
	ConsigneeTransportationProvided: "unece:TransportContractMovementCodeList#19",

	/**
	 * LCL/LCL: 2.
	 */
	LCLLCL: "unece:TransportContractMovementCodeList#2",

	/**
	 * Rail: 20.
	 */
	Rail: "unece:TransportContractMovementCodeList#20",

	/**
	 * Terminal to house: 21.
	 */
	TerminalToHouse: "unece:TransportContractMovementCodeList#21",

	/**
	 * Terminal to terminal: 22.
	 */
	TerminalToTerminal: "unece:TransportContractMovementCodeList#22",

	/**
	 * Terminal to pier: 23.
	 */
	TerminalToPier: "unece:TransportContractMovementCodeList#23",

	/**
	 * FCL/FCL: 3.
	 */
	FCLFCL: "unece:TransportContractMovementCodeList#3",

	/**
	 * Pier to house: 31.
	 */
	PierToHouse: "unece:TransportContractMovementCodeList#31",

	/**
	 * Pier to terminal: 32.
	 */
	PierToTerminal: "unece:TransportContractMovementCodeList#32",

	/**
	 * Pier to pier: 33.
	 */
	PierToPier: "unece:TransportContractMovementCodeList#33",

	/**
	 * FCL/LCL: 4.
	 */
	FCLLCL: "unece:TransportContractMovementCodeList#4",

	/**
	 * Station to station: 41.
	 */
	StationToStation: "unece:TransportContractMovementCodeList#41",

	/**
	 * House to warehouse: 42.
	 */
	HouseToWarehouse: "unece:TransportContractMovementCodeList#42",

	/**
	 * Warehouse to house: 43.
	 */
	WarehouseToHouse: "unece:TransportContractMovementCodeList#43",

	/**
	 * Station to house: 44.
	 */
	StationToHouse: "unece:TransportContractMovementCodeList#44",

	/**
	 * Geographic grouped transport, multiple origins, multiple destinations: 45.
	 */
	GeographicGroupedTransportMultipleOriginsMultipleDestinations: "unece:TransportContractMovementCodeList#45",

	/**
	 * Geographic grouped transport, multiple origins, single destination: 46.
	 */
	GeographicGroupedTransportMultipleOriginsSingleDestination: "unece:TransportContractMovementCodeList#46",

	/**
	 * Geographic receiving: 47.
	 */
	GeographicReceiving: "unece:TransportContractMovementCodeList#47",

	/**
	 * LCL/FCL: 5.
	 */
	LCLFCL: "unece:TransportContractMovementCodeList#5",

	/**
	 * Consolidation: 6.
	 */
	Consolidation: "unece:TransportContractMovementCodeList#6",

	/**
	 * Parcel post: 7.
	 */
	ParcelPost: "unece:TransportContractMovementCodeList#7",

	/**
	 * Expedited truck: 8.
	 */
	ExpeditedTruck: "unece:TransportContractMovementCodeList#8",

	/**
	 * Consignor determined means: 9.
	 */
	ConsignorDeterminedMeans: "unece:TransportContractMovementCodeList#9"
} as const;

/**
 * A character string used to represent the transport contract movement type.
 * @see https://vocabulary.uncefact.org/TransportContractMovementCodeList
 */
export type UneceTransportContractMovementCodeList = (typeof UneceTransportContractMovementCodeList)[keyof typeof UneceTransportContractMovementCodeList];
