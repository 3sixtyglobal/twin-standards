// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceSpecifiedQualification } from "./IUneceSpecifiedQualification.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual human being who conducts an inspection.
 * @see https://vocabulary.uncefact.org/InspectionPerson
 */
export interface IUneceInspectionPerson extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InspectionPerson;

	/**
	 * The specified qualification attained by this inspection person.
	 * @see https://vocabulary.uncefact.org/attainedSpecifiedQualification
	 */
	attainedSpecifiedQualification?: IUneceSpecifiedQualification;

	/**
	 * The name or set of names, expressed as text, by which this inspection person is known.
	 * @see https://vocabulary.uncefact.org/inspectionPersonName
	 */
	inspectionPersonName?: string;
}
