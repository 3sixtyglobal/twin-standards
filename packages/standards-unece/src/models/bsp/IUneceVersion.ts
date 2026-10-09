// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific variant of a document.
 * @see https://vocabulary.uncefact.org/Version
 */
export interface IUneceVersion {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Version;

	/**
	 * The unique identifier for this document version.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date and time or other date time value of issue of this document version.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @json-schema format:date-time
	 */
	issueDateTime?: string;

	/**
	 * The name, expressed as text, of this document version.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
