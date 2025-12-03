// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICancellationStatus } from "./ICancellationStatus.js";
import type { IClause } from "./IClause.js";
import type { ICreditorFinancialInstitution } from "./ICreditorFinancialInstitution.js";
import type { INote } from "./INote.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IRequestingParty } from "./IRequestingParty.js";
import type { IValidationStatus } from "./IValidationStatus.js";
import type { CurrencyCodeList } from "../lists/currencyCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The set of characteristics shared by all individual transactions grouped for this financing request document.
 * @see https://vocabulary.uncefact.org/FinancingRequestDocument
 */
export interface IFinancingRequestDocument extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancingRequestDocument;

	/**
	 * An additional information note included for this financing request document.
	 * @see https://vocabulary.uncefact.org/additionalInformationIncludedNote
	 */
	additionalInformationIncludedNote?: INote[];

	/**
	 * Agreement information, expressed as text, in this financing request document, such as a collection mandate.
	 * @see https://vocabulary.uncefact.org/agreementInformation
	 */
	agreementInformation?: string;

	/**
	 * An authorization, expressed as text, for this financing request document.
	 * @see https://vocabulary.uncefact.org/authorization
	 */
	authorization?: string;

	/**
	 * A cancellation reason, expressed as text, in this financing request document.
	 * @see https://vocabulary.uncefact.org/cancellationReason
	 */
	cancellationReason?: string;

	/**
	 * A contractual document clause specified for this financing request document.
	 * @see https://vocabulary.uncefact.org/contractualClause
	 */
	contractualClause?: IClause[];

	/**
	 * The indication of whether or not this financing request document is a copy rather than an original.
	 * @see https://vocabulary.uncefact.org/copyIndicator
	 */
	copyIndicator?: boolean;

	/**
	 * The date, time, date time or other date time value for the creation of this financing request document.
	 * @see https://vocabulary.uncefact.org/creationDateTime
	 */
	creationDateTime?: string;

	/**
	 * The code specifying the currency in this financing request document.
	 * @see https://vocabulary.uncefact.org/financingRequestDocumentCurrencyCode
	 */
	financingRequestDocumentCurrencyCode?: CurrencyCodeList[];

	/**
	 * The creditor financial institution specified as the first agent in this financing request document.
	 * @see https://vocabulary.uncefact.org/firstAgentSpecifiedFinancialInstitution
	 */
	firstAgentSpecifiedFinancialInstitution?: ICreditorFinancialInstitution[];

	/**
	 * The group identifier in this financing request document.
	 * @see https://vocabulary.uncefact.org/groupId
	 */
	groupId?: string;

	/**
	 * The number of grouped transactions specified in this financing request document.
	 * @see https://vocabulary.uncefact.org/groupedTransactionSpecifiedQuantity
	 */
	groupedTransactionSpecifiedQuantity?: IQuantityType[];

	/**
	 * A total monetary value of grouped transactions in this financing request document.
	 * @see https://vocabulary.uncefact.org/groupedTransactionTotalAmount
	 */
	groupedTransactionTotalAmount?: IAmountType[];

	/**
	 * The creditor financial institution specified as the intermediary in this financing request document.
	 * @see https://vocabulary.uncefact.org/intermediarySpecifiedFinancialInstitution
	 */
	intermediarySpecifiedFinancialInstitution?: ICreditorFinancialInstitution[];

	/**
	 * A status of a cancellation specified for this financing request document, such as accepted.
	 * @see https://vocabulary.uncefact.org/specifiedCancellationStatus
	 */
	specifiedCancellationStatus?: ICancellationStatus[];

	/**
	 * The requesting party specified in this financing request document.
	 * @see https://vocabulary.uncefact.org/specifiedRequestingParty
	 */
	specifiedRequestingParty?: IRequestingParty[];

	/**
	 * The status of the validation specified for this financing request document, such as error.
	 * @see https://vocabulary.uncefact.org/specifiedValidationStatus
	 */
	specifiedValidationStatus?: IValidationStatus[];
}
