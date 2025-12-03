// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICargo } from "./ICargo.js";
import type { ICountry } from "./ICountry.js";
import type { ICustomsValuation } from "./ICustomsValuation.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IDocument } from "./IDocument.js";
import type { IGeopoliticalRegion } from "./IGeopoliticalRegion.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { IInspectionEvent } from "./IInspectionEvent.js";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { ILogisticsStatus } from "./ILogisticsStatus.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { ILogisticsTransportMeans } from "./ILogisticsTransportMeans.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IQuarantineInstructions } from "./IQuarantineInstructions.js";
import type { IRegulatoryProcedure } from "./IRegulatoryProcedure.js";
import type { IRiskAnalysisResult } from "./IRiskAnalysisResult.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { IShippingMarks } from "./IShippingMarks.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { ISupplyChainTradeLineItem } from "./ISupplyChainTradeLineItem.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { ITransportInstructions } from "./ITransportInstructions.js";
import type { ITransportSettingTemperature } from "./ITransportSettingTemperature.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { GoodsTypeCodeList } from "../lists/goodsTypeCodeList.js";
import type { GoodsTypeExtensionCodeList } from "../lists/goodsTypeExtensionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to an item within a supply chain consignment of goods separately identified for transport and customs
 * purposes.
 * An item within a supply chain consignment of goods separately identified for transport and customs purposes.
 * @see https://vocabulary.uncefact.org/ConsignmentItem
 */
