// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDeliveryTerms } from "./IUneceDeliveryTerms.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceDurationUnitMeasureType } from "./IUneceDurationUnitMeasureType.js";
import type { IUneceForecastTerms } from "./IUneceForecastTerms.js";
import type { IUneceMarketplace } from "./IUneceMarketplace.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { UnecePriorityDescriptionCodeList } from "../lists/unecePriorityDescriptionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The contractual terms of a line trade agreement.
 * @see https://vocabulary.uncefact.org/LineTradeAgreement
 */
export interface IUneceLineTradeAgreement {
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
	additionalDocument?: IUneceDocument[];

	/**
	 * An agreed product price for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/agreedPriceProductPrice
	 */
	agreedPriceProductPrice?: IUneceTradePrice[];

	/**
	 * The terms of delivery applicable to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableDeliveryTerms
	 */
	applicableDeliveryTerms?: IUneceDeliveryTerms;

	/**
	 * The supply chain forecast terms applicable to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/applicableForecastTerms
	 */
	applicableForecastTerms?: IUneceForecastTerms;

	/**
	 * The blanket order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/blanketOrderDocument
	 */
	blanketOrderDocument?: IUneceDocument;

	/**
	 * The date, time, date time, or other date time value of approval by the buyer for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerApprovedDateTime
	 * @format date-time
	 */
	buyerApprovedDateTime?: string;

	/**
	 * A buyer generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerOrderDocument
	 */
	buyerOrderDocument?: IUneceDocument[];

	/**
	 * The buyer party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerParty
	 */
	buyerParty?: IUneceTradeParty;

	/**
	 * A buyer reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerReference
	 */
	buyerReference?: string;

	/**
	 * A party who is a buyer requisitioner in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/buyerRequisitionerParty
	 */
	buyerRequisitionerParty?: IUneceTradeParty[];

	/**
	 * A carrier party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: IUneceTradeParty[];

	/**
	 * A catalogue document referenced by this line trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueDocument
	 */
	catalogueDocument?: IUneceDocument[];

	/**
	 * The party that provides catalogue information for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/catalogueInformationProviderParty
	 */
	catalogueInformationProviderParty?: IUneceTradeParty;

	/**
	 * A contract document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/contractDocument
	 */
	contractDocument?: IUneceDocument[];

	/**
	 * The measure of the expected time interval between the receipt of an order and its delivery fulfilment according to this
	 * line trade agreement.
	 * @see https://vocabulary.uncefact.org/deliveryOrderFulfilmentLeadTimeMeasure
	 */
	deliveryOrderFulfilmentLeadTimeMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * A demand forecast document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/demandForecastDocument
	 */
	demandForecastDocument?: IUneceDocument[];

	/**
	 * The economic order quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/economicOrderQuantity
	 */
	economicOrderQuantity?: IUneceQuantityType;

	/**
	 * The engineering change document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/engineeringChangeDocument
	 */
	engineeringChangeDocument?: IUneceDocument;

	/**
	 * The exclusivity period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/exclusivityPeriod
	 */
	exclusivityPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The export licence document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/exportLicenceDocument
	 */
	exportLicenceDocument?: IUneceDocument;

	/**
	 * A gross product price in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/grossPriceProductPrice
	 */
	grossPriceProductPrice?: IUneceTradePrice[];

	/**
	 * The guaranteed product life span specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/guaranteedProductLifeSpanPeriod
	 */
	guaranteedProductLifeSpanPeriod?: IUneceSpecifiedPeriod;

	/**
	 * An identifier for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The immediate previous price list document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/immediatePreviousPriceListDocument
	 */
	immediatePreviousPriceListDocument?: IUneceDocument;

	/**
	 * The code specifying the impact for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/impactCode
	 */
	impactCode?: string;

	/**
	 * The import licence document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/importLicenceDocument
	 */
	importLicenceDocument?: IUneceDocument;

	/**
	 * A marketplace included in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/includedMarketplace
	 */
	includedMarketplace?: IUneceMarketplace[];

	/**
	 * The incremental product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/incrementalProductOrderableQuantity
	 */
	incrementalProductOrderableQuantity?: IUneceQuantityType;

	/**
	 * The indication of whether or not the use of the information provided in this line trade agreement is restricted.
	 * @see https://vocabulary.uncefact.org/informationUseRestrictionIndicator
	 */
	informationUseRestrictionIndicator?: boolean;

	/**
	 * The item buyer party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/itemBuyerParty
	 */
	itemBuyerParty?: IUneceTradeParty;

	/**
	 * The item seller party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/itemSellerParty
	 */
	itemSellerParty?: IUneceTradeParty;

	/**
	 * The letter of credit document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/letterOfCreditDocument
	 */
	letterOfCreditDocument?: IUneceDocument;

	/**
	 * A manufacturer party, at line level, for this trade agreement.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * The marketplace generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/marketplaceOrderDocument
	 */
	marketplaceOrderDocument?: IUneceDocument;

	/**
	 * The maximum order quantity ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/maximumOrderQuantityOrderingPeriod
	 */
	maximumOrderQuantityOrderingPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The maximum product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/maximumProductOrderableQuantity
	 */
	maximumProductOrderableQuantity?: IUneceQuantityType;

