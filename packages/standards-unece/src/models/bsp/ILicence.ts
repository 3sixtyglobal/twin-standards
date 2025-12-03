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
 * A permit from an authority to own or use something, do a particular thing, or to conduct a trade.
 * @see https://vocabulary.uncefact.org/Licence
 */
export interface ILicence extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Licence;

	/**
	 * A referenced standard associated to this specified licence.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IStandard[];

	/**
	 * A code specifying an assurance level of this specified licence.
	 * @see https://vocabulary.uncefact.org/assuranceLevelCode
	 */
	assuranceLevelCode?: string;

	/**
	 * A textual description of this specified licence.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An expiry date, time, date time or other date time value for this specified licence.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * A party granted this specified licence.
	 * @see https://vocabulary.uncefact.org/grantedParty
	 */
	grantedParty?: ITradeParty[];

	/**
	 * An identifier of this specified licence.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An issue date, time, date time or other date time value of this specified licence.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The party that issues this specified licence.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: ITradeParty[];

	/**
	 * A name, expressed as text, for this specified licence.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a subject type for this licence.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: SubjectCodeList[];

	/**
	 * A code specifying a type of licence.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The indication of whether or not this specified licence is valid.
	 * @see https://vocabulary.uncefact.org/validIndicator
	 */
	validIndicator?: boolean;

	/**
	 * An object verified for this specified licence.
	 * @see https://vocabulary.uncefact.org/verifiedObject
	 */
	verifiedObject?: IObject[];
}
