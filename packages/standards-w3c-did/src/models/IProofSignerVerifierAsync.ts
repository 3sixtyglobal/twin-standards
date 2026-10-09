// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { IJwk } from "@3sixty/web";
import type { IProof } from "./IProof.js";

/**
 * Interface describing an async proof signer and verifier.
 * Supports signing with callbacks to prevent private key exposure.
 */
export interface IProofSignerVerifierAsync {
	/**
	 * Create a proof with an async signing callback.
	 * This method prevents private key exposure by delegating signing to a secure callback.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signCallback Async callback that signs data with a private key from secure storage.
	 * Receives data and JWS algorithm for vault-side validation.
	 * @returns The created proof.
	 */
	createProofWithSigner(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IProof,
		signCallback: (data: Uint8Array, algorithm: string) => Promise<Uint8Array>
	): Promise<IProof>;

	/**
	 * Verify a proof for the given data.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IProof,
		verifyKey: IJwk
	): Promise<boolean>;

	/**
	 * Create a hash for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The unsigned proof.
	 * @returns The created hash.
	 */
	createHash(unsecuredDocument: IJsonLdNodeObject, unsignedProof: IProof): Promise<Uint8Array>;
}
