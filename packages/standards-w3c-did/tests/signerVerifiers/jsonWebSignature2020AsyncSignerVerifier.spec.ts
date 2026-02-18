// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter } from "@twin.org/core";
import { Ed25519 } from "@twin.org/crypto";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { type IJwk, Jwk } from "@twin.org/web";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential.js";
import type { IJsonWebSignature2020Proof } from "../../src/models/IJsonWebSignature2020Proof.js";
import { JwsAlgorithms } from "../../src/models/jwsAlgorithms.js";
import { ProofTypes } from "../../src/models/proofTypes.js";
import { JsonWebSignature2020AsyncSignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020AsyncSignerVerifier.js";
import { JsonWebSignature2020SignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020SignerVerifier.js";
import { ProofHelper } from "../../src/utils/proofHelper.js";

describe("JsonWebSignature2020AsyncSignerVerifier", () => {
	beforeAll(() => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
	});

	test("Can create and verify a proof with async signing callback", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");
		const publicKey = Ed25519.publicKeyFromPrivateKey(privateKey);

		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "UniversityDegreeCredential"],
			issuer: {
				id: "https://example.com/issuer/123"
			},
			issuanceDate: "2020-03-10T04:24:12.164Z",
			credentialSubject: {
				id: "did:example:456",
				degree: {
					type: "BachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		// Create a signing callback that simulates vault signing
		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(privateKey, data);
		};

		const proof = await new JsonWebSignature2020AsyncSignerVerifier().createProofWithSigner(
			vc,
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		// Verify the proof has the expected structure
		expect(proof.type).toEqual("JsonWebSignature2020");
		expect(proof.created).toEqual("2023-02-24T23:36:38Z");
		expect(proof.jws).toBeDefined();
		expect(proof.jws).toContain("..");

		// Verify with async verifier
		const publicCryptoKey = await Jwk.fromEd25519Public(publicKey);
		const verified = await new JsonWebSignature2020AsyncSignerVerifier().verifyProof(
			vc,
			proof,
			publicCryptoKey
		);
		expect(verified).toEqual(true);
	});

	test("Async proof produces valid signature that can be verified", async () => {
		const privateKey: IJwk = {
			kty: "OKP",
			crv: "Ed25519",
			x: "CV-aGlld3nVdgnhoZK0D36Wk-9aIMlZjZOK2XhPMnkQ",
			d: "m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc",
			alg: "EdDSA"
		};

		const publicKey: IJwk = {
			kty: "OKP",
			crv: "Ed25519",
			x: "CV-aGlld3nVdgnhoZK0D36Wk-9aIMlZjZOK2XhPMnkQ",
			alg: "EdDSA"
		};

		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "UniversityDegreeCredential"],
			issuer: {
				id: "https://example.com/issuer/123"
			},
			issuanceDate: "2020-03-10T04:24:12.164Z",
			credentialSubject: {
				id: "did:example:456",
				degree: {
					type: "BachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const rawKeys = await Jwk.toRaw(privateKey);

		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(rawKeys.privateKey as Uint8Array, data);
		};

		const asyncProof = await new JsonWebSignature2020AsyncSignerVerifier().createProofWithSigner(
			vc,
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		// Verify with both sync and async verifiers
		const verifiedByAsync = await new JsonWebSignature2020AsyncSignerVerifier().verifyProof(
			vc,
			asyncProof,
			publicKey
		);
		expect(verifiedByAsync).toEqual(true);

		const verifiedBySync = await new JsonWebSignature2020SignerVerifier().verifyProof(
			vc,
			asyncProof,
			publicKey
		);
		expect(verifiedBySync).toEqual(true);
	});

	test("ProofHelper.createProofWithSigner works with JsonWebSignature2020", async () => {
		const privateKey: IJwk = {
			kty: "OKP",
			crv: "Ed25519",
			x: "CV-aGlld3nVdgnhoZK0D36Wk-9aIMlZjZOK2XhPMnkQ",
			d: "m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc",
			alg: "EdDSA"
		};

		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "UniversityDegreeCredential"],
			issuer: {
				id: "https://example.com/issuer/123"
			},
			issuanceDate: "2020-03-10T04:24:12.164Z",
			credentialSubject: {
				id: "did:example:456",
				degree: {
					type: "BachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const rawKeys = await Jwk.toRaw(privateKey);

		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(rawKeys.privateKey as Uint8Array, data);
		};

		const signedProof = (await ProofHelper.createProofWithSigner(
			ProofTypes.JsonWebSignature2020,
			vc,
			unsignedProof,
			signCallback
		)) as IJsonWebSignature2020Proof;

		expect(signedProof.jws).toBeDefined();
		expect(signedProof.jws).toContain("..");
	});

	test("Can create hash using async signer verifier", async () => {
		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1"
			],
			id: "http://example.edu/credentials/1872",
			type: ["VerifiableCredential", "AlumniCredential"],
			issuer: "https://example.edu/issuers/565049",
			issuanceDate: "2010-01-01T19:23:24Z",
			credentialSubject: {
				id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
				alumniOf: {
					id: "did:example:c276e12ec21ebfeb1f712ebc6f1"
				},
				name: "John Doe"
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:web:wizard.lab.gaia-x.eu:api:credentials:2d37wbGvQzbAQ84yRouh2m2vBKkN8s5AfH9Q75HZRCUQmJW7yAVSNKzjJj6gcjE2mDNDUHCichXWdMH3S2c8AaDLm3kXmf5R8DLGYw32T5A1uaxbEy5W28Tv5BDbSrdfGtCUpjC8RHpZAMFTDET3g3QkFTRuY8rVrR7zjeSWa54WeRLKutKhyR5EbdyNYPWHxm8TEWWuMchWEBnXQNjrntGUEP8csESeaTBCupBqxSJ8WM4fBRwFvJKmCLwJzkpo2LkbWEzpGRy3GvedQ1AFLEe3JCdcgs5b2u5ubgT3pgte71JebuiAPP8jJN3tUAhk9CAPXpu2EHvCuy4C1CuYK5pnMKwRHtRsA2w7i1Gn7EzMrRjiU5AeFS3KLMbbHNLVvuqCeW9Gx93tUfJdQx2Z88obsrH9sWYSCDFExmJE9w31uricJmQcb9815znjuupWrGb3jy32qX7Vvt9uya7keewZuAQ1TjyctKDcqWA44JuKVURtdtykEUuKoUZHBasJ4vaBaBfmy7MBkhFsqPRVp9MdkTwVGv5mHxV6SayZRaN7WoJCWu7Jphb3uB4oEXQXsP4EShYzyqUM8yTrrFtHADiGWDw8CZ86jEvfA7n#JWK2020",
			{ created: "2024-01-31T16:00:45.490Z" }
		);

		const proof = await new JsonWebSignature2020AsyncSignerVerifier().createHash(
			vc,
			unsignedProof as IJsonWebSignature2020Proof
		);

		expect(proof).toEqual(
			new Uint8Array([
				55, 65, 185, 111, 65, 195, 125, 156, 53, 221, 213, 247, 53, 123, 167, 52, 9, 236, 251, 6,
				24, 190, 151, 253, 230, 73, 252, 250, 46, 255, 100, 101, 231, 107, 88, 242, 100, 232, 239,
				48, 27, 133, 60, 53, 39, 83, 78, 22, 125, 208, 226, 183, 13, 12, 127, 219, 4, 156, 221, 119,
				166, 252, 229, 225
			])
		);
	});

	test("Async proof JWS format is correct (manual RFC 7515 implementation)", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");

		const vc: IDidVerifiableCredential & IJsonLdNodeObject = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				"https://www.w3.org/2018/credentials/examples/v1",
				"https://w3id.org/security/suites/jws-2020/v1"
			],
			id: "http://example.gov/credentials/3732",
			type: ["VerifiableCredential", "UniversityDegreeCredential"],
			issuer: {
				id: "https://example.com/issuer/123"
			},
			issuanceDate: "2020-03-10T04:24:12.164Z",
			credentialSubject: {
				id: "did:example:456",
				degree: {
					type: "BachelorDegree",
					name: "Bachelor of Science and Arts"
				}
			}
		};

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const signCallback = async (data: Uint8Array, algorithm: string): Promise<Uint8Array> => {
			expect(algorithm).toBe(JwsAlgorithms.EdDSA);
			return Ed25519.sign(privateKey, data);
		};

		const proof = await new JsonWebSignature2020AsyncSignerVerifier().createProofWithSigner(
			vc,
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		// JWS should have format: header..signature (detached payload)
		expect(proof.jws).toBeDefined();
		expect(proof.jws).toMatch(/^[\w-]+\.\.[\w-]+$/);

		// Header should decode to the expected value
		const [headerB64] = (proof.jws ?? "").split("..");
		const headerJson = JSON.parse(Converter.bytesToUtf8(Converter.base64UrlToBytes(headerB64)));
		expect(headerJson).toEqual({
			alg: "EdDSA",
			crit: ["b64"],
			b64: false
		});
	});
});
