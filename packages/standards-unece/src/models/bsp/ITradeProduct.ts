// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IAssessment } from "./IAssessment.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IClassification } from "./IClassification.js";
import type { IColour } from "./IColour.js";
import type { ICountry } from "./ICountry.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IDisposalInstructions } from "./IDisposalInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { IDurationUnitMeasureType } from "./IDurationUnitMeasureType.js";
import type { IGoodsCharacteristic } from "./IGoodsCharacteristic.js";
import type { IKeyword } from "./IKeyword.js";
import type { ILicence } from "./ILicence.js";
import type { ILocation } from "./ILocation.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { ILogisticsPackaging } from "./ILogisticsPackaging.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IPicture } from "./IPicture.js";
import type { IPrint } from "./IPrint.js";
import type { IProduct } from "./IProduct.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { IProductFinishingTreatment } from "./IProductFinishingTreatment.js";
import type { IProductGroup } from "./IProductGroup.js";
import type { IProductInstance } from "./IProductInstance.js";
import type { IProductionFacility } from "./IProductionFacility.js";
import type { IProductionProcess } from "./IProductionProcess.js";
import type { IProductLabel } from "./IProductLabel.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISecurityTag } from "./ISecurityTag.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { ISpecifiedCertificate } from "./ISpecifiedCertificate.js";
import type { ISpecifiedChemicalTreatment } from "./ISpecifiedChemicalTreatment.js";
import type { ISpecifiedDeclaration } from "./ISpecifiedDeclaration.js";
import type { ISpecifiedFault } from "./ISpecifiedFault.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISpecifiedMethod } from "./ISpecifiedMethod.js";
import type { ISpecifiedParameter } from "./ISpecifiedParameter.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { ISupplyChainTradeTransaction } from "./ISupplyChainTradeTransaction.js";
import type { ISupplyPlan } from "./ISupplyPlan.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITechnicalCharacteristic } from "./ITechnicalCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradePrice } from "./ITradePrice.js";
import type { ITradeProductCertification } from "./ITradeProductCertification.js";
import type { ITradeProductFeature } from "./ITradeProductFeature.js";
import type { ITTAnimal } from "./ITTAnimal.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any tangible output or service produced by human or mechanical effort or by a natural process for trade purposes.
 * @see https://vocabulary.uncefact.org/TradeProduct
 */
