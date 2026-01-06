// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Delivery information of an instructive nature.
 * @see https://vocabulary.uncefact.org/DeliveryInstructions
 */
export interface IUneceDeliveryInstructions extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DeliveryInstructions;

	/**
	 * The code specifying a description of these delivery instructions.
	 * @see https://vocabulary.uncefact.org/deliveryInstructionsDescriptionCode
	 */
	deliveryInstructionsDescriptionCode?: string;

	/**
	 * A textual description of these delivery instructions.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Delivery handling instructions expressed as text.
	 * @see https://vocabulary.uncefact.org/handling
	 */
	handling?: string;

	/**
	 * A code specifying delivery handling instructions.
	 * @see https://vocabulary.uncefact.org/handlingCode
	 */
	handlingCode?: string;

	/**
	 * A type, expressed as text, for these delivery instructions.
	 * @see https://vocabulary.uncefact.org/instructionsType
	 */
	instructionsType?: string;

	/**
	 * A name, expressed as text, of an item included in these delivery instructions.
	 * @see https://vocabulary.uncefact.org/itemName
	 */
	itemName?: string;

	/**
	 * A procedure, expressed as text, for these delivery instructions.
	 * @see https://vocabulary.uncefact.org/procedure
	 */
	procedure?: string;

	/**
	 * The indication of whether or not a requirement exists for these delivery instructions.
	 * @see https://vocabulary.uncefact.org/requirementIndicator
	 */
	requirementIndicator?: boolean;
}
