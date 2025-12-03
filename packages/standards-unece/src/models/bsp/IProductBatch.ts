// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalApplication } from "./IAgriculturalApplication.js";
import type { IAgriculturalCertificate } from "./IAgriculturalCertificate.js";
import type { IAgriculturalCharacteristic } from "./IAgriculturalCharacteristic.js";
import type { IAssertion } from "./IAssertion.js";
import type { IAssessment } from "./IAssessment.js";
import type { IDisposalInstructions } from "./IDisposalInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { ILocation } from "./ILocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { INote } from "./INote.js";
import type { IPicture } from "./IPicture.js";
import type { IProductBatchCertificate } from "./IProductBatchCertificate.js";
import type { IProductBatchCertification } from "./IProductBatchCertification.js";
import type { IProductBatchCharacteristic } from "./IProductBatchCharacteristic.js";
import type { IProductFinishingTreatment } from "./IProductFinishingTreatment.js";
import type { IProductionProcess } from "./IProductionProcess.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedChemicalTreatment } from "./ISpecifiedChemicalTreatment.js";
import type { ISpecifiedFault } from "./ISpecifiedFault.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of products considered or dealt with together.
 * @see https://vocabulary.uncefact.org/ProductBatch
 */
export interface IProductBatch extends IJsonLdNodeObject {
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
	applicableAssessment?: IAssessment[];

	/**
	 * Disposal instructions applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableDisposalInstructions
	 */
	applicableDisposalInstructions?: IDisposalInstructions[];

	/**
	 * A specified fault applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: ISpecifiedFault[];

	/**
	 * A specified period applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: ISpecifiedPeriod[];

	/**
	 * A certification applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCertification
	 */
	applicableProductBatchCertification?: IProductBatchCertification[];

	/**
	 * A product batch characteristic applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableProductBatchCharacteristic
	 */
	applicableProductBatchCharacteristic?: IProductBatchCharacteristic[];

	/**
	 * A certificate applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * A specified inspection applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * Packaging applicable for use with this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSupplyChainPackaging
	 */
	applicableSupplyChainPackaging?: ISupplyChainPackaging[];

	/**
	 * A sustainability inspection applicable to this product batch.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A specified agricultural application applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IAgriculturalApplication[];

	/**
	 * A chemical treatment applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: ISpecifiedChemicalTreatment[];

	/**
	 * A product finishing treatment applied to this product batch.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IProductFinishingTreatment[];

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
	componentBatch?: IProductBatch[];

	/**
	 * A specified material component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: ISpecifiedMaterial[];

	/**
	 * A trade product component of this product batch.
	 * @see https://vocabulary.uncefact.org/componentProduct
	 */
	componentProduct?: ITradeProduct[];

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
	grossVolumeMeasure?: IMeasureType;

	/**
	 * A measure of the gross weight of this product batch.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IMeasureType[];

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
	massMeasure?: IMeasureType[];

	/**
	 * A mass measure of this product batch expressed as a ratio to another mass, such as the total mass.
	 * @see https://vocabulary.uncefact.org/massRatioMeasure
	 */
	massRatioMeasure?: IMeasureType[];

	/**
	 * A measure of the maximum size of this product batch.
	 * @see https://vocabulary.uncefact.org/maximumSizeMeasure
	 */
	maximumSizeMeasure?: IMeasureType[];

	/**
	 * A measure of the minimum size of this product batch.
	 * @see https://vocabulary.uncefact.org/minimumSizeMeasure
	 */
	minimumSizeMeasure?: IMeasureType[];

	/**
	 * The name, expressed as text, of this product batch.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A measure of the net volume of this product batch.
	 * @see https://vocabulary.uncefact.org/netVolumeMeasure
	 */
	netVolumeMeasure?: IMeasureType;

	/**
	 * A measure of the net weight of this product batch.
	 * @see https://vocabulary.uncefact.org/netWeightMeasure
	 */
	netWeightMeasure?: IMeasureType;

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
	sizeMeasure?: IMeasureType[];

	/**
	 * An agricultural certificate specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCertificate
	 */
	specifiedAgriculturalCertificate?: IAgriculturalCertificate[];

	/**
	 * An agricultural characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic
	 */
	specifiedAgriculturalCharacteristic?: IAgriculturalCharacteristic[];

	/**
	 * A sustainability assertion specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A referenced document specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * A referenced location specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedLocation
	 */
	specifiedLocation?: ILocation[];

	/**
	 * A note specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedNote
	 */
	specifiedNote?: INote[];

	/**
	 * A photographic picture specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedPicture
	 */
	specifiedPicture?: IPicture[];

	/**
	 * A production process specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProcess
	 */
	specifiedProcess?: IProductionProcess[];

	/**
	 * A certificate specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCertificate
	 */
	specifiedProductBatchCertificate?: IProductBatchCertificate[];

	/**
	 * A product batch characteristic specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedProductBatchCharacteristic
	 */
	specifiedProductBatchCharacteristic?: IProductBatchCharacteristic[];

	/**
	 * A supply chain event specified for this product batch.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The code specifying the status of this product batch.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * The code specifying the type of product batch.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The number of units, expressed as a quantity, for this product batch.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];

	/**
	 * The weight, expressed as a measure, for this product batch.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];
}
