// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information related to an XHE (Exchange Header Envelope).
 * @see https://vocabulary.uncefact.org/XHEReference
 */
export interface IUneceXHEReference {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.XHEReference;

	/**
	 * The end date, time, date time, or other date time value for the availability of this XHE reference.
	 * @see https://vocabulary.uncefact.org/endAvailabilityDateTime
	 */
	endAvailabilityDateTime?: string;

	/**
	 * The identifier for this XHE reference.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The login, expressed as text, for this XHE reference.
	 * @see https://vocabulary.uncefact.org/login
	 */
	login?: string;

	/**
	 * The password, expressed as text, for this XHE reference.
	 * @see https://vocabulary.uncefact.org/password
	 */
	password?: string;

	/**
	 * The start date, time, date time, or other date time value for the availability of this XHE reference.
	 * @see https://vocabulary.uncefact.org/startAvailabilityDateTime
	 */
	startAvailabilityDateTime?: string;
}
