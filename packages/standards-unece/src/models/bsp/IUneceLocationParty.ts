// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { IUneceTradeContact } from "./IUneceTradeContact.js";
import type { IUneceTransportPerson } from "./IUneceTransportPerson.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceLocationPartyTypeCodeList } from "../typeCodes/uneceLocationPartyTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual, a group, or a body having a role related to a location.
 * @see https://vocabulary.uncefact.org/LocationParty
 */
export interface IUneceLocationParty extends IJsonLdNodeObject {
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
	countryId?: UneceCountryId;

	/**
	 * A trade contact defined for this location party.
	 * @see https://vocabulary.uncefact.org/definedContact
	 */
	definedContact?: IUneceTradeContact[];

	/**
	 * A textual description of this location party.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Fax communication information for this location party.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: IUneceCommunication[];

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
	postalAddress?: IUneceTradeAddress[];

	/**
	 * A transport service provided by this location party.
	 * @see https://vocabulary.uncefact.org/providedService
	 */
	providedService?: IUneceService[];

	/**
	 * A logistics location or place specified for this party.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: IUneceLogisticsLocation;

	/**
	 * A transport related person specified for this location party.
	 * @see https://vocabulary.uncefact.org/specifiedTransportPerson
	 */
	specifiedTransportPerson?: IUneceTransportPerson;

	/**
	 * Telephone communication information for this location party.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: IUneceCommunication;

	/**
	 * A code specifying the type of location party that is independent of its role.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceLocationPartyTypeCodeList | string;

	/**
	 * Uniform Resource Identifier (URI) communication information for this location party, such as a web or email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: IUneceCommunication;
}
