// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter, Guards, ObjectHelper } from "@twin.org/core";
import { JsonLdProcessor, type IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import type { IJwk } from "@twin.org/web";
import { DataIntegrityProofSignerVerifier } from "./dataIntegrityProofSignerVerifier.js";
import { DidContexts } from "../models/didContexts.js";
import type { IDataIntegrityProof } from "../models/IDataIntegrityProof.js";
import type { IProof } from "../models/IProof.js";
import type { IProofSignerVerifierAsync } from "../models/IProofSignerVerifierAsync.js";
import { JwsAlgorithms } from "../models/jwsAlgorithms.js";

/**
 * Helper methods for creating and verifying Data Integrity proofs with async signing callbacks.
 * @see https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022
 */
export class DataIntegrityProofAsyncSignerVerifier implements IProofSignerVerifierAsync {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<DataIntegrityProofAsyncSignerVerifier>();

	/**
	 * The underlying sync signer verifier for hash and verify operations.
	 * @internal
	 */
	private readonly _syncSignerVerifier: DataIntegrityProofSignerVerifier;

	/**
	 * Create a new instance of DataIntegrityProofAsyncSignerVerifier.
	 */
	constructor() {
		this._syncSignerVerifier = new DataIntegrityProofSignerVerifier();
	}

	/**
	 * Create a proof with an async signing callback.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signCallback Async callback that signs data with a private key from secure storage.
	 * @returns The created proof.
	 */
	public async createProofWithSigner(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IDataIntegrityProof,
		signCallback: (data: Uint8Array, algorithm: string) => Promise<Uint8Array>
	): Promise<IProof> {
		Guards.object<IJsonLdNodeObject>(
			DataIntegrityProofAsyncSignerVerifier.CLASS_NAME,
			nameof(unsecuredDocument),
			unsecuredDocument
		);
		Guards.object<IProof>(
			DataIntegrityProofAsyncSignerVerifier.CLASS_NAME,
			nameof(unsignedProof),
			unsignedProof
		);
		Guards.function(
			DataIntegrityProofAsyncSignerVerifier.CLASS_NAME,
			nameof(signCallback),
			signCallback
		);

		const unsecuredDocumentClone = ObjectHelper.clone(unsecuredDocument);

		const signedProof = ObjectHelper.clone(unsignedProof);

		unsecuredDocumentClone["@context"] = JsonLdProcessor.combineContexts(
			unsecuredDocumentClone["@context"],
			DidContexts.ContextDataIntegrity
		);

		signedProof["@context"] = unsecuredDocumentClone["@context"] as IDataIntegrityProof["@context"];

		// Use the sync verifier to create the hash
		const combinedHash = await this.createHash(unsecuredDocument, unsignedProof);

		// Sign with the callback (key stays in secure storage)
		// Pass JWS algorithm for vault validation
		const signature = await signCallback(combinedHash, JwsAlgorithms.EdDSA);

		signedProof.proofValue = `z${Converter.bytesToBase58(signature)}`;

		return signedProof;
	}

	/**
	 * Verify a proof for the given data.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	public async verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IDataIntegrityProof,
		verifyKey: IJwk
	): Promise<boolean> {
		// Delegate to the sync implementation
		return this._syncSignerVerifier.verifyProof(securedDocument, signedProof, verifyKey);
	}

	/**
	 * Create a hash for the given data.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The unsigned proof.
	 * @returns The created hash.
	 */
	public async createHash(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IDataIntegrityProof
	): Promise<Uint8Array> {
		// Delegate to the sync implementation
		return this._syncSignerVerifier.createHash(unsecuredDocument, unsignedProof);
	}
}
