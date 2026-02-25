// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCash } from "./IUneceCash.js";
import type { IUneceCheque } from "./IUneceCheque.js";
import type { IUneceCreditorFinancialAccount } from "./IUneceCreditorFinancialAccount.js";
import type { IUneceCreditorFinancialInstitution } from "./IUneceCreditorFinancialInstitution.js";
import type { IUneceDebtorFinancialAccount } from "./IUneceDebtorFinancialAccount.js";
import type { IUneceDebtorFinancialInstitution } from "./IUneceDebtorFinancialInstitution.js";
import type { IUneceDigitalMethod } from "./IUneceDigitalMethod.js";
import type { IUneceFinancialCard } from "./IUneceFinancialCard.js";
import type { IUnecePaymentFinancialInstitution } from "./IUnecePaymentFinancialInstitution.js";
import type { IUneceVoucher } from "./IUneceVoucher.js";
import type { UnecePaymentGuaranteeMeansCodeList } from "../lists/unecePaymentGuaranteeMeansCodeList.js";
import type { UnecePaymentMeansChannelCodeList } from "../lists/unecePaymentMeansChannelCodeList.js";
import type { UnecePaymentMeansCodeList } from "../lists/unecePaymentMeansCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The means by which a payment will be or has been made for trade settlement purposes.
 * @see https://vocabulary.uncefact.org/PaymentMeans
 */
export interface IUnecePaymentMeans {
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
	applicableFinancialCard?: IUneceFinancialCard[];

	/**
	 * A creditor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/creditorSpecifiedFinancialInstitution
	 */
	creditorSpecifiedFinancialInstitution?: IUnecePaymentFinancialInstitution[];

	/**
	 * A debtor financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/debtorSpecifiedFinancialInstitution
	 */
	debtorSpecifiedFinancialInstitution?: IUnecePaymentFinancialInstitution[];

	/**
	 * A cash payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCash
	 */
	identifiedCash?: IUneceCash[];

	/**
	 * A cheque payment identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedCheque
	 */
	identifiedCheque?: IUneceCheque[];

	/**
	 * A digital payment method identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedDigitalMethod
	 */
	identifiedDigitalMethod?: IUneceDigitalMethod[];

	/**
	 * A financial card identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedFinancialCard
	 */
	identifiedFinancialCard?: IUneceFinancialCard[];

	/**
	 * An experience item voucher identified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/identifiedVoucher
	 */
	identifiedVoucher?: IUneceVoucher[];

	/**
	 * Information, expressed as text, for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The monetary value to be paid by this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paidAmount
	 */
	paidAmount?: IUneceAmountType;

	/**
	 * A creditor financial account of the payee party for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payeePartyFinancialAccount
	 */
	payeePartyFinancialAccount?: IUneceCreditorFinancialAccount[];

	/**
	 * The creditor financial institution of the payee party specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payeeSpecifiedFinancialInstitution
	 */
	payeeSpecifiedFinancialInstitution?: IUneceCreditorFinancialInstitution;

	/**
	 * The debtor financial account of the payer party for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payerPartyFinancialAccount
	 */
	payerPartyFinancialAccount?: IUneceDebtorFinancialAccount;

	/**
	 * The debtor financial institution of the payer party specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/payerSpecifiedFinancialInstitution
	 */
	payerSpecifiedFinancialInstitution?: IUneceDebtorFinancialInstitution;

	/**
	 * The code specifying the method of guarantee for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paymentGuaranteeMeansGuaranteeMethodCode
	 */
	paymentGuaranteeMeansGuaranteeMethodCode?: UnecePaymentGuaranteeMeansCodeList;

	/**
	 * The code specifying the payment channel through which this trade settlement payment is to be processed (Reference United
	 * Nations Code List (UNCL) 4435).
	 * @see https://vocabulary.uncefact.org/paymentMeansChannelPaymentChannelCode
	 */
	paymentMeansChannelPaymentChannelCode?: UnecePaymentMeansChannelCodeList;

	/**
	 * The type of trade settlement payment means, expressed as text.
	 * @see https://vocabulary.uncefact.org/paymentMeansType
	 */
	paymentMeansType?: string;

	/**
	 * The code specifying the type of trade settlement payment means, such as cash or check.
	 * @see https://vocabulary.uncefact.org/paymentMeansTypeCode
	 */
	paymentMeansTypeCode?: UnecePaymentMeansCodeList;

	/**
	 * The code specifying the method by which a payment may be made for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/paymentMethodCode
	 */
	paymentMethodCode?: string;

	/**
	 * A creditor financial account specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount
	 */
	specifiedCreditorFinancialAccount?: IUneceCreditorFinancialAccount[];

	/**
	 * A financial institution specified for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentFinancialInstitution
	 */
	specifiedPaymentFinancialInstitution?: IUnecePaymentFinancialInstitution[];

	/**
	 * An identifier for this trade settlement payment means.
	 * @see https://vocabulary.uncefact.org/tradeSettlementPaymentMeansId
	 */
	tradeSettlementPaymentMeansId?: string;
}
