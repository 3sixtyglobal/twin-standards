// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * JWS signature algorithms supported for proof signing.
 * Based on RFC 7518 (JSON Web Algorithms) and W3C DID standards.
 * @see https://datatracker.ietf.org/doc/html/rfc7518#section-3.1
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const JwsAlgorithms = {
	/**
	 * EdDSA signature algorithm using Ed25519 curve.
	 * Used by both DataIntegrityProof (eddsa-jcs-2022) and JsonWebSignature2020.
	 * @see https://www.w3.org/TR/vc-di-eddsa/
	 */
	EdDSA: "EdDSA"
} as const;

/**
 * JWS signature algorithms type.
 */
export type JwsAlgorithms = (typeof JwsAlgorithms)[keyof typeof JwsAlgorithms];
