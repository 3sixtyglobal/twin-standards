// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProduce typeCode property.
 * @see https://vocabulary.uncefact.org/Produce
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProduceTypeCodeList = {
	/**
	 * Crop produce harvested from this agricultural zone area.
	 * Produce harvested from this field crop.
	 * @see https://vocabulary.uncefact.org/harvestedProduce
	 */
	HarvestedProduce: "unece:harvestedProduce",

	/**
	 * A crop produce specified for this crop produce batch.
	 * @see https://vocabulary.uncefact.org/specifiedProduce
	 */
	SpecifiedProduce: "unece:specifiedProduce"
} as const;

/**
 * Values for UneceProduce typeCode property.
 * @see https://vocabulary.uncefact.org/Produce
 */
export type UneceProduceTypeCodeList = (typeof UneceProduceTypeCodeList)[keyof typeof UneceProduceTypeCodeList];
