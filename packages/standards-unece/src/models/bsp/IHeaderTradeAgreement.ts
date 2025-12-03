// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICountry } from "./ICountry.js";
import type { IDeliveryTerms } from "./IDeliveryTerms.js";
import type { IDocument } from "./IDocument.js";
import type { IForecastTerms } from "./IForecastTerms.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IPaymentTerms } from "./IPaymentTerms.js";
import type { IProject } from "./IProject.js";
import type { IRegulatoryProcedure } from "./IRegulatoryProcedure.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { IWorkflowObject } from "./IWorkflowObject.js";
import type { PriorityDescriptionCodeList } from "../lists/priorityDescriptionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a header trade agreement.
 * @see https://vocabulary.uncefact.org/HeaderTradeAgreement
 */
export interface IHeaderTradeAgreement extends IJsonLdNodeObject {
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
	additionalDocument?: IDocument[];

	/**
	 * The terms of delivery applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableDeliveryTerms
	 */
	applicableDeliveryTerms?: IDeliveryTerms[];

	/**
	 * The supply chain forecast terms applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableForecastTerms
	 */
	applicableForecastTerms?: IForecastTerms[];

	/**
	 * A logistics location or place applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableLogisticsLocation
	 */
	applicableLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A logistics location or place applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableLocation
	 */
	applicableLocation?: ILogisticsLocation[];

	/**
	 * The payment terms applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicablePaymentTerms
	 */
	applicablePaymentTerms?: IPaymentTerms;

	/**
	 * A cross-border regulatory procedure applicable to this header trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableRegulatoryProcedure
	 */
	applicableRegulatoryProcedure?: IRegulatoryProcedure[];

	/**
	 * The blanket order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/blanketOrderDocument
	 */
	blanketOrderDocument?: IDocument[];

	/**
	 * The buyer agent party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerAgentParty
	 */
	buyerAgentParty?: ITradeParty[];

	/**
	 * The date, time, date time, or other date time value of approval by the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerApprovedDateTime
	 */
	buyerApprovedDateTime?: string;

	/**
	 * The party assigned as an accountant by the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerAssignedAccountantParty
	 */
	buyerAssignedAccountantParty?: ITradeParty[];

	/**
	 * The buyer generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IDocument[];

	/**
	 * The buyer party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerParty
	 */
	buyerParty?: ITradeParty[];

	/**
	 * A buyer reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerReference
	 */
	buyerReference?: string;

	/**
	 * A party who is a buyer requisitioner in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerRequisitionerParty
	 */
	buyerRequisitionerParty?: ITradeParty[];

	/**
	 * The party acting as a tax representative for the buyer for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerTaxRepresentativeParty
	 */
	buyerTaxRepresentativeParty?: ITradeParty[];

	/**
	 * The carrier party, at header level, for this trade agreement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: ITradeParty[];

	/**
	 * A catalogue document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueDocument
	 */
	catalogueDocument?: IDocument[];

	/**
	 * The party that provides catalogue information for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationProviderParty
	 */
	catalogueInformationProviderParty?: ITradeParty[];

	/**
	 * The party that receives catalogue information for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationReceiverParty
	 */
	catalogueInformationReceiverParty?: ITradeParty[];

	/**
	 * A catalogue request document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueRequestDocument
	 */
	catalogueRequestDocument?: IDocument[];

	/**
	 * A catalogue subscription document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueSubscriptionDocument
	 */
	catalogueSubscriptionDocument?: IDocument[];

	/**
	 * A contract document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IDocument[];

	/**
	 * A demand forecast document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/demandForecastDocument
	 */
	demandForecastDocument?: IDocument[];

	/**
	 * The engineering change document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/engineeringChangeDocument
	 */
	engineeringChangeDocument?: IDocument[];

	/**
	 * The export licence document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/exportLicenceDocument
	 */
	exportLicenceDocument?: IDocument[];

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
	importLicenceDocument?: IDocument[];

	/**
	 * The letter of credit document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IDocument[];

	/**
	 * The marketplace generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/marketplaceOrderDocument
	 */
	marketplaceOrderDocument?: IDocument[];

	/**
	 * The order response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/orderResponseDocument
	 */
	orderResponseDocument?: IDocument[];

