// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAllergy } from "./IAllergy.js";
import type { ICarriedEquipment } from "./ICarriedEquipment.js";
import type { ICommunication } from "./ICommunication.js";
import type { IDisability } from "./IDisability.js";
import type { IDurationUnitMeasureType } from "./IDurationUnitMeasureType.js";
import type { IFoodChoice } from "./IFoodChoice.js";
import type { IGuestArrival } from "./IGuestArrival.js";
import type { IGuestHealthIndication } from "./IGuestHealthIndication.js";
import type { ILanguageProficiency } from "./ILanguageProficiency.js";
import type { IPaymentMeans } from "./IPaymentMeans.js";
import type { IPetAnimal } from "./IPetAnimal.js";
import type { IPreference } from "./IPreference.js";
import type { IProtectionMeans } from "./IProtectionMeans.js";
import type { ISpecialQuery } from "./ISpecialQuery.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedNote } from "./ISpecifiedNote.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual guest.
 * @see https://vocabulary.uncefact.org/GuestPerson
 */
export interface IGuestPerson extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GuestPerson;

	/**
	 * A pet animal accompanying this guest person.
	 * @see https://vocabulary.uncefact.org/accompanyingAnimal
	 */
	accompanyingAnimal?: IPetAnimal[];

	/**
	 * A note applicable to this guest person.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: ISpecifiedNote[];

	/**
	 * The date, time, date time, or other date time value which specifies the birth date for this guest.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 */
	birthDateTime?: string;

	/**
	 * A certificate carried by this guest person.
	 * @see https://vocabulary.uncefact.org/carriedCertificate
	 */
	carriedCertificate?: ISpecifiedCertificate[];

	/**
	 * Personal language proficiency skills claimed by this guest person.
	 * @see https://vocabulary.uncefact.org/claimedLanguageProficiency
	 */
	claimedLanguageProficiency?: ILanguageProficiency[];

	/**
	 * A textual description of this guest person.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The measure of the age of this guest person.
	 * @see https://vocabulary.uncefact.org/durationUnitAgeMeasure
	 */
	durationUnitAgeMeasure?: IDurationUnitMeasureType[];

	/**
	 * The code specifying the gender of this guest, such as male, female.
	 * @see https://vocabulary.uncefact.org/genderCode
	 */
	genderCode?: string;

	/**
	 * The identifier for this guest.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The identifier of the language of this guest.
	 * @see https://vocabulary.uncefact.org/languageId
	 */
	languageId?: string;

	/**
	 * A name, expressed as text, by which this guest person is known.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An allergy notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedAllergy
	 */
	notifiedAllergy?: IAllergy[];

	/**
	 * A disability notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedDisability
	 */
	notifiedDisability?: IDisability[];

	/**
	 * A food choice notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedFoodChoice
	 */
	notifiedFoodChoice?: IFoodChoice[];

	/**
	 * An arrival notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedGuestArrival
	 */
	notifiedGuestArrival?: IGuestArrival[];

	/**
	 * A health indication notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedHealthIndication
	 */
	notifiedHealthIndication?: IGuestHealthIndication[];

	/**
	 * An experience item preference notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedPreference
	 */
	notifiedPreference?: IPreference[];

	/**
	 * A disease protection means notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedProtectionMeans
	 */
	notifiedProtectionMeans?: IProtectionMeans[];

	/**
	 * The identifier of the passport of this guest.
	 * @see https://vocabulary.uncefact.org/passportId
	 */
	passportId?: string;

	/**
	 * A special query raised for this guest person.
	 * @see https://vocabulary.uncefact.org/raisedQuery
	 */
	raisedQuery?: ISpecialQuery[];

	/**
	 * The identifier of the residence country of this guest person.
	 * @see https://vocabulary.uncefact.org/residenceCountryId
	 */
	residenceCountryId?: string;

	/**
	 * The code specifying the role of this guest person.
	 * @see https://vocabulary.uncefact.org/roleCode
	 */
	roleCode?: string;

	/**
	 * Carried equipment specified for this guest person.
	 * @see https://vocabulary.uncefact.org/specifiedCarriedEquipment
	 */
	specifiedCarriedEquipment?: ICarriedEquipment[];

	/**
	 * A trade settlement payment means specified for this guest person.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IPaymentMeans[];

	/**
	 * A title, expressed as text, associated with this guest person, such as Doctor, Mr., Mrs., Ms.
	 * @see https://vocabulary.uncefact.org/title
	 */
	title?: string;

	/**
	 * The code specifying the title of this guest person.
	 * @see https://vocabulary.uncefact.org/titleCode
	 */
	titleCode?: string;

	/**
	 * A travel insurance certificate for this guest person.
	 * @see https://vocabulary.uncefact.org/travelInsuranceCertificate
	 */
	travelInsuranceCertificate?: ISpecifiedCertificate[];

	/**
	 * A universal communication used by this guest.
	 * @see https://vocabulary.uncefact.org/usedCommunication
	 */
	usedCommunication?: ICommunication[];
}
