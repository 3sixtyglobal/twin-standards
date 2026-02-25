// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceAccountingAccountTypeCodeList } from "../lists/uneceAccountingAccountTypeCodeList.js";
import type { UneceAccountingAmountTypeCodeList } from "../lists/uneceAccountingAmountTypeCodeList.js";
import type { UneceAccountingDocumentCodeList } from "../lists/uneceAccountingDocumentCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A specific trade account for recording debits and credits to general accounting, cost accounting or budget accounting.
 * @see https://vocabulary.uncefact.org/AccountingAccount
 */
export interface IUneceAccountingAccount {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AccountingAccount;

	/**
	 * The abbreviated name, expressed as text, of this trade accounting account.
	 * @see https://vocabulary.uncefact.org/abbreviatedName
	 */
	abbreviatedName?: string;

	/**
	 * The code specifying the type of trade accounting account, such as general (main), secondary, cost accounting or budget
	 * account.
	 * @see https://vocabulary.uncefact.org/accountingAccountTypeCode
	 */
	accountingAccountTypeCode?: UneceAccountingAccountTypeCodeList;

	/**
	 * The code specifying the amount type for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/accountingAmountTypeAmountTypeCode
	 */
	accountingAmountTypeAmountTypeCode?: UneceAccountingAmountTypeCodeList;

	/**
	 * A code specifying a set trigger for this trade accounting account to be used in response to a specific event or a set of
	 * events.
	 * @see https://vocabulary.uncefact.org/accountingDocumentSetTriggerCode
	 */
	accountingDocumentSetTriggerCode?: UneceAccountingDocumentCodeList[];

	/**
	 * The cost reference dimension pattern, expressed as text, for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/costReferenceDimensionPattern
	 */
	costReferenceDimensionPattern?: string;

	/**
	 * The unique identifier for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The unique identifier of the main accounts chart for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/mainAccountsChartId
	 */
	mainAccountsChartId?: string;

	/**
	 * The unique identifier of the main accounts chart reference for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/mainAccountsChartReferenceId
	 */
	mainAccountsChartReferenceId?: string;

	/**
	 * The name, expressed as text, of this trade accounting account.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The unique identifier of the sub account for this trade accounting account.
	 * @see https://vocabulary.uncefact.org/subAccountId
	 */
	subAccountId?: string;
}
