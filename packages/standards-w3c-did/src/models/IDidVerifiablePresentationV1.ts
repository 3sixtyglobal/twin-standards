// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DidContexts } from "./didContexts";
import type { IDidVerifiableCredentialV1 } from "./IDidVerifiableCredentialV1";
import type { IDidVerifiablePresentationCommon } from "./IDidVerifiablePresentationCommon";

/**
 * Interface describing a verifiable presentation.
 */
export interface IDidVerifiablePresentationV1 extends IDidVerifiablePresentationCommon {
	/**
	 * The context for the verifiable presentation.
	 */
	"@context":
		| typeof DidContexts.ContextVCv1
		| [typeof DidContexts.ContextVCv1, ...IJsonLdContextDefinitionElement[]];

	/**
	 * The data for the verifiable credentials.
	 */
	verifiableCredential?: (string | IDidVerifiableCredentialV1)[];
}
