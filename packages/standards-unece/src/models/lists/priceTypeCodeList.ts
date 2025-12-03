// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent or replace a type of price.
 * @see https://vocabulary.uncefact.org/PriceTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PriceTypeCodeList = {
	/**
	 * Cancellation price: AA.
	 */
	CancellationPrice: "unece:PriceTypeCodeList#AA",

	/**
	 * Per ton: AB.
	 */
	PerTon: "unece:PriceTypeCodeList#AB",

	/**
	 * Minimum order price: AC.
	 */
	MinimumOrderPrice: "unece:PriceTypeCodeList#AC",

	/**
	 * Export price: AD.
	 */
	ExportPrice: "unece:PriceTypeCodeList#AD",

	/**
	 * Range dependent price: AE.
	 */
	RangeDependentPrice: "unece:PriceTypeCodeList#AE",

	/**
	 * Competitor price: AF.
	 */
	CompetitorPrice: "unece:PriceTypeCodeList#AF",

	/**
	 * Daily Price: AG.
	 */
	DailyPrice: "unece:PriceTypeCodeList#AG",

	/**
	 * Service Price: AH.
	 */
	ServicePrice: "unece:PriceTypeCodeList#AH",

	/**
	 * Active ingredient: AI.
	 */
	ActiveIngredient: "unece:PriceTypeCodeList#AI",

	/**
	 * Dynamic Price: AJ.
	 */
	DynamicPrice: "unece:PriceTypeCodeList#AJ",

	/**
	 * Basic Price: AK.
	 */
	BasicPrice: "unece:PriceTypeCodeList#AK",

	/**
	 * Extra Price: AL.
	 */
	ExtraPrice: "unece:PriceTypeCodeList#AL",

	/**
	 * Discount Price: AM.
	 */
	DiscountPrice: "unece:PriceTypeCodeList#AM",

	/**
	 * Cancellation Price: AN.
	 */
	CancellationPriceAN: "unece:PriceTypeCodeList#AN",

	/**
	 * Refund Price: AO.
	 */
	RefundPrice: "unece:PriceTypeCodeList#AO",

	/**
	 * Commission Price: AP.
	 */
	CommissionPrice: "unece:PriceTypeCodeList#AP",

	/**
	 * As is quantity: AQ.
	 */
	AsIsQuantity: "unece:PriceTypeCodeList#AQ",

	/**
	 * Penalty Price: AR.
	 */
	PenaltyPrice: "unece:PriceTypeCodeList#AR",

	/**
	 * Catalogue: CA.
	 */
	Catalogue: "unece:PriceTypeCodeList#CA",

	/**
	 * Contract: CT.
	 */
	Contract: "unece:PriceTypeCodeList#CT",

	/**
	 * Consumer unit: CU.
	 */
	ConsumerUnit: "unece:PriceTypeCodeList#CU",

	/**
	 * Distributor: DI.
	 */
	Distributor: "unece:PriceTypeCodeList#DI",

	/**
	 * ECSC price: EC.
	 */
	ECSCPrice: "unece:PriceTypeCodeList#EC",

	/**
	 * Net weight: NW.
	 */
	NetWeight: "unece:PriceTypeCodeList#NW",

	/**
	 * Price catalogue: PC.
	 */
	PriceCatalogue: "unece:PriceTypeCodeList#PC",

	/**
	 * Per each: PE.
	 */
	PerEach: "unece:PriceTypeCodeList#PE",

	/**
	 * Per kilogram: PK.
	 */
	PerKilogram: "unece:PriceTypeCodeList#PK",

	/**
	 * Per litre: PL.
	 */
	PerLitre: "unece:PriceTypeCodeList#PL",

	/**
	 * Per tonne: PT.
	 */
	PerTonne: "unece:PriceTypeCodeList#PT",

	/**
	 * Specified unit: PU.
	 */
	SpecifiedUnit: "unece:PriceTypeCodeList#PU",

	/**
	 * Provisional price: PV.
	 */
	ProvisionalPrice: "unece:PriceTypeCodeList#PV",

	/**
	 * Gross weight: PW.
	 */
	GrossWeight: "unece:PriceTypeCodeList#PW",

	/**
	 * Quoted: QT.
	 */
	Quoted: "unece:PriceTypeCodeList#QT",

	/**
	 * Suggested retail: SR.
	 */
	SuggestedRetail: "unece:PriceTypeCodeList#SR",

	/**
	 * To be negotiated: TB.
	 */
	ToBeNegotiated: "unece:PriceTypeCodeList#TB",

	/**
	 * Traded unit: TU.
	 */
	TradedUnit: "unece:PriceTypeCodeList#TU",

	/**
	 * Theoretical weight: TW.
	 */
	TheoreticalWeight: "unece:PriceTypeCodeList#TW",

	/**
	 * Wholesale: WH.
	 */
	Wholesale: "unece:PriceTypeCodeList#WH",

	/**
	 * Gross volume: WI.
	 */
	GrossVolume: "unece:PriceTypeCodeList#WI"
} as const;

/**
 * A character string used to represent or replace a type of price.
 * @see https://vocabulary.uncefact.org/PriceTypeCodeList
 */
export type PriceTypeCodeList = (typeof PriceTypeCodeList)[keyof typeof PriceTypeCodeList];
