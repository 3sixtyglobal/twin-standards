// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalApplication } from "./IAgriculturalApplication.js";
import type { IAgriculturalCharacteristic } from "./IAgriculturalCharacteristic.js";
import type { ILocation } from "./ILocation.js";
import type { IPlot } from "./IPlot.js";
import type { IProduce } from "./IProduce.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A named, delimited and identified part of a land and or water surface of the globe subject to dedicated uniform
 * agricultural treatment.
 * @see https://vocabulary.uncefact.org/AgriculturalZoneArea
 */
export interface IAgriculturalZoneArea extends IJsonLdNodeObject {
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
	applicableAgriculturalCharacteristic?: IAgriculturalCharacteristic[];

	/**
	 * A specified agricultural application applied to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IAgriculturalApplication[];

	/**
	 * The designated section, expressed as text, of this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/designatedSection
	 */
	designatedSection?: string;

	/**
	 * Crop produce harvested from this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/harvestedProduce
	 */
	harvestedProduce?: IProduce[];

	/**
	 * The identifier for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

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
	specifiedLocation?: ILocation[];

	/**
	 * A crop plot specified for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/specifiedPlot
	 */
	specifiedPlot?: IPlot[];

	/**
	 * An agricultural zone area subordinate to this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/subordinateArea
	 */
	subordinateArea?: IAgriculturalZoneArea[];

	/**
	 * An identifier issued by a third party for this agricultural zone area.
	 * @see https://vocabulary.uncefact.org/thirdPartyIssuedId
	 */
	thirdPartyIssuedId?: string;
}
