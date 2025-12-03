// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a transport service condition.
 * @see https://vocabulary.uncefact.org/TransportServiceConditionCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportServiceConditionCodeList = {
	/**
	 * AVC conditions: 1.
	 */
	AVCConditions: "unece:TransportServiceConditionCodeList#1",

	/**
	 * Port to port: 10.
	 */
	PortToPort: "unece:TransportServiceConditionCodeList#10",

	/**
	 * CMR carnet: 11.
	 */
	CMRCarnet: "unece:TransportServiceConditionCodeList#11",

	/**
	 * Special tariff, parcels transport: 12.
	 */
	SpecialTariffParcelsTransport: "unece:TransportServiceConditionCodeList#12",

	/**
	 * Special tariff, full transport: 13.
	 */
	SpecialTariffFullTransport: "unece:TransportServiceConditionCodeList#13",

	/**
	 * Through transport: 14.
	 */
	ThroughTransport: "unece:TransportServiceConditionCodeList#14",

	/**
	 * Cancel space allocation: 15.
	 */
	CancelSpaceAllocation: "unece:TransportServiceConditionCodeList#15",

	/**
	 * Report sale of space: 16.
	 */
	ReportSaleOfSpace: "unece:TransportServiceConditionCodeList#16",

	/**
	 * Alternative space allocation: 17.
	 */
	AlternativeSpaceAllocation: "unece:TransportServiceConditionCodeList#17",

	/**
	 * No alternative space allocation: 18.
	 */
	NoAlternativeSpaceAllocation: "unece:TransportServiceConditionCodeList#18",

	/**
	 * Allotment sale: 19.
	 */
	AllotmentSale: "unece:TransportServiceConditionCodeList#19",

	/**
	 * Special agreement for parcels transport: 2.
	 */
	SpecialAgreementForParcelsTransport: "unece:TransportServiceConditionCodeList#2",

	/**
	 * Confirmation of space: 20.
	 */
	ConfirmationOfSpace: "unece:TransportServiceConditionCodeList#20",

	/**
	 * Unable to confirm: 21.
	 */
	UnableToConfirm: "unece:TransportServiceConditionCodeList#21",

	/**
	 * Non-operative flight: 22.
	 */
	NonOperativeFlight: "unece:TransportServiceConditionCodeList#22",

	/**
	 * Wait list: 23.
	 */
	WaitList: "unece:TransportServiceConditionCodeList#23",

	/**
	 * Prior space allocation request: 24.
	 */
	PriorSpaceAllocationRequest: "unece:TransportServiceConditionCodeList#24",

	/**
	 * Holding confirmed space allocation: 25.
	 */
	HoldingConfirmedSpaceAllocation: "unece:TransportServiceConditionCodeList#25",

	/**
	 * Holding wait list: 26.
	 */
	HoldingWaitList: "unece:TransportServiceConditionCodeList#26",

	/**
	 * Door-to-door: 27.
	 */
	DoorToDoor: "unece:TransportServiceConditionCodeList#27",

	/**
	 * Door-to-pier: 28.
	 */
	DoorToPier: "unece:TransportServiceConditionCodeList#28",

	/**
	 * Pier-to-door: 29.
	 */
	PierToDoor: "unece:TransportServiceConditionCodeList#29",

	/**
	 * Special agreement for full loading transport: 3.
	 */
	SpecialAgreementForFullLoadingTransport: "unece:TransportServiceConditionCodeList#3",

	/**
	 * Pier-to-pier: 30.
	 */
	PierToPier: "unece:TransportServiceConditionCodeList#30",

	/**
	 * Space cancellation noted: 31.
	 */
	SpaceCancellationNoted: "unece:TransportServiceConditionCodeList#31",

	/**
	 * Mini landbridge service: 32.
	 */
	MiniLandbridgeService: "unece:TransportServiceConditionCodeList#32",

	/**
	 * Speed level - required: 34.
	 */
	SpeedLevelRequired: "unece:TransportServiceConditionCodeList#34",

	/**
	 * Speed level - adopted: 35.
	 */
	SpeedLevelAdopted: "unece:TransportServiceConditionCodeList#35",

	/**
	 * Normal tariff, less than full load transport: 36.
	 */
	NormalTariffLessThanFullLoadTransport: "unece:TransportServiceConditionCodeList#36",

	/**
	 * Re-expedition special tariff: 37.
	 */
	ReExpeditionSpecialTariff: "unece:TransportServiceConditionCodeList#37",

	/**
	 * Transport arrangement by the requester: 38.
	 */
	TransportArrangementByTheRequester: "unece:TransportServiceConditionCodeList#38",

	/**
	 * Transport arrangement by the provider: 39.
	 */
	TransportArrangementByTheProvider: "unece:TransportServiceConditionCodeList#39",

	/**
	 * Combined transport: 4.
	 */
	CombinedTransport: "unece:TransportServiceConditionCodeList#4",

	/**
	 * Transport arrangement by the patient: 40.
	 */
	TransportArrangementByThePatient: "unece:TransportServiceConditionCodeList#40",

	/**
	 * FIATA combined transport bill of lading: 5.
	 */
	FIATACombinedTransportBillOfLading: "unece:TransportServiceConditionCodeList#5",

	/**
	 * Freight forwarders national conditions: 6.
	 */
	FreightForwardersNationalConditions: "unece:TransportServiceConditionCodeList#6",

	/**
	 * Normal tariff, parcels transport: 7.
	 */
	NormalTariffParcelsTransport: "unece:TransportServiceConditionCodeList#7",

	/**
	 * Normal tariff, full loading transport: 8.
	 */
	NormalTariffFullLoadingTransport: "unece:TransportServiceConditionCodeList#8",

	/**
	 * Ordinary: 9.
	 */
	Ordinary: "unece:TransportServiceConditionCodeList#9"
} as const;

/**
 * A character string used to represent a transport service condition.
 * @see https://vocabulary.uncefact.org/TransportServiceConditionCodeList
 */
export type TransportServiceConditionCodeList = (typeof TransportServiceConditionCodeList)[keyof typeof TransportServiceConditionCodeList];
