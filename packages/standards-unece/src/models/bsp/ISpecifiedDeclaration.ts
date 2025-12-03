// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IObject } from "./IObject.js";
import type { IStandard } from "./IStandard.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { SubjectCodeList } from "../lists/subjectCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An act of notification by formal documentation or action, in any form prescribed or accepted, such as a
 * self-declaration.
 * @see https://vocabulary.uncefact.org/SpecifiedDeclaration
 */
export interface ISpecifiedDeclaration extends IJsonLdNodeObject {
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
	associatedStandard?: IStandard[];

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
	issuerParty?: ITradeParty[];

	/**
	 * A name, expressed as text, for this specified declaration.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a subject type for this specified declaration.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: SubjectCodeList[];

	/**
	 * The code specifying the type of specified declaration.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * An object verified for this specified declaration.
	 * @see https://vocabulary.uncefact.org/verifiedObject
	 */
	verifiedObject?: IObject[];
}
