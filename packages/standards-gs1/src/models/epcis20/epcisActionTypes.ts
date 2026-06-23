// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * GS1 EPCIS 2.0 action values capturing whether an event adds, observes, or
 * removes associations.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisActionTypes = {
	/**
	 * Indicates that associations described by the event are created as of
	 * eventTime.
	 */
	Add: "ADD",

	/**
	 * Reports an observation of existing associations without changing them.
	 */
	Observe: "OBSERVE",

	/**
	 * Indicates that associations described by the event no longer hold as of
	 * eventTime.
	 */
	Delete: "DELETE"
} as const;

/**
 * GS1 EPCIS 2.0 action values capturing whether an event adds, observes, or
 * removes associations.
 */
export type EpcisActionTypes = (typeof EpcisActionTypes)[keyof typeof EpcisActionTypes];
