// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICargo } from "./ICargo.js";
import type { ICargoInsurance } from "./ICargoInsurance.js";
import type { IConsignmentItem } from "./IConsignmentItem.js";
import type { ICountry } from "./ICountry.js";
import type { ICurrencyExchange } from "./ICurrencyExchange.js";
import type { ICustomsValuation } from "./ICustomsValuation.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IDeliveryInstructions } from "./IDeliveryInstructions.js";
import type { IDeliveryTerms } from "./IDeliveryTerms.js";
import type { IDocument } from "./IDocument.js";
import type { IGeopoliticalRegion } from "./IGeopoliticalRegion.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { IHaulageInstructions } from "./IHaulageInstructions.js";
import type { IInspectionEvent } from "./IInspectionEvent.js";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { ILogisticsStatus } from "./ILogisticsStatus.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRegulatoryProcedure } from "./IRegulatoryProcedure.js";
import type { IRiskAnalysisResult } from "./IRiskAnalysisResult.js";
import type { IService } from "./IService.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { IShippingMarks } from "./IShippingMarks.js";
import type { ISupplyChainReference } from "./ISupplyChainReference.js";
import type { ISupplyChainTradeTransaction } from "./ISupplyChainTradeTransaction.js";
import type { ITradeAllowanceCharge } from "./ITradeAllowanceCharge.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { ITransportInstructions } from "./ITransportInstructions.js";
import type { ITransportMovement } from "./ITransportMovement.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { TransportServicePaymentArrangementCodeList } from "../lists/transportServicePaymentArrangementCodeList.js";
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
export interface IConsignment extends IJsonLdNodeObject {
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
	applicableAllowanceCharge?: ITradeAllowanceCharge[];

	/**
	 * The cargo insurance applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCargoInsurance
	 */
	applicableCargoInsurance?: ICargoInsurance[];

	/**
	 * A currency exchange applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCurrencyExchange
	 */
	applicableCurrencyExchange?: ICurrencyExchange;

	/**
	 * A cross-border customs valuation applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableCustomsValuation
	 */
	applicableCustomsValuation?: ICustomsValuation;

	/**
	 * Dangerous goods applicable to the transport of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IDangerousGoods[];

	/**
	 * A cross-border regulatory procedure applicable to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IRegulatoryProcedure[];

	/**
	 * A logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * A referenced document associated with this supply chain consignment, such as the certificate of origin or dangerous
	 * goods note.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * A monetary value of an invoice associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceAmount
	 */
	associatedInvoiceAmount?: IAmountType[];

	/**
	 * A monetary value of the discount on an invoice associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceDiscountAmount
	 */
	associatedInvoiceDiscountAmount?: IAmountType;

	/**
	 * A percent that is a discount on an invoice amount associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedInvoiceDiscountPercent
	 */
	associatedInvoiceDiscountPercent?: string;

	/**
	 * A trade party associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/associatedParty
	 */
	associatedParty?: ITradeParty[];

	/**
	 * The logistics transport movement for this supply chain consignment at the point when the means of transport arrives in a
	 * country or at a regional border.
	 * @see https://vocabulary.uncefact.org/atArrivalTransportMovement
	 */
	atArrivalTransportMovement?: ITransportMovement[];

	/**
	 * The logistics transport movement for this supply chain consignment at the point when the means of transport departs a
	 * country or regional border.
	 * @see https://vocabulary.uncefact.org/atDepartureTransportMovement
	 */
	atDepartureTransportMovement?: ITransportMovement;

	/**
	 * The date, time, date time or other date time value when this supply chain consignment is due to be available.
	 * @see https://vocabulary.uncefact.org/availabilityDueDateTime
	 */
	availabilityDueDateTime?: string;

	/**
	 * A bonded warehouse storage event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/bondedWarehouseStorageEvent
	 */
	bondedWarehouseStorageEvent?: ITransportEvent[];

