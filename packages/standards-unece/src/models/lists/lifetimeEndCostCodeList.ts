// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the type of a lifetime end cost.
 * @see https://vocabulary.uncefact.org/LifetimeEndCostCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LifetimeEndCostCodeList = {
	/**
	 * Cost of restoration of site: 1.
	 */
	CostOfRestorationOfSite: "unece:LifetimeEndCostCodeList#1",

	/**
	 * Cost of the reduction of the sound broadcasts: 10.
	 */
	CostOfTheReductionOfTheSoundBroadcasts: "unece:LifetimeEndCostCodeList#10",

	/**
	 * Cost of the protection of the biodiversity and the landscape: 11.
	 */
	CostOfTheProtectionOfTheBiodiversityAndTheLandscape: "unece:LifetimeEndCostCodeList#11",

	/**
	 * Cost of dismantling of site: 2.
	 */
	CostOfDismantlingOfSite: "unece:LifetimeEndCostCodeList#2",

	/**
	 * Cost of discontinuation of fixed asset: 3.
	 */
	CostOfDiscontinuationOfFixedAsset: "unece:LifetimeEndCostCodeList#3",

	/**
	 * Cost of stake in the rubbish of fixed asset: 4.
	 */
	CostOfStakeInTheRubbishOfFixedAsset: "unece:LifetimeEndCostCodeList#4",

	/**
	 * Cost of compensation in third parties: 5.
	 */
	CostOfCompensationInThirdParties: "unece:LifetimeEndCostCodeList#5",

	/**
	 * Previsional cost of the damage caused to the environment: 6.
	 */
	PrevisionalCostOfTheDamageCausedToTheEnvironment: "unece:LifetimeEndCostCodeList#6",

	/**
	 * Cost of elimination of the waste and the efforts undertaken to limit its quantity: 7.
	 */
	CostOfEliminationOfTheWasteAndTheEffortsUndertakenToLimitItsQuantity: "unece:LifetimeEndCostCodeList#7",

	/**
	 * Cost of wrestling against the soil pollution, waters of surface and some subterranean waters: 8.
	 */
	CostOfWrestlingAgainstTheSoilPollutionWatersOfSurfaceAndSomeSubterraneanWaters: "unece:LifetimeEndCostCodeList#8",

	/**
	 * Cost of conservation of the air quality and the climate: 9.
	 */
	CostOfConservationOfTheAirQualityAndTheClimate: "unece:LifetimeEndCostCodeList#9"
} as const;

/**
 * A character string used to represent the type of a lifetime end cost.
 * @see https://vocabulary.uncefact.org/LifetimeEndCostCodeList
 */
export type LifetimeEndCostCodeList = (typeof LifetimeEndCostCodeList)[keyof typeof LifetimeEndCostCodeList];
