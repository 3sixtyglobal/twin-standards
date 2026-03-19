// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceClassification } from "./IUneceClassification.js";
import type { IUneceColour } from "./IUneceColour.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceDisposalInstructions } from "./IUneceDisposalInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceGoodsCharacteristic } from "./IUneceGoodsCharacteristic.js";
import type { IUneceKeyword } from "./IUneceKeyword.js";
import type { IUneceLicence } from "./IUneceLicence.js";
import type { IUneceLocation } from "./IUneceLocation.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceLogisticsPackaging } from "./IUneceLogisticsPackaging.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUnecePicture } from "./IUnecePicture.js";
import type { IUnecePrint } from "./IUnecePrint.js";
import type { IUneceProduct } from "./IUneceProduct.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceProductFinishingTreatment } from "./IUneceProductFinishingTreatment.js";
import type { IUneceProductGroup } from "./IUneceProductGroup.js";
import type { IUneceProductInstance } from "./IUneceProductInstance.js";
import type { IUneceProductionFacility } from "./IUneceProductionFacility.js";
import type { IUneceProductionProcess } from "./IUneceProductionProcess.js";
import type { IUneceProductLabel } from "./IUneceProductLabel.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSecurityTag } from "./IUneceSecurityTag.js";
import type { IUneceSpatialDimension } from "./IUneceSpatialDimension.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedChemicalTreatment } from "./IUneceSpecifiedChemicalTreatment.js";
import type { IUneceSpecifiedDeclaration } from "./IUneceSpecifiedDeclaration.js";
import type { IUneceSpecifiedFault } from "./IUneceSpecifiedFault.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSpecifiedMethod } from "./IUneceSpecifiedMethod.js";
import type { IUneceSpecifiedParameter } from "./IUneceSpecifiedParameter.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { IUneceSupplyChainTradeTransaction } from "./IUneceSupplyChainTradeTransaction.js";
import type { IUneceSupplyPlan } from "./IUneceSupplyPlan.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTechnicalCharacteristic } from "./IUneceTechnicalCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { IUneceTradeProductCertification } from "./IUneceTradeProductCertification.js";
import type { IUneceTradeProductFeature } from "./IUneceTradeProductFeature.js";
import type { IUneceTTAnimal } from "./IUneceTTAnimal.js";
import type { UneceTradeProductTypeCodeList } from "../typeCodes/uneceTradeProductTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any tangible output or service produced by human or mechanical effort or by a natural process for trade purposes.
 * @see https://vocabulary.uncefact.org/TradeProduct
 */
export interface IUneceTradeProduct {
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
	acquisitionLeadTimeMeasure?: IUneceMeasureType[];

	/**
	 * An additional textual description for this trade product.
	 * @see https://vocabulary.uncefact.org/additionalDescription
	 */
	additionalDescription?: string;

	/**
	 * An additional referenced document for this trade product, such as a manual or a certificate.
	 * @see https://vocabulary.uncefact.org/additionalReferenceDocument
	 */
	additionalReferenceDocument?: IUneceDocument[];

	/**
	 * An assessment applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IUneceAssessment[];

	/**
	 * Transport dangerous goods information applicable for this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IUneceDangerousGoods[];

	/**
	 * A specified declaration applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: IUneceSpecifiedDeclaration[];

	/**
	 * Disposal instructions applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableDisposalInstructions
	 */
	applicableDisposalInstructions?: IUneceDisposalInstructions[];

	/**
	 * A fault applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableFault
	 */
	applicableFault?: IUneceSpecifiedFault[];

	/**
	 * A material goods characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IUneceGoodsCharacteristic[];

	/**
	 * A keyword applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableKeyword
	 */
	applicableKeyword?: IUneceKeyword[];

	/**
	 * A specified licence applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: IUneceLicence[];

	/**
	 * Logistics packaging applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableLogisticsPackaging
	 */
	applicableLogisticsPackaging?: IUneceLogisticsPackaging[];

