// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceSegmentTypeCodeList } from "../typeCodes/uneceSegmentTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The parts into which a segment is or may be divided.
 * @see https://vocabulary.uncefact.org/Segment
 */
export interface IUneceSegment {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Segment;

	/**
	 * The identifier of this section segment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The image, expressed as a binary object, for this section segment.
	 * @see https://vocabulary.uncefact.org/imageBinaryObject
	 * @json-schema contentEncoding:base64
	 */
	imageBinaryObject?: string;

	/**
	 * Information, expressed as text, in this section segment.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The code specifying the type of section segment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSegmentTypeCodeList | string;
}
