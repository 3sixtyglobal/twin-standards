// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IPolicy } from "./IPolicy.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A statement that user needs of the present are met without compromising the needs of future generations.
 * @see https://vocabulary.uncefact.org/Assertion
 */
export interface IAssertion extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Assertion;

	/**
	 * A referenced standard applicable to this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A textual description of this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description for this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * An identifier of this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A sustainability characteristic included in this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/includedCharacteristic
	 */
	includedCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * An identifier of a party issuing this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string;

	/**
	 * A compliance policy related to this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/relatedPolicy
	 */
	relatedPolicy?: IPolicy[];

	/**
	 * The code specifying the status of this sustainability assertion.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;
}
