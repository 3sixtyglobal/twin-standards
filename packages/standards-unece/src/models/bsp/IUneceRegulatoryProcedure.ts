// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAppliedChemicalTreatment } from "./IUneceAppliedChemicalTreatment.js";
import type { IUneceCurrencyExchange } from "./IUneceCurrencyExchange.js";
import type { IUneceDebtorFinancialAccount } from "./IUneceDebtorFinancialAccount.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceLogisticsStatus } from "./IUneceLogisticsStatus.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSeal } from "./IUneceSeal.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceTestSpecificationReport } from "./IUneceTestSpecificationReport.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTradeTax } from "./IUneceTradeTax.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { UneceCustomsProcedureGuaranteeCodeList } from "../lists/uneceCustomsProcedureGuaranteeCodeList.js";
import type { UneceGovernmentActionCodeList } from "../lists/uneceGovernmentActionCodeList.js";
import type { UnecePaymentMethodCodeList } from "../lists/unecePaymentMethodCodeList.js";
import type { UneceResponsibleGovernmentAgencyCodeList } from "../lists/uneceResponsibleGovernmentAgencyCodeList.js";
import type { UneceResponsibleGovernmentAgencyInvolvementCodeList } from "../lists/uneceResponsibleGovernmentAgencyInvolvementCodeList.js";
import type { UneceTransportMovementTypeCodeList } from "../lists/uneceTransportMovementTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A set of formal steps to satisfy a cross-border regulation, law or convention.
 * @see https://vocabulary.uncefact.org/RegulatoryProcedure
 */
export interface IUneceRegulatoryProcedure {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RegulatoryProcedure;

	/**
	 * The date, time, date time, or other date time value of an acquisition for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/acquisitionDateTime
	 */
	acquisitionDateTime?: string;

	/**
	 * A code specifying a reason for an amendment to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/amendmentReasonCode
	 */
	amendmentReasonCode?: string;

	/**
	 * The annual quota quantity under this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/annualQuotaQuantity
	 */
	annualQuotaQuantity?: IUneceQuantityType;

	/**
	 * The applicable currency exchange for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/applicableCurrencyExchange
	 */
	applicableCurrencyExchange?: IUneceCurrencyExchange;

	/**
	 * A period applicable to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * A tax, levy or duty applicable to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/applicableTax
	 */
	applicableTax?: IUneceTradeTax[];

	/**
	 * Border clearance instructions for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/borderClearanceInstructions
	 */
	borderClearanceInstructions?: IUneceTransportInstructions[];

	/**
	 * A code specifying a category for this cross-border regulatory procedure, such as the appendices of the CITES Convention.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A basis for a certification, expressed as text, for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/certificationBasis
	 */
	certificationBasis?: string;

	/**
	 * A consignment destination location specified for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/consignmentDestinationSpecifiedLocation
	 */
	consignmentDestinationSpecifiedLocation?: IUneceLogisticsLocation[];

	/**
	 * The indication of whether or not a control is required for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/controlRequirementIndicator
	 */
	controlRequirementIndicator?: boolean;

	/**
	 * A control result, expressed as text, for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/controlResult
	 */
	controlResult?: string;

	/**
	 * The indication of whether or not the start date of a control has been confirmed for this cross-border regulatory
	 * procedure.
	 * @see https://vocabulary.uncefact.org/controlStartDateConfirmationIndicator
	 */
	controlStartDateConfirmationIndicator?: boolean;

	/**
	 * The code specifying the payment method for this cross-border regulatory procedure, such as by deferred payment method.
	 * @see https://vocabulary.uncefact.org/crossBorderRegulatoryProcedurePaymentMethodCode
	 */
	crossBorderRegulatoryProcedurePaymentMethodCode?: UnecePaymentMethodCodeList;

	/**
	 * A code specifying a type of cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/crossBorderRegulatoryProcedureTypeCode
	 */
	crossBorderRegulatoryProcedureTypeCode?: string;

	/**
	 * The code specifying an undertaking given in cash, bond or as a written guarantee to ensure that an obligation will be
	 * fulfilled for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/customsProcedureGuaranteeCode
	 */
	customsProcedureGuaranteeCode?: UneceCustomsProcedureGuaranteeCodeList;

	/**
	 * The declarant assigned identifier of a declaration for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/declarantAssignedDeclarationId
	 */
	declarantAssignedDeclarationId?: string;