	/**
	 * A border crossing logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/borderCrossingTransportMovement
	 */
	borderCrossingTransportMovement?: ITransportMovement[];

	/**
	 * The monetary value of the COD (Cash On Delivery) amount to be collected by the carrier upon delivery of this supply
	 * chain consignment.
	 * @see https://vocabulary.uncefact.org/cODAmount
	 */
	cODAmount?: IAmountType;

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
	carrierAcceptanceLocation?: ILogisticsLocation;

	/**
	 * The party acting as the agent of the carrier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/carrierAgentParty
	 */
	carrierAgentParty?: ITradeParty[];

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
	carrierParty?: ITradeParty[];

	/**
	 * Information, expressed as text, provided by the carrier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/carrierProvidedInformation
	 */
	carrierProvidedInformation?: string;

	/**
	 * The number of separately chargeable transportation stages to be covered by this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/chargeableTransportationStageQuantity
	 */
	chargeableTransportationStageQuantity?: IQuantityType;

	/**
	 * The referenced classification document for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/classificationDocument
	 */
	classificationDocument?: IDocument[];

	/**
	 * A connecting carrier party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/connectingCarrierParty
	 */
	connectingCarrierParty?: ITradeParty[];

	/**
	 * The party authorized to act for or on behalf of the consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeAgentParty
	 */
	consigneeAgentParty?: ITradeParty[];

	/**
	 * The unique identifier assigned by the consignee to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeAssignedId
	 */
	consigneeAssignedId?: string;

	/**
	 * The consignee party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consigneeParty
	 */
	consigneeParty?: ITradeParty;

	/**
	 * The location at which this supply chain consignment will be or has been received by the consignee.
	 * @see https://vocabulary.uncefact.org/consigneeReceiptLocation
	 */
	consigneeReceiptLocation?: ILogisticsLocation;

	/**
	 * The number of consignment items separately defined for transport or customs purposes within this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/consignmentItemQuantity
	 */
	consignmentItemQuantity?: IQuantityType;

	/**
	 * The party authorized to act for or on behalf of the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorAgentParty
	 */
	consignorAgentParty?: ITradeParty;

	/**
	 * The unique identifier assigned by the consignor to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorAssignedId
	 */
	consignorAssignedId?: string;

	/**
	 * The consignor party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorParty
	 */
	consignorParty?: ITradeParty;

	/**
	 * Border clearance instructions provided by the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorProvidedBorderClearanceInstructions
	 */
	consignorProvidedBorderClearanceInstructions?: ITransportInstructions[];

	/**
	 * Information, expressed as text, provided by the consignor for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consignorProvidedInformation
	 */
	consignorProvidedInformation?: string;

	/**
	 * The party responsible for the consolidation of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/consolidatorParty
	 */
	consolidatorParty?: ITradeParty;

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
	currencyServiceChargeCurrencyCode?: CurrencyCodeList[];

	/**
	 * A code specifying a service tariff currency for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/currencyServiceTariffCurrencyCode
	 */
	currencyServiceTariffCurrencyCode?: CurrencyCodeList[];

	/**
	 * The party acting as an agent for, or on behalf of, the consignor with respect to the customs export procedures for this
	 * supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsExportAgentParty
	 */
	customsExportAgentParty?: ITradeParty;

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
	customsImportAgentParty?: ITradeParty;

	/**
	 * A referenced invoice document required by customs for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsRequiredInvoiceDocument
	 */
	customsRequiredInvoiceDocument?: IDocument[];

	/**
	 * The party acting as an agent for, or on behalf of, the consignor with respect to customs transit procedures for this
	 * supply chain consignment.
	 * @see https://vocabulary.uncefact.org/customsTransitAgentParty
	 */
	customsTransitAgentParty?: ITradeParty;

	/**
	 * The party responsible for providing the dangerous goods notification in accordance with the dangerous goods regulations
	 * relevant for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/dangerousGoodsNotifierParty
	 */
	dangerousGoodsNotifierParty?: ITradeParty;

