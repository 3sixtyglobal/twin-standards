// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUnecePaymentMeans } from "./IUnecePaymentMeans.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceTradePrice } from "./IUneceTradePrice.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { IUneceUnitMeasureType } from "./IUneceUnitMeasureType.js";
import type { UneceChargePayingPartyRoleCodeList } from "../lists/uneceChargePayingPartyRoleCodeList.js";
import type { UneceCurrencyCodeList } from "../lists/uneceCurrencyCodeList.js";
import type { UneceFreightChargeTariffClassCodeList } from "../lists/uneceFreightChargeTariffClassCodeList.js";
import type { UneceFreightChargeTypeId } from "../lists/uneceFreightChargeTypeId.js";
import type { UneceLogisticsChargeCalculationBasisCodeList } from "../lists/uneceLogisticsChargeCalculationBasisCodeList.js";
import type { UneceTransportServiceCategoryCodeList } from "../lists/uneceTransportServiceCategoryCodeList.js";
import type { UneceTransportServicePaymentArrangementCodeList } from "../lists/uneceTransportServicePaymentArrangementCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A charge made for a logistics related service.
 * @see https://vocabulary.uncefact.org/ServiceCharge
 */
export interface IUneceServiceCharge {
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
	appliedAmount?: IUneceAmountType[];

	/**
	 * The start location from which this logistics service charge should be applied.
	 * @see https://vocabulary.uncefact.org/appliedFromLocation
	 */
	appliedFromLocation?: IUneceLogisticsLocation;

	/**
	 * A tax that is applied to this logistics service charge.
	 * @see https://vocabulary.uncefact.org/appliedTax
	 */
	appliedTax?: IUneceTradeTax[];

	/**
	 * The end location at which this logistics service charge is no longer to be applied.
	 * @see https://vocabulary.uncefact.org/appliedToLocation
	 */
	appliedToLocation?: IUneceLogisticsLocation;

	/**
	 * The basis, expressed as text, on which this logistics service charge is to be calculated, such as by volume or per unit.
	 * @see https://vocabulary.uncefact.org/calculationBasis
	 */
	calculationBasis?: string;

	/**
	 * The measure of the area used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisAreaMeasure
	 */
	calculationBasisAreaMeasure?: IUneceMeasureType;

	/**
	 * The code specifying the commodity used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisCommodityCode
	 */
	calculationBasisCommodityCode?: string;

	/**
	 * The trade price upon which a calculation of this logistics service charge is or will be based.
	 * @see https://vocabulary.uncefact.org/calculationBasisPrice
	 */
	calculationBasisPrice?: IUneceTradePrice;

	/**
	 * A number used as a basis in a calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/calculationBasisQuantity
	 */
	calculationBasisQuantity?: IUneceQuantityType[];

	/**
	 * The code specifying the category of charge for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargeCategoryCode
	 */
	chargeCategoryCode?: string;

	/**
	 * A code specifying a charge currency for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargeCurrencyCode
	 */
	chargeCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * The code specifying the role of the party responsible for paying this logistics service charge.
	 * @see https://vocabulary.uncefact.org/chargePayingPartyRoleCode
	 */
	chargePayingPartyRoleCode?: UneceChargePayingPartyRoleCodeList;

	/**
	 * A textual description of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A monetary value of a disbursement for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/disbursementAmount
	 */
	disbursementAmount?: IUneceAmountType[];

	/**
	 * The code specifying the tariff class for this logistics service charge which represents an entry in a table of fixed
	 * charges [Reference United Nations Code List (UNCL) 5243].
	 * @see https://vocabulary.uncefact.org/freightChargeTariffClassCode
	 */
	freightChargeTariffClassCode?: UneceFreightChargeTariffClassCodeList;

	/**
	 * The unique identifier for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/freightChargeTypeId
	 */
	freightChargeTypeId?: UneceFreightChargeTypeId | string | IJsonLdValueObject;

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
	linearUnitCalculationBasisDistanceMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The code specifying a basis on which this logistics service charge is to be calculated, such as by volume or per unit.
	 * @see https://vocabulary.uncefact.org/logisticsChargeCalculationBasisCalculationBasisCode
	 */
	logisticsChargeCalculationBasisCalculationBasisCode?: UneceLogisticsChargeCalculationBasisCodeList | string;

	/**
	 * The code specifying the transport payment method for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/logisticsServiceChargeTransportPaymentMethodCode
	 */
	logisticsServiceChargeTransportPaymentMethodCode?: string;

	/**
	 * The location of the place of payment of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/paymentPlaceLocation
	 */
	paymentPlaceLocation?: IUneceLogisticsLocation;

	/**
	 * A number used as a basis in a post-transhipment calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/postTranshipmentCalculationBasisQuantity
	 */
	postTranshipmentCalculationBasisQuantity?: IUneceQuantityType[];

	/**
	 * A number used as a basis in a pre-transhipment calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/preTranshipmentCalculationBasisQuantity
	 */
	preTranshipmentCalculationBasisQuantity?: IUneceQuantityType[];

	/**
	 * The monetary value of the repackage on which the logistics service charge is determined.
	 * @see https://vocabulary.uncefact.org/repackageAppliedAmount
	 */
	repackageAppliedAmount?: IUneceAmountType;

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
	specifiedPaymentMeans?: IUnecePaymentMeans;

	/**
	 * A code specifying a tariff currency for this logistics service charge.
	 * @see https://vocabulary.uncefact.org/tariffCurrencyCode
	 */
	tariffCurrencyCode?: UneceCurrencyCodeList[];

	/**
	 * The code specifying the category of this logistics service charge [Reference United Nations Code List (UNCL) 5237].
	 * @see https://vocabulary.uncefact.org/transportServiceCategoryCode
	 */
	transportServiceCategoryCode?: UneceTransportServiceCategoryCodeList;

	/**
	 * The code specifying the payment arrangement for this logistics service charge [Reference United Nations Code List (UNCL)
	 * 4237].
	 * @see https://vocabulary.uncefact.org/transportServicePaymentArrangementCode
	 */
	transportServicePaymentArrangementCode?: UneceTransportServicePaymentArrangementCodeList;

	/**
	 * The measure of the area used as the basis for the calculation of this logistics service charge.
	 * @see https://vocabulary.uncefact.org/unitCalculationBasisAreaMeasure
	 */
	unitCalculationBasisAreaMeasure?: IUneceUnitMeasureType;
}
