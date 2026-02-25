// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceAgriculturalCertificate } from "./IUneceAgriculturalCertificate.js";
import type { IUneceAgriculturalCharacteristic } from "./IUneceAgriculturalCharacteristic.js";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePicture } from "./IUnecePicture.js";
import type { IUneceProductBatchCertificate } from "./IUneceProductBatchCertificate.js";
import type { IUneceProductBatchCertification } from "./IUneceProductBatchCertification.js";
import type { IUneceProductBatchCharacteristic } from "./IUneceProductBatchCharacteristic.js";
import type { IUneceProductFinishingTreatment } from "./IUneceProductFinishingTreatment.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedChemicalTreatment } from "./IUneceSpecifiedChemicalTreatment.js";
import type { IUneceSpecifiedFault } from "./IUneceSpecifiedFault.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceProductBatchTypeCodeList } from "../typeCodes/uneceProductBatchTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of products considered or dealt with together.
 * @see https://vocabulary.uncefact.org/ProductBatch
 */
export interface IUneceProductBatch {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductBatch;

	/**
	 * An assessment applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IUneceAssessment[];

	/**
	 * Disposal instructions applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableDisposalInstructions
	 */
	applicableDisposalInstructions?: IUneceDisposalInstructions[];

	/**
	 * A specified fault applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: IUneceSpecifiedFault[];

	/**
	 * A specified period applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A certification applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCertification
	 */
	applicableProductBatchCertification?: IUneceProductBatchCertification[];

	/**
	 * A product batch characteristic applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCharacteristic
	 */
	applicableProductBatchCharacteristic?: IUneceProductBatchCharacteristic[];

	/**
	 * A certificate applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * Packaging applicable for use with this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSupplyChainPackaging
	 */
	applicableSupplyChainPackaging?: IUneceSupplyChainPackaging[];

	/**
	 * A sustainability inspection applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * A specified agricultural application applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication[];

	/**
	 * A chemical treatment applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: IUneceSpecifiedChemicalTreatment[];

	/**
	 * A product finishing treatment applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IUneceProductFinishingTreatment[];

	/**
	 * A treatment, expressed as text, applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedTreatment
	 */
	appliedTreatment?: string;

	/**
	 * A buyer assigned identifier of this product batch.
	 * @see https://vocabulary.uncefact.org/buyerAssignedId
	 */
	buyerAssignedId?: string;

	/**
	 * A product batch component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentBatch
	 */
	componentBatch?: IUneceProductBatch[];

	/**
	 * A specified material component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A trade product component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentProduct
	 */
	componentProduct?: IUneceTradeProduct[];

	/**
	 * The date, time, date time or other date time value of the creation of this product batch.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The DNA marker identifier of this product batch.
	 * @see https://vocabulary.uncefact.org/dNAMarkerId
	 */
	dNAMarkerId?: string;

	/**
	 * A textual description of this product batch.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description of this product batch.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * A global identifier of this product batch.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * A measure of the gross volume of this product batch.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the gross weight of this product batch.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IUneceMeasureType[];

	/**
	 * The identifier for this product batch.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A manufacturer assigned identifier of this product batch.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedId
	 */
	manufacturerAssignedId?: string;

	/**
	 * A measure of the mass of this product batch.
	 * @see https://vocabulary.uncefact.org/massMeasure
	 */
	massMeasure?: IUneceMeasureType[];

	/**
	 * A mass measure of this product batch expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the maximum size of this product batch.
	 * @see https://vocabulary.uncefact.org/maximumSizeMeasure
	 */
	maximumSizeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the minimum size of this product batch.
	 * @see https://vocabulary.uncefact.org/minimumSizeMeasure
	 */
	minimumSizeMeasure?: IUneceMeasureType[];

	/**
	 * The name, expressed as text, of this product batch.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A measure of the net volume of this product batch.
	 * @see https://vocabulary.uncefact.org/netVolumeMeasure
	 */
	netVolumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the net weight of this product batch.
	 * @see https://vocabulary.uncefact.org/netWeightMeasure
	 */
	netWeightMeasure?: IUneceMeasureType[];

	/**
	 * The product name, expressed as text, for this product batch.
	 * @see https://vocabulary.uncefact.org/productName
	 */
	productName?: string;

	/**
	 * The code specifying the production mode for this product batch.
	 * @see https://vocabulary.uncefact.org/productionModeCode
	 */
	productionModeCode?: string;

	/**
	 * A seller assigned identifier of this product batch.
	 * @see https://vocabulary.uncefact.org/sellerAssignedId
	 */
	sellerAssignedId?: string;

	/**
	 * The size, expressed as a measure, for this product batch.
	 * @see https://vocabulary.uncefact.org/sizeMeasure
	 */
	sizeMeasure?: IUneceMeasureType;

	/**
	 * An agricultural certificate specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCertificate
	 */
	specifiedAgriculturalCertificate?: IUneceAgriculturalCertificate[];

	/**
	 * An agricultural characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IUneceAgriculturalCharacteristic[];

	/**
	 * A sustainability assertion specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A referenced document specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument[];

	/**
	 * A referenced location specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: IUneceLocation[];

	/**
	 * A note specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedNote
	 */
	specifiedNote?: IUneceNote[];

	/**
	 * A photographic picture specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedPicture
	 */
	specifiedPicture?: IUnecePicture[];

	/**
	 * A production process specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProcess
	 */
	specifiedProcess?: IUneceProductionProcess[];

	/**
	 * A certificate specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IUneceProductBatchCertificate[];

	/**
	 * A product batch characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCharacteristic
	 */
	specifiedProductBatchCharacteristic?: IUneceProductBatchCharacteristic[];

	/**
	 * A supply chain event specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The code specifying the status of this product batch.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of product batch.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceProductBatchTypeCodeList | string;

	/**
	 * The number of units, expressed as a quantity, for this product batch.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The weight, expressed as a measure, for this product batch.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType;
}
