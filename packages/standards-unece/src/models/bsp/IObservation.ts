// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { INote } from "./INote.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified act or instance of viewing or noting a fact or occurrence for some scientific or other special purpose.
 * @see https://vocabulary.uncefact.org/Observation
 */
export interface IObservation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Observation;

	/**
	 * A note providing information applicable to this specified observation.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: INote[];

	/**
	 * The textual description for this specified observation.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this specified observation.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A binary file related to this specified observation.
	 * @see https://vocabulary.uncefact.org/relatedBinaryFile
	 */
	relatedBinaryFile?: IBinaryFile[];
}