	/**
	 * The minimum order quantity ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/minimumOrderQuantityOrderingPeriod
	 */
	minimumOrderQuantityOrderingPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The minimum product orderable quantity for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/minimumProductOrderableQuantity
	 */
	minimumProductOrderableQuantity?: IUneceQuantityType;

	/**
	 * A net product price in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/netPriceProductPrice
	 */
	netPriceProductPrice?: IUneceTradePrice[];

	/**
	 * An order price for a product in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderPriceProductPrice
	 */
	orderPriceProductPrice?: IUneceTradePrice[];

	/**
	 * The code specifying the order product unit of measure, such as kilogram or litre, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderProductUnitMeasureCode
	 */
	orderProductUnitMeasureCode?: string;

	/**
	 * The ordering period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/orderingSpecifiedPeriod
	 */
	orderingSpecifiedPeriod?: IUneceSpecifiedPeriod;

	/**
	 * The original order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/originalOrderDocument
	 */
	originalOrderDocument?: IUneceDocument;

	/**
	 * The measure of the expected time interval between the receipt of an order and its pick-up fulfilment according to this
	 * line trade agreement.
	 * @see https://vocabulary.uncefact.org/pickUpOrderFulfilmentLeadTimeMeasure
	 */
	pickUpOrderFulfilmentLeadTimeMeasure?: IUneceDurationUnitMeasureType;

	/**
	 * The previous order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/previousOrderDocument
	 */
	previousOrderDocument?: IUneceDocument;

	/**
	 * The price list document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priceListDocument
	 */
	priceListDocument?: IUneceDocument;

	/**
	 * The seller party acting as the prime contractor for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/primeContractSellerParty
	 */
	primeContractSellerParty?: IUneceTradeParty;

	/**
	 * The code specifying the priority for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityCode
	 */
	priorityCode?: string;

	/**
	 * The code specifying the delivery priority for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/priorityDescriptionCode
	 */
	priorityDescriptionCode?: UnecePriorityDescriptionCodeList;

	/**
	 * The procurement party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/procurementParty
	 */
	procurementParty?: IUneceTradeParty;

	/**
	 * The code specifying the product availability according to this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productAvailabilityCode
	 */
	productAvailabilityCode?: string;

	/**
	 * The party acting as the end user for the products in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/productEndUserParty
	 */
	productEndUserParty?: IUneceTradeParty;

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
	promotionalDealDocument?: IUneceDocument;

	/**
	 * The quotation document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationDocument
	 */
	quotationDocument?: IUneceDocument;

	/**
	 * The quotation proposal document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalDocument
	 */
	quotationProposalDocument?: IUneceDocument;

	/**
	 * The quotation proposal response document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationProposalResponseDocument
	 */
	quotationProposalResponseDocument?: IUneceDocument;

	/**
	 * The quotation request document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestDocument
	 */
	quotationRequestDocument?: IUneceDocument;

	/**
	 * The quotation request response document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/quotationRequestResponseDocument
	 */
	quotationRequestResponseDocument?: IUneceDocument;

	/**
	 * A reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/reference
	 */
	reference?: string;

	/**
	 * A party relevant for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/relevantParty
	 */
	relevantParty?: IUneceTradeParty[];

	/**
	 * A requisition document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionDocument
	 */
	requisitionDocument?: IUneceDocument[];

	/**
	 * A requisitioner document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/requisitionerDocument
	 */
	requisitionerDocument?: IUneceDocument[];

	/**
	 * The resale period specified in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/resalePeriod
	 */
	resalePeriod?: IUneceSpecifiedPeriod;

	/**
	 * The code specifying the resale product unit of measure, such as kilogram or litre, for this trade line agreement.
	 * @see https://vocabulary.uncefact.org/resaleProductUnitMeasureCode
	 */
	resaleProductUnitMeasureCode?: string;

	/**
	 * An identifier for the revision of this line trade agreement.
	 * @see https://vocabulary.uncefact.org/revisionId
	 */
	revisionId?: string | IJsonLdValueObject;

	/**
	 * A sales conditions document referenced by this line trade agreement.
	 * @see https://vocabulary.uncefact.org/salesConditionsDocument
	 */
	salesConditionsDocument?: IUneceDocument[];

	/**
	 * The sales report document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/salesReportDocument
	 */
	salesReportDocument?: IUneceDocument;

	/**
	 * The seller generated order document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerOrderDocument
	 */
	sellerOrderDocument?: IUneceDocument;

	/**
	 * The seller party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerParty
	 */
	sellerParty?: IUneceTradeParty;

	/**
	 * A seller reference, expressed as text, for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/sellerReference
	 */
	sellerReference?: string;

	/**
	 * A supply instruction document referenced in this line trade agreement.
	 * @see https://vocabulary.uncefact.org/supplyInstructionDocument
	 */
	supplyInstructionDocument?: IUneceDocument[];

	/**
	 * The support centre party for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/supportCentreParty
	 */
	supportCentreParty?: IUneceTradeParty;

	/**
	 * A target market country for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/targetMarketCountry
	 */
	targetMarketCountry?: IUneceCountry[];

	/**
	 * An ultimate customer order document referenced for this line trade agreement.
	 * @see https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
	 */
	ultimateCustomerOrderDocument?: IUneceDocument[];
}
