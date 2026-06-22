// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Converter, ObjectHelper } from "@twin.org/core";
import { Ed25519 } from "@twin.org/crypto";
import { JsonLdHelper } from "@twin.org/data-json-ld";
import { addAllContextsToDocumentCache } from "@twin.org/standards-ld-contexts";
import { type IJwk, Jwk } from "@twin.org/web";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential.js";
import type { IJsonWebSignature2020Proof } from "../../src/models/IJsonWebSignature2020Proof.js";
import { ProofTypes } from "../../src/models/proofTypes.js";
import { JsonWebSignature2020SignerVerifier } from "../../src/signerVerifiers/jsonWebSignature2020SignerVerifier.js";
import { ProofHelper } from "../../src/utils/proofHelper.js";

describe("JsonWebSignature2020SignerVerifier", () => {
	beforeAll(async () => {
		Date.now = vi.fn(() => new Date("2024-01-31T16:00:45.490Z").getTime());
		await addAllContextsToDocumentCache();
	});

	test("Can create a JSON Web Signature 2020 Hash", async () => {
		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				{
					AlumniCredential: "https://example.org/vocab#AlumniCredential",
					alumniOf: "https://example.org/vocab#alumniOf",
					name: "https://example.org/vocab#name"
				}
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
			"did:example:123456789abcdefghi#keys-1",
			{ created: "2024-01-31T16:00:45.490Z" }
		);

		const proof = await new JsonWebSignature2020SignerVerifier().createHash(
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof
		);

		expect(proof).toBeDefined();
		expect(proof.length).toBe(64);
	});

	test("Can create and verify a JSON Web Signature 2020", async () => {
		const privateKey = Converter.base64UrlToBytes("m5N7gTItgWz6udWjuqzJsqX-vksUnxJrNjD5OilScBc");
		const publicKey = Ed25519.publicKeyFromPrivateKey(privateKey);

		const vc: IDidVerifiableCredential = {
			"@context": [
				"https://www.w3.org/2018/credentials/v1",
				{
					UniversityDegreeCredential: "https://example.org/vocab#UniversityDegreeCredential",
					BachelorDegree: "https://example.org/vocab#BachelorDegree",
					degree: "https://example.org/vocab#degree",
					name: "https://example.org/vocab#name"
				},
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

		const privateCryptoKey = await Jwk.fromEd25519Private(privateKey);

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			"did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
			{ created: "2023-02-24T23:36:38Z" }
		);

		const proof = await new JsonWebSignature2020SignerVerifier().createProof(
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof,
			privateCryptoKey
		);

		const publicCryptoKey = await Jwk.fromEd25519Public(publicKey);
		const verified = await new JsonWebSignature2020SignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(vc),
			proof,
			publicCryptoKey
		);
		expect(verified).toEqual(true);
	});

	// Note: examples/v1 context replaced with inline term definitions; values recomputed with local contexts only.
	test("Can create and verify a JSON Web Signature 2020 - W3C Test Vector", async () => {
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
				{
					UniversityDegreeCredential: "https://example.org/vocab#UniversityDegreeCredential",
					BachelorDegree: "https://example.org/vocab#BachelorDegree",
					degree: "https://example.org/vocab#degree",
					name: "https://example.org/vocab#name"
				},
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

		const proofDetails = {
			created: "2019-12-11T03:50:55Z",
			proofPurpose: "assertionMethod"
		};

		const verificationMethod =
			"https://example.com/issuer/123#ovsDKYBjFemIy8DVhc-w2LSi8CvXMw2AYDzHj04yxkc";

		const unsignedProof = ProofHelper.createUnsignedProof(
			ProofTypes.JsonWebSignature2020,
			verificationMethod,
			proofDetails
		);

		const proof = await new JsonWebSignature2020SignerVerifier().createProof(
			JsonLdHelper.toNodeObject(vc),
			unsignedProof as IJsonWebSignature2020Proof,
			privateKey
		);

		const publicJwk = ObjectHelper.clone(privateKey);
		delete publicJwk.d;

		const verified = await new JsonWebSignature2020SignerVerifier().verifyProof(
			JsonLdHelper.toNodeObject(vc),
			proof,
			publicJwk
		);
		expect(verified).toEqual(true);
	});
});
