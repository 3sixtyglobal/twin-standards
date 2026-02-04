// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceObject } from "./IUneceObject.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSupplyChainTradeTransaction } from "./IUneceSupplyChainTradeTransaction.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The evaluation of an object, such as a product, process, or organization, with respect to the object's worth or
 * condition.
 * @see https://vocabulary.uncefact.org/Assessment
 */
export interface IUneceAssessment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Assessment;

	/**
	 * A referenced standard applicable to this specified assessment.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this specified assessment.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * An object assessed for this specified assessment.
	 * @see https://vocabulary.uncefact.org/assessedObject
	 */
	assessedObject?: IUneceObject[];

	/**
	 * The assessor party for this specified assessment.
	 * @see https://vocabulary.uncefact.org/assessorParty
	 */
	assessorParty?: IUneceTradeParty;

	/**
	 * A binary file associated with this specified assessment.
	 * @see https://vocabulary.uncefact.org/associatedBinaryFile
	 */
	associatedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The code specifying the assurance level, such as verified by second party or third party, for this specified assessment.
	 * @see https://vocabulary.uncefact.org/assuranceLevelCode
	 */
	assuranceLevelCode?: string;

	/**
	 * The code specifying the category for this specified assessment.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The date, time, date time or other date time value for the end of this specified assessment.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * A name, expressed as text, for this specified assessment.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A supply chain trade transaction related to this specified assessment.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: IUneceSupplyChainTradeTransaction[];

	/**
	 * The date, time, date time or other date time value of the report of this specified assessment.
	 * @see https://vocabulary.uncefact.org/reportDateTime
	 */
	reportDateTime?: string;

	/**
	 * The report identifier for this specified assessment.
	 * @see https://vocabulary.uncefact.org/reportId
	 */
	reportId?: string;

	/**
	 * The indication of whether or not this specified assessment is self assessed.
	 * @see https://vocabulary.uncefact.org/selfAssessedIndicator
	 */
	selfAssessedIndicator?: boolean;

	/**
	 * The date, time, date time or other date time value for the start of this specified assessment.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;

	/**
	 * The code specifying the status of this specified assessment.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of specified assessment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The indication of whether or not this specified assessment is verified.
	 * @see https://vocabulary.uncefact.org/verifiedIndicator
	 */
	verifiedIndicator?: boolean;

	/**
	 * A verifier party for this specified assessment.
	 * @see https://vocabulary.uncefact.org/verifierParty
	 */
	verifierParty?: IUneceTradeParty[];
}
