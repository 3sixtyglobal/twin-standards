// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specified computer file or program stored in a binary format.
 * @see https://vocabulary.uncefact.org/BinaryFile
 */
export interface IUneceBinaryFile {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BinaryFile;

	/**
	 * Access information, expressed as text, for this specified binary file, such as security and download parameters.
	 * @see https://vocabulary.uncefact.org/access
	 */
	access?: string;

	/**
	 * The specified period when access to this binary file is available.
	 * @see https://vocabulary.uncefact.org/accessAvailabilityPeriod
	 */
	accessAvailabilityPeriod?: IUneceSpecifiedPeriod;

	/**
	 * A name of an author, expressed as text, of this specified binary file.
	 * @see https://vocabulary.uncefact.org/authorName
	 */
	authorName?: string;

	/**
	 * The code specifying the character set for this specified binary file.
	 * @see https://vocabulary.uncefact.org/characterSetCode
	 */
	characterSetCode?: string;

	/**
	 * A textual description of this specified binary file.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the encoding of this specified binary file.
	 * @see https://vocabulary.uncefact.org/encodingCode
	 */
	encodingCode?: string;

	/**
	 * The file name, expressed as text, of this specified binary file.
	 * @see https://vocabulary.uncefact.org/fileName
	 */
	fileName?: string;

	/**
	 * A unique identifier for this specified binary file.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A binary object included in this specified binary file.
	 * @see https://vocabulary.uncefact.org/includedBinaryObject
	 */
	includedBinaryObject?: string;

	/**
	 * The code specifying the Multipurpose Internet Mail Extensions (MIME) type for this specified binary file.
	 * @see https://vocabulary.uncefact.org/mIMECode
	 */
	mIMECode?: string;

	/**
	 * The measure of the size of this specified binary file.
	 * @see https://vocabulary.uncefact.org/sizeMeasure
	 */
	sizeMeasure?: IUneceMeasureType;

	/**
	 * A title, expressed as text, for this specified binary file.
	 * @see https://vocabulary.uncefact.org/title
	 */
	title?: string;

	/**
	 * The unique Uniform Resource Identifier (URI) for this specified binary file.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string | IJsonLdValueObject;

	/**
	 * The validity period specified of this binary file.
	 * @see https://vocabulary.uncefact.org/validityPeriod
	 */
	validityPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The unique version identifier for this specified binary file.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string | IJsonLdValueObject;
}
