// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A process of either regaining substances in usable form, or of getting rid of substances resulting from transportation.
 * @see https://vocabulary.uncefact.org/TransportationWasteRecoveryDisposalProcess
 */
export interface IUneceTransportationWasteRecoveryDisposalProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportationWasteRecoveryDisposalProcess;

	/**
	 * A textual description for the type of transportation waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A process certificate specified for this transportation waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/specifiedProcessCertificate
	 */
	specifiedProcessCertificate?: IUneceProcessCertificate;

	/**
	 * The code specifying the type of transportation waste recovery disposal process.
	 * @see https://vocabulary.uncefact.org/transportationWasteRecoveryDisposalProcessTypeCode
	 */
	transportationWasteRecoveryDisposalProcessTypeCode?: string;
}
