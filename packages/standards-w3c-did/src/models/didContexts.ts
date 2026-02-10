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
	 * The value to use in JSON-LD context for DID.
	 * Note: Context matches Namespace (no trailing slash) as per W3C DID specification.
	 * The W3C DID JSON-LD context URL format does not include a trailing slash.
	 */
	Context: "https://www.w3.org/ns/did/v1",

	/**
	 * The namespace location of the hosted version of the JSON Schema.
	 */
	JsonSchemaNamespace: "https://schema.twindev.org/w3c-did/",

	/**
	 * The canonical RDF namespace URI for DID VC v1.
	 */
	NamespaceVCv1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The value to use in JSON-LD context for DID VC v1.
	 * Note: ContextVCv1 matches NamespaceVCv1 (no trailing slash) as per W3C Verifiable Credentials v1 specification.
	 * The W3C VC v1 JSON-LD context URL format does not include a trailing slash.
	 */
	ContextVCv1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The canonical RDF namespace URI for DID VC v2.
	 */
	NamespaceVCv2: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The value to use in JSON-LD context for DID VC v2.
	 * Note: ContextVCv2 matches NamespaceVCv2 (no trailing slash) as per W3C Verifiable Credentials v2 specification.
	 * The W3C VC v2 JSON-LD context URL format does not include a trailing slash.
	 */
	ContextVCv2: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The canonical RDF namespace URI for security ed25519 suites.
	 */
	NamespaceSecurityEd25519: "https://w3id.org/security/suites/ed25519-2020/v1",

	/**
	 * The value to use in JSON-LD context for security ed25519 suites.
	 * Note: ContextSecurityEd25519 matches NamespaceSecurityEd25519 (no trailing slash) as per W3C Security Suites specification.
	 * The ed25519-2020 JSON-LD context URL format does not include a trailing slash.
	 */
	ContextSecurityEd25519: "https://w3id.org/security/suites/ed25519-2020/v1",

	/**
	 * The canonical RDF namespace URI for security jws-2020 suites.
	 */
	NamespaceSecurityJws2020: "https://w3id.org/security/suites/jws-2020/v1",

	/**
	 * The value to use in JSON-LD context for security jws-2020 suites.
	 * Note: ContextSecurityJws2020 matches NamespaceSecurityJws2020 (no trailing slash) as per W3C Security Suites specification.
	 * The jws-2020 JSON-LD context URL format does not include a trailing slash.
	 */
	ContextSecurityJws2020: "https://w3id.org/security/suites/jws-2020/v1",

	/**
	 * The canonical RDF namespace URI for VC Data Integrity.
	 */
	NamespaceDataIntegrity: "https://w3id.org/security/data-integrity/v2",

	/**
	 * The value to use in JSON-LD context for VC Data Integrity.
	 * Note: ContextDataIntegrity matches NamespaceDataIntegrity (no trailing slash) as per W3C Data Integrity specification.
	 * The Data Integrity JSON-LD context URL format does not include a trailing slash.
	 */
	ContextDataIntegrity: "https://w3id.org/security/data-integrity/v2",

	/**
	 * The canonical RDF namespace URI for controller identifiers.
	 */
	NamespaceControllerIdentifiers: "https://www.w3.org/ns/cid/v1",

	/**
	 * The value to use in JSON-LD context for controller identifiers.
	 * Note: ContextControllerIdentifiers matches NamespaceControllerIdentifiers (no trailing slash) as per W3C Controller Identifiers specification.
	 * The Controller Identifiers JSON-LD context URL format does not include a trailing slash.
	 */
	ContextControllerIdentifiers: "https://www.w3.org/ns/cid/v1",

	/**
	 * The canonical RDF namespace URI for security multikey suites.
	 */
	NamespaceSecurityMultikey: "https://w3id.org/security/multikey/v1",

	/**
	 * The value to use in JSON-LD context for security multikey suites.
	 * Note: ContextSecurityMultikey matches NamespaceSecurityMultikey (no trailing slash) as per W3C Security Suites specification.
	 * The multikey JSON-LD context URL format does not include a trailing slash.
	 */
	ContextSecurityMultikey: "https://w3id.org/security/multikey/v1"
} as const;

/**
 * The contexts for DIDs.
 */
export type DidContexts = (typeof DidContexts)[keyof typeof DidContexts];
