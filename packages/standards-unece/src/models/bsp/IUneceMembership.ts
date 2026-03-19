// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The state of belonging to a group, such as a club or trade association.
 * @see https://vocabulary.uncefact.org/Membership
 */
export interface IUneceMembership {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Membership;

	/**
	 * A textual description of this specified membership.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value of the end of this specified membership.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 * @json-schema format:date-time
	 */
	endDateTime?: string;

	/**
	 * The identifier of this specified membership.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, for this specified membership.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The date, time, date time, or other date time value of the start of this specified membership.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 * @json-schema format:date-time
	 */
	startDateTime?: string;
}
