// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Information about an event in which a Track and Trace (TT) element of one of more physical or digital objects is
 * identified by a specific object class identifier (such as an electronic product class), either a specific quantity or an
 * unspecified quantity.
 * @see https://vocabulary.uncefact.org/EventElement
 */
export interface IUneceEventElement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.EventElement;

	/**
	 * The identifier of the object class for this TT event element.
	 * @see https://vocabulary.uncefact.org/objectClassId
	 */
	objectClassId: string;

	/**
	 * The number of units of this TT event element.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;
}
