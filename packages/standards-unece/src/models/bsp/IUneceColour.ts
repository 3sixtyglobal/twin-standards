// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceMachine } from "./IUneceMachine.js";
import type { IUneceProductionDevice } from "./IUneceProductionDevice.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceColourTypeCodeList } from "../typeCodes/uneceColourTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A colour of a product.
 * @see https://vocabulary.uncefact.org/Colour
 */
export interface IUneceColour {
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
	applicableMachine?: IUneceMachine[];

	/**
	 * Specified material applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	applicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A specified method applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: IUneceSpecifiedMethod[];

	/**
	 * A production device applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IUneceProductionDevice[];

	/**
	 * A referenced standard applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A technical characteristic applicable to this product colour.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

	/**
	 * A textual description of this product colour.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this product colour.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

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
	relatedParty?: IUneceTradeParty[];

	/**
	 * A referenced document specified for this product colour.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument[];

	/**
	 * The indication of whether or not this product colour is a test.
	 * @see https://vocabulary.uncefact.org/testIndicator
	 */
	testIndicator?: boolean;

	/**
	 * The code specifying the type of product colour.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceColourTypeCodeList | string;

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
