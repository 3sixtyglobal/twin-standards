// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICommunication } from "./ICommunication.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IService } from "./IService.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { ITradeContact } from "./ITradeContact.js";
import type { ITransportPerson } from "./ITransportPerson.js";
import type { CountryId } from "../lists/countryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role related to a location.
 * @see https://vocabulary.uncefact.org/LocationParty
 */
export interface ILocationParty extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LocationParty;

	/**
	 * A unique country identifier for this location party.
	 * @see https://vocabulary.uncefact.org/countryId
	 */
	countryId?: CountryId;

	/**
	 * A trade contact defined for this location party.
	 * @see https://vocabulary.uncefact.org/definedContact
	 */
	definedContact?: ITradeContact[];

	/**
	 * A textual description of this location party.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Fax communication information for this location party.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: ICommunication[];

	/**
	 * A unique identifier of this location party.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a role of this location party.
	 * @see https://vocabulary.uncefact.org/locationPartyRoleCode
	 */
	locationPartyRoleCode?: string;

	/**
	 * A name, expressed as text, for this location party.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A postal address for this location party.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * A transport service provided by this location party.
	 * @see https://vocabulary.uncefact.org/providedService
	 */
	providedService?: IService[];

	/**
	 * A logistics location or place specified for this party.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A transport related person specified for this location party.
	 * @see https://vocabulary.uncefact.org/specifiedTransportPerson
	 */
	specifiedTransportPerson?: ITransportPerson[];

	/**
	 * Telephone communication information for this location party.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: ICommunication;

	/**
	 * A code specifying the type of location party that is independent of its role.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * Uniform Resource Identifier (URI) communication information for this location party, such as a web or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: ICommunication[];
}
