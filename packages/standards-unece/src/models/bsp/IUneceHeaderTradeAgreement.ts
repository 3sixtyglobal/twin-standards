// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDeliveryTerms } from "./IUneceDeliveryTerms.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceForecastTerms } from "./IUneceForecastTerms.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUnecePaymentTerms } from "./IUnecePaymentTerms.js";
import type { IUneceProject } from "./IUneceProject.js";
import type { IUneceRegulatoryProcedure } from "./IUneceRegulatoryProcedure.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceWorkflowObject } from "./IUneceWorkflowObject.js";
import type { UnecePriorityDescriptionCodeList } from "../lists/unecePriorityDescriptionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a header trade agreement.
 * @see https://vocabulary.uncefact.org/HeaderTradeAgreement
 */
export interface IUneceHeaderTradeAgreement {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.HeaderTradeAgreement;

	/**
	 * An additional document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IUneceDocument[];

	/**
	 * The terms of delivery applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableDeliveryTerms
	 */
	applicableDeliveryTerms?: IUneceDeliveryTerms;

	/**
	 * The supply chain forecast terms applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableForecastTerms
	 */
	applicableForecastTerms?: IUneceForecastTerms;

	/**
	 * A logistics location or place applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableLogisticsLocation
	 */
	applicableLogisticsLocation?: IUneceLogisticsLocation[];

	/**
	 * A logistics location or place applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableLocation
	 */
	applicableLocation?: IUneceLogisticsLocation[];

	/**
	 * The payment terms applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicablePaymentTerms
	 */
	applicablePaymentTerms?: IUnecePaymentTerms;

	/**
	 * A cross-border regulatory procedure applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IUneceRegulatoryProcedure[];

	/**
	 * The blanket order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/blanketOrderDocument
	 */
	blanketOrderDocument?: IUneceDocument;

	/**
	 * The buyer agent party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerAgentParty
	 */
	buyerAgentParty?: IUneceTradeParty;

	/**
	 * The date, time, date time, or other date time value of approval by the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerApprovedDateTime
	 */
	buyerApprovedDateTime?: string;

	/**
	 * The party assigned as an accountant by the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerAssignedAccountantParty
	 */
	buyerAssignedAccountantParty?: IUneceTradeParty;

	/**
	 * The buyer generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IUneceDocument;

	/**
	 * The buyer party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerParty
	 */
	buyerParty?: IUneceTradeParty;

	/**
	 * A buyer reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerReference
	 */
	buyerReference?: string;

	/**
	 * A party who is a buyer requisitioner in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerRequisitionerParty
	 */
	buyerRequisitionerParty?: IUneceTradeParty[];

	/**
	 * The party acting as a tax representative for the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerTaxRepresentativeParty
	 */
	buyerTaxRepresentativeParty?: IUneceTradeParty;

	/**
	 * The carrier party, at header level, for this trade agreement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: IUneceTradeParty;

	/**
	 * A catalogue document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueDocument
	 */
	catalogueDocument?: IUneceDocument[];

	/**
	 * The party that provides catalogue information for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationProviderParty
	 */
	catalogueInformationProviderParty?: IUneceTradeParty;

	/**
	 * The party that receives catalogue information for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationReceiverParty
	 */
	catalogueInformationReceiverParty?: IUneceTradeParty;

	/**
	 * A catalogue request document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueRequestDocument
	 */
	catalogueRequestDocument?: IUneceDocument[];

	/**
	 * A catalogue subscription document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueSubscriptionDocument
	 */
	catalogueSubscriptionDocument?: IUneceDocument[];

	/**
	 * A contract document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IUneceDocument[];

	/**
	 * A demand forecast document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/demandForecastDocument
	 */
	demandForecastDocument?: IUneceDocument[];

	/**
	 * The engineering change document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/engineeringChangeDocument
	 */
	engineeringChangeDocument?: IUneceDocument;

	/**
	 * The export licence document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/exportLicenceDocument
	 */
	exportLicenceDocument?: IUneceDocument;

	/**
	 * An identifier for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the impact for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/impactCode
	 */
	impactCode?: string;

	/**
	 * The import licence document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/importLicenceDocument
	 */
	importLicenceDocument?: IUneceDocument;

	/**
	 * The letter of credit document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IUneceDocument;

	/**
	 * The marketplace generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/marketplaceOrderDocument
	 */
	marketplaceOrderDocument?: IUneceDocument;

