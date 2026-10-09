// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { JsonLdProcessor } from "@3sixty/data-json-ld";
import {
	LD_CONTEXTS,
	addAllContextsToDocumentCache,
	addContextToDocumentCache
} from "../src/ldContexts.js";

describe("standards-ld-contexts", () => {
	test("LD_CONTEXTS contains expected well-known context URLs", () => {
		expect(LD_CONTEXTS["https://www.w3.org/ns/credentials/v2"]).toBeDefined();
		expect(LD_CONTEXTS["https://www.w3.org/2018/credentials/v1"]).toBeDefined();
		expect(LD_CONTEXTS["https://schema.org"]).toBeDefined();
		expect(LD_CONTEXTS["http://www.w3.org/ns/odrl/2/"]).toBeDefined();
		expect(LD_CONTEXTS["https://www.w3.org/ns/did/v1"]).toBeDefined();
	});

	test("addAllContextsToDocumentCache populates cache for all contexts", async () => {
		await addAllContextsToDocumentCache();
		const expanded = await JsonLdProcessor.expand({
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Test"
		});
		expect(expanded).toBeDefined();
		expect(expanded.length).toBeGreaterThan(0);
	});

	test("addContextToDocumentCache populates cache for a specific URL", async () => {
		await addContextToDocumentCache("https://www.w3.org/ns/credentials/v2");
		const expanded = await JsonLdProcessor.expand({
			"@context": "https://www.w3.org/ns/credentials/v2",
			"@type": "VerifiableCredential"
		});
		expect(expanded).toBeDefined();
		expect(expanded.length).toBeGreaterThan(0);
	});

	test("addContextToDocumentCache throws for an unknown URL", async () => {
		await expect(
			addContextToDocumentCache("https://unknown.example.org/context.jsonld")
		).rejects.toBeDefined();
	});
});
