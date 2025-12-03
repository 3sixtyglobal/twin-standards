// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMarking } from "./IMarking.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IPackage } from "./IPackage.js";
import type { IPackagingInstructions } from "./IPackagingInstructions.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any wrapping or containment, such as a box or a barrel, whether or not any goods are contained within.
 * @see https://vocabulary.uncefact.org/LogisticsPackaging
 */
export interface ILogisticsPackaging extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsPackaging;

	/**
	 * Instructions applicable to this logistics packaging.
	 * @see https://vocabulary.uncefact.org/applicablePackagingInstructions
	 */
	applicablePackagingInstructions?: IPackagingInstructions[];

	/**
	 * A measure of a capacity of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/capacityMeasure
	 */
	capacityMeasure?: IMeasureType[];

	/**
	 * The indication whether or not this logistics packaging has a certification.
	 * @see https://vocabulary.uncefact.org/certificationIndicator
	 */
	certificationIndicator?: boolean;

	/**
	 * A code specifying a condition of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/conditionCode
	 */
	conditionCode?: string;

	/**
	 * A package contained in this logistics packaging.
	 * @see https://vocabulary.uncefact.org/containedPackage
	 */
	containedPackage?: IPackage[];

	/**
	 * A number of content layers in this logistics packaging.
	 * @see https://vocabulary.uncefact.org/contentLayerQuantity
	 */
	contentLayerQuantity?: IQuantityType[];

	/**
	 * A textual description of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying a disposal method for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/disposalMethodCode
	 */
	disposalMethodCode?: string;

	/**
	 * An identifier for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A code specifying an instruction for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/instructionCode
	 */
	instructionCode?: string;

	/**
	 * The indication of whether or not this logistics packaging has an instruction.
	 * @see https://vocabulary.uncefact.org/instructionIndicator
	 */
	instructionIndicator?: boolean;

	/**
	 * A linear dimension or a set of linear dimensions of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The code specifying the level of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/logisticsPackagingLevelCode
	 */
	logisticsPackagingLevelCode?: string;

	/**
	 * The number of units of this type of logistics packaging which can be stacked on top of each other.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityQuantity
	 */
	maximumStackabilityQuantity?: IQuantityType[];

	/**
	 * The textual description of the method of logistics packaging, such as hermetically sealed.
	 * @see https://vocabulary.uncefact.org/methodDescription
	 */
	methodDescription?: string;

	/**
	 * The type, expressed as text, of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/packagingType
	 */
	packagingType?: string;

	/**
	 * The indication of whether or not this logistics packaging is returnable.
	 * @see https://vocabulary.uncefact.org/returnableIndicator
	 */
	returnableIndicator?: boolean;

	/**
	 * The sequence number for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A marking specified for this logistics packaging.
	 * @see https://vocabulary.uncefact.org/specifiedMarking
	 */
	specifiedMarking?: IMarking[];

	/**
	 * A total number of units contained in this logistics packaging.
	 * @see https://vocabulary.uncefact.org/totalUnitQuantity
	 */
	totalUnitQuantity?: IQuantityType[];

	/**
	 * The number of units of this type of logistics packaging which can be stacked vertically for transport operations.
	 * @see https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity
	 */
	transportMaximumStackabilityQuantity?: IQuantityType[];

	/**
	 * A code specifying a type of logistics packaging.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A measure of a weight (mass) of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];

	/**
	 * The measure of load bearing capability of this logistics packaging.
	 * @see https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
	 */
	weightUnitLoadBearingCapabilityMeasure?: IWeightUnitMeasureType[];
}
