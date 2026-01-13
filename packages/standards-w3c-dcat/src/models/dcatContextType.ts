// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinition } from "@twin.org/data-json-ld";
import type { DublinCoreContexts } from "@twin.org/standards-dublin-core";
import type { FoafContexts } from "@twin.org/standards-foaf";
import type { OdrlContexts } from "@twin.org/standards-w3c-odrl";
import type { DcatContexts } from "./dcatContexts.js";

/**
 * The DCAT JSON-LD context type.
 * Supports the DCAT context URL or arrays with additional context definitions.
 */
export type DcatContextType = {
	dcat: typeof DcatContexts.ContextRoot;
	dcterms: typeof DublinCoreContexts.ContextTerms;
	odrl?: typeof OdrlContexts.Namespace;
	foaf?: typeof FoafContexts.ContextRoot;
} & IJsonLdContextDefinition;
