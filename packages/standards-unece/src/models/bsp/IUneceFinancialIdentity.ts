// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A financial identification for an organization.
 * @see https://vocabulary.uncefact.org/FinancialIdentity
 */
export interface IUneceFinancialIdentity {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.FinancialIdentity;

	/**
	 * The agent assigned customer identifier for this financial identity.
	 * @see https://vocabulary.uncefact.org/agentAssignedCustomerId
	 */
	agentAssignedCustomerId?: string | IJsonLdValueObject;

	/**
	 * The Business Entity Identifier (BEI) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes)
	 * for this financial identity.
	 * @see https://vocabulary.uncefact.org/bEIId
	 */
	bEIId?: string | IJsonLdValueObject;

	/**
	 * The Bank Identifier Code (BIC) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes) for
	 * this financial identity.
	 * @see https://vocabulary.uncefact.org/bICId
	 */
	bICId?: string | IJsonLdValueObject;

	/**
	 * The bank assigned identifier for this financial identity.
	 * @see https://vocabulary.uncefact.org/bankAssignedId
	 */
	bankAssignedId?: string | IJsonLdValueObject;

	/**
	 * The (United States) Clearing House Interbank Payments System (CHIPS) Universal Identification (UID) as assigned by the
	 * New York Clearing House for this financial identity.
	 * @see https://vocabulary.uncefact.org/cHIPSUniversalId
	 */
	cHIPSUniversalId?: string | IJsonLdValueObject;

	/**
	 * The International Business Entity Identifier (IBEI) for this financial identity.
	 * @see https://vocabulary.uncefact.org/iBEIId
	 */
	iBEIId?: string | IJsonLdValueObject;
}
