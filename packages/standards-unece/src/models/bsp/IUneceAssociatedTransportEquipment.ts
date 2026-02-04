// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceConsignment } from "./IUneceConsignment.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSeal } from "./IUneceSeal.js";
import type { IUneceTransportSettingTemperature } from "./IUneceTransportSettingTemperature.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceTransportEquipmentCategoryCodeList } from "../lists/uneceTransportEquipmentCategoryCodeList.js";
import type { UneceTransportEquipmentSizeTypeCodeList } from "../lists/uneceTransportEquipmentSizeTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of transport equipment that is associated with another piece of transport equipment, such as a maritime
 * container placed on a rail wagon for transportation.
 * @see https://vocabulary.uncefact.org/AssociatedTransportEquipment
 */
export interface IUneceAssociatedTransportEquipment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AssociatedTransportEquipment;

	/**
	 * A logistics seal affixed to this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/affixedSeal
	 */
	affixedSeal?: IUneceSeal[];

	/**
	 * The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipmentUsedCapacityCode
	 */
	associatedTransportEquipmentUsedCapacityCode?: string;

	/**
	 * A code specifying the cargo residue status for this piece of associated transport equipment, such as required by
	 * dangerous goods regulations.
	 * @see https://vocabulary.uncefact.org/cargoResidueStatusCode
	 */
	cargoResidueStatusCode?: string;

	/**
	 * The textual description of the characteristics, i.e. size and type, of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/characteristic
	 */
	characteristic?: string;

	/**
	 * A supply chain consignment contained in this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/containedConsignment
	 */
	containedConsignment?: IUneceConsignment[];

	/**
	 * A quantity of goods items in this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/goodsItemUnitQuantity
	 */
	goodsItemUnitQuantity?: IUneceQuantityType[];

	/**
	 * A measure of the gross goods volume of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsVolumeMeasure
	 */
	grossGoodsVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the gross goods weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsWeightMeasure
	 */
	grossGoodsWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * The measure of the gross volume of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IUneceMeasureType;

	/**
	 * The measure of the gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IUneceMeasureType[];

	/**
	 * A unique number, mark or name which identifies this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Dangerous goods loaded into or onto this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedDangerousGoods
	 */
	loadedDangerousGoods?: IUneceDangerousGoods[];

	/**
	 * The number of packages loaded into or onto this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedPackageQuantity
	 */
	loadedPackageQuantity?: IUneceQuantityType;

	/**
	 * A measure of the net goods volume of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsVolumeMeasure
	 */
	netGoodsVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the net goods weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsWeightMeasure
	 */
	netGoodsWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A registration country for this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: IUneceCountry;

	/**
	 * A reportable quantity for this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/reportableQuantity
	 */
	reportableQuantity?: IUneceQuantityType[];

	/**
	 * A quantity of seals for this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/sealQuantity
	 */
	sealQuantity?: IUneceQuantityType;

	/**
	 * The indication of whether or not this associated piece of transport equipment is sealed.
	 * @see https://vocabulary.uncefact.org/sealedIndicator
	 */
	sealedIndicator?: boolean;

	/**
	 * The sequence number differentiating this piece of transport equipment from others in a set of associated transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A temperature setting for this piece of associated transport equipment, such as storage temperature or operational
	 * temperature.
	 * @see https://vocabulary.uncefact.org/settingTemperature
	 */
	settingTemperature?: IUneceTransportSettingTemperature[];

	/**
	 * The stowage position identifier for this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/stowagePositionId
	 */
	stowagePositionId?: string;

	/**
	 * The measure of the tare weight (mass) of this piece of associated transport equipment which is the weight (mass)
	 * including permanent equipment but excluding goods and loose accessories.
	 * @see https://vocabulary.uncefact.org/tareWeightMeasure
	 */
	tareWeightMeasure?: IUneceMeasureType;

	/**
	 * A code specifying a category of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: UneceTransportEquipmentCategoryCodeList;

	/**
	 * The code specifying the characteristics, i.e. size and type, of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: UneceTransportEquipmentSizeTypeCodeList;

	/**
	 * The number of units of this type of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/usedCapacityCode
	 */
	usedCapacityCode?: string;

	/**
	 * A measure of the verified gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/verifiedGrossWeightMeasure
	 */
	verifiedGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * A measure of the net weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType[];
}
