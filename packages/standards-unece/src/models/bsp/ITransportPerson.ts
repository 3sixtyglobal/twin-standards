// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAcademicQualification } from "./IAcademicQualification.js";
import type { IAccreditation } from "./IAccreditation.js";
import type { ICommunication } from "./ICommunication.js";
import type { ICountry } from "./ICountry.js";
import type { IDocument } from "./IDocument.js";
import type { IIllness } from "./IIllness.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IPersonalEffects } from "./IPersonalEffects.js";
import type { IStowaway } from "./IStowaway.js";
import type { LanguageId } from "../lists/languageId.js";
import type { PartyRoleCodeList } from "../lists/partyRoleCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A transport related person, such as a member of a crew or a passenger.
 * @see https://vocabulary.uncefact.org/TransportPerson
 */
export interface ITransportPerson extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportPerson;

	/**
	 * An academic qualification attained by this transport person.
	 * @see https://vocabulary.uncefact.org/attainedAcademicQualification
	 */
	attainedAcademicQualification?: IAcademicQualification[];

	/**
	 * The identifier of the birth country of this transport person.
	 * @see https://vocabulary.uncefact.org/birthCountryId
	 */
	birthCountryId?: string;

	/**
	 * The birth date of this transport person.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 */
	birthDateTime?: string;

	/**
	 * The name, expressed as text, of the place where this transport person was born.
	 * @see https://vocabulary.uncefact.org/birthplaceName
	 */
	birthplaceName?: string;

	/**
	 * A booking identifier for this transport person.
	 * @see https://vocabulary.uncefact.org/bookingId
	 */
	bookingId?: string;

	/**
	 * A cabin identifier for this transport person.
	 * @see https://vocabulary.uncefact.org/cabinId
	 */
	cabinId?: string;

	/**
	 * A code specifying a category for this transport person, such as a member of crew or passenger.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * Personal effects use declared by a transport person.
	 * @see https://vocabulary.uncefact.org/declaredPersonalEffects
	 */
	declaredPersonalEffects?: IPersonalEffects[];

	/**
	 * A date, time, date time, or other date time value that this person disembarked from a means of transport.
	 * @see https://vocabulary.uncefact.org/disembarkationDateTime
	 */
	disembarkationDateTime?: string;

	/**
	 * A disembarkation location for this transport person.
	 * @see https://vocabulary.uncefact.org/disembarkationLocation
	 */
	disembarkationLocation?: ILogisticsLocation[];

	/**
	 * The email URI (Uniform Resource Identifier) communication for this transport person.
	 * @see https://vocabulary.uncefact.org/emailURICommunication
	 */
	emailURICommunication?: ICommunication[];

	/**
	 * A date, time, date time, or other date time value that this person embarked upon a means of transport.
	 * @see https://vocabulary.uncefact.org/embarkationDateTime
	 */
	embarkationDateTime?: string;

	/**
	 * An embarkation location for this transport person.
	 * @see https://vocabulary.uncefact.org/embarkationLocation
	 */
	embarkationLocation?: ILogisticsLocation[];

	/**
	 * A family name, expressed as text, for this transport person.
	 * @see https://vocabulary.uncefact.org/familyName
	 */
	familyName?: string;

	/**
	 * A code specifying the gender of this transport person.
	 * @see https://vocabulary.uncefact.org/genderCode
	 */
	genderCode?: string;

	/**
	 * A given name, expressed as text, for this transport person.
	 * @see https://vocabulary.uncefact.org/givenName
	 */
	givenName?: string;

	/**
	 * A transport person identified as a found stowaway.
	 * @see https://vocabulary.uncefact.org/identifiedStowaway
	 */
	identifiedStowaway?: IStowaway[];

	/**
	 * The unique identifier for this transport person.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The indication of whether or not this transport person is in transit.
	 * @see https://vocabulary.uncefact.org/inTransitIndicator
	 */
	inTransitIndicator?: boolean;

	/**
	 * Landline telephone communication information for this transport person.
	 * @see https://vocabulary.uncefact.org/landlineTelephoneCommunication
	 */
	landlineTelephoneCommunication?: ICommunication[];

	/**
	 * Mobile telephone communication information for this transport person.
	 * @see https://vocabulary.uncefact.org/mobileTelephoneCommunication
	 */
	mobileTelephoneCommunication?: ICommunication[];

	/**
	 * A country that constitutes a nationality by origin, birth, or naturalization for this transport person.
	 * @see https://vocabulary.uncefact.org/nationalityCountry
	 */
	nationalityCountry?: ICountry[];

	/**
	 * The indication of whether or not this person is onboard a means of transport.
	 * @see https://vocabulary.uncefact.org/onboardIndicator
	 */
	onboardIndicator?: boolean;

	/**
	 * A code specifying a role of this transport person.
	 * @see https://vocabulary.uncefact.org/partyRoleCode
	 */
	partyRoleCode?: PartyRoleCodeList[];

	/**
	 * A passenger identifier for this transport person.
	 * @see https://vocabulary.uncefact.org/passengerId
	 */
	passengerId?: string;

	/**
	 * An MDH (Maritime Declaration of Health) reported illness or disease for this transport person.
	 * @see https://vocabulary.uncefact.org/reportedIllness
	 */
	reportedIllness?: IIllness[];

	/**
	 * A role, expressed as text, of this transport person.
	 * @see https://vocabulary.uncefact.org/role
	 */
	role?: string;

	/**
	 * A certified accreditation specific to this transport person.
	 * @see https://vocabulary.uncefact.org/specificAccreditation
	 */
	specificAccreditation?: IAccreditation[];

	/**
	 * A unique identifier of a language related to this transport person, such as their spoken or correspondence language.
	 * @see https://vocabulary.uncefact.org/transportPersonLanguageId
	 */
	transportPersonLanguageId?: LanguageId[];

	/**
	 * The name or set of names, expressed as text, by which this transport person is known.
	 * @see https://vocabulary.uncefact.org/transportPersonName
	 */
	transportPersonName?: string;

	/**
	 * A referenced travel identity document for this transport person.
	 * @see https://vocabulary.uncefact.org/travelIdentityDocument
	 */
	travelIdentityDocument?: IDocument[];

	/**
	 * A referenced travel visa document for this transport person.
	 * @see https://vocabulary.uncefact.org/travelVisaDocument
	 */
	travelVisaDocument?: IDocument[];
}
