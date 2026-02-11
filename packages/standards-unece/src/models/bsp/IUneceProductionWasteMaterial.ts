// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductionWasteMaterialComponent } from "./IUneceProductionWasteMaterialComponent.js";
import type { IUneceProductionWasteRecoveryDisposalProcess } from "./IUneceProductionWasteRecoveryDisposalProcess.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceProductionWasteMaterialTypeCodeList } from "../typeCodes/uneceProductionWasteMaterialTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any materials unused and rejected as unwanted during a production process.
 * @see https://vocabulary.uncefact.org/ProductionWasteMaterial
 */
export interface IUneceProductionWasteMaterial extends IJsonLdNodeObject {
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
	applicableProductCertificate?: IUneceProductCertificate[];

	/**
	 * A production waste recovery disposal process applicable to this production waste material.
	 * @see https://vocabulary.uncefact.org/applicableProductionWasteRecoveryDisposalProcess
	 */
	applicableProductionWasteRecoveryDisposalProcess?: IUneceProductionWasteRecoveryDisposalProcess[];

	/**
	 * A sustainability characteristic applicable to this production waste material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A production waste material component included in this production waste material.
	 * @see https://vocabulary.uncefact.org/includedProductionWasteMaterialComponent
	 */
	includedProductionWasteMaterialComponent?: IUneceProductionWasteMaterialComponent[];

	/**
	 * The code specifying the type of production waste material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProductionWasteMaterialTypeCodeList | string;

	/**
	 * A measure of the volume of this production waste material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the weight of this production waste material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType[];
}
