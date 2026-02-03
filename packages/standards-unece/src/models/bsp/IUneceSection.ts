// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSegment } from "./IUneceSegment.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The parts into which a label is or may be divided.
 * @see https://vocabulary.uncefact.org/Section
 */
export interface IUneceSection extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Section;

	/**
	 * The identifier of this label section.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A segment included in this label section.
	 * @see https://vocabulary.uncefact.org/includedSegment
	 */
	includedSegment?: IUneceSegment;

	/**
	 * The code specifying the pattern of this label section.
	 * @see https://vocabulary.uncefact.org/patternCode
	 */
	patternCode?: string;
}
