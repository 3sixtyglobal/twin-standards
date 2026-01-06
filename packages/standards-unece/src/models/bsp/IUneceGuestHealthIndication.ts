// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A guest's physical or mental condition.
 * @see https://vocabulary.uncefact.org/GuestHealthIndication
 */
export interface IUneceGuestHealthIndication extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GuestHealthIndication;

	/**
	 * A textual description of this guest health indication.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A restriction, expressed as text, for this guest health indication.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;

	/**
	 * A status, expressed as text, for this guest health indication.
	 * @see https://vocabulary.uncefact.org/status
	 */
	status?: string;

	/**
	 * The code specifying the type of guest heath indication.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
