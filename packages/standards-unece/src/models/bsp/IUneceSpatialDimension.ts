// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { UneceDimensionTypeCodeList } from "../lists/uneceDimensionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A measure of spatial extent of an object, such as the length, breadth or height of a shipping container.
 * @see https://vocabulary.uncefact.org/SpatialDimension
 */
export interface IUneceSpatialDimension extends IJsonLdNodeObject {
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
	componentSpatialDimension?: IUneceSpatialDimension[];

	/**
	 * A textual description of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of spatial dimension, such as thickness, area, or volume.
	 * @see https://vocabulary.uncefact.org/dimensionTypeCode
	 */
	dimensionTypeCode?: UneceDimensionTypeCodeList[];

	/**
	 * The measure of the height component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/heightMeasure
	 */
	heightMeasure?: IUneceMeasureType[];

	/**
	 * The unique identifier of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The measure of the length component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/lengthMeasure
	 */
	lengthMeasure?: IUneceMeasureType[];

	/**
	 * The measure of the diameter component for this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitDiameterMeasure
	 */
	linearUnitDiameterMeasure?: IUneceLinearUnitMeasureType[];

	/**
	 * The measure of the height component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitHeightMeasure
	 */
	linearUnitHeightMeasure?: IUneceLinearUnitMeasureType[];

	/**
	 * The measure of the length component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitLengthMeasure
	 */
	linearUnitLengthMeasure?: IUneceLinearUnitMeasureType[];

	/**
	 * The measure of the width component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/linearUnitWidthMeasure
	 */
	linearUnitWidthMeasure?: IUneceLinearUnitMeasureType[];

	/**
	 * The number of units with these spatial dimensions.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType[];

	/**
	 * The measure of the value of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/unitValueMeasure
	 */
	unitValueMeasure?: IUneceUnitMeasureType[];

	/**
	 * The measure of the width component of this spatial dimension.
	 * @see https://vocabulary.uncefact.org/widthMeasure
	 */
	widthMeasure?: IUneceMeasureType[];
}
