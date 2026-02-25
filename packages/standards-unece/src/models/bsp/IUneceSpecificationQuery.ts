// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceSpecificationQueryTypeCodeList } from "../typeCodes/uneceSpecificationQueryTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A formally raised question or request for information about this specification.
 * @see https://vocabulary.uncefact.org/SpecificationQuery
 */
export interface IUneceSpecificationQuery {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecificationQuery;

	/**
	 * The content, expressed as text, of this specification query.
	 * @see https://vocabulary.uncefact.org/content
	 */
	content: string;

	/**
	 * The code specifying the contractual language for this specification query.
	 * @see https://vocabulary.uncefact.org/contractualLanguageCode
	 */
	contractualLanguageCode?: string;

	/**
	 * The unique identifier for this specification query.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The code specifying the type of specification query.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSpecificationQueryTypeCodeList | string;
}
