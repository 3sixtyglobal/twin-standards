// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A registered tax or duty system pertaining to an authority.
 * @see https://vocabulary.uncefact.org/RegisteredTax
 */
export interface IRegisteredTax extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RegisteredTax;

	/**
	 * The code specifying the currency for this registered tax.
	 * @see https://vocabulary.uncefact.org/currencyCode
	 */
	currencyCode?: string;

	/**
	 * The indication of whether or not this registered tax is a customs duty.
	 * @see https://vocabulary.uncefact.org/customsDutyIndicator
	 */
	customsDutyIndicator?: boolean;

	/**
	 * A textual description of this registered tax.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A reason, expressed as text, for exemption from this registered tax.
	 * @see https://vocabulary.uncefact.org/exemptionReason
	 */
	exemptionReason?: string;

	/**
	 * The code specifying the exemption reason for this registered tax.
	 * @see https://vocabulary.uncefact.org/exemptionReasonCode
	 */
	exemptionReasonCode?: string;

	/**
	 * A jurisdiction, expressed as text, for this registered tax.
	 * @see https://vocabulary.uncefact.org/jurisdiction
	 */
	jurisdiction?: string;

	/**
	 * The code specifying the type of registered tax.
	 * @see https://vocabulary.uncefact.org/registeredTaxTypeCode
	 */
	registeredTaxTypeCode?: string;
}
