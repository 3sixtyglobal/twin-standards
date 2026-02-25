// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceSpecifiedLocation } from "./IUneceSpecifiedLocation.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An agreement between two or more parties for trade purposes.
 * @see https://vocabulary.uncefact.org/Contract
 */
export interface IUneceContract {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Contract;

	/**
	 * The date, time, date time, or other date time value of automatic extension for this trade contract.
	 * @see https://vocabulary.uncefact.org/automaticExtensionDateTime
	 */
	automaticExtensionDateTime?: string;

	/**
	 * The measure of the duration of the automatic extension for this trade contract.
	 * @see https://vocabulary.uncefact.org/automaticExtensionDurationMeasure
	 */
	automaticExtensionDurationMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * A textual description of this trade contract.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The unique identifier of this trade contract.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The date, date time, or other date time value for the issuance of this trade contract.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * A name, expressed as text, for this trade contract.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A signature name, expressed as text, for this trade contract.
	 * @see https://vocabulary.uncefact.org/signatureName
	 */
	signatureName?: string;

	/**
	 * The date, time, date time or other date time value when this trade contract was signed.
	 * @see https://vocabulary.uncefact.org/signedDateTime
	 */
	signedDateTime?: string;

	/**
	 * A location where this trade contract was or will be signed.
	 * @see https://vocabulary.uncefact.org/signedLocation
	 */
	signedLocation?: IUneceSpecifiedLocation[];

	/**
	 * A job title of the signee, expressed as text, for this trade contract.
	 * @see https://vocabulary.uncefact.org/signeeJobTitle
	 */
	signeeJobTitle?: string;
}
