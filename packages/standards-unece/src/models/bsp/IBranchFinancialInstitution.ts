// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IFinancialInstitutionAddress } from "./IFinancialInstitutionAddress.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A sub-division of a bank, building society, credit union, stock brokerage, or similar business; established primarily to
 * provide financial services and financial transactions.
 * @see https://vocabulary.uncefact.org/BranchFinancialInstitution
 */
export interface IBranchFinancialInstitution extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.BranchFinancialInstitution;

	/**
	 * The unique identifier for this branch of a financial institution.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The location address for this branch of a financial institution.
	 * @see https://vocabulary.uncefact.org/locationAddress
	 */
	locationAddress?: IFinancialInstitutionAddress;

	/**
	 * The name, expressed as text, for this branch of a financial institution.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;
}
