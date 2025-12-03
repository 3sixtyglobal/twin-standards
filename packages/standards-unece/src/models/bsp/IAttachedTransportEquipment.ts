// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IQuantityType } from "./IQuantityType.js";
import type { TransportEquipmentCategoryCodeList } from "../lists/transportEquipmentCategoryCodeList.js";
import type { TransportEquipmentSizeTypeCodeList } from "../lists/transportEquipmentSizeTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of attached transport equipment, such as a chain or a tarpaulin.
 * @see https://vocabulary.uncefact.org/AttachedTransportEquipment
 */
export interface IAttachedTransportEquipment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AttachedTransportEquipment;

	/**
	 * The textual description of the characteristics, i.e. size and type, of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/characteristic
	 */
	characteristic?: string;

	/**
	 * A unique identifier of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A code specifying a category of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: TransportEquipmentCategoryCodeList[];

	/**
	 * The code specifying the characteristics, i.e. size and type, of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: TransportEquipmentSizeTypeCodeList;

	/**
	 * The number of units of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];
}
