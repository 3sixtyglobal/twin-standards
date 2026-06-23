// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSustainabilityCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/SustainabilityCharacteristic
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSustainabilityCharacteristicTypeCodeList = {
	/**
	 * A characteristic applicable to this sustainability inspection.
	 * A sustainability characteristic applicable to this agricultural application.
	 * A sustainability characteristic applicable to this agricultural certificate.
	 * A sustainability characteristic applicable to this animal certificate.
	 * A sustainability characteristic applicable to this distinct chemical.
	 * A sustainability characteristic applicable to this facility production unit.
	 * A sustainability characteristic applicable to this logistics transport means.
	 * A sustainability characteristic applicable to this logistics transport movement.
	 * A sustainability characteristic applicable to this organization characteristic.
	 * A sustainability characteristic applicable to this organizational certificate.
	 * A sustainability characteristic applicable to this process certificate.
	 * A sustainability characteristic applicable to this process characteristic.
	 * A sustainability characteristic applicable to this product batch certificate.
	 * A sustainability characteristic applicable to this product certificate.
	 * A sustainability characteristic applicable to this product characteristic.
	 * A sustainability characteristic applicable to this production facility.
	 * A sustainability characteristic applicable to this production process.
	 * A sustainability characteristic applicable to this production waste material component.
	 * A sustainability characteristic applicable to this production waste material.
	 * A sustainability characteristic applicable to this referenced location.
	 * A sustainability characteristic applicable to this specified assessment.
	 * A sustainability characteristic applicable to this specified certificate.
	 * A sustainability characteristic applicable to this specified chemical treatment.
	 * A sustainability characteristic applicable to this specified crop protection treatment.
	 * A sustainability characteristic applicable to this specified material.
	 * A sustainability characteristic applicable to this specified product finishing treatment.
	 * A sustainability characteristic applicable to this toxicological hazardous material.
	 * A sustainability characteristic applicable to this trade party.
	 * A sustainability characteristic applicable to this trade product.
	 * A sustainability characteristic applicable to this transportation waste material component.
	 * A sustainability characteristic applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	ApplicableSustainabilityCharacteristic: "unece:applicableSustainabilityCharacteristic",

	/**
	 * A sustainability characteristic included in this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/includedCharacteristic
	 */
	IncludedCharacteristic: "unece:includedCharacteristic",

	/**
	 * A sustainability characteristic related to this supply chain event.
	 * @see https://vocabulary.uncefact.org/relatedSustainabilityCharacteristic
	 */
	RelatedSustainabilityCharacteristic: "unece:relatedSustainabilityCharacteristic"
} as const;

/**
 * Values for UneceSustainabilityCharacteristic typeCode property.
 * @see https://vocabulary.uncefact.org/SustainabilityCharacteristic
 */
export type UneceSustainabilityCharacteristicTypeCodeList = (typeof UneceSustainabilityCharacteristicTypeCodeList)[keyof typeof UneceSustainabilityCharacteristicTypeCodeList];
