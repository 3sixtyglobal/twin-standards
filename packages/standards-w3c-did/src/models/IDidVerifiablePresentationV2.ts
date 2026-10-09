// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { DidContexts } from "./didContexts.js";
import type { IDidVerifiableCredentialV2 } from "./IDidVerifiableCredentialV2.js";
import type { IDidVerifiablePresentationCommon } from "./IDidVerifiablePresentationCommon.js";

/**
 * Interface describing a verifiable presentation.
 */
export interface IDidVerifiablePresentationV2 extends IDidVerifiablePresentationCommon {
	/**
	 * The context for the verifiable presentation.
	 */
	"@context":
		| typeof DidContexts.ContextVCv2
		| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof DidContexts.ContextVCv2>;

	/**
	 * The data for the verifiable credentials.
	 */
	verifiableCredential?: (string | IDidVerifiableCredentialV2)[];
}
