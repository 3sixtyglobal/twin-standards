// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceEquipmentTypeCodeList } from "../typeCodes/uneceEquipmentTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Hardware or software typically marketed by a company other than the original manufacturer.
 * @see https://vocabulary.uncefact.org/Equipment
 */
export interface IUneceEquipment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Equipment;

	/**
	 * An identifier of this OEM equipment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The manufacturer party for this OEM equipment.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * The indication of whether or not this OEM equipment has a polling capability.
	 * @see https://vocabulary.uncefact.org/pollingCapabilityIndicator
	 */
	pollingCapabilityIndicator?: boolean;

	/**
	 * The measure of the polling rate for this OEM equipment.
	 * @see https://vocabulary.uncefact.org/pollingRateMeasure
	 */
	pollingRateMeasure?: IUneceMeasureType;

	/**
	 * A code specifying a type of OEM equipment.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceEquipmentTypeCodeList | string;
}
