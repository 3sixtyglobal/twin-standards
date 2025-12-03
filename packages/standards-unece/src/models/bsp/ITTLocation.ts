// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAnimalHoldingEvent } from "./IAnimalHoldingEvent.js";
import type { IGeographicalArea } from "./IGeographicalArea.js";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITTAnimal } from "./ITTAnimal.js";
import type { ITTParty } from "./ITTParty.js";
import type { LocationFunctionCodeList } from "../lists/locationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical place related to a Track and Trace (TT) process.
 * @see https://vocabulary.uncefact.org/TTLocation
 */
export interface ITTLocation extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTLocation;

	/**
	 * A technical characteristic applicable to this TT location.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * A textual description of this TT location.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this TT location.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the type of TT location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: LocationFunctionCodeList[];

	/**
	 * A name, expressed as text, of this TT location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The party responsible for this TT location.
	 * @see https://vocabulary.uncefact.org/responsibleTTParty
	 */
	responsibleTTParty?: ITTParty[];

	/**
	 * An animal holding event specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent
	 */
	specifiedAnimalHoldingEvent?: IAnimalHoldingEvent[];

	/**
	 * The geographical area specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedGeographicalArea
	 */
	specifiedGeographicalArea?: IGeographicalArea[];

	/**
	 * An animal specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedTTAnimal
	 */
	specifiedTTAnimal?: ITTAnimal[];
}
