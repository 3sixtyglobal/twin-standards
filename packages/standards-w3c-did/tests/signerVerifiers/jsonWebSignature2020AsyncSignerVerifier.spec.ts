// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter } from "@twin.org/core";
import { Ed25519 } from "@twin.org/crypto";
import { JsonLdHelper } from "@twin.org/data-json-ld";
import { addAllContextsToDocumentCache } from "@twin.org/standards-ld-contexts";
import { type IJwk, Jwk } from "@twin.org/web";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential.js";
import type { IJsonWebSignature2020Proof } from "../../src/models/IJsonWebSignature2020Proof.js";
import { JwsAlgorithms } from "../../src/models/jwsAlgorithms.js";
import { ProofTypes } from "../../src/models/proofTypes.js";
import { JsonWebSignature2020AsyncSignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020AsyncSignerVerifier.js";
import { JsonWebSignature2020SignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020SignerVerifier.js";
import { ProofHelper } from "../../src/utils/proofHelper.js";

const DEGREE_CONTEXT = {
	UniversityDegreeCredential: "https://example.org/vocab#UniversityDegreeCredential",
	BachelorDegree: "https://example.org/vocab#BachelorDegree",
	degree: "https://example.org/vocab#degree",
	name: "https://example.org/vocab#name"
};

const ALUMNI_CONTEXT = {
	AlumniCredential: "https://example.org/vocab#AlumniCredential",
	alumniOf: "https://example.org/vocab#alumniOf",
	name: "https://example.org/vocab#name"
};

describe("JsonWebSignature2020AsyncSignerVerifier", () => {
	beforeAll(async () => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
		await addAllContextsToDocumentCache();
	});

	test("Can create and verify a proof with async signing callback", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");
		const publicKey = Ed25519.publicKeyFromPrivateKey(privateKey);

		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				DEGREE_CONTEXT,
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
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		expect(proof.type).toEqual("JsonWebSignature2020");
		expect(proof.created).toEqual("2023-02-24T23:36:38Z");
		expect(proof.jws).toBeDefined();
		expect(proof.jws).toContain("..");

		const publicCryptoKey = await Jwk.fromEd25519Public(publicKey);
		const verified = await new JsonWebSignature2020AsyncSignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(vc),
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

		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				DEGREE_CONTEXT,
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
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		const verifiedByAsync = await new JsonWebSignature2020AsyncSignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(vc),
			asyncProof,
			publicKey
		);
		expect(verifiedByAsync).toEqual(true);

		const verifiedBySync = await new JsonWebSignature2020SignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(vc),
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

		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				DEGREE_CONTEXT,
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
			JsonLdHelper.toNodeObject(vc),
			unsignedProof,
			signCallback
		)) as IJsonWebSignature2020Proof;

		expect(signedProof.jws).toBeDefined();
		expect(signedProof.jws).toContain("..");
	});

	test("Can create hash using async signer verifier", async () => {
		const vc: IDidVerifiableCredential = {
			"@context": ["https://www.w3.org/2018/credentials/v1", ALUMNI_CONTEXT],
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
			"did:example:123456789abcdefghi#keys-1",
			{ created: "2024-01-31T16:00:45.490Z" }
		);

		const proof = await new JsonWebSignature2020AsyncSignerVerifier().createHash(
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof
		);

		expect(proof).toBeDefined();
		expect(proof.length).toBe(64);
	});

	test("Async proof JWS format is correct (manual RFC 7515 implementation)", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");

		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				DEGREE_CONTEXT,
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
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof,
			signCallback
		);

		expect(proof.jws).toBeDefined();
		expect(proof.jws).toMatch(/^[\w-]+\.\.[\w-]+$/);

		const [headerB64] = (proof.jws ?? "").split("..");
		const headerJson = JSON.parse(Converter.bytesToUtf8(Converter.base64UrlToBytes(headerB64)));
		expect(headerJson).toEqual({
			alg: "EdDSA",
			crit: ["b64"],
			b64: false
		});
	});
});
