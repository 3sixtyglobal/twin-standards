// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ISpecifiedNote } from "./ISpecifiedNote.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A tool or device carried by a guest for an activity.
 * @see https://vocabulary.uncefact.org/CarriedEquipment
 */
export interface ICarriedEquipment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CarriedEquipment;

	/**
	 * A textual description of this guest carried equipment.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A name, expressed as text, for this guest carried equipment.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A restriction, expressed as text, for this guest carried equipment.
	 * @see https://vocabulary.uncefact.org/restriction
	 */
	restriction?: string;

	/**
	 * A specification note for this guest carried equipment.
	 * @see https://vocabulary.uncefact.org/specificationNote
	 */
	specificationNote?: ISpecifiedNote[];

	/**
	 * The code specifying the type of guest carried equipment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
