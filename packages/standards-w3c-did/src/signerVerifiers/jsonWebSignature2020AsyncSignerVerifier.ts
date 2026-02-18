// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter, Guards, ObjectHelper } from "@twin.org/core";
import { JsonLdProcessor, type IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import type { IJwk } from "@twin.org/web";
import { JsonWebSignature2020SignerVerifier } from "./jsonWebSignature2020SignerVerifier.js";
import { DidContexts } from "../models/didContexts.js";
import type { IJsonWebSignature2020Proof } from "../models/IJsonWebSignature2020Proof.js";
import type { IProofSignerVerifierAsync } from "../models/IProofSignerVerifierAsync.js";
import { JwsAlgorithms } from "../models/jwsAlgorithms.js";

/**
 * Helper methods for creating and verifying JsonWebSignature2020 proofs with async signing callbacks.
 * This implementation creates JWS signatures manually per RFC 7515 to support async signing callbacks.
 */
export class JsonWebSignature2020AsyncSignerVerifier implements IProofSignerVerifierAsync {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<JsonWebSignature2020AsyncSignerVerifier>();

	/**
	 * The underlying sync signer verifier for hash and verify operations.
	 * @internal
	 */
	private readonly _syncSignerVerifier: JsonWebSignature2020SignerVerifier;

	/**
	 * Create a new instance of JsonWebSignature2020AsyncSignerVerifier.
	 */
	constructor() {
		this._syncSignerVerifier = new JsonWebSignature2020SignerVerifier();
	}

	/**
	 * Create a proof with an async signing callback.
	 * This method prevents private key exposure by delegating signing to a secure callback.
	 * Implements JWS Compact Serialization per RFC 7515.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signCallback Async callback that signs data with a private key from secure storage.
	 * @returns The created proof.
	 */
	public async createProofWithSigner(
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IJsonWebSignature2020Proof,
		signCallback: (data: Uint8Array, algorithm: string) => Promise<Uint8Array>
	): Promise<IJsonWebSignature2020Proof> {
		Guards.object<IJsonLdNodeObject>(
			JsonWebSignature2020AsyncSignerVerifier.CLASS_NAME,
			nameof(unsecuredDocument),
			unsecuredDocument
		);
		Guards.object<IJsonWebSignature2020Proof>(
			JsonWebSignature2020AsyncSignerVerifier.CLASS_NAME,
			nameof(unsignedProof),
			unsignedProof
		);
		Guards.function(
			JsonWebSignature2020AsyncSignerVerifier.CLASS_NAME,
			nameof(signCallback),
			signCallback
		);

		const unsecuredDocumentClone = ObjectHelper.clone(unsecuredDocument);

		unsecuredDocumentClone["@context"] = JsonLdProcessor.combineContexts(
			unsecuredDocumentClone["@context"],
			DidContexts.ContextSecurityJws2020
		);

		// Use the sync verifier to create the hash
		const hash = await this.createHash(unsecuredDocument, unsignedProof);

		// Create JWS manually per RFC 7515 (Compact Serialization)
		// Format: BASE64URL(UTF8(JWS Protected Header)) || '.' || BASE64URL(JWS Payload) || '.' || BASE64URL(JWS Signature)

		// JWS Protected Header for EdDSA with detached payload
		const header = {
			alg: "EdDSA",
			crit: ["b64"],
			b64: false
		};

		const headerJson = JSON.stringify(header);
		const headerBase64 = Converter.bytesToBase64Url(Converter.utf8ToBytes(headerJson));

		// Create signing input: header.payload (detached payload means payload is the hash)
		const signingInput = Converter.utf8ToBytes(`${headerBase64}.`);
		const dataToSign = new Uint8Array(signingInput.length + hash.length);
		dataToSign.set(signingInput, 0);
		dataToSign.set(hash, signingInput.length);

		// Sign with the callback (key stays in secure storage)
		// Pass JWS algorithm for vault validation
		const signature = await signCallback(dataToSign, JwsAlgorithms.EdDSA);

		// Construct JWS: header..signature (empty payload section for detached content)
		const signatureBase64 = Converter.bytesToBase64Url(signature);
		const jws = `${headerBase64}..${signatureBase64}`;

		const signedProof = ObjectHelper.clone(unsignedProof);

		signedProof["@context"] = unsecuredDocumentClone[
			"@context"
		] as IJsonWebSignature2020Proof["@context"];

		signedProof.jws = jws;

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
		signedProof: IJsonWebSignature2020Proof,
		verifyKey: IJwk
	): Promise<boolean> {
		// Delegate to the sync implementation (verification doesn't need the private key)
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
		unsignedProof: IJsonWebSignature2020Proof
	): Promise<Uint8Array> {
		// Delegate to the sync implementation
		return this._syncSignerVerifier.createHash(unsecuredDocument, unsignedProof);
	}
}
