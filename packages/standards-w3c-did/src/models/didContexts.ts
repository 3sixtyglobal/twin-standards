// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for DIDs.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidContexts = {
	/**
	 * The canonical RDF namespace URI for DID.
	 */
	Namespace: "https://www.w3.org/ns/did/v1",

	/**
	 * The value to use in the JSON-LD context for DID.
	 */
	Context: "https://www.w3.org/ns/did/v1",

	/**
	 * The namespace location of the hosted version of the JSON Schema.
	 */
	JsonSchemaNamespace: "https://schema.3sixty.global/w3c-did/",

	/**
	 * The canonical RDF namespace URI for DID VC v1.
	 */
	NamespaceVCv1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The value to use in the JSON-LD context for DID VC v1.
	 */
	ContextVCv1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The canonical RDF namespace URI for DID VC v2.
	 */
	NamespaceVCv2: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The value to use in the JSON-LD context for DID VC v2.
	 */
	ContextVCv2: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The canonical RDF namespace URI for security ed25519 suites.
	 */
	NamespaceSecurityEd25519: "https://w3id.org/security/suites/ed25519-2020/v1",

	/**
	 * The value to use in the JSON-LD context for security ed25519 suites.
	 */
	ContextSecurityEd25519: "https://w3id.org/security/suites/ed25519-2020/v1",

	/**
	 * The canonical RDF namespace URI for security jws-2020 suites.
	 */
	NamespaceSecurityJws2020: "https://w3id.org/security/suites/jws-2020/v1",

	/**
	 * The value to use in the JSON-LD context for security jws-2020 suites.
	 */
	ContextSecurityJws2020: "https://w3id.org/security/suites/jws-2020/v1",

	/**
	 * The canonical RDF namespace URI for VC Data Integrity.
	 */
	NamespaceDataIntegrity: "https://w3id.org/security/data-integrity/v2",

	/**
	 * The value to use in the JSON-LD context for VC Data Integrity.
	 */
	ContextDataIntegrity: "https://w3id.org/security/data-integrity/v2",

	/**
	 * The canonical RDF namespace URI for controller identifiers.
	 */
	NamespaceControllerIdentifiers: "https://www.w3.org/ns/cid/v1",

	/**
	 * The value to use in the JSON-LD context for controller identifiers.
	 */
	ContextControllerIdentifiers: "https://www.w3.org/ns/cid/v1",

	/**
	 * The canonical RDF namespace URI for security multikey suites.
	 */
	NamespaceSecurityMultikey: "https://w3id.org/security/multikey/v1",

	/**
	 * The value to use in the JSON-LD context for security multikey suites.
	 */
	ContextSecurityMultikey: "https://w3id.org/security/multikey/v1"
} as const;

/**
 * The contexts for DIDs.
 */
export type DidContexts = (typeof DidContexts)[keyof typeof DidContexts];
