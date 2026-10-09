// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { GeneralError, Is } from "@3sixty/core";
import { JsonLdProcessor } from "@3sixty/data-json-ld";
import dataspaceProtocol2024 from "./ldContexts/dataspace-protocol-2024.json" with { type: "json" };
import dataspaceProtocol2025 from "./ldContexts/dataspace-protocol-2025.json" with { type: "json" };
import dcmitype from "./ldContexts/dublin-core-dcmitype.json" with { type: "json" };
import dcTerms from "./ldContexts/dublin-core-terms.json" with { type: "json" };
import foaf from "./ldContexts/foaf.json" with { type: "json" };
import gs1epcis from "./ldContexts/gs1-epcis.json" with { type: "json" };
import gs1vocab from "./ldContexts/gs1-vocab.json" with { type: "json" };
import odrlDataspaceProtocol from "./ldContexts/odrl-dataspace-protocol.json" with { type: "json" };
import schemaOrg from "./ldContexts/schema.org.json" with { type: "json" };
import unCefactD23B from "./ldContexts/un-cefact-d23b.json" with { type: "json" };
import w3cActivityStreams from "./ldContexts/w3c-activity-streams.json" with { type: "json" };
import w3cDataIntegrityV2 from "./ldContexts/w3c-data-integrity-v2.json" with { type: "json" };
import w3cDcat from "./ldContexts/w3c-dcat.json" with { type: "json" };
import w3cOdrl from "./ldContexts/w3c-odrl.json" with { type: "json" };
import w3cRdf from "./ldContexts/w3c-rdf.json" with { type: "json" };
import w3cVcV1 from "./ldContexts/w3c-vc-data-model-v1.json" with { type: "json" };
import w3cVcV2 from "./ldContexts/w3c-vc-data-model-v2.json" with { type: "json" };
import w3idCidV1 from "./ldContexts/w3id-cid-v1.json" with { type: "json" };
import w3idDidV1 from "./ldContexts/w3id-did-v1.json" with { type: "json" };
import w3idEd25519V1 from "./ldContexts/w3id-ed25519-v1.json" with { type: "json" };
import w3idJwsV1 from "./ldContexts/w3id-jws-2020-v1.json" with { type: "json" };
import w3idMultiKeyV1 from "./ldContexts/w3id-multikey-v1.json" with { type: "json" };

/**
 * Map of all the ld contexts by their URL.
 */
export const LD_CONTEXTS: { [id: string]: unknown } = {
	// Data Space Protocol
	"https://w3id.org/dspace/2024/1/": dataspaceProtocol2024,
	"https://w3id.org/dspace/2024/1/context.json": dataspaceProtocol2024,
	"https://w3id.org/dspace/2024/1/context.jsonld": dataspaceProtocol2024,
	"https://w3id.org/dspace/2025/1/": dataspaceProtocol2025,
	"https://w3id.org/dspace/2025/1/context.json": dataspaceProtocol2025,
	"https://w3id.org/dspace/2025/1/context.jsonld": dataspaceProtocol2025,
	"https://schema.3sixty.global/dataspace-protocol/": dataspaceProtocol2025,
	"https://w3id.org/dspace/2025/1/odrl-profile.jsonld": odrlDataspaceProtocol,

	// DCSA does not have JSON-LD context definitions

	// Dublin Core
	"http://purl.org/dc/terms/": dcTerms,
	"http://purl.org/dc/dcmitype/": dcmitype,
	"https://schema.3sixty.global/dublin-core/terms.jsonld": dcTerms,
	"https://schema.3sixty.global/dublin-core/dcmitype.jsonld": dcmitype,

	// Foaf
	"https://schema.3sixty.global/foaf/": foaf,
	"https://schema.3sixty.global/foaf/types.jsonld": foaf,
	"http://xmlns.com/foaf/0.1/": foaf,

	// GS1 EPCIS
	"https://ref.gs1.org/epcis/": gs1epcis,
	"https://ref.gs1.org/epcis": gs1epcis,
	"https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld": gs1epcis,

	// GS1 Vocab
	"https://gs1.org/voc/": gs1vocab,
	"https://ref.gs1.org/voc/data/gs1Voc.jsonld": gs1vocab,

	// schema.org
	"https://schema.org": schemaOrg,
	"http://schema.org": schemaOrg,
	"https://schema.org/": schemaOrg,
	"http://schema.org/": schemaOrg,
	"https://schema.org/docs/jsonldcontext.jsonld": schemaOrg,

	// UN/CEFACT
	"https://vocabulary.uncefact.org": unCefactD23B,
	"https://vocabulary.uncefact.org/": unCefactD23B,
	"https://vocabulary.uncefact.org/unece-context.jsonld": unCefactD23B,
	"https://vocabulary.uncefact.org/unece-context-D23B.jsonld": unCefactD23B,

	// W3C Activity Streams
	"https://www.w3.org/ns/activitystreams#": w3cActivityStreams,
	"https://www.w3.org/ns/activitystreams": w3cActivityStreams,
	"https://www.w3.org/ns/activitystreams.jsonld": w3cActivityStreams,

	// W3C DCAT
	"http://www.w3.org/ns/dcat#": w3cDcat,
	"https://www.w3.org/ns/dcat.jsonld": w3cDcat,
	"http://www.w3.org/ns/dcat.jsonld": w3cDcat,

	// W3C DID
	"https://www.w3.org/ns/did/v1": w3idDidV1,
	"https://www.w3.org/2018/credentials/v1": w3cVcV1,
	"https://www.w3.org/ns/credentials/v2": w3cVcV2,
	"https://w3id.org/security/suites/jws-2020/v1": w3idJwsV1,
	"https://w3id.org/security/suites/ed25519-2020/v1": w3idEd25519V1,
	"https://w3id.org/security/data-integrity/v2": w3cDataIntegrityV2,
	"https://www.w3.org/ns/cid/v1": w3idCidV1,
	"https://w3id.org/security/multikey/v1": w3idMultiKeyV1,

	// W3C ODRL
	"http://www.w3.org/ns/odrl/2/": w3cOdrl,
	"http://www.w3.org/ns/odrl.jsonld": w3cOdrl,

	// W3C RDF
	"https://schema.3sixty.global/w3c-rdf/": w3cRdf,
	"https://schema.3sixty.global/w3c-rdf/types.jsonld": w3cRdf,
	"http://www.w3.org/2000/01/rdf-schema#": w3cRdf
};

/**
 * Add all the contexts to the document cache.
 * @returns A promise that resolves when all contexts have been added to the cache.
 */
export async function addAllContextsToDocumentCache(): Promise<void> {
	for (const url in LD_CONTEXTS) {
		await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
	}
}

/**
 * Add a context to the document cache.
 * @param url The URL of the context to add to the cache.
 * @returns A promise that resolves when the context has been added to the cache.
 * @throws GeneralError if the context URL is not found in the known contexts map.
 */
export async function addContextToDocumentCache(url: string): Promise<void> {
	if (Is.empty(LD_CONTEXTS[url])) {
		throw new GeneralError("ldContext", "missing", { url });
	}
	await JsonLdProcessor.documentCacheAdd(url, LD_CONTEXTS[url]);
}
