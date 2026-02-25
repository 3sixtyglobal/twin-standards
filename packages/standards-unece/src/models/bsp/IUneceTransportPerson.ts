// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAcademicQualification } from "./IUneceAcademicQualification.js";
import type { IUneceAccreditation } from "./IUneceAccreditation.js";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceIllness } from "./IUneceIllness.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUnecePersonalEffects } from "./IUnecePersonalEffects.js";
import type { IUneceStowaway } from "./IUneceStowaway.js";
import type { UneceLanguageId } from "../lists/uneceLanguageId.js";
import type { UnecePartyRoleCodeList } from "../lists/unecePartyRoleCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A transport related person, such as a member of a crew or a passenger.
 * @see https://vocabulary.uncefact.org/TransportPerson
 */
export interface IUneceTransportPerson {
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
	attainedAcademicQualification?: IUneceAcademicQualification[];

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
	declaredPersonalEffects?: IUnecePersonalEffects[];

	/**
	 * A date, time, date time, or other date time value that this person disembarked from a means of transport.
	 * @see https://vocabulary.uncefact.org/disembarkationDateTime
	 */
	disembarkationDateTime?: string;

	/**
	 * A disembarkation location for this transport person.
	 * @see https://vocabulary.uncefact.org/disembarkationLocation
	 */
	disembarkationLocation?: IUneceLogisticsLocation[];

	/**
	 * The email URI (Uniform Resource Identifier) communication for this transport person.
	 * @see https://vocabulary.uncefact.org/emailURICommunication
	 */
	emailURICommunication?: IUneceCommunication[];

	/**
	 * A date, time, date time, or other date time value that this person embarked upon a means of transport.
	 * @see https://vocabulary.uncefact.org/embarkationDateTime
	 */
	embarkationDateTime?: string;

	/**
	 * An embarkation location for this transport person.
	 * @see https://vocabulary.uncefact.org/embarkationLocation
	 */
	embarkationLocation?: IUneceLogisticsLocation[];

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
	identifiedStowaway?: IUneceStowaway[];

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
	landlineTelephoneCommunication?: IUneceCommunication[];

	/**
	 * Mobile telephone communication information for this transport person.
	 * @see https://vocabulary.uncefact.org/mobileTelephoneCommunication
	 */
	mobileTelephoneCommunication?: IUneceCommunication[];

	/**
	 * A country that constitutes a nationality by origin, birth, or naturalization for this transport person.
	 * @see https://vocabulary.uncefact.org/nationalityCountry
	 */
	nationalityCountry?: IUneceCountry[];

	/**
	 * The indication of whether or not this person is onboard a means of transport.
	 * @see https://vocabulary.uncefact.org/onboardIndicator
	 */
	onboardIndicator?: boolean;

	/**
	 * A code specifying a role of this transport person.
	 * @see https://vocabulary.uncefact.org/partyRoleCode
	 */
	partyRoleCode?: UnecePartyRoleCodeList[];

	/**
	 * A passenger identifier for this transport person.
	 * @see https://vocabulary.uncefact.org/passengerId
	 */
	passengerId?: string;

	/**
	 * An MDH (Maritime Declaration of Health) reported illness or disease for this transport person.
	 * @see https://vocabulary.uncefact.org/reportedIllness
	 */
	reportedIllness?: IUneceIllness[];

	/**
	 * A role, expressed as text, of this transport person.
	 * @see https://vocabulary.uncefact.org/role
	 */
	role?: string;

	/**
	 * A certified accreditation specific to this transport person.
	 * @see https://vocabulary.uncefact.org/specificAccreditation
	 */
	specificAccreditation?: IUneceAccreditation[];

	/**
	 * A unique identifier of a language related to this transport person, such as their spoken or correspondence language.
	 * @see https://vocabulary.uncefact.org/transportPersonLanguageId
	 */
	transportPersonLanguageId?: UneceLanguageId[];

	/**
	 * The name or set of names, expressed as text, by which this transport person is known.
	 * @see https://vocabulary.uncefact.org/transportPersonName
	 */
	transportPersonName?: string;

	/**
	 * A referenced travel identity document for this transport person.
	 * @see https://vocabulary.uncefact.org/travelIdentityDocument
	 */
	travelIdentityDocument?: IUneceDocument[];

	/**
	 * A referenced travel visa document for this transport person.
	 * @see https://vocabulary.uncefact.org/travelVisaDocument
	 */
	travelVisaDocument?: IUneceDocument[];
}
