// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceVersion } from "./IUneceVersion.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A feature that is fixed for a particular document context.
 * @see https://vocabulary.uncefact.org/DocumentContextParameter
 */
export interface IUneceDocumentContextParameter {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.DocumentContextParameter;

	/**
	 * The unique identifier of this document context parameter.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The document version specified for this document context parameter.
	 * @see https://vocabulary.uncefact.org/specifiedVersion
	 */
	specifiedVersion?: IUneceVersion;

	/**
	 * The value, expressed as text, of this document context parameter.
	 * @see https://vocabulary.uncefact.org/value
	 */
	value?: string;
}
