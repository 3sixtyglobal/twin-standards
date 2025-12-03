// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { INote } from "./INote.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A photograph or video still represented as a digital image for electronic sharing.
 * @see https://vocabulary.uncefact.org/Picture
 */
export interface IPicture extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Picture;

	/**
	 * An additional textual description of this photographic picture.
	 * @see https://vocabulary.uncefact.org/additionalDescription
	 */
	additionalDescription?: string;

	/**
	 * The area or location, expressed as text, that is included in this photographic picture.
	 * @see https://vocabulary.uncefact.org/areaIncluded
	 */
	areaIncluded?: string;

	/**
	 * A binary file attached to this photographic picture.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * The name of the copyright owner, expressed as text, for this photographic picture.
	 * @see https://vocabulary.uncefact.org/copyrightOwnerName
	 */
	copyrightOwnerName?: string;

	/**
	 * The textual description of this photographic picture.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Binary object data that is the actual digital image for this photographic picture.
	 * @see https://vocabulary.uncefact.org/digitalImageBinaryObject
	 */
	digitalImageBinaryObject?: string;

	/**
	 * An identifier for this photographic picture.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An intended use, expressed as text, for this photographic picture.
	 * @see https://vocabulary.uncefact.org/intendedUse
	 */
	intendedUse?: string;

	/**
	 * The code specifying the intended use of this photographic picture.
	 * @see https://vocabulary.uncefact.org/intendedUseCode
	 */
	intendedUseCode?: string;

	/**
	 * Linear spatial dimensions of this photographic picture.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The type, expressed as text, of this photographic picture.
	 * @see https://vocabulary.uncefact.org/pictureType
	 */
	pictureType?: string;

	/**
	 * A reference, expressed as text, for this photographic picture.
	 * @see https://vocabulary.uncefact.org/reference
	 */
	reference?: string;

	/**
	 * Rendering information, expressed as text, for this photographic picture.
	 * @see https://vocabulary.uncefact.org/renderingInformation
	 */
	renderingInformation?: string;

	/**
	 * The code specifying the type of resolution for this photographic picture.
	 * @see https://vocabulary.uncefact.org/resolutionTypeCode
	 */
	resolutionTypeCode?: string;

	/**
	 * The value, expressed as a number, for the resolution of this photographic picture.
	 * @see https://vocabulary.uncefact.org/resolutionValueNumeric
	 */
	resolutionValueNumeric?: string;

	/**
	 * A note specified for this photographic picture.
	 * @see https://vocabulary.uncefact.org/specifiedNote
	 */
	specifiedNote?: INote[];

	/**
	 * The subject, expressed as text, of this photographic picture.
	 * @see https://vocabulary.uncefact.org/subject
	 */
	subject?: string;

	/**
	 * The date, time, date time, or other date value of when this photographic picture was created.
	 * @see https://vocabulary.uncefact.org/takenDateTime
	 */
	takenDateTime?: string;

	/**
	 * The name, expressed as text, of the title for this photographic picture.
	 * @see https://vocabulary.uncefact.org/titleName
	 */
	titleName?: string;

	/**
	 * The URI (Uniform Resource Identifier) for this photographic picture.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string;
}
