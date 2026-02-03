// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceAgriculturalCertificate } from "./IUneceAgriculturalCertificate.js";
import type { IUneceAgriculturalCharacteristic } from "./IUneceAgriculturalCharacteristic.js";
import type { IUneceAgriculturalProcess } from "./IUneceAgriculturalProcess.js";
import type { IUneceAgriculturalZoneArea } from "./IUneceAgriculturalZoneArea.js";
import type { IUneceArea } from "./IUneceArea.js";
import type { IUneceFieldCrop } from "./IUneceFieldCrop.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A small piece of land or water used for a crop such as an agricultural or aquacultural crop.
 * @see https://vocabulary.uncefact.org/Plot
 */
export interface IUnecePlot extends IJsonLdNodeObject {
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
	applicableAgriculturalProcess?: IUneceAgriculturalProcess;

	/**
	 * A specified agricultural application applied to this crop plot.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication;

	/**
	 * The area measure for this crop plot.
	 * @see https://vocabulary.uncefact.org/areaMeasure
	 */
	areaMeasure?: IUneceMeasureType;

	/**
	 * The date, time, date time, or other date time value for the end of this crop plot.
	 * @see https://vocabulary.uncefact.org/endDateTime
	 */
	endDateTime?: string;

	/**
	 * A field crop grown on this crop plot.
	 * @see https://vocabulary.uncefact.org/grownCrop
	 */
	grownCrop?: IUneceFieldCrop;

	/**
	 * The identifier for this crop plot.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A crop plot included in this crop plot.
	 * @see https://vocabulary.uncefact.org/includedPlot
	 */
	includedPlot?: IUnecePlot;

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
	specifiedAgriculturalCertificate?: IUneceAgriculturalCertificate;

	/**
	 * An agricultural characteristic specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IUneceAgriculturalCharacteristic;

	/**
	 * An agricultural zone area specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalZoneArea
	 */
	specifiedAgriculturalZoneArea?: IUneceAgriculturalZoneArea;

	/**
	 * An agricultural zone area specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedArea
	 * @deprecated
	 */
	specifiedArea?: IUneceArea;

	/**
	 * The referenced location specified for this crop plot.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation;

	/**
	 * The date, time, date time, or other date time value for the start of this crop plot.
	 * @see https://vocabulary.uncefact.org/startDateTime
	 */
	startDateTime?: string;
}
