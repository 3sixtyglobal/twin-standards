// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A person or department that acts as a point of contact for laboratory observations.
 * @see https://vocabulary.uncefact.org/LaboratoryObservationContact
 */
export interface IUneceLaboratoryObservationContact extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LaboratoryObservationContact;

	/**
	 * The name, expressed as text, of the department to which this laboratory observation contact belongs.
	 * @see https://vocabulary.uncefact.org/departmentName
	 */
	departmentName?: string;

	/**
	 * The email address of this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/emailCommunication
	 */
	emailCommunication?: IUneceCommunication;

	/**
	 * The fax number of this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: IUneceCommunication[];

	/**
	 * The identifier of this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The mobile phone number of this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/mobileTelephoneCommunication
	 */
	mobileTelephoneCommunication?: IUneceCommunication;

	/**
	 * The name, expressed as text, of the person for this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/personName
	 */
	personName?: string;

	/**
	 * The telephone number of this laboratory observation contact.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: IUneceCommunication;
}
