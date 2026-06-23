// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisErrorReasonTypes } from "./epcisErrorReasonTypes.js";

/**
 * EPCIS 2.0 ErrorDeclaration describing corrections to previously captured
 * events.
 * @see https://ref.gs1.org/epcis/ErrorDeclaration
 */
export interface IEpcisErrorDeclaration {
	/**
	 * The date and time at which the declaration of error is made.
	 */
	declarationTime: string;

	/**
	 * Reason for the error.
	 *
	 * Use {@link EpcisErrorReasonTypes} for known values.
	 */
	reason?: EpcisErrorReasonTypes | string;

	/**
	 * (Optional) If present, indicates that the events having the specified URIs as
	 * the value of their eventID fields are to be considered as "corrections" to
	 * the event declared erroneous by this event.
	 */
	correctiveEventIDs?: string[];
}
