// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceAgriculturalCharacteristic } from "./IUneceAgriculturalCharacteristic.js";
import type { IUneceAgriculturalProcess } from "./IUneceAgriculturalProcess.js";
import type { IUneceCropMixtureConstituent } from "./IUneceCropMixtureConstituent.js";
import type { IUnecePlot } from "./IUnecePlot.js";
import type { IUneceProduce } from "./IUneceProduce.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A field with one or more cultivated plants or produce from one or more botanical species or varieties.
 * @see https://vocabulary.uncefact.org/FieldCrop
 */
export interface IUneceFieldCrop {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FieldCrop;

	/**
	 * An agricultural process crop production applicable for this field crop.
	 * @see https://vocabulary.uncefact.org/applicableAgriculturalProcess
	 */
	applicableAgriculturalProcess?: IUneceAgriculturalProcess[];

	/**
	 * An agricultural application applied to this field crop.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication[];

	/**
	 * The class name, expressed as a text, for this field crop.
	 * @see https://vocabulary.uncefact.org/className
	 */
	className?: string;

	/**
	 * A code specifying a classification for this field crop.
	 * @see https://vocabulary.uncefact.org/classificationCode
	 */
	classificationCode?: string;

	/**
	 * The code specifying the type of cultivation container, such as a pot or an iron cabinet, for this field crop.
	 * @see https://vocabulary.uncefact.org/cultivationContainerCode
	 */
	cultivationContainerCode?: string;

	/**
	 * A code specifying a type of cultivation coverage, such as glass, for this field crop.
	 * @see https://vocabulary.uncefact.org/cultivationCoverageCode
	 */
	cultivationCoverageCode?: string;

	/**
	 * The code specifying the type of cultivation medium, such as substrate, for this field crop.
	 * @see https://vocabulary.uncefact.org/cultivationMediumCode
	 */
	cultivationMediumCode?: string;

	/**
	 * The code specifying the type of cultivation for this field crop.
	 * @see https://vocabulary.uncefact.org/cultivationTypeCode
	 */
	cultivationTypeCode?: string;

	/**
	 * The textual description for this field crop.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The plot where this field crop is grown.
	 * @see https://vocabulary.uncefact.org/grownPlot
	 */
	grownPlot: IUnecePlot;

	/**
	 * A field crop grown previous to this field crop.
	 * @see https://vocabulary.uncefact.org/grownPreviousCrop
	 */
	grownPreviousCrop?: IUneceFieldCrop[];

	/**
	 * The date, time, date time, or other date time value for the harvest of this field crop.
	 * @see https://vocabulary.uncefact.org/harvestDateTime
	 * @json-schema format:date-time
	 */
	harvestDateTime?: string;

	/**
	 * Produce harvested from this field crop.
	 * @see https://vocabulary.uncefact.org/harvestedProduce
	 */
	harvestedProduce?: IUneceProduce[];

	/**
	 * A code specifying a reason for planting this field crop.
	 * @see https://vocabulary.uncefact.org/plantingReasonCode
	 */
	plantingReasonCode?: string;

	/**
	 * The code specifying the production environment for this field crop.
	 * @see https://vocabulary.uncefact.org/productionEnvironmentCode
	 */
	productionEnvironmentCode?: string;

	/**
	 * The code specifying the production period for this field crop.
	 * @see https://vocabulary.uncefact.org/productionPeriodCode
	 */
	productionPeriodCode?: string;

	/**
	 * The indication of whether or not a field crop is to be used as propagation material.
	 * @see https://vocabulary.uncefact.org/propagationMaterialIndicator
	 */
	propagationMaterialIndicator?: boolean;

	/**
	 * A code specifying a purpose for this field crop.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The code specifying the sowing period for this field crop, such as spring or winter.
	 * @see https://vocabulary.uncefact.org/sowingPeriodCode
	 */
	sowingPeriodCode?: string;

	/**
	 * An agricultural characteristic specified for this field crop.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IUneceAgriculturalCharacteristic[];

	/**
	 * A field crop mixture constituent specified for this field crop.
	 * @see https://vocabulary.uncefact.org/specifiedCropMixtureConstituent
	 */
	specifiedCropMixtureConstituent: IUneceCropMixtureConstituent[];
}
