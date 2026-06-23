// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceSpecifiedParameter typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedParameter
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceSpecifiedParameterTypeCodeList = {
	/**
	 * A parameter applicable to this specified method.
	 * A parameter applicable to this specified production device.
	 * A specified parameter applicable to this production process.
	 * @see https://vocabulary.uncefact.org/applicableParameter
	 */
	ApplicableParameter: "unece:applicableParameter",

	/**
	 * An operational parameter applicable to this production machine.
	 * @see https://vocabulary.uncefact.org/operationalApplicableParameter
	 */
	OperationalApplicableParameter: "unece:operationalApplicableParameter",

	/**
	 * A quality parameter specified for this trade product.
	 * @see https://vocabulary.uncefact.org/qualityParameter
	 */
	QualityParameter: "unece:qualityParameter",

	/**
	 * A requested operational parameter applicable to this production machine.
	 * An operational parameter requested for this specified production device.
	 * @see https://vocabulary.uncefact.org/requestedOperationalApplicableParameter
	 */
	RequestedOperationalApplicableParameter: "unece:requestedOperationalApplicableParameter",

	/**
	 * A parameter specified for a value for this metric characteristic.
	 * A parameter specified for a value of this product batch characteristic.
	 * A parameter specified for a value of this product characteristic.
	 * A parameter specified for the value of this agricultural characteristic.
	 * A parameter specified for the value of this organization characteristic.
	 * A parameter specified for the value of this process characteristic.
	 * A parameter specified for the value of this sustainability characteristic.
	 * A parameter specified for the value of this technical characteristic.
	 * @see https://vocabulary.uncefact.org/valueParameter
	 */
	ValueParameter: "unece:valueParameter"
} as const;

/**
 * Values for UneceSpecifiedParameter typeCode property.
 * @see https://vocabulary.uncefact.org/SpecifiedParameter
 */
export type UneceSpecifiedParameterTypeCodeList = (typeof UneceSpecifiedParameterTypeCodeList)[keyof typeof UneceSpecifiedParameterTypeCodeList];
