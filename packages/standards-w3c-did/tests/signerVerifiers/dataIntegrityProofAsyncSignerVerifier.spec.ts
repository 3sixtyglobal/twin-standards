// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter } from "@twin.org/core";
import { Ed25519 } from "@twin.org/crypto";
import { JsonLdHelper } from "@twin.org/data-json-ld";
import { Jwk } from "@twin.org/web";
import { DidContexts } from "../../src/models/didContexts.js";
import { DidTypes } from "../../src/models/didTypes.js";
import type { IDataIntegrityProof } from "../../src/models/IDataIntegrityProof.js";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential.js";
import type { IMultikey } from "../../src/models/IMultikey.js";
import { JwsAlgorithms } from "../../src/models/jwsAlgorithms.js";
import { ProofTypes } from "../../src/models/proofTypes.js";
import { DataIntegrityProofAsyncSignerVerifier } from "../../src/signerVerifiers/dataIntegrityProofAsyncSignerVerifier.js";
import { DataIntegrityProofSignerVerifier } from "../../src/signerVerifiers/dataIntegrityProofSignerVerifier.js";
import { MultikeyHelper } from "../../src/utils/multikeyHelper.js";
import { ProofHelper } from "../../src/utils/proofHelper.js";

describe("DataIntegrityProofAsyncSignerVerifier", () => {
	beforeAll(() => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
	});

	test("Can create and verify a proof with async signing callback", async () => {
		const unsecuredDocument: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.DataIntegrityProof,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const multikey: IMultikey = {
			"@context": DidContexts.ContextControllerIdentifiers,
			type: DidTypes.Multikey,
			publicKeyMultibase: "z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			secretKeyMultibase: "z3u2en7t5LR2WtQH5PfFqMqwVHBeXouLzo6haApm8XHqvjxq"
		};

		const jwk = MultikeyHelper.toJwk(multikey);
		const rawKeys = await Jwk.toRaw(jwk);

		// Create a signing callback that simulates vault signing
		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(rawKeys.privateKey as Uint8Array, data);
		};

		const signedProof = await new DataIntegrityProofAsyncSignerVerifier().createProofWithSigner(
			JsonLdHelper.toNodeObject(unsecuredDocument),
			unsignedProof as IDataIntegrityProof,
			signCallback
		);

		expect(signedProof).toEqual({
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2",
				"https://w3id.org/security/data-integrity/v2"
			],
			type: "DataIntegrityProof",
			cryptosuite: "eddsa-jcs-2022",
			created: "2023-02-24T23:36:38Z",
			verificationMethod:
				"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			proofPurpose: "assertionMethod",
			proofValue:
				"z51o7LRzWyV3pbQRwenn6FvFo8wMMkG3WPdZyxXVtG2ANQ1PnWDgnT43bTxBAu9kUEt5yn42rWGR9Ry86j1U9s6Ev"
		});

		// Verify with async verifier
		const verified = await new DataIntegrityProofAsyncSignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(unsecuredDocument),
			signedProof as IDataIntegrityProof,
			jwk
		);

		expect(verified).toEqual(true);
	});

	test("Async proof is equivalent to sync proof", async () => {
		const unsecuredDocument: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.DataIntegrityProof,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const multikey: IMultikey = {
			"@context": DidContexts.ContextControllerIdentifiers,
			type: DidTypes.Multikey,
			publicKeyMultibase: "z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			secretKeyMultibase: "z3u2en7t5LR2WtQH5PfFqMqwVHBeXouLzo6haApm8XHqvjxq"
		};

		const jwk = MultikeyHelper.toJwk(multikey);
		const rawKeys = await Jwk.toRaw(jwk);

		// Create sync proof
		const syncProof = await new DataIntegrityProofSignerVerifier().createProof(
			JsonLdHelper.toNodeObject(unsecuredDocument),
			unsignedProof as IDataIntegrityProof,
			jwk
		);

		// Create async proof with callback
		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(rawKeys.privateKey as Uint8Array, data);
		};

		const asyncProof = await new DataIntegrityProofAsyncSignerVerifier().createProofWithSigner(
			JsonLdHelper.toNodeObject(unsecuredDocument),
			unsignedProof as IDataIntegrityProof,
			signCallback
		);

		// Both proofs should be identical
		expect(asyncProof).toEqual(syncProof);
	});

	test("ProofHelper.createProofWithSigner works correctly", async () => {
		const unsecuredDocument: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.DataIntegrityProof,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const multikey: IMultikey = {
			"@context": DidContexts.ContextControllerIdentifiers,
			type: DidTypes.Multikey,
			publicKeyMultibase: "z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			secretKeyMultibase: "z3u2en7t5LR2WtQH5PfFqMqwVHBeXouLzo6haApm8XHqvjxq"
		};

		const jwk = MultikeyHelper.toJwk(multikey);
		const rawKeys = await Jwk.toRaw(jwk);

		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(rawKeys.privateKey as Uint8Array, data);
		};

		const signedProof = (await ProofHelper.createProofWithSigner(
			ProofTypes.DataIntegrityProof,
			JsonLdHelper.toNodeObject(unsecuredDocument),
			unsignedProof,
			signCallback
		)) as IDataIntegrityProof;

		expect(signedProof.proofValue).toBeDefined();
		expect(signedProof.proofValue).toEqual(
			"z51o7LRzWyV3pbQRwenn6FvFo8wMMkG3WPdZyxXVtG2ANQ1PnWDgnT43bTxBAu9kUEt5yn42rWGR9Ry86j1U9s6Ev"
		);
	});

	test("Can create hash using async signer verifier", async () => {
		const unsecuredDocument: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/ns/credentials/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			id: "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
			type: ["VerifiableCredential", "AlumniCredential"],
			name: "Alumni Credential",
			description: "A minimum viable example of an Alumni Credential.",
			issuer: "https://vc.example/issuers/5678",
			validFrom: "2023-01-01T00:00:00Z",
			credentialSubject: {
				id: "did:example:abcdefgh",
				alumniOf: "The School of Examples"
			}
		};

		const unsignedProof: IDataIntegrityProof = {
			"@context": [
				"https://w3id.org/security/data-integrity/v2",
				"https://www.w3.org/ns/credentials/examples/v2"
			],
			type: "DataIntegrityProof",
			cryptosuite: "eddsa-jcs-2022",
			created: "2023-02-24T23:36:38Z",
			verificationMethod:
				"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			proofPurpose: "assertionMethod"
		};

		const hash = await new DataIntegrityProofAsyncSignerVerifier().createHash(
			JsonLdHelper.toNodeObject(unsecuredDocument),
			unsignedProof
		);

		expect(Converter.bytesToHex(hash)).toEqual(
			"c324fcd0e6e75b471d89d91dcbf1d948e68f5cd471992b171b108d92ddb235df879ddc62dc1dac7a9888ac5c19465fe3fba6e89acdd163f26c91f01c63d511ed"
		);
	});
});
