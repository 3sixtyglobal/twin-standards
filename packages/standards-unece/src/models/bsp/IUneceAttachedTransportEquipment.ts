// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceTransportEquipmentCategoryCodeList } from "../lists/uneceTransportEquipmentCategoryCodeList.js";
import type { UneceTransportEquipmentSizeTypeCodeList } from "../lists/uneceTransportEquipmentSizeTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of attached transport equipment, such as a chain or a tarpaulin.
 * @see https://vocabulary.uncefact.org/AttachedTransportEquipment
 */
export interface IUneceAttachedTransportEquipment {
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
	identifier?: string | IJsonLdValueObject;

	/**
	 * A code specifying a category of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: UneceTransportEquipmentCategoryCodeList[];

	/**
	 * The code specifying the characteristics, i.e. size and type, of this piece of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: UneceTransportEquipmentSizeTypeCodeList;

	/**
	 * The number of units of attached transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;
}
