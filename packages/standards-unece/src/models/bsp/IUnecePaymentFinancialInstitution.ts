// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUnecePaymentFinancialAccount } from "./IUnecePaymentFinancialAccount.js";
import type { UnecePaymentFinancialInstitutionTypeCodeList } from "../typeCodes/unecePaymentFinancialInstitutionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An institution that provides financial services and financial transactions for payment.
 * @see https://vocabulary.uncefact.org/PaymentFinancialInstitution
 */
export interface IUnecePaymentFinancialInstitution {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PaymentFinancialInstitution;

	/**
	 * The unique Business Entity Identifier (BEI) as defined in ISO 9362 for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/bEIId
	 */
	bEIId?: string | IJsonLdValueObject;

	/**
	 * The unique Bank Identification Code (BIC) as defined in ISO 9362 for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/bICId
	 */
	bICId?: string | IJsonLdValueObject;

	/**
	 * A branch name, expressed as text, for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/branchName
	 */
	branchName?: string;

	/**
	 * The identifier of the branch name for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/branchNameId
	 */
	branchNameId?: string | IJsonLdValueObject;

	/**
	 * The unique Global Location Number (GLN) as defined by GS1 for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/gLNId
	 */
	gLNId?: string | IJsonLdValueObject;

	/**
	 * The unique identifier for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A name, expressed as text, for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The identifier of the name for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/nameId
	 */
	nameId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the role for this payment financial institution, such as intermediary or settlement agent.
	 * @see https://vocabulary.uncefact.org/roleCode
	 */
	roleCode?: string;

	/**
	 * A communication specified for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/specifiedCommunication
	 */
	specifiedCommunication?: IUneceCommunication[];

	/**
	 * A payment financial account specified for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/specifiedPaymentFinancialAccount
	 */
	specifiedPaymentFinancialAccount?: IUnecePaymentFinancialAccount[];

	/**
	 * The code specifying the type of payment financial institution.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UnecePaymentFinancialInstitutionTypeCodeList | string;
}
