// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCargo } from "./IUneceCargo.js";
import type { IUneceCargoInsurance } from "./IUneceCargoInsurance.js";
import type { IUneceConsignmentItem } from "./IUneceConsignmentItem.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { IUneceCustomsValuation } from "./IUneceCustomsValuation.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceDeliveryInstructions } from "./IUneceDeliveryInstructions.js";
import type { IUneceDeliveryTerms } from "./IUneceDeliveryTerms.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceGeopoliticalRegion } from "./IUneceGeopoliticalRegion.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceHaulageInstructions } from "./IUneceHaulageInstructions.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceLogisticsStatus } from "./IUneceLogisticsStatus.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceRegulatoryProcedure } from "./IUneceRegulatoryProcedure.js";
import type { IUneceRiskAnalysisResult } from "./IUneceRiskAnalysisResult.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceShippingMarks } from "./IUneceShippingMarks.js";
import type { IUneceSupplyChainReference } from "./IUneceSupplyChainReference.js";
import type { IUneceSupplyChainTradeTransaction } from "./IUneceSupplyChainTradeTransaction.js";
import type { IUneceTradeAllowanceCharge } from "./IUneceTradeAllowanceCharge.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { IUneceTransportMovement } from "./IUneceTransportMovement.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceTransportServicePaymentArrangementCodeList } from "../lists/uneceTransportServicePaymentArrangementCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A separately identifiable collection of goods items to be transported or available to be transported from one consignor
 * to one consignee in a supply chain via one or more modes of transport where each consignment is the subject of one
 * single transport contract.
 * A referenced, separately identifiable collection of goods items to be transported or available to be transported from
 * one consignor to one consignee via one or more modes of transport where each consignment is the subject of one single
 * transport contract.
 * @see https://vocabulary.uncefact.org/Consignment
 */
