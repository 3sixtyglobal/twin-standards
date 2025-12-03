// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICommunication } from "./ICommunication.js";
import type { ILaboratoryObservationContact } from "./ILaboratoryObservationContact.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, group, or body having a role in laboratory observations.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationParty
 */
export interface ILaboratoryObservationParty extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationParty;

	/**
	 * The identifier of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The office address of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/officeAddress
	 */
	officeAddress?: ITradeAddress[];

	/**
	 * The person defined as the contact for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/personDefinedContact
	 */
	personDefinedContact?: ILaboratoryObservationContact[];

	/**
	 * The postal address of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * An alternate identifier issued by a third party for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedId
	 */
	thirdPartyIssuedId?: string;

	/**
	 * A third party issued identifier, expressed as text, for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedIdentification
	 */
	thirdPartyIssuedIdentification?: string;

	/**
	 * The website URI (Uniform Resource Identifier) of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/websiteURICommunication
	 */
	websiteURICommunication?: ICommunication[];
}
