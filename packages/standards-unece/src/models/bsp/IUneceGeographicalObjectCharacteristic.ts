// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An attribute of a geographical object.
 * @see https://vocabulary.uncefact.org/GeographicalObjectCharacteristic
 */
export interface IUneceGeographicalObjectCharacteristic {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GeographicalObjectCharacteristic;

	/**
	 * The textual description for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The description reference, expressed as text, for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/descriptionReference
	 */
	descriptionReference?: string;

	/**
	 * The indication of whether or not this geographical object can be characterized as a geometry collection.
	 * @see https://vocabulary.uncefact.org/geometryCollectionIndicator
	 */
	geometryCollectionIndicator?: boolean;

	/**
	 * The identifier for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The indication of whether or not this geographical object can be characterized as physical.
	 * @see https://vocabulary.uncefact.org/physicalIndicator
	 */
	physicalIndicator?: boolean;

	/**
	 * The type of geometry, expressed as text, relevant for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/relevantGeometryType
	 */
	relevantGeometryType?: string;

	/**
	 * The type of shape, expressed as text, such as a semi-circle, for this geographical object characteristic.
	 * @see https://vocabulary.uncefact.org/shapeType
	 */
	shapeType?: string;
}
