// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Is } from "@twin.org/core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import dataspaceProtocol from "./ldContexts/dataspace-protocol.json" with { type: "json" };
import dcmitype from "./ldContexts/dublin-core-dcmitype.json" with { type: "json" };
import dcTerms from "./ldContexts/dublin-core-terms.json" with { type: "json" };
import foaf from "./ldContexts/foaf.json" with { type: "json" };
import gaiaX2411 from "./ldContexts/gaia-x-v24.11.json" with { type: "json" };
import odrlDataspaceProtocol from "./ldContexts/odrl-dataspace-protocol.json" with { type: "json" };
import schemaOrg from "./ldContexts/schema.org.json" with { type: "json" };
import unCefact from "./ldContexts/un-cefact-vocab.json" with { type: "json" };
import w3cActivityStreams from "./ldContexts/w3c-activity-streams.json" with { type: "json" };
import w3cDcat from "./ldContexts/w3c-dcat.json" with { type: "json" };
import w3cOdrl from "./ldContexts/w3c-odrl.json" with { type: "json" };
import w3cRdf from "./ldContexts/w3c-rdf.json" with { type: "json" };
import w3cVc from "./ldContexts/w3c-vc-data-model-v2.json" with { type: "json" };
import w3IdJws from "./ldContexts/w3id-jws-2020-v1.json" with { type: "json" };

/**
 * Map of all the ld contexts by their URL.
 */
export const LD_CONTEXTS: { [id: string]: unknown } = {
	// schema.org
	"https://schema.org": schemaOrg,
	"http://schema.org": schemaOrg,
	"https://schema.org/docs/jsonldcontext.jsonld": schemaOrg,

	// Gaia-X
	"https://w3id.org/gaia-x/2411": gaiaX2411,
	"https://w3id.org/gaia-x/2411#": gaiaX2411,

	"https://schema.twindev.org/gaia-x-loire/": gaiaX2411,
	"https://schema.twindev.org/gaia-x-loire/types.jsonld": gaiaX2411,

	// W3C DCAT
	"http://www.w3.org/ns/dcat#": w3cDcat,
	"https://www.w3.org/ns/dcat.jsonld": w3cDcat,
	"http://www.w3.org/ns/dcat.jsonld": w3cDcat,

	// W3C ODRL
	"http://www.w3.org/ns/odrl.jsonld": w3cOdrl,

	// W3C Activity Streams
	"https://www.w3.org/ns/activitystreams#": w3cActivityStreams,
	"https://www.w3.org/ns/activitystreams": w3cActivityStreams,

	// W3C Credentials
	"https://www.w3.org/ns/credentials/v2": w3cVc,
	"https://w3id.org/security/suites/jws-2020/v1": w3IdJws,

	// UN/CEFACT
	"https://vocabulary.uncefact.org": unCefact,
	"https://vocabulary.uncefact.org/unece-context.jsonld": unCefact,
	"https://vocabulary.uncefact.org/unece-context-D23B.jsonld": unCefact,

	// Dublin Core
	"http://purl.org/dc/terms/": dcTerms,
	"http://purl.org/dc/dcmitype/": dcmitype,
	"https://schema.twindev.org/dublin-core/terms.jsonld": dcTerms,
	"https://schema.twindev.org/dublin-core/dcmitype.jsonld": dcmitype,

	// Data Space Protocol
	"https://w3id.org/dspace/2024/1/context.json": dataspaceProtocol,
	"https://w3id.org/dspace/2025/1/context.jsonld": dataspaceProtocol,

	"https://w3id.org/dspace/2025/1/odrl-profile.jsonld": odrlDataspaceProtocol,

	// Foaf
	"https://schema.twindev.org/foaf/": foaf,
	"https://schema.twindev.org/foaf/types.jsonld": foaf,
	"http://xmlns.com/foaf/0.1/": foaf,

	// W3C RDF
	"https://schema.twindev.org/w3c-rdf/": w3cRdf,
	"https://schema.twindev.org/w3c-rdf/types.jsonld": w3cRdf,
	"http://www.w3.org/2000/01/rdf-schema#": w3cRdf
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
