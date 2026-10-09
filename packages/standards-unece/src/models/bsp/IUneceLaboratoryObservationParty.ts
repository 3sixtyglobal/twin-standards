// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceLaboratoryObservationContact } from "./IUneceLaboratoryObservationContact.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, group, or body having a role in laboratory observations.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationParty
 */
export interface IUneceLaboratoryObservationParty {
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
	identifier: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The office address of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/officeAddress
	 */
	officeAddress?: IUneceTradeAddress;

	/**
	 * The person defined as the contact for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/personDefinedContact
	 */
	personDefinedContact?: IUneceLaboratoryObservationContact;

	/**
	 * The postal address of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: IUneceTradeAddress;

	/**
	 * An alternate identifier issued by a third party for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedId
	 */
	thirdPartyIssuedId?: string | IJsonLdValueObject;

	/**
	 * A third party issued identifier, expressed as text, for this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedIdentification
	 */
	thirdPartyIssuedIdentification?: string;

	/**
	 * The website URI (Uniform Resource Identifier) of this laboratory observation party.
	 * @see https://vocabulary.uncefact.org/websiteURICommunication
	 */
	websiteURICommunication?: IUneceCommunication;
}
