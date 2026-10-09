// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceObject } from "./IUneceObject.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceSubjectCodeList } from "../lists/uneceSubjectCodeList.js";
import type { UneceLicenceTypeCodeList } from "../typeCodes/uneceLicenceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A permit from an authority to own or use something, do a particular thing, or to conduct a trade.
 * @see https://vocabulary.uncefact.org/Licence
 */
export interface IUneceLicence {
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
	associatedStandard?: IUneceStandard[];

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
	 * @json-schema format:date-time
	 */
	expiryDateTime?: string;

	/**
	 * A party granted this specified licence.
	 * @see https://vocabulary.uncefact.org/grantedParty
	 */
	grantedParty?: IUneceTradeParty[];

	/**
	 * An identifier of this specified licence.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An issue date, time, date time or other date time value of this specified licence.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @json-schema format:date-time
	 */
	issueDateTime?: string;

	/**
	 * The party that issues this specified licence.
	 * @see https://vocabulary.uncefact.org/issuerParty
	 */
	issuerParty?: IUneceTradeParty;

	/**
	 * A name, expressed as text, for this specified licence.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying a subject type for this licence.
	 * @see https://vocabulary.uncefact.org/subjectTypeCode
	 */
	subjectTypeCode?: (UneceSubjectCodeList | string)[];

	/**
	 * A code specifying a type of licence.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceLicenceTypeCodeList | string;

	/**
	 * The indication of whether or not this specified licence is valid.
	 * @see https://vocabulary.uncefact.org/validIndicator
	 */
	validIndicator?: boolean;

	/**
	 * An object verified for this specified licence.
	 * @see https://vocabulary.uncefact.org/verifiedObject
	 */
	verifiedObject?: IUneceObject[];
}