	/**
	 * The location of this supply chain consignment as declared for customs.
	 * @see https://vocabulary.uncefact.org/declaredForCustomsLocation
	 */
	declaredForCustomsLocation?: ILogisticsLocation;

	/**
	 * The monetary value of this supply chain consignment as declared by the shipper or his agent for the purpose of varying
	 * the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to goods or
	 * delayed delivery.
	 * @see https://vocabulary.uncefact.org/declaredValueForCarriageAmount
	 */
	declaredValueForCarriageAmount?: IAmountType;

	/**
	 * The monetary value declared for customs purposes for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IAmountType[];

	/**
	 * The party responsible for the deconsolidation of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deconsolidatorParty
	 */
	deconsolidatorParty?: ITradeParty;

	/**
	 * The delivery information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryInformation
	 */
	deliveryInformation?: string;

	/**
	 * Delivery instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryInstructions
	 */
	deliveryInstructions?: IDeliveryInstructions[];

	/**
	 * The party to whom this supply chain consignment will be, or has been, delivered.
	 * @see https://vocabulary.uncefact.org/deliveryParty
	 */
	deliveryParty?: ITradeParty[];

	/**
	 * The delivery event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: ITransportEvent[];

	/**
	 * Demurrage information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/demurrageInformation
	 */
	demurrageInformation?: string;

	/**
	 * The party from whom this supply chain consignment will be or has been despatched.
	 * @see https://vocabulary.uncefact.org/despatchParty
	 */
	despatchParty?: ITradeParty[];

	/**
	 * The destination country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/destinationCountry
	 */
	destinationCountry?: ICountry[];

	/**
	 * A transport devanning event for this referenced supply chain consignment, i.e. the unloading of this consignment at the
	 * place of delivery.
	 * @see https://vocabulary.uncefact.org/devanningEvent
	 */
	devanningEvent?: ITransportEvent[];

	/**
	 * An estimated logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.
	 * @see https://vocabulary.uncefact.org/estimatedApplicableServiceCharge
	 */
	estimatedApplicableServiceCharge?: IServiceCharge[];

	/**
	 * An examination event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	examinationEvent?: ITransportEvent[];

	/**
	 * The export country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exportCountry
	 */
	exportCountry?: ICountry;

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
	exportGeopoliticalRegion?: IGeopoliticalRegion[];

	/**
	 * The party who exports this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/exporterParty
	 */
	exporterParty?: ITradeParty;

	/**
	 * The monetary value that has to be, or has been, paid for this supply chain consignment as calculated under FOB (Free on
	 * Board) delivery terms.
	 * @see https://vocabulary.uncefact.org/fOBAmount
	 */
	fOBAmount?: IAmountType;

	/**
	 * The final destination country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/finalDestinationCountry
	 */
	finalDestinationCountry?: ICountry;

	/**
	 * The final destination location for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/finalDestinationLocation
	 */
	finalDestinationLocation?: ILogisticsLocation;

	/**
	 * The unique identifier assigned by the freight forwarder to this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/freightForwarderAssignedId
	 */
	freightForwarderAssignedId?: string;

	/**
	 * The freight forwarder party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/freightForwarderParty
	 */
	freightForwarderParty?: ITradeParty[];

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
	groupingCentreParty?: ITradeParty[];

	/**
	 * Handling instructions for this supply chain consignment, such as where or how specified packages or containers are to be
	 * loaded on a means of transport.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IHandlingInstructions;

	/**
	 * Haulage instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/haulageInstructions
	 */
	haulageInstructions?: IHaulageInstructions[];

	/**
	 * A unique identifier for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The import country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/importCountry
	 */
	importCountry?: ICountry[];

	/**
	 * The party who imports this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/importerParty
	 */
	importerParty?: ITradeParty;

