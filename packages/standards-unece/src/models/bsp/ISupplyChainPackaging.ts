// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDisposalInstructions } from "./IDisposalInstructions.js";
import type { IGoodsCharacteristic } from "./IGoodsCharacteristic.js";
import type { IMarking } from "./IMarking.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IPackagingInstructions } from "./IPackagingInstructions.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IReturnableAssetInstructions } from "./IReturnableAssetInstructions.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { PackageTypeCodeList } from "../lists/packageTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any material with which supply chain goods are packaged, such as a box or bubble wrap.
 * @see https://vocabulary.uncefact.org/SupplyChainPackaging
 */
export interface ISupplyChainPackaging extends IJsonLdNodeObject {
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
	applicableDisposalInstructions?: IDisposalInstructions[];

	/**
	 * Material goods characteristic applicable to this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IGoodsCharacteristic[];

	/**
	 * Packaging instructions applicable to this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicablePackagingInstructions
	 */
	applicablePackagingInstructions?: IPackagingInstructions[];

	/**
	 * Returnable asset instructions for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/applicableReturnableAssetInstructions
	 */
	applicableReturnableAssetInstructions?: IReturnableAssetInstructions[];

	/**
	 * The measure of the capacity of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/capacityMeasure
	 */
	capacityMeasure?: IMeasureType[];

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
	contentLayerQuantity?: IQuantityType[];

	/**
	 * The total number of units of this supply chain packaging facing the customer, such as would be seen when this packaging
	 * is placed on a retail shelf.
	 * @see https://vocabulary.uncefact.org/customerFacingTotalUnitQuantity
	 */
	customerFacingTotalUnitQuantity?: IQuantityType[];

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
	layerTotalUnitQuantity?: IQuantityType[];

	/**
	 * The linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The maximum linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/maximumLinearDimension
	 */
	maximumLinearDimension?: ISpatialDimension[];

	/**
	 * The number of units of this type of supply chain packaging which can be stacked on top of each other.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityQuantity
	 */
	maximumStackabilityQuantity?: IQuantityType[];

	/**
	 * The measure of the maximum stackability weight of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/maximumStackabilityWeightMeasure
	 */
	maximumStackabilityWeightMeasure?: IMeasureType[];

	/**
	 * The minimum linear spatial dimensions of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/minimumLinearDimension
	 */
	minimumLinearDimension?: ISpatialDimension[];

	/**
	 * The code specifying the type of supply chain packaging.
	 * @see https://vocabulary.uncefact.org/packageTypeCode
	 */
	packageTypeCode?: PackageTypeCodeList[];

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
	specifiedMarking?: IMarking[];

	/**
	 * The code specifying a level for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/supplyChainPackagingLevelCode
	 */
	supplyChainPackagingLevelCode?: string;

	/**
	 * A total number of units contained in this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/totalUnitQuantity
	 */
	totalUnitQuantity?: IQuantityType[];

	/**
	 * The number of units of this type of supply chain packaging which can be stacked vertically for transport operations.
	 * @see https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity
	 */
	transportMaximumStackabilityQuantity?: IQuantityType[];

	/**
	 * A measure of the weight of this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];

	/**
	 * The load bearing capability measure for this supply chain packaging.
	 * @see https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
	 */
	weightUnitLoadBearingCapabilityMeasure?: IWeightUnitMeasureType[];
}
