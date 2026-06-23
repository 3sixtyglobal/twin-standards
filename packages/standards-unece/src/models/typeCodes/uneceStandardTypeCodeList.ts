// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceStandard typeCode property.
 * @see https://vocabulary.uncefact.org/Standard
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceStandardTypeCodeList = {
	/**
	 * A referenced standard applicable to this agricultural certificate.
	 * A referenced standard applicable to this animal certificate.
	 * A referenced standard applicable to this compliance policy.
	 * A referenced standard applicable to this organization characteristic.
	 * A referenced standard applicable to this organizational certificate.
	 * A referenced standard applicable to this organizational certification.
	 * A referenced standard applicable to this process certificate.
	 * A referenced standard applicable to this process certification.
	 * A referenced standard applicable to this process characteristic.
	 * A referenced standard applicable to this product batch certificate.
	 * A referenced standard applicable to this product batch certification.
	 * A referenced standard applicable to this product batch characteristic.
	 * A referenced standard applicable to this product certificate.
	 * A referenced standard applicable to this product colour.
	 * A referenced standard applicable to this specified assessment.
	 * A referenced standard applicable to this specified certificate.
	 * A referenced standard applicable to this sustainability assertion.
	 * A referenced standard applicable to this sustainability characteristic.
	 * A referenced standard applicable to this sustainability inspection.
	 * A referenced standard applicable to this technical characteristic.
	 * A referenced standard applicable to this trade product certification.
	 * The referenced standard that is applicable to this product characteristic.
	 * The referenced standard that is applicable to this product classification.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	ApplicableStandard: "unece:applicableStandard",

	/**
	 * A referenced standard associated to this specified licence.
	 * A referenced standard associated with this production process.
	 * A referenced standard associated with this specified declaration.
	 * A referenced standard associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	AssociatedStandard: "unece:associatedStandard",

	/**
	 * A referenced inspection standard for this specified inspection result.
	 * @see https://vocabulary.uncefact.org/inspectionStandard
	 */
	InspectionStandard: "unece:inspectionStandard",

	/**
	 * A referenced standard related to this specified certification.
	 * @see https://vocabulary.uncefact.org/relatedStandard
	 */
	RelatedStandard: "unece:relatedStandard"
} as const;

/**
 * Values for UneceStandard typeCode property.
 * @see https://vocabulary.uncefact.org/Standard
 */
export type UneceStandardTypeCodeList = (typeof UneceStandardTypeCodeList)[keyof typeof UneceStandardTypeCodeList];