export interface ITradeProduct extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TradeProduct;

	/**
	 * A measure of the acquisition lead time for this trade product.
	 * @see https://vocabulary.uncefact.org/acquisitionLeadTimeMeasure
	 */
	acquisitionLeadTimeMeasure?: IMeasureType[];

	/**
	 * An additional textual description for this trade product.
	 * @see https://vocabulary.uncefact.org/additionalDescription
	 */
	additionalDescription?: string;

	/**
	 * An additional referenced document for this trade product, such as a manual or a certificate.
	 * @see https://vocabulary.uncefact.org/additionalReferenceDocument
	 */
	additionalReferenceDocument?: IDocument[];

	/**
	 * An assessment applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IAssessment[];

	/**
	 * Transport dangerous goods information applicable for this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IDangerousGoods[];

	/**
	 * A specified declaration applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: ISpecifiedDeclaration[];

	/**
	 * Disposal instructions applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDisposalInstructions
	 */
	applicableDisposalInstructions?: IDisposalInstructions[];

	/**
	 * A fault applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: ISpecifiedFault[];

	/**
	 * A material goods characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IGoodsCharacteristic[];

	/**
	 * A keyword applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableKeyword
	 */
	applicableKeyword?: IKeyword[];

	/**
	 * A specified licence applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: ILicence[];

	/**
	 * Logistics packaging applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableLogisticsPackaging
	 */
	applicableLogisticsPackaging?: ILogisticsPackaging[];

	/**
	 * A specified period applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: ISpecifiedPeriod[];

	/**
	 * A characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * A production process applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableProductionProcess
	 */
	applicableProductionProcess?: IProductionProcess[];

	/**
	 * A certificate applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: ISpecifiedCertificate[];

	/**
	 * An inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * Packaging applicable for use with this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSupplyChainPackaging
	 */
	applicableSupplyChainPackaging?: ISupplyChainPackaging[];

	/**
	 * A sustainability characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A technical characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: ITechnicalCharacteristic[];

	/**
	 * A certification applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: ITradeProductCertification[];

	/**
	 * A chemical treatment applied to this trade product.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: ISpecifiedChemicalTreatment[];

	/**
	 * A product finishing treatment applied to this trade product.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IProductFinishingTreatment[];

	/**
	 * The measure of the area density, such as paper density 100 gsm, of this trade product.
	 * @see https://vocabulary.uncefact.org/areaDensityMeasure
	 */
	areaDensityMeasure?: IMeasureType;

	/**
	 * A tag device attached to this trade product to provide protection from a peril such as theft.
	 * @see https://vocabulary.uncefact.org/attachedSecurityTag
	 */
	attachedSecurityTag?: ISecurityTag[];

	/**
	 * A code specifying the available measurement of this trade product.
	 * @see https://vocabulary.uncefact.org/availableMeasurementCode
	 */
	availableMeasurementCode?: string;

	/**
	 * A batch identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/batchId
	 */
	batchId?: string;

	/**
	 * The indication of whether or not this trade product is biologically based.
	 * @see https://vocabulary.uncefact.org/biologicallyBasedIndicator
	 */
	biologicallyBasedIndicator?: boolean;

	/**
	 * The brand name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/brandName
	 */
	brandName?: string;

	/**
	 * The party that owns the brand of this trade product.
	 * @see https://vocabulary.uncefact.org/brandOwnerParty
	 */
	brandOwnerParty?: ITradeParty;

	/**
	 * The brand range name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/brandRangeName
	 */
	brandRangeName?: string;

	/**
	 * The unique buyer assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/buyerAssignedId
	 */
	buyerAssignedId?: string;

	/**
	 * A buyer supplier parts document referenced for this trade product.
	 * @see https://vocabulary.uncefact.org/buyerSuppliedPartsReferenceDocument
	 */
	buyerSuppliedPartsReferenceDocument?: IDocument[];

	/**
	 * The CITES (Convention on International Trade in Endangered Species) code for this trade product.
	 * @see https://vocabulary.uncefact.org/cITESSpeciesCode
	 */
	cITESSpeciesCode?: string;

	/**
	 * The formatted date, time, date time, or other date time value of the cancellation of the announced launch of this trade
	 * product.
	 * @see https://vocabulary.uncefact.org/cancellationAnnouncedLaunchDateTime
	 */
	cancellationAnnouncedLaunchDateTime?: string;

	/**
	 * A product care label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/careSpecifiedLabel
	 */
	careSpecifiedLabel?: IProductLabel[];

	/**
	 * A referenced certification evidence document for this trade product.
	 * @see https://vocabulary.uncefact.org/certificationEvidenceReferenceDocument
	 */
	certificationEvidenceReferenceDocument?: IDocument[];

	/**
	 * The code specifying the classification for this trade product.
	 * @see https://vocabulary.uncefact.org/classificationCode
	 */
	classificationCode?: string;

	/**
	 * A collection identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/collectionId
	 */
	collectionId?: string;

	/**
	 * The code specifying the collection status of this trade product.
	 * @see https://vocabulary.uncefact.org/collectionStatusCode
	 */
	collectionStatusCode?: string;

	/**
	 * The code specifying the colour for this trade product.
	 * @see https://vocabulary.uncefact.org/colourCode
	 */
	colourCode?: string;

	/**
	 * A textual description of the colour of this trade product.
	 * @see https://vocabulary.uncefact.org/colourDescription
	 */
	colourDescription?: string;

	/**
	 * The code specifying the light source used for colour matching of this trade product.
	 * @see https://vocabulary.uncefact.org/colourMatchingLightSourceCode
	 */
	colourMatchingLightSourceCode?: string;

	/**
	 * An identifier of the colour matching sample for this trade product.
	 * @see https://vocabulary.uncefact.org/colourMatchingSampleId
	 */
	colourMatchingSampleId?: string;

	/**
	 * A common name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/commonName
	 */
	commonName?: string;

	/**
	 * A material component of this trade product.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: ISpecifiedMaterial[];

	/**
	 * A concise textual description for this trade product, such as the description used on a shelf or printed on a receipt.
	 * @see https://vocabulary.uncefact.org/conciseDescription
	 */
	conciseDescription?: string;

	/**
	 * The indication of whether or not this trade product is configurable.
	 * @see https://vocabulary.uncefact.org/configurableIndicator
	 */
	configurableIndicator?: boolean;

	/**
	 * A consumer age description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/consumerAgeDescription
	 */
	consumerAgeDescription?: string;

	/**
	 * The code specifying the gender of the consumer of this trade product.
	 * @see https://vocabulary.uncefact.org/consumerGenderCode
	 */
	consumerGenderCode?: string;

	/**
	 * A consumer gender description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/consumerGenderDescription
	 */
	consumerGenderDescription?: string;

	/**
	 * The number of content units of this trade product.
	 * @see https://vocabulary.uncefact.org/contentUnitQuantity
	 */
	contentUnitQuantity?: IQuantityType[];

	/**
	 * The indication of whether or not instances of this trade product have a content variable measure, such as weight, length
	 * or volume.
	 * @see https://vocabulary.uncefact.org/contentVariableMeasureIndicator
	 */
	contentVariableMeasureIndicator?: boolean;

	/**
	 * The code specifying the criticality type of this trade product.
	 * @see https://vocabulary.uncefact.org/criticalityTypeCode
	 */
	criticalityTypeCode?: string;

	/**
	 * A unique customer assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/customerAssignedId
	 */
	customerAssignedId?: string;

	/**
	 * The code specifying the customs statistical classification for this trade product.
	 * @see https://vocabulary.uncefact.org/customsStatisticalClassificationCode
	 */
	customsStatisticalClassificationCode?: string;

	/**
	 * The DNA marker identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/dNAMarkerId
	 */
	dNAMarkerId?: string;

	/**
	 * A textual description for this trade product.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the description of this trade product.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * A product classification designated for this trade product.
	 * @see https://vocabulary.uncefact.org/designatedClassification
	 */
	designatedClassification?: IClassification[];

	/**
	 * A designation, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/designation
	 */
	designation?: string;

	/**
	 * The digital platform assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/digitalPlatformAssignedId
	 */
	digitalPlatformAssignedId?: string;

	/**
	 * A distributor trade party for this trade product.
	 * @see https://vocabulary.uncefact.org/distributorParty
	 */
	distributorParty?: ITradeParty[];

	/**
	 * The measure of the drained net weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/drainedNetWeightMeasure
	 */
	drainedNetWeightMeasure?: IMeasureType[];

	/**
	 * The EPC (Electronic Product Code) identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/ePCId
	 */
	ePCId?: string;

	/**
	 * An end item name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/endItemName
	 */
	endItemName?: string;

	/**
	 * A code specifying a type of end item for this trade product.
	 * @see https://vocabulary.uncefact.org/endItemTypeCode
	 */
	endItemTypeCode?: string;

	/**
	 * An end use product group for this trade product.
	 * @see https://vocabulary.uncefact.org/endUseProductGroup
	 */
	endUseProductGroup?: IProductGroup[];

	/**
	 * An end user party for this trade product.
	 * @see https://vocabulary.uncefact.org/endUserParty
	 */
	endUserParty?: ITradeParty[];

	/**
	 * The indication of whether or not this trade product is for export.
	 * @see https://vocabulary.uncefact.org/exportIndicator
	 */
	exportIndicator?: boolean;

	/**
	 * A code specifying the Federal Item Identification Guide (FIIG) criticality type of this trade product.
	 * @see https://vocabulary.uncefact.org/fIIGCriticalityTypeCode
	 */
	fIIGCriticalityTypeCode?: string;

	/**
	 * A unique Federal Supply Class (FSC) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/fSCId
	 */
	fSCId?: string;

	/**
	 * A final assembly country for this trade product.
	 * @see https://vocabulary.uncefact.org/finalAssemblyCountry
	 */
	finalAssemblyCountry?: ICountry[];

	/**
	 * The measure of the life span of this trade product from date of delivery.
	 * @see https://vocabulary.uncefact.org/fromDeliveryLifeSpanMeasure
	 */
	fromDeliveryLifeSpanMeasure?: IDurationUnitMeasureType[];

	/**
	 * The measure of the life span of this trade product from date of opening.
	 * @see https://vocabulary.uncefact.org/fromOpeningLifeSpanMeasure
	 */
	fromOpeningLifeSpanMeasure?: IDurationUnitMeasureType[];

	/**
	 * The measure of the life span of this trade product from date of production.
	 * @see https://vocabulary.uncefact.org/fromProductionLifeSpanMeasure
	 */
	fromProductionLifeSpanMeasure?: IDurationUnitMeasureType[];

	/**
	 * A textual description of a function for this trade product.
	 * @see https://vocabulary.uncefact.org/functionDescription
	 */
	functionDescription?: string;

	/**
	 * The code specifying the type of function for this trade product.
	 * @see https://vocabulary.uncefact.org/functionTypeCode
	 */
	functionTypeCode?: string;

	/**
	 * A Global Trade Item Number (GTIN) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/gTINId
	 */
	gTINId?: string;

	/**
	 * The code specifying the extent of a genetic modification to this trade product.
	 * @see https://vocabulary.uncefact.org/geneticModificationExtentCode
	 */
	geneticModificationExtentCode?: string;

	/**
	 * A global extension identifier for this trade product, such as a prefix or a suffix.
	 * @see https://vocabulary.uncefact.org/globalExtensionId
	 */
	globalExtensionId?: string;

	/**
	 * A unique global identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * A measure of the gross volume for this trade product.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IMeasureType;

	/**
	 * A measure of the gross weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IMeasureType[];

	/**
	 * A unique identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An included product referenced from this trade product.
	 * @see https://vocabulary.uncefact.org/includedProduct
	 */
	includedProduct?: IProduct[];

	/**
	 * The number of content units of products included in this trade product.
	 * @see https://vocabulary.uncefact.org/includedProductContentUnitQuantity
	 */
	includedProductContentUnitQuantity?: IQuantityType[];

	/**
	 * The number of different product types included at the next lower level in this trade product.
	 * @see https://vocabulary.uncefact.org/includedProductTypeQuantity
	 */
	includedProductTypeQuantity?: IQuantityType[];

	/**
	 * An individual instance of this trade product.
	 * @see https://vocabulary.uncefact.org/individualProductInstance
	 */
	individualProductInstance?: IProductInstance[];

	/**
	 * A unique industry assigned identifier for this product.
	 * @see https://vocabulary.uncefact.org/industryAssignedId
	 */
	industryAssignedId?: string;

	/**
	 * An information note for this trade product.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: INote[];

	/**
	 * The number of content units in an inner pack of this trade product.
	 * @see https://vocabulary.uncefact.org/innerPackContentUnitQuantity
	 */
	innerPackContentUnitQuantity?: IQuantityType[];

	/**
	 * The number of inner packs of this trade product.
	 * @see https://vocabulary.uncefact.org/innerPackQuantity
	 */
	innerPackQuantity?: IQuantityType[];

	/**
	 * A referenced inspection document for this trade product.
	 * @see https://vocabulary.uncefact.org/inspectionReferenceDocument
	 */
	inspectionReferenceDocument?: IDocument[];

	/**
	 * An intended use, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/intendedUse
	 */
	intendedUse?: string;

	/**
	 * The formatted date, time, date time, or other date time value of the latest change in the product data for this trade
	 * product.
	 * @see https://vocabulary.uncefact.org/latestProductDataChangeDateTime
	 */
	latestProductDataChangeDateTime?: string;

	/**
	 * The party that owns the legal rights for this trade product.
	 * @see https://vocabulary.uncefact.org/legalRightsOwnerParty
	 */
	legalRightsOwnerParty?: ITradeParty;

	/**
	 * The code specifying the life cycle stage for this trade product.
	 * @see https://vocabulary.uncefact.org/lifeCycleStageCode
	 */
	lifeCycleStageCode?: string;

	/**
	 * A product line, such as a fashion product line, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/line
	 */
	line?: string;

	/**
	 * Linear spatial dimensions of this trade product.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * A Material Safety Data Sheet (MSDS) document referenced for this product.
	 * @see https://vocabulary.uncefact.org/mSDSReferenceDocument
	 */
	mSDSReferenceDocument?: IDocument[];

	/**
	 * The MSRP (Manufacturer Suggested Retail Price) for this trade product.
	 * @see https://vocabulary.uncefact.org/mSRPPrice
	 */
	mSRPPrice?: ITradePrice[];

	/**
	 * The country of manufacture of this trade product.
	 * @see https://vocabulary.uncefact.org/manufactureCountry
	 */
	manufactureCountry?: ICountry;

	/**
	 * A unique manufacturer assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedId
	 */
	manufacturerAssignedId?: string;

	/**
	 * A manufacturer party for this trade product.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The indication of whether or not this trade product is marked with a serial number.
	 * @see https://vocabulary.uncefact.org/markedSerialNumberIndicator
	 */
	markedSerialNumberIndicator?: boolean;

	/**
	 * A referenced marketing campaign document for this trade product.
	 * @see https://vocabulary.uncefact.org/marketingCampaignReferenceDocument
	 */
	marketingCampaignReferenceDocument?: IDocument[];

	/**
	 * A marketing description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/marketingDescription
	 */
	marketingDescription?: string;

	/**
	 * A marketing feature of this trade product.
	 * @see https://vocabulary.uncefact.org/marketingFeature
	 */
	marketingFeature?: ITradeProductFeature[];

	/**
	 * Maximum linear spatial dimensions of this trade product.
	 * @see https://vocabulary.uncefact.org/maximumLinearDimension
	 */
	maximumLinearDimension?: ISpatialDimension[];

	/**
	 * Minimum linear spatial dimensions of this trade product.
	 * @see https://vocabulary.uncefact.org/minimumLinearDimension
	 */
	minimumLinearDimension?: ISpatialDimension[];

	/**
	 * A unique model identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/modelId
	 */
	modelId?: string;

	/**
	 * The model name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/modelName
	 */
	modelName?: string;

	/**
	 * A unique National Item Identification Number (NIIN) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/nIINId
	 */
	nIINId?: string;

	/**
	 * A unique National Stock Number (NSN) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/nSNId
	 */
	nSNId?: string;

	/**
	 * A name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A measure of a net volume for this trade product.
	 * @see https://vocabulary.uncefact.org/netVolumeMeasure
	 */
	netVolumeMeasure?: IMeasureType;

	/**
	 * A measure of the net weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/netWeightMeasure
	 */
	netWeightMeasure?: IMeasureType;

	/**
	 * A country of origin for this trade product.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: ICountry[];

	/**
	 * A location of origin for this trade product.
	 * @see https://vocabulary.uncefact.org/originLocation
	 */
	originLocation?: ILogisticsLocation[];

	/**
	 * A textual description of the physical form of this trade product.
	 * @see https://vocabulary.uncefact.org/physicalFormDescription
	 */
	physicalFormDescription?: string;

	/**
	 * The indication of whether or not this trade product is a piece, such as a piece of fabric.
	 * @see https://vocabulary.uncefact.org/pieceIndicator
	 */
	pieceIndicator?: boolean;

	/**
	 * The indication of whether or not this trade product is pre-packaged.
	 * @see https://vocabulary.uncefact.org/prePackagedIndicator
	 */
	prePackagedIndicator?: boolean;

	/**
	 * A binary file presentation specified for this trade product.
	 * @see https://vocabulary.uncefact.org/presentationBinaryFile
	 */
	presentationBinaryFile?: IBinaryFile[];

	/**
	 * A preservation method applied to this trade product.
	 * @see https://vocabulary.uncefact.org/preservationAppliedMethod
	 */
	preservationAppliedMethod?: ISpecifiedMethod[];

	/**
	 * A textual description of the print design for this trade product.
	 * @see https://vocabulary.uncefact.org/printDesignDescription
	 */
	printDesignDescription?: string;

	/**
	 * An identifier of the print design for this trade product.
	 * @see https://vocabulary.uncefact.org/printDesignId
	 */
	printDesignId?: string;

	/**
	 * A code specifying a priority for this trade product.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * A unique identifier for a product group for this trade product.
	 * @see https://vocabulary.uncefact.org/productGroupId
	 */
	productGroupId?: string;

	/**
	 * The date, time, date time, or other date time value of the discontinuation of the production of this trade product.
	 * @see https://vocabulary.uncefact.org/productionDiscontinuedDateTime
	 */
	productionDiscontinuedDateTime?: string;

	/**
	 * A measure of the production lead time for this trade product.
	 * @see https://vocabulary.uncefact.org/productionLeadTimeMeasure
	 */
	productionLeadTimeMeasure?: IMeasureType[];

	/**
	 * The promotional variant identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/promotionalVariantId
	 */
	promotionalVariantId?: string;

	/**
	 * The code specifying the quality level for this trade product.
	 * @see https://vocabulary.uncefact.org/qualityLevelCode
	 */
	qualityLevelCode?: string;

	/**
	 * A quality parameter specified for this trade product.
	 * @see https://vocabulary.uncefact.org/qualityParameter
	 */
	qualityParameter?: ISpecifiedParameter[];

	/**
	 * The indication of whether or not this trade product is recyclable.
	 * @see https://vocabulary.uncefact.org/recyclableIndicator
	 */
	recyclableIndicator?: boolean;

	/**
	 * The indication of whether or not this trade product is made of recycled material.
	 * @see https://vocabulary.uncefact.org/recycledMaterialIndicator
	 */
	recycledMaterialIndicator?: boolean;

	/**
	 * The percentage of recycled material in this trade product.
	 * @see https://vocabulary.uncefact.org/recycledMaterialPercent
	 */
	recycledMaterialPercent?: string;

	/**
	 * The code specifying the type of recycling for this trade product.
	 * @see https://vocabulary.uncefact.org/recyclingTypeCode
	 */
	recyclingTypeCode?: string;

	/**
	 * An identifier assigned to indicate conformity with a regulation or standard for this trade product, such as "CE" which
	 * declares that the product conforms with the essential requirements of the applicable EC directives.
	 * @see https://vocabulary.uncefact.org/regulationConformityId
	 */
	regulationConformityId?: string;

	/**
	 * A code specifying a rejection reason for this trade product.
	 * @see https://vocabulary.uncefact.org/rejectionReasonCode
	 */
	rejectionReasonCode?: string;

	/**
	 * A TT (Track and Trace) animal, such as one kept or raised on a farm or ranch, related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedAnimal
	 */
	relatedAnimal?: ITTAnimal[];

	/**
	 * A referenced location related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: ILocation[];

	/**
	 * A logistics package related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedPackage
	 */
	relatedPackage?: IPackage[];

	/**
	 * A supply chain trade transaction related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: ISupplyChainTradeTransaction[];

	/**
	 * A code specifying a repair level type for this trade product.
	 * @see https://vocabulary.uncefact.org/repairLevelTypeCode
	 */
	repairLevelTypeCode?: string;

	/**
	 * A party responsible for this trade product.
	 * @see https://vocabulary.uncefact.org/responsibleParty
	 */
	responsibleParty?: ITradeParty[];

	/**
	 * A party responsible for this trade product.
	 * @see https://vocabulary.uncefact.org/responsibleTradeParty
	 */
	responsibleTradeParty?: ITradeParty[];

	/**
	 * The indication of whether or not this trade product is reusable.
	 * @see https://vocabulary.uncefact.org/reusableIndicator
	 */
	reusableIndicator?: boolean;

	/**
	 * A sales country for this trade product.
	 * @see https://vocabulary.uncefact.org/salesCountry
	 */
	salesCountry?: ICountry[];

	/**
	 * A scientific name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/scientificName
	 */
	scientificName?: string;

	/**
	 * A code specifying a season for this trade product.
	 * @see https://vocabulary.uncefact.org/seasonCode
	 */
	seasonCode?: string;

	/**
	 * A season description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/seasonDescription
	 */
	seasonDescription?: string;

	/**
	 * The code specifying the section of this trade product.
	 * @see https://vocabulary.uncefact.org/sectionCode
	 */
	sectionCode?: string;

	/**
	 * A security information note for this trade product.
	 * @see https://vocabulary.uncefact.org/securityInformationNote
	 */
	securityInformationNote?: INote;

	/**
	 * The unique seller assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/sellerAssignedId
	 */
	sellerAssignedId?: string;

	/**
	 * The code specifying the size of this trade product.
	 * @see https://vocabulary.uncefact.org/sizeCode
	 */
	sizeCode?: string;

	/**
	 * A size description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/sizeDescription
	 */
	sizeDescription?: string;

	/**
	 * The code specifying the species, such as for a plant or animal, of this trade product.
	 * @see https://vocabulary.uncefact.org/speciesCode
	 */
	speciesCode?: string;

	/**
	 * A sustainability assertion specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A colour specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedColour
	 */
	specifiedColour?: IColour[];

	/**
	 * A production facility specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IProductionFacility[];

	/**
	 * A product label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedLabel
	 */
	specifiedLabel?: IProductLabel[];

	/**
	 * A photographic picture specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedPicture
	 */
	specifiedPicture?: IPicture[];

	/**
	 * A product print specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedPrint
	 */
	specifiedPrint?: IPrint[];

	/**
	 * A product certificate specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IProductCertificate[];

	/**
	 * A product group specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductGroup
	 */
	specifiedProductGroup?: IProductGroup[];

	/**
	 * A product label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductLabel
	 */
	specifiedProductLabel?: IProductLabel[];

	/**
	 * A supply chain event specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * The specification of the delivery quantities and delivery date/time values in a supply plan for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyPlan
	 */
	specifiedSupplyPlan?: ISupplyPlan[];

	/**
	 * A code specifying a status for this trade product.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A storage information note for this trade product.
	 * @see https://vocabulary.uncefact.org/storageInformationNote
	 */
	storageInformationNote?: INote;

	/**
	 * The sub-brand name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/subBrandName
	 */
	subBrandName?: string;

	/**
	 * A subcontractor party for this trade product.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: ITradeParty[];

	/**
	 * The code specifying the subordinate type of trade product.
	 * @see https://vocabulary.uncefact.org/subordinateTypeCode
	 */
	subordinateTypeCode?: string;

	/**
	 * A textual description of the subordinate type for this trade product.
	 * @see https://vocabulary.uncefact.org/subordinateTypeDescription
	 */
	subordinateTypeDescription?: string;

	/**
	 * A referenced product that may substitute for this trade product.
	 * @see https://vocabulary.uncefact.org/substituteProduct
	 */
	substituteProduct?: IProduct[];

	/**
	 * A referenced product that is substituted by this trade product.
	 * @see https://vocabulary.uncefact.org/substitutedProduct
	 */
	substitutedProduct?: IProduct;

	/**
	 * A country of supply for this trade product.
	 * @see https://vocabulary.uncefact.org/suppliedFromCountry
	 */
	suppliedFromCountry?: ICountry[];

	/**
	 * An identifier for a tracking system of this trade product.
	 * @see https://vocabulary.uncefact.org/trackingSystemId
	 */
	trackingSystemId?: string;

	/**
	 * A trade name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/tradeName
	 */
	tradeName?: string;

	/**
	 * A transport information note for this trade product.
	 * @see https://vocabulary.uncefact.org/transportInformationNote
	 */
	transportInformationNote?: INote;

	/**
	 * A code specifying the type of trade product.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A textual description of the type for this trade product.
	 * @see https://vocabulary.uncefact.org/typeDescription
	 */
	typeDescription?: string;

	/**
	 * The URI (Uniform Resource Identifier), such as a web or an email address, for this trade product.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string;

	/**
	 * An ultimate customer assigned extension identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerAssignedExtensionId
	 */
	ultimateCustomerAssignedExtensionId?: string;

	/**
	 * A code specifying a type of unit for this trade product.
	 * @see https://vocabulary.uncefact.org/unitTypeCode
	 */
	unitTypeCode?: string;

	/**
	 * A usage information note for this trade product.
	 * @see https://vocabulary.uncefact.org/usageInformationNote
	 */
	usageInformationNote?: INote[];

	/**
	 * A textual description of a use of this trade product.
	 * @see https://vocabulary.uncefact.org/useDescription
	 */
	useDescription?: string;

	/**
	 * The indication of whether or not instances of this trade product have a variable measure, such as weight, length or
	 * volume.
	 * @see https://vocabulary.uncefact.org/variableMeasureIndicator
	 */
	variableMeasureIndicator?: boolean;

	/**
	 * A textual description of a variant of this trade product.
	 * @see https://vocabulary.uncefact.org/variantDescription
	 */
	variantDescription?: string;

	/**
	 * A variant identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/variantId
	 */
	variantId?: string;
}
