// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAllergy } from "./IUneceAllergy.js";
import type { IUneceCarriedEquipment } from "./IUneceCarriedEquipment.js";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUneceDisability } from "./IUneceDisability.js";
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceFoodChoice } from "./IUneceFoodChoice.js";
import type { IUneceGuestArrival } from "./IUneceGuestArrival.js";
import type { IUneceGuestHealthIndication } from "./IUneceGuestHealthIndication.js";
import type { IUneceLanguageProficiency } from "./IUneceLanguageProficiency.js";
import type { IUnecePaymentMeans } from "./IUnecePaymentMeans.js";
import type { IUnecePetAnimal } from "./IUnecePetAnimal.js";
import type { IUnecePreference } from "./IUnecePreference.js";
import type { IUneceProtectionMeans } from "./IUneceProtectionMeans.js";
import type { IUneceSpecialQuery } from "./IUneceSpecialQuery.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedNote } from "./IUneceSpecifiedNote.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual guest.
 * @see https://vocabulary.uncefact.org/GuestPerson
 */
export interface IUneceGuestPerson {
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
	accompanyingAnimal?: IUnecePetAnimal[];

	/**
	 * A note applicable to this guest person.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedNote
	 */
	applicableSpecifiedNote?: IUneceSpecifiedNote[];

	/**
	 * The date, time, date time, or other date time value which specifies the birth date for this guest.
	 * @see https://vocabulary.uncefact.org/birthDateTime
	 * @format date-time
	 */
	birthDateTime?: string;

	/**
	 * A certificate carried by this guest person.
	 * @see https://vocabulary.uncefact.org/carriedCertificate
	 */
	carriedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * Personal language proficiency skills claimed by this guest person.
	 * @see https://vocabulary.uncefact.org/claimedLanguageProficiency
	 */
	claimedLanguageProficiency?: IUneceLanguageProficiency[];

	/**
	 * A textual description of this guest person.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The measure of the age of this guest person.
	 * @see https://vocabulary.uncefact.org/durationUnitAgeMeasure
	 */
	durationUnitAgeMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * The code specifying the gender of this guest, such as male, female.
	 * @see https://vocabulary.uncefact.org/genderCode
	 */
	genderCode?: string;

	/**
	 * The identifier for this guest.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The identifier of the language of this guest.
	 * @see https://vocabulary.uncefact.org/languageId
	 */
	languageId?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, by which this guest person is known.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An allergy notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedAllergy
	 */
	notifiedAllergy?: IUneceAllergy[];

	/**
	 * A disability notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedDisability
	 */
	notifiedDisability?: IUneceDisability[];

	/**
	 * A food choice notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedFoodChoice
	 */
	notifiedFoodChoice?: IUneceFoodChoice[];

	/**
	 * An arrival notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedGuestArrival
	 */
	notifiedGuestArrival?: IUneceGuestArrival[];

	/**
	 * A health indication notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedHealthIndication
	 */
	notifiedHealthIndication?: IUneceGuestHealthIndication[];

	/**
	 * An experience item preference notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedPreference
	 */
	notifiedPreference?: IUnecePreference[];

	/**
	 * A disease protection means notified for this guest person.
	 * @see https://vocabulary.uncefact.org/notifiedProtectionMeans
	 */
	notifiedProtectionMeans?: IUneceProtectionMeans[];

	/**
	 * The identifier of the passport of this guest.
	 * @see https://vocabulary.uncefact.org/passportId
	 */
	passportId?: string | IJsonLdValueObject;

	/**
	 * A special query raised for this guest person.
	 * @see https://vocabulary.uncefact.org/raisedQuery
	 */
	raisedQuery?: IUneceSpecialQuery[];

	/**
	 * The identifier of the residence country of this guest person.
	 * @see https://vocabulary.uncefact.org/residenceCountryId
	 */
	residenceCountryId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the role of this guest person.
	 * @see https://vocabulary.uncefact.org/roleCode
	 */
	roleCode?: string;

	/**
	 * Carried equipment specified for this guest person.
	 * @see https://vocabulary.uncefact.org/specifiedCarriedEquipment
	 */
	specifiedCarriedEquipment?: IUneceCarriedEquipment[];

	/**
	 * A trade settlement payment means specified for this guest person.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IUnecePaymentMeans[];

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
	travelInsuranceCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A universal communication used by this guest.
	 * @see https://vocabulary.uncefact.org/usedCommunication
	 */
	usedCommunication?: IUneceCommunication[];
}
