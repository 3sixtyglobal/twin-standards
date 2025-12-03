// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDocument } from "./IDocument.js";
import type { ILineTradeDelivery } from "./ILineTradeDelivery.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IShippingMarks } from "./IShippingMarks.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { ISpecifiedCondition } from "./ISpecifiedCondition.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { ISupplyChainTradeLineItem } from "./ISupplyChainTradeLineItem.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { PackageTypeCodeList } from "../lists/packageTypeCodeList.js";
import type { PackagingLevelCodeList } from "../lists/packagingLevelCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A self-contained wrapping or container within which goods can be contained for logistics purposes, such as a box or a
 * barrel which can be filled, partially filled or empty.
 * A referenced self-contained wrapping or container within which goods can be contained for logistics purposes.
 * @see https://vocabulary.uncefact.org/Package
 */
export interface IPackage extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Package;

	/**
	 * The code specifying the additional level of this logistics package.
	 * @see https://vocabulary.uncefact.org/additionalLevelCode
	 */
	additionalLevelCode?: string;

	/**
	 * A referenced document associated with this logistics package.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * The code specifying the colour of this referenced logistics package.
	 * @see https://vocabulary.uncefact.org/colourCode
	 */
	colourCode?: string;

	/**
	 * A textual description of this logistics package.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A despatch note associated with this logistics package.
	 * @see https://vocabulary.uncefact.org/despatchNoteAssociatedDocument
	 */
	despatchNoteAssociatedDocument?: IDocument[];

	/**
	 * The unique global identifier for this logistics package.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * The measure of the gross volume of this logistics package.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IMeasureType;

	/**
	 * The measure of the gross weight (mass) of this logistics package and its contents.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IMeasureType[];

	/**
	 * The level identifier for this logistics package.
	 * @see https://vocabulary.uncefact.org/hierarchicalLevelId
	 */
	hierarchicalLevelId?: string;

	/**
	 * The unique identifier for this logistics package.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A supply chain trade line item included in this logistics package.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: ISupplyChainTradeLineItem[];

	/**
	 * Information, expressed as text, for this logistics package.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The number of logistics packages at this level.
	 * @see https://vocabulary.uncefact.org/itemQuantity
	 */
	itemQuantity?: IQuantityType[];

	/**
	 * The linear spatial dimensions of this logistics package.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The code specifying the additional level of this logistics package.
	 * @see https://vocabulary.uncefact.org/logisticsPackageAdditionalLevelCode
	 */
	logisticsPackageAdditionalLevelCode?: string;

	/**
	 * A measure of a net volume of this logistics package.
	 * @see https://vocabulary.uncefact.org/netVolumeMeasure
	 */
	netVolumeMeasure?: IMeasureType;

	/**
	 * The measure of the net weight of this logistics package, i.e. the weight (mass) of the contents.
	 * @see https://vocabulary.uncefact.org/netWeightMeasure
	 */
	netWeightMeasure?: IMeasureType;

	/**
	 * The measure of the nominal gross volume of this logistics package.
	 * @see https://vocabulary.uncefact.org/nominalGrossVolumeMeasure
	 */
	nominalGrossVolumeMeasure?: IMeasureType[];

	/**
	 * The measure of the nominal gross weight (mass) of this logistics package and its contents.
	 * @see https://vocabulary.uncefact.org/nominalGrossWeightMeasure
	 */
	nominalGrossWeightMeasure?: IMeasureType[];

	/**
	 * A type, expressed as text, of this logistics package.
	 * @see https://vocabulary.uncefact.org/packageType
	 */
	packageType?: string;

	/**
	 * A code specifying the type of logistics package.
	 * @see https://vocabulary.uncefact.org/packageTypeCode
	 */
	packageTypeCode?: PackageTypeCodeList[];

	/**
	 * The code specifying the level of this logistics package.
	 * @see https://vocabulary.uncefact.org/packagingLevelCode
	 */
	packagingLevelCode?: PackagingLevelCodeList[];

	/**
	 * The unique parent identifier for this logistics package.
	 * @see https://vocabulary.uncefact.org/parentId
	 */
	parentId?: string;

	/**
	 * A number of units per package in this logistics package.
	 * @see https://vocabulary.uncefact.org/perPackageUnitQuantity
	 */
	perPackageUnitQuantity?: IQuantityType[];

	/**
	 * Physical shipping marks and barcode information for this logistics package.
	 * @see https://vocabulary.uncefact.org/physicalShippingMarks
	 */
	physicalShippingMarks?: IShippingMarks;

	/**
	 * The indication of whether or not this logistics package is returnable.
	 * @see https://vocabulary.uncefact.org/returnableIndicator
	 */
	returnableIndicator?: boolean;

	/**
	 * The sequence number of this logistics package.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The unique identifier of the end of a series of packages within this logistics package.
	 * @see https://vocabulary.uncefact.org/seriesEndId
	 */
	seriesEndId?: string;

	/**
	 * The unique start identifier of a series of packages within this logistics package.
	 * @see https://vocabulary.uncefact.org/seriesStartId
	 */
	seriesStartId?: string;

	/**
	 * The line trade delivery specified for this logistics package.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeDelivery
	 */
	specifiedLineTradeDelivery?: ILineTradeDelivery[];

	/**
	 * A stated condition of this logistics package.
	 * @see https://vocabulary.uncefact.org/statedCondition
	 */
	statedCondition?: ISpecifiedCondition[];

	/**
	 * Supply chain packaging used for this logistics package.
	 * @see https://vocabulary.uncefact.org/usedPackaging
	 */
	usedPackaging?: ISupplyChainPackaging[];

	/**
	 * The measure of the gross volume of this referenced logistics package.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure of the gross weight (mass) of this referenced logistics package and its contents.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the net weight (mass) of the contents of this referenced logistics package.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the tare weight of this logistics package.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IWeightUnitMeasureType[];
}
