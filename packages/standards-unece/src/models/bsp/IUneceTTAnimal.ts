// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAnimalBatch } from "./IUneceAnimalBatch.js";
import type { IUneceAnimalCertificate } from "./IUneceAnimalCertificate.js";
import type { IUneceAnimalHoldingEvent } from "./IUneceAnimalHoldingEvent.js";
import type { IUneceAnimalIdentity } from "./IUneceAnimalIdentity.js";
import type { IUneceDelimitedPeriod } from "./IUneceDelimitedPeriod.js";
import type { IUneceIndividualTTAnimal } from "./IUneceIndividualTTAnimal.js";
import type { IUneceSpeciesTTAnimal } from "./IUneceSpeciesTTAnimal.js";
import type { IUneceTTLocation } from "./IUneceTTLocation.js";
import type { IUneceTTParty } from "./IUneceTTParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A Track and Trace (TT) animal or a group of animals, such as those kept or raised on a farm, ranch.
 * @see https://vocabulary.uncefact.org/TTAnimal
 */
export interface IUneceTTAnimal extends IJsonLdNodeObject {
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
	holderResponsibleParty?: IUneceTTParty[];

	/**
	 * A location related to this TT animal.
	 * @see https://vocabulary.uncefact.org/relatedTTLocation
	 */
	relatedTTLocation?: IUneceTTLocation[];

	/**
	 * The code specifying the type of species and subclasses of this TT animal, such as bovine, sheep or salmon.
	 * @see https://vocabulary.uncefact.org/speciesTypeCode
	 */
	speciesTypeCode?: string;

	/**
	 * The animal batch specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalBatch
	 */
	specifiedAnimalBatch?: IUneceAnimalBatch;

	/**
	 * An animal certificate specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalCertificate
	 */
	specifiedAnimalCertificate?: IUneceAnimalCertificate[];

	/**
	 * An animal holding event specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent
	 */
	specifiedAnimalHoldingEvent?: IUneceAnimalHoldingEvent[];

	/**
	 * An animal identity specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedAnimalIdentity
	 */
	specifiedAnimalIdentity?: IUneceAnimalIdentity[];

	/**
	 * A delimited period specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedDelimitedPeriod
	 */
	specifiedDelimitedPeriod?: IUneceDelimitedPeriod[];

	/**
	 * The individual tracking animal specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedIndividualTTAnimal
	 */
	specifiedIndividualTTAnimal?: IUneceIndividualTTAnimal[];

	/**
	 * A delimited period specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedPeriod
	 */
	specifiedPeriod?: IUneceDelimitedPeriod[];

	/**
	 * A species specified for this TT animal.
	 * @see https://vocabulary.uncefact.org/specifiedSpeciesTTAnimal
	 */
	specifiedSpeciesTTAnimal?: IUneceSpeciesTTAnimal[];
}
