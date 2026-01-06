// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A way to protect something, such as human beings, animals or environment, from getting infected or becoming ill.
 * @see https://vocabulary.uncefact.org/ProtectionMeans
 */
export interface IUneceProtectionMeans extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProtectionMeans;

	/**
	 * The indication of whether or not this disease protection means is accepted.
	 * @see https://vocabulary.uncefact.org/acceptedIndicator
	 */
	acceptedIndicator?: boolean;

	/**
	 * The code specifying the category of disease protection means.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A textual description of this disease protection means.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An item, expressed as text, for this disease protection means.
	 * @see https://vocabulary.uncefact.org/item
	 */
	item?: string;

	/**
	 * A restriction, expressed as text, for this disease protection means.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;
}
