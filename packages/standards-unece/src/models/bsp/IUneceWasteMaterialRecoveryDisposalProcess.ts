// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProcessCertificate } from "./IUneceProcessCertificate.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A process of either regaining substances in usable form, or of getting rid of substances regarding waste material, such
 * as production waste.
 * @see https://vocabulary.uncefact.org/WasteMaterialRecoveryDisposalProcess
 */
export interface IUneceWasteMaterialRecoveryDisposalProcess extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.WasteMaterialRecoveryDisposalProcess;

	/**
	 * A process certificate applicable to this waste material recovery disposal process.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertificate
	 */
	applicableProcessCertificate?: IUneceProcessCertificate;

	/**
	 * A textual description of a waste material recovery disposal process.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the type of waste material recovery disposal process.
	 * @see https://vocabulary.uncefact.org/wasteMaterialRecoveryDisposalProcessTypeCode
	 */
	wasteMaterialRecoveryDisposalProcessTypeCode?: string;
}