	/**
	 * A specified period applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic[];

	/**
	 * A production process applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableProductionProcess
	 */
	applicableProductionProcess?: IUneceProductionProcess[];

	/**
	 * A certificate applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * An inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * Packaging applicable for use with this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSupplyChainPackaging
	 */
	applicableSupplyChainPackaging?: IUneceSupplyChainPackaging[];

	/**
	 * A sustainability characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * A technical characteristic applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableTechnicalCharacteristic
	 */
	applicableTechnicalCharacteristic?: IUneceTechnicalCharacteristic[];

	/**
	 * A certification applicable to this trade product.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: IUneceTradeProductCertification[];

	/**
	 * A chemical treatment applied to this trade product.
	 * @see https://vocabulary.uncefact.org/appliedChemicalTreatment
	 */
	appliedChemicalTreatment?: IUneceSpecifiedChemicalTreatment[];

	/**
	 * A product finishing treatment applied to this trade product.
	 * @see https://vocabulary.uncefact.org/appliedProductFinishingTreatment
	 */
	appliedProductFinishingTreatment?: IUneceProductFinishingTreatment[];

	/**
	 * The measure of the area density, such as paper density 100 gsm, of this trade product.
	 * @see https://vocabulary.uncefact.org/areaDensityMeasure
	 */
	areaDensityMeasure?: IUneceMeasureType;

	/**
	 * A tag device attached to this trade product to provide protection from a peril such as theft.
	 * @see https://vocabulary.uncefact.org/attachedSecurityTag
	 */
	attachedSecurityTag?: IUneceSecurityTag[];

	/**
	 * A code specifying the available measurement of this trade product.
	 * @see https://vocabulary.uncefact.org/availableMeasurementCode
	 */
	availableMeasurementCode?: string;

	/**
	 * A batch identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/batchId
	 */
	batchId?: string | IJsonLdValueObject;

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
	brandOwnerParty?: IUneceTradeParty;

	/**
	 * The brand range name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/brandRangeName
	 */
	brandRangeName?: string;

	/**
	 * The unique buyer assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/buyerAssignedId
	 */
	buyerAssignedId?: string | IJsonLdValueObject;

	/**
	 * A buyer supplier parts document referenced for this trade product.
	 * @see https://vocabulary.uncefact.org/buyerSuppliedPartsReferenceDocument
	 */
	buyerSuppliedPartsReferenceDocument?: IUneceDocument[];

	/**
	 * The CITES (Convention on International Trade in Endangered Species) code for this trade product.
	 * @see https://vocabulary.uncefact.org/cITESSpeciesCode
	 */
	cITESSpeciesCode?: string;

	/**
	 * The formatted date, time, date time, or other date time value of the cancellation of the announced launch of this trade
	 * product.
	 * @see https://vocabulary.uncefact.org/cancellationAnnouncedLaunchDateTime
	 * @json-schema format:date-time
	 */
	cancellationAnnouncedLaunchDateTime?: string;

	/**
	 * A product care label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/careSpecifiedLabel
	 */
	careSpecifiedLabel?: IUneceProductLabel[];

	/**
	 * A referenced certification evidence document for this trade product.
	 * @see https://vocabulary.uncefact.org/certificationEvidenceReferenceDocument
	 */
	certificationEvidenceReferenceDocument?: IUneceDocument[];

	/**
	 * The code specifying the classification for this trade product.
	 * @see https://vocabulary.uncefact.org/classificationCode
	 */
	classificationCode?: string;

	/**
	 * A collection identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/collectionId
	 */
	collectionId?: string | IJsonLdValueObject;

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
	colourMatchingSampleId?: string | IJsonLdValueObject;

	/**
	 * A common name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/commonName
	 */
	commonName?: string;

