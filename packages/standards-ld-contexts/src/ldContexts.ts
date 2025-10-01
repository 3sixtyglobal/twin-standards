// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Is } from "@twin.org/core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import dcmitype from "./ldContexts/dublin-core-dcmitype.json";
import dcTerms from "./ldContexts/dublin-core-terms.json";
import federatedCatalogueTerms from "./ldContexts/federated-catalogue-terms.json";
import gaiaX2411 from "./ldContexts/gaia-x-v24.11.json";
import idsContractNegotiation from "./ldContexts/ids-contract-negotiation.json";
import schemaOrg from "./ldContexts/schema.org.json";
import unCefact from "./ldContexts/un-cefact-vocab.json";
import w3cActivityStreams from "./ldContexts/w3c-activity-streams.json";
import w3cOdrl from "./ldContexts/w3c-odrl.json";
import w3cVc from "./ldContexts/w3c-vc-data-model-v2.json";
import w3IdJws from "./ldContexts/w3id-jws-2020-v1.json";

/**
 * Map of all the ld contexts by their URL.
 */
export const LD_CONTEXTS: { [id: string]: unknown } = {
	// schema.org
	"https://schema.org": schemaOrg,
	"http://schema.org": schemaOrg,
	"https://schema.org/docs/jsonldcontext.jsonld": schemaOrg,

	// Gaia-X
	"https://w3id.org/gaia-x/development": gaiaX2411,
	"https://w3id.org/gaia-x/development#": gaiaX2411,

	"https://schema.twindev.org/gaia-x-loire/": gaiaX2411,

	// W3C ODRL
	"http://www.w3.org/ns/odrl.jsonld": w3cOdrl,

	// W3C Activity Streams
	"https://www.w3.org/ns/activitystreams#": w3cActivityStreams,

	// W3C Credentials
	"https://www.w3.org/ns/credentials/v2": w3cVc,
	"https://w3id.org/security/suites/jws-2020/v1": w3IdJws,

	// UN/CEFACT
	"https://vocabulary.uncefact.org": unCefact,

	// Dublin Core
	"http://purl.org/dc/terms/": dcTerms,
	"http://purl.org/dc/dcmitype/": dcmitype,
	"https://schema.twindev.org/dublin-core/terms.jsonld": dcTerms,
	"https://schema.twindev.org/dublin-core/dcmitype.jsonld": dcmitype,

	// IDS Contract Negotiation
	"https://w3id.org/dspace/2024/1/context.json": idsContractNegotiation,
	"https://w3id.org/dspace/2025/1/context.jsonld": idsContractNegotiation,

	// Federated Catalogue
	"https://schema.twindev.org/federated-catalogue/types.jsonld": federatedCatalogueTerms
};

/**
 * Add all the contexts to the document cache.
 */
export async function addAllContextsToDocumentCache(): Promise<void> {
	for (const url in LD_CONTEXTS) {
		await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
	}
}

/**
 * Add a context to the document cache.
 * @param url The URL of the context to add to the cache.
 */
export async function addContextToDocumentCache(url: string): Promise<void> {
	if (Is.empty(LD_CONTEXTS[url])) {
		throw new GeneralError("ldContext", "missing", { url });
	}
	await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
}
