// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCargo } from "./IUneceCargo.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceCustomsValuation } from "./IUneceCustomsValuation.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceGeopoliticalRegion } from "./IUneceGeopoliticalRegion.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceLogisticsStatus } from "./IUneceLogisticsStatus.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceLogisticsTransportMeans } from "./IUneceLogisticsTransportMeans.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceQuarantineInstructions } from "./IUneceQuarantineInstructions.js";
import type { IUneceRegulatoryProcedure } from "./IUneceRegulatoryProcedure.js";
import type { IUneceRiskAnalysisResult } from "./IUneceRiskAnalysisResult.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceShippingMarks } from "./IUneceShippingMarks.js";
import type { IUneceSpatialDimension } from "./IUneceSpatialDimension.js";
import type { IUneceSupplyChainTradeLineItem } from "./IUneceSupplyChainTradeLineItem.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { IUneceTransportSettingTemperature } from "./IUneceTransportSettingTemperature.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceGoodsTypeCodeList } from "../lists/uneceGoodsTypeCodeList.js";
import type { UneceGoodsTypeExtensionCodeList } from "../lists/uneceGoodsTypeExtensionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to an item within a supply chain consignment of goods separately identified for transport and customs
 * purposes.
 * An item within a supply chain consignment of goods separately identified for transport and customs purposes.
 * @see https://vocabulary.uncefact.org/ConsignmentItem
 */
export interface IUneceConsignmentItem extends IJsonLdNodeObject {
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
	applicableCustomsValuation?: IUneceCustomsValuation[];

	/**
	 * Dangerous goods transport details applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IUneceDangerousGoods[];

	/**
	 * A note providing information applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: IUneceNote[];

	/**
	 * A cross-border regulatory procedure applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IUneceRegulatoryProcedure[];

	/**
	 * A logistics service charge applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * The means of transport applicable to this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/applicableTransportMeans
	 */
	applicableTransportMeans?: IUneceLogisticsTransportMeans;

	/**
	 * A referenced document associated with this referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument[];

	/**
	 * A referenced piece of transport equipment associated with this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipment
	 */
	associatedTransportEquipment?: IUneceLogisticsTransportEquipment[];

	/**
	 * Border clearance instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/borderClearanceInstructions
	 */
	borderClearanceInstructions?: IUneceTransportInstructions[];

	/**
	 * Cargo tolerance information, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/cargoToleranceInformation
	 */
	cargoToleranceInformation?: string;

	/**
	 * The referenced classification document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IUneceDocument;

	/**
	 * Damage remarks, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/damageRemarks
	 */
	damageRemarks?: string;

	/**
	 * The location of this supply chain consignment item as declared for customs.
	 * @see https://vocabulary.uncefact.org/declaredForCustomsLocation
	 */
	declaredForCustomsLocation?: IUneceLogisticsLocation;

	/**
	 * The monetary value of this supply chain consignment item as declared by the shipper or his agent for the purpose of
	 * varying the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to
	 * goods or delayed delivery.
	 * @see https://vocabulary.uncefact.org/declaredValueForCarriageAmount
	 */
	declaredValueForCarriageAmount?: IUneceAmountType;

	/**
	 * The monetary value of this supply chain consignment item as declared for customs purposes.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IUneceAmountType;

	/**
	 * The monetary value of this supply chain consignment item as declared for statistical purposes.
	 * @see https://vocabulary.uncefact.org/declaredValueForStatisticsAmount
	 */
	declaredValueForStatisticsAmount?: IUneceAmountType;

	/**
	 * Delivery instructions, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/deliveryInstructionsText
	 */
	deliveryInstructionsText?: string;

	/**
	 * The party to whom this supply chain consignment item will be or has been delivered.
	 * @see https://vocabulary.uncefact.org/deliveryParty
	 */
	deliveryParty?: IUneceTradeParty;

	/**
	 * The delivery event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: IUneceTransportEvent;

	/**
	 * The party from whom this supply chain consignment item will be or has been despatched.
	 * @see https://vocabulary.uncefact.org/despatchParty
	 */
	despatchParty?: IUneceTradeParty;

	/**
	 * The destination country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/destinationCountry
	 */
	destinationCountry?: IUneceCountry;

	/**
	 * An examination event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	examinationEvent?: IUneceTransportEvent[];

	/**
	 * The export country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportCountry
	 */
	exportCountry?: IUneceCountry;

	/**
	 * The geopolitical region of export for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportGeopoliticalRegion
	 */
	exportGeopoliticalRegion?: IUneceGeopoliticalRegion;