	/**
	 * A referenced consignment included in this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedConsignment
	 */
	includedConsignment?: IConsignment[];

	/**
	 * A referenced consignment item included in this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedConsignmentItem
	 */
	includedConsignmentItem?: IConsignmentItem[];

	/**
	 * The measure of the gross weight (mass) including the tare weight of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/includedTareGrossWeightMeasure
	 */
	includedTareGrossWeightMeasure?: IMeasureType[];

	/**
	 * Information, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * A currency exchange applicable to an insurance charge for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/insuranceApplicableCurrencyExchange
	 */
	insuranceApplicableCurrencyExchange?: ICurrencyExchange;

	/**
	 * The monetary value of the insurance premium for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/insurancePremiumAmount
	 */
	insurancePremiumAmount?: IAmountType[];

	/**
	 * The monetary value of this supply chain consignment as covered by an insurance policy.
	 * @see https://vocabulary.uncefact.org/insuranceValueAmount
	 */
	insuranceValueAmount?: IAmountType[];

	/**
	 * A party that is an intermediate consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/intermediateConsigneeParty
	 */
	intermediateConsigneeParty?: ITradeParty[];

	/**
	 * A currency exchange applicable to the invoice for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange
	 */
	invoiceApplicableCurrencyExchange?: ICurrencyExchange;

	/**
	 * An invoicee trade party associated with this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/invoiceeAssociatedParty
	 */
	invoiceeAssociatedParty?: ITradeParty[];

	/**
	 * A measure of the loading length which is the length along a means of transport over which the complete width and height
	 * is needed for loading all the goods items in this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: ILinearUnitMeasureType;

	/**
	 * The baseport location at which this supply chain consignment is to be loaded on a means of transport according to the
	 * transport contract.
	 * @see https://vocabulary.uncefact.org/loadingBaseportLocation
	 */
	loadingBaseportLocation?: ILogisticsLocation;

	/**
	 * Loading information, expressed as text, for this supply chain consignment, such as advice and instructions.
	 * @see https://vocabulary.uncefact.org/loadingInformation
	 */
	loadingInformation?: string;

	/**
	 * Loading instructions for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingInstructions
	 */
	loadingInstructions?: ITransportInstructions[];

	/**
	 * The number of loading lists, manifests or similar documents for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingListQuantity
	 */
	loadingListQuantity?: IQuantityType;

	/**
	 * The logistics location where the supply chain consignment is loaded.
	 * @see https://vocabulary.uncefact.org/loadingLocation
	 */
	loadingLocation?: ILogisticsLocation[];

	/**
	 * The loading sequence number for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/loadingSequenceNumeric
	 */
	loadingSequenceNumeric?: string;

	/**
	 * The local party authorized to act for or on behalf of the consignee for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/localConsigneeAgentParty
	 */
	localConsigneeAgentParty?: ITradeParty[];

	/**
	 * A main carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/mainCarriageTransportMovement
	 */
	mainCarriageTransportMovement?: ITransportMovement[];

	/**
	 * A referenced manifest document associated to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/manifestAssociatedDocument
	 */
	manifestAssociatedDocument?: IDocument;

	/**
	 * Transport cargo details of this supply chain consignment sufficient to identify its nature for customs, statistical or
	 * transport purposes.
	 * @see https://vocabulary.uncefact.org/natureIdentificationCargo
	 */
	natureIdentificationCargo?: ICargo[];

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
	notifiedParty?: ITradeParty[];

	/**
	 * An on-carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/onCarriageTransportMovement
	 */
	onCarriageTransportMovement?: ITransportMovement[];

	/**
	 * An onward routing location for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/onwardRoutingLocation
	 */
	onwardRoutingLocation?: ILogisticsLocation[];

	/**
	 * A country of origin for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/originCountry
	 */
	originCountry?: ICountry[];

	/**
	 * The geopolitical region of origin for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/originGeopoliticalRegion
	 */
	originGeopoliticalRegion?: IGeopoliticalRegion[];

