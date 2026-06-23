// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceCropProduceBatch typeCode property.
 * @see https://vocabulary.uncefact.org/CropProduceBatch
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceCropProduceBatchTypeCodeList = {
	/**
	 * A crop produce batch harvested in the crop production for this agricultural process.
	 * @see https://vocabulary.uncefact.org/harvestedBatch
	 */
	HarvestedBatch: "unece:harvestedBatch",

	/**
	 * An input batch crop produce, such as seed or fertilizer, specified for this crop produce.
	 * @see https://vocabulary.uncefact.org/inputSpecifiedBatch
	 */
	InputSpecifiedBatch: "unece:inputSpecifiedBatch",

	/**
	 * An output batch crop produce, such as potatoes, grain, straw, specified for this crop produce.
	 * @see https://vocabulary.uncefact.org/outputSpecifiedBatch
	 */
	OutputSpecifiedBatch: "unece:outputSpecifiedBatch"
} as const;

/**
 * Values for UneceCropProduceBatch typeCode property.
 * @see https://vocabulary.uncefact.org/CropProduceBatch
 */
export type UneceCropProduceBatchTypeCodeList = (typeof UneceCropProduceBatchTypeCodeList)[keyof typeof UneceCropProduceBatchTypeCodeList];
