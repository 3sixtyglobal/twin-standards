// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceTechnicalCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/TechnicalCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceTechnicalCharacteristicTypeCodeList = {
	/**
	 * A technical characteristic applicable to this TT location.
	 * A technical characteristic applicable to this product colour.
	 * A technical characteristic applicable to this product print.
	 * A technical characteristic applicable to this trade party.
	 * A technical characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	ApplicableTechnicalCharacteristic: "unece:applicableTechnicalCharacteristic",

	/**
	 * A technical characteristic managed by this TT party.
	 * @see https://vocabulary.uncefact.org/managedCharacteristic
	 */
	ManagedCharacteristic: "unece:managedCharacteristic",

	/**
	 * A technical characteristic related to this animal holding event.
	 * A technical characteristic related to this supply chain event.
	 * @see https://vocabulary.uncefact.org/relatedTechnicalCharacteristic
	 */
	RelatedTechnicalCharacteristic: "unece:relatedTechnicalCharacteristic"
} as const;

/**
 * Values for UneceTechnicalCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/TechnicalCharacteristic
 */
export type UneceTechnicalCharacteristicTypeCodeList = (typeof UneceTechnicalCharacteristicTypeCodeList)[keyof typeof UneceTechnicalCharacteristicTypeCodeList];