	/**
	 * A material component of this trade product.
	 * @see https://vocabulary.uncefact.org/componentMaterial
	 */
	componentMaterial?: IUneceSpecifiedMaterial[];

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
	contentUnitQuantity?: IUneceQuantityType;

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
	customerAssignedId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the customs statistical classification for this trade product.
	 * @see https://vocabulary.uncefact.org/customsStatisticalClassificationCode
	 */
	customsStatisticalClassificationCode?: string;

	/**
	 * The DNA marker identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/dNAMarkerId
	 */
	dNAMarkerId?: string | IJsonLdValueObject;

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
	designatedClassification?: IUneceClassification[];

	/**
	 * A designation, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/designation
	 */
	designation?: string;

	/**
	 * The digital platform assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/digitalPlatformAssignedId
	 */
	digitalPlatformAssignedId?: string | IJsonLdValueObject;

	/**
	 * A distributor trade party for this trade product.
	 * @see https://vocabulary.uncefact.org/distributorParty
	 */
	distributorParty?: IUneceTradeParty[];

	/**
	 * The measure of the drained net weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/drainedNetWeightMeasure
	 */
	drainedNetWeightMeasure?: IUneceMeasureType;

	/**
	 * The EPC (Electronic Product Code) identifier of this trade product.
	 * @see https://vocabulary.uncefact.org/ePCId
	 */
	ePCId?: string | IJsonLdValueObject;

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
	endUseProductGroup?: IUneceProductGroup[];

	/**
	 * An end user party for this trade product.
	 * @see https://vocabulary.uncefact.org/endUserParty
	 */
	endUserParty?: IUneceTradeParty[];

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
	fSCId?: string | IJsonLdValueObject;

	/**
	 * A final assembly country for this trade product.
	 * @see https://vocabulary.uncefact.org/finalAssemblyCountry
	 */
	finalAssemblyCountry?: IUneceCountry[];

	/**
	 * The measure of the life span of this trade product from date of delivery.
	 * @see https://vocabulary.uncefact.org/fromDeliveryLifeSpanMeasure
	 */
	fromDeliveryLifeSpanMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * The measure of the life span of this trade product from date of opening.
	 * @see https://vocabulary.uncefact.org/fromOpeningLifeSpanMeasure
	 */
	fromOpeningLifeSpanMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * The measure of the life span of this trade product from date of production.
	 * @see https://vocabulary.uncefact.org/fromProductionLifeSpanMeasure
	 */
	fromProductionLifeSpanMeasure?: IUneceDurationUnitMeasureType;

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
	gTINId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the extent of a genetic modification to this trade product.
	 * @see https://vocabulary.uncefact.org/geneticModificationExtentCode
	 */
	geneticModificationExtentCode?: string;

	/**
	 * A global extension identifier for this trade product, such as a prefix or a suffix.
	 * @see https://vocabulary.uncefact.org/globalExtensionId
	 */
	globalExtensionId?: string | IJsonLdValueObject;

	/**
	 * A unique global identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string | IJsonLdValueObject;

	/**
	 * A measure of the gross volume for this trade product.
	 * @see https://vocabulary.uncefact.org/grossVolumeMeasure
	 */
	grossVolumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the gross weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/grossWeightMeasure
	 */
	grossWeightMeasure?: IUneceMeasureType[];

	/**
	 * A unique identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An included product referenced from this trade product.
	 * @see https://vocabulary.uncefact.org/includedProduct
	 */
	includedProduct?: IUneceProduct[];

	/**
	 * The number of content units of products included in this trade product.
	 * @see https://vocabulary.uncefact.org/includedProductContentUnitQuantity
	 */
	includedProductContentUnitQuantity?: IUneceQuantityType;

	/**
	 * The number of different product types included at the next lower level in this trade product.
	 * @see https://vocabulary.uncefact.org/includedProductTypeQuantity
	 */
	includedProductTypeQuantity?: IUneceQuantityType;

