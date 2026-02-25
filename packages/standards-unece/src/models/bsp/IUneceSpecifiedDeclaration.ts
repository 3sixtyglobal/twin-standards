// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceObject } from "./IUneceObject.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceSubjectCodeList } from "../lists/uneceSubjectCodeList.js";
import type { UneceSpecifiedDeclarationTypeCodeList } from "../typeCodes/uneceSpecifiedDeclarationTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An act of notification by formal documentation or action, in any form prescribed or accepted, such as a
 * self-declaration.
 * @see https://vocabulary.uncefact.org/SpecifiedDeclaration
 */
export interface IUneceSpecifiedDeclaration {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedDeclaration;

	/**
	 * A referenced standard associated with this specified declaration.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IUneceStandard[];

	/**
	 * A code specifying an assurance level of this specified declaration.
	 * @see https://vocabulary.uncefact.org/assuranceLevelCode
	 */
	assuranceLevelCode?: string;

	/**
	 * A textual description of this specified declaration.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier for this specified declaration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The issue date, time, date time or other date time value for this specified declaration.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * A party that issues this specified declaration.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: IUneceTradeParty[];

	/**
	 * A name, expressed as text, for this specified declaration.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a subject type for this specified declaration.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: UneceSubjectCodeList[];

	/**
	 * The code specifying the type of specified declaration.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSpecifiedDeclarationTypeCodeList | string;

	/**
	 * An object verified for this specified declaration.
	 * @see https://vocabulary.uncefact.org/verifiedObject
	 */
	verifiedObject?: IUneceObject[];
}
