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
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any text or pattern put on the surface of a product using a specific material such as dye.
 * @see https://vocabulary.uncefact.org/Print
 */
export interface IPrint extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Print;

	/**
	 * Material applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	applicableMaterial?: ISpecifiedMaterial[];

	/**
	 * A specified method applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: ISpecifiedMethod[];

	/**
	 * A production device applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IProductionDevice[];

	/**
	 * A technical characteristic applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * The code specifying the background colour for this product print.
	 * @see https://vocabulary.uncefact.org/backgroundColourCode
	 */
	backgroundColourCode?: string;

	/**
	 * A textual description of this product print.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A textual description of a design for this product print.
	 * @see https://vocabulary.uncefact.org/design
	 */
	design?: string;

	/**
	 * The code specifying the design for this product print.
	 * @see https://vocabulary.uncefact.org/designCode
	 */
	designCode?: string;

	/**
	 * An identifier of this product print.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, of this product print.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A trade party related to this product print.
	 * @see https://vocabulary.uncefact.org/relatedParty
	 */
	relatedParty?: ITradeParty[];

	/**
	 * A section, expressed as text, of this product print.
	 * @see https://vocabulary.uncefact.org/section
	 */
	section?: string;

	/**
	 * The code specifying the section for this product print.
	 * @see https://vocabulary.uncefact.org/sectionCode
	 */
	sectionCode?: string;

	/**
	 * A referenced document specified for this product print.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * A production machine specified for this product print.
	 * @see https://vocabulary.uncefact.org/specifiedMachine
	 */
	specifiedMachine?: IMachine[];

	/**
	 * The indication of whether or not this product print is a test.
	 * @see https://vocabulary.uncefact.org/testIndicator
	 */
	testIndicator?: boolean;

	/**
	 * A textual description of the content for this product print.
	 * @see https://vocabulary.uncefact.org/textContent
	 */
	textContent?: string;

	/**
	 * The code specifying the type of product print.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
