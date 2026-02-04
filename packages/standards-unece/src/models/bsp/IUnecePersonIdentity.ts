// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProprietaryIdentity } from "./IUneceProprietaryIdentity.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Identification of a person.
 * @see https://vocabulary.uncefact.org/PersonIdentity
 */
export interface IUnecePersonIdentity extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PersonIdentity;

	/**
	 * The alien registration identifier for this person.
	 * @see https://vocabulary.uncefact.org/alienRegistrationId
	 */
	alienRegistrationId: string;

	/**
	 * The drivers licence identifier for this person.
	 * @see https://vocabulary.uncefact.org/driversLicenceId
	 */
	driversLicenceId: string;

	/**
	 * The identity card identifier for this person.
	 * @see https://vocabulary.uncefact.org/identityCardId
	 */
	identityCardId: string;

	/**
	 * The passport identifier for this person.
	 * @see https://vocabulary.uncefact.org/passportId
	 */
	passportId: string;

	/**
	 * The social security identifier for this person.
	 * @see https://vocabulary.uncefact.org/socialSecurityId
	 */
	socialSecurityId: string;

	/**
	 * A proprietary Identity specified for this person.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity: IUneceProprietaryIdentity[];
}