export interface IConsignmentItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ConsignmentItem;

	/**
	 * A customs valuation applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableCustomsValuation
	 */
	applicableCustomsValuation?: ICustomsValuation;

	/**
	 * Dangerous goods transport details applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IDangerousGoods[];

	/**
	 * A note providing information applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: INote[];

	/**
	 * A cross-border regulatory procedure applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IRegulatoryProcedure[];

	/**
	 * A logistics service charge applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * The means of transport applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableTransportMeans
	 */
	applicableTransportMeans?: ILogisticsTransportMeans[];

	/**
	 * A referenced document associated with this referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * A referenced piece of transport equipment associated with this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipment
	 */
	associatedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * Border clearance instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/borderClearanceInstructions
	 */
	borderClearanceInstructions?: ITransportInstructions[];

	/**
	 * Cargo tolerance information, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/cargoToleranceInformation
	 */
	cargoToleranceInformation?: string;

	/**
	 * The referenced classification document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IDocument[];

	/**
	 * Damage remarks, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/damageRemarks
	 */
	damageRemarks?: string;

	/**
	 * The location of this supply chain consignment item as declared for customs.
	 * @see https://vocabulary.uncefact.org/declaredForCustomsLocation
	 */
	declaredForCustomsLocation?: ILogisticsLocation;

	/**
	 * The monetary value of this supply chain consignment item as declared by the shipper or his agent for the purpose of
	 * varying the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to
	 * goods or delayed delivery.
	 * @see https://vocabulary.uncefact.org/declaredValueForCarriageAmount
	 */
	declaredValueForCarriageAmount?: IAmountType;

	/**
	 * The monetary value of this supply chain consignment item as declared for customs purposes.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IAmountType[];

	/**
	 * The monetary value of this supply chain consignment item as declared for statistical purposes.
	 * @see https://vocabulary.uncefact.org/declaredValueForStatisticsAmount
	 */
	declaredValueForStatisticsAmount?: IAmountType;

	/**
	 * Delivery instructions, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/deliveryInstructionsText
	 */
	deliveryInstructionsText?: string;

	/**
	 * The party to whom this supply chain consignment item will be or has been delivered.
	 * @see https://vocabulary.uncefact.org/deliveryParty
	 */
	deliveryParty?: ITradeParty[];

	/**
	 * The delivery event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: ITransportEvent[];

	/**
	 * The party from whom this supply chain consignment item will be or has been despatched.
	 * @see https://vocabulary.uncefact.org/despatchParty
	 */
	despatchParty?: ITradeParty[];

	/**
	 * The destination country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/destinationCountry
	 */
	destinationCountry?: ICountry[];

	/**
	 * An examination event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	examinationEvent?: ITransportEvent[];

	/**
	 * The export country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportCountry
	 */
	exportCountry?: ICountry;

	/**
	 * The geopolitical region of export for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportGeopoliticalRegion
	 */
	exportGeopoliticalRegion?: IGeopoliticalRegion[];

	/**
	 * The code specifying the export type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportTypeCode
	 */
	exportTypeCode?: string;

	/**
	 * The monetary value for this supply chain consignment item as calculated under FOB (Free On Board) delivery terms.
	 * @see https://vocabulary.uncefact.org/fOBAmount
	 */
	fOBAmount?: IAmountType;

	/**
	 * The code used as a first extension to the type code for further specifying the type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/firstTypeExtensionCode
	 */
	firstTypeExtensionCode?: string;

	/**
	 * A global identifier for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * The code specifying the type of referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/goodsTypeCode
	 */
	goodsTypeCode?: GoodsTypeCodeList[];

	/**
	 * The code used as an extension to the type code for further specifying the type of referenced supply chain consignment
	 * item.
	 * @see https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode
	 */
	goodsTypeExtensionTypeExtensionCode?: GoodsTypeExtensionCodeList[];

	/**
	 * A quantity of goods, such as gaseous fuel systems or automotive parts, in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/goodsUnitQuantity
	 */
	goodsUnitQuantity?: IQuantityType[];

	/**
	 * Handling instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IHandlingInstructions;

	/**
	 * A unique identifier for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the import type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/importTypeCode
	 */
	importTypeCode?: string;

	/**
	 * The importation country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/importationCountry
	 */
	importationCountry?: ICountry;

	/**
	 * A trade line item included in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: ISupplyChainTradeLineItem[];

	/**
	 * Information, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The monetary value of this supply chain consignment item as covered by an insurance policy.
	 * @see https://vocabulary.uncefact.org/insuranceValueAmount
	 */
	insuranceValueAmount?: IAmountType[];

	/**
	 * A monetary value for an invoice for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/invoiceAmount
	 */
	invoiceAmount?: IAmountType[];

	/**
	 * The linear spatial dimensions of this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The measure of the loading length of this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: ILinearUnitMeasureType;

	/**
	 * The party which manufactured this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The code used as a national extension to the type code for further specifying the type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/nationalTypeExtensionCode
	 */
	nationalTypeExtensionCode?: string;

	/**
	 * Transport cargo details of this supply chain consignment item sufficient to identify its nature for customs, statistical
	 * or transport purposes.
	 * @see https://vocabulary.uncefact.org/natureIdentificationCargo
	 */
	natureIdentificationCargo?: ICargo[];

	/**
	 * The country of origin where this supply chain consignment item has been produced.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: ICountry[];

	/**
	 * The geopolitical region of origin for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/originGeopoliticalRegion
	 */
	originGeopoliticalRegion?: IGeopoliticalRegion[];

	/**
	 * The package quantity for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IQuantityType[];

	/**
	 * A package type, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/packageType
	 */
	packageType?: string;

	/**
	 * Physical logistics shipping marks and barcode information for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/physicalShippingMarks
	 */
	physicalShippingMarks?: IShippingMarks;

	/**
	 * A pick-up transport event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: ITransportEvent[];

	/**
	 * A previous administrative referenced document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/previousAdministrativeDocument
	 */
	previousAdministrativeDocument?: IDocument[];

	/**
	 * Quarantine instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/quarantineInstructions
	 */
	quarantineInstructions?: IQuarantineInstructions[];

	/**
	 * A logistics status reported for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: ILogisticsStatus[];

	/**
	 * The code used as a second extension to the type code for further specifying the type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/secondTypeExtensionCode
	 */
	secondTypeExtensionCode?: string;

	/**
	 * The sequence number for this referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * Special instructions, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/specialInstructions
	 */
	specialInstructions?: string;

	/**
	 * An inspection event specified for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IInspectionEvent[];

	/**
	 * Results of a logistics risk analysis specified for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IRiskAnalysisResult[];

	/**
	 * The tariff quantity in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/tariffQuantity
	 */
	tariffQuantity?: IQuantityType[];

	/**
	 * The monetary value of all freight and other service charges for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IAmountType[];

	/**
	 * The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
	 * consignment item calculated from the export exit location to the import entry location.
	 * @see https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount
	 */
	totalExportExitToImportEntryChargeAmount?: IAmountType[];

	/**
	 * The number of trade line items in this referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/tradeLineItemQuantity
	 */
	tradeLineItemQuantity?: IQuantityType;

	/**
	 * A transit country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transitCountry
	 */
	transitCountry?: ICountry[];

	/**
	 * A transport contract document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportContractDocument
	 */
	transportContractDocument?: IDocument;

	/**
	 * A transport package for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportPackage
	 */
	transportPackage?: IPackage[];

	/**
	 * The transport temperature setting for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportTemperature
	 */
	transportTemperature?: ITransportSettingTemperature[];

	/**
	 * The vanning event for this supply chain consignment item, i.e. the loading of this consignment item at the place of
	 * original despatch.
	 * @see https://vocabulary.uncefact.org/vanningEvent
	 */
	vanningEvent?: ITransportEvent[];

	/**
	 * A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
	 * chain consignment item.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the supply chain consignment item weight on which charges are to be based.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IWeightUnitMeasureType;

	/**
	 * A measure of the gross weight (mass) of this supply chain consignment item which includes packaging but excludes any
	 * transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A measure of the net weight (mass) of this supply chain consignment item which excludes all packaging.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];
}
