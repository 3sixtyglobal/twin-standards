// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceGeopoliticalRegion typeCode property.
 * @see https://vocabulary.uncefact.org/GeopoliticalRegion
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceGeopoliticalRegionTypeCodeList = {
	/**
	 * The geopolitical region of export for this supply chain consignment item.
	 * The geopolitical region of export for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exportGeopoliticalRegion
	 */
	ExportGeopoliticalRegion: "unece:exportGeopoliticalRegion",

	/**
	 * The geopolitical region of origin for this supply chain consignment item.
	 * The geopolitical region of origin for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/originGeopoliticalRegion
	 */
	OriginGeopoliticalRegion: "unece:originGeopoliticalRegion"
} as const;

/**
 * Values for UneceGeopoliticalRegion typeCode property.
 * @see https://vocabulary.uncefact.org/GeopoliticalRegion
 */
export type UneceGeopoliticalRegionTypeCodeList = (typeof UneceGeopoliticalRegionTypeCodeList)[keyof typeof UneceGeopoliticalRegionTypeCodeList];
