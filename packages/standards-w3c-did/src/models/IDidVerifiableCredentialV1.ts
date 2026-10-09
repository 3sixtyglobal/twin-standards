// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { DidContexts } from "./didContexts.js";
import type { IDidVerifiableCredentialCommon } from "./IDidVerifiableCredentialCommon.js";

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
		| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof DidContexts.ContextVCv1>;

	/**
	 * The date the verifiable credential was issued, depending on version validFrom might be set instead.
	 */
	issuanceDate?: string;

	/**
	 * The date the verifiable credential expires, depending on version validUntil might be set instead.
	 */
	expirationDate?: string;
}
