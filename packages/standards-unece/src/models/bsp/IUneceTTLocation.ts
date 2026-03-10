// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAnimalHoldingEvent } from "./IUneceAnimalHoldingEvent.js";
import type { IUneceGeographicalArea } from "./IUneceGeographicalArea.js";
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTTAnimal } from "./IUneceTTAnimal.js";
import type { IUneceTTParty } from "./IUneceTTParty.js";
import type { UneceLocationFunctionCodeList } from "../lists/uneceLocationFunctionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A physical place related to a Track and Trace (TT) process.
 * @see https://vocabulary.uncefact.org/TTLocation
 */
export interface IUneceTTLocation {
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
	applicableTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

	/**
	 * A textual description of this TT location.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier for this TT location.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The code specifying the type of TT location.
	 * @see https://vocabulary.uncefact.org/locationFunctionTypeCode
	 */
	locationFunctionTypeCode?: UneceLocationFunctionCodeList;

	/**
	 * A name, expressed as text, of this TT location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The party responsible for this TT location.
	 * @see https://vocabulary.uncefact.org/responsibleTTParty
	 */
	responsibleTTParty?: IUneceTTParty;

	/**
	 * An animal holding event specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent
	 */
	specifiedAnimalHoldingEvent?: IUneceAnimalHoldingEvent[];

	/**
	 * The geographical area specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedGeographicalArea
	 */
	specifiedGeographicalArea?: IUneceGeographicalArea;

	/**
	 * An animal specified for this TT location.
	 * @see https://vocabulary.uncefact.org/specifiedTTAnimal
	 */
	specifiedTTAnimal?: IUneceTTAnimal[];
}
