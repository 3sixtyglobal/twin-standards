// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Properties defining a geographical coordinate source system used in different places around the world to identify
 * locations on the earth.
 * @see https://vocabulary.uncefact.org/CoordinateSourceSystem
 */
export interface IUneceCoordinateSourceSystem {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CoordinateSourceSystem;

	/**
	 * The identifier for this geographical coordinate source system.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The quantity of signal source available for this geographical coordinate source system.
	 * @see https://vocabulary.uncefact.org/signalSourceAvailableQuantity
	 */
	signalSourceAvailableQuantity?: IUneceQuantityType;

	/**
	 * The code specifying a type of source for this geographical coordinate source system.
	 * @see https://vocabulary.uncefact.org/sourceTypeCode
	 */
	sourceTypeCode?: string;

	/**
	 * The measure of the tolerance of this geographical coordinate source system.
	 * @see https://vocabulary.uncefact.org/toleranceMeasure
	 */
	toleranceMeasure?: IUneceMeasureType;

	/**
	 * The quantity of the used signal source of this geographical coordinate source system.
	 * @see https://vocabulary.uncefact.org/usedSignalSourceQuantity
	 */
	usedSignalSourceQuantity?: IUneceQuantityType;
}
