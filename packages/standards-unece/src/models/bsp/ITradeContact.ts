// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICommunication } from "./ICommunication.js";
import type { IContactPerson } from "./IContactPerson.js";
import type { INote } from "./INote.js";
import type { ISpecifiedLocation } from "./ISpecifiedLocation.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { ContactTypeCodeList } from "../lists/contactTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A person or a department that acts as a point of contact with another person or department in a trading relationship.
 * @see https://vocabulary.uncefact.org/TradeContact
 */
export interface ITradeContact extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeContact;

	/**
	 * An accessible location specified for this trade contact.
	 * @see https://vocabulary.uncefact.org/accessibleLocation
	 */
	accessibleLocation?: ISpecifiedLocation[];

	/**
	 * The name, expressed as text, of the authorized person for this trade contact.
	 * @see https://vocabulary.uncefact.org/authorizedPersonName
	 */
	authorizedPersonName?: string;

	/**
	 * The code specifying the type of trade contact.
	 * @see https://vocabulary.uncefact.org/contactTypeCode
	 */
	contactTypeCode?: ContactTypeCodeList[];

	/**
	 * A name, expressed as text, of the department to which this trade contact belongs within an organization.
	 * @see https://vocabulary.uncefact.org/departmentName
	 */
	departmentName?: string;

	/**
	 * A textual description of this trade contact.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The direct telephone communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/directTelephoneCommunication
	 */
	directTelephoneCommunication?: ICommunication[];

	/**
	 * Electronic Data Interchange (EDI) communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/eDICommunication
	 */
	eDICommunication?: ICommunication[];

	/**
	 * The email URI communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/emailURICommunication
	 */
	emailURICommunication?: ICommunication[];

	/**
	 * Fax communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: ICommunication[];

	/**
	 * The unique identifier for this trade contact.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Instant messaging communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/instantMessagingCommunication
	 */
	instantMessagingCommunication?: ICommunication[];

	/**
	 * A job title, position or designation, expressed as text, of this trade contact within an organization, such as Director,
	 * Software Engineer, Purchasing Manager.
	 * @see https://vocabulary.uncefact.org/jobTitle
	 */
	jobTitle?: string;

	/**
	 * The mobile telephone communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/mobileTelephoneCommunication
	 */
	mobileTelephoneCommunication?: ICommunication[];

	/**
	 * A unique identifier for this trade contact person.
	 * @see https://vocabulary.uncefact.org/personId
	 */
	personId?: string;

	/**
	 * A name, expressed as text, of this trade contact person.
	 * @see https://vocabulary.uncefact.org/personName
	 */
	personName?: string;

	/**
	 * Postal address information for this trade contact.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * A responsibility, expressed as text, of this trade contact.
	 * @see https://vocabulary.uncefact.org/responsibility
	 */
	responsibility?: string;

	/**
	 * The contact person specified for this trade contact.
	 * @see https://vocabulary.uncefact.org/specifiedContactPerson
	 */
	specifiedContactPerson?: IContactPerson[];

	/**
	 * A note specified for this trade contact.
	 * @see https://vocabulary.uncefact.org/specifiedNote
	 */
	specifiedNote?: INote[];

	/**
	 * Telephone communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: ICommunication;

	/**
	 * Telegraphy (Telex) communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/telexCommunication
	 */
	telexCommunication?: ICommunication[];

	/**
	 * Uniform Resource Identifier (URI) communication information for this trade contact, such as a web or an email address.
	 * @see https://vocabulary.uncefact.org/uRICommunication
	 */
	uRICommunication?: ICommunication[];

	/**
	 * A communication used by this trade contact.
	 * @see https://vocabulary.uncefact.org/usedCommunication
	 */
	usedCommunication?: ICommunication[];

	/**
	 * Voice Over Internet Protocol (VOIP) communication information for this trade contact.
	 * @see https://vocabulary.uncefact.org/vOIPCommunication
	 */
	vOIPCommunication?: ICommunication[];
}