	/**
	 * The location from which this supply chain consignment was originally despatched.
	 * @see https://vocabulary.uncefact.org/originalDespatchLocation
	 */
	originalDespatchLocation?: ILogisticsLocation;

	/**
	 * The number of packages within this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IQuantityType[];

	/**
	 * A type of package, expressed as text, for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/packageType
	 */
	packageType?: string;

	/**
	 * Physical logistics shipping marks and barcoding information related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/physicalShippingMarks
	 */
	physicalShippingMarks?: IShippingMarks;

	/**
	 * The pick-up event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: ITransportEvent[];

	/**
	 * The pick-up trade party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/pickUpParty
	 */
	pickUpParty?: ITradeParty[];

	/**
	 * A pre-carriage logistics transport movement for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/preCarriageTransportMovement
	 */
	preCarriageTransportMovement?: ITransportMovement[];

	/**
	 * A previous administrative referenced document for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/previousAdministrativeDocument
	 */
	previousAdministrativeDocument?: IDocument[];

	/**
	 * A re-export country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/reExportCountry
	 */
	reExportCountry?: ICountry[];

	/**
	 * The type of booking, expressed as text, related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/relatedBookingType
	 */
	relatedBookingType?: string;

	/**
	 * A trade transaction related to this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/relatedTradeTransaction
	 */
	relatedTradeTransaction?: ISupplyChainTradeTransaction[];

	/**
	 * A logistics status reported for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: ILogisticsStatus[];

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
	serviceChargeApplicableCurrencyExchange?: ICurrencyExchange;

	/**
	 * The ship from party for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/shipFromParty
	 */
	shipFromParty?: ITradeParty[];

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
	shipToParty?: ITradeParty[];

	/**
	 * A date, time, date time, or other date time value when this supply chain consignment is shipped onboard.
	 * @see https://vocabulary.uncefact.org/shippedOnboardDateTime
	 */
	shippedOnboardDateTime?: string;

	/**
	 * Delivery terms specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedDeliveryTerms
	 */
	specifiedDeliveryTerms?: IDeliveryTerms;

	/**
	 * An inspection event specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IInspectionEvent[];

	/**
	 * Logistics status information specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsStatus
	 */
	specifiedLogisticsStatus?: ILogisticsStatus[];

	/**
	 * A result of a logistics risk analysis calculation specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IRiskAnalysisResult[];

	/**
	 * A reference specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainReference
	 */
	specifiedSupplyChainReference?: ISupplyChainReference[];

	/**
	 * A logistics transport movement specified for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/specifiedTransportMovement
	 */
	specifiedTransportMovement?: ITransportMovement[];

	/**
	 * A statement note for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/statementNote
	 */
	statementNote?: INote[];

	/**
	 * A storage event for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/storageEvent
	 */
	storageEvent?: ITransportEvent[];

	/**
	 * A textual summary description of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/summaryDescription
	 */
	summaryDescription?: string;

	/**
	 * The total monetary value of all allowances and charges for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalAllowanceChargeAmount
	 */
	totalAllowanceChargeAmount?: IAmountType[];

	/**
	 * The total monetary value of all freight and other service charges for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IAmountType[];

	/**
	 * The total monetary value of all freight and other service charges which are to be collected from the consignee at or
	 * after delivery for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalCollectChargeAmount
	 */
	totalCollectChargeAmount?: IAmountType[];

	/**
	 * The monetary value of total disbursement for this supply chain consignment, such as the amount to be collected by the
	 * carrier according to the order given by the consignor.
	 * @see https://vocabulary.uncefact.org/totalDisbursementAmount
	 */
	totalDisbursementAmount?: IAmountType[];

	/**
	 * The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
	 * consignment calculated from the export exit location to the import entry location.
	 * @see https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount
	 */
	totalExportExitToImportEntryChargeAmount?: IAmountType[];

