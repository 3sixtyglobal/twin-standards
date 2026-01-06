// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A process of either regaining waste substances in usable form, or of getting rid of waste substances resulting from
 * production.
 * @see https://vocabulary.uncefact.org/ProductionWasteRecoveryDisposalProcess
 */
export interface IUneceProductionWasteRecoveryDisposalProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductionWasteRecoveryDisposalProcess;

	/**
	 * A textual description of this production waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of production waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/productionWasteRecoveryDisposalProcessTypeCode
	 */
	productionWasteRecoveryDisposalProcessTypeCode?: string;

	/**
	 * A process certificate specified for this production waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate[];
}
