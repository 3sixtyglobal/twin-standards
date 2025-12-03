// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAnimalBatch } from "./IAnimalBatch.js";
import type { IAnimalCertificate } from "./IAnimalCertificate.js";
import type { IAnimalHoldingEvent } from "./IAnimalHoldingEvent.js";
import type { IAnimalIdentity } from "./IAnimalIdentity.js";
import type { IDelimitedPeriod } from "./IDelimitedPeriod.js";
import type { IIndividualTTAnimal } from "./IIndividualTTAnimal.js";
import type { ISpeciesTTAnimal } from "./ISpeciesTTAnimal.js";
import type { ITTLocation } from "./ITTLocation.js";
import type { ITTParty } from "./ITTParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A Track and Trace (TT) animal or a group of animals, such as those kept or raised on a farm, ranch.
 * @see https://vocabulary.uncefact.org/TTAnimal
 */
export interface ITTAnimal extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TTAnimal;

	/**
	 * The holder responsible party for this TT animal.
	 * @see https://vocabulary.uncefact.org/holderResponsibleParty
	 */
	holderResponsibleParty?: ITTParty[];

	/**
	 * A location related to this TT animal.
	 * @see https://vocabulary.uncefact.org/relatedTTLocation
	 */
	relatedTTLocation?: ITTLocation[];

	/**
	 * The code specifying the type of species and subclasses of this TT animal, such as bovine, sheep or salmon.
	 * @see https://vocabulary.uncefact.org/speciesTypeCode
	 */
	speciesTypeCode?: string;

	/**
	 * The animal batch specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalBatch
	 */
	specifiedAnimalBatch?: IAnimalBatch;

	/**
	 * An animal certificate specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalCertificate
	 */
	specifiedAnimalCertificate?: IAnimalCertificate[];

	/**
	 * An animal holding event specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent
	 */
	specifiedAnimalHoldingEvent?: IAnimalHoldingEvent[];

	/**
	 * An animal identity specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalIdentity
	 */
	specifiedAnimalIdentity?: IAnimalIdentity[];

	/**
	 * A delimited period specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedDelimitedPeriod
	 */
	specifiedDelimitedPeriod?: IDelimitedPeriod[];

	/**
	 * The individual tracking animal specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedIndividualTTAnimal
	 */
	specifiedIndividualTTAnimal?: IIndividualTTAnimal[];

	/**
	 * A delimited period specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedPeriod
	 */
	specifiedPeriod?: IDelimitedPeriod[];

	/**
	 * A species specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedSpeciesTTAnimal
	 */
	specifiedSpeciesTTAnimal?: ISpeciesTTAnimal[];
}
