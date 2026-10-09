// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Guards, Is } from "@3sixty/core";
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";
import { nameof } from "@3sixty/nameof";
import type { IJwk } from "@3sixty/web";
import { DidContexts } from "../models/didContexts.js";
import { DidCryptoSuites } from "../models/didCryptoSuites.js";
import type { IProof } from "../models/IProof.js";
import type { IProofSignerVerifier } from "../models/IProofSignerVerifier.js";
import type { IProofSignerVerifierAsync } from "../models/IProofSignerVerifierAsync.js";
import { ProofTypes } from "../models/proofTypes.js";
import { DataIntegrityProofAsyncSignerVerifier } from "../signerVerifiers/dataIntegrityProofAsyncSignerVerifier.js";
import { DataIntegrityProofSignerVerifier } from "../signerVerifiers/dataIntegrityProofSignerVerifier.js";
import { JsonWebSignature2020AsyncSignerVerifier } from "../signerVerifiers/jsonWebSignature2020AsyncSignerVerifier.js";
import { JsonWebSignature2020SignerVerifier } from "../signerVerifiers/jsonWebSignature2020SignerVerifier.js";

/**
 * Helper methods for creating and verifying proofs.
 */
export class ProofHelper {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<ProofHelper>();

	/**
	 * Create a signer verifier.
	 * @param proofType The type of proof to create.
	 * @returns The created signer verifier.
	 * @throws GeneralError if the proof type is not supported.
	 */
	public static createSignerVerifier(proofType: ProofTypes): IProofSignerVerifier {
		Guards.arrayOneOf(
			ProofHelper.CLASS_NAME,
			nameof(proofType),
			proofType,
			Object.values(ProofTypes)
		);

		let signerVerifier: IProofSignerVerifier | undefined;
		if (proofType === ProofTypes.DataIntegrityProof) {
			signerVerifier = new DataIntegrityProofSignerVerifier();
		} else if (proofType === ProofTypes.JsonWebSignature2020) {
			signerVerifier = new JsonWebSignature2020SignerVerifier();
		}

		if (Is.empty(signerVerifier)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "unsupportedProofType", { proofType });
		}
		return signerVerifier;
	}

	/**
	 * Create an async signer verifier that supports signing with callbacks.
	 * This enables signing without exposing private keys.
	 * @param proofType The type of proof to create.
	 * @returns The created async signer verifier.
	 * @throws GeneralError if the proof type is not supported.
	 */
	public static createAsyncSignerVerifier(proofType: ProofTypes): IProofSignerVerifierAsync {
		Guards.arrayOneOf(
			ProofHelper.CLASS_NAME,
			nameof(proofType),
			proofType,
			Object.values(ProofTypes)
		);

		let signerVerifier: IProofSignerVerifierAsync | undefined;
		if (proofType === ProofTypes.DataIntegrityProof) {
			signerVerifier = new DataIntegrityProofAsyncSignerVerifier();
		} else if (proofType === ProofTypes.JsonWebSignature2020) {
			signerVerifier = new JsonWebSignature2020AsyncSignerVerifier();
		}

		if (Is.empty(signerVerifier)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "unsupportedProofType", { proofType });
		}
		return signerVerifier;
	}

	/**
	 * Create a proof for the given data.
	 * @param proofType The type of proof to create.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signKey The key to sign the proof with.
	 * @returns The created proof.
	 */
	public static async createProof(
		proofType: ProofTypes,
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IProof,
		signKey: IJwk
	): Promise<IProof> {
		Guards.arrayOneOf(
			ProofHelper.CLASS_NAME,
			nameof(proofType),
			proofType,
			Object.values(ProofTypes)
		);
		Guards.object<IJsonLdNodeObject>(
			ProofHelper.CLASS_NAME,
			nameof(unsecuredDocument),
			unsecuredDocument
		);
		Guards.object<IJsonLdNodeObject>(ProofHelper.CLASS_NAME, nameof(unsignedProof), unsignedProof);
		Guards.object<IJwk>(ProofHelper.CLASS_NAME, nameof(signKey), signKey);
		return ProofHelper.createSignerVerifier(proofType).createProof(
			unsecuredDocument,
			unsignedProof,
			signKey
		);
	}

	/**
	 * Create a proof with an async signing callback.
	 * This method prevents private key exposure by delegating signing to a secure callback.
	 * @param proofType The type of proof to create.
	 * @param unsecuredDocument The data to create the proof for.
	 * @param unsignedProof The proof options.
	 * @param signCallback Async callback that signs data with a private key from secure storage. The algorithm parameter indicates the expected signing algorithm (e.g., "EdDSA") to enable validation.
	 * @returns The created proof.
	 */
	public static async createProofWithSigner(
		proofType: ProofTypes,
		unsecuredDocument: IJsonLdNodeObject,
		unsignedProof: IProof,
		signCallback: (data: Uint8Array, algorithm: string) => Promise<Uint8Array>
	): Promise<IProof> {
		Guards.arrayOneOf(
			ProofHelper.CLASS_NAME,
			nameof(proofType),
			proofType,
			Object.values(ProofTypes)
		);
		Guards.object<IJsonLdNodeObject>(
			ProofHelper.CLASS_NAME,
			nameof(unsecuredDocument),
			unsecuredDocument
		);
		Guards.object<IJsonLdNodeObject>(ProofHelper.CLASS_NAME, nameof(unsignedProof), unsignedProof);
		Guards.function(ProofHelper.CLASS_NAME, nameof(signCallback), signCallback);

		return ProofHelper.createAsyncSignerVerifier(proofType).createProofWithSigner(
			unsecuredDocument,
			unsignedProof,
			signCallback
		);
	}

	/**
	 * Verify a proof for the given data.
	 * @param securedDocument The credential to verify.
	 * @param signedProof The proof to verify.
	 * @param verifyKey The public key to verify the proof with.
	 * @returns True if the credential was verified.
	 */
	public static async verifyProof(
		securedDocument: IJsonLdNodeObject,
		signedProof: IProof,
		verifyKey: IJwk
	): Promise<boolean> {
		Guards.object<IJsonLdNodeObject>(
			ProofHelper.CLASS_NAME,
			nameof(securedDocument),
			securedDocument
		);
		Guards.object<IJsonLdNodeObject>(ProofHelper.CLASS_NAME, nameof(signedProof), signedProof);
		Guards.stringValue(ProofHelper.CLASS_NAME, nameof(signedProof.type), signedProof.type);
		Guards.object<IJwk>(ProofHelper.CLASS_NAME, nameof(verifyKey), verifyKey);

		const signerVerifier = ProofHelper.createSignerVerifier(signedProof.type);

		return signerVerifier.verifyProof(securedDocument, signedProof, verifyKey);
	}

	/**
	 * Create an unsigned proof.
	 * @param proofType The type of proof to create.
	 * @param verificationMethodId The verification method id.
	 * @param otherParams Other parameters for the proof.
	 * @returns The created proof.
	 * @throws GeneralError if the proof type is not supported.
	 */
	public static createUnsignedProof(
		proofType: ProofTypes,
		verificationMethodId: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		otherParams?: any
	): IProof {
		let proof: IProof | undefined;
		if (proofType === ProofTypes.DataIntegrityProof) {
			proof = {
				"@context": DidContexts.ContextDataIntegrity,
				type: ProofTypes.DataIntegrityProof,
				cryptosuite: DidCryptoSuites.EdDSAJcs2022,
				created: new Date(Date.now()).toISOString(),
				verificationMethod: verificationMethodId,
				proofPurpose: "assertionMethod",
				...otherParams
			};
		} else if (proofType === ProofTypes.JsonWebSignature2020) {
			proof = {
				"@context": DidContexts.ContextSecurityJws2020,
				type: ProofTypes.JsonWebSignature2020,
				created: new Date(Date.now()).toISOString(),
				verificationMethod: verificationMethodId,
				proofPurpose: "assertionMethod",
				...otherParams
			};
		}
		if (Is.empty(proof)) {
			throw new GeneralError(ProofHelper.CLASS_NAME, "unsupportedProofType", { proofType });
		}
		return proof;
	}
}