	/**
	 * The location at which a declaration has been lodged for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/declarationLodgementLocation
	 */
	declarationLodgementLocation?: IUneceLogisticsLocation;

	/**
	 * A monetary value of the total charges, including tariff and non-tariff charges, deferred for this cross-border
	 * regulatory procedure.
	 * @see https://vocabulary.uncefact.org/deferredPayableTotalChargeAmount
	 */
	deferredPayableTotalChargeAmount?: IUneceAmountType[];

	/**
	 * The indication of whether or not the deferred payment method is applicable to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/deferredPaymentMethodIndicator
	 */
	deferredPaymentMethodIndicator?: boolean;

	/**
	 * A document referenced by this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/document
	 */
	document?: IUneceDocument[];

	/**
	 * The location of the specified customs office at which the goods subject to this cross-border regulatory procedure, enter
	 * the customs territory of entry.
	 * @see https://vocabulary.uncefact.org/entryCustomsOfficeSpecifiedLocation
	 */
	entryCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation;

	/**
	 * An examination event for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/examinationEvent
	 */
	examinationEvent?: IUneceTransportEvent[];

	/**
	 * A party who claims an exemption from this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/exemptionClaimantParty
	 */
	exemptionClaimantParty?: IUneceTradeParty[];

	/**
	 * The location of the specified customs office at which the goods which are subject to this cross-border regulatory
	 * procedure leave the customs territory of destination.
	 * @see https://vocabulary.uncefact.org/exitCustomsOfficeSpecifiedLocation
	 */
	exitCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation;

	/**
	 * The location of the specified customs office which is responsible for export formalities for the goods which are subject
	 * to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/exportCustomsOfficeSpecifiedLocation
	 */
	exportCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation;

	/**
	 * The identifier of the export licence classification for control purposes relevant to this cross-border regulatory
	 * procedure, such as per the Wassenaar agreement concerning trade in weapons and dual-use goods and technologies.
	 * @see https://vocabulary.uncefact.org/exportLicenceControlClassificationId
	 */
	exportLicenceControlClassificationId?: string;

	/**
	 * The name of a free trade agreement, expressed as text, for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/freeTradeAgreementName
	 */
	freeTradeAgreementName?: string;

	/**
	 * The code specifying the goods status for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/goodsStatusCode
	 */
	goodsStatusCode?: string;

	/**
	 * A code specifying an action for a responsible agency in this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/governmentActionResponsibleAgencyActionCode
	 */
	governmentActionResponsibleAgencyActionCode?: UneceGovernmentActionCodeList[];

	/**
	 * The undertaking, expressed as text, given in cash, bond or as a written guarantee to ensure that an obligation will be
	 * fulfilled for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/guarantee
	 */
	guarantee?: string;

	/**
	 * A monetary value of the total charges, including tariff and non-tariff charges, immediately payable for this
	 * cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/immediatePayableTotalChargeAmount
	 */
	immediatePayableTotalChargeAmount?: IUneceAmountType[];

	/**
	 * The location of the specified customs office which is responsible for import formalities for the goods which are subject
	 * to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/importCustomsOfficeSpecifiedLocation
	 */
	importCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation;

	/**
	 * A monetary value of all non-tariff charges for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/nonTariffChargeAmount
	 */
	nonTariffChargeAmount?: IUneceAmountType[];

	/**
	 * The origin criteria, expressed as text, for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/originCriteria
	 */
	originCriteria?: string;

	/**
	 * The location of an office at which a payment relevant to this cross-border regulatory procedure is made.
	 * @see https://vocabulary.uncefact.org/paymentOfficeLocation
	 */
	paymentOfficeLocation?: IUneceLogisticsLocation;

	/**
	 * A date, time, date time, or other date time value on which this cross-border regulatory procedure was, or will be,
	 * performed.
	 * @see https://vocabulary.uncefact.org/performanceDateTime
	 */
	performanceDateTime?: string;

	/**
	 * A previous document related to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/previousDocument
	 */
	previousDocument?: IUneceDocument[];

	/**
	 * A code specifying a type of previous procedure for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/previousProcedureTypeCode
	 */
	previousProcedureTypeCode?: string;

	/**
	 * A quota identifier for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/quotaId
	 */
	quotaId?: string;

