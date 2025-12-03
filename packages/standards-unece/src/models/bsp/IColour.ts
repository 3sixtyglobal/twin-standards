// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { IMachine } from "./IMachine.js";
import type { IProductionDevice } from "./IProductionDevice.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { IStandard } from "./IStandard.js";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A colour of a product.
 * @see https://vocabulary.uncefact.org/Colour
 */
export interface IColour extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Colour;

	/**
	 * A production machine applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMachine
	 */
	applicableMachine?: IMachine[];

	/**
	 * Specified material applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	applicableMaterial?: ISpecifiedMaterial[];

	/**
	 * A specified method applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: ISpecifiedMethod[];

	/**
	 * A production device applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IProductionDevice[];

	/**
	 * A referenced standard applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A technical characteristic applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * A textual description of this product colour.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this product colour.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this product colour.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The percentage of the presence of this product colour.
	 * @see https://vocabulary.uncefact.org/presencePercent
	 */
	presencePercent?: string;

	/**
	 * A trade party related to this product colour.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: ITradeParty[];

	/**
	 * A referenced document specified for this product colour.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * The indication of whether or not this product colour is a test.
	 * @see https://vocabulary.uncefact.org/testIndicator
	 */
	testIndicator?: boolean;

	/**
	 * The code specifying the type of product colour.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The code specifying the light source used for this product colour.
	 * @see https://vocabulary.uncefact.org/usedLightSourceCode
	 */
	usedLightSourceCode?: string;

	/**
	 * The measure of the variation coefficient number for this product colour.
	 * @see https://vocabulary.uncefact.org/variationMeasureCoefficientNumeric
	 */
	variationMeasureCoefficientNumeric?: string;
}
