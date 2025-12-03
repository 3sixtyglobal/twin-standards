// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IMeasureType } from "./IMeasureType.js";
import type { IPaymentMeans } from "./IPaymentMeans.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ITradePrice } from "./ITradePrice.js";
import type { ITradeTax } from "./ITradeTax.js";
import type { IUnitMeasureType } from "./IUnitMeasureType.js";
import type { ChargePayingPartyRoleCodeList } from "../lists/chargePayingPartyRoleCodeList.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { FreightChargeTariffClassCodeList } from "../lists/freightChargeTariffClassCodeList.js";
import type { FreightChargeTypeId } from "../lists/freightChargeTypeId.js";
import type { LogisticsChargeCalculationBasisCodeList } from "../lists/logisticsChargeCalculationBasisCodeList.js";
import type { TransportServiceCategoryCodeList } from "../lists/transportServiceCategoryCodeList.js";
import type { TransportServicePaymentArrangementCodeList } from "../lists/transportServicePaymentArrangementCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A charge made for a logistics related service.
 * @see https://vocabulary.uncefact.org/ServiceCharge
 */
export interface IServiceCharge extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ServiceCharge;

	/**
	 * The allowance or charge, expressed as text, for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/allowanceCharge
	 */
	allowanceCharge?: string;

	/**
	 * A monetary value applied to this logistics service charge.
	 * @see https://vocabulary.uncefact.org/appliedAmount
	 */
	appliedAmount?: IAmountType[];

	/**
	 * The start location from which this logistics service charge should be applied.
	 * @see https://vocabulary.uncefact.org/appliedFromLocation
	 */
	appliedFromLocation?: ILogisticsLocation;

	/**
	 * A tax that is applied to this logistics service charge.
	 * @see https://vocabulary.uncefact.org/appliedTax
	 */
	appliedTax?: ITradeTax[];

	/**
	 * The end location at which this logistics service charge is no longer to be applied.
	 * @see https://vocabulary.uncefact.org/appliedToLocation
	 */
	appliedToLocation?: ILogisticsLocation;

	/**
	 * The basis, expressed as text, on which this logistics service charge is to be calculated, such as by volume or per unit.
	 * @see https://vocabulary.uncefact.org/calculationBasis
	 */
	calculationBasis?: string;

	/**
	 * The measure of the area used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisAreaMeasure
	 */
	calculationBasisAreaMeasure?: IMeasureType[];

	/**
	 * The code specifying the commodity used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisCommodityCode
	 */
	calculationBasisCommodityCode?: string;

	/**
	 * The trade price upon which a calculation of this logistics service charge is or will be based.
	 * @see https://vocabulary.uncefact.org/calculationBasisPrice
	 */
	calculationBasisPrice?: ITradePrice[];

	/**
	 * A number used as a basis in a calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisQuantity
	 */
	calculationBasisQuantity?: IQuantityType[];

	/**
	 * The code specifying the category of charge for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargeCategoryCode
	 */
	chargeCategoryCode?: string;

	/**
	 * A code specifying a charge currency for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargeCurrencyCode
	 */
	chargeCurrencyCode?: CurrencyCodeList[];

	/**
	 * The code specifying the role of the party responsible for paying this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargePayingPartyRoleCode
	 */
	chargePayingPartyRoleCode?: ChargePayingPartyRoleCodeList[];

	/**
	 * A textual description of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A monetary value of a disbursement for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/disbursementAmount
	 */
	disbursementAmount?: IAmountType[];

	/**
	 * The code specifying the tariff class for this logistics service charge which represents an entry in a table of fixed
	 * charges [Reference United Nations Code List (UNCL) 5243].
	 * @see https://vocabulary.uncefact.org/freightChargeTariffClassCode
	 */
	freightChargeTariffClassCode?: FreightChargeTariffClassCodeList[];

	/**
	 * The unique identifier for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/freightChargeTypeId
	 */
	freightChargeTypeId?: FreightChargeTypeId[];

	/**
	 * A code specifying a type of freight invoice of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/freightInvoiceTypeCode
	 */
	freightInvoiceTypeCode?: string;

	/**
	 * A code specifying an information type of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/informationTypeCode
	 */
	informationTypeCode?: string;

	/**
	 * A code specifying a type of invoice of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/invoiceTypeCode
	 */
	invoiceTypeCode?: string;

	/**
	 * The measure of the distance used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/linearUnitCalculationBasisDistanceMeasure
	 */
	linearUnitCalculationBasisDistanceMeasure?: ILinearUnitMeasureType[];

	/**
	 * The code specifying a basis on which this logistics service charge is to be calculated, such as by volume or per unit.
	 * @see https://vocabulary.uncefact.org/logisticsChargeCalculationBasisCalculationBasisCode
	 */
	logisticsChargeCalculationBasisCalculationBasisCode?: LogisticsChargeCalculationBasisCodeList;

	/**
	 * The code specifying the transport payment method for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/logisticsServiceChargeTransportPaymentMethodCode
	 */
	logisticsServiceChargeTransportPaymentMethodCode?: string;

	/**
	 * The location of the place of payment of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/paymentPlaceLocation
	 */
	paymentPlaceLocation?: ILogisticsLocation;

	/**
	 * A number used as a basis in a post-transhipment calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/postTranshipmentCalculationBasisQuantity
	 */
	postTranshipmentCalculationBasisQuantity?: IQuantityType[];

	/**
	 * A number used as a basis in a pre-transhipment calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/preTranshipmentCalculationBasisQuantity
	 */
	preTranshipmentCalculationBasisQuantity?: IQuantityType[];

	/**
	 * The monetary value of the repackage on which the logistics service charge is determined.
	 * @see https://vocabulary.uncefact.org/repackageAppliedAmount
	 */
	repackageAppliedAmount?: IAmountType[];

	/**
	 * The code specifying the category of service for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/serviceCategoryCode
	 */
	serviceCategoryCode?: string;

	/**
	 * A code specifying a service type of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/serviceTypeCode
	 */
	serviceTypeCode?: string;

	/**
	 * The trade settlement payment means specified for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentMeans
	 */
	specifiedPaymentMeans?: IPaymentMeans[];

	/**
	 * A code specifying a tariff currency for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/tariffCurrencyCode
	 */
	tariffCurrencyCode?: CurrencyCodeList[];

	/**
	 * The code specifying the category of this logistics service charge [Reference United Nations Code List (UNCL) 5237].
	 * @see https://vocabulary.uncefact.org/transportServiceCategoryCode
	 */
	transportServiceCategoryCode?: TransportServiceCategoryCodeList[];

	/**
	 * The code specifying the payment arrangement for this logistics service charge [Reference United Nations Code List (UNCL)
	 * 4237].
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: TransportServicePaymentArrangementCodeList;

	/**
	 * The measure of the area used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/unitCalculationBasisAreaMeasure
	 */
	unitCalculationBasisAreaMeasure?: IUnitMeasureType[];
}
