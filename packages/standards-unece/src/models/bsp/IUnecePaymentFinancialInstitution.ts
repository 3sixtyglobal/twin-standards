// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceCommunication } from "./IUneceCommunication.js";
import type { IUnecePaymentFinancialAccount } from "./IUnecePaymentFinancialAccount.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An institution that provides financial services and financial transactions for payment.
 * @see https://vocabulary.uncefact.org/PaymentFinancialInstitution
 */
export interface IUnecePaymentFinancialInstitution extends IJsonLdNodeObject {
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
	bEIId?: string;

	/**
	 * The unique Bank Identification Code (BIC) as defined in ISO 9362 for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/bICId
	 */
	bICId: string;

	/**
	 * A branch name, expressed as text, for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/branchName
	 */
	branchName?: string;

	/**
	 * The identifier of the branch name for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/branchNameId
	 */
	branchNameId?: string;

	/**
	 * The unique Global Location Number (GLN) as defined by GS1 for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/gLNId
	 */
	gLNId?: string;

	/**
	 * The unique identifier for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A name, expressed as text, for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The identifier of the name for this payment financial institution.
	 * @see https://vocabulary.uncefact.org/nameId
	 */
	nameId?: string;

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
	typeCode?: string;
}
