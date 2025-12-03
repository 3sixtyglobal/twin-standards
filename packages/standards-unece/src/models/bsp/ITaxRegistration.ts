// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IRegisteredTax } from "./IRegisteredTax.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Registration with a specific tax authority.
 * @see https://vocabulary.uncefact.org/TaxRegistration
 */
export interface ITaxRegistration extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TaxRegistration;

	/**
	 * The registered tax associated with this tax registration.
	 * @see https://vocabulary.uncefact.org/associatedTax
	 */
	associatedTax?: IRegisteredTax;

	/**
	 * The Import One Stop Shop (IOSS) identifier for this tax registration.
	 * @see https://vocabulary.uncefact.org/iOSSId
	 */
	iOSSId?: string;

	/**
	 * The unique identifier for this tax registration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
