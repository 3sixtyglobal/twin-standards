// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { type IValidationFailure, Is } from "@twin.org/core";
import { DataTypeHandlerFactory, DataTypeHelper, JsonSchemaHelper } from "@twin.org/data-core";
import { JsonLdDataTypes } from "@twin.org/data-json-ld";
import * as Validators from "../../src/compiled/validators.js";
import { DidDataTypes } from "../../src/dataTypes/didDataTypes.js";
import { DidContexts } from "../../src/models/didContexts.js";
import { DidTypes } from "../../src/models/didTypes.js";
import DidDocumentSchema from "../../src/schemas/DidDocument.json" with { type: "json" };
import DidVerifiableCredentialSchema from "../../src/schemas/DidVerifiableCredential.json" with { type: "json" };

const DID_DOCUMENT = {
	"@context": "https://www.w3.org/ns/did/v1",
	id: "did:example:123456789abcdefghi",
	authentication: [
		{
			id: "did:example:123456789abcdefghi#keys-1",
			type: "Ed25519VerificationKey2020",
			controller: "did:example:123456789abcdefghi",
			publicKeyMultibase: "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
		}
	],
	service: [
		{
			id: "did:example:123456789abcdefghi#linked-domain",
			type: "LinkedDomains",
			serviceEndpoint: "https://bar.example.com"
		}
	]
};

const VERIFIABLE_CREDENTIAL = {
	"@context": "https://www.w3.org/ns/credentials/v2",
	id: "http://university.example/credentials/3732",
	type: ["VerifiableCredential", "ExampleDegreeCredential"],
	issuer: "https://university.example/issuers/565049",
	validFrom: "2010-01-01T00:00:00Z",
	credentialSubject: {
		id: "did:example:ebfeb1f712ebc6f1c276e12ec21"
	}
};

describe("Compiled validators", () => {
	beforeAll(() => {
		JsonLdDataTypes.registerTypes();
		DidDataTypes.registerTypes();
	});

	test("should export a validator for every DID schema", () => {
		expect(Object.keys(Validators)).toHaveLength(23);
		expect(Object.values(Validators).every(v => Is.function(v))).toEqual(true);
	});

	test.each([
		["a valid document", DID_DOCUMENT, true],
		["a document without a context", { id: DID_DOCUMENT.id }, false],
		["a document with a numeric id", { ...DID_DOCUMENT, id: 123 }, false],
		["a document with an invalid service", { ...DID_DOCUMENT, service: [{ id: "x" }] }, false],
		[
			"a document with an invalid context element",
			{ ...DID_DOCUMENT, "@context": ["https://www.w3.org/ns/did/v1", 5] },
			false
		]
	])(
		"should match JsonSchemaHelper for DidDocument with %s",
		async (description, data, expected) => {
			const failures = await JsonSchemaHelper.validate(DidDocumentSchema, data);

			expect(Validators.CompiledDidDocument(data)).toEqual(expected);
			expect(failures.length === 0).toEqual(expected);
			expect(JsonSchemaHelper.validateCompiled(Validators.CompiledDidDocument, data)).toEqual(
				failures
			);
		}
	);

	test.each([
		DidContexts.Namespace + DidTypes.Document,
		DidContexts.JsonSchemaNamespace + DidDocumentSchema.title
	])("should register the compiled validator for %s", async dataType => {
		const handler = DataTypeHandlerFactory.get(dataType);

		expect(await handler.compiledValidator?.()).toEqual(Validators.CompiledDidDocument);
	});

	test.each([
		DidContexts.NamespaceVCv1 + DidTypes.VerifiableCredential,
		DidContexts.NamespaceVCv2 + DidTypes.VerifiableCredential
	])("should register the compiled credential validator for %s", async dataType => {
		const handler = DataTypeHandlerFactory.get(dataType);

		expect(await handler.compiledValidator?.()).toEqual(Validators.CompiledDidVerifiableCredential);
	});

	test("should validate a data type with the compiled validator", async () => {
		const failures: IValidationFailure[] = [];

		const isValid = await DataTypeHelper.validate(
			"doc",
			DidContexts.Namespace + DidTypes.Document,
			{ id: 123 },
			failures
		);

		expect(isValid).toEqual(false);
		expect(failures.length).toBeGreaterThan(0);
	});

	test.each([
		["a valid credential", VERIFIABLE_CREDENTIAL, true],
		["a credential with a numeric type", { ...VERIFIABLE_CREDENTIAL, type: 123 }, false],
		["an empty object", {}, false]
	])(
		"should match JsonSchemaHelper for DidVerifiableCredential with %s",
		async (description, data, expected) => {
			const failures = await JsonSchemaHelper.validate(DidVerifiableCredentialSchema, data);

			expect(Validators.CompiledDidVerifiableCredential(data)).toEqual(expected);
			expect(failures.length === 0).toEqual(expected);
		}
	);
});
