// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinition } from "@3sixty/data-json-ld";
import type { DublinCoreContexts } from "@3sixty/standards-dublin-core";
import type { FoafContexts } from "@3sixty/standards-foaf";
import type { OdrlContexts } from "@3sixty/standards-w3c-odrl";
import type { DcatContexts } from "./dcatContexts.js";

/**
 * The DCAT JSON-LD context type.
 * Supports the DCAT context URL or arrays with additional context definitions.
 */
export type DcatContextType = {
	dcat: typeof DcatContexts.Namespace;
	dcterms: typeof DublinCoreContexts.NamespaceTerms;
	odrl?: typeof OdrlContexts.Namespace;
	foaf?: typeof FoafContexts.Namespace;
} & IJsonLdContextDefinition;
