// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { JsonLdHelper, JsonLdProcessor, type IJsonLdDocument } from "@twin.org/data-json-ld";
import { FetchHelper, HttpMethod } from "@twin.org/web";

describe("standards-schema-org", () => {
	const supportsLinkDiscovery =
		"tryDiscoverAlternateJsonLdContextUrl" in
		(JsonLdProcessor as unknown as { [key: string]: unknown });

	function urlFromFetchInput(input: RequestInfo | URL): string {
		if (typeof input === "string") {
			return input;
		}
		if (input instanceof URL) {
			return input.href;
		}
		return input.url;
	}

	function sameUrl(a: string, b: string): boolean {
		if (a === b) {
			return true;
		}
		try {
			return new URL(a).href === new URL(b).href;
		} catch {
			return false;
		}
	}

	beforeEach(() => {
		FetchHelper.clearCache();
		JsonLdProcessor.setRedirects([]);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	test.skipIf(!supportsLinkDiscovery)(
		"resolves schema.org context via Link discovery without registerRedirects",
		async () => {
			const schemaNamespaceUrl = "https://schema.org";
			const schemaContextUrl = "https://schema.org/docs/jsonldcontext.jsonld";

			vi.stubGlobal(
				"fetch",
				vi.fn(async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
					const url = urlFromFetchInput(input);
					const method = (init?.method ?? HttpMethod.GET).toUpperCase();

					if (method === HttpMethod.HEAD && sameUrl(url, schemaNamespaceUrl)) {
						return new Response(null, {
							status: 200,
							headers: new Headers({
								link: `<${schemaContextUrl}>; rel="alternate"; type="application/ld+json"`
							})
						});
					}

					if (method === HttpMethod.GET && sameUrl(url, schemaNamespaceUrl)) {
						return new Response("<!doctype html><title>schema.org</title>", {
							status: 200,
							headers: new Headers({
								"content-type": "text/html; charset=utf-8"
							})
						});
					}

					if (method === HttpMethod.GET && sameUrl(url, schemaContextUrl)) {
						return new Response(
							JSON.stringify({
								"@context": {
									Person: "http://schema.org/Person",
									name: "http://schema.org/name"
								}
							}),
							{
								status: 200,
								headers: new Headers({
									"content-type": "application/ld+json"
								})
							}
						);
					}

					return new Response(JSON.stringify({ error: "not found" }), {
						status: 404,
						headers: new Headers({
							"content-type": "application/json"
						})
					});
				})
			);

			const doc: IJsonLdDocument = {
				"@context": schemaNamespaceUrl,
				"@type": "Person",
				name: "Ada"
			};

			const expanded = await JsonLdHelper.expand(doc);
			expect(expanded[0]["http://schema.org/name"]).toEqual([{ "@value": "Ada" }]);
		}
	);
});
