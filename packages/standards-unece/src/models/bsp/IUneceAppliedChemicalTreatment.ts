// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAuthentication } from "./IUneceAuthentication.js";
import type { IUneceChemical } from "./IUneceChemical.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSpecifiedTemperature } from "./IUneceSpecifiedTemperature.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A process of applying a chemical, physical, or biological agent to an object.
 * @see https://vocabulary.uncefact.org/AppliedChemicalTreatment
 */
export interface IUneceAppliedChemicalTreatment {
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
	applicableSpecifiedTemperature?: IUneceSpecifiedTemperature;

	/**
	 * A period during which this chemical treatment is applied.
	 * @see https://vocabulary.uncefact.org/appliedPeriod
	 */
	appliedPeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A measure of the chemical concentration of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/chemicalConcentrationMeasure
	 */
	chemicalConcentrationMeasure?: IUneceMeasureType[];

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
	resultAuthentication?: IUneceAuthentication;

	/**
	 * The note describing the results of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/resultNote
	 */
	resultNote?: IUneceNote;

	/**
	 * A measure of the chemical concentration of this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/unitChemicalConcentrationMeasure
	 */
	unitChemicalConcentrationMeasure?: IUneceUnitMeasureType[];

	/**
	 * A chemical used during this applied chemical treatment.
	 * @see https://vocabulary.uncefact.org/usedChemical
	 */
	usedChemical?: IUneceChemical[];
}
