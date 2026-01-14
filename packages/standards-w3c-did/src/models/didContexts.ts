// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for DIDs.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidContexts = {
	/**
	 * The context root for DID.
	 */
	Namespace: "https://www.w3.org/ns/did/v1",

	/**
	 * The context root for DID VC v1.
	 */
	NamespaceVCv1: "https://www.w3.org/2018/credentials/v1",

	/**
	 * The context root for DID VC v2.
	 */
	NamespaceVCv2: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The context root for security ed25519 suites.
	 */
	NamespaceSecurityEd25519: "https://w3id.org/security/suites/ed25519-2020/v1",

	/**
	 * The context root for security jws-2020 suites.
	 */
	NamespaceSecurityJws2020: "https://w3id.org/security/suites/jws-2020/v1",

	/**
	 * The context root for VC Data Integrity.
	 */
	NamespaceDataIntegrity: "https://www.w3.org/ns/credentials/v2",

	/**
	 * The context root for VC Data Integrity.
	 */
	NamespaceControllerIdentifiers: "https://www.w3.org/ns/cid/v1",

	/**
	 * The context root for security multikey suites.
	 */
	NamespaceSecurityMultikey: "https://w3id.org/security/multikey/v1"
} as const;

/**
 * The contexts for DIDs.
 */
export type DidContexts = (typeof DidContexts)[keyof typeof DidContexts];