	/**
	 * The original order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/originalOrderDocument
	 */
	originalOrderDocument?: IDocument[];

	/**
	 * The previous order change document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderChangeDocument
	 */
	previousOrderChangeDocument?: IDocument[];

	/**
	 * The previous order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderDocument
	 */
	previousOrderDocument?: IDocument[];

	/**
	 * The previous order response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderResponseDocument
	 */
	previousOrderResponseDocument?: IDocument[];

	/**
	 * The price list document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priceListDocument
	 */
	priceListDocument?: IDocument[];

	/**
	 * The logistics location applicable to the pricing base for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/pricingBaseApplicableLocation
	 */
	pricingBaseApplicableLocation?: ILogisticsLocation[];

	/**
	 * The seller party acting as the prime contractor for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/primeContractSellerParty
	 */
	primeContractSellerParty?: ITradeParty[];

	/**
	 * The code specifying the priority for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * The code specifying the delivery priority for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityDescriptionCode
	 */
	priorityDescriptionCode?: PriorityDescriptionCodeList[];

	/**
	 * The procurement party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/procurementParty
	 */
	procurementParty?: ITradeParty;

	/**
	 * The party acting as the end user for the products in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/productEndUserParty
	 */
	productEndUserParty?: ITradeParty[];

	/**
	 * The promotional deal document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/promotionalDealDocument
	 */
	promotionalDealDocument?: IDocument[];

	/**
	 * A purchase conditions document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/purchaseConditionsDocument
	 */
	purchaseConditionsDocument?: IDocument[];

	/**
	 * The quotation document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationDocument
	 */
	quotationDocument?: IDocument[];

	/**
	 * The quotation proposal document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalDocument
	 */
	quotationProposalDocument?: IDocument[];

	/**
	 * The quotation proposal response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalResponseDocument
	 */
	quotationProposalResponseDocument?: IDocument[];

	/**
	 * The quotation request document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestDocument
	 */
	quotationRequestDocument?: IDocument[];

	/**
	 * The quotation request response document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestResponseDocument
	 */
	quotationRequestResponseDocument?: IDocument[];

	/**
	 * The quote trade workflow object referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/quoteReferencedWorkflowObject
	 */
	quoteReferencedWorkflowObject?: IWorkflowObject[];

	/**
	 * A reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/reference
	 */
	reference?: string;

	/**
	 * A relevant party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: ITradeParty[];

	/**
	 * A requisition document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionDocument
	 */
	requisitionDocument?: IDocument[];

	/**
	 * A requisitioner document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionerDocument
	 */
	requisitionerDocument?: IDocument[];

	/**
	 * An identifier for the revision of this header trade agreement.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string;

	/**
	 * The agent party representing the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesAgentParty
	 */
	salesAgentParty?: ITradeParty;

	/**
	 * A sales conditions document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesConditionsDocument
	 */
	salesConditionsDocument?: IDocument[];

	/**
	 * The sales report document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/salesReportDocument
	 */
	salesReportDocument?: IDocument[];

	/**
	 * The party assigned as an accountant by the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerAssignedAccountantParty
	 */
	sellerAssignedAccountantParty?: ITradeParty[];

	/**
	 * The seller generated order document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IDocument[];

	/**
	 * The seller party for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerParty
	 */
	sellerParty?: ITradeParty[];

	/**
	 * A seller reference, expressed as text, for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerReference
	 */
	sellerReference?: string;

	/**
	 * The party acting as a tax representative for the seller for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerTaxRepresentativeParty
	 */
	sellerTaxRepresentativeParty?: ITradeParty[];

	/**
	 * The shipping period specified in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/shippingPeriod
	 */
	shippingPeriod?: ISpecifiedPeriod;

	/**
	 * The procuring project specified for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/specifiedProject
	 */
	specifiedProject?: IProject[];

	/**
	 * A supply instruction document referenced in this header trade agreement.
	 * @see https://vocabulary.uncefact.org/supplyInstructionDocument
	 */
	supplyInstructionDocument?: IDocument[];

	/**
	 * A target market country for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/targetMarketCountry
	 */
	targetMarketCountry?: ICountry[];

	/**
	 * An ultimate customer order document referenced for this header trade agreement.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
	 */
	ultimateCustomerOrderDocument?: IDocument[];
}
