// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICash } from "./ICash.js";
import type { ICheque } from "./ICheque.js";
import type { ICreditorFinancialAccount } from "./ICreditorFinancialAccount.js";
import type { ICreditorFinancialInstitution } from "./ICreditorFinancialInstitution.js";
import type { IDebtorFinancialAccount } from "./IDebtorFinancialAccount.js";
import type { IDebtorFinancialInstitution } from "./IDebtorFinancialInstitution.js";
import type { IDigitalMethod } from "./IDigitalMethod.js";
import type { IFinancialCard } from "./IFinancialCard.js";
import type { IPaymentFinancialInstitution } from "./IPaymentFinancialInstitution.js";
import type { IVoucher } from "./IVoucher.js";
import type { PaymentGuaranteeMeansCodeList } from "../lists/paymentGuaranteeMeansCodeList.js";
import type { PaymentMeansChannelCodeList } from "../lists/paymentMeansChannelCodeList.js";
import type { PaymentMeansCodeList } from "../lists/paymentMeansCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The means by which a payment will be or has been made for trade settlement purposes.
 * @see https://vocabulary.uncefact.org/PaymentMeans
 */
export interface IPaymentMeans extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentMeans;

	/**
	 * A financial card applicable to this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/applicableFinancialCard
	 */
	applicableFinancialCard?: IFinancialCard;

	/**
	 * A creditor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/creditorSpecifiedFinancialInstitution
	 */
	creditorSpecifiedFinancialInstitution?: IPaymentFinancialInstitution[];

	/**
	 * A debtor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/debtorSpecifiedFinancialInstitution
	 */
	debtorSpecifiedFinancialInstitution?: IPaymentFinancialInstitution[];

	/**
	 * A cash payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCash
	 */
	identifiedCash?: ICash[];

	/**
	 * A cheque payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCheque
	 */
	identifiedCheque?: ICheque[];

	/**
	 * A digital payment method identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedDigitalMethod
	 */
	identifiedDigitalMethod?: IDigitalMethod[];

	/**
	 * A financial card identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedFinancialCard
	 */
	identifiedFinancialCard?: IFinancialCard[];

	/**
	 * An experience item voucher identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedVoucher
	 */
	identifiedVoucher?: IVoucher[];

	/**
	 * Information, expressed as text, for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The monetary value to be paid by this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paidAmount
	 */
	paidAmount?: IAmountType[];

	/**
	 * A creditor financial account of the payee party for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payeePartyFinancialAccount
	 */
	payeePartyFinancialAccount?: ICreditorFinancialAccount[];

	/**
	 * The creditor financial institution of the payee party specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payeeSpecifiedFinancialInstitution
	 */
	payeeSpecifiedFinancialInstitution?: ICreditorFinancialInstitution[];

	/**
	 * The debtor financial account of the payer party for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payerPartyFinancialAccount
	 */
	payerPartyFinancialAccount?: IDebtorFinancialAccount[];

	/**
	 * The debtor financial institution of the payer party specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payerSpecifiedFinancialInstitution
	 */
	payerSpecifiedFinancialInstitution?: IDebtorFinancialInstitution[];

	/**
	 * The code specifying the method of guarantee for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paymentGuaranteeMeansGuaranteeMethodCode
	 */
	paymentGuaranteeMeansGuaranteeMethodCode?: PaymentGuaranteeMeansCodeList;

	/**
	 * The code specifying the payment channel through which this trade settlement payment is to be processed (Reference United
	 * Nations Code List (UNCL) 4435).
	 * @see https://vocabulary.uncefact.org/paymentMeansChannelPaymentChannelCode
	 */
	paymentMeansChannelPaymentChannelCode?: PaymentMeansChannelCodeList;

	/**
	 * The type of trade settlement payment means, expressed as text.
	 * @see https://vocabulary.uncefact.org/paymentMeansType
	 */
	paymentMeansType?: string;

	/**
	 * The code specifying the type of trade settlement payment means, such as cash or check.
	 * @see https://vocabulary.uncefact.org/paymentMeansTypeCode
	 */
	paymentMeansTypeCode?: PaymentMeansCodeList[];

	/**
	 * The code specifying the method by which a payment may be made for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paymentMethodCode
	 */
	paymentMethodCode?: string;

	/**
	 * A creditor financial account specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
	 */
	specifiedCreditorFinancialAccount?: ICreditorFinancialAccount[];

	/**
	 * A financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentFinancialInstitution
	 */
	specifiedPaymentFinancialInstitution?: IPaymentFinancialInstitution[];

	/**
	 * An identifier for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/tradeSettlementPaymentMeansId
	 */
	tradeSettlementPaymentMeansId?: string;
}
