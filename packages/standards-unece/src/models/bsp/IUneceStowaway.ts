// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceLanguageProficiency } from "./IUneceLanguageProficiency.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { IUneceTradeContact } from "./IUneceTradeContact.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A person who is found hiding aboard a ship or other conveyance, such as in order to obtain free passage or elude
 * detection.
 * @see https://vocabulary.uncefact.org/Stowaway
 */
export interface IUneceStowaway {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Stowaway;

	/**
	 * Care, expressed as text, that has been provided to this found stowaway.
	 * @see https://vocabulary.uncefact.org/careProvided
	 */
	careProvided?: string;

	/**
	 * Personal language proficiency skills claimed by this found stowaway.
	 * @see https://vocabulary.uncefact.org/claimedLanguageProficiency
	 */
	claimedLanguageProficiency?: IUneceLanguageProficiency[];

	/**
	 * An identifier of a nationality claimed by this found stowaway.
	 * @see https://vocabulary.uncefact.org/countryClaimedNationalityId
	 */
	countryClaimedNationalityId?: UneceCountryId[];

	/**
	 * A date, time, date time, or other date time value on which this found stowaway is discovered.
	 * @see https://vocabulary.uncefact.org/discoveredDateTime
	 */
	discoveredDateTime?: string;

	/**
	 * A logistics location where a found stowaway embarked upon the transport means on which they were discovered.
	 * @see https://vocabulary.uncefact.org/embarkationLocation
	 */
	embarkationLocation?: IUneceLogisticsLocation[];

	/**
	 * A home address for this found stowaway.
	 * @see https://vocabulary.uncefact.org/homeAddress
	 */
	homeAddress?: IUneceTradeAddress[];

	/**
	 * A code specifying a location of an intended destination for this found stowaway.
	 * @see https://vocabulary.uncefact.org/intendedDestinationLocationCode
	 */
	intendedDestinationLocationCode?: string;

	/**
	 * A name, expressed as text, of an intended destination for this found stowaway.
	 * @see https://vocabulary.uncefact.org/intendedDestinationName
	 */
	intendedDestinationName?: string;

	/**
	 * A date, time, date time, or other date time value on which this found stowaway is interviewed.
	 * @see https://vocabulary.uncefact.org/interviewDateTime
	 */
	interviewDateTime?: string;

	/**
	 * A personal statement, expressed as text, made by this found stowaway.
	 * @see https://vocabulary.uncefact.org/personalStatement
	 */
	personalStatement?: string;

	/**
	 * A binary file providing a photographic picture of this found stowaway.
	 * @see https://vocabulary.uncefact.org/photographicPictureBinaryFile
	 */
	photographicPictureBinaryFile?: IUneceBinaryFile[];

	/**
	 * The physical description, expressed as text, of this found stowaway.
	 * @see https://vocabulary.uncefact.org/physicalDescription
	 */
	physicalDescription?: string;

	/**
	 * A list of possessions, expressed as text, for this found stowaway.
	 * @see https://vocabulary.uncefact.org/possessionList
	 */
	possessionList?: string;

	/**
	 * A person or department that acts as a point of contact with or for this found stowaway.
	 * @see https://vocabulary.uncefact.org/providedContact
	 */
	providedContact?: IUneceTradeContact[];

	/**
	 * A name, expressed as text, as provided by this found stowaway.
	 * @see https://vocabulary.uncefact.org/providedName
	 */
	providedName?: string;

	/**
	 * A statement, expressed as text, about the stowaway made by the person responsible for operating the means of transport
	 * on which the stowaway was found.
	 * @see https://vocabulary.uncefact.org/responsiblePersonStatement
	 */
	responsiblePersonStatement?: string;

	/**
	 * A method, expressed as text, of embarkation stated by this found stowaway.
	 * @see https://vocabulary.uncefact.org/statedEmbarkationMethod
	 */
	statedEmbarkationMethod?: string;

	/**
	 * A reason, expressed as text, for embarkation stated by this found stowaway.
	 * @see https://vocabulary.uncefact.org/statedEmbarkationReason
	 */
	statedEmbarkationReason?: string;
}
