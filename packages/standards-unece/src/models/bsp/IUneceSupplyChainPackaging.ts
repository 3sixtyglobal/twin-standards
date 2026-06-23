// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceGoodsCharacteristic } from "./IUneceGoodsCharacteristic.js";
import type { IUneceMarking } from "./IUneceMarking.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUnecePackagingInstructions } from "./IUnecePackagingInstructions.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceReturnableAssetInstructions } from "./IUneceReturnableAssetInstructions.js";
import type { IUneceSpatialDimension } from "./IUneceSpatialDimension.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UnecePackageTypeCodeList } from "../lists/unecePackageTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any material with which supply chain goods are packaged, such as a box or bubble wrap.
 * @see https://vocabulary.uncefact.org/SupplyChainPackaging
 */
export interface IUneceSupplyChainPackaging {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainPackaging;

	/**
	 * A code specifying an additional instruction for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/additionalInstructionCode
	 */
	additionalInstructionCode?: string;

	/**
	 * The indication of whether or not there is an additional instruction for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/additionalInstructionIndicator
	 */
	additionalInstructionIndicator?: boolean;

	/**
	 * Disposal instructions for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableDisposalInstructions
	 */
	applicableDisposalInstructions?: IUneceDisposalInstructions[];

	/**
	 * Material goods characteristic applicable to this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IUneceGoodsCharacteristic[];

	/**
	 * Packaging instructions applicable to this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicablePackagingInstructions
	 */
	applicablePackagingInstructions?: IUnecePackagingInstructions[];

	/**
	 * Returnable asset instructions for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableReturnableAssetInstructions
	 */
	applicableReturnableAssetInstructions?: IUneceReturnableAssetInstructions[];

	/**
	 * The measure of the capacity of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/capacityMeasure
	 */
	capacityMeasure?: IUneceMeasureType;

	/**
	 * A code specifying the condition of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/conditionCode
	 */
	conditionCode?: string;

	/**
	 * The number of content layers that are or may be packaged with this supply chain packaging, such as the number of layers
	 * of product on a pallet.
	 * @see https://vocabulary.uncefact.org/contentLayerQuantity
	 */
	contentLayerQuantity?: IUneceQuantityType;

	/**
	 * The total number of units of this supply chain packaging facing the customer, such as would be seen when this packaging
	 * is placed on a retail shelf.
	 * @see https://vocabulary.uncefact.org/customerFacingTotalUnitQuantity
	 */
	customerFacingTotalUnitQuantity?: IUneceQuantityType;

	/**
	 * A textual description of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A code specifying the disposal method of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/disposalMethodCode
	 */
	disposalMethodCode?: string;

	/**
	 * A code specifying an instruction for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/instructionCode
	 */
	instructionCode?: string;

	/**
	 * The total number of units in a layer of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/layerTotalUnitQuantity
	 */
	layerTotalUnitQuantity?: IUneceQuantityType;

	/**
	 * The linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: IUneceSpatialDimension;

	/**
	 * The maximum linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/maximumLinearDimension
	 */
	maximumLinearDimension?: IUneceSpatialDimension;

	/**
	 * The number of units of this type of supply chain packaging which can be stacked on top of each other.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityQuantity
	 */
	maximumStackabilityQuantity?: IUneceQuantityType;

	/**
	 * The measure of the maximum stackability weight of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityWeightMeasure
	 */
	maximumStackabilityWeightMeasure?: IUneceMeasureType;

	/**
	 * The minimum linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/minimumLinearDimension
	 */
	minimumLinearDimension?: IUneceSpatialDimension;

	/**
	 * The code specifying the type of supply chain packaging.
	 * @see https://vocabulary.uncefact.org/packageTypeCode
	 */
	packageTypeCode?: UnecePackageTypeCodeList;

	/**
	 * The type, expressed as text, of supply chain packaging.
	 * @see https://vocabulary.uncefact.org/packagingType
	 */
	packagingType?: string;

	/**
	 * The indication of whether or not this supply chain packaging is recyclable.
	 * @see https://vocabulary.uncefact.org/recyclableIndicator
	 */
	recyclableIndicator?: boolean;

	/**
	 * The indication of whether or not this supply chain packaging is made of recycled material.
	 * @see https://vocabulary.uncefact.org/recycledMaterialIndicator
	 */
	recycledMaterialIndicator?: boolean;

	/**
	 * The percentage of recycled material in this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/recycledMaterialPercent
	 */
	recycledMaterialPercent?: string;

	/**
	 * The indication of whether or not this supply chain packaging is returnable.
	 * @see https://vocabulary.uncefact.org/returnableIndicator
	 */
	returnableIndicator?: boolean;

	/**
	 * The number of a sequence of the supply chain packaging.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A marking specified for this supply chain packaging, such as an inscription, stamp or label to indicate date, ownership,
	 * quality, manufacture or origin.
	 * @see https://vocabulary.uncefact.org/specifiedMarking
	 */
	specifiedMarking?: IUneceMarking[];

	/**
	 * The code specifying a level for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/supplyChainPackagingLevelCode
	 */
	supplyChainPackagingLevelCode?: string;

	/**
	 * A total number of units contained in this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/totalUnitQuantity
	 */
	totalUnitQuantity?: IUneceQuantityType[];

	/**
	 * The number of units of this type of supply chain packaging which can be stacked vertically for transport operations.
	 * @see https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity
	 */
	transportMaximumStackabilityQuantity?: IUneceQuantityType;

	/**
	 * A measure of the weight of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType[];

	/**
	 * The load bearing capability measure for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
	 */
	weightUnitLoadBearingCapabilityMeasure?: IUneceWeightUnitMeasureType;
}
