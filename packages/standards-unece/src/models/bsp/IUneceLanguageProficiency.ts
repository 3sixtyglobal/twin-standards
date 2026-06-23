// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceLanguageCodeList } from "../lists/uneceLanguageCodeList.js";
import type { UneceLanguageId } from "../lists/uneceLanguageId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Skills in any principal method of human communication, consisting of words used in a structured and conventional way and
 * conveyed by speech, writing, or gesture.
 * @see https://vocabulary.uncefact.org/LanguageProficiency
 */
export interface IUneceLanguageProficiency {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LanguageProficiency;

	/**
	 * A name, expressed as text, of the language for which this language proficiency is defined.
	 * @see https://vocabulary.uncefact.org/languageName
	 */
	languageName?: string;

	/**
	 * The code specifying the language for this personal language proficiency.
	 * @see https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageCode
	 */
	personalLanguageProficiencyLanguageCode?: UneceLanguageCodeList;

	/**
	 * The identifier of the language for which this personal language proficiency is defined.
	 * @see https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageId
	 */
	personalLanguageProficiencyLanguageId?: UneceLanguageId | string | IJsonLdValueObject;

	/**
	 * The code specifying the personal reading proficiency level in this language.
	 * @see https://vocabulary.uncefact.org/readingLevelCode
	 */
	readingLevelCode?: string;

	/**
	 * The code specifying the personal speaking proficiency level in this language.
	 * @see https://vocabulary.uncefact.org/speakingLevelCode
	 */
	speakingLevelCode?: string;

	/**
	 * The code specifying the personal writing proficiency level in this language.
	 * @see https://vocabulary.uncefact.org/writingLevelCode
	 */
	writingLevelCode?: string;
}