	/**
	 * The order response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/orderResponseDocument
	 */
	orderResponseDocument?: IUneceDocument;

	/**
	 * The original order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/originalOrderDocument
	 */
	originalOrderDocument?: IUneceDocument;

	/**
	 * The previous order change document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderChangeDocument
	 */
	previousOrderChangeDocument?: IUneceDocument;

	/**
	 * The previous order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderDocument
	 */
	previousOrderDocument?: IUneceDocument;

	/**
	 * The previous order response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderResponseDocument
	 */
	previousOrderResponseDocument?: IUneceDocument;

	/**
	 * The price list document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priceListDocument
	 */
	priceListDocument?: IUneceDocument;

	/**
	 * The logistics location applicable to the pricing base for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/pricingBaseApplicableLocation
	 */
	pricingBaseApplicableLocation?: IUneceLogisticsLocation;

	/**
	 * The seller party acting as the prime contractor for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/primeContractSellerParty
	 */
	primeContractSellerParty?: IUneceTradeParty;

	/**
	 * The code specifying the priority for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * The code specifying the delivery priority for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityDescriptionCode
	 */
	priorityDescriptionCode?: UnecePriorityDescriptionCodeList;

	/**
	 * The procurement party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/procurementParty
	 */
	procurementParty?: IUneceTradeParty;

	/**
	 * The party acting as the end user for the products in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/productEndUserParty
	 */
	productEndUserParty?: IUneceTradeParty;

	/**
	 * The promotional deal document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/promotionalDealDocument
	 */
	promotionalDealDocument?: IUneceDocument;

	/**
	 * A purchase conditions document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/purchaseConditionsDocument
	 */
	purchaseConditionsDocument?: IUneceDocument[];

	/**
	 * The quotation document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationDocument
	 */
	quotationDocument?: IUneceDocument;

	/**
	 * The quotation proposal document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalDocument
	 */
	quotationProposalDocument?: IUneceDocument;

	/**
	 * The quotation proposal response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalResponseDocument
	 */
	quotationProposalResponseDocument?: IUneceDocument;

	/**
	 * The quotation request document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestDocument
	 */
	quotationRequestDocument?: IUneceDocument;

	/**
	 * The quotation request response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestResponseDocument
	 */
	quotationRequestResponseDocument?: IUneceDocument;

	/**
	 * The quote trade workflow object referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quoteReferencedWorkflowObject
	 */
	quoteReferencedWorkflowObject?: IUneceWorkflowObject;

	/**
	 * A reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/reference
	 */
	reference?: string;

	/**
	 * A relevant party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: IUneceTradeParty[];

	/**
	 * A requisition document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionDocument
	 */
	requisitionDocument?: IUneceDocument[];

	/**
	 * A requisitioner document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionerDocument
	 */
	requisitionerDocument?: IUneceDocument[];

	/**
	 * An identifier for the revision of this header trade agreement.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string;

	/**
	 * The agent party representing the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesAgentParty
	 */
	salesAgentParty?: IUneceTradeParty;

	/**
	 * A sales conditions document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesConditionsDocument
	 */
	salesConditionsDocument?: IUneceDocument[];

	/**
	 * The sales report document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesReportDocument
	 */
	salesReportDocument?: IUneceDocument;

	/**
	 * The party assigned as an accountant by the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerAssignedAccountantParty
	 */
	sellerAssignedAccountantParty?: IUneceTradeParty;

	/**
	 * The seller generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IUneceDocument;

	/**
	 * The seller party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerParty
	 */
	sellerParty?: IUneceTradeParty;

	/**
	 * A seller reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerReference
	 */
	sellerReference?: string;

	/**
	 * The party acting as a tax representative for the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerTaxRepresentativeParty
	 */
	sellerTaxRepresentativeParty?: IUneceTradeParty;

	/**
	 * The shipping period specified in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/shippingPeriod
	 */
	shippingPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The procuring project specified for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/specifiedProject
	 */
	specifiedProject?: IUneceProject;

	/**
	 * A supply instruction document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/supplyInstructionDocument
	 */
	supplyInstructionDocument?: IUneceDocument[];

	/**
	 * A target market country for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/targetMarketCountry
	 */
	targetMarketCountry?: IUneceCountry[];

	/**
	 * An ultimate customer order document referenced for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
	 */
	ultimateCustomerOrderDocument?: IUneceDocument[];
}
