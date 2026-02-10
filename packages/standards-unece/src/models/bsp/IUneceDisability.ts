// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceDisabilityTypeCodeList } from "../typeCodes/uneceDisabilityTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical or mental condition that limits a guest's movements, senses, or activities.
 * @see https://vocabulary.uncefact.org/Disability
 */
export interface IUneceDisability extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Disability;

	/**
	 * A textual description of this guest disability.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A name, expressed as text, for this guest disability.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The date, time, date time, or other date time value when this guest disability has been registered.
	 * @see https://vocabulary.uncefact.org/registeredDateTime
	 */
	registeredDateTime?: string;

	/**
	 * A supporting device, expressed as text, for this required guest disability.
	 * @see https://vocabulary.uncefact.org/requiredSupportingDevice
	 */
	requiredSupportingDevice?: string;

	/**
	 * A restriction, expressed as text, for this guest disability.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;

	/**
	 * The code specifying the type of guest disability.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceDisabilityTypeCodeList | string;
}
