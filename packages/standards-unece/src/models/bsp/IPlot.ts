// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalApplication } from "./IAgriculturalApplication.js";
import type { IAgriculturalCertificate } from "./IAgriculturalCertificate.js";
import type { IAgriculturalCharacteristic } from "./IAgriculturalCharacteristic.js";
import type { IAgriculturalProcess } from "./IAgriculturalProcess.js";
import type { IAgriculturalZoneArea } from "./IAgriculturalZoneArea.js";
import type { IArea } from "./IArea.js";
import type { IFieldCrop } from "./IFieldCrop.js";
import type { ILocation } from "./ILocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A small piece of land or water used for a crop such as an agricultural or aquacultural crop.
 * @see https://vocabulary.uncefact.org/Plot
 */
export interface IPlot extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Plot;

	/**
	 * An agricultural process crop production specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/applicableAgriculturalProcess
	 */
	applicableAgriculturalProcess?: IAgriculturalProcess[];

	/**
	 * A specified agricultural application applied to this crop plot.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IAgriculturalApplication[];

	/**
	 * The area measure for this crop plot.
	 * @see https://vocabulary.uncefact.org/areaMeasure
	 */
	areaMeasure?: IMeasureType[];

	/**
	 * The date, time, date time, or other date time value for the end of this crop plot.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * A field crop grown on this crop plot.
	 * @see https://vocabulary.uncefact.org/grownCrop
	 */
	grownCrop?: IFieldCrop[];

	/**
	 * The identifier for this crop plot.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A crop plot included in this crop plot.
	 * @see https://vocabulary.uncefact.org/includedPlot
	 */
	includedPlot?: IPlot[];

	/**
	 * The indication of whether or not this crop plot is certified as regulatory organic.
	 * @see https://vocabulary.uncefact.org/regulatoryOrganicIndicator
	 */
	regulatoryOrganicIndicator?: boolean;

	/**
	 * The code specifying the type of regulatory soil for this crop plot.
	 * @see https://vocabulary.uncefact.org/regulatorySoilTypeCode
	 */
	regulatorySoilTypeCode?: string;

	/**
	 * An agricultural certificate specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCertificate
	 */
	specifiedAgriculturalCertificate?: IAgriculturalCertificate[];

	/**
	 * An agricultural characteristic specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IAgriculturalCharacteristic[];

	/**
	 * An agricultural zone area specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalZoneArea
	 */
	specifiedAgriculturalZoneArea?: IAgriculturalZoneArea[];

	/**
	 * An agricultural zone area specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedArea
	 * @deprecated
	 */
	specifiedArea?: IArea[];

	/**
	 * The referenced location specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * The date, time, date time, or other date time value for the start of this crop plot.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;
}
