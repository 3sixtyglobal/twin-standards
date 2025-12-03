// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductionWasteMaterialComponent } from "./IProductionWasteMaterialComponent.js";
import type { IProductionWasteRecoveryDisposalProcess } from "./IProductionWasteRecoveryDisposalProcess.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any materials unused and rejected as unwanted during a production process.
 * @see https://vocabulary.uncefact.org/ProductionWasteMaterial
 */
export interface IProductionWasteMaterial extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionWasteMaterial;

	/**
	 * A product certificate applicable to this production waste material.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A production waste recovery disposal process applicable to this production waste material.
	 * @see https://vocabulary.uncefact.org/applicableProductionWasteRecoveryDisposalProcess
	 */
	applicableProductionWasteRecoveryDisposalProcess?: IProductionWasteRecoveryDisposalProcess[];

	/**
	 * A sustainability characteristic applicable to this production waste material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A production waste material component included in this production waste material.
	 * @see https://vocabulary.uncefact.org/includedProductionWasteMaterialComponent
	 */
	includedProductionWasteMaterialComponent?: IProductionWasteMaterialComponent[];

	/**
	 * The code specifying the type of production waste material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A measure of the volume of this production waste material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IMeasureType[];

	/**
	 * A measure of the weight of this production waste material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];
}
