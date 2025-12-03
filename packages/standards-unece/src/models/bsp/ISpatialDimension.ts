// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IUnitMeasureType } from "./IUnitMeasureType.js";
import type { DimensionTypeCodeList } from "../lists/dimensionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measure of spatial extent of an object, such as the length, breadth or height of a shipping container.
 * @see https://vocabulary.uncefact.org/SpatialDimension
 */
export interface ISpatialDimension extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpatialDimension;

	/**
	 * A dimension that is a component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/componentSpatialDimension
	 */
	componentSpatialDimension?: ISpatialDimension[];

	/**
	 * A textual description of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of spatial dimension, such as thickness, area, or volume.
	 * @see https://vocabulary.uncefact.org/dimensionTypeCode
	 */
	dimensionTypeCode?: DimensionTypeCodeList[];

	/**
	 * The measure of the height component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/heightMeasure
	 */
	heightMeasure?: IMeasureType[];

	/**
	 * The unique identifier of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The measure of the length component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/lengthMeasure
	 */
	lengthMeasure?: IMeasureType[];

	/**
	 * The measure of the diameter component for this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitDiameterMeasure
	 */
	linearUnitDiameterMeasure?: ILinearUnitMeasureType[];

	/**
	 * The measure of the height component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitHeightMeasure
	 */
	linearUnitHeightMeasure?: ILinearUnitMeasureType[];

	/**
	 * The measure of the length component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitLengthMeasure
	 */
	linearUnitLengthMeasure?: ILinearUnitMeasureType[];

	/**
	 * The measure of the width component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitWidthMeasure
	 */
	linearUnitWidthMeasure?: ILinearUnitMeasureType[];

	/**
	 * The number of units with these spatial dimensions.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];

	/**
	 * The measure of the value of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/unitValueMeasure
	 */
	unitValueMeasure?: IUnitMeasureType[];

	/**
	 * The measure of the width component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/widthMeasure
	 */
	widthMeasure?: IMeasureType[];
}