	/**
	 * An individual instance of this trade product.
	 * @see https://vocabulary.uncefact.org/individualProductInstance
	 */
	individualProductInstance?: IUneceProductInstance[];

	/**
	 * A unique industry assigned identifier for this product.
	 * @see https://vocabulary.uncefact.org/industryAssignedId
	 */
	industryAssignedId?: string | IJsonLdValueObject;

	/**
	 * An information note for this trade product.
	 * @see https://vocabulary.uncefact.org/informationNote
	 */
	informationNote?: IUneceNote[];

	/**
	 * The number of content units in an inner pack of this trade product.
	 * @see https://vocabulary.uncefact.org/innerPackContentUnitQuantity
	 */
	innerPackContentUnitQuantity?: IUneceQuantityType;

	/**
	 * The number of inner packs of this trade product.
	 * @see https://vocabulary.uncefact.org/innerPackQuantity
	 */
	innerPackQuantity?: IUneceQuantityType;

	/**
	 * A referenced inspection document for this trade product.
	 * @see https://vocabulary.uncefact.org/inspectionReferenceDocument
	 */
	inspectionReferenceDocument?: IUneceDocument[];

	/**
	 * An intended use, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/intendedUse
	 */
	intendedUse?: string;

	/**
	 * The formatted date, time, date time, or other date time value of the latest change in the product data for this trade
	 * product.
	 * @see https://vocabulary.uncefact.org/latestProductDataChangeDateTime
	 * @json-schema format:date-time
	 */
	latestProductDataChangeDateTime?: string;

	/**
	 * The party that owns the legal rights for this trade product.
	 * @see https://vocabulary.uncefact.org/legalRightsOwnerParty
	 */
	legalRightsOwnerParty?: IUneceTradeParty;

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
	linearDimension?: IUneceSpatialDimension[];

	/**
	 * A Material Safety Data Sheet (MSDS) document referenced for this product.
	 * @see https://vocabulary.uncefact.org/mSDSReferenceDocument
	 */
	mSDSReferenceDocument?: IUneceDocument[];

	/**
	 * The MSRP (Manufacturer Suggested Retail Price) for this trade product.
	 * @see https://vocabulary.uncefact.org/mSRPPrice
	 */
	mSRPPrice?: IUneceTradePrice;

	/**
	 * The country of manufacture of this trade product.
	 * @see https://vocabulary.uncefact.org/manufactureCountry
	 */
	manufactureCountry?: IUneceCountry;

	/**
	 * A unique manufacturer assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedId
	 */
	manufacturerAssignedId?: string | IJsonLdValueObject;

	/**
	 * A manufacturer party for this trade product.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * The indication of whether or not this trade product is marked with a serial number.
	 * @see https://vocabulary.uncefact.org/markedSerialNumberIndicator
	 */
	markedSerialNumberIndicator?: boolean;

	/**
	 * A referenced marketing campaign document for this trade product.
	 * @see https://vocabulary.uncefact.org/marketingCampaignReferenceDocument
	 */
	marketingCampaignReferenceDocument?: IUneceDocument[];

	/**
	 * A marketing description, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/marketingDescription
	 */
	marketingDescription?: string;

	/**
	 * A marketing feature of this trade product.
	 * @see https://vocabulary.uncefact.org/marketingFeature
	 */
	marketingFeature?: IUneceTradeProductFeature[];

	/**
	 * Maximum linear spatial dimensions of this trade product.
	 * @see https://vocabulary.uncefact.org/maximumLinearDimension
	 */
	maximumLinearDimension?: IUneceSpatialDimension[];

	/**
	 * Minimum linear spatial dimensions of this trade product.
	 * @see https://vocabulary.uncefact.org/minimumLinearDimension
	 */
	minimumLinearDimension?: IUneceSpatialDimension[];

	/**
	 * A unique model identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/modelId
	 */
	modelId?: string | IJsonLdValueObject;

	/**
	 * The model name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/modelName
	 */
	modelName?: string;

