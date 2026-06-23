// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSpecifiedMaterial typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedMaterial
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSpecifiedMaterialTypeCodeList = {
	/**
	 * Material applicable for this supply chain trade line item.
	 * Material applicable to this product print.
	 * Specified material applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	ApplicableMaterial: "unece:applicableMaterial",

	/**
	 * Specified material applied to this agricultural application.
	 * @see https://vocabulary.uncefact.org/appliedMaterial
	 */
	AppliedMaterial: "unece:appliedMaterial",

	/**
	 * A material component of this trade product.
	 * A specified material component of this product batch.
	 * A specified material component of this technical characteristic.
	 * Component material for this specified material.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	ComponentMaterial: "unece:componentMaterial",

	/**
	 * Material included in this supply chain inventory.
	 * @see https://vocabulary.uncefact.org/includedMaterial
	 */
	IncludedMaterial: "unece:includedMaterial",

	/**
	 * Input material applicable to this facility production unit.
	 * Input material applicable to this production machine.
	 * Input material applicable to this production process.
	 * Input material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/inputApplicableMaterial
	 */
	InputApplicableMaterial: "unece:inputApplicableMaterial",

	/**
	 * Output material applicable to this facility production unit.
	 * Output material applicable to this production machine.
	 * Output material applicable to this production process.
	 * Output material applicable to this specified production device.
	 * @see https://vocabulary.uncefact.org/outputApplicableMaterial
	 */
	OutputApplicableMaterial: "unece:outputApplicableMaterial",

	/**
	 * Material related to this trade party.
	 * @see https://vocabulary.uncefact.org/relatedMaterial
	 */
	RelatedMaterial: "unece:relatedMaterial",

	/**
	 * Substitute material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableMaterial
	 */
	SubstituteApplicableMaterial: "unece:substituteApplicableMaterial",

	/**
	 * Substituted material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableMaterial
	 */
	SubstitutedApplicableMaterial: "unece:substitutedApplicableMaterial",

	/**
	 * Material used for this specified crop protection treatment.
	 * Material used for this specified product finishing treatment.
	 * @see https://vocabulary.uncefact.org/usedMaterial
	 */
	UsedMaterial: "unece:usedMaterial"
} as const;

/**
 * Values for UneceSpecifiedMaterial typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedMaterial
 */
export type UneceSpecifiedMaterialTypeCodeList = (typeof UneceSpecifiedMaterialTypeCodeList)[keyof typeof UneceSpecifiedMaterialTypeCodeList];
