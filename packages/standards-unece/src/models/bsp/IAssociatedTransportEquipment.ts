// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IConsignment } from "./IConsignment.js";
import type { ICountry } from "./ICountry.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISeal } from "./ISeal.js";
import type { ITransportSettingTemperature } from "./ITransportSettingTemperature.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { TransportEquipmentCategoryCodeList } from "../lists/transportEquipmentCategoryCodeList.js";
import type { TransportEquipmentSizeTypeCodeList } from "../lists/transportEquipmentSizeTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of transport equipment that is associated with another piece of transport equipment, such as a maritime
 * container placed on a rail wagon for transportation.
 * @see https://vocabulary.uncefact.org/AssociatedTransportEquipment
 */
export interface IAssociatedTransportEquipment extends IJsonLdNodeObject {
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
	affixedSeal?: ISeal[];

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
	containedConsignment?: IConsignment[];

	/**
	 * A quantity of goods items in this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/goodsItemUnitQuantity
	 */
	goodsItemUnitQuantity?: IQuantityType[];

	/**
	 * A measure of the gross goods volume of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsVolumeMeasure
	 */
	grossGoodsVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the gross goods weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsWeightMeasure
	 */
	grossGoodsWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the gross volume of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IMeasureType;

	/**
	 * The measure of the gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IMeasureType[];

	/**
	 * A unique number, mark or name which identifies this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Dangerous goods loaded into or onto this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedDangerousGoods
	 */
	loadedDangerousGoods?: IDangerousGoods[];

	/**
	 * The number of packages loaded into or onto this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedPackageQuantity
	 */
	loadedPackageQuantity?: IQuantityType;

	/**
	 * A measure of the net goods volume of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsVolumeMeasure
	 */
	netGoodsVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the net goods weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsWeightMeasure
	 */
	netGoodsWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A registration country for this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: ICountry[];

	/**
	 * A reportable quantity for this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/reportableQuantity
	 */
	reportableQuantity?: IQuantityType[];

	/**
	 * A quantity of seals for this associated piece of transport equipment.
	 * @see https://vocabulary.uncefact.org/sealQuantity
	 */
	sealQuantity?: IQuantityType[];

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
	settingTemperature?: ITransportSettingTemperature[];

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
	tareWeightMeasure?: IMeasureType;

	/**
	 * A code specifying a category of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: TransportEquipmentCategoryCodeList[];

	/**
	 * The code specifying the characteristics, i.e. size and type, of this piece of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: TransportEquipmentSizeTypeCodeList;

	/**
	 * The number of units of this type of associated transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];

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
	verifiedGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A measure of the net weight of this associated transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];
}
