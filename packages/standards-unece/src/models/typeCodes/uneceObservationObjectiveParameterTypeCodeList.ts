// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceObservationObjectiveParameter typeCode property.
 * @see https://vocabulary.uncefact.org/ObservationObjectiveParameter
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceObservationObjectiveParameterTypeCodeList = {
	/**
	 * An applicable objective observation parameter of the interpretation result for this inspection result characteristic.
	 * An applicable observation objective parameter of the interpretation result for this sample observation result
	 * characteristic.
	 * An applicable observation objective parameter of the interpretation result for this sample observation result.
	 * @see https://vocabulary.uncefact.org/interpretationResultApplicableParameter
	 */
	InterpretationResultApplicableParameter: "unece:interpretationResultApplicableParameter"
} as const;

/**
 * Values for UneceObservationObjectiveParameter typeCode property.
 * @see https://vocabulary.uncefact.org/ObservationObjectiveParameter
 */
export type UneceObservationObjectiveParameterTypeCodeList = (typeof UneceObservationObjectiveParameterTypeCodeList)[keyof typeof UneceObservationObjectiveParameterTypeCodeList];
