// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceMachine } from "./IUneceMachine.js";
import type { IUneceProductionDevice } from "./IUneceProductionDevice.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UnecePrintTypeCodeList } from "../typeCodes/unecePrintTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any text or pattern put on the surface of a product using a specific material such as dye.
 * @see https://vocabulary.uncefact.org/Print
 */
export interface IUnecePrint extends IJsonLdNodeObject {
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
	applicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A specified method applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableMethod
	 */
	applicableMethod?: IUneceSpecifiedMethod[];

	/**
	 * A production device applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableProductionDevice
	 */
	applicableProductionDevice?: IUneceProductionDevice[];

	/**
	 * A technical characteristic applicable to this product print.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

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
	relatedParty?: IUneceTradeParty[];

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
	specifiedDocument?: IUneceDocument[];

	/**
	 * A production machine specified for this product print.
	 * @see https://vocabulary.uncefact.org/specifiedMachine
	 */
	specifiedMachine?: IUneceMachine[];

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
	typeCode?: UnecePrintTypeCodeList | string;
}