	/**
	 * The code specifying the export type of supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/exportTypeCode
	 */
	exportTypeCode?: string;

	/**
	 * The monetary value for this supply chain consignment item as calculated under FOB (Free On Board) delivery terms.
	 * @see https://vocabulary.uncefact.org/fOBAmount
	 */
	fOBAmount?: IUneceAmountType;

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
	goodsTypeCode?: UneceGoodsTypeCodeList;

	/**
	 * The code used as an extension to the type code for further specifying the type of referenced supply chain consignment
	 * item.
	 * @see https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode
	 */
	goodsTypeExtensionTypeExtensionCode?: UneceGoodsTypeExtensionCodeList;

	/**
	 * A quantity of goods, such as gaseous fuel systems or automotive parts, in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/goodsUnitQuantity
	 */
	goodsUnitQuantity?: IUneceQuantityType[];

	/**
	 * Handling instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IUneceHandlingInstructions[];

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
	importationCountry?: IUneceCountry;

	/**
	 * A trade line item included in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: IUneceSupplyChainTradeLineItem[];

	/**
	 * Information, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The monetary value of this supply chain consignment item as covered by an insurance policy.
	 * @see https://vocabulary.uncefact.org/insuranceValueAmount
	 */
	insuranceValueAmount?: IUneceAmountType;

	/**
	 * A monetary value for an invoice for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/invoiceAmount
	 */
	invoiceAmount?: IUneceAmountType[];

	/**
	 * The linear spatial dimensions of this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: IUneceSpatialDimension;

	/**
	 * The measure of the loading length of this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The party which manufactured this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty;

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
	natureIdentificationCargo?: IUneceCargo[];

	/**
	 * The country of origin where this supply chain consignment item has been produced.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: IUneceCountry;

	/**
	 * The geopolitical region of origin for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/originGeopoliticalRegion
	 */
	originGeopoliticalRegion?: IUneceGeopoliticalRegion;

	/**
	 * The package quantity for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IUneceQuantityType;

	/**
	 * A package type, expressed as text, for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/packageType
	 */
	packageType?: string;

	/**
	 * Physical logistics shipping marks and barcode information for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/physicalShippingMarks
	 */
	physicalShippingMarks?: IUneceShippingMarks[];

	/**
	 * A pick-up transport event for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: IUneceTransportEvent[];

	/**
	 * A previous administrative referenced document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/previousAdministrativeDocument
	 */
	previousAdministrativeDocument?: IUneceDocument[];

	/**
	 * Quarantine instructions for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/quarantineInstructions
	 */
	quarantineInstructions?: IUneceQuarantineInstructions[];

	/**
	 * A logistics status reported for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: IUneceLogisticsStatus[];

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
	specifiedInspectionEvent?: IUneceInspectionEvent[];

	/**
	 * Results of a logistics risk analysis specified for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IUneceRiskAnalysisResult[];

	/**
	 * The tariff quantity in this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/tariffQuantity
	 */
	tariffQuantity?: IUneceQuantityType;

	/**
	 * The monetary value of all freight and other service charges for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IUneceAmountType;

	/**
	 * The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
	 * consignment item calculated from the export exit location to the import entry location.
	 * @see https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount
	 */
	totalExportExitToImportEntryChargeAmount?: IUneceAmountType;

	/**
	 * The number of trade line items in this referenced supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/tradeLineItemQuantity
	 */
	tradeLineItemQuantity?: IUneceQuantityType;

	/**
	 * A transit country for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transitCountry
	 */
	transitCountry?: IUneceCountry[];

	/**
	 * A transport contract document for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportContractDocument
	 */
	transportContractDocument?: IUneceDocument[];

	/**
	 * A transport package for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportPackage
	 */
	transportPackage?: IUnecePackage[];

	/**
	 * The transport temperature setting for this supply chain consignment item.
	 * @see https://vocabulary.uncefact.org/transportTemperature
	 */
	transportTemperature?: IUneceTransportSettingTemperature;

	/**
	 * The vanning event for this supply chain consignment item, i.e. the loading of this consignment item at the place of
	 * original despatch.
	 * @see https://vocabulary.uncefact.org/vanningEvent
	 */
	vanningEvent?: IUneceTransportEvent;

	/**
	 * A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
	 * chain consignment item.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the supply chain consignment item weight on which charges are to be based.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A measure of the gross weight (mass) of this supply chain consignment item which includes packaging but excludes any
	 * transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A measure of the net weight (mass) of this supply chain consignment item which excludes all packaging.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType[];
}
