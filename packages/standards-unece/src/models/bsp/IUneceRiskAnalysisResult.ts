// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The result of a logistics risk analysis calculation.
 * @see https://vocabulary.uncefact.org/RiskAnalysisResult
 */
export interface IUneceRiskAnalysisResult {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RiskAnalysisResult;

	/**
	 * The code specifying the category for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * A code specifying a consignment related risk for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/consignmentRiskRelatedCode
	 */
	consignmentRiskRelatedCode?: string;

	/**
	 * The textual description of this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * Information, expressed as text, concerning this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The code specifying the level for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/levelCode
	 */
	levelCode?: string;

	/**
	 * A code specifying a party related risk for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/partyRiskRelatedCode
	 */
	partyRiskRelatedCode?: string;

	/**
	 * A code specifying a method of screening used in this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/screeningMethodCode
	 */
	screeningMethodCode?: string;

	/**
	 * A code specifying a security exemption for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/securityExemptionCode
	 */
	securityExemptionCode?: string;

	/**
	 * A code specifying a transport equipment related risk for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/transportEquipmentRiskRelatedCode
	 */
	transportEquipmentRiskRelatedCode?: string;

	/**
	 * A code specifying a transport movement related risk for this logistics risk analysis result.
	 * @see https://vocabulary.uncefact.org/transportMovementRiskRelatedCode
	 */
	transportMovementRiskRelatedCode?: string;
}
