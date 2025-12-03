// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a transport service category.
 * @see https://vocabulary.uncefact.org/TransportServiceCategoryCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportServiceCategoryCodeList = {
	/**
	 * All charges: 1.
	 */
	AllCharges: "unece:TransportServiceCategoryCodeList#1",

	/**
	 * Origin port charges: 10.
	 */
	OriginPortCharges: "unece:TransportServiceCategoryCodeList#10",

	/**
	 * Origin haulage charges: 11.
	 */
	OriginHaulageCharges: "unece:TransportServiceCategoryCodeList#11",

	/**
	 * Other charges: 12.
	 */
	OtherCharges: "unece:TransportServiceCategoryCodeList#12",

	/**
	 * Specific amount payable: 13.
	 */
	SpecificAmountPayable: "unece:TransportServiceCategoryCodeList#13",

	/**
	 * Transport costs (carriage charges): 14.
	 */
	TransportCosts: "unece:TransportServiceCategoryCodeList#14",

	/**
	 * All costs up to a specified location: 15.
	 */
	AllCostsUpToASpecifiedLocation: "unece:TransportServiceCategoryCodeList#15",

	/**
	 * Weight/valuation charge: 16.
	 */
	WeightValuationCharge: "unece:TransportServiceCategoryCodeList#16",

	/**
	 * All costs: 17.
	 */
	AllCosts: "unece:TransportServiceCategoryCodeList#17",

	/**
	 * Supply of certificate of shipment: 19.
	 */
	SupplyOfCertificateOfShipment: "unece:TransportServiceCategoryCodeList#19",

	/**
	 * Additional charges: 2.
	 */
	AdditionalCharges: "unece:TransportServiceCategoryCodeList#2",

	/**
	 * Supply of consular formalities or certificate of origin: 20.
	 */
	SupplyOfConsularFormalitiesOrCertificateOfOrigin: "unece:TransportServiceCategoryCodeList#20",

	/**
	 * Supply of non-categorised documentation in paper form: 21.
	 */
	SupplyOfNonCategorisedDocumentationInPaperForm: "unece:TransportServiceCategoryCodeList#21",

	/**
	 * Supply of customs formalities, export: 22.
	 */
	SupplyOfCustomsFormalitiesExport: "unece:TransportServiceCategoryCodeList#22",

	/**
	 * Supply of customs formalities, transit: 23.
	 */
	SupplyOfCustomsFormalitiesTransit: "unece:TransportServiceCategoryCodeList#23",

	/**
	 * Supply of customs formalities, import: 24.
	 */
	SupplyOfCustomsFormalitiesImport: "unece:TransportServiceCategoryCodeList#24",

	/**
	 * Transport charges + additional charges: 3.
	 */
	TransportChargesAdditionalCharges: "unece:TransportServiceCategoryCodeList#3",

	/**
	 * Basic freight: 4.
	 */
	BasicFreight: "unece:TransportServiceCategoryCodeList#4",

	/**
	 * Destination haulage charges: 5.
	 */
	DestinationHaulageCharges: "unece:TransportServiceCategoryCodeList#5",

	/**
	 * Disbursement: 6.
	 */
	Disbursement: "unece:TransportServiceCategoryCodeList#6",

	/**
	 * Destination port charges: 7.
	 */
	DestinationPortCharges: "unece:TransportServiceCategoryCodeList#7",

	/**
	 * Miscellaneous charges: 8.
	 */
	MiscellaneousCharges: "unece:TransportServiceCategoryCodeList#8",

	/**
	 * Transport charges up to a specified location: 9.
	 */
	TransportChargesUpToASpecifiedLocation: "unece:TransportServiceCategoryCodeList#9"
} as const;

/**
 * A character string used to represent a transport service category.
 * @see https://vocabulary.uncefact.org/TransportServiceCategoryCodeList
 */
export type TransportServiceCategoryCodeList = (typeof TransportServiceCategoryCodeList)[keyof typeof TransportServiceCategoryCodeList];
