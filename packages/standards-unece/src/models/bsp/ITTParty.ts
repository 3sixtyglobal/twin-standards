// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITTAnimal } from "./ITTAnimal.js";
import type { ITTLocation } from "./ITTLocation.js";
import type { PartyTypeCodeList } from "../lists/partyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, group, or body related to a Track and Trace (TT) process.
 * @see https://vocabulary.uncefact.org/TTParty
 */
export interface ITTParty extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTParty;

	/**
	 * An identifier for this TT party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A technical characteristic managed by this TT party.
	 * @see https://vocabulary.uncefact.org/managedCharacteristic
	 */
	managedCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * The name, expressed as text, for this TT party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A code specifying the type of TT party.
	 * @see https://vocabulary.uncefact.org/partyTypeCode
	 */
	partyTypeCode?: PartyTypeCodeList[];

	/**
	 * The identifier for the country of residence for this TT party, such as the country in which a person lives or in which a
	 * corporation has its place of incorporation.
	 * @see https://vocabulary.uncefact.org/residenceCountryId
	 */
	residenceCountryId?: string;

	/**
	 * A tracking animal specified for this TT party.
	 * @see https://vocabulary.uncefact.org/specifiedTTAnimal
	 */
	specifiedTTAnimal?: ITTAnimal[];

	/**
	 * A location specified for this TT party.
	 * @see https://vocabulary.uncefact.org/specifiedTTLocation
	 */
	specifiedTTLocation?: ITTLocation[];

	/**
	 * A code specifying the role of this TT party.
	 * @see https://vocabulary.uncefact.org/tTPartyRoleCode
	 */
	tTPartyRoleCode?: string;

	/**
	 * An identifier of the type for this TT party.
	 * @see https://vocabulary.uncefact.org/typeId
	 */
	typeId?: string;
}
