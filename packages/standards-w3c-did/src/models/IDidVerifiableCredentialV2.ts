// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@twin.org/core";
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts.js";
import type { IDidVerifiableCredentialCommon } from "./IDidVerifiableCredentialCommon.js";

/**
 * Interface describing a verifiable credential.
 * https://www.w3.org/TR/vc-data-model-2.0
 */
export interface IDidVerifiableCredentialV2 extends IDidVerifiableCredentialCommon {
	/**
	 * The context for the verifiable credential.
	 */
	"@context":
		| typeof DidContexts.ContextVCv2
		| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof DidContexts.ContextVCv2>;

	/**
	 * The date the verifiable credential is valid from.
	 */
	validFrom?: string;

	/**
	 * The date the verifiable credential is valid until.
	 */
	validUntil?: string;
}
