// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsTransportMeans } from "./IUneceLogisticsTransportMeans.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A number of means of transport following each other with a common logistics purpose.
 * @see https://vocabulary.uncefact.org/Convoy
 */
export interface IUneceConvoy extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Convoy;

	/**
	 * The maximum width measure for this logistics convoy.
	 * @see https://vocabulary.uncefact.org/maximumWidthMeasure
	 */
	maximumWidthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The overall length measure of this logistics convoy.
	 * @see https://vocabulary.uncefact.org/overallLengthMeasure
	 */
	overallLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * A means of transport actively powering this logistics convoy.
	 * @see https://vocabulary.uncefact.org/powerActiveTransportMeans
	 */
	powerActiveTransportMeans?: IUneceLogisticsTransportMeans[];

	/**
	 * A means of transport not actively powering this logistics convoy.
	 * @see https://vocabulary.uncefact.org/powerInactiveTransportMeans
	 */
	powerInactiveTransportMeans?: IUneceLogisticsTransportMeans[];

	/**
	 * The number of means of transport in this logistics convoy.
	 * @see https://vocabulary.uncefact.org/transportMeansQuantity
	 */
	transportMeansQuantity?: IUneceQuantityType;
}
