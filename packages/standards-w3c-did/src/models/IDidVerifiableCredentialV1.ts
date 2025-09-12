// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDidVerifiableCredentialCommon } from "./IDidVerifiableCredentialCommon";

/**
 * Interface describing a verifiable credential.
 * https://www.w3.org/TR/vc-data-model-1.1
 */
export interface IDidVerifiableCredentialV1 extends IDidVerifiableCredentialCommon {
	/**
	 * The context for the verifiable credential.
	 */
	"@context":
		| typeof DidContexts.ContextVCv1
		| [typeof DidContexts.ContextVCv1, ...IJsonLdContextDefinitionElement[]];

	/**
	 * The date the verifiable credential was issued, depending on version validFrom might be set instead.
	 */
	issuanceDate?: string;

	/**
	 * The date the verifiable credential expires, depending on version validUntil might be set instead.
	 */
	expirationDate?: string;
}
