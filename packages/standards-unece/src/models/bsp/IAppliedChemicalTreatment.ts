// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAuthentication } from "./IAuthentication.js";
import type { IChemical } from "./IChemical.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { INote } from "./INote.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISpecifiedTemperature } from "./ISpecifiedTemperature.js";
import type { IUnitMeasureType } from "./IUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A process of applying a chemical, physical, or biological agent to an object.
 * @see https://vocabulary.uncefact.org/AppliedChemicalTreatment
 */
export interface IAppliedChemicalTreatment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AppliedChemicalTreatment;

	/**
	 * The specified temperature applicable for this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedTemperature
	 */
	applicableSpecifiedTemperature?: ISpecifiedTemperature[];

	/**
	 * A period during which this chemical treatment is applied.
	 * @see https://vocabulary.uncefact.org/appliedPeriod
	 */
	appliedPeriod?: ISpecifiedPeriod[];

	/**
	 * A measure of the chemical concentration of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/chemicalConcentrationMeasure
	 */
	chemicalConcentrationMeasure?: IMeasureType[];

	/**
	 * The name, expressed as text, of the method of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/methodName
	 */
	methodName?: string;

	/**
	 * A name, expressed as text, of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The date time of the occurrence of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/occurrenceDateTime
	 */
	occurrenceDateTime?: string;

	/**
	 * The authentication of the results of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/resultAuthentication
	 */
	resultAuthentication?: IAuthentication[];

	/**
	 * The note describing the results of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/resultNote
	 */
	resultNote?: INote[];

	/**
	 * A measure of the chemical concentration of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/unitChemicalConcentrationMeasure
	 */
	unitChemicalConcentrationMeasure?: IUnitMeasureType[];

	/**
	 * A chemical used during this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	usedChemical?: IChemical[];
}
