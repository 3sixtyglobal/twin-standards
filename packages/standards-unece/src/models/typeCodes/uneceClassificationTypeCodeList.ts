// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceClassification typeCode property.
 * @see https://vocabulary.uncefact.org/Classification
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceClassificationTypeCodeList = {
	/**
	 * A product classification applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableClassification
	 */
	ApplicableClassification: "unece:applicableClassification",

	/**
	 * A product classification designated for this trade product.
	 * @see https://vocabulary.uncefact.org/designatedClassification
	 */
	DesignatedClassification: "unece:designatedClassification"
} as const;

/**
 * Values for UneceClassification typeCode property.
 * @see https://vocabulary.uncefact.org/Classification
 */
export type UneceClassificationTypeCodeList = (typeof UneceClassificationTypeCodeList)[keyof typeof UneceClassificationTypeCodeList];
