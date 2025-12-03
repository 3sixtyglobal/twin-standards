// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a commitment level.
 * @see https://vocabulary.uncefact.org/CommitmentLevelCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CommitmentLevelCodeList = {
	/**
	 * Firm: 1.
	 */
	Firm: "unece:CommitmentLevelCodeList#1",

	/**
	 * Immediate: 10.
	 */
	Immediate: "unece:CommitmentLevelCodeList#10",

	/**
	 * Pilot/Pre-volume: 11.
	 */
	PilotPreVolume: "unece:CommitmentLevelCodeList#11",

	/**
	 * Planning: 12.
	 */
	Planning: "unece:CommitmentLevelCodeList#12",

	/**
	 * Potential order increase: 13.
	 */
	PotentialOrderIncrease: "unece:CommitmentLevelCodeList#13",

	/**
	 * Average plant usage: 14.
	 */
	AveragePlantUsage: "unece:CommitmentLevelCodeList#14",

	/**
	 * First time reported firm: 15.
	 */
	FirstTimeReportedFirm: "unece:CommitmentLevelCodeList#15",

	/**
	 * Maximum: 16.
	 */
	Maximum: "unece:CommitmentLevelCodeList#16",

	/**
	 * Tooling capacity: 17.
	 */
	ToolingCapacity: "unece:CommitmentLevelCodeList#17",

	/**
	 * Normal tooling capacity: 18.
	 */
	NormalToolingCapacity: "unece:CommitmentLevelCodeList#18",

	/**
	 * Prototype: 19.
	 */
	Prototype: "unece:CommitmentLevelCodeList#19",

	/**
	 * Commitment for manufacturing and material: 2.
	 */
	CommitmentForManufacturingAndMaterial: "unece:CommitmentLevelCodeList#2",

	/**
	 * Strike protection: 20.
	 */
	StrikeProtection: "unece:CommitmentLevelCodeList#20",

	/**
	 * Required tooling capacity: 21.
	 */
	RequiredToolingCapacity: "unece:CommitmentLevelCodeList#21",

	/**
	 * Deliver to schedule: 22.
	 */
	DeliverToSchedule: "unece:CommitmentLevelCodeList#22",

	/**
	 * Await manual pull: 23.
	 */
	AwaitManualPull: "unece:CommitmentLevelCodeList#23",

	/**
	 * Reference to commercial agreement between partners: 24.
	 */
	ReferenceToCommercialAgreementBetweenPartners: "unece:CommitmentLevelCodeList#24",

	/**
	 * Proposed: 26.
	 */
	Proposed: "unece:CommitmentLevelCodeList#26",

	/**
	 * Commitment for material: 3.
	 */
	CommitmentForMaterial: "unece:CommitmentLevelCodeList#3",

	/**
	 * Planning/forecast: 4.
	 */
	PlanningForecast: "unece:CommitmentLevelCodeList#4",

	/**
	 * Short delivered on previous delivery: 5.
	 */
	ShortDeliveredOnPreviousDelivery: "unece:CommitmentLevelCodeList#5",

	/**
	 * Capacity available: 6.
	 */
	CapacityAvailable: "unece:CommitmentLevelCodeList#6",

	/**
	 * Promotion: 7.
	 */
	Promotion: "unece:CommitmentLevelCodeList#7",

	/**
	 * Special demand: 8.
	 */
	SpecialDemand: "unece:CommitmentLevelCodeList#8",

	/**
	 * User defined: 9.
	 */
	UserDefined: "unece:CommitmentLevelCodeList#9"
} as const;

/**
 * A character string used to represent a commitment level.
 * @see https://vocabulary.uncefact.org/CommitmentLevelCodeList
 */
export type CommitmentLevelCodeList = (typeof CommitmentLevelCodeList)[keyof typeof CommitmentLevelCodeList];
