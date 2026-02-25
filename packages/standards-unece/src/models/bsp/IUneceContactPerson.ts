// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceBirthAddress } from "./IUneceBirthAddress.js";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceEmployerIdentity } from "./IUneceEmployerIdentity.js";
import type { IUnecePersonIdentity } from "./IUnecePersonIdentity.js";
import type { IUneceTaxRegistration } from "./IUneceTaxRegistration.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual human being in a position to give assistance or information.
 * @see https://vocabulary.uncefact.org/ContactPerson
 */
export interface IUneceContactPerson {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ContactPerson;

	/**
	 * The alias, expressed as text, reflecting a shortened form of the name of this person or any other name such as a
	 * nickname by which this contact person may be known.
	 * @see https://vocabulary.uncefact.org/alias
	 */
	alias?: string;

	/**
	 * The date, time, date time or other date time value which specifies the birth date for this contact person.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 */
	birthDateTime?: string;

	/**
	 * The name of the place where this contact person was born, expressed as text.
	 * @see https://vocabulary.uncefact.org/birthplaceName
	 */
	birthplaceName?: string;

	/**
	 * The code specifying the title of this contact person, such as Ms., Doctor, Mister.
	 * @see https://vocabulary.uncefact.org/contactPersonTitleCode
	 */
	contactPersonTitleCode?: string;

	/**
	 * The identifier of the residence country of this contact person.
	 * @see https://vocabulary.uncefact.org/countryResidenceCountryId
	 */
	countryResidenceCountryId?: UneceCountryId;

	/**
	 * An email Uniform Resource Identifier (URI) communication for this contact person.
	 * @see https://vocabulary.uncefact.org/emailURICommunication
	 */
	emailURICommunication?: IUneceCommunication[];

	/**
	 * A name, expressed as text, that this contact person shares with members of his/her family.
	 * @see https://vocabulary.uncefact.org/familyName
	 */
	familyName?: string;

	/**
	 * The prefix, expressed as text, that precedes this contact person's family name, such as Van, Von.
	 * @see https://vocabulary.uncefact.org/familyNamePrefix
	 */
	familyNamePrefix?: string;

	/**
	 * Facsimile communication information for this contact person.
	 * @see https://vocabulary.uncefact.org/faxCommunication
	 */
	faxCommunication?: IUneceCommunication[];

	/**
	 * The code specifying the gender of this contact person.
	 * @see https://vocabulary.uncefact.org/genderCode
	 */
	genderCode?: string;

	/**
	 * The name, expressed as text, given to this contact person, usually by parents at birth.
	 * @see https://vocabulary.uncefact.org/givenName
	 */
	givenName?: string;

	/**
	 * An instant messaging communication for this contact person.
	 * @see https://vocabulary.uncefact.org/instantMessagingCommunication
	 */
	instantMessagingCommunication?: IUneceCommunication[];

	/**
	 * The middle name, expressed as text, of this contact person, usually given by parents at birth.
	 * @see https://vocabulary.uncefact.org/middleName
	 */
	middleName?: string;

	/**
	 * The suffix, expressed as text, that follows this contact person's name, such as Junior, Third.
	 * @see https://vocabulary.uncefact.org/nameSuffix
	 */
	nameSuffix?: string;

	/**
	 * A role, expressed as text, for this contact person.
	 * @see https://vocabulary.uncefact.org/role
	 */
	role?: string;

	/**
	 * The birth address specified for this contact person.
	 * @see https://vocabulary.uncefact.org/specifiedBirthAddress
	 */
	specifiedBirthAddress?: IUneceBirthAddress;

	/**
	 * A universal communication specified for this contact person.
	 * @see https://vocabulary.uncefact.org/specifiedCommunication
	 */
	specifiedCommunication?: IUneceCommunication[];

	/**
	 * An employer identity specified for this contact person.
	 * @see https://vocabulary.uncefact.org/specifiedEmployerIdentity
	 */
	specifiedEmployerIdentity?: IUneceEmployerIdentity[];

	/**
	 * The person identity specified for this contact person.
	 * @see https://vocabulary.uncefact.org/specifiedPersonIdentity
	 */
	specifiedPersonIdentity?: IUnecePersonIdentity;

	/**
	 * A tax registration specified for this contact person.
	 * @see https://vocabulary.uncefact.org/specifiedTaxRegistration
	 */
	specifiedTaxRegistration?: IUneceTaxRegistration[];

	/**
	 * Telephone communication information for this contact person.
	 * @see https://vocabulary.uncefact.org/telephoneCommunication
	 */
	telephoneCommunication?: IUneceCommunication[];

	/**
	 * The textual expression of the title associated with this contact person, such as Doctor.
	 * @see https://vocabulary.uncefact.org/title
	 */
	title?: string;

	/**
	 * A website Uniform Resource Identifier (URI) communication for this contact person.
	 * @see https://vocabulary.uncefact.org/websiteURICommunication
	 */
	websiteURICommunication?: IUneceCommunication[];
}
