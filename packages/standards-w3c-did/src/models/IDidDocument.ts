// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray, SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { DidContexts } from "./didContexts.js";
import type { IDidDocumentVerificationMethod } from "./IDidDocumentVerificationMethod.js";
import type { IDidService } from "./IDidService.js";

/**
 * Interface describing a DID Document.
 * Spec https://www.w3.org/TR/did-core/#did-document-properties.
 */
export interface IDidDocument {
	/**
	 * The context for the document.
	 */
	"@context":
		| typeof DidContexts.Context
		| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof DidContexts.Context>;

	/**
	 * The id for the document.
	 */
	id: string;

	/**
	 * Aliases for the document.
	 */
	alsoKnownAs?: ObjectOrArray<string>;

	/**
	 * The controller for the document.
	 */
	controller?: ObjectOrArray<string>;

	/**
	 * The verification methods.
	 */
	verificationMethod?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The authentication methods.
	 */
	authentication?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The assertion methods.
	 */
	assertionMethod?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The key agreements.
	 */
	keyAgreement?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The capability invocations.
	 */
	capabilityInvocation?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The capability delegations.
	 */
	capabilityDelegation?: (string | IDidDocumentVerificationMethod)[];

	/**
	 * The services.
	 */
	service?: IDidService[];
}