	/**
	 * A unique National Item Identification Number (NIIN) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/nIINId
	 */
	nIINId?: string | IJsonLdValueObject;

	/**
	 * A unique National Stock Number (NSN) identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/nSNId
	 */
	nSNId?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A measure of a net volume for this trade product.
	 * @see https://vocabulary.uncefact.org/netVolumeMeasure
	 */
	netVolumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the net weight (mass) of this trade product.
	 * @see https://vocabulary.uncefact.org/netWeightMeasure
	 */
	netWeightMeasure?: IUneceMeasureType[];

	/**
	 * A country of origin for this trade product.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: IUneceCountry[];

	/**
	 * A location of origin for this trade product.
	 * @see https://vocabulary.uncefact.org/originLocation
	 */
	originLocation?: IUneceLogisticsLocation[];

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
	presentationBinaryFile?: IUneceBinaryFile[];

	/**
	 * A preservation method applied to this trade product.
	 * @see https://vocabulary.uncefact.org/preservationAppliedMethod
	 */
	preservationAppliedMethod?: IUneceSpecifiedMethod[];

	/**
	 * A textual description of the print design for this trade product.
	 * @see https://vocabulary.uncefact.org/printDesignDescription
	 */
	printDesignDescription?: string;

	/**
	 * An identifier of the print design for this trade product.
	 * @see https://vocabulary.uncefact.org/printDesignId
	 */
	printDesignId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a priority for this trade product.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * A unique identifier for a product group for this trade product.
	 * @see https://vocabulary.uncefact.org/productGroupId
	 */
	productGroupId?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value of the discontinuation of the production of this trade product.
	 * @see https://vocabulary.uncefact.org/productionDiscontinuedDateTime
	 * @json-schema format:date-time
	 */
	productionDiscontinuedDateTime?: string;

	/**
	 * A measure of the production lead time for this trade product.
	 * @see https://vocabulary.uncefact.org/productionLeadTimeMeasure
	 */
	productionLeadTimeMeasure?: IUneceMeasureType[];

	/**
	 * The promotional variant identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/promotionalVariantId
	 */
	promotionalVariantId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the quality level for this trade product.
	 * @see https://vocabulary.uncefact.org/qualityLevelCode
	 */
	qualityLevelCode?: string;

	/**
	 * A quality parameter specified for this trade product.
	 * @see https://vocabulary.uncefact.org/qualityParameter
	 */
	qualityParameter?: IUneceSpecifiedParameter[];

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
	regulationConformityId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a rejection reason for this trade product.
	 * @see https://vocabulary.uncefact.org/rejectionReasonCode
	 */
	rejectionReasonCode?: string;

	/**
	 * A TT (Track and Trace) animal, such as one kept or raised on a farm or ranch, related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedAnimal
	 */
	relatedAnimal?: IUneceTTAnimal[];

	/**
	 * A referenced location related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedLocation
	 */
	relatedLocation?: IUneceLocation[];

	/**
	 * A logistics package related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedPackage
	 */
	relatedPackage?: IUnecePackage[];

	/**
	 * A supply chain trade transaction related to this trade product.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: IUneceSupplyChainTradeTransaction[];

	/**
	 * A code specifying a repair level type for this trade product.
	 * @see https://vocabulary.uncefact.org/repairLevelTypeCode
	 */
	repairLevelTypeCode?: string;

	/**
	 * A party responsible for this trade product.
	 * @see https://vocabulary.uncefact.org/responsibleParty
	 */
	responsibleParty?: IUneceTradeParty[];

	/**
	 * A party responsible for this trade product.
	 * @see https://vocabulary.uncefact.org/responsibleTradeParty
	 */
	responsibleTradeParty?: IUneceTradeParty[];

	/**
	 * The indication of whether or not this trade product is reusable.
	 * @see https://vocabulary.uncefact.org/reusableIndicator
	 */
	reusableIndicator?: boolean;