	/**
	 * The total monetary value of all freight and other service charges which have been paid in advance for this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/totalPrepaidChargeAmount
	 */
	totalPrepaidChargeAmount?: IAmountType[];

	/**
	 * The measure of the total tare weight (mass) of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/totalTareWeightMeasure
	 */
	totalTareWeightMeasure?: IMeasureType[];

	/**
	 * A traded parcel identifier for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/tradedParcelId
	 */
	tradedParcelId?: string;

	/**
	 * A transit country for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transitCountry
	 */
	transitCountry?: ICountry[];

	/**
	 * A location of transit for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transitLocation
	 */
	transitLocation?: ILogisticsLocation[];

	/**
	 * The referenced transport contract document for this supply chain consignment, such as an airwaybill or a seawaybill.
	 * @see https://vocabulary.uncefact.org/transportContractDocument
	 */
	transportContractDocument?: IDocument;

	/**
	 * A number of pieces of transport equipment, such as containers or similar unit load devices, in this supply chain
	 * consignment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentQuantity
	 */
	transportEquipmentQuantity?: IQuantityType;

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
	transportEvent?: ITransportEvent[];

	/**
	 * Transport packages for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportPackage
	 */
	transportPackage?: IPackage[];

	/**
	 * A transport service for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportService
	 */
	transportService?: IService[];

	/**
	 * The code specifying the payment arrangements for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: TransportServicePaymentArrangementCodeList;

	/**
	 * The party which is the buyer of the transport services for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/transportServicesBuyerParty
	 */
	transportServicesBuyerParty?: ITradeParty[];

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
	transshipmentLocation?: ILogisticsLocation[];

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
	unloadingBaseportLocation?: ILogisticsLocation;

	/**
	 * The logistics location where the supply chain consignment is unloaded.
	 * @see https://vocabulary.uncefact.org/unloadingLocation
	 */
	unloadingLocation?: ILogisticsLocation[];

	/**
	 * The unloading sequence number for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/unloadingSequenceNumeric
	 */
	unloadingSequenceNumeric?: string;

	/**
	 * Logistics transport equipment utilized for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/utilizedTransportEquipment
	 */
	utilizedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * The vanning event for this supply chain consignment, i.e. the loading of this consignment at the place of original
	 * despatch.
	 * @see https://vocabulary.uncefact.org/vanningEvent
	 */
	vanningEvent?: ITransportEvent[];

	/**
	 * A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
	 * chain consignment.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the net volume of this supply chain consignment item which excludes all packaging.
	 * @see https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure
	 */
	volumeUnitNetVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The date, time, date time or other date time value of the arrival of this supply chain consignment at a warehouse.
	 * @see https://vocabulary.uncefact.org/warehouseArrivalDateTime
	 */
	warehouseArrivalDateTime?: string;

	/**
	 * A party depositing goods in a warehouse for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseDepositorParty
	 */
	warehouseDepositorParty?: ITradeParty[];

	/**
	 * A party taking responsibility for goods stored in a warehouse for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseKeeperParty
	 */
	warehouseKeeperParty?: ITradeParty[];

	/**
	 * A party that operates a warehouse in which goods are stored for this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseOperatorParty
	 */
	warehouseOperatorParty?: ITradeParty[];

	/**
	 * A warehouse storage event for this referenced supply chain consignment.
	 * @see https://vocabulary.uncefact.org/warehouseStorageEvent
	 */
	warehouseStorageEvent?: ITransportEvent[];

	/**
	 * A measure of a chargeable weight of this supply chain consignment.
	 * @see https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure
	 */
	weightUnitChargeableWeightMeasure?: IWeightUnitMeasureType;

	/**
	 * A measure of the gross weight (mass) of this supply chain consignment which includes the weight of packaging but which
	 * excludes the weight of any transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A measure of the net weight (mass) of this consignment which excludes the weight of packaging of this supply chain
	 * consignment and that of any transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];
}
