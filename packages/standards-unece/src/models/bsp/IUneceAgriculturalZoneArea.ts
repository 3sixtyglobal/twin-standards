// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceAgriculturalCharacteristic } from "./IUneceAgriculturalCharacteristic.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUnecePlot } from "./IUnecePlot.js";
import type { IUneceProduce } from "./IUneceProduce.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A named, delimited and identified part of a land and or water surface of the globe subject to dedicated uniform
 * agricultural treatment.
 * @see https://vocabulary.uncefact.org/AgriculturalZoneArea
 */
export interface IUneceAgriculturalZoneArea {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AgriculturalZoneArea;

	/**
	 * An agricultural characteristic applicable to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/applicableAgriculturalCharacteristic
	 */
	applicableAgriculturalCharacteristic?: IUneceAgriculturalCharacteristic[];

	/**
	 * A specified agricultural application applied to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication[];

	/**
	 * The designated section, expressed as text, of this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/designatedSection
	 */
	designatedSection?: string;

	/**
	 * Crop produce harvested from this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/harvestedProduce
	 */
	harvestedProduce?: IUneceProduce[];

	/**
	 * The identifier for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string;

	/**
	 * The code specifying the multi-surface type for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/multiSurfaceTypeCode
	 */
	multiSurfaceTypeCode?: string;

	/**
	 * The name, expressed as text, for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The referenced location specified for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation;

	/**
	 * A crop plot specified for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/specifiedPlot
	 */
	specifiedPlot?: IUnecePlot[];

	/**
	 * An agricultural zone area subordinate to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/subordinateArea
	 */
	subordinateArea?: IUneceAgriculturalZoneArea[];

	/**
	 * An identifier issued by a third party for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedId
	 */
	thirdPartyIssuedId?: string;
}
