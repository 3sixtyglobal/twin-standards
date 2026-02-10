// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceProductBatch typeCode property.
 * @see https://vocabulary.uncefact.org/ProductBatch
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceProductBatchTypeCodeList = {
	/**
	 * A product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/applicableBatch
	 */
	ApplicableBatch: "unece:applicableBatch",

	/**
	 * A product batch component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentBatch
	 */
	ComponentBatch: "unece:componentBatch",

	/**
	 * A product batch included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedBatch
	 */
	IncludedBatch: "unece:includedBatch",

	/**
	 * An input batch applicable to this production machine.
	 * An input batch applicable to this specified production device.
	 * An input product batch applicable to this facility production unit.
	 * An input product batch applicable to this production process.
	 * @see https://vocabulary.uncefact.org/inputApplicableBatch
	 */
	InputApplicableBatch: "unece:inputApplicableBatch",

	/**
	 * An output batch applicable to this specified production device.
	 * An output product batch applicable to this facility production unit.
	 * An output product batch applicable to this production machine.
	 * An output product batch applicable to this production process.
	 * @see https://vocabulary.uncefact.org/outputApplicableBatch
	 */
	OutputApplicableBatch: "unece:outputApplicableBatch",

	/**
	 * A product batch related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedBatch
	 */
	RelatedBatch: "unece:relatedBatch",

	/**
	 * A product batch specified for this specified agricultural application.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatch
	 */
	SpecifiedProductBatch: "unece:specifiedProductBatch",

	/**
	 * A substitute product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableBatch
	 */
	SubstituteApplicableBatch: "unece:substituteApplicableBatch",

	/**
	 * A substituted product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableBatch
	 */
	SubstitutedApplicableBatch: "unece:substitutedApplicableBatch"
} as const;

/**
 * Values for UneceProductBatch typeCode property.
 * @see https://vocabulary.uncefact.org/ProductBatch
 */
export type UneceProductBatchTypeCodeList = (typeof UneceProductBatchTypeCodeList)[keyof typeof UneceProductBatchTypeCodeList];
