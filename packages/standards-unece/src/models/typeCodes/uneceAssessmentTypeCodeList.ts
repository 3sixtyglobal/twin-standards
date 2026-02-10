// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceAssessment typeCode property.
 * @see https://vocabulary.uncefact.org/Assessment
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAssessmentTypeCodeList = {
	/**
	 * A specified assessment applicable to this referenced standard.
	 * An assessment applicable for this specified material.
	 * An assessment applicable to this product batch.
	 * An assessment applicable to this production facility.
	 * An assessment applicable to this production process.
	 * An assessment applicable to this trade party.
	 * An assessment applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	ApplicableAssessment: "unece:applicableAssessment",

	/**
	 * An assessment related to this specified inspection result.
	 * @see https://vocabulary.uncefact.org/relatedAssessment
	 */
	RelatedAssessment: "unece:relatedAssessment"
} as const;

/**
 * Values for UneceAssessment typeCode property.
 * @see https://vocabulary.uncefact.org/Assessment
 */
export type UneceAssessmentTypeCodeList = (typeof UneceAssessmentTypeCodeList)[keyof typeof UneceAssessmentTypeCodeList];
