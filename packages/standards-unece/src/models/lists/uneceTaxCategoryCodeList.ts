// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a duty or tax category.
 * @see https://vocabulary.uncefact.org/TaxCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTaxCategoryCodeList = {
	/**
	 * Mixed tax rate: A.
	 */
	MixedTaxRate: "unece:TaxCategoryCodeList#A",

	/**
	 * Lower rate: AA.
	 */
	LowerRate: "unece:TaxCategoryCodeList#AA",

	/**
	 * Exempt for resale: AB.
	 */
	ExemptForResale: "unece:TaxCategoryCodeList#AB",

	/**
	 * Value Added Tax (VAT) not now due for payment: AC.
	 */
	ValueAddedTaxNotNowDueForPayment: "unece:TaxCategoryCodeList#AC",

	/**
	 * Value Added Tax (VAT) due from a previous invoice: AD.
	 */
	ValueAddedTaxDueFromAPreviousInvoice: "unece:TaxCategoryCodeList#AD",

	/**
	 * VAT Reverse Charge: AE.
	 */
	VATReverseCharge: "unece:TaxCategoryCodeList#AE",

	/**
	 * Transferred (VAT): B.
	 */
	Transferred: "unece:TaxCategoryCodeList#B",

	/**
	 * Duty paid by supplier: C.
	 */
	DutyPaidBySupplier: "unece:TaxCategoryCodeList#C",

	/**
	 * Value Added Tax (VAT) margin scheme - travel agents: D.
	 */
	ValueAddedTaxMarginSchemeTravelAgents: "unece:TaxCategoryCodeList#D",

	/**
	 * Exempt from tax: E.
	 */
	ExemptFromTax: "unece:TaxCategoryCodeList#E",

	/**
	 * Value Added Tax (VAT) margin scheme - second-hand goods: F.
	 */
	ValueAddedTaxMarginSchemeSecondHandGoods: "unece:TaxCategoryCodeList#F",

	/**
	 * Free export item, tax not charged: G.
	 */
	FreeExportItemTaxNotCharged: "unece:TaxCategoryCodeList#G",

	/**
	 * Higher rate: H.
	 */
	HigherRate: "unece:TaxCategoryCodeList#H",

	/**
	 * Value Added Tax (VAT) margin scheme - works of art Margin scheme — Works of art: I.
	 */
	ValueAddedTaxMarginSchemeWorksOfArtMarginSchemeWorksOfArt: "unece:TaxCategoryCodeList#I",

	/**
	 * Value Added Tax (VAT) margin scheme - collector’s items and antiques: J.
	 */
	ValueAddedTaxMarginSchemeCollectorsItemsAndAntiques: "unece:TaxCategoryCodeList#J",

	/**
	 * VAT exempt for EEA intra-community supply of goods and services: K.
	 */
	VATExemptForEEAIntraCommunitySupplyOfGoodsAndServices: "unece:TaxCategoryCodeList#K",

	/**
	 * Canary Islands general indirect tax: L.
	 */
	CanaryIslandsGeneralIndirectTax: "unece:TaxCategoryCodeList#L",

	/**
	 * Tax for production, services and importation in Ceuta and Melilla: M.
	 */
	TaxForProductionServicesAndImportationInCeutaAndMelilla: "unece:TaxCategoryCodeList#M",

	/**
	 * standard rate additional VAT: N.
	 */
	StandardRateAdditionalVAT: "unece:TaxCategoryCodeList#N",

	/**
	 * Services outside scope of tax: O.
	 */
	ServicesOutsideScopeOfTax: "unece:TaxCategoryCodeList#O",

	/**
	 * Standard rate: S.
	 */
	StandardRate: "unece:TaxCategoryCodeList#S",

	/**
	 * Zero rated goods: Z.
	 */
	ZeroRatedGoods: "unece:TaxCategoryCodeList#Z"
} as const;

/**
 * A character string used to represent a duty or tax category.
 * @see https://vocabulary.uncefact.org/TaxCategoryCodeList
 */
export type UneceTaxCategoryCodeList = (typeof UneceTaxCategoryCodeList)[keyof typeof UneceTaxCategoryCodeList];