export interface IUneceConsignment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Consignment;

	/**
	 * An allowance or charge applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableAllowanceCharge
	 */
	applicableAllowanceCharge?: IUneceTradeAllowanceCharge[];

	/**
	 * The cargo insurance applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCargoInsurance
	 */
	applicableCargoInsurance?: IUneceCargoInsurance[];

	/**
	 * A currency exchange applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCurrencyExchange
	 */
	applicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * A cross-border customs valuation applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCustomsValuation
	 */
	applicableCustomsValuation?: IUneceCustomsValuation;

	/**
	 * Dangerous goods applicable to the transport of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IUneceDangerousGoods[];

	/**
	 * A cross-border regulatory procedure applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IUneceRegulatoryProcedure[];

	/**
	 * A logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * A referenced document associated with this supply chain consignment, such as the certificate of origin or dangerous
	 * goods note.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument[];

	/**
	 * A monetary value of an invoice associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceAmount
	 */
	associatedInvoiceAmount?: IUneceAmountType[];

	/**
	 * A monetary value of the discount on an invoice associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceDiscountAmount
	 */
	associatedInvoiceDiscountAmount?: IUneceAmountType;

	/**
	 * A percent that is a discount on an invoice amount associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceDiscountPercent
	 */
	associatedInvoiceDiscountPercent?: string;

	/**
	 * A trade party associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedParty
	 */
	associatedParty?: IUneceTradeParty[];

	/**
	 * The logistics transport movement for this supply chain consignment at the point when the means of transport arrives in a
	 * country or at a regional border.
	 * @see https://vocabulary.uncefact.org/atArrivalTransportMovement
	 */
	atArrivalTransportMovement?: IUneceTransportMovement[];

	/**
	 * The logistics transport movement for this supply chain consignment at the point when the means of transport departs a
	 * country or regional border.
	 * @see https://vocabulary.uncefact.org/atDepartureTransportMovement
	 */
	atDepartureTransportMovement?: IUneceTransportMovement;

	/**
	 * The date, time, date time or other date time value when this supply chain consignment is due to be available.
	 * @see https://vocabulary.uncefact.org/availabilityDueDateTime
	 */
	availabilityDueDateTime?: string;

	/**
	 * A bonded warehouse storage event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/bondedWarehouseStorageEvent
	 */
	bondedWarehouseStorageEvent?: IUneceTransportEvent[];

	/**
	 * A border crossing logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/borderCrossingTransportMovement
	 */
	borderCrossingTransportMovement?: IUneceTransportMovement[];

	/**
	 * The monetary value of the COD (Cash On Delivery) amount to be collected by the carrier upon delivery of this supply
	 * chain consignment.
	 * @see https://vocabulary.uncefact.org/cODAmount
	 */
	cODAmount?: IUneceAmountType;

	/**
	 * Cargo insurance instructions, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/cargoInsuranceInstructionsInformation
	 */
	cargoInsuranceInstructionsInformation?: string;

	/**
	 * Cargo tolerance information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/cargoToleranceInformation
	 */
	cargoToleranceInformation?: string;

	/**
	 * The date, time, date time or other date time value when this supply chain consignment will be, or has been, accepted by
	 * the carrier.
	 * @see https://vocabulary.uncefact.org/carrierAcceptanceDateTime
	 */
	carrierAcceptanceDateTime?: string;

	/**
	 * The location where this supply chain consignment will be, or has been, accepted by the carrier.
	 * @see https://vocabulary.uncefact.org/carrierAcceptanceLocation
	 */
	carrierAcceptanceLocation?: IUneceLogisticsLocation;

	/**
	 * The party acting as the agent of the carrier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/carrierAgentParty
	 */
	carrierAgentParty?: IUneceTradeParty[];

	/**
	 * The unique identifier assigned by the carrier to this referenced supply chain consignment, such as a booking reference
	 * number when cargo space is reserved prior to loading.
	 * @see https://vocabulary.uncefact.org/carrierAssignedId
	 */
	carrierAssignedId?: string;

	/**
	 * The carrier party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: IUneceTradeParty[];

	/**
	 * Information, expressed as text, provided by the carrier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/carrierProvidedInformation
	 */
	carrierProvidedInformation?: string;

	/**
	 * The number of separately chargeable transportation stages to be covered by this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/chargeableTransportationStageQuantity
	 */
	chargeableTransportationStageQuantity?: IUneceQuantityType;

	/**
	 * The referenced classification document for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IUneceDocument[];

	/**
	 * A connecting carrier party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/connectingCarrierParty
	 */
	connectingCarrierParty?: IUneceTradeParty[];

	/**
	 * The party authorized to act for or on behalf of the consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeAgentParty
	 */
	consigneeAgentParty?: IUneceTradeParty[];

	/**
	 * The unique identifier assigned by the consignee to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeAssignedId
	 */
	consigneeAssignedId?: string;

	/**
	 * The consignee party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeParty
	 */
	consigneeParty?: IUneceTradeParty;

	/**
	 * The location at which this supply chain consignment will be or has been received by the consignee.
	 * @see https://vocabulary.uncefact.org/consigneeReceiptLocation
	 */
	consigneeReceiptLocation?: IUneceLogisticsLocation;

	/**
	 * The number of consignment items separately defined for transport or customs purposes within this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/consignmentItemQuantity
	 */
	consignmentItemQuantity?: IUneceQuantityType;

	/**
	 * The party authorized to act for or on behalf of the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorAgentParty
	 */
	consignorAgentParty?: IUneceTradeParty;

	/**
	 * The unique identifier assigned by the consignor to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorAssignedId
	 */
	consignorAssignedId?: string;

	/**
	 * The consignor party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorParty
	 */
	consignorParty?: IUneceTradeParty;

	/**
	 * Border clearance instructions provided by the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorProvidedBorderClearanceInstructions
	 */
	consignorProvidedBorderClearanceInstructions?: IUneceTransportInstructions[];

	/**
	 * Information, expressed as text, provided by the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorProvidedInformation
	 */
	consignorProvidedInformation?: string;

	/**
	 * The party responsible for the consolidation of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consolidatorParty
	 */
	consolidatorParty?: IUneceTradeParty;

	/**
	 * The indication of whether or not this supply chain consignment is to be transported in a container or containers.
	 * @see https://vocabulary.uncefact.org/containerizationIndicator
	 */
	containerizationIndicator?: boolean;

	/**
	 * A contract identifier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/contractId
	 */
	contractId?: string;

	/**
	 * Information related to contract terms and conditions, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/contractTermsInformation
	 */
	contractTermsInformation?: string;

	/**
	 * A code specifying a service charge currency for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/currencyServiceChargeCurrencyCode
	 */
	currencyServiceChargeCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * A code specifying a service tariff currency for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/currencyServiceTariffCurrencyCode
	 */
	currencyServiceTariffCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * The party acting as an agent for, or on behalf of, the consignor with respect to the customs export procedures for this
	 * supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsExportAgentParty
	 */
	customsExportAgentParty?: IUneceTradeParty;

	/**
	 * A unique identifier, for customs purposes, for this consignment.
	 * @see https://vocabulary.uncefact.org/customsId
	 */
	customsId?: string;

	/**
	 * The party acting as an agent for, or on behalf of, the consignee with respect to the customs import procedures for this
	 * supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsImportAgentParty
	 */
	customsImportAgentParty?: IUneceTradeParty;

	/**
	 * A referenced invoice document required by customs for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsRequiredInvoiceDocument
	 */
	customsRequiredInvoiceDocument?: IUneceDocument[];

	/**
	 * The party acting as an agent for, or on behalf of, the consignor with respect to customs transit procedures for this
	 * supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsTransitAgentParty
	 */
	customsTransitAgentParty?: IUneceTradeParty;

	/**
	 * The party responsible for providing the dangerous goods notification in accordance with the dangerous goods regulations
	 * relevant for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsNotifierParty
	 */
	dangerousGoodsNotifierParty?: IUneceTradeParty;

	/**
	 * The location of this supply chain consignment as declared for customs.
	 * @see https://vocabulary.uncefact.org/declaredForCustomsLocation
	 */
	declaredForCustomsLocation?: IUneceLogisticsLocation;

	/**
	 * The monetary value of this supply chain consignment as declared by the shipper or his agent for the purpose of varying
	 * the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to goods or
	 * delayed delivery.
	 * @see https://vocabulary.uncefact.org/declaredValueForCarriageAmount
	 */
	declaredValueForCarriageAmount?: IUneceAmountType;

	/**
	 * The monetary value declared for customs purposes for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IUneceAmountType[];

	/**
	 * The party responsible for the deconsolidation of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deconsolidatorParty
	 */
	deconsolidatorParty?: IUneceTradeParty;

	/**
	 * The delivery information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryInformation
	 */
	deliveryInformation?: string;

	/**
	 * Delivery instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryInstructions
	 */
	deliveryInstructions?: IUneceDeliveryInstructions[];

	/**
	 * The party to whom this supply chain consignment will be, or has been, delivered.
	 * @see https://vocabulary.uncefact.org/deliveryParty
	 */
	deliveryParty?: IUneceTradeParty[];

	/**
	 * The delivery event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: IUneceTransportEvent[];

	/**
	 * Demurrage information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/demurrageInformation
	 */
	demurrageInformation?: string;

	/**
	 * The party from whom this supply chain consignment will be or has been despatched.
	 * @see https://vocabulary.uncefact.org/despatchParty
	 */
	despatchParty?: IUneceTradeParty[];

	/**
	 * The destination country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/destinationCountry
	 */
	destinationCountry?: IUneceCountry[];

	/**
	 * A transport devanning event for this referenced supply chain consignment, i.e. the unloading of this consignment at the
	 * place of delivery.
	 * @see https://vocabulary.uncefact.org/devanningEvent
	 */
	devanningEvent?: IUneceTransportEvent[];

	/**
	 * An estimated logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.
	 * @see https://vocabulary.uncefact.org/estimatedApplicableServiceCharge
	 */
	estimatedApplicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * An examination event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	examinationEvent?: IUneceTransportEvent[];

	/**
	 * The export country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exportCountry
	 */
	exportCountry?: IUneceCountry;

	/**
	 * The date, time, date time or other date time value when this supply chain consignment will exit, or has exited from the
	 * last port, airport, or border post of the country of export.
	 * @see https://vocabulary.uncefact.org/exportExitDateTime
	 */
	exportExitDateTime?: string;

	/**
	 * The geopolitical region of export for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exportGeopoliticalRegion
	 */
	exportGeopoliticalRegion?: IUneceGeopoliticalRegion[];

	/**
	 * The party who exports this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exporterParty
	 */
	exporterParty?: IUneceTradeParty;

	/**
	 * The monetary value that has to be, or has been, paid for this supply chain consignment as calculated under FOB (Free on
	 * Board) delivery terms.
	 * @see https://vocabulary.uncefact.org/fOBAmount
	 */
	fOBAmount?: IUneceAmountType;

	/**
	 * The final destination country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: IUneceCountry;

	/**
	 * The final destination location for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/finalDestinationLocation
	 */
	finalDestinationLocation?: IUneceLogisticsLocation;

	/**
	 * The unique identifier assigned by the freight forwarder to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/freightForwarderAssignedId
	 */
	freightForwarderAssignedId?: string;

	/**
	 * The freight forwarder party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/freightForwarderParty
	 */
	freightForwarderParty?: IUneceTradeParty[];

	/**
	 * A global identifier of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * A goods release restriction, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/goodsReleaseRestriction
	 */
	goodsReleaseRestriction?: string;

	/**
	 * A grouping centre party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/groupingCentreParty
	 */
	groupingCentreParty?: IUneceTradeParty[];

	/**
	 * Handling instructions for this supply chain consignment, such as where or how specified packages or containers are to be
	 * loaded on a means of transport.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IUneceHandlingInstructions;

	/**
	 * Haulage instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/haulageInstructions
	 */
	haulageInstructions?: IUneceHaulageInstructions[];

	/**
	 * A unique identifier for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The import country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/importCountry
	 */
	importCountry?: IUneceCountry[];

	/**
	 * The party who imports this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/importerParty
	 */
	importerParty?: IUneceTradeParty;

	/**
	 * A referenced consignment included in this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedConsignment
	 */
	includedConsignment?: IUneceConsignment[];

	/**
	 * A referenced consignment item included in this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedConsignmentItem
	 */
	includedConsignmentItem?: IUneceConsignmentItem[];

	/**
	 * The measure of the gross weight (mass) including the tare weight of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedTareGrossWeightMeasure
	 */
	includedTareGrossWeightMeasure?: IUneceMeasureType[];

	/**
	 * Information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A currency exchange applicable to an insurance charge for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/insuranceApplicableCurrencyExchange
	 */
	insuranceApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The monetary value of the insurance premium for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/insurancePremiumAmount
	 */
	insurancePremiumAmount?: IUneceAmountType[];

	/**
	 * The monetary value of this supply chain consignment as covered by an insurance policy.
	 * @see https://vocabulary.uncefact.org/insuranceValueAmount
	 */
	insuranceValueAmount?: IUneceAmountType[];

	/**
	 * A party that is an intermediate consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/intermediateConsigneeParty
	 */
	intermediateConsigneeParty?: IUneceTradeParty[];

	/**
	 * A currency exchange applicable to the invoice for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange
	 */
	invoiceApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * An invoicee trade party associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/invoiceeAssociatedParty
	 */
	invoiceeAssociatedParty?: IUneceTradeParty[];

	/**
	 * A measure of the loading length which is the length along a means of transport over which the complete width and height
	 * is needed for loading all the goods items in this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The baseport location at which this supply chain consignment is to be loaded on a means of transport according to the
	 * transport contract.
	 * @see https://vocabulary.uncefact.org/loadingBaseportLocation
	 */
	loadingBaseportLocation?: IUneceLogisticsLocation;

	/**
	 * Loading information, expressed as text, for this supply chain consignment, such as advice and instructions.
	 * @see https://vocabulary.uncefact.org/loadingInformation
	 */
	loadingInformation?: string;

	/**
	 * Loading instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingInstructions
	 */
	loadingInstructions?: IUneceTransportInstructions[];

	/**
	 * The number of loading lists, manifests or similar documents for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingListQuantity
	 */
	loadingListQuantity?: IUneceQuantityType;

	/**
	 * The logistics location where the supply chain consignment is loaded.
	 * @see https://vocabulary.uncefact.org/loadingLocation
	 */
	loadingLocation?: IUneceLogisticsLocation[];

	/**
	 * The loading sequence number for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingSequenceNumeric
	 */
	loadingSequenceNumeric?: string;

	/**
	 * The local party authorized to act for or on behalf of the consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/localConsigneeAgentParty
	 */
	localConsigneeAgentParty?: IUneceTradeParty[];

	/**
	 * A main carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/mainCarriageTransportMovement
	 */
	mainCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * A referenced manifest document associated to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/manifestAssociatedDocument
	 */
	manifestAssociatedDocument?: IUneceDocument;

	/**
	 * Transport cargo details of this supply chain consignment sufficient to identify its nature for customs, statistical or
	 * transport purposes.
	 * @see https://vocabulary.uncefact.org/natureIdentificationCargo
	 */
	natureIdentificationCargo?: IUneceCargo[];

	/**
	 * The indication of whether or not this supply chain consignment has a nil value for carriage.
	 * @see https://vocabulary.uncefact.org/nilCarriageValueIndicator
	 */
	nilCarriageValueIndicator?: boolean;

	/**
	 * The indication of whether or not this supply chain consignment has a nil value for customs.
	 * @see https://vocabulary.uncefact.org/nilCustomsValueIndicator
	 */
	nilCustomsValueIndicator?: boolean;

	/**
	 * The indication of whether or not this supply chain consignment has a nil value for insurance.
	 * @see https://vocabulary.uncefact.org/nilInsuranceValueIndicator
	 */
	nilInsuranceValueIndicator?: boolean;

	/**
	 * A party who has been or will be notified about this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/notifiedParty
	 */
	notifiedParty?: IUneceTradeParty[];

	/**
	 * An on-carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/onCarriageTransportMovement
	 */
	onCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * An onward routing location for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/onwardRoutingLocation
	 */
	onwardRoutingLocation?: IUneceLogisticsLocation[];

	/**
	 * A country of origin for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: IUneceCountry[];

	/**
	 * The geopolitical region of origin for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/originGeopoliticalRegion
	 */
	originGeopoliticalRegion?: IUneceGeopoliticalRegion[];

	/**
	 * The location from which this supply chain consignment was originally despatched.
	 * @see https://vocabulary.uncefact.org/originalDespatchLocation
	 */
	originalDespatchLocation?: IUneceLogisticsLocation;

	/**
	 * The number of packages within this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IUneceQuantityType[];

	/**
	 * A type of package, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/packageType
	 */
	packageType?: string;

	/**
	 * Physical logistics shipping marks and barcoding information related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/physicalShippingMarks
	 */
	physicalShippingMarks?: IUneceShippingMarks;

	/**
	 * The pick-up event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: IUneceTransportEvent[];

	/**
	 * The pick-up trade party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/pickUpParty
	 */
	pickUpParty?: IUneceTradeParty[];

	/**
	 * A pre-carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/preCarriageTransportMovement
	 */
	preCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * A previous administrative referenced document for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/previousAdministrativeDocument
	 */
	previousAdministrativeDocument?: IUneceDocument[];

	/**
	 * A re-export country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/reExportCountry
	 */
	reExportCountry?: IUneceCountry[];

	/**
	 * The type of booking, expressed as text, related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/relatedBookingType
	 */
	relatedBookingType?: string;

	/**
	 * A trade transaction related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: IUneceSupplyChainTradeTransaction[];

	/**
	 * A logistics status reported for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: IUneceLogisticsStatus[];

	/**
	 * The code specifying a risk factor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/riskFactorCode
	 */
	riskFactorCode?: string;

	/**
	 * The sequence number for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A currency exchange applicable to a service charge for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/serviceChargeApplicableCurrencyExchange
	 */
	serviceChargeApplicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * The ship from party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: IUneceTradeParty[];

	/**
	 * The indication of whether or not this supply chain consignment is for ship stores, such as for consumption on the means
	 * of transport.
	 * @see https://vocabulary.uncefact.org/shipStoresIndicator
	 */
	shipStoresIndicator?: boolean;

	/**
	 * The ship to party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/shipToParty
	 */
	shipToParty?: IUneceTradeParty[];

	/**
	 * A date, time, date time, or other date time value when this supply chain consignment is shipped onboard.
	 * @see https://vocabulary.uncefact.org/shippedOnboardDateTime
	 */
	shippedOnboardDateTime?: string;

	/**
	 * Delivery terms specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryTerms
	 */
	specifiedDeliveryTerms?: IUneceDeliveryTerms;

	/**
	 * An inspection event specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IUneceInspectionEvent[];

	/**
	 * Logistics status information specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsStatus
	 */
	specifiedLogisticsStatus?: IUneceLogisticsStatus[];

	/**
	 * A result of a logistics risk analysis calculation specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IUneceRiskAnalysisResult[];

	/**
	 * A reference specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainReference
	 */
	specifiedSupplyChainReference?: IUneceSupplyChainReference[];

	/**
	 * A logistics transport movement specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedTransportMovement
	 */
	specifiedTransportMovement?: IUneceTransportMovement[];

	/**
	 * A statement note for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/statementNote
	 */
	statementNote?: IUneceNote[];

	/**
	 * A storage event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/storageEvent
	 */
	storageEvent?: IUneceTransportEvent[];

	/**
	 * A textual summary description of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/summaryDescription
	 */
	summaryDescription?: string;

	/**
	 * The total monetary value of all allowances and charges for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalAllowanceChargeAmount
	 */
	totalAllowanceChargeAmount?: IUneceAmountType[];

	/**
	 * The total monetary value of all freight and other service charges for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IUneceAmountType[];

	/**
	 * The total monetary value of all freight and other service charges which are to be collected from the consignee at or
	 * after delivery for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalCollectChargeAmount
	 */
	totalCollectChargeAmount?: IUneceAmountType[];

	/**
	 * The monetary value of total disbursement for this supply chain consignment, such as the amount to be collected by the
	 * carrier according to the order given by the consignor.
	 * @see https://vocabulary.uncefact.org/totalDisbursementAmount
	 */
	totalDisbursementAmount?: IUneceAmountType[];

	/**
	 * The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
	 * consignment calculated from the export exit location to the import entry location.
	 * @see https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount
	 */
	totalExportExitToImportEntryChargeAmount?: IUneceAmountType[];

	/**
	 * The total monetary value of all freight and other service charges which have been paid in advance for this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/totalPrepaidChargeAmount
	 */
	totalPrepaidChargeAmount?: IUneceAmountType[];

	/**
	 * The measure of the total tare weight (mass) of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalTareWeightMeasure
	 */
	totalTareWeightMeasure?: IUneceMeasureType[];

	/**
	 * A traded parcel identifier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/tradedParcelId
	 */
	tradedParcelId?: string;

	/**
	 * A transit country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transitCountry
	 */
	transitCountry?: IUneceCountry[];

	/**
	 * A location of transit for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transitLocation
	 */
	transitLocation?: IUneceLogisticsLocation[];

	/**
	 * The referenced transport contract document for this supply chain consignment, such as an airwaybill or a seawaybill.
	 * @see https://vocabulary.uncefact.org/transportContractDocument
	 */
	transportContractDocument?: IUneceDocument;

	/**
	 * A number of pieces of transport equipment, such as containers or similar unit load devices, in this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentQuantity
	 */
	transportEquipmentQuantity?: IUneceQuantityType;

	/**
	 * The indication of whether or not the goods in this supply chain consignment are split across more than one piece of
	 * transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSplitGoodsIndicator
	 */
	transportEquipmentSplitGoodsIndicator?: boolean;

	/**
	 * An event occurring during the transport of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportEvent
	 */
	transportEvent?: IUneceTransportEvent[];

	/**
	 * Transport packages for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportPackage
	 */
	transportPackage?: IUnecePackage[];

	/**
	 * A transport service for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportService
	 */
	transportService?: IUneceService[];

	/**
	 * The code specifying the payment arrangements for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: UneceTransportServicePaymentArrangementCodeList;

	/**
	 * The party which is the buyer of the transport services for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportServicesBuyerParty
	 */
	transportServicesBuyerParty?: IUneceTradeParty[];

	/**
	 * The textual description of the transport split of this referenced supply chain consignment across different transport
	 * means or transport equipment.
	 * @see https://vocabulary.uncefact.org/transportSplitDescription
	 */
	transportSplitDescription?: string;

	/**
	 * A transshipment location for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transshipmentLocation
	 */
	transshipmentLocation?: IUneceLogisticsLocation[];

	/**
	 * The indication of whether or not transshipment is permitted for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transshipmentPermissionIndicator
	 */
	transshipmentPermissionIndicator?: boolean;

	/**
	 * The baseport location at which this supply chain consignment is to be unloaded from a means of transport according to
	 * the transport contract.
	 * @see https://vocabulary.uncefact.org/unloadingBaseportLocation
	 */
	unloadingBaseportLocation?: IUneceLogisticsLocation;

	/**
	 * The logistics location where the supply chain consignment is unloaded.
	 * @see https://vocabulary.uncefact.org/unloadingLocation
	 */
	unloadingLocation?: IUneceLogisticsLocation[];

	/**
	 * The unloading sequence number for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/unloadingSequenceNumeric
	 */
	unloadingSequenceNumeric?: string;

	/**
	 * Logistics transport equipment utilized for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: IUneceLogisticsTransportEquipment[];

	/**
	 * The vanning event for this supply chain consignment, i.e. the loading of this consignment at the place of original
	 * despatch.
	 * @see https://vocabulary.uncefact.org/vanningEvent
	 */
	vanningEvent?: IUneceTransportEvent[];

	/**
	 * A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
	 * chain consignment.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the net volume of this supply chain consignment item which excludes all packaging.
	 * @see https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure
	 */
	volumeUnitNetVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * The date, time, date time or other date time value of the arrival of this supply chain consignment at a warehouse.
	 * @see https://vocabulary.uncefact.org/warehouseArrivalDateTime
	 */
	warehouseArrivalDateTime?: string;

	/**
	 * A party depositing goods in a warehouse for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseDepositorParty
	 */
	warehouseDepositorParty?: IUneceTradeParty[];

	/**
	 * A party taking responsibility for goods stored in a warehouse for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseKeeperParty
	 */
	warehouseKeeperParty?: IUneceTradeParty[];

	/**
	 * A party that operates a warehouse in which goods are stored for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseOperatorParty
	 */
	warehouseOperatorParty?: IUneceTradeParty[];

	/**
	 * A warehouse storage event for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseStorageEvent
	 */
	warehouseStorageEvent?: IUneceTransportEvent[];

	/**
	 * A measure of a chargeable weight of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * A measure of the gross weight (mass) of this supply chain consignment which includes the weight of packaging but which
	 * excludes the weight of any transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A measure of the net weight (mass) of this consignment which excludes the weight of packaging of this supply chain
	 * consignment and that of any transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType[];
}
