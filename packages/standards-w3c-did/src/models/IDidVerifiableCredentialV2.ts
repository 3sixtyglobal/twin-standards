// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDidVerifiableCredentialCommon } from "./IDidVerifiableCredentialCommon";

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
		| [typeof DidContexts.ContextVCv2, ...IJsonLdContextDefinitionElement[]];

	/**
	 * The date the verifiable credential is valid from.
	 */
	validFrom?: string;

	/**
	 * The date the verifiable credential is valid until.
	 */
	validUntil?: string;
}
