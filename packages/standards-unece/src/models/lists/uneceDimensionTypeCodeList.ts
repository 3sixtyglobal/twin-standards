// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the dimension type.
 * @see https://vocabulary.uncefact.org/DimensionTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceDimensionTypeCodeList = {
	/**
	 * Gross dimensions: 1.
	 */
	GrossDimensions: "unece:DimensionTypeCodeList#1",

	/**
	 * External equipment dimension: 10.
	 */
	ExternalEquipmentDimension: "unece:DimensionTypeCodeList#10",

	/**
	 * Internal equipment dimensions: 11.
	 */
	InternalEquipmentDimensions: "unece:DimensionTypeCodeList#11",

	/**
	 * Damage dimensions: 12.
	 */
	DamageDimensions: "unece:DimensionTypeCodeList#12",

	/**
	 * Off-standard dimensions height: 13.
	 */
	OffStandardDimensionsHeight: "unece:DimensionTypeCodeList#13",

	/**
	 * Equipment door dimensions: 14.
	 */
	EquipmentDoorDimensions: "unece:DimensionTypeCodeList#14",

	/**
	 * Off-standard dimension width: 15.
	 */
	OffStandardDimensionWidth: "unece:DimensionTypeCodeList#15",

	/**
	 * Off-standard dimension length: 16.
	 */
	OffStandardDimensionLength: "unece:DimensionTypeCodeList#16",

	/**
	 * Bundled equipment total height: 17.
	 */
	BundledEquipmentTotalHeight: "unece:DimensionTypeCodeList#17",

	/**
	 * Equipment off-standard dimension height, actual: 18.
	 */
	EquipmentOffStandardDimensionHeightActual: "unece:DimensionTypeCodeList#18",

	/**
	 * Folded equipment height: 19.
	 */
	FoldedEquipmentHeight: "unece:DimensionTypeCodeList#19",

	/**
	 * Package dimensions (including goods): 2.
	 */
	PackageDimensions: "unece:DimensionTypeCodeList#2",

	/**
	 * Adjustable equipment height: 20.
	 */
	AdjustableEquipmentHeight: "unece:DimensionTypeCodeList#20",

	/**
	 * Equipment floor height: 21.
	 */
	EquipmentFloorHeight: "unece:DimensionTypeCodeList#21",

	/**
	 * Container off-standard dimension width at corner posts: 22.
	 */
	ContainerOffStandardDimensionWidthAtCornerPosts: "unece:DimensionTypeCodeList#22",

	/**
	 * Container off-standard dimension width of body: 23.
	 */
	ContainerOffStandardDimensionWidthOfBody: "unece:DimensionTypeCodeList#23",

	/**
	 * Transport unit gross dimensions: 24.
	 */
	TransportUnitGrossDimensions: "unece:DimensionTypeCodeList#24",

	/**
	 * Pallet dimensions (excluding goods): 3.
	 */
	PalletDimensions: "unece:DimensionTypeCodeList#3",

	/**
	 * Pallet dimensions (including goods): 4.
	 */
	PalletDimensions4: "unece:DimensionTypeCodeList#4",

	/**
	 * Off-standard dimension front: 5.
	 */
	OffStandardDimensionFront: "unece:DimensionTypeCodeList#5",

	/**
	 * Off-standard dimension back: 6.
	 */
	OffStandardDimensionBack: "unece:DimensionTypeCodeList#6",

	/**
	 * Off-standard dimension right: 7.
	 */
	OffStandardDimensionRight: "unece:DimensionTypeCodeList#7",

	/**
	 * Off-standard dimension left: 8.
	 */
	OffStandardDimensionLeft: "unece:DimensionTypeCodeList#8",

	/**
	 * Off-standard dimension general: 9.
	 */
	OffStandardDimensionGeneral: "unece:DimensionTypeCodeList#9"
} as const;

/**
 * A character string used to represent the dimension type.
 * @see https://vocabulary.uncefact.org/DimensionTypeCodeList
 */
export type UneceDimensionTypeCodeList = (typeof UneceDimensionTypeCodeList)[keyof typeof UneceDimensionTypeCodeList];
