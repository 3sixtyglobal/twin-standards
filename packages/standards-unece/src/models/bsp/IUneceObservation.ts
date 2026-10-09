// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified act or instance of viewing or noting a fact or occurrence for some scientific or other special purpose.
 * @see https://vocabulary.uncefact.org/Observation
 */
export interface IUneceObservation {
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
	applicableNote?: IUneceNote[];

	/**
	 * The textual description for this specified observation.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this specified observation.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A binary file related to this specified observation.
	 * @see https://vocabulary.uncefact.org/relatedBinaryFile
	 */
	relatedBinaryFile?: IUneceBinaryFile[];
}