	/**
	 * The identifier of the registered deferred payment payer for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/registeredDeferredPaymentPayerId
	 */
	registeredDeferredPaymentPayerId?: string;

	/**
	 * A remark, expressed as text, for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/remark
	 */
	remark?: string;

	/**
	 * A logistics status reported for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: IUneceLogisticsStatus[];

	/**
	 * A code specifying a request, including a reason, to override previously submitted information for this cross-border
	 * regulatory procedure, such as due to an error condition.
	 * @see https://vocabulary.uncefact.org/requestOverrideCode
	 */
	requestOverrideCode?: string;

	/**
	 * A chemical treatment applied as required by this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/requiredChemicalTreatment
	 */
	requiredChemicalTreatment?: IUneceAppliedChemicalTreatment[];

	/**
	 * A seal required by this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/requiredSeal
	 */
	requiredSeal?: IUneceSeal[];

	/**
	 * A report of a certification test and its attributes that is required for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/requiredTestSpecificationReport
	 */
	requiredTestSpecificationReport?: IUneceTestSpecificationReport[];

	/**
	 * A code specifying a responsible agency involved in this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/responsibleGovernmentAgencyInvolvementResponsibleAgencyInvolvementCode
	 */
	responsibleGovernmentAgencyInvolvementResponsibleAgencyInvolvementCode?: UneceResponsibleGovernmentAgencyInvolvementCodeList[];

	/**
	 * The code specifying the agency responsible for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/responsibleGovernmentAgencyResponsibleAgencyCode
	 */
	responsibleGovernmentAgencyResponsibleAgencyCode?: UneceResponsibleGovernmentAgencyCodeList;

	/**
	 * A debtor financial account specified for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/specifiedDebtorFinancialAccount
	 */
	specifiedDebtorFinancialAccount?: IUneceDebtorFinancialAccount[];

	/**
	 * A statement note for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/statementNote
	 */
	statementNote?: IUneceNote[];

	/**
	 * A monetary value of a tariff for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/tariffAmount
	 */
	tariffAmount?: IUneceAmountType[];

	/**
	 * A quantity to be deducted from the tariff quantity for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/tariffDeductionQuantity
	 */
	tariffDeductionQuantity?: IUneceQuantityType[];

	/**
	 * A tariff quantity for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/tariffQuantity
	 */
	tariffQuantity?: IUneceQuantityType[];

	/**
	 * A monetary value of the total charges, including tariff and non-tariff charges, for this cross-border regulatory
	 * procedure.
	 * @see https://vocabulary.uncefact.org/totalChargeAmount
	 */
	totalChargeAmount?: IUneceAmountType[];

	/**
	 * The total monetary value for a consignment for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/totalConsignmentValueAmount
	 */
	totalConsignmentValueAmount?: IUneceAmountType;

	/**
	 * A code specifying the nature of a transaction for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/transactionNatureCode
	 */
	transactionNatureCode?: string;

	/**
	 * A location of a specified customs office which is responsible for transit formalities en route for the goods which are
	 * subject to this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/transitCustomsOfficeSpecifiedLocation
	 */
	transitCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation[];

	/**
	 * A location of a specified customs office at which the goods which are subject to this cross-border regulatory procedure
	 * are released from a customs transit regime.
	 * @see https://vocabulary.uncefact.org/transitReleaseCustomsOfficeSpecifiedLocation
	 */
	transitReleaseCustomsOfficeSpecifiedLocation?: IUneceLogisticsLocation[];

	/**
	 * A code specifying the transport movement type, such as import, export, transit, for this cross-border regulatory
	 * procedure.
	 * @see https://vocabulary.uncefact.org/transportMovementTypeCode
	 */
	transportMovementTypeCode?: UneceTransportMovementTypeCodeList[];

	/**
	 * A treatment event for this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/treatmentEvent
	 */
	treatmentEvent?: IUneceTransportEvent[];

	/**
	 * The quantity of the quota used to date under this cross-border regulatory procedure.
	 * @see https://vocabulary.uncefact.org/usedToDateQuotaQuantity
	 */
	usedToDateQuotaQuantity?: IUneceQuantityType;

	/**
	 * The monetary value of the basis on which the valuation is, or will be, calculated for this cross-border regulatory
	 * procedure.
	 * @see https://vocabulary.uncefact.org/valuationBasisAmount
	 */
	valuationBasisAmount?: IUneceAmountType;
}
