// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICountry } from "./ICountry.js";
import type { IDeliveryTerms } from "./IDeliveryTerms.js";
import type { IDocument } from "./IDocument.js";
import type { IDurationUnitMeasureType } from "./IDurationUnitMeasureType.js";
import type { IForecastTerms } from "./IForecastTerms.js";
import type { IMarketplace } from "./IMarketplace.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITradePrice } from "./ITradePrice.js";
import type { PriorityDescriptionCodeList } from "../lists/priorityDescriptionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a line trade agreement.
 * @see https://vocabulary.uncefact.org/LineTradeAgreement
 */
export interface ILineTradeAgreement extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LineTradeAgreement;

	/**
	 * An additional document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/additionalDocument
	 */
	additionalDocument?: IDocument[];

	/**
	 * An agreed product price for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/agreedPriceProductPrice
	 */
	agreedPriceProductPrice?: ITradePrice[];

	/**
	 * The terms of delivery applicable to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableDeliveryTerms
	 */
	applicableDeliveryTerms?: IDeliveryTerms[];

	/**
	 * The supply chain forecast terms applicable to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableForecastTerms
	 */
	applicableForecastTerms?: IForecastTerms[];

	/**
	 * The blanket order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/blanketOrderDocument
	 */
	blanketOrderDocument?: IDocument[];

	/**
	 * The date, time, date time, or other date time value of approval by the buyer for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerApprovedDateTime
	 */
	buyerApprovedDateTime?: string;

	/**
	 * A buyer generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IDocument[];

	/**
	 * The buyer party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerParty
	 */
	buyerParty?: ITradeParty[];

	/**
	 * A buyer reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerReference
	 */
	buyerReference?: string;

	/**
	 * A party who is a buyer requisitioner in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerRequisitionerParty
	 */
	buyerRequisitionerParty?: ITradeParty[];

	/**
	 * A carrier party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: ITradeParty[];

	/**
	 * A catalogue document referenced by this line trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueDocument
	 */
	catalogueDocument?: IDocument[];

	/**
	 * The party that provides catalogue information for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationProviderParty
	 */
	catalogueInformationProviderParty?: ITradeParty[];

	/**
	 * A contract document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IDocument[];

	/**
	 * The measure of the expected time interval between the receipt of an order and its delivery fulfilment according to this
	 * line trade agreement.
	 * @see https://vocabulary.uncefact.org/deliveryOrderFulfilmentLeadTimeMeasure
	 */
	deliveryOrderFulfilmentLeadTimeMeasure?: IDurationUnitMeasureType[];

	/**
	 * A demand forecast document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/demandForecastDocument
	 */
	demandForecastDocument?: IDocument[];

	/**
	 * The economic order quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/economicOrderQuantity
	 */
	economicOrderQuantity?: IQuantityType[];

	/**
	 * The engineering change document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/engineeringChangeDocument
	 */
	engineeringChangeDocument?: IDocument[];

	/**
	 * The exclusivity period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/exclusivityPeriod
	 */
	exclusivityPeriod?: ISpecifiedPeriod[];

	/**
	 * The export licence document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/exportLicenceDocument
	 */
	exportLicenceDocument?: IDocument[];

	/**
	 * A gross product price in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/grossPriceProductPrice
	 */
	grossPriceProductPrice?: ITradePrice[];

	/**
	 * The guaranteed product life span specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/guaranteedProductLifeSpanPeriod
	 */
	guaranteedProductLifeSpanPeriod?: ISpecifiedPeriod;

	/**
	 * An identifier for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The immediate previous price list document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/immediatePreviousPriceListDocument
	 */
	immediatePreviousPriceListDocument?: IDocument[];

	/**
	 * The code specifying the impact for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/impactCode
	 */
	impactCode?: string;

	/**
	 * The import licence document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/importLicenceDocument
	 */
	importLicenceDocument?: IDocument[];

	/**
	 * A marketplace included in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/includedMarketplace
	 */
	includedMarketplace?: IMarketplace[];

	/**
	 * The incremental product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/incrementalProductOrderableQuantity
	 */
	incrementalProductOrderableQuantity?: IQuantityType[];

	/**
	 * The indication of whether or not the use of the information provided in this line trade agreement is restricted.
	 * @see https://vocabulary.uncefact.org/informationUseRestrictionIndicator
	 */
	informationUseRestrictionIndicator?: boolean;

	/**
	 * The item buyer party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/itemBuyerParty
	 */
	itemBuyerParty?: ITradeParty[];

	/**
	 * The item seller party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/itemSellerParty
	 */
	itemSellerParty?: ITradeParty[];

	/**
	 * The letter of credit document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IDocument[];

	/**
	 * A manufacturer party, at line level, for this trade agreement.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The marketplace generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/marketplaceOrderDocument
	 */
	marketplaceOrderDocument?: IDocument[];

	/**
	 * The maximum order quantity ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/maximumOrderQuantityOrderingPeriod
	 */
	maximumOrderQuantityOrderingPeriod?: ISpecifiedPeriod[];

	/**
	 * The maximum product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/maximumProductOrderableQuantity
	 */
	maximumProductOrderableQuantity?: IQuantityType[];

	/**
	 * The minimum order quantity ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/minimumOrderQuantityOrderingPeriod
	 */
	minimumOrderQuantityOrderingPeriod?: ISpecifiedPeriod[];

	/**
	 * The minimum product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/minimumProductOrderableQuantity
	 */
	minimumProductOrderableQuantity?: IQuantityType[];

	/**
	 * A net product price in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/netPriceProductPrice
	 */
	netPriceProductPrice?: ITradePrice[];

	/**
	 * An order price for a product in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderPriceProductPrice
	 */
	orderPriceProductPrice?: ITradePrice[];

	/**
	 * The code specifying the order product unit of measure, such as kilogram or litre, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderProductUnitMeasureCode
	 */
	orderProductUnitMeasureCode?: string;

	/**
	 * The ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderingSpecifiedPeriod
	 */
	orderingSpecifiedPeriod?: ISpecifiedPeriod[];

	/**
	 * The original order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/originalOrderDocument
	 */
	originalOrderDocument?: IDocument[];

	/**
	 * The measure of the expected time interval between the receipt of an order and its pick-up fulfilment according to this
	 * line trade agreement.
	 * @see https://vocabulary.uncefact.org/pickUpOrderFulfilmentLeadTimeMeasure
	 */
	pickUpOrderFulfilmentLeadTimeMeasure?: IDurationUnitMeasureType[];

	/**
	 * The previous order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderDocument
	 */
	previousOrderDocument?: IDocument[];

	/**
	 * The price list document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priceListDocument
	 */
	priceListDocument?: IDocument[];

	/**
	 * The seller party acting as the prime contractor for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/primeContractSellerParty
	 */
	primeContractSellerParty?: ITradeParty[];

	/**
	 * The code specifying the priority for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * The code specifying the delivery priority for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityDescriptionCode
	 */
	priorityDescriptionCode?: PriorityDescriptionCodeList[];

	/**
	 * The procurement party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/procurementParty
	 */
	procurementParty?: ITradeParty;

	/**
	 * The code specifying the product availability according to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productAvailabilityCode
	 */
	productAvailabilityCode?: string;

	/**
	 * The party acting as the end user for the products in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productEndUserParty
	 */
	productEndUserParty?: ITradeParty[];

	/**
	 * The indication of whether or not, according to this line trade agreement, the product is manufactured, built or
	 * customized only after receipt of order.
	 * @see https://vocabulary.uncefact.org/productMadeToOrderIndicator
	 */
	productMadeToOrderIndicator?: boolean;

	/**
	 * The indication of whether or not the product can be ordered according to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productOrderableIndicator
	 */
	productOrderableIndicator?: boolean;

	/**
	 * The indication of whether or not the product can be reordered according to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productReorderableIndicator
	 */
	productReorderableIndicator?: boolean;

	/**
	 * The promotional deal document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/promotionalDealDocument
	 */
	promotionalDealDocument?: IDocument[];

	/**
	 * The quotation document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationDocument
	 */
	quotationDocument?: IDocument[];

	/**
	 * The quotation proposal document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalDocument
	 */
	quotationProposalDocument?: IDocument[];

	/**
	 * The quotation proposal response document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalResponseDocument
	 */
	quotationProposalResponseDocument?: IDocument[];

	/**
	 * The quotation request document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestDocument
	 */
	quotationRequestDocument?: IDocument[];

	/**
	 * The quotation request response document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestResponseDocument
	 */
	quotationRequestResponseDocument?: IDocument[];

	/**
	 * A reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/reference
	 */
	reference?: string;

	/**
	 * A party relevant for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: ITradeParty[];

	/**
	 * A requisition document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionDocument
	 */
	requisitionDocument?: IDocument[];

	/**
	 * A requisitioner document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionerDocument
	 */
	requisitionerDocument?: IDocument[];

	/**
	 * The resale period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/resalePeriod
	 */
	resalePeriod?: ISpecifiedPeriod;

	/**
	 * The code specifying the resale product unit of measure, such as kilogram or litre, for this trade line agreement.
	 * @see https://vocabulary.uncefact.org/resaleProductUnitMeasureCode
	 */
	resaleProductUnitMeasureCode?: string;

	/**
	 * An identifier for the revision of this line trade agreement.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string;

	/**
	 * A sales conditions document referenced by this line trade agreement.
	 * @see https://vocabulary.uncefact.org/salesConditionsDocument
	 */
	salesConditionsDocument?: IDocument[];

	/**
	 * The sales report document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/salesReportDocument
	 */
	salesReportDocument?: IDocument[];

	/**
	 * The seller generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IDocument[];

	/**
	 * The seller party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerParty
	 */
	sellerParty?: ITradeParty[];

	/**
	 * A seller reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerReference
	 */
	sellerReference?: string;

	/**
	 * A supply instruction document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/supplyInstructionDocument
	 */
	supplyInstructionDocument?: IDocument[];

	/**
	 * The support centre party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/supportCentreParty
	 */
	supportCentreParty?: ITradeParty;

	/**
	 * A target market country for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/targetMarketCountry
	 */
	targetMarketCountry?: ICountry[];

	/**
	 * An ultimate customer order document referenced for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
	 */
	ultimateCustomerOrderDocument?: IDocument[];
}
