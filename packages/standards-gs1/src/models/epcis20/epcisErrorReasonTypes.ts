// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `error-reason` values from the GS1 EPCIS JSON Schema.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisErrorReasonTypes = {
	/**
	 * Prior event is erroneous because it did not actually occur; no corrective
	 * events exist.
	 */
	DidNotOccur: "did_not_occur",

	/**
	 * Prior event has incorrect data and may be corrected by subsequent linked
	 * events.
	 */
	IncorrectData: "incorrect_data"
} as const;

/**
 * Supported EPCIS 2.0 `error-reason` values from the GS1 EPCIS JSON Schema.
 */
export type EpcisErrorReasonTypes =
	(typeof EpcisErrorReasonTypes)[keyof typeof EpcisErrorReasonTypes];