	/**
	 * A sales country for this trade product.
	 * @see https://vocabulary.uncefact.org/salesCountry
	 */
	salesCountry?: IUneceCountry[];

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
	securityInformationNote?: IUneceNote[];

	/**
	 * The unique seller assigned identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/sellerAssignedId
	 */
	sellerAssignedId?: string | IJsonLdValueObject;

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
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A colour specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedColour
	 */
	specifiedColour?: IUneceColour[];

	/**
	 * A production facility specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IUneceProductionFacility[];

	/**
	 * A product label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedLabel
	 */
	specifiedLabel?: IUneceProductLabel[];

	/**
	 * A photographic picture specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedPicture
	 */
	specifiedPicture?: IUnecePicture[];

	/**
	 * A product print specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedPrint
	 */
	specifiedPrint?: IUnecePrint[];

	/**
	 * A product certificate specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductCertificate
	 */
	specifiedProductCertificate?: IUneceProductCertificate[];

	/**
	 * A product group specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductGroup
	 */
	specifiedProductGroup?: IUneceProductGroup[];

	/**
	 * A product label specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedProductLabel
	 */
	specifiedProductLabel?: IUneceProductLabel[];

	/**
	 * A supply chain event specified for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * The specification of the delivery quantities and delivery date/time values in a supply plan for this trade product.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyPlan
	 */
	specifiedSupplyPlan?: IUneceSupplyPlan;

	/**
	 * A code specifying a status for this trade product.
	 * @see https://vocabulary.uncefact.org/statusCode
	 */
	statusCode?: string;

	/**
	 * A storage information note for this trade product.
	 * @see https://vocabulary.uncefact.org/storageInformationNote
	 */
	storageInformationNote?: IUneceNote[];

	/**
	 * The sub-brand name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/subBrandName
	 */
	subBrandName?: string;

	/**
	 * A subcontractor party for this trade product.
	 * @see https://vocabulary.uncefact.org/subcontractorParty
	 */
	subcontractorParty?: IUneceTradeParty[];

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
	substituteProduct?: IUneceProduct[];

	/**
	 * A referenced product that is substituted by this trade product.
	 * @see https://vocabulary.uncefact.org/substitutedProduct
	 */
	substitutedProduct?: IUneceProduct[];

	/**
	 * A country of supply for this trade product.
	 * @see https://vocabulary.uncefact.org/suppliedFromCountry
	 */
	suppliedFromCountry?: IUneceCountry[];

	/**
	 * An identifier for a tracking system of this trade product.
	 * @see https://vocabulary.uncefact.org/trackingSystemId
	 */
	trackingSystemId?: string | IJsonLdValueObject;

	/**
	 * A trade name, expressed as text, for this trade product.
	 * @see https://vocabulary.uncefact.org/tradeName
	 */
	tradeName?: string;

	/**
	 * A transport information note for this trade product.
	 * @see https://vocabulary.uncefact.org/transportInformationNote
	 */
	transportInformationNote?: IUneceNote[];

	/**
	 * A code specifying the type of trade product.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceTradeProductTypeCodeList | string;

	/**
	 * A textual description of the type for this trade product.
	 * @see https://vocabulary.uncefact.org/typeDescription
	 */
	typeDescription?: string;

	/**
	 * The URI (Uniform Resource Identifier), such as a web or an email address, for this trade product.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string | IJsonLdValueObject;

	/**
	 * An ultimate customer assigned extension identifier for this trade product.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerAssignedExtensionId
	 */
	ultimateCustomerAssignedExtensionId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a type of unit for this trade product.
	 * @see https://vocabulary.uncefact.org/unitTypeCode
	 */
	unitTypeCode?: string;

	/**
	 * A usage information note for this trade product.
	 * @see https://vocabulary.uncefact.org/usageInformationNote
	 */
	usageInformationNote?: IUneceNote[];

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
	variantId?: string | IJsonLdValueObject;
}
